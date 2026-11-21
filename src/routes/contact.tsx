import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { sendLead, trackLead } from "@/lib/leads";
import { SITE, whatsappUrl } from "@/lib/site";

const WA = whatsappUrl(
  "Hello Oxilar Bangladesh — I would like product support / a site discussion.",
);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Oxilar Bangladesh | Dhanmondi office & Dhamrai factory" },
      {
        name: "description",
        content:
          `Call ${SITE.phoneDisplay}, WhatsApp ${SITE.whatsappDisplay}, or email ${SITE.email}. Office: Mohammadpur. Factory: Kalampur, Dhamrai. RFQ and site support.`,
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const bn = lang === "bn";
  const [ok, setOk] = useState(false);
  const [emailed, setEmailed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setOk(false);
    setBusy(true);
    setErr("");
    const fd = new FormData(form);
    if (String(fd.get("company_url") || "").trim()) {
      setBusy(false);
      setOk(true);
      setEmailed(true);
      form.reset();
      return;
    }
    const name = String(fd.get("name") || "");
    const phone = String(fd.get("phone") || "");
    const topic = String(fd.get("topic") || "");
    const detail = String(fd.get("detail") || "");
    const result = await sendLead({
      type: "contact",
      name,
      phone,
      topic,
      detail,
      at: new Date().toISOString(),
    });
    setBusy(false);
    if (!result.ok) {
      setErr(bn ? "ইমেইল পাঠানো যায়নি — হোয়াটসঅ্যাপ বা কল ব্যবহার করুন।" : "Could not reach inbox — use WhatsApp or call.");
      return;
    }
    setEmailed(result.emailed);
    setOk(true);
    trackLead("contact_form", { emailed: result.emailed });
    form.reset();
  };

  const q = encodeURIComponent("31/1 Babar Road Mohammadpur Dhaka");
  const q2 = encodeURIComponent("Kalampur Dhamrai Dhaka");
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{bn ? "যোগাযোগ" : "Contact"}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {bn
          ? "প্রকল্প, ডিলারশিপ বা সাইট পরিদর্শনের জন্য কল, হোয়াটসঅ্যাপ বা ফর্ম ব্যবহার করুন।"
          : "Call, WhatsApp or use the form for project supply, dealership or site support."}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <a className="inline-flex min-h-12 items-center rounded-full bg-brand px-5 font-semibold text-paper" href={`tel:${SITE.phoneTel}`}>
          {SITE.phoneDisplay}
        </a>
        <a className="inline-flex min-h-12 items-center rounded-full bg-sky px-5 font-semibold text-paper" href={WA} target="_blank" rel="noreferrer">
          WhatsApp {SITE.whatsappDisplay}
        </a>
        <a className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 font-semibold text-paper" href={`mailto:${SITE.email}`}>
          Email
        </a>
        <a className="inline-flex min-h-12 items-center rounded-full bg-[#1877F2] px-5 font-semibold text-paper" href={SITE.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "কর্পোরেট অফিস" : "Corporate office"}</h2>
          <p className="mt-2 text-sm">{SITE.office}</p>
          <iframe title="Office map" className="mt-3 h-56 w-full rounded-lg border-0" src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`} loading="lazy" />
        </section>
        <section className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "কারখানা" : "Factory"}</h2>
          <p className="mt-2 text-sm">{SITE.factory}</p>
          <iframe title="Factory map" className="mt-3 h-56 w-full rounded-lg border-0" src={`https://maps.google.com/maps?q=${q2}&z=13&output=embed`} loading="lazy" />
        </section>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="text-sm">
          <p className="font-semibold text-ink">{bn ? "দ্রুত যোগাযোগ" : "Fast contact"}</p>
          <a className="block min-h-11 py-2 font-semibold text-brand" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          <a className="block min-h-11 py-2 font-semibold text-brand" href={WA} target="_blank" rel="noreferrer">WhatsApp {SITE.whatsappDisplay}</a>
          <a className="block min-h-11 py-2 font-semibold text-brand" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a className="block min-h-11 py-2" href={SITE.web}>{SITE.web.replace("https://", "")}</a>
          <p className="text-muted">{bn ? SITE.sourcingLine.bn : SITE.sourcingLine.en}</p>
        </div>
        <form onSubmit={submit} className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "বার্তা" : "Message"}</h2>
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Company URL
              <input name="company_url" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <label className="mt-3 block text-sm font-medium">{bn ? "নাম" : "Name"}<input name="name" required className="mt-1 h-12 w-full rounded-md border border-line px-3 text-ink" /></label>
          <label className="mt-3 block text-sm font-medium">{bn ? "ফোন" : "Phone"}<input name="phone" required className="mt-1 h-12 w-full rounded-md border border-line px-3 text-ink" inputMode="tel" /></label>
          <label className="mt-3 block text-sm font-medium">{bn ? "বিষয়" : "Topic"}
            <select name="topic" className="mt-1 h-12 w-full rounded-md border border-line px-3 text-ink">
              <option>{bn ? "সাধারণ" : "General"}</option>
              <option>{bn ? "সাইট পরিদর্শন" : "Site inspection"}</option>
              <option>{bn ? "পণ্য সহায়তা" : "Product support"}</option>
              <option>{bn ? "ডিলারশিপ" : "Dealership"}</option>
              <option>{bn ? "আরএফকিউ" : "RFQ / pricing"}</option>
            </select>
          </label>
          <label className="mt-3 block text-sm font-medium">{bn ? "বিবরণ" : "Detail"}<textarea name="detail" required rows={4} className="mt-1 w-full rounded-md border border-line px-3 py-2 text-ink" /></label>
          <button disabled={busy} className="mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper disabled:opacity-50" type="submit">
            {busy ? (bn ? "পাঠানো হচ্ছে…" : "Sending…") : bn ? "পাঠান" : "Send"}
          </button>
          {ok && (
            <p className="mt-3 text-sm text-brand-deep">
              {emailed
                ? bn
                  ? "বার্তা ইনবক্সে পাঠানো হয়েছে। জরুরি হলে কল করুন।"
                  : "Message sent to our inbox. Call if urgent."
                : bn
                  ? "ইনবক্স সংযুক্ত নয়। হোয়াটসঅ্যাপ বা কল ব্যবহার করুন।"
                  : "Inbox is not configured. Please use WhatsApp or call."}
            </p>
          )}
          {err && <p className="mt-2 text-sm text-amber">{err}</p>}
        </form>
      </div>
    </div>
  );
}
