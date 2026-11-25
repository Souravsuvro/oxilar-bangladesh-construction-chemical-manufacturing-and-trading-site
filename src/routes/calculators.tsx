import { createFileRoute } from "@tanstack/react-router";
import { CalculatorSuite } from "@/components/calculators/Calculators";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Admixture Dosage Calculator | Cement Bag & Slab | Oxilar" },
      {
        name: "description",
        content:
          "Calculate Damp Guard, Solid Bond and SB-250 dose by slab volume or cement bags. Site estimates for 1L–200L packs. Always confirm with trial mix and current TDS.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { lang } = useI18n();
  const bn = lang === "bn";
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">
        {bn ? "অ্যাডমিক্সচার ডোজ ও কভারেজ ক্যালকুলেটর" : "Admixture dosage and coverage calculators"}
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        {bn
          ? "অনুমান সাইট পরিকল্পনার জন্য। চূড়ান্ত ডোজ ট্রায়াল মিক্স ও বর্তমান টিডিএস মেনে নিন। সাধারণ শুরুর ডোজ প্রতি ৫০ কেজি ব্যাগে প্রায় ৩০০ মিলি।"
          : "Estimates are for site planning. Final dose follows a trial mix and the current TDS. Typical starting dose is about 300 ml per 50 kg cement bag."}
      </p>
      <div className="mt-8">
        <CalculatorSuite />
      </div>
      <section className="mt-8 rounded-xl bg-amber-soft p-4 text-sm text-ink">
        {bn
          ? "ভলিউম মোড: ঘনমিটার × লিটার/ঘনমিটার। ব্যাগ মোড: ব্যাগ × মিলি।"
          : "Volume mode: cubic metres × litres per cubic metre. Bag mode: bags × millilitres."}
      </section>
    </div>
  );
}
