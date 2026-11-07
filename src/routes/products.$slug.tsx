import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { useRfq } from "@/lib/rfq-store";
import { useState } from "react";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.name.en} | Oxilar Bangladesh` : "Product | Oxilar Bangladesh" },
        { name: "description", content: p?.short.en ?? "Oxilar product" },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const p = products.find((x) => x.slug === slug);
  const { tx, lang } = useI18n();
  const add = useRfq((s) => s.add);
  const [pack, setPack] = useState(p?.packs[0] ?? "20L");
  if (!p) {
    return (
      <div className="container-site py-16">
        <p>{lang === "bn" ? "পণ্য পাওয়া যায়নি।" : "Product not found."}</p>
        <Link to="/products" className="mt-4 inline-block text-brand">←</Link>
      </div>
    );
  }
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name.en,
    sku: p.sku,
    brand: "Oxilar Bangladesh",
    description: p.short.en,
  };
  return (
    <article className="container-site py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Link to="/products" className="text-sm font-semibold text-brand">{lang === "bn" ? "সব পণ্য" : "All products"}</Link>
      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <img src={p.image} alt={p.name.en} className="w-full rounded-xl object-cover" />
        <div>
          <p className="text-sm font-semibold text-sky">{p.sku}</p>
          <h1 className="mt-1 text-4xl font-semibold">{tx(p.name)}</h1>
          <p className="mt-3 text-muted">{tx(p.short)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.packs.map((pk) => (
              <button key={pk} type="button" onClick={() => setPack(pk)} className={`min-h-11 rounded-full px-4 text-sm font-semibold ${pack === pk ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`}>
                {pk}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper"
            onClick={() => add({ sku: p.sku, name: p.name.en, pack, note: "" })}
          >
            {lang === "bn" ? "আরএফকিউতে যোগ করুন" : "Add to RFQ"}
          </button>
          <h2 className="mt-8 text-lg font-semibold">{lang === "bn" ? "ডোজ" : "Dosage"}</h2>
          <p className="mt-1 text-sm">{tx(p.dosage)}</p>
        </div>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <section>
          <h2 className="font-semibold">{lang === "bn" ? "ব্যবহার" : "Applications"}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {p.applications.map((a) => <li key={a.en}>{tx(a)}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="font-semibold">{lang === "bn" ? "প্রয়োগ" : "Method"}</h2>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-muted">
            {p.method.map((a) => <li key={a.en}>{tx(a)}</li>)}
          </ol>
        </section>
        <section>
          <h2 className="font-semibold">{lang === "bn" ? "সতর্কতা" : "Safety"}</h2>
          <ul className="mt-2 space-y-2 text-sm text-muted">
            {p.safety.map((a) => <li key={a.en}>{tx(a)}</li>)}
          </ul>
          <dl className="mt-4 space-y-2">
            {p.specs.map((s) => (
              <div key={s.label.en} className="flex justify-between gap-3 border-b border-line py-1 text-sm">
                <dt className="text-muted">{tx(s.label)}</dt>
                <dd className="font-medium">{tx(s.value)}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">{lang === "bn" ? "সম্পর্কিত" : "Related"}</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {related.map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="rounded-full bg-card px-4 py-3 text-sm font-semibold ring-1 ring-line">
                {tx(r.name)}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
