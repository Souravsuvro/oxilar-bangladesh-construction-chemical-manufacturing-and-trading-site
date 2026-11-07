import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, i as useRfq, r as cn } from "./router-42WzPhYH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Calculators-Bmv_5NMU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function printSummary(title, lines) {
	const w = window.open("", "_blank", "noopener,noreferrer");
	if (!w) return;
	const body = lines.map((l) => `<li>${l}</li>`).join("");
	w.document.write(`<!doctype html><html><head><title>${title}</title><style>body{font-family:sans-serif;padding:40px;color:#0f172a}h1{color:#059669;font-size:22px}</style></head><body><h1>${title}</h1><p>Oxilar Bangladesh · Filament Group · +88 0196-0198313</p><ul>${body}</ul><p>Estimates only. Confirm with a trial mix and the current TDS.</p></body></html>`);
	w.document.close();
	w.focus();
	w.print();
}
function CalculatorSuite() {
	const { lang } = useI18n();
	const add = useRfq((s) => s.add);
	const [mode, setMode] = (0, import_react.useState)("volume");
	const [L, setL] = (0, import_react.useState)(12);
	const [W, setW] = (0, import_react.useState)(8);
	const [T, setT] = (0, import_react.useState)(150);
	const [dose, setDose] = (0, import_react.useState)(1.5);
	const [bags, setBags] = (0, import_react.useState)(100);
	const [ml, setMl] = (0, import_react.useState)(300);
	const [area, setArea] = (0, import_react.useState)(2e3);
	const [micron, setMicron] = (0, import_react.useState)(400);
	const result = (0, import_react.useMemo)(() => {
		if (mode === "volume") {
			const m3 = L * W * (T / 1e3);
			const litres = m3 * dose;
			return {
				litres,
				lines: [
					`Length ${L} m × width ${W} m × thickness ${T} mm`,
					`Concrete volume ${m3.toFixed(2)} m³`,
					`Dose ${dose} L per m³`,
					`Admixture ${litres.toFixed(1)} L`,
					`4L pails ${Math.ceil(litres / 4)} · 20L pails ${Math.ceil(litres / 20)} · 200L drums ${(litres / 200).toFixed(2)}`
				]
			};
		}
		if (mode === "bags") {
			const litres = bags * ml / 1e3;
			return {
				litres,
				lines: [
					`${bags} bags × ${ml} ml`,
					`Total ${(bags * ml).toLocaleString()} ml`,
					`Volume ${litres.toFixed(2)} L`,
					`20L pails ${Math.ceil(litres / 20)} · drums ${(litres / 200).toFixed(2)}`
				]
			};
		}
		const m2 = area * .092903;
		const litres = m2 * (micron / 400) * .4;
		return {
			litres,
			lines: [
				`${area} ft² = ${m2.toFixed(1)} m²`,
				`Film ${micron} micron (basis 0.40 L/m² at 400 micron)`,
				`Coating ${litres.toFixed(1)} L`,
				`4L kits ${Math.ceil(litres / 4)} · 20L kits ${Math.ceil(litres / 20)}`
			]
		};
	}, [
		mode,
		L,
		W,
		T,
		dose,
		bags,
		ml,
		area,
		micron
	]);
	const label = lang === "bn";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[220px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-auto lg:flex-col",
			children: [
				["volume", label ? "স্ল্যাব ভলিউম" : "Slab volume"],
				["bags", label ? "সিমেন্ট ব্যাগ" : "Cement bags"],
				["epoxy", label ? "ইপক্সি কভারেজ" : "Epoxy coverage"]
			].map(([id, name]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setMode(id),
				className: cn("min-h-12 shrink-0 rounded-full px-4 text-sm font-semibold lg:rounded-xl lg:text-left", mode === id ? "bg-ink text-paper" : "bg-card text-ink ring-1 ring-line"),
				children: name
			}, id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-card p-4 ring-1 ring-line sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						mode === "volume" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: label ? "দৈর্ঘ্য (মি)" : "Length (m)",
								value: L,
								onChange: setL
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: label ? "প্রস্থ (মি)" : "Width (m)",
								value: W,
								onChange: setW
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: label ? "পুরুত্ব (মিমি)" : "Thickness (mm)",
								value: T,
								onChange: setT
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: label ? "ডোজ (লি/ঘনমি)" : "Dose (L/m³)",
								value: dose,
								step: .1,
								onChange: setDose
							})
						] }),
						mode === "bags" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: label ? "৫০ কেজি ব্যাগ" : "50 kg bags",
							value: bags,
							onChange: setBags
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: label ? "মিলি / ব্যাগ" : "ml per bag",
							value: ml,
							onChange: setMl
						})] }),
						mode === "epoxy" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: label ? "এলাকা (বর্গফুট)" : "Area (ft²)",
							value: area,
							onChange: setArea
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: label ? "পুরুত্ব (মাইক্রন)" : "Thickness (micron)",
							value: micron,
							onChange: setMicron
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2 rounded-lg bg-ink p-4 text-paper",
					children: result.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm sm:text-base",
						children: line
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-12 rounded-full bg-brand px-5 font-semibold text-paper",
						onClick: () => printSummary("Oxilar calculation", result.lines),
						children: label ? "পিডিএফ / প্রিন্ট" : "Print / save PDF"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-12 rounded-full bg-sky px-5 font-semibold text-paper",
						onClick: () => add({
							sku: "CALC",
							name: mode === "epoxy" ? "Oxilar Floor EP-400" : "Oxilar Super-100 / admixture",
							pack: result.litres > 80 ? "drum" : "20L",
							qty: Math.max(1, Math.ceil(result.litres / (result.litres > 80 ? 200 : 20))),
							note: result.lines.join(" · ")
						}),
						children: label ? "আরএফকিউতে নিন" : "Import to RFQ"
					})]
				})
			]
		})]
	});
}
function Field({ label, value, onChange, step = 1 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm font-medium",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "number",
			step,
			min: 0,
			value,
			onChange: (e) => onChange(Number(e.target.value)),
			className: "mt-1 h-12 w-full rounded-md border border-line bg-paper px-3 text-base"
		})]
	});
}
//#endregion
export { CalculatorSuite as t };
