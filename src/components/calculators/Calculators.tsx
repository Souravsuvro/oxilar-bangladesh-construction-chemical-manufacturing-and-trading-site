import { useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useRfq } from "@/lib/rfq-store";
import { cn } from "@/lib/utils";
import { LiveRegion } from "@/components/a11y/LiveRegion";

type Mode = "volume" | "bags" | "epoxy";

function printSummary(title: string, lines: string[]) {
  const w = window.open("", "_blank", "noopener,noreferrer");
  if (!w) return;
  const body = lines.map((l) => `<li>${l}</li>`).join("");
  w.document.write(
    `<!doctype html><html><head><title>${title}</title><style>body{font-family:sans-serif;padding:40px;color:#0f172a}h1{color:#059669;font-size:22px}</style></head><body><h1>${title}</h1><p>Oxilar Bangladesh · Independent manufacturer · +88 0196-0198313 · www.oxilarbd.com</p><ul>${body}</ul><p>Estimates only. Confirm with a trial mix and the current TDS.</p></body></html>`,
  );
  w.document.close();
  w.focus();
  w.print();
}

function trackEvent(name: string, params?: Record<string, string | number>) {
  try {
    const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof g === "function") g("event", name, params);
  } catch {
    /* no-op when GA not configured */
  }
}

export function CalculatorSuite() {
  const { lang } = useI18n();
  const add = useRfq((s) => s.add);
  const [mode, setMode] = useState<Mode>("volume");
  const [L, setL] = useState(12);
  const [W, setW] = useState(8);
  const [T, setT] = useState(150);
  const [dose, setDose] = useState(1.5);
  const [bags, setBags] = useState(100);
  const [ml, setMl] = useState(300);
  const [area, setArea] = useState(2000);
  const [micron, setMicron] = useState(400);

  const result = useMemo(() => {
    if (mode === "volume") {
      const m3 = L * W * (T / 1000);
      const litres = m3 * dose;
      return {
        litres,
        summary: `Admixture ${litres.toFixed(1)} litres for ${m3.toFixed(2)} cubic metres`,
        lines: [
          `Length ${L} m × width ${W} m × thickness ${T} mm`,
          `Concrete volume ${m3.toFixed(2)} m³`,
          `Dose ${dose} L per m³`,
          `Admixture ${litres.toFixed(1)} L`,
          `4L pails ${Math.ceil(litres / 4)} · 20L pails ${Math.ceil(litres / 20)} · 200L drums ${(litres / 200).toFixed(2)}`,
        ],
      };
    }
    if (mode === "bags") {
      const litres = (bags * ml) / 1000;
      return {
        litres,
        summary: `${litres.toFixed(2)} litres for ${bags} bags at ${ml} ml per bag`,
        lines: [
          `${bags} bags × ${ml} ml`,
          `Total ${(bags * ml).toLocaleString()} ml`,
          `Volume ${litres.toFixed(2)} L`,
          `20L pails ${Math.ceil(litres / 20)} · drums ${(litres / 200).toFixed(2)}`,
        ],
      };
    }
    const m2 = area * 0.092903;
    const litres = m2 * (micron / 400) * 0.4;
    return {
      litres,
      summary: `Coating ${litres.toFixed(1)} litres for ${area} square feet at ${micron} micron`,
      lines: [
        `${area} ft² = ${m2.toFixed(1)} m²`,
        `Film ${micron} micron (basis 0.40 L/m² at 400 micron)`,
        `Coating ${litres.toFixed(1)} L`,
        `4L kits ${Math.ceil(litres / 4)} · 20L kits ${Math.ceil(litres / 20)}`,
      ],
    };
  }, [mode, L, W, T, dose, bags, ml, area, micron]);

  const label = lang === "bn";
  const modeLabel =
    mode === "volume"
      ? label
        ? "স্ল্যাব ভলিউম"
        : "Slab volume"
      : mode === "bags"
        ? label
          ? "সিমেন্ট ব্যাগ"
          : "Cement bags"
        : label
          ? "ইপক্সি কভারেজ"
          : "Epoxy coverage";

  return (
    <div className="grid gap-6 text-ink lg:grid-cols-[220px_1fr]">
      <LiveRegion
        message={`${modeLabel}. ${result.summary}.`}
        politeness="polite"
      />
      <div className="flex gap-2 overflow-auto lg:flex-col" role="tablist" aria-label={label ? "ক্যালকুলেটর মোড" : "Calculator mode"}>
        {(
          [
            ["volume", label ? "স্ল্যাব ভলিউম" : "Slab volume"],
            ["bags", label ? "সিমেন্ট ব্যাগ" : "Cement bags"],
            ["epoxy", label ? "ইপক্সি কভারেজ" : "Epoxy coverage"],
          ] as const
        ).map(([id, name]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={mode === id}
            onClick={() => setMode(id)}
            className={cn(
              "min-h-12 shrink-0 rounded-full px-4 text-sm font-semibold lg:rounded-xl lg:text-left",
              mode === id ? "bg-ink text-paper" : "bg-card text-ink ring-1 ring-line",
            )}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-card p-4 text-ink ring-1 ring-line sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {mode === "volume" && (
            <>
              <Field label={label ? "দৈর্ঘ্য (মি)" : "Length (m)"} value={L} onChange={setL} />
              <Field label={label ? "প্রস্থ (মি)" : "Width (m)"} value={W} onChange={setW} />
              <Field label={label ? "পুরুত্ব (মিমি)" : "Thickness (mm)"} value={T} onChange={setT} />
              <Field label={label ? "ডোজ (লি/ঘনমি)" : "Dose (L/m³)"} value={dose} step={0.1} onChange={setDose} />
            </>
          )}
          {mode === "bags" && (
            <>
              <Field label={label ? "৫০ কেজি ব্যাগ" : "50 kg bags"} value={bags} onChange={setBags} />
              <Field label={label ? "মিলি / ব্যাগ" : "ml per bag"} value={ml} onChange={setMl} />
            </>
          )}
          {mode === "epoxy" && (
            <>
              <Field label={label ? "এলাকা (বর্গফুট)" : "Area (ft²)"} value={area} onChange={setArea} />
              <Field label={label ? "পুরুত্ব (মাইক্রন)" : "Thickness (micron)"} value={micron} onChange={setMicron} />
            </>
          )}
        </div>
        <ul
          className="mt-6 space-y-2 rounded-lg bg-ink p-4 text-paper"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          aria-label={label ? "হিসাবের ফল" : "Calculation result"}
        >
          {result.lines.map((line) => (
            <li key={line} className="text-sm sm:text-base">
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="min-h-12 rounded-full bg-brand px-5 font-semibold text-paper"
            onClick={() => {
              trackEvent("calculator_print", { mode });
              printSummary("Oxilar calculation", result.lines);
            }}
          >
            {label ? "পিডিএফ / প্রিন্ট" : "Print / save PDF"}
          </button>
          <button
            type="button"
            className="min-h-12 rounded-full bg-sky px-5 font-semibold text-paper"
            onClick={() => {
              trackEvent("calculator_rfq", { mode, litres: Math.round(result.litres) });
              add({
                sku: "CALC",
                name: mode === "epoxy" ? "Oxilar Floor EP-400" : "Oxilar Super-100 / admixture",
                pack: result.litres > 80 ? "drum" : "20L",
                qty: Math.max(1, Math.ceil(result.litres / (result.litres > 80 ? 200 : 20))),
                note: result.lines.join(" · "),
              });
            }}
          >
            {label ? "আরএফকিউতে নিন" : "Import to RFQ"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
}) {
  return (
    <label className="block text-sm font-semibold text-ink">
      {label}
      <input
        type="number"
        step={step}
        min={0}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 h-12 w-full rounded-md border border-line bg-paper px-3 text-base font-medium text-ink"
      />
    </label>
  );
}
