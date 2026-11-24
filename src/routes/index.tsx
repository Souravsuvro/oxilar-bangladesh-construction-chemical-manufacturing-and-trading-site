import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { benefits, faqs, processSteps, products, sourcing } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { CalculatorSuite } from "@/components/calculators/Calculators";
import { TrustBlocks } from "@/components/home/TrustBlocks";
import { LiveRegion } from "@/components/a11y/LiveRegion";
import { WA_DEFAULT, SITE } from "@/lib/site";
import type { Pack } from "@/data/catalog";

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
          "Independent manufacturer (est. 6 September 2019) of construction chemicals engineered for Bangladesh’s climate: Damp Guard, Solid Bond and SB-250. Factory Kalampur, Dhamrai. Built for civil engineers and mega-projects.",
      },
      {
        name: "keywords",
        content:
          "Construction chemical company in Bangladesh, Damp Guard, Solid Bond, SB-250, Concrete admixture manufacturer Dhaka, Roof waterproofing chemical BD, BUET referenced, Oxilar Bangladesh Dhamrai",
      },
      { property: "og:title", content: "Oxilar Bangladesh | Construction Chemicals" },
      {
        property: "og:description",
        content:
          "Independent manufacturer of waterproofing and admixture systems. Factory Kalampur, Dhamrai. Global direct importer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE.web}/og.jpg` },
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
      url: SITE.web,
      email: SITE.email,
      telephone: SITE.phoneTel,
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
          telephone: SITE.phoneTel,
          contactType: "sales",
          areaServed: "BD",
          availableLanguage: ["en", "bn"],
        },
      ],
      sameAs: [SITE.web, SITE.facebook],
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

const PACK_FILTERS: (Pack | "all")[] = ["all", "1L", "5L", "10L", "20L", "200L"];

function Home() {
  const { tx, lang } = useI18n();
  const bn = lang === "bn";
  const [pack, setPack] = useState<Pack | "all">("all");
  const shown = products.filter((p) => pack === "all" || p.packs.includes(pack));
  const [chart, setChart] = useState(false);
  useEffect(() => setChart(true), []);

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden bg-[#0F172A] text-paper">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),_transparent_50%)]" />
        <div className="container-site relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {bn ? "বাংলাদেশের জলবায়ুর জন্য ইঞ্জিনিয়ার্ড" : "Engineered for Bangladesh’s climate"}
            </div>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
              {bn
                ? "কনস্ট্রাকশন কেমিক্যাল — সিভিল ইঞ্জিনিয়ার ও মেগা-প্রকল্পের জন্য"
                : "Construction chemicals engineered for civil engineers & mega-projects"}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              {bn
                ? "ড্যাম্প গার্ড, সলিড বন্ড ও এসবি-২৫০ — ১ থেকে ২০০ লিটার সাইট প্যাক। কালামপুর প্ল্যান্ট, স্বাধীন প্রস্তুতকারক (২০১৯)।"
                : "Damp Guard, Solid Bond & SB-250 in 1–200 L site packs. Independent manufacturer since 2019. Factory Kalampur, Dhamrai."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-6 font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-500"
              >
                {bn ? "পণ্য দেখুন" : "Explore products"}
              </Link>
              <Link
                to="/calculators"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 font-semibold text-paper backdrop-blur transition hover:bg-white/10"
              >
                {bn ? "ডোজ ক্যালকুলেটর" : "Launch dosage calculator"}
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex min-h-11 items-center rounded-full bg-white/10 px-4 text-sm font-semibold text-paper hover:bg-white/15"
              >
                {SITE.phoneDisplay}
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-500"
              >
                WhatsApp
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide">
              {["BUET", "CUET", "BCSIR"].map((lab) => (
                <li
                  key={lab}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200"
                >
                  <span className="font-mono text-[10px] text-emerald-400">●</span>
                  {lab}
                </li>
              ))}
              <li className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-200">
                Est. 2019
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-black/40 ring-1 ring-white/5">
              <div className="grid grid-cols-3 gap-px bg-white/5 p-1">
                {[
                  { src: "/media/damp-guard-front.jpg", label: bn ? "ড্যাম্প গার্ড" : "Damp Guard", tag: bn ? "হলুদ" : "Yellow" },
                  { src: "/media/solid-bond-front.jpg", label: bn ? "সলিড বন্ড" : "Solid Bond", tag: bn ? "সবুজ" : "Green" },
                  { src: "/media/oxilar-green-pail.jpg", label: "SB-250", tag: bn ? "নীল" : "Blue" },
                ].map((item) => (
                  <div key={item.label} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-full w-full object-cover object-center"
                      loading="eager"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2.5 pt-8">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">{item.tag}</p>
                      <p className="text-xs font-semibold text-white">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-3 text-xs">
                <span className="font-mono text-slate-400">Chloride-Free · Monsoon-Tested</span>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 font-semibold text-emerald-300">
                  Kalampur Blended
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container-site grid grid-cols-2 gap-4 py-5 sm:grid-cols-4">
            {[
              { value: "2019", label: bn ? "প্রতিষ্ঠিত" : "Established" },
              { value: "3", label: bn ? "কোর সিস্টেম" : "Core systems" },
              { value: "1–200 L", label: bn ? "প্যাক রেঞ্জ" : "Pack range" },
              { value: "3", label: bn ? "ল্যাব পার্টনার" : "Lab partners" },
            ].map((kpi) => (
              <div key={kpi.label} className="text-center sm:text-left">
                <p className="font-mono text-xl font-semibold text-emerald-400 sm:text-2xl">{kpi.value}</p>
                <p className="mt-0.5 text-xs font-medium text-slate-400">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBlocks />

      <section className="border-y border-line bg-[#F8FAFC] py-12">
        <div className="container-site">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                {bn ? "কাঁচামালের উৎস" : "Global sourcing → Dhamrai"}
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted">{tx(sourcing)}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {(bn
              ? ["ভারত", "মালয়েশিয়া", "তাইওয়ান", "চীন", "দক্ষিণ কোরিয়া", "থাইল্যান্ড"]
              : ["India", "Malaysia", "Taiwan", "China", "South Korea", "Thailand"]
            ).map((hub) => (
              <span
                key={hub}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {hub}
              </span>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper">
              → {bn ? "কালামপুর প্ল্যান্ট" : "Kalampur plant"}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-card py-14">
        <div className="container-site">
          <h2 className="text-3xl font-semibold text-ink">
            {bn ? "প্যাকেজিংয়ে যা লেখা আছে" : "What the pack promises"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <article
                key={b.title.en}
                className="group rounded-2xl border border-line bg-paper p-6 transition hover:border-emerald-200 hover:shadow-md"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 font-mono text-sm font-bold text-emerald-700">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-ink">{tx(b.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tx(b.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-14" aria-labelledby="how-we-work-heading">
        <h2 id="how-we-work-heading" className="text-3xl font-semibold text-ink">{bn ? "কীভাবে কাজ করি" : "How we work"}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <article key={s.step} className="relative rounded-2xl border border-line bg-card p-5">
              <p className="font-mono text-xs font-bold tracking-widest text-emerald-600">{s.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{tx(s.title)}</h3>
              <p className="mt-2 text-sm text-muted">{tx(s.body)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-[#F8FAFC] py-10">
        <div className="container-site">
          <h2 className="text-2xl font-semibold text-ink">{bn ? "সারা দেশে সাপ্লাই" : "Nationwide supply"}</h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            {bn
              ? "ঢাকা, চট্টগ্রাম, সিলেট, রাজশাহী, খুলনা ও অন্যান্য বিভাগে ডিলার ও প্রকল্প সাপ্লাই। রেডি-মিক্স প্ল্যান্ট ও মেগা-প্রকল্পের জন্য ড্রাম ডেলিভারি।"
              : "Dealer and project supply across Dhaka, Chattogram, Sylhet, Rajshahi, Khulna and other divisions. Drum delivery for ready-mix plants and mega-projects."}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            {(bn
              ? ["ঢাকা", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "খুলনা", "রংপুর", "বরিশাল", "ময়মনসিংহ"]
              : ["Dhaka", "Chattogram", "Sylhet", "Rajshahi", "Khulna", "Rangpur", "Barishal", "Mymensingh"]
            ).map((d) => (
              <li key={d} className="rounded-full border border-line bg-white px-3 py-1.5 text-ink shadow-sm">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-site py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-ink">{bn ? "নির্বাচিত পণ্য" : "Featured products"}</h2>
            <p className="mt-1 text-sm text-muted">
              {bn
                ? "হলুদ = ড্যাম্প গার্ড · সবুজ = সলিড বন্ড · নীল = এসবি-২৫০"
                : "Yellow = Damp Guard · Green = Solid Bond · Blue = SB-250"}
            </p>
          </div>
          <div className="flex gap-2 overflow-auto pb-1">
            {PACK_FILTERS.map((p) => (
              <button
                key={p}
                type="button"
                aria-pressed={pack === p}
                onClick={() => setPack(p)}
                className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold transition ${
                  pack === p
                    ? "bg-brand text-paper shadow-sm"
                    : "border border-line bg-white text-ink hover:border-emerald-300"
                }`}
              >
                {p === "all" ? (bn ? "সব সাইজ" : "All sizes") : p}
              </button>
            ))}
          </div>
        </div>
        <LiveRegion
          message={bn ? `${shown.length}টি পণ্য পাওয়া গেছে` : `${shown.length} product${shown.length === 1 ? "" : "s"} found`}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <Link to="/products/$slug" params={{ slug: p.slug }} className="relative block bg-[#F8FAFC]">
                <img
                  src={p.image}
                  alt={tx(p.name)}
                  className="h-52 w-full object-contain object-center p-4 transition group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
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
                  <h3 className="mt-2 text-lg font-semibold text-ink group-hover:text-emerald-700">{tx(p.name)}</h3>
                </Link>
                <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">{tx(p.short)}</p>
                <p className="mt-3 font-mono text-xs font-medium text-slate-500">
                  ~{p.mlPerBag} ml / 50 kg · {p.packs.join(" · ")}
                </p>
                <div className="mt-4 flex gap-2">
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-line bg-white text-sm font-semibold text-ink hover:border-emerald-400"
                  >
                    {bn ? "বিস্তারিত" : "View details"}
                  </Link>
                  <Link
                    to="/resources"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-100 px-4 text-sm font-semibold text-ink hover:bg-slate-200"
                  >
                    TDS
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/products"
            className="inline-flex min-h-12 items-center rounded-full bg-emerald-600 px-6 font-semibold text-white hover:bg-emerald-500"
          >
            {bn ? "সব পণ্য দেখুন" : "View all products"}
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-[#F8FAFC] py-14">
        <div className="container-site">
          <div className="mb-6 max-w-2xl">
            <h2 className="text-3xl font-semibold text-ink">{bn ? "সাইট ডোজ ক্যালকুলেটর" : "Site dosage calculator"}</h2>
            <p className="mt-2 text-muted">
              {bn
                ? "স্ল্যাব ভলিউম, সিমেন্ট ব্যাগ বা কভারেজ থেকে লিটার ও প্যাক অনুমান করুন — তারপর সরাসরি RFQ-তে নিন।"
                : "Estimate litres and packs from slab volume, cement bags or coverage — then import straight into RFQ."}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <div className="border-b border-line bg-slate-50 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {bn ? "ইঞ্জিনিয়ারিং টুল · অনুমানমাত্র" : "Engineering tool · estimates only"}
              </p>
            </div>
            <div className="p-5 sm:p-6">
              <CalculatorSuite />
            </div>
          </div>
        </div>
      </section>

      {chart && (
        <section className="container-site py-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-ink">{bn ? "ল্যাব রেফারেন্স" : "Lab reference"}</h2>
              <p className="mt-1 max-w-xl text-sm text-muted">
                {bn
                  ? "BUET · CUET · BCSIR পদ্ধতির সাথে কাজ করা ওয়ার্কিং শিট — সাইট ট্রায়ালের আগে দেখুন।"
                  : "Working sheets referenced to BUET, CUET and BCSIR practices — review before site trial."}
              </p>
            </div>
            <Link to="/resources" className="text-sm font-semibold text-emerald-700 hover:underline">
              {bn ? "TDS / Lab →" : "TDS / Lab sheets →"}
            </Link>
          </div>
          <div className="mt-6 h-72 overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-sm">
            <Suspense fallback={<div className="h-full animate-pulse rounded-xl bg-slate-100" />}>
              <StrengthChart />
            </Suspense>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["BUET", "CUET", "BCSIR"].map((lab) => (
              <div
                key={lab}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 font-mono text-xs font-bold text-emerald-700">
                  {lab.slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{lab}</p>
                  <p className="text-xs text-muted">{bn ? "রেফারেন্স পদ্ধতি" : "Referenced methods"}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container-site py-14">
        <h2 className="text-3xl font-semibold text-ink">{bn ? "ডিলার ও প্রকল্প" : "Dealers & projects"}</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {bn ? "হার্ডওয়্যার ডিলার" : "Hardware dealers"}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-ink">
              {bn ? "হোলসেল টিয়ার ও সেলস কিট" : "Wholesale tiers & sales kits"}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted">
              {bn
                ? "ভলিউম অনুযায়ী মূল্য, টিডিএস কার্ড, পেইল ফটো ও প্রথম পোরে সাপোর্ট। ডিলারশিপ আবেদন করুন।"
                : "Volume pricing, TDS cards, pack photography and first-pour support. Apply for dealership."}
            </p>
            <Link
              to="/b2b-portal"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-5 font-semibold text-paper hover:bg-slate-800"
            >
              {bn ? "ডিলারশিপ আবেদন" : "Apply for dealership"}
            </Link>
          </article>
          <article className="flex flex-col rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
              {bn ? "মেগা-প্রকল্প কন্ট্রাক্টর" : "Mega-project contractors"}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-ink">
              {bn ? "বাল্ক ড্রাম ও সাইট ইঞ্জিনিয়ারিং" : "Bulk drums & site engineering"}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted">
              {bn
                ? "২০০ লিটার ড্রাম সাপ্লাই, ডোজ গাইডেন্স ও ট্রায়াল মিক্স সাপোর্ট। প্রকল্প কোটেশন নিন।"
                : "200 L drum supply, dosage guidance and trial-mix support. Request a project quotation."}
            </p>
            <Link
              to="/b2b-portal"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-600 px-5 font-semibold text-white hover:bg-emerald-500"
            >
              {bn ? "প্রকল্প কোটেশন" : "Request project RFQ"}
            </Link>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-[#0F172A] py-12 text-paper">
        <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{bn ? "প্রজেক্ট সাপোর্ট" : "Project support"}</h2>
            <p className="mt-1 max-w-xl text-sm text-slate-300">
              {bn
                ? "প্রকল্পের ডোজ, টিডিএস বা ড্রাম সাপ্লাই লাগবে? আজই কল বা হোয়াটসঅ্যাপ করুন।"
                : "Need dosage, TDS or drum supply for a live site? Call or WhatsApp today."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex min-h-11 items-center rounded-full bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              {bn ? "কল" : "Call"}
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-500"
            >
              WhatsApp
            </a>
            <Link
              to="/calculators"
              className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-semibold text-ink"
            >
              {bn ? "ক্যালকুলেটর" : "Calculator"}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-14">
        <h2 className="text-3xl font-semibold text-ink">{bn ? "প্রায়ই জিজ্ঞাসিত" : "FAQ"}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <article key={f.q.en} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-ink">{tx(f.q)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tx(f.a)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
