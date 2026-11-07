import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { benefits, faqs, products, sourcing, strengthSeries } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { CalculatorSuite } from "@/components/calculators/Calculators";

export const Route = createFileRoute("/")({
  component: Home,
});

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Oxilar Bangladesh",
      url: "https://www.oxilarbd.com",
      email: "oxilarbangladesh@gmail.com",
      telephone: "+8801960198313",
      parentOrganization: "Filament Group",
      address: {
        "@type": "PostalAddress",
        streetAddress: "31/1 Babar Road, Mohammadpur",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
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
  const [pack, setPack] = useState<"all" | "4L" | "20L" | "drum">("all");
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
              <Link to="/calculators" className="inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-6 font-semibold text-ink">
                {t("launchCalc")}
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2 text-xs font-semibold">
              {["BUET", "CUET", "BCSIR"].map((b) => (
                <li key={b} className="rounded-full bg-white/10 px-3 py-2">{b}</li>
              ))}
            </ul>
          </div>
          <img src="/media/pail.jpg" alt="Oxilar Super-100 pail" className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-[5/4]" />
        </div>
      </section>

      <section id="sourcing" className="container-site py-14">
        <h2 className="text-3xl font-semibold">{lang === "bn" ? "কাঁচামালের উৎস" : "Raw material origins"}</h2>
        <p className="mt-2 max-w-2xl text-muted">
          {lang === "bn"
            ? "ইপক্সি, হার্ডেনার, সলভেন্ট ও অ্যাডমিক্সচার ছয়টি ট্রেড হাব থেকে আসে। কার্ডে চাপুন।"
            : "Epoxy, hardener, solvents and admixture bases arrive from six trade hubs. Select a card."}
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sourcing.map((s) => (
            <article key={s.code} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <p className="text-xs font-semibold tracking-widest text-sky">{s.code}</p>
              <h3 className="mt-1 text-xl font-semibold">{tx(s.country)}</h3>
              <p className="mt-2 text-sm text-muted">{tx(s.items)}</p>
            </article>
          ))}
        </div>
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

      <section className="container-site py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold">{lang === "bn" ? "নির্বাচিত পণ্য" : "Featured products"}</h2>
          <div className="flex gap-2 overflow-auto">
            {(["all", "4L", "20L", "drum"] as const).map((p) => (
              <button key={p} type="button" onClick={() => setPack(p)} className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${pack === p ? "bg-brand text-paper" : "bg-card ring-1 ring-line"}`}>
                {p === "all" ? (lang === "bn" ? "সব সাইজ" : "All sizes") : p}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {shown.slice(0, 6).map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="overflow-hidden rounded-xl bg-card ring-1 ring-line">
              <img src={p.image} alt="" className="h-44 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs font-semibold text-sky">{p.sku}</p>
                <h3 className="text-lg font-semibold">{tx(p.name)}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted">{tx(p.short)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-14 text-paper">
        <div className="container-site">
          <h2 className="text-3xl font-semibold text-paper">{lang === "bn" ? "সাইট অনুমান" : "Site estimate"}</h2>
          <p className="mt-2 mb-6 max-w-2xl text-paper/70">
            {lang === "bn" ? "স্ল্যাব, ব্যাগ বা ইপক্সি — ফলাফল প্রিন্ট করুন বা আরএফকিউতে নিন।" : "Slab, bags or epoxy — print the result or drop it into the RFQ."}
          </p>
          <CalculatorSuite />
        </div>
      </section>

      <section className="container-site py-14">
        <h2 className="text-3xl font-semibold">{lang === "bn" ? "ল্যাব তুলনা (রেফারেন্স)" : "Lab comparison (reference)"}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          {lang === "bn"
            ? "চিত্রটি প্রকাশিত সারাংশের ধরন দেখায়, স্বতন্ত্র সার্টিফিকেটের বদলে নয়। শিট /resources এ।"
            : "The chart shows the shape of a published summary, not a substitute for the certificate. Sheets live under TDS / Lab."}
        </p>
        <div className="mt-6 h-72 rounded-xl bg-card p-3 ring-1 ring-line">
          {chart && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={strengthSeries}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="control" fill="var(--color-muted)" name="Control" />
                <Bar dataKey="dosed" fill="var(--color-brand)" name="Dosed" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </section>

      <section className="container-site pb-4">
        <div className="rounded-xl bg-brand px-6 py-8 text-paper sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-paper">{lang === "bn" ? "ডিলার ও প্রকল্প সরবরাহ" : "Dealers and project supply"}</h2>
            <p className="mt-2 max-w-xl text-sm text-paper/85">
              {lang === "bn" ? "হার্ডওয়্যার স্টকিস্ট ও মেগা-প্রকল্পের জন্য আলাদা ফর্ম।" : "Separate forms for hardware stockists and mega-project procurement."}
            </p>
          </div>
          <Link to="/b2b-portal" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-6 font-semibold text-brand-deep sm:mt-0">
            {t("b2b")}
          </Link>
        </div>
      </section>

      <section className="container-site py-14">
        <h2 className="text-3xl font-semibold">{lang === "bn" ? "প্রশ্ন" : "Questions"}</h2>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {faqs.map((f) => (
            <article key={f.q.en} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <h3 className="font-semibold">{tx(f.q)}</h3>
              <p className="mt-2 text-sm text-muted">{tx(f.a)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
