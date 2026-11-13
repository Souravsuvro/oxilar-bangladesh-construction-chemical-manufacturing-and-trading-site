/**
 * Lead delivery to inbox via Formspree (or any compatible form endpoint).
 *
 * Setup:
 * 1. Create a form at https://formspree.io (free tier is enough)
 * 2. Set Vercel env VITE_FORMSPREE_ID to the form id (e.g. xyzabcde)
 *    OR set VITE_LEAD_ENDPOINT to a full URL (Formspree / Getform / custom webhook)
 * 3. Redeploy. Until configured, leads still save to localStorage + WhatsApp path.
 */

export type LeadPayload = {
  type: "contact" | "rfq";
  name: string;
  phone: string;
  topic?: string;
  detail?: string;
  lines?: { name: string; sku: string; pack: string; qty: number; note?: string }[];
  at: string;
};

function endpoint(): string | null {
  const full = (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined)?.trim();
  if (full && /^https?:\/\//i.test(full)) return full;
  const id = (import.meta.env.VITE_FORMSPREE_ID as string | undefined)?.trim();
  if (id && id.length > 3 && !/X{3,}/i.test(id)) {
    return `https://formspree.io/f/${id}`;
  }
  return null;
}

export function leadsConfigured(): boolean {
  return Boolean(endpoint());
}

export async function sendLead(payload: LeadPayload): Promise<{ ok: boolean; emailed: boolean; error?: string }> {
  // Always keep a local copy for the visitor / offline recovery
  try {
    const key = payload.type === "rfq" ? "oxilar-rfq-sent" : "oxilar-contact";
    const prev = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
    localStorage.setItem(key, JSON.stringify([payload, ...prev].slice(0, 30)));
  } catch {
    /* ignore quota */
  }

  const url = endpoint();
  if (!url) {
    return { ok: true, emailed: false };
  }

  const body: Record<string, string> = {
    _subject: payload.type === "rfq" ? `[Oxilar RFQ] ${payload.name}` : `[Oxilar Contact] ${payload.name}`,
    type: payload.type,
    name: payload.name,
    phone: payload.phone,
    at: payload.at,
  };
  if (payload.topic) body.topic = payload.topic;
  if (payload.detail) body.detail = payload.detail;
  if (payload.lines?.length) {
    body.lines = payload.lines
      .map((l) => `${l.name} (${l.sku}) · ${l.pack} × ${l.qty}${l.note ? ` — ${l.note}` : ""}`)
      .join("\n");
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, emailed: false, error: text || res.statusText };
    }
    return { ok: true, emailed: true };
  } catch (e) {
    return { ok: false, emailed: false, error: e instanceof Error ? e.message : "network" };
  }
}

export function trackLead(method: string, extra?: Record<string, unknown>) {
  try {
    const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    g?.("event", "generate_lead", { method, ...extra });
  } catch {
    /* no-op */
  }
}
