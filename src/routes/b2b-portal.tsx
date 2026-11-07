import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/b2b-portal")({
  head: () => ({
    meta: [
      { title: "Dealer & Project Procurement | Oxilar Bangladesh" },
      { name: "description", content: "Apply for Oxilar dealership or request a bulk quotation for ready-mix plants and contractors." },
    ],
  }),
  component: Page,
});

function save(key: string, data: Record<string, string>) {
  const prev = JSON.parse(localStorage.getItem(key) || "[]") as unknown[];
  localStorage.setItem(key, JSON.stringify([{ ...data, at: new Date().toISOString() }, ...prev].slice(0, 30)));
}

function Page() {
  const { lang } = useI18n();
  const bn = lang === "bn";
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{bn ? "ডিলার ও প্রকল্প পোর্টাল" : "Dealer and project portal"}</h1>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          [bn ? "পাইকারি মূল্য" : "Wholesale pricing", bn ? "ভলিউম অনুযায়ী টায়ার, মাসিক টার্গেট নয়।" : "Tiers follow volume, not a monthly slogan."],
          [bn ? "সাইট সাপোর্ট" : "Site support", bn ? "প্রথম পোর বা ছাদে একজন অ্যাপ্লিকেশন ইঞ্জিনিয়ার।" : "An applications engineer on the first pour or roof."],
          [bn ? "সেলস কিট" : "Sales kit", bn ? "টিডিএস, ডোজ কার্ড ও পেইল ফটো।" : "TDS, dose card and pack photography."],
        ].map(([h, p]) => (
          <article key={h} className="rounded-xl bg-card p-5 ring-1 ring-line">
            <h2 className="font-semibold">{h}</h2>
            <p className="mt-2 text-sm text-muted">{p}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <FormCard
          title={bn ? "ডিলারশিপ আবেদন" : "Dealership application"}
          fields={[
            ["company", bn ? "প্রতিষ্ঠান" : "Company"],
            ["district", bn ? "জেলা" : "District"],
            ["phone", bn ? "ফোন" : "Phone"],
            ["store", bn ? "দোকান / গোডাউন" : "Shop or godown"],
          ]}
          storeKey="oxilar-dealers"
          bn={bn}
        />
        <FormCard
          title={bn ? "প্রকল্প কোটেশন" : "Project quotation"}
          fields={[
            ["project", bn ? "প্রকল্পের নাম" : "Project name"],
            ["buyer", bn ? "ক্রেতা" : "Buyer"],
            ["phone", bn ? "ফোন" : "Phone"],
            ["scope", bn ? "স্কোপ (ছাদ / আরএমসি / ফ্লোর)" : "Scope (roof / RMC / floor)"],
          ]}
          storeKey="oxilar-projects-rfq"
          bn={bn}
        />
      </div>
    </div>
  );
}

function FormCard({
  title,
  fields,
  storeKey,
  bn,
}: {
  title: string;
  fields: [string, string][];
  storeKey: string;
  bn: boolean;
}) {
  const [ok, setOk] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fields.forEach(([k]) => {
      data[k] = String(fd.get(k) || "");
    });
    save(storeKey, data);
    setOk(true);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-card p-5 ring-1 ring-line">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3">
        {fields.map(([k, label]) => (
          <label key={k} className="block text-sm font-medium">
            {label}
            <input name={k} required className="mt-1 h-12 w-full rounded-md border border-line px-3" />
          </label>
        ))}
      </div>
      <button className="mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper" type="submit">
        {bn ? "জমা দিন" : "Submit"}
      </button>
      {ok && <p className="mt-3 text-sm text-brand-deep">{bn ? "এই ব্রাউজারে সেভ হয়েছে।" : "Saved in this browser."}</p>}
    </form>
  );
}
