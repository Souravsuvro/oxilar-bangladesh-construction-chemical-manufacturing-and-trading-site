import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { benefits, faqs, processSteps, products, sourcing } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { CalculatorSuite } from "@/components/calculators/Calculators";
import { TrustBlocks } from "@/components/home/TrustBlocks";
import { WA_DEFAULT } from "@/lib/site";

const StrengthChart = lazy(() =>
  import("@/components/home/StrengthChart").then((m) => ({ default: m.StrengthChart })),
);

const WA = WA_DEFAULT;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Oxilar Bangladesh | Construction Chemical Manufacturer & Global Raw Material Importer",
      },
      {
        name: "description",
        content:
          "Independent manufacturer (est. 6 September 2019) of BUET-referenced construction chemicals: roof waterproofing, concrete admixtures and epoxy flooring. Factory Kalampur, Dhamrai. Built for civil engineers and mega-projects in Bangladesh.",
      },
      {
        name: "keywords",
        content:
          "Construction chemical company in Bangladesh, Best roof waterproofing chemical BD, Concrete admixture manufacturer Dhaka, Epoxy flooring supplier Bangladesh, BUET tested construction chemicals, Salinity damp proofing chemical, Oxilar Super-100 dosage per bag of cement, Oxilar Bangladesh Dhamrai",
      },
      { property: "og:title", content: "Oxilar Bangladesh | Construction Chemicals" },
      {
        property: "og:description",
        content:
          "Independent manufacturer of BUET-referenced waterproofing, admixtures and epoxy systems. Factory Kalampur, Dhamrai. Global direct importer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.oxilarbd.com/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "Manufacturer"],
      name: "Oxilar Bangladesh",
      url: "https://www.oxilarbd.com",
      email: "oxilarbangladesh@gmail.com",
      telephone: "+8801826736886",
      foundingDate: "2019-09-06",
      description:
        "Independent manufacturer and global direct importer of construction chemicals, waterproofing systems and industrial raw materials in Bangladesh.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "31/1 Babar Road, Mohammadpur",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
      areaServed: { "@type": "Country", name: "Bangladesh" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+8801826736886",
          contactType: "sales",
          areaServed: "BD",
          availableLanguage: ["en", "bn"],
        },
      ],
      sameAs: ["https://www.oxilarbd.com", "https://www.facebook.com/share/19MbCzTKzp/"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q.en,
        acceptedAnswer: { "@type": "Answer", text: f.a.en },
      })),
    },
  ],
};

function Home() {
  const { t, tx, lang } = useI18n();
  const [pack, setPack] = useState<"all" | "5L" | "20L" | "200L">("all");
  const shown = products.filter((p) => pack === "all" || p.packs.includes(pack));
  const [chart, setChart] = useState(false);
  useEffect(() => setChart(true), []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-ink text-paper">
        <div className="container-site grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-amber">{t("sister")}</p>
            <h1 className="mt-3 max-w-xl text-4xl font-semibold text-paper sm:text-5xl">{t("heroTitle")}</h1>
            <p className="mt-4 max-w-xl text-base text-paper/80">{t("heroSub")}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 font-semibold text-paper">
                {t("explore")}
              </Link>
              <Link to="/solutions" className="inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-6 font-semibold text-ink">
                {lang === "bn" ? "সলিউশন" : "Solutions"}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="tel:+8801826736886" className="inline-flex min-h-12 items-center rounded-full bg-white/10 px-4 font-semibold text-paper hover:bg-white/15">
                +88 0182-6736886
              </a>
              <a href={WA} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-sky px-4 font-semibold text-paper">
                WhatsApp
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2 text-xs font-semibold">
              {["BUET", "CUET", "BCSIR"].map((b) => (
                <li key={b} className="rounded-full bg-white/10 px-3 py-2">{b}</li>
              ))}
              <li className="rounded-full bg-white/10 px-3 py-2">Est. 2019</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img src="/media/banner-oxilar.jpg" alt="Oxilar construction chemicals" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <TrustBlocks />

      <section className="container-site py-14">
        <h2 className="text-3xl font-semibold">{lang === "bn" ? "কাঁচামালের উৎস" : "Raw material origins"}</h2>
        <p className="mt-2 max-w-2xl text-muted">
          {tx(sourcing)}
        </p>
      </section>

      <section className="bg-card py-14">
        <div className="container-site">
          <h2 className="text-3xl font-semibold">{lang === "bn" ? "প্যাকেজিংয়ে যা লেখা আছে" : "What the pack promises"}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <article key={b.title.en} className="rounded-xl bg-paper p-5 ring-1 ring-line">
                <h3 className="text-lg font-semibold">{tx(b.title)}</h3>
                <p className="mt-2 text-sm text-muted">{tx(b.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-14" aria-label="How we work">
        <h2 className="text-3xl font-semibold">{lang === "bn" ? "কীভাবে কাজ করি" : "How we work"}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <article key={s.step} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <p className="text-xs font-semibold tracking-widest text-brand">{s.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{tx(s.title)}</h3>
              <p className="mt-2 text-sm text-muted">{tx(s.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-mist/40 py-10">
        <div className="container-site">
          <h2 className="text-2xl font-semibold">{lang === "bn" ? "সারা দেশে সাপ্লাই" : "Nationwide supply"}</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            {lang === "bn"
              ? "ঢাকা, চট্টগ্রাম, সিলেট, রাজশাহী, খুলনা ও অন্যান্য বিভাগে ডিলার ও প্রকল্প সাপ্লাই। রেডি-মিক্স প্ল্যান্ট ও মেগা-প্রকল্পের জন্য ড্রাম ডেলিভারি।"
              : "Dealer and project supply across Dhaka, Chattogram, Sylhet, Rajshahi, Khulna and other divisions. Drum delivery for ready-mix plants and mega-projects."}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            {(
              lang === "bn"
                ? ["ঢাকা", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "খুলনা", "রংপুর", "বরিশাল", "ময়মনসিংহ"]
                : ["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Rangpur", "Barishal", "Mymensingh"]
            ).map((d) => (
              <li key={d} className="rounded-full bg-card px-3 py-1.5 ring-1 ring-line">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold">{lang === "bn" ? "নির্বাচিত পণ্য" : "Featured products"}</h2>
          <div className="flex gap-2 overflow-auto">
            {(["all", "5L", "20L", "200L"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPack(p)}
                className={`min-h-12 shrink-0 rounded-full px-4 text-sm font-semibold ${
                  pack === p ? "bg-brand text-paper" : "bg-card ring-1 ring-line"
                }`}
              >
                {p === "all" ? (lang === "bn" ? "সব সাইজ" : "All sizes") : p}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shown.slice(0, 6).map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="overflow-hidden rounded-xl bg-card ring-1 ring-line">
              <img src={p.image} alt="" className="h-44 w-full object-cover" loading="lazy" decoding="async" />
              <div className="p-4">
                <p className="text-xs font-semibold text-sky">{p.sku}</p>
                <h3 className="text-lg font-semibold">{tx(p.name)}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{tx(p.short)}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/products" className="inline-flex min-h-12 items-center rounded-full bg-brand px-6 font-semibold text-paper">
            {lang === "bn" ? "সব পণ্য দেখুন" : "View all products"}
          </Link>
        </div>
      </section>

      <section className="bg-card py-14">
        <div className="container-site">
          <h2 className="text-3xl font-semibold">{lang === "bn" ? "সাইট ক্যালকুলেটর" : "Site calculators"}</h2>
          <p className="mt-2 max-w-2xl text-muted">
            {lang === "bn"
              ? "স্ল্যাব ভলিউম, সিমেন্ট ব্যাগ বা ইপক্সি এলাকা থেকে লিটার ও প্যাক অনুমান করুন।"
              : "Estimate litres and packs from slab volume, cement bags or epoxy area."}
          </p>
          <div className="mt-6">
            <CalculatorSuite />
          </div>
        </div>
      </section>

      {chart && (
        <section className="container-site py-14">
          <h2 className="text-3xl font-semibold">{lang === "bn" ? "স্ট্রেংথ রেফারেন্স" : "Strength reference"}</h2>
          <div className="mt-6 h-72">
            <Suspense fallback={<div className="h-full animate-pulse rounded-xl bg-mist" />}>
              <StrengthChart />
            </Suspense>
          </div>
        </section>
      )}

      <section className="border-y border-line bg-ink py-12 text-paper">
        <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{lang === "bn" ? "প্রজেক্ট সাপোর্ট" : "Project support"}</h2>
            <p className="mt-1 max-w-xl text-sm text-paper/80">
              {lang === "bn"
                ? "প্রকল্পের ডোজ, টিডিএস বা ড্রাম সাপ্লাই লাগবে? আজই কল বা হোয়াটসঅ্যাপ করুন।"
                : "Need dosage, TDS or drum supply for a live site? Call or WhatsApp today."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="tel:+8801826736886" className="inline-flex min-h-11 items-center rounded-full bg-brand px-4 text-sm font-semibold text-paper">
              {lang === "bn" ? "কল" : "Call"}
            </a>
            <a href={WA} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sky px-4 text-sm font-semibold text-paper">
              WhatsApp
            </a>
            <Link to="/calculators" className="inline-flex min-h-11 items-center rounded-full bg-paper px-4 text-sm font-semibold text-ink">
              {lang === "bn" ? "ক্যালকুলেটর" : "Calculator"}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-14">
        <h2 className="text-3xl font-semibold">{lang === "bn" ? "প্রায়ই জিজ্ঞাসিত" : "FAQ"}</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <article key={f.q.en} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <h3 className="font-semibold text-ink">{tx(f.q)}</h3>
              <p className="mt-2 text-sm text-muted">{tx(f.a)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
