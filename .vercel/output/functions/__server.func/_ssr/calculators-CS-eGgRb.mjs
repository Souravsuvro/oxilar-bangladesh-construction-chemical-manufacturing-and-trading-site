import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n } from "./router-42WzPhYH.mjs";
import { t as CalculatorSuite } from "./Calculators-Bmv_5NMU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calculators-CS-eGgRb.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { lang } = useI18n();
	const bn = lang === "bn";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: bn ? "টেকনিক্যাল ক্যালকুলেটর" : "Technical calculators"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: bn ? "অনুমান সাইট পরিকল্পনার জন্য। চূড়ান্ত ডোজ ট্রায়াল মিক্স ও বর্তমান টিডিএস মেনে নিন। সুপার-১০০-এর শুরুর ডোজ প্রতি ৫০ কেজি ব্যাগে ৩০০ মিলি।" : "Estimates are for site planning. Final dose follows a trial mix and the current TDS. Super-100 starts at 300 ml per 50 kg bag."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculatorSuite, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-8 rounded-xl bg-amber-soft p-4 text-sm text-ink",
				children: bn ? "ভলিউম মোড: ঘনমিটার × লিটার/ঘনমিটার। ব্যাগ মোড: ব্যাগ × মিলি। ইপক্সি: বর্গফুটকে বর্গমিটারে, ৪০০ মাইক্রনে ০.৪০ লি/বর্গমি ভিত্তি।" : "Volume mode: cubic metres × litres per cubic metre. Bag mode: bags × millilitres. Epoxy: square feet to square metres, basis 0.40 L/m² at 400 micron."
			})
		]
	});
}
//#endregion
export { Page as component };
