import { createFileRoute } from "@tanstack/react-router";
import { CalculatorSuite } from "@/components/calculators/Calculators";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Dosage & Coverage Calculators | Oxilar Bangladesh" },
      { name: "description", content: "Slab volume, cement-bag dosage and epoxy coverage calculators for Oxilar Super-100 and Floor EP-400." },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const bn = lang === "bn";
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{bn ? "টেকনিক্যাল ক্যালকুলেটর" : "Technical calculators"}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {bn
          ? "অনুমান সাইট পরিকল্পনার জন্য। চূড়ান্ত ডোজ ট্রায়াল মিক্স ও বর্তমান টিডিএস মেনে নিন। সুপার-১০০-এর শুরুর ডোজ প্রতি ৫০ কেজি ব্যাগে ৩০০ মিলি।"
          : "Estimates are for site planning. Final dose follows a trial mix and the current TDS. Super-100 starts at 300 ml per 50 kg bag."}
      </p>
      <div className="mt-8">
        <CalculatorSuite />
      </div>
      <section className="mt-8 rounded-xl bg-amber-soft p-4 text-sm text-ink">
        {bn
          ? "ভলিউম মোড: ঘনমিটার × লিটার/ঘনমিটার। ব্যাগ মোড: ব্যাগ × মিলি। ইপক্সি: বর্গফুটকে বর্গমিটারে, ৪০০ মাইক্রনে ০.৪০ লি/বর্গমি ভিত্তি।"
          : "Volume mode: cubic metres × litres per cubic metre. Bag mode: bags × millilitres. Epoxy: square feet to square metres, basis 0.40 L/m² at 400 micron."}
      </section>
    </div>
  );
}
