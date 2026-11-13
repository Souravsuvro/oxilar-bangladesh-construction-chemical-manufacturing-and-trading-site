import { useState, type FormEvent } from "react";
import { useRfq } from "@/lib/rfq-store";
import { useI18n } from "@/lib/i18n";
import { sendLead, trackLead } from "@/lib/leads";

function buildWhatsAppUrl(name: string, phone: string, lines: { name: string; sku: string; pack: string; qty: number; note?: string }[]) {
  const list = lines
    .map((l) => `• ${l.name} (${l.sku}) · ${l.pack} × ${l.qty}${l.note ? ` — ${l.note}` : ""}`)
    .join("\n");
  const text =
    `Oxilar RFQ request\nName: ${name}\nPhone: ${phone}\n\nLines:\n${list || "(no lines)"}\n\nPlease share availability and delivery timeline.`;
  return `https://wa.me/8801960198313?text=${encodeURIComponent(text)}`;
}

export function RfqDrawer() {
  const open = useRfq((s) => s.open);
  const setOpen = useRfq((s) => s.setOpen);
  const lines = useRfq((s) => s.lines);
  const setQty = useRfq((s) => s.setQty);
  const remove = useRfq((s) => s.remove);
  const clear = useRfq((s) => s.clear);
  const { lang } = useI18n();
  const bn = lang === "bn";
  const [sent, setSent] = useState(false);
  const [emailed, setEmailed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [waUrl, setWaUrl] = useState("");

  if (!open) return null;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const snapshot = [...lines];
    const result = await sendLead({
      type: "rfq",
      name,
      phone,
      lines: snapshot,
      at: new Date().toISOString(),
    });
    setBusy(false);
    setWaUrl(buildWhatsAppUrl(name, phone, snapshot));
    setEmailed(result.emailed);
    setSent(true);
    clear();
    trackLead("rfq_basket", { item_count: snapshot.length, emailed: result.emailed });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink/50" role="dialog" aria-modal="true" aria-labelledby="rfq-title">
      <button className="hidden flex-1 md:block" aria-label="Close" onClick={() => setOpen(false)} />
      <div className="flex h-full w-full flex-col bg-card shadow-2xl md:max-w-md">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <h2 id="rfq-title" className="font-display text-lg font-semibold">{bn ? "আরএফকিউ বাস্কেট" : "RFQ basket"}</h2>
          <button type="button" className="min-h-11 px-3 text-sm font-semibold text-brand" onClick={() => setOpen(false)}>
            {bn ? "বন্ধ" : "Close"}
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-auto p-4">
          {lines.length === 0 && !sent && (
            <div className="space-y-2 text-sm text-muted">
              <p>{bn ? "এখনও কোনো লাইন নেই। পণ্য বা ক্যালকুলেটর থেকে যোগ করুন।" : "No lines yet. Add a product or import a calculator result."}</p>
              <p className="text-ink-soft">{bn ? "দ্রুত উত্তরের জন্য হোয়াটসঅ্যাপ বা হটলাইন ব্যবহার করুন।" : "For a same-day reply, use WhatsApp or the hotline after you send."}</p>
            </div>
          )}
          {lines.map((l) => (
            <div key={l.id} className="rounded-lg border border-line p-3">
              <p className="font-semibold">{l.name}</p>
              <p className="text-xs text-muted">{l.sku} · {l.pack}</p>
              {l.note && <p className="mt-1 text-sm text-ink-soft">{l.note}</p>}
              <div className="mt-2 flex items-center gap-2">
                <label className="sr-only" htmlFor={`qty-${l.id}`}>{bn ? "পরিমাণ" : "Quantity"}</label>
                <input
                  id={`qty-${l.id}`}
                  type="number"
                  min={1}
                  value={l.qty}
                  onChange={(e) => setQty(l.id, Number(e.target.value))}
                  className="h-11 w-20 rounded-md border border-line px-2 text-ink"
                />
                <button type="button" className="min-h-11 text-sm text-sky" onClick={() => remove(l.id)}>
                  {bn ? "সরান" : "Remove"}
                </button>
              </div>
            </div>
          ))}
          {sent && (
            <div className="space-y-3 rounded-lg bg-brand-soft p-4 text-sm text-brand-deep">
              <p className="font-semibold">
                {emailed
                  ? bn
                    ? "আরএফকিউ ইনবক্সে পাঠানো হয়েছে"
                    : "RFQ sent to our inbox"
                  : bn
                    ? "আরএফকিউ সংরক্ষিত হয়েছে"
                    : "RFQ saved on this device"}
              </p>
              <p>{bn ? "দ্রুত সাড়া পেতে হোয়াটসঅ্যাপেও পাঠান — লাইনগুলো আগে থেকে ভরা থাকবে।" : "Also send on WhatsApp for a faster reply — lines stay pre-filled."}</p>
              {waUrl && (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky font-semibold text-paper"
                >
                  {bn ? "হোয়াটসঅ্যাপে পাঠান" : "Send on WhatsApp"}
                </a>
              )}
              <a href="tel:+8801960198313" className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-ink font-semibold text-paper">
                {bn ? "হটলাইন কল করুন" : "Call hotline"}
              </a>
            </div>
          )}
        </div>
        {!sent && (
          <form onSubmit={submit} className="space-y-2 border-t border-line p-4">
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={bn ? "নাম / প্রকল্প" : "Name / project"} className="h-12 w-full rounded-md border border-line px-3 text-ink" />
            <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={bn ? "মোবাইল নম্বর" : "Mobile number"} className="h-12 w-full rounded-md border border-line px-3 text-ink" inputMode="tel" />
            <button disabled={lines.length === 0 || busy} className="h-12 w-full rounded-full bg-brand font-semibold text-paper disabled:opacity-40" type="submit">
              {busy ? (bn ? "পাঠানো হচ্ছে…" : "Sending…") : bn ? "আরএফকিউ পাঠান" : "Send RFQ"}
            </button>
            <p className="text-center text-xs text-muted">{bn ? "পাঠানোর পর হোয়াটসঅ্যাপ অপশন পাবেন" : "After send you can forward the same list on WhatsApp"}</p>
          </form>
        )}
      </div>
    </div>
  );
}
