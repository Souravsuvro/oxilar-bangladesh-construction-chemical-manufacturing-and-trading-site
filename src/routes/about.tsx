import { createFileRoute } from "@tanstack/react-router";
import { companyProfile, leaders, sourcing } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title:
          "About Oxilar Bangladesh | Independent Construction Chemical Manufacturer | Est. 2019",
      },
      {
        name: "description",
        content:
          "Oxilar Bangladesh is an independent manufacturer and global direct importer of construction chemicals. Established 6 September 2019. Vision, mission, Kalampur Dhamrai plant, and sourcing from China, Korea, Taiwan, India, Thailand and Singapore.",
      },
      {
        name: "keywords",
        content:
          "Oxilar Bangladesh about, Construction chemical manufacturer Bangladesh 2019, Independent construction chemical company BD, Kalampur Dhamrai factory, BUET CUET BCSIR lab referenced chemicals",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { lang, tx } = useI18n();
  const p = companyProfile;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          {lang === "bn" ? "আমাদের সম্পর্কে" : "About us"}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {lang === "bn" ? "অক্সিলার বাংলাদেশ" : "Oxilar Bangladesh"}
        </h1>
        <p className="mt-2 text-lg text-muted">
          {lang === "bn"
            ? "প্রতিষ্ঠিত ৬ সেপ্টেম্বর ২০১৯ · স্বাধীন প্রস্তুতকারক ও বৈশ্বিক সরাসরি আমদানিকারক।"
            : "Established 6 September 2019 · Independent manufacturer & global direct importer."}
        </p>
      </header>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-ink">
          <p>{tx(p.about)}</p>
          <p className="text-muted">{tx(p.commitment)}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
              {lang === "bn" ? "আমাদের ভিশন" : "Our vision"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink">{tx(p.vision)}</p>
          </div>
          <div className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
              {lang === "bn" ? "আমাদের মিশন" : "Our mission"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink">{tx(p.mission)}</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">
          {lang === "bn" ? "আমাদের প্রতিশ্রুতি" : "Our commitment"}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.pillars.map((pillar) => (
            <div key={pillar.title.en} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <h3 className="font-semibold text-ink">{tx(pillar.title)}</h3>
              <p className="mt-2 text-sm text-muted">{tx(pillar.body)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-ink">
            {lang === "bn" ? "কারখানা ও অফিস" : "Plant & office"}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>
              <span className="font-semibold">{lang === "bn" ? "ব্লেন্ডিং প্ল্যান্ট:" : "Blending plant:"}</span>{" "}
              Kalampur, Dhamrai, Dhaka
            </li>
            <li>
              <span className="font-semibold">{lang === "bn" ? "কর্পোরেট অফিস:" : "Corporate office:"}</span>{" "}
              31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka
            </li>
            <li>
              <span className="font-semibold">{lang === "bn" ? "ফোন:" : "Phone:"}</span> +88 0196-0198313
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">
            {lang === "bn" ? "গ্লোবাল সোর্সিং" : "Global sourcing"}
          </h2>
          <p className="mt-2 text-sm text-muted">
            {lang === "bn"
              ? "কাঁচামাল চীন, কোরিয়া, তাইওয়ান, ভারত, থাইল্যান্ড ও সিঙ্গাপুর থেকে সরাসরি আমদানি।"
              : "Raw materials direct-imported from China, Korea, Taiwan, India, Thailand and Singapore."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {sourcing.map((s) => (
              <span
                key={s.country.en}
                className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink ring-1 ring-line"
              >
                {tx(s.country)}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-ink">
          {lang === "bn" ? "নেতৃত্ব" : "Leadership"}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l) => (
            <div key={l.name.en} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <h3 className="font-semibold text-ink">{tx(l.name)}</h3>
              <p className="text-sm text-brand">{tx(l.role)}</p>
              <p className="mt-2 text-sm text-muted">{tx(l.bio)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
