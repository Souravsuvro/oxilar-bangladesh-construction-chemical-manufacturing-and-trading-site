import { Link } from "@tanstack/react-router";
import { testimonials, whyChooseUs } from "@/data/trust";
import { useI18n } from "@/lib/i18n";

/** Competitor-style trust + social proof — Oxilar-true claims only. */
export function TrustBlocks() {
  const { lang, tx } = useI18n();
  const bn = lang === "bn";

  return (
    <>
      <section className="bg-card py-14" aria-labelledby="why-heading">
        <div className="container-site">
          <h2 id="why-heading" className="text-3xl font-semibold">
            {bn ? "কেন অক্সিলার" : "Why Oxilar"}
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            {bn
              ? "বাংলাদেশের সিভিল ইঞ্জিনিয়ার ও প্রকল্প টিমের জন্য স্বচ্ছ, ল্যাব-রেফারেন্সড ও স্বাধীন প্রস্তুতকারক।"
              : "Transparent, lab-referenced and independent — built for civil engineers and project teams in Bangladesh."}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <article key={item.title.en} className="rounded-xl bg-paper p-5 ring-1 ring-line">
                <h3 className="text-lg font-semibold text-ink">{tx(item.title)}</h3>
                <p className="mt-2 text-sm text-muted">{tx(item.body)}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              to="/solutions"
              className="inline-flex min-h-12 items-center rounded-full bg-brand px-5 font-semibold text-paper"
            >
              {bn ? "সলিউশন দেখুন" : "View solutions"}
            </Link>
            <Link
              to="/about"
              className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 font-semibold text-paper"
            >
              {bn ? "আমাদের কথা" : "About us"}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-14" aria-labelledby="voice-heading">
        <h2 id="voice-heading" className="text-3xl font-semibold">
          {bn ? "সাইট টিম যা বলে" : "What site teams value"}
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          {bn
            ? "ডোজ, টিডিএস ও ট্রায়াল মিক্স একসাথে — বিশ্বাসযোগ্য সাপ্লাই পার্টনারশিপের ভিত্তি।"
            : "Dose, TDS and trial mix together — the basis of a reliable supply partnership."}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.by.en} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <p className="text-sm leading-relaxed text-ink">“{tx(t.quote)}”</p>
              <footer className="mt-4 text-sm">
                <cite className="not-italic font-semibold text-ink">{tx(t.by)}</cite>
                <p className="text-muted">{tx(t.role)}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
