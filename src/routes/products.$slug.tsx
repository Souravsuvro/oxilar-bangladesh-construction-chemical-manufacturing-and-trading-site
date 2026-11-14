import { createFileRoute, Link } from "@tanstack/react-router";
import { packLabels, products } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { useRfq } from "@/lib/rfq-store";
import { useState } from "react";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    const title = p ? `${p.name.en} | Oxilar Bangladesh` : "Product | Oxilar Bangladesh";
    const desc =
      p?.short.en ??
      "Oxilar Bangladesh construction chemical — dosage, packs and RFQ for Bangladesh projects.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        {
          property: "og:image",
          content: p ? `https://www.oxilarbd.com${p.image}` : "https://www.oxilarbd.com/og.jpg",
        },
        { property: "og:url", content: p ? `https://www.oxilarbd.com/products/${p.slug}` : "https://www.oxilarbd.com/products" },
      ],
      links: p
        ? [{ rel: "canonical", href: `https://www.oxilarbd.com/products/${p.slug}` }]
        : [],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const p = products.find((x) => x.slug === slug);
  const { tx, lang } = useI18n();
  const add = useRfq((s) => s.add);
  const setOpen = useRfq((s) => s.setOpen);
  const [pack, setPack] = useState(p?.packs[0] ?? "20L");

  if (!p) {
    return (
      <div className="container-site py-16">
        <h1 className="text-2xl font-semibold">{lang === "bn" ? "পণ্য পাওয়া যায়নি" : "Product not found"}</h1>
        <p className="mt-2 text-muted">
          {lang === "bn"
            ? "এই স্লাগ ক্যাটালগে নেই। পণ্য তালিকা থেকে বেছে নিন।"
            : "This slug is not in the catalog. Choose a product from the list."}
        </p>
        <Link to="/products" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-brand px-6 font-semibold text-paper">
          {lang === "bn" ? "সব পণ্য দেখুন" : "View all products"}
        </Link>
      </div>
    );
  }

  const related = products.filter((x) => x.slug !== p.slug).slice(0, 4);
  const sameCategory = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: p.name.en,
        sku: p.sku,
        image: [`https://www.oxilarbd.com${p.image}`],
        description: p.short.en,
        brand: { "@type": "Brand", name: "Oxilar Bangladesh" },
        manufacturer: {
          "@type": "Organization",
          name: "Oxilar Bangladesh",
          url: "https://www.oxilarbd.com",
        },
        category: p.category,
        offers: {
          "@type": "Offer",
          url: `https://www.oxilarbd.com/products/${p.slug}`,
          availability: "https://schema.org/InStock",
          priceCurrency: "BDT",
          priceValidUntil: "2027-12-31",
          seller: { "@type": "Organization", name: "Oxilar Bangladesh" },
          description: "Request quotation (RFQ). Pack sizes: " + p.packs.join(", "),
        },
        additionalProperty: p.specs.map((s) => ({
          "@type": "PropertyValue",
          name: s.label.en,
          value: s.value.en,
        })),
      },
      ...(p.method.length
        ? [
            {
              "@type": "HowTo",
              name: `How to use ${p.name.en}`,
              description: p.short.en,
              step: p.method.map((m, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                text: m.en,
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.oxilarbd.com/" },
          { "@type": "ListItem", position: 2, name: "Products", item: "https://www.oxilarbd.com/products" },
          {
            "@type": "ListItem",
            position: 3,
            name: p.name.en,
            item: `https://www.oxilarbd.com/products/${p.slug}`,
          },
        ],
      },
    ],
  };

  const wa = `https://wa.me/8801960198313?text=${encodeURIComponent(
    `Hello Oxilar — RFQ interest: ${p.name.en} (${p.sku}), pack ${pack}`,
  )}`;

  return (
    <article className="pb-24 lg:pb-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="border-b border-line bg-card/60">
        <div className="container-site flex flex-wrap items-center gap-2 py-3 text-sm">
          <Link to="/" className="text-muted hover:text-brand">
            {lang === "bn" ? "হোম" : "Home"}
          </Link>
          <span className="text-line">/</span>
          <Link to="/products" className="text-muted hover:text-brand">
            {lang === "bn" ? "পণ্য" : "Products"}
          </Link>
          <span className="text-line">/</span>
          <span className="font-medium text-ink">{tx(p.name)}</span>
        </div>
      </div>

      <div className="container-site py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-card ring-1 ring-line">
            <img
              src={p.image}
              alt={tx(p.name)}
              className="aspect-[4/3] w-full object-cover object-[center_25%]"
              width={900}
              height={675}
              decoding="async"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-sky">{p.sku}</p>
            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">{tx(p.name)}</h1>
            <p className="mt-3 text-base text-muted">{tx(p.short)}</p>

            <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">
              {lang === "bn" ? "প্যাক সাইজ" : "Pack size"}
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.packs.map((pk) => (
                <button
                  key={pk}
                  type="button"
                  onClick={() => setPack(pk)}
                  className={`min-h-11 rounded-full px-4 text-sm font-semibold ${
                    pack === pk ? "bg-ink text-paper" : "bg-card ring-1 ring-line"
                  }`}
                >
                  {tx(packLabels[pk])}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                className="min-h-12 rounded-full bg-brand px-6 font-semibold text-paper"
                onClick={() => {
                  add({ sku: p.sku, name: p.name.en, pack, note: "" });
                  setOpen(true);
                }}
              >
                {lang === "bn" ? "আরএফকিউতে যোগ করুন" : "Add to RFQ"}
              </button>
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center rounded-full bg-sky px-6 font-semibold text-paper"
              >
                WhatsApp
              </a>
              <Link
                to="/calculators"
                className="inline-flex min-h-12 items-center rounded-full bg-paper px-6 font-semibold ring-1 ring-line"
              >
                {lang === "bn" ? "ক্যালকুলেটর" : "Calculator"}
              </Link>
            </div>

            <div className="mt-8 rounded-xl bg-mist/60 p-4 ring-1 ring-line">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                {lang === "bn" ? "ডোজ গাইড" : "Dosage guide"}
              </h2>
              <p className="mt-2 text-sm text-ink">{tx(p.dosage)}</p>
              <p className="mt-2 text-xs text-muted">
                {lang === "bn"
                  ? "সাইট ট্রায়াল ও সর্বশেষ টিডিএস দিয়ে নিশ্চিত করুন।"
                  : "Always confirm with a site trial and the current TDS."}
              </p>
            </div>

            <p className="mt-4 text-sm">
              <Link to="/resources" className="font-semibold text-brand hover:underline">
                TDS / Lab sheets →
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <section className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="text-lg font-semibold">{lang === "bn" ? "ব্যবহারের ক্ষেত্র" : "Applications"}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              {p.applications.map((a) => (
                <li key={a.en}>{tx(a)}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="text-lg font-semibold">{lang === "bn" ? "প্রয়োগ পদ্ধতি" : "Application method"}</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
              {p.method.map((a) => (
                <li key={a.en}>{tx(a)}</li>
              ))}
            </ol>
          </section>
          <section className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="text-lg font-semibold">{lang === "bn" ? "সতর্কতা ও স্পেক" : "Safety & specs"}</h2>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {p.safety.map((a) => (
                <li key={a.en}>{tx(a)}</li>
              ))}
            </ul>
            <dl className="mt-4 space-y-2 border-t border-line pt-3">
              {p.specs.map((s) => (
                <div key={s.label.en} className="flex justify-between gap-3 text-sm">
                  <dt className="text-muted">{tx(s.label)}</dt>
                  <dd className="font-medium text-ink">{tx(s.value)}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {sameCategory.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">
              {lang === "bn" ? "একই ক্যাটাগরি" : "Same category"}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sameCategory.map((r) => (
                <Link
                  key={r.slug}
                  to="/products/$slug"
                  params={{ slug: r.slug }}
                  className="overflow-hidden rounded-xl bg-card ring-1 ring-line transition hover:ring-brand"
                >
                  <img src={r.image} alt={tx(r.name)} className="h-36 w-full object-cover" loading="lazy" />
                  <div className="p-4">
                    <p className="text-xs font-semibold text-sky">{r.sku}</p>
                    <h3 className="font-semibold">{tx(r.name)}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted">{tx(r.short)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold">{lang === "bn" ? "আরও পণ্য" : "More products"}</h2>
            <Link to="/products" className="text-sm font-semibold text-brand hover:underline">
              {lang === "bn" ? "সব দেখুন →" : "View all →"}
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/products/$slug"
                params={{ slug: r.slug }}
                className="rounded-full bg-card px-4 py-2.5 text-sm font-semibold ring-1 ring-line hover:ring-brand"
              >
                {tx(r.name)}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Mobile sticky RFQ bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur lg:hidden">
        <div className="container-site flex gap-2">
          <button
            type="button"
            className="min-h-12 flex-1 rounded-full bg-brand font-semibold text-paper"
            onClick={() => {
              add({ sku: p.sku, name: p.name.en, pack, note: "" });
              setOpen(true);
            }}
          >
            {lang === "bn" ? "আরএফকিউ" : "Add to RFQ"}
          </button>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-sky font-semibold text-paper"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
