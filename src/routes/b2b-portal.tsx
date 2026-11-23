import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { sendLead, trackLead } from "@/lib/leads";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/b2b-portal")({
  head: () => ({
    meta: [
      { title: "Dealer & Project Procurement | Oxilar Bangladesh" },
      { name: "description", content: "Apply for Oxilar dealership or request a bulk quotation for ready-mix plants and contractors." },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const bn = lang === "bn";
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{bn ? "ডিলার ও প্রকল্প পোর্টাল" : "Dealer and project portal"}</h1>
      <div className="mt-4 rounded-xl bg-mist/70 p-4 text-sm text-ink ring-1 ring-line">
        <p className="font-semibold">
          {bn
            ? "ডিলারশিপ অনুসন্ধানের জন্য নিচের নম্বরে যোগাযোগ করুন।"
            : "For dealership inquiries, please contact us at the following number for further details:"}
        </p>
        <p className="mt-2">
          {bn ? "যোগাযোগ নম্বর:" : "Contact Number:"}{" "}
          <a className="font-semibold text-brand" href={`tel:${SITE.dealerPhoneTel}`}>
            {SITE.dealerPhoneDisplay}
          </a>
        </p>
      </div>
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
          kind="dealer"
          title={bn ? "ডিলারশিপ আবেদন" : "Dealership application"}
          fields={[
            ["company", bn ? "প্রতিষ্ঠান" : "Company"],
            ["district", bn ? "জেলা" : "District"],
            ["phone", bn ? "ফোন" : "Phone"],
            ["store", bn ? "দোকান / গোডাউন" : "Shop or godown"],
          ]}
          bn={bn}
        />
        <FormCard
          kind="project"
          title={bn ? "প্রকল্প কোটেশন" : "Project quotation"}
          fields={[
            ["project", bn ? "প্রকল্পের নাম" : "Project name"],
            ["buyer", bn ? "ক্রেতা" : "Buyer"],
            ["phone", bn ? "ফোন" : "Phone"],
            ["scope", bn ? "স্কোপ (ছাদ / আরএমসি / ফ্লোর)" : "Scope (roof / RMC / floor)"],
          ]}
          bn={bn}
        />
      </div>
    </div>
  );
}

function FormCard({
  title,
  fields,
  kind,
  bn,
}: {
  title: string;
  fields: [string, string][];
  kind: "dealer" | "project";
  bn: boolean;
}) {
  const [ok, setOk] = useState(false);
  const [emailed, setEmailed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [wa, setWa] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(false);
    setWa("");
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (String(fd.get("company_website") || "").trim()) {
      setBusy(false);
      setOk(true);
      setEmailed(true);
      setWa("");
      form.reset();
      return;
    }

    setBusy(true);
    const phone = String(fd.get("phone") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const at = new Date().toISOString();

    let name = "";
    let topic = "";
    let detail = "";
    let waText = "";

    if (kind === "dealer") {
      const company = String(fd.get("company") || "").trim();
      const district = String(fd.get("district") || "").trim();
      const store = String(fd.get("store") || "").trim();
      name = company;
      topic = district;
      detail = [`District: ${district}`, `Shop/godown: ${store}`].join("\n");
      waText = [
        "Hello Oxilar Bangladesh — dealership application.",
        `Company: ${company}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : "",
        `District: ${district}`,
        `Shop/godown: ${store}`,
      ]
        .filter(Boolean)
        .join("\n");
    } else {
      const project = String(fd.get("project") || "").trim();
      const buyer = String(fd.get("buyer") || "").trim();
      const scope = String(fd.get("scope") || "").trim();
      name = project;
      topic = buyer;
      detail = [`Buyer: ${buyer}`, `Scope: ${scope}`].join("\n");
      waText = [
        "Hello Oxilar Bangladesh — project quotation.",
        `Project: ${project}`,
        `Phone: ${phone}`,
        email ? `Email: ${email}` : "",
        `Buyer: ${buyer}`,
        `Scope: ${scope}`,
      ]
        .filter(Boolean)
        .join("\n");
    }

    const result = await sendLead({
      type: kind,
      name,
      phone,
      email: email || undefined,
      topic,
      detail,
      at,
    });
    setBusy(false);
    setEmailed(result.emailed);
    setWa(result.emailed ? "" : whatsappUrl(waText));
    setOk(true);
    if (result.emailed) {
      trackLead(kind === "dealer" ? "dealer_form" : "project_form", { emailed: true });
      form.reset();
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-card p-5 ring-1 ring-line">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="mt-4 space-y-3">
        {fields.map(([k, label]) => (
          <label key={k} className="block text-sm font-medium">
            {label}
            <input
              name={k}
              required
              inputMode={k === "phone" ? "tel" : undefined}
              autoComplete={k === "phone" ? "tel" : undefined}
              className="mt-1 h-12 w-full rounded-md border border-line px-3"
            />
          </label>
        ))}
        <label className="block text-sm font-medium">
          {bn ? "ইমেইল (ঐচ্ছিক)" : "Email (optional)"}
          <input name="email" type="email" autoComplete="email" className="mt-1 h-12 w-full rounded-md border border-line px-3" />
        </label>
      </div>
      <button disabled={busy} className="mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper disabled:opacity-50" type="submit">
        {busy ? (bn ? "পাঠানো হচ্ছে…" : "Sending…") : bn ? "জমা দিন" : "Submit"}
      </button>
      {ok && (
        <div className="mt-3 text-sm text-brand-deep" role={emailed ? "status" : "alert"} aria-live={emailed ? "polite" : "assertive"}>
          {emailed ? (
            <p>{bn ? "টিম আপনার অনুরোধ পেয়েছে।" : "The team received your request."}</p>
          ) : (
            <>
              <p>
                {bn
                  ? "অনুরোধ পাঠানো যায়নি। হোয়াটসঅ্যাপে পাঠান অথবা আবার চেষ্টা করুন।"
                  : "Request was not sent. Send it on WhatsApp or try again."}
              </p>
              {wa && (
                <a className="mt-2 inline-flex min-h-11 items-center font-semibold text-brand" href={wa} target="_blank" rel="noreferrer">
                  {bn ? "হোয়াটসঅ্যাপে পাঠান" : "Send on WhatsApp"}
                </a>
              )}
            </>
          )}
        </div>
      )}
    </form>
  );
}
