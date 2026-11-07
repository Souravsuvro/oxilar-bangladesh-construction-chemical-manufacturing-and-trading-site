import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, packLabels, products, type Category, type Pack } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { useRfq } from "@/lib/rfq-store";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Construction Chemicals & Waterproofing | Oxilar Bangladesh" },
      { name: "description", content: "Concrete admixtures, Oxilar Super-100 waterproofing, epoxy floors, grouts and coatings. 4L, 20L and drums." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { tx, lang, t } = useI18n();
  const add = useRfq((s) => s.add);
  const [cat, setCat] = useState<Category | "all">("all");
  const [pack, setPack] = useState<Pack | "all">("all");
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      products.filter((p) => {
        if (cat !== "all" && p.category !== cat) return false;
        if (pack !== "all" && !p.packs.includes(pack)) return false;
        const blob = `${p.sku} ${p.name.en} ${p.name.bn}`.toLowerCase();
        return blob.includes(q.toLowerCase());
      }),
    [cat, pack, q],
  );

  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{lang === "bn" ? "পণ্য ও প্যাক" : "Products and packs"}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {lang === "bn" ? "ক্যাটাগরি, সাইজ ও নাম দিয়ে ছাঁকুন। প্রতিটি কার্ড থেকে টিডিএস ও আরএফকিউ।" : "Filter by category, pack size and name. Each card opens the TDS path and the RFQ basket."}
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-2 lg:sticky lg:top-24 lg:self-start">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={lang === "bn" ? "খুঁজুন" : "Search"} className="mb-2 h-12 w-full rounded-md border border-line px-3" />
          {categories.map((c) => (
            <button key={c.id} type="button" onClick={() => setCat(c.id)} className={`block min-h-11 w-full rounded-lg px-3 text-left text-sm font-medium ${cat === c.id ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`}>
              {tx(c.label)}
            </button>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {(["all", "4L", "20L", "drum"] as const).map((p) => (
              <button key={p} type="button" onClick={() => setPack(p)} className={`min-h-11 rounded-full px-3 text-sm font-semibold ${pack === p ? "bg-sky text-paper" : "bg-card ring-1 ring-line"}`}>
                {p === "all" ? (lang === "bn" ? "সব প্যাক" : "All packs") : tx(packLabels[p])}
              </button>
            ))}
          </div>
        </aside>
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-line">
              <img src={p.image} alt="" className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-semibold text-sky">{p.sku}</p>
                <h2 className="text-xl font-semibold">{tx(p.name)}</h2>
                <p className="mt-1 flex-1 text-sm text-muted">{tx(p.short)}</p>
                <p className="mt-2 text-xs text-ink-soft">{p.packs.map((pk) => tx(packLabels[pk])).join(" · ")}</p>
                <div className="mt-4 flex gap-2">
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-paper px-3 text-sm font-semibold ring-1 ring-line">
                    {lang === "bn" ? "বিস্তারিত" : "Details"}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand px-3 text-sm font-semibold text-paper"
                    onClick={() => add({ sku: p.sku, name: p.name.en, pack: p.packs[0], note: "" })}
                  >
                    {t("addRfq")}
                  </button>
                </div>
              </div>
            </article>
          ))}
          {list.length === 0 && <p className="text-muted">{lang === "bn" ? "কোনো মিল নেই।" : "No matches."}</p>}
        </div>
      </div>
    </div>
  );
}
