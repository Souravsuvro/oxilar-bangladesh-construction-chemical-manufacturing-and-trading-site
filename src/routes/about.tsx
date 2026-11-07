import { createFileRoute } from "@tanstack/react-router";
import { leaders, sourcing } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Oxilar Bangladesh | Filament Group" },
      { name: "description", content: "Oxilar Bangladesh blends construction chemicals in Kalampur, Dhamrai, as a sister concern of Filament Group." },
    ],
  }),
  component: About,
});

function About() {
  const { tx, lang } = useI18n();
  const bn = lang === "bn";
  return (
    <article className="container-site py-10">
      <p className="text-sm font-semibold text-brand">{bn ? "কোম্পানি" : "Company"}</p>
      <h1 className="mt-2 max-w-3xl text-4xl font-semibold">{bn ? "অক্সিলার বাংলাদেশ ও ফিলামেন্ট গ্রুপ" : "Oxilar Bangladesh and Filament Group"}</h1>
      <p className="mt-4 max-w-3xl text-muted">
        {bn
          ? "অক্সিলার বাংলাদেশ কনস্ট্রাকশন কেমিক্যাল তৈরি ও আমদানি করে। ফিলামেন্ট গ্রুপের সিস্টার কনসার্ন হিসেবে অফিস মোহাম্মদপুরে এবং ব্লেন্ডিং প্ল্যান্ট ধামরাইয়ে।"
          : "Oxilar Bangladesh manufactures and trades construction chemicals. As a sister concern of Filament Group, the office sits in Mohammadpur and the blending plant in Dhamrai."}
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl bg-card p-6 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "দৃষ্টি" : "Vision"}</h2>
          <p className="mt-2 text-sm text-muted">
            {bn
              ? "লবণ, বর্ষা ও তাপ সহ্য করে এমন কাঠামো — যেন বাংলাদেশের অবকাঠামো সার্ভিস লাইফ হারায় না।"
              : "Structures that tolerate salt, monsoon and heat, so Bangladeshi infrastructure does not lose service life early."}
          </p>
        </section>
        <section className="rounded-xl bg-card p-6 ring-1 ring-line">
          <h2 className="text-xl font-semibold">{bn ? "মিশন" : "Mission"}</h2>
          <p className="mt-2 text-sm text-muted">
            {bn
              ? "ডোজ, টিডিএস ও ল্যাব শিট একসাথে দেওয়া — যাতে সাইট ইঞ্জিনিয়ার অনুমান না করে মিক্স করতে পারেন।"
              : "Ship the dose, the TDS and the lab sheet together, so a site engineer can mix without guessing."}
          </p>
        </section>
      </div>
      <section className="mt-10 grid items-start gap-6 lg:grid-cols-2">
        <img src="/media/stack.jpg" alt="Oxilar pails staged for dispatch" className="rounded-xl object-cover" />
        <div>
          <h2 className="text-2xl font-semibold">{bn ? "ধামরাই প্ল্যান্ট" : "Dhamrai plant"}</h2>
          <p className="mt-3 text-muted">
            {bn
              ? "কালামপুর, ধামরাইয়ে লিকুইড অ্যাডমিক্সচার ও ওয়াটারপ্রুফিং ব্লেন্ড হয়। ব্যাচ নম্বর পেইল ও ড্রামে থাকে। বড় অর্ডার সরাসরি প্ল্যান্ট থেকে, ছোট অর্ডার মোহাম্মদপুর অফিস থেকে।"
              : "Liquid admixtures and waterproofing are blended at Kalampur, Dhamrai. Batch numbers sit on pails and drums. Large orders leave the plant; smaller orders move through the Mohammadpur office."}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{bn ? "লিকুইড ব্লেন্ডিং ও প্যাকিং: ৪ লি, ২০ লি, ড্রাম" : "Liquid blending and pack-out: 4 L, 20 L, drums"}</li>
            <li>{bn ? "রিটেইন স্যাম্পল প্রতি ব্যাচে" : "Retained sample on every batch"}</li>
            <li>{bn ? "ক্লোরাইড স্ক্রিন চালানের আগে" : "Chloride screen before dispatch"}</li>
          </ul>
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{bn ? "কারিগরি দায়িত্ব" : "Technical roles"}</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {leaders.map((p) => (
            <article key={p.role.en} className="rounded-xl bg-card p-5 ring-1 ring-line">
              <h3 className="font-semibold">{tx(p.role)}</h3>
              <p className="mt-2 text-sm text-muted">{tx(p.focus)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{bn ? "সরবরাহ শৃঙ্খল" : "Supply chain"}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sourcing.map((s) => (
            <article key={s.code} className="rounded-xl border border-line bg-paper p-4">
              <h3 className="font-semibold">{tx(s.country)}</h3>
              <p className="text-sm text-muted">{tx(s.items)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-12 rounded-xl bg-ink p-6 text-paper">
        <h2 className="text-2xl font-semibold text-paper">{bn ? "মান ও পরিবেশ" : "Quality and handling"}</h2>
        <p className="mt-3 max-w-3xl text-sm text-paper/80">
          {bn
            ? "কাজ ISO-ধাঁচের ব্যাচ রেকর্ড, এসডিএস হাতে থাকা এবং ড্রাম ফেরত নেওয়ার নীতি অনুসরণ করে। ইপক্সি হার্ডেনার আলাদা স্টোরে, তাপ ও আগুনের উৎস থেকে দূরে।"
            : "Operations follow ISO-style batch records, SDS on hand, and a drum-return policy. Epoxy hardeners stay in a separate store, away from heat and ignition."}
        </p>
      </section>
    </article>
  );
}
