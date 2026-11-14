import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, packLabels, products, type Category, type Pack } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { useRfq } from "@/lib/rfq-store";

const PACK_FILTERS: (Pack | "all")[] = ["all", "1L", "4L", "10L", "20L", "drum", "1kg", "25kg"];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Construction Chemicals & Waterproofing | Oxilar Bangladesh" },
      {
        name: "description",
        content:
          "Super-100, Damp Guard-400, Pre Cast Premium, Solid Bond, Rapid Bland and dust-control systems. Packs from 1L to 20L, drums and kg bags. RFQ for Bangladesh projects.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { tx, lang, t } = useI18n();
  const add = useRfq((s) => s.add);
  const setOpen = useRfq((s) => s.setOpen);
  const [cat, setCat] = useState<Category | "all">("all");
  const [pack, setPack] = useState<Pack | "all">("all");
  const [q, setQ] = useState("");
  const filtered = cat !== "all" || pack !== "all" || q.trim().length > 0;

  const list = useMemo(
    () =>
      products.filter((p) => {
        if (cat !== "all" && p.category !== cat) return false;
        if (pack !== "all" && !p.packs.includes(pack)) return false;
        const blob = `${p.sku} ${p.name.en} ${p.name.bn}`.toLowerCase();
        return blob.includes(q.toLowerCase().trim());
      }),
    [cat, pack, q],
  );
  function clearFilters() {
    setCat("all");
    setPack("all");
    setQ("");
  }

  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{lang === "bn" ? "পণ্য ও প্যাক" : "Products and packs"}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {lang === "bn"
          ? "ক্যাটাগরি, সাইজ ও নাম দিয়ে ছাঁকুন। কার্ডে ক্লিক করে বিস্তারিত পৃষ্ঠা খুলুন।"
          : "Filter by category, pack size and name. Open any card for the full product page."}
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-2 lg:sticky lg:top-24 lg:self-start" aria-label={lang === "bn" ? "ফিল্টার" : "Filters"}>
          <label className="sr-only" htmlFor="product-search">
            {lang === "bn" ? "পণ্য খুঁজুন" : "Search products"}
          </label>
          <input
            id="product-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={lang === "bn" ? "নাম বা SKU খুঁজুন" : "Search name or SKU"}
            className="mb-2 h-12 w-full rounded-md border border-line px-3 text-ink"
            autoComplete="off"
          />
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`block min-h-11 w-full rounded-lg px-3 text-left text-sm font-medium ${
                cat === c.id ? "bg-ink text-paper" : "bg-card ring-1 ring-line"
              }`}
              aria-pressed={cat === c.id}
            >
              {tx(c.label)}
            </button>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {PACK_FILTERS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPack(p)}
                className={`min-h-11 rounded-full px-3 text-sm font-semibold ${
                  pack === p ? "bg-sky text-paper" : "bg-card ring-1 ring-line"
                }`}
                aria-pressed={pack === p}
              >
                {p === "all" ? (lang === "bn" ? "সব প্যাক" : "All packs") : tx(packLabels[p])}
              </button>
            ))}
          </div>
          {filtered && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-2 min-h-11 w-full rounded-lg text-sm font-semibold text-brand hover:underline"
            >
              {lang === "bn" ? "ফিল্টার মুছুন" : "Clear filters"}
            </button>
          )}
        </aside>

        <div>
          <p className="mb-3 text-sm text-muted" aria-live="polite">
            {lang === "bn"
              ? `${list.length}টি পণ্য দেখানো হচ্ছে`
              : `Showing ${list.length} product${list.length === 1 ? "" : "s"}`}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {list.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-line transition hover:ring-brand"
              >
                <Link to="/products/$slug" params={{ slug: p.slug }} className="block">
                  <img
                    src={p.image}
                    alt={tx(p.name)}
                    className="h-44 w-full object-cover object-[center_30%]"
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-xs font-semibold text-sky">{p.sku}</p>
                  <Link to="/products/$slug" params={{ slug: p.slug }} className="group">
                    <h2 className="text-xl font-semibold group-hover:text-brand">{tx(p.name)}</h2>
                  </Link>
                  <p className="mt-1 flex-1 text-sm text-muted">{tx(p.short)}</p>
                  <p className="mt-2 text-xs text-ink-soft">
                    {p.packs.map((pk) => tx(packLabels[pk])).join(" · ")}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-ink px-3 text-sm font-semibold text-paper"
                    >
                      {lang === "bn" ? "বিস্তারিত পৃষ্ঠা" : "Product page"}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand px-3 text-sm font-semibold text-paper"
                      onClick={() => {
                        add({ sku: p.sku, name: p.name.en, pack: p.packs[0], note: "" });
                        setOpen(true);
                      }}
                    >
                      {t("addRfq")}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <div className="rounded-xl bg-card p-8 text-center ring-1 ring-line">
              <p className="font-semibold text-ink">
                {lang === "bn" ? "কোনো মিল নেই" : "No products match"}
              </p>
              <p className="mt-2 text-sm text-muted">
                {lang === "bn"
                  ? "অন্য ক্যাটাগরি বা প্যাক সাইজ চেষ্টা করুন।"
                  : "Try another category, pack size, or clear search."}
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 inline-flex min-h-11 items-center rounded-full bg-brand px-5 text-sm font-semibold text-paper"
              >
                {lang === "bn" ? "সব পণ্য দেখুন" : "Show all products"}
              </button>
            </div>
          )}
        </div>
      </div>

      <section className="mt-12 rounded-xl bg-mist/50 p-6 ring-1 ring-line">
        <h2 className="text-lg font-semibold">{lang === "bn" ? "সব পণ্যের লিংক" : "All product pages"}</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="text-sm font-semibold text-brand hover:underline"
              >
                {tx(p.name)}
                <span className="ml-2 font-normal text-muted">{p.sku}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
