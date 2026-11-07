import { useState, type FormEvent } from "react";
import { useRfq } from "@/lib/rfq-store";
import { useI18n } from "@/lib/i18n";

export function RfqDrawer() {
  const open = useRfq((s) => s.open);
  const setOpen = useRfq((s) => s.setOpen);
  const lines = useRfq((s) => s.lines);
  const setQty = useRfq((s) => s.setQty);
  const remove = useRfq((s) => s.remove);
  const clear = useRfq((s) => s.clear);
  const { lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!open) return null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { name, phone, lines, at: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem("oxilar-rfq-sent") || "[]") as unknown[];
    localStorage.setItem("oxilar-rfq-sent", JSON.stringify([payload, ...prev].slice(0, 20)));
    setSent(true);
    clear();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-ink/50" role="dialog" aria-modal="true">
      <button className="hidden flex-1 md:block" aria-label="Close" onClick={() => setOpen(false)} />
      <div className="flex h-full w-full flex-col bg-card shadow-2xl md:max-w-md">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <h2 className="font-display text-lg font-semibold">{lang === "bn" ? "আরএফকিউ বাস্কেট" : "RFQ basket"}</h2>
          <button type="button" className="min-h-11 px-3 text-sm font-semibold text-brand" onClick={() => setOpen(false)}>
            {lang === "bn" ? "বন্ধ" : "Close"}
          </button>
        </div>
        <div className="flex-1 space-y-3 overflow-auto p-4">
          {lines.length === 0 && !sent && (
            <p className="text-sm text-muted">{lang === "bn" ? "এখনও কোনো লাইন নেই। পণ্য বা ক্যালকুলেটর থেকে যোগ করুন।" : "No lines yet. Add a product or import a calculator result."}</p>
          )}
          {lines.map((l) => (
            <div key={l.id} className="rounded-lg border border-line p-3">
              <p className="font-semibold">{l.name}</p>
              <p className="text-xs text-muted">{l.sku} · {l.pack}</p>
              {l.note && <p className="mt-1 text-sm text-ink-soft">{l.note}</p>}
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="number"
                  min={1}
                  value={l.qty}
                  onChange={(e) => setQty(l.id, Number(e.target.value))}
                  className="h-11 w-20 rounded-md border border-line px-2"
                />
                <button type="button" className="min-h-11 text-sm text-sky" onClick={() => remove(l.id)}>
                  {lang === "bn" ? "সরান" : "Remove"}
                </button>
              </div>
            </div>
          ))}
          {sent && <p className="rounded-lg bg-brand-soft p-3 text-sm text-brand-deep">{lang === "bn" ? "আপনার আরএফকিউ এই ডিভাইসে সংরক্ষিত হয়েছে। আমাদের টিম হটলাইনে কল করতে পারে।" : "Your RFQ is saved on this device. Call the hotline if you need a same-day reply."}</p>}
        </div>
        <form onSubmit={submit} className="space-y-2 border-t border-line p-4">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={lang === "bn" ? "নাম" : "Name"} className="h-12 w-full rounded-md border border-line px-3" />
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={lang === "bn" ? "ফোন" : "Phone"} className="h-12 w-full rounded-md border border-line px-3" />
          <button disabled={lines.length === 0} className="h-12 w-full rounded-full bg-brand font-semibold text-paper disabled:opacity-40" type="submit">
            {lang === "bn" ? "আরএফকিউ পাঠান" : "Send RFQ"}
          </button>
        </form>
      </div>
    </div>
  );
}
