import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, packLabels, products, type Category, type Pack } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { useRfq } from "@/lib/rfq-store";

const PACK_FILTERS: (Pack | "all")[] = ["all", "1L", "5L", "10L", "20L", "200L"];

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Damp Guard · Solid Bond · SB-250 | Oxilar Bangladesh" },
      {
        name: "description",
        content:
          "Authentic Oxilar Bangladesh construction chemicals: Damp Guard (yellow), Solid Bond (green), SB-250 (blue). Packs 1L, 5L, 10L, 20L and 200L. RFQ for Bangladesh projects.",
      },
    ],
  }),
  component: ProductsRoutes,
});

function ProductsRoutes() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return path === "/products" || path === "/products/" ? <ProductsPage /> : <Outlet />;
}

function ProductsPage() {
  const { tx, lang, t } = useI18n();
  const bn = lang === "bn";
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
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold text-ink">{bn ? "পণ্য ও প্যাক" : "Products and packs"}</h1>
        <p className="mt-2 text-muted">
          {bn
            ? "শুধু অক্সিলারের আসল তিনটি সিস্টেম — ড্যাম্প গার্ড, সলিড বন্ড ও এসবি-২৫০। সাইজ ফিল্টার করে দেখুন।"
            : "Only Oxilar’s three authentic systems — Damp Guard, Solid Bond and SB-250. Filter by pack size."}
        </p>
        <p className="mt-2 text-sm font-medium text-emerald-700">
          {bn
            ? "হলুদ ড্রাম = ড্যাম্প গার্ড · সবুজ ড্রাম = সলিড বন্ড · নীল ব্যারেল = এসবি-২৫০"
            : "Yellow drum = Damp Guard · Green drum = Solid Bond · Blue barrel = SB-250"}
        </p>
      </header>

      <div className="mt-8 grid gap-6 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-2 lg:sticky lg:top-24 lg:self-start" aria-label={bn ? "ফিল্টার" : "Filters"}>
          <label className="sr-only" htmlFor="product-search">
            {bn ? "পণ্য খুঁজুন" : "Search products"}
          </label>
          <input
            id="product-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={bn ? "নাম বা SKU" : "Search name or SKU"}
            className="mb-2 h-12 w-full rounded-lg border border-line bg-white px-3 text-ink"
            autoComplete="off"
          />
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`block min-h-11 w-full rounded-lg px-3 text-left text-sm font-medium ${
                cat === c.id ? "bg-ink text-paper" : "border border-line bg-white text-ink"
              }`}
              aria-pressed={cat === c.id}
            >
              {tx(c.label)}
            </button>
          ))}
          <div className="flex flex-wrap gap-2 pt-3">
            {PACK_FILTERS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPack(p)}
                className={`min-h-10 rounded-full px-3 text-sm font-semibold ${
                  pack === p ? "bg-emerald-600 text-white" : "border border-line bg-white text-ink"
                }`}
                aria-pressed={pack === p}
              >
                {p === "all" ? (bn ? "সব" : "All") : p}
              </button>
            ))}
          </div>
          {filtered && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-2 min-h-11 w-full rounded-lg text-sm font-semibold text-emerald-700 hover:underline"
            >
              {bn ? "ফিল্টার মুছুন" : "Clear filters"}
            </button>
          )}
        </aside>

        <div>
          <p className="mb-4 text-sm text-muted" aria-live="polite">
            {bn ? `${list.length}টি পণ্য` : `Showing ${list.length} product${list.length === 1 ? "" : "s"}`}
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <Link to="/products/$slug" params={{ slug: p.slug }} className="relative block bg-[#F8FAFC]">
                  <img
                    src={p.image}
                    alt={tx(p.name)}
                    className="h-48 w-full object-contain object-center p-4"
                    loading="lazy"
                  />
                  {p.colorTag && (
                    <span className="absolute left-3 top-3 rounded-full bg-ink/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {tx(p.colorTag)}
                    </span>
                  )}
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-600">
                      {p.sku}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                      {p.category === "waterproofing"
                        ? bn
                          ? "ওয়াটারপ্রুফিং"
                          : "Waterproofing"
                        : bn
                          ? "অ্যাডমিক্সচার"
                          : "Admixture"}
                    </span>
                  </div>
                  <Link to="/products/$slug" params={{ slug: p.slug }}>
                    <h2 className="mt-2 text-xl font-semibold text-ink hover:text-emerald-700">{tx(p.name)}</h2>
                  </Link>
                  <p className="mt-1 flex-1 text-sm text-muted">{tx(p.short)}</p>
                  <p className="mt-2 font-mono text-xs text-slate-500">
                    ~{p.mlPerBag} ml / 50 kg · {p.packs.map((pk) => tx(packLabels[pk])).join(" · ")}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-ink px-3 text-sm font-semibold text-paper"
                    >
                      {bn ? "বিস্তারিত পৃষ্ঠা" : "Product page"}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-emerald-600 px-3 text-sm font-semibold text-white"
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
            <div className="rounded-2xl border border-line bg-white p-8 text-center">
              <p className="font-semibold text-ink">{bn ? "কোনো মিল নেই" : "No products match"}</p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 inline-flex min-h-11 items-center rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white"
              >
                {bn ? "সব পণ্য দেখুন" : "Show all products"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
