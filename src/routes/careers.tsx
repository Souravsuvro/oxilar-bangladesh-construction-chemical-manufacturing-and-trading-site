import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react"; 
import { useI18n } from "@/lib/i18n";
import { leadsConfigured, sendLead, trackLead } from "@/lib/leads"; 
import { SITE } from "@/lib/site";

const openings = [
  {
    id: "sales-dhaka",
    title: { en: "Sales Executive — Dhaka", bn: "সেলস এক্সিকিউটিভ — ঢাকা" },
    type: { en: "Full-time · Field + office", bn: "ফুল-টাইম · ফিল্ড + অফিস" },
    body: {
      en: "Grow dealer and project accounts for Super-100, Damp Guard and Solid Bond. Civil or commercial sales experience preferred.",
      bn: "সুপার-১০০, ড্যাম্প গার্ড ও সলিড বন্ডের ডিলার ও প্রকল্প অ্যাকাউন্ট বাড়ান। সিভিল/কমার্শিয়াল সেলস অভিজ্ঞতা অগ্রাধিকার।",
    },
  },
  {
    id: "tech-service",
    title: { en: "Technical Service Engineer", bn: "টেকনিক্যাল সার্ভিস ইঞ্জিনিয়ার" },
    type: { en: "Full-time · Site support", bn: "ফুল-টাইম · সাইট সাপোর্ট" },
    body: {
      en: "Trial mixes, dosage guidance and TDS support for consultants and site engineers across Bangladesh.",
      bn: "সারা দেশে কনসালট্যান্ট ও সাইট ইঞ্জিনিয়ারদের ট্রায়াল মিক্স, ডোজ ও টিডিএস সহায়তা।",
    },
  },
  {
    id: "production-dhamrai",
    title: { en: "Production Operator — Dhamrai", bn: "প্রোডাকশন অপারেটর — ধামরাই" },
    type: { en: "Full-time · Plant", bn: "ফুল-টাইম · প্ল্যান্ট" },
    body: {
      en: "Blending, packing and quality checks at the Kalampur plant. Shift work; safety training provided.",
      bn: "কালামপুর প্ল্যান্টে ব্লেন্ডিং, প্যাকিং ও কোয়ালিটি চেক। শিফট ডিউটি; সেফটি ট্রেনিং দেওয়া হয়।",
    },
  },
  {
    id: "accounts",
    title: { en: "Accounts & Admin Executive", bn: "অ্যাকাউন্টস ও অ্যাডমিন এক্সিকিউটিভ" },
    type: { en: "Full-time · Mohammadpur office", bn: "ফুল-টাইম · মোহাম্মদপুর অফিস" },
    body: {
      en: "Invoicing, dealer documentation and office coordination. Basic accounting software skills required.",
      bn: "ইনভয়েসিং, ডিলার ডকুমেন্টেশন ও অফিস সমন্বয়। বেসিক অ্যাকাউন্টিং সফটওয়্যার দক্ষতা প্রয়োজন।",
    },
  },
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Join Our Team | Careers at Oxilar Bangladesh" },
      {
        name: "description",
        content:
          "Open roles at Oxilar Bangladesh — sales, technical service, production and office. Apply with cover letter. Email applications to oxilarbangladesh@gmail.com.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang, tx } = useI18n();
  const bn = lang === "bn";
  const started = useRef(Date.now());
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [emailed, setEmailed] = useState(false);
  const [err, setErr] = useState("");
  const [position, setPosition] = useState(openings[0].id);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    const fd = new FormData(e.currentTarget);

    if (String(fd.get("company_url") || "").trim()) {
      setOk(true);
      setEmailed(true);
      e.currentTarget.reset();
      return;
    }
 
    if (Date.now() - started.current < 4000) {
      setErr(bn ? "একটু অপেক্ষা করে আবার পাঠান।" : "Please wait a moment and try again.");
      return;
    }

    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const cover = String(fd.get("cover") || "").trim();
    const resume = fd.get("resume");
    const resumeName =
      resume && typeof resume === "object" && "name" in resume && (resume as File).name
        ? (resume as File).name
        : "";

    if (!name || !phone || !email || !cover) {
      setErr(bn ? "সব প্রয়োজনীয় ঘর পূরণ করুন।" : "Please complete all required fields.");
      return;
    }

    if (resume && typeof resume === "object" && "size" in resume && (resume as File).size > 2_500_000) {
      setErr(
        bn
          ? "রিজিউমি ২.৫ এমবির নিচে রাখুন, অথবা ইমেইলে পাঠান।"
          : "Keep resume under 2.5 MB, or email it separately.",
      );
      return;
    }

    setBusy(true);
    const role = openings.find((o) => o.id === position);
    const result = await sendLead({
      type: "careers",
      name,
      phone,
      email,
      position: role ? role.title.en : position,
      coverLetter: cover,
      resumeName: resumeName || undefined,
      detail: resumeName
        ? `Applicant noted resume file: ${resumeName}. Please request the file by email if not attached via Formspree.`
        : "No resume file uploaded — applicant may email CV separately.",
      at: new Date().toISOString(),
    });
    setBusy(false);

    if (!result.ok && leadsConfigured()) {
      setErr(
        bn
          ? `ফর্ম পাঠানো যায়নি। সরাসরি ইমেইল করুন: ${SITE.email}`
          : `Could not submit. Email us directly: ${SITE.email}`,
      );
      return;
    }

    setEmailed(result.emailed);
    setOk(true);
    trackLead("careers_application", { position, emailed: result.emailed });
    e.currentTarget.reset();
    started.current = Date.now();
  };

  return (
    <div className="container-site py-10">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          {bn ? "ক্যারিয়ার" : "Careers"}
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-ink">
          {bn ? "আমাদের টিমে যোগ দিন" : "Join our team"}
        </h1>
        <p className="mt-3 text-muted">
          {bn
            ? "অক্সিলার বাংলাদেশ স্বাধীন কনস্ট্রাকশন কেমিক্যাল প্রস্তুতকারক। খোলা পদ দেখুন এবং আবেদন করুন।"
            : "Oxilar Bangladesh is an independent construction chemicals manufacturer. Browse open roles and apply below."}
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          {bn ? SITE.sourcingLine.bn : SITE.sourcingLine.en}
        </p>
      </header>

      {/* HR Department section - new requirement */}
      <section className="mt-10 rounded-xl bg-card p-6 ring-1 ring-line">
        <h2 className="text-2xl font-semibold text-ink">
          {bn ? "ক্যারিয়ার সুযোগ — এইচআর বিভাগ" : "Career Opportunities – HR Department"}
        </h2>
        <p className="mt-3 text-sm text-muted">
          {bn
            ? "আমাদের টিমে যোগ দিতে আগ্রহী? আপডেটেড সিভি নিচের ইমেইলে পাঠান অথবা আরও তথ্যের জন্য যোগাযোগ করুন।"
            : "Interested in joining our team? Please send your updated CV to the following email address or contact us for further information."}
        </p>
        <ul className="mt-4 space-y-2 text-sm text-ink">
          <li>
            <span className="font-semibold">{bn ? "ইমেইল:" : "Email:"}</span>{" "}
            <a className="text-brand font-semibold" href="mailto:oxilarbangladesh@gmail.com">
              oxilarbangladesh@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold">{bn ? "যোগাযোগ:" : "Contact:"}</span>{" "}
            <a className="text-brand font-semibold" href="tel:+8801960198313">
              01960198313
            </a>
          </li>
        </ul>
        <p className="mt-4 text-sm font-medium text-ink">
          {bn ? "আপনার কাছ থেকে শুনতে চাই!" : "We look forward to hearing from you!"}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">{bn ? "খোলা পদ" : "Open positions"}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {openings.map((job) => (
            <article key={job.id} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <h3 className="text-lg font-semibold text-ink">{tx(job.title)}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sky">{tx(job.type)}</p>
              <p className="mt-3 text-sm text-muted">{tx(job.body)}</p>
              <button
                type="button"
                className="mt-4 min-h-11 rounded-full bg-ink px-4 text-sm font-semibold text-paper"
                onClick={() => {
                  setPosition(job.id);
                  document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {bn ? "এই পদে আবেদন" : "Apply for this role"}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <h2 className="text-2xl font-semibold">{bn ? "কীভাবে আবেদন করবেন" : "How to apply"}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink">
            <li>{bn ? "পদ বেছে নিন এবং ফর্ম পূরণ করুন।" : "Choose a role and complete the form."}</li>
            <li>
              {bn
                ? `রিজিউমি ইমেইলে পাঠান: ${SITE.email} — বিষয়: Application — [পদের নাম]`
                : `Email your resume to ${SITE.email} with subject: Application — [role name]`}
            </li>
            <li>{bn ? "স্প্যাম এড়াতে ফর্মের লুকানো ঘর খালি রাখুন।" : "Leave hidden fields empty (anti-spam)."}</li>
          </ol>
          <p className="mt-4 text-sm text-muted">
            {bn
              ? "আমরা শুধু বাস্তব আবেদন গ্রহণ করি। স্বয়ংক্রিয় বট বার্তা ইনবক্সে যায় না।"
              : "We only process genuine applications. Automated spam is filtered before it reaches the inbox."}
          </p>
          <a className="mt-4 inline-flex min-h-12 items-center font-semibold text-brand" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Application — Oxilar Bangladesh")}`}>
            {SITE.email}
          </a>
        </div>

        <form
          id="apply-form"
          onSubmit={submit}
          className="rounded-xl bg-card p-5 ring-1 ring-line sm:p-6"
          noValidate
        >
          <h2 className="text-xl font-semibold">{bn ? "আবেদন ফর্ম" : "Application form"}</h2>

          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label>
              Company website
              <input name="company_url" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium">
            {bn ? "পদ" : "Position"}
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1 h-12 w-full rounded-md border border-line px-3 text-ink"
            >
              {openings.map((j) => (
                <option key={j.id} value={j.id}>
                  {tx(j.title)}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-3 block text-sm font-medium">
            {bn ? "পূর্ণ নাম" : "Full name"}
            <input name="name" required autoComplete="name" className="mt-1 h-12 w-full rounded-md border border-line px-3 text-ink" />
          </label>

          <label className="mt-3 block text-sm font-medium">
            {bn ? "মোবাইল" : "Mobile"}
            <input name="phone" required inputMode="tel" autoComplete="tel" className="mt-1 h-12 w-full rounded-md border border-line px-3 text-ink" />
          </label>

          <label className="mt-3 block text-sm font-medium">
            {bn ? "ইমেইল" : "Email"}
            <input name="email" type="email" required autoComplete="email" className="mt-1 h-12 w-full rounded-md border border-line px-3 text-ink" />
          </label>

          <label className="mt-3 block text-sm font-medium">
            {bn ? "কভার লেটার" : "Cover letter"}
            <textarea name="cover" required rows={5} className="mt-1 w-full rounded-md border border-line px-3 py-2 text-ink" placeholder={bn ? "আপনার অভিজ্ঞতা ও আগ্রহ লিখুন…" : "Briefly share experience and why Oxilar…"} />
          </label>

          <label className="mt-3 block text-sm font-medium">
            {bn ? "রিজিউমি (ঐচ্ছিক, PDF/DOC, সর্বোচ্চ ২.৫ এমবি)" : "Resume (optional, PDF/DOC, max 2.5 MB)"}
            <input name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf" className="mt-1 block w-full text-sm text-ink" />
          </label>
          <p className="mt-1 text-xs text-muted">
            {bn
              ? `নিরাপদ ডেলিভারির জন্য রিজিউমি ${SITE.email}-এও পাঠান।`
              : `Also email your resume to ${SITE.email} for reliable delivery.`}
          </p>

          <button
            type="submit"
            disabled={busy}
            className="mt-5 min-h-12 w-full rounded-full bg-brand px-6 font-semibold text-paper disabled:opacity-50 sm:w-auto"
          >
            {busy ? (bn ? "পাঠানো হচ্ছে…" : "Submitting…") : bn ? "আবেদন পাঠান" : "Submit application"}
          </button>

          {ok && (
            <p className="mt-3 text-sm text-brand-deep" role="status">
              {emailed
                ? bn
                  ? `আবেদন গ্রহণ হয়েছে। রিজিউমি ${SITE.email}-এ পাঠাতে ভুলবেন না।`
                  : `Application received. Please also email your resume to ${SITE.email}.`
                : bn
                  ? `আবেদন সংরক্ষিত। ইনবক্স কনফিগার না থাকলে সরাসরি ইমেইল করুন: ${SITE.email}`
                  : `Saved on this device. If inbox is not configured, email ${SITE.email} directly.`}
            </p>
          )}
          {err && (
            <p className="mt-2 text-sm text-amber" role="alert">
              {err}
            </p>
          )}
        </form>
      </section>
    </div>
  ); 
}

