import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { SITE, whatsappUrl } from "@/lib/site";

/**
 * Application / solutions hubs — competitor pattern (ABC Chemical category SEO)
 * without inventing products. Each solution maps to real Oxilar SKUs.
 */
const solutions = [
  {
    id: "roof-waterproofing",
    title: { en: "Roof & tank waterproofing", bn: "ছাদ ও ট্যাংক ওয়াটারপ্রুফিং" },
    problem: {
      en: "Monsoon leakage, rising damp and salt attack on roofs, basements and overhead tanks.",
      bn: "বর্ষায় ছাদ, বেজমেন্ট ও ওভারহেড ট্যাংকে লিকেজ, ড্যাম্প ও লবণ আক্রমণ।",
    },
    approach: {
      en: "Integral water-reducing and waterproofing admixtures dosed into the mix — denser concrete and inactive damp/salts when used per TDS and trial mix.",
      bn: "মিক্সে ইন্টিগ্রাল ওয়াটার-রিডিউসিং ও ওয়াটারপ্রুফিং অ্যাডমিক্সচার — টিডিএস ও ট্রায়াল অনুযায়ী ঘন কংক্রিট ও নিষ্ক্রিয় ড্যাম্প/লবণ।",
    },
    productSlugs: ["oxilar-damp-guard-400", "oxilar-pre-cast-premium", "oxilar-super-100"],
    keywords: "Best roof waterproofing chemical BD, tank waterproofing admixture Bangladesh",
  },
  {
    id: "salinity-damp",
    title: { en: "Salinity control & damp proofing", bn: "লবণাক্ততা ও ড্যাম্প প্রুফিং" },
    problem: {
      en: "Coastal and groundwater salinity, plaster failure and persistent wall damp.",
      bn: "উপকূলীয় ও ভূগর্ভস্থ লবণাক্ততা, প্লাস্টার নষ্ট ও স্থায়ী দেয়াল ড্যাম্প।",
    },
    approach: {
      en: "Polymerised systems that improve cohesion and help keep damp and salts permanently inactive in Bangladesh conditions.",
      bn: "পলিমারাইজড সিস্টেম যা সংহতি বাড়ায় এবং বাংলাদেশের পরিবেশে ড্যাম্প ও লবণ স্থায়ীভাবে নিষ্ক্রিয় রাখতে সাহায্য করে।",
    },
    productSlugs: ["oxilar-damp-guard-400", "oxilar-super-100", "oxilar-solid-bond"],
    keywords: "Salinity damp proofing chemical Bangladesh, damp proof admixture Dhaka",
  },
  {
    id: "concrete-admixture",
    title: { en: "Concrete admixtures for columns, slabs & RMC", bn: "কলাম, স্ল্যাব ও রেডি-মিক্স অ্যাডমিক্সচার" },
    problem: {
      en: "Workability, heat of hydration, early strength and cement economy on structural pours.",
      bn: "স্ট্রাকচারাল পোরে ওয়ার্ক্যাবিলিটি, হাইড্রেশন তাপ, আগাম শক্তি ও সিমেন্ট সাশ্রয়।",
    },
    approach: {
      en: "Multipurpose polymerised Super-100 and Solid Bond — dose 250–300 ml per bag typical; 300–400 ml aggressive exposure. Confirm with trial mix.",
      bn: "মাল্টিপারপাস সুপার-১০০ ও সলিড বন্ড — সাধারণত প্রতি ব্যাগে ২৫০–৩০০ মিলি; অ্যাগ্রেসিভে ৩০০–৪০০ মিলি।",
    },
    productSlugs: ["oxilar-super-100", "oxilar-solid-bond", "oxilar-pre-cast-premium"],
    keywords: "Concrete admixture manufacturer Dhaka, Super-100 dosage per bag of cement",
  },
  {
    id: "repairs-joints",
    title: { en: "Leak sealing, joints & repairs", bn: "লিকেজ সিলিং, জয়েন্ট ও রিপেয়ার" },
    problem: {
      en: "Active leaks, construction joints and bonding new work to old concrete.",
      bn: "সক্রিয় লিকেজ, কনস্ট্রাকশন জয়েন্ট ও পুরাতন কংক্রিটের সাথে নতুন কাজের বন্ধন।",
    },
    approach: {
      en: "Rapid Bland high-strength powder blended with cement for fast set and strong bond — leaks, anchors and structural repairs.",
      bn: "র‍্যাপিড ব্ল্যান্ড উচ্চ-শক্তি পাউডার — দ্রুত সেট ও শক্ত বন্ধন।",
    },
    productSlugs: ["oxilar-rapid-bland", "oxilar-super-100"],
    keywords: "Concrete repair chemical Bangladesh, leak stop admixture BD",
  },
  {
    id: "dust-control",
    title: { en: "Dust control for roads & yards", bn: "রাস্তা ও ইয়ার্ড ডাস্ট কন্ট্রোল" },
    problem: {
      en: "Fine dust on haul roads, aggregate yards and industrial floors.",
      bn: "হল রোড, অ্যাগ্রিগেট ইয়ার্ড ও ইন্ডাস্ট্রিয়াল ফ্লোরে সূক্ষ্ম ধুলা।",
    },
    approach: {
      en: "Befit Dust liquid suppressant for bases; Anti Dust powder for concrete and mortar surfaces.",
      bn: "বেফিট ডাস্ট লিকুইড সাপ্রেসেন্ট; অ্যান্টি ডাস্ট পাউডার কংক্রিট/মর্টার সারফেসের জন্য।",
    },
    productSlugs: ["oxilar-befit-dust", "oxilar-anti-dust"],
    keywords: "Dust suppressant chemical Bangladesh, industrial floor dust control",
  },
] as const;

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      {
        title: "Construction Chemical Solutions Bangladesh | Roof, Salinity, RMC | Oxilar",
      },
      {
        name: "description",
        content:
          "Application-led construction chemical solutions for Bangladesh: roof waterproofing, salinity & damp proofing, concrete admixtures for RMC, leak repairs and dust control. Oxilar Bangladesh — independent manufacturer.",
      },
      {
        name: "keywords",
        content:
          "Roof waterproofing chemical BD, Salinity damp proofing, Concrete admixture RMC Dhaka, Construction chemical solutions Bangladesh",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang, tx } = useI18n();
  const bn = lang === "bn";
  const wa = whatsappUrl(
    bn
      ? "হ্যালো অক্সিলার — সলিউশন/প্রজেক্ট সাপোর্ট চাই।"
      : "Hello Oxilar — I need solution / project support.",
  );

  return (
    <div className="container-site py-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          {bn ? "সলিউশন" : "Solutions"}
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-ink">
          {bn ? "প্রয়োগভিত্তিক কনস্ট্রাকশন কেমিক্যাল সলিউশন" : "Application-led construction chemical solutions"}
        </h1>
        <p className="mt-3 text-muted">
          {bn
            ? "সমস্যা → পদ্ধতি → সঠিক অক্সিলার পণ্য। সিভিল ইঞ্জিনিয়ার ও প্রকল্প টিমের জন্য।"
            : "Problem → approach → the right Oxilar products. Built for civil engineers and project teams in Bangladesh."}
        </p>
        <p className="mt-2 text-sm text-ink-soft">{bn ? SITE.sourcingLine.bn : SITE.sourcingLine.en}</p>
      </header>

      <div className="mt-10 space-y-10">
        {solutions.map((s) => {
          const linked = products.filter((p) => (s.productSlugs as readonly string[]).includes(p.slug));
          return (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl bg-card p-6 ring-1 ring-line sm:p-8"
            >
              <h2 className="text-2xl font-semibold text-ink">{tx(s.title)}</h2>
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-amber">
                    {bn ? "সমস্যা" : "Problem"}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{tx(s.problem)}</p>
                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">
                    {bn ? "অক্সিলার পদ্ধতি" : "Oxilar approach"}
                  </h3>
                  <p className="mt-2 text-sm text-ink">{tx(s.approach)}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-sky">
                    {bn ? "সুপারিশকৃত পণ্য" : "Recommended products"}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {linked.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          className="flex items-center justify-between gap-3 rounded-xl bg-paper px-4 py-3 ring-1 ring-line hover:ring-brand"
                        >
                          <span>
                            <span className="block text-xs font-semibold text-sky">{p.sku}</span>
                            <span className="font-semibold text-ink">{tx(p.name)}</span>
                          </span>
                          <span className="text-sm text-brand">{bn ? "দেখুন" : "View"}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      to="/calculators"
                      className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-paper"
                    >
                      {bn ? "ডোজ ক্যালকুলেটর" : "Dosage calculator"}
                    </Link>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full bg-sky px-4 text-sm font-semibold text-paper"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-12 rounded-2xl bg-brand px-6 py-8 text-paper sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-paper">
            {bn ? "সাইট পরিদর্শন বা আরএফকিউ?" : "Site support or RFQ?"}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-paper/90">
            {bn
              ? "ডোজ, টিডিএস বা ড্রাম সাপ্লাই — কল, হোয়াটসঅ্যাপ বা পণ্য পেজ থেকে আরএফকিউতে যোগ করুন।"
              : "Dosage, TDS or drum supply — call, WhatsApp, or add lines from any product page."}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-0">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex min-h-12 items-center rounded-full bg-paper px-5 font-semibold text-brand-deep"
          >
            {SITE.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 font-semibold text-paper"
          >
            {bn ? "যোগাযোগ" : "Contact"}
          </Link>
        </div>
      </section>
    </div>
  );
}
