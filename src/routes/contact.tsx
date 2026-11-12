import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

const WA =
  "https://wa.me/8801960198313?text=" +
  encodeURIComponent("Hello Oxilar Bangladesh — I would like product support / a site discussion.");

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Oxilar Bangladesh | Dhanmondi office & Dhamrai factory" },
      {
        name: "description",
        content:
          "Call +88 0196-0198313, WhatsApp, or message Oxilar Bangladesh. Office: 31/1 Babar Road, Mohammadpur. Factory: Kalampur, Dhamrai. RFQ and site support for civil engineers and dealers.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const bn = lang === "bn";
  const [ok, setOk] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const row = Object.fromEntries(fd.entries());
    const prev = JSON.parse(localStorage.getItem("oxilar-contact") || "[]") as unknown[];
    localStorage.setItem("oxilar-contact", JSON.stringify([row, ...prev].slice(0, 30)));
    setOk(true);
    try {
      const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      g?.("event", "generate_lead", { method: "contact_form" });
    } catch {
      /* no-op */
    }
    e.currentTarget.reset();
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
        <a className="inline-flex min-h-12 items-center rounded-full bg-brand px-5 font-semibold text-paper" href="tel:+8801960198313">
          +88 0196-0198313
        </a>
        <a className="inline-flex min-h-12 items-center rounded-full bg-sky px-5 font-semibold text-paper" href={WA} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 font-semibold text-paper" href="mailto:oxilarbangladesh@gmail.com">
          Email
        </a>
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "কর্পোরেট অফিস" : "Corporate office"}</h2>
          <p className="mt-2 text-sm">31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka</p>
          <iframe title="Office map" className="mt-3 h-56 w-full rounded-lg border-0" src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`} loading="lazy" />
        </section>
        <section className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "কারখানা" : "Factory"}</h2>
          <p className="mt-2 text-sm">Kalampur, Dhamrai, Dhaka</p>
          <iframe title="Factory map" className="mt-3 h-56 w-full rounded-lg border-0" src={`https://maps.google.com/maps?q=${q2}&z=13&output=embed`} loading="lazy" />
        </section>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="text-sm">
          <p className="font-semibold text-ink">{bn ? "দ্রুত যোগাযোগ" : "Fast contact"}</p>
          <a className="block min-h-11 py-2 font-semibold text-brand" href="tel:+8801960198313">+88 0196-0198313</a>
          <a className="block min-h-11 py-2 font-semibold text-brand" href="mailto:oxilarbangladesh@gmail.com">oxilarbangladesh@gmail.com</a>
          <p className="py-2">www.oxilarbd.com</p>
          <a className="inline-flex min-h-12 items-center rounded-full bg-sky px-5 font-semibold text-paper" href={WA} target="_blank" rel="noreferrer">
            {bn ? "হোয়াটসঅ্যাপে লিখুন" : "Message on WhatsApp"}
          </a>
        </div>
        <form onSubmit={submit} className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "বার্তা" : "Message"}</h2>
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
          <button className="mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper" type="submit">{bn ? "পাঠান" : "Send"}</button>
          {ok && <p className="mt-3 text-sm text-brand-deep">{bn ? "বার্তা এই ডিভাইসে আছে। জরুরি হলে কল বা হোয়াটসঅ্যাপ করুন।" : "Message stored on this device. Call or WhatsApp if urgent."}</p>}
        </form>
      </div>
    </div>
  );
}
