import { createFileRoute } from "@tanstack/react-router";
import { companyProfile, sourcing } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Oxilar Bangladesh | Construction Chemical Manufacturer since 2019",
      },
      {
        name: "description",
        content:
          "Independent manufacturer & importer of construction chemicals in Bangladesh. Est. 6 September 2019. Kalampur, Dhamrai plant, vision, mission, and global raw-material sourcing for engineers and contractors.",
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
          {lang === "bn"
            ? "বাংলাদেশের স্বাধীন কনস্ট্রাকশন কেমিক্যাল প্রস্তুতকারক"
            : "Independent construction chemical manufacturer in Bangladesh"}
        </h1>
        <p className="mt-2 text-lg text-muted">
          {lang === "bn"
            ? "প্রতিষ্ঠিত ৬ সেপ্টেম্বর ২০১৯ · স্বাধীন প্রস্তুতকারক ও বৈশ্বিক সরাসরি আমদানিকারক।"
            : "Established 6 September 2019 · Independent manufacturer & global direct importer."}
        </p>
      </header>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-base leading-relaxed text-ink">
          <p>{tx(p.focus)}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
              {lang === "bn" ? "আমাদের ভিশন" : "Our vision"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink">{lang === "bn" ? "উন্নত ভবিষ্যতের জন্য নির্মাণ সমাধান।" : "Construction solutions for a better future."}</p>
          </div>
          <div className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand">
              {lang === "bn" ? "আমাদের মিশন" : "Our mission"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink">{tx(p.focus)}</p>
          </div>
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
              <span className="font-semibold">{lang === "bn" ? "ফোন:" : "Phone:"}</span> {SITE.phoneDisplay}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-ink">
            {lang === "bn" ? "গ্লোবাল সোর্সিং" : "Global sourcing"}
          </h2>
          <p className="mt-2 text-sm text-muted">{tx(sourcing)}</p>
        </div>
      </section>
    </div>
  );
}
