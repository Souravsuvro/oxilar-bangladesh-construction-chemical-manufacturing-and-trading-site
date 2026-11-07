import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Oxilar Bangladesh | Dhanmondi & Dhamrai" },
      { name: "description", content: "Office at 31/1 Babar Road, Mohammadpur. Factory at Kalampur, Dhamrai. Phone +88 0196-0198313." },
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
    e.currentTarget.reset();
  };
  const q = encodeURIComponent("31/1 Babar Road Mohammadpur Dhaka");
  const q2 = encodeURIComponent("Kalampur Dhamrai Dhaka");
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{bn ? "যোগাযোগ" : "Contact"}</h1>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <section className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "কর্পোরেট অফিস" : "Corporate office"}</h2>
          <p className="mt-2 text-sm">31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka</p>
          <iframe title="Office map" className="mt-3 h-56 w-full rounded-lg border-0" src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`} />
        </section>
        <section className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "কারখানা" : "Factory"}</h2>
          <p className="mt-2 text-sm">Kalampur, Dhamrai, Dhaka</p>
          <iframe title="Factory map" className="mt-3 h-56 w-full rounded-lg border-0" src={`https://maps.google.com/maps?q=${q2}&z=13&output=embed`} />
        </section>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="text-sm">
          <a className="block min-h-11 py-2 font-semibold text-brand" href="tel:+8801960198313">+88 0196-0198313</a>
          <a className="block min-h-11 py-2 font-semibold text-brand" href="mailto:oxilarbangladesh@gmail.com">oxilarbangladesh@gmail.com</a>
          <p className="py-2">www.oxilarbd.com</p>
          <a className="inline-flex min-h-12 items-center rounded-full bg-sky px-5 font-semibold text-paper" href="https://wa.me/8801960198313" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <form onSubmit={submit} className="rounded-xl bg-card p-5 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "বার্তা" : "Message"}</h2>
          <label className="mt-3 block text-sm font-medium">{bn ? "নাম" : "Name"}<input name="name" required className="mt-1 h-12 w-full rounded-md border border-line px-3" /></label>
          <label className="mt-3 block text-sm font-medium">{bn ? "ফোন" : "Phone"}<input name="phone" required className="mt-1 h-12 w-full rounded-md border border-line px-3" /></label>
          <label className="mt-3 block text-sm font-medium">{bn ? "বিষয়" : "Topic"}
            <select name="topic" className="mt-1 h-12 w-full rounded-md border border-line px-3">
              <option>{bn ? "সাধারণ" : "General"}</option>
              <option>{bn ? "সাইট পরিদর্শন" : "Site inspection"}</option>
              <option>{bn ? "পণ্য সহায়তা" : "Product support"}</option>
            </select>
          </label>
          <label className="mt-3 block text-sm font-medium">{bn ? "বিবরণ" : "Detail"}<textarea name="detail" required rows={4} className="mt-1 w-full rounded-md border border-line px-3 py-2" /></label>
          <button className="mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper" type="submit">{bn ? "পাঠান" : "Send"}</button>
          {ok && <p className="mt-3 text-sm text-brand-deep">{bn ? "বার্তা এই ডিভাইসে আছে। জরুরি হলে কল করুন।" : "Message stored on this device. Call if it is urgent."}</p>}
        </form>
      </div>
    </div>
  );
}
