import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n } from "./router-42WzPhYH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/b2b-portal-BE72vwLO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function save(key, data) {
	const prev = JSON.parse(localStorage.getItem(key) || "[]");
	localStorage.setItem(key, JSON.stringify([{
		...data,
		at: (/* @__PURE__ */ new Date()).toISOString()
	}, ...prev].slice(0, 30)));
}
function Page() {
	const { lang } = useI18n();
	const bn = lang === "bn";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: bn ? "ডিলার ও প্রকল্প পোর্টাল" : "Dealer and project portal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 md:grid-cols-3",
				children: [
					[bn ? "পাইকারি মূল্য" : "Wholesale pricing", bn ? "ভলিউম অনুযায়ী টায়ার, মাসিক টার্গেট নয়।" : "Tiers follow volume, not a monthly slogan."],
					[bn ? "সাইট সাপোর্ট" : "Site support", bn ? "প্রথম পোর বা ছাদে একজন অ্যাপ্লিকেশন ইঞ্জিনিয়ার।" : "An applications engineer on the first pour or roof."],
					[bn ? "সেলস কিট" : "Sales kit", bn ? "টিডিএস, ডোজ কার্ড ও পেইল ফটো।" : "TDS, dose card and pack photography."]
				].map(([h, p]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-card p-5 ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: h
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: p
					})]
				}, h))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormCard, {
					title: bn ? "ডিলারশিপ আবেদন" : "Dealership application",
					fields: [
						["company", bn ? "প্রতিষ্ঠান" : "Company"],
						["district", bn ? "জেলা" : "District"],
						["phone", bn ? "ফোন" : "Phone"],
						["store", bn ? "দোকান / গোডাউন" : "Shop or godown"]
					],
					storeKey: "oxilar-dealers",
					bn
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormCard, {
					title: bn ? "প্রকল্প কোটেশন" : "Project quotation",
					fields: [
						["project", bn ? "প্রকল্পের নাম" : "Project name"],
						["buyer", bn ? "ক্রেতা" : "Buyer"],
						["phone", bn ? "ফোন" : "Phone"],
						["scope", bn ? "স্কোপ (ছাদ / আরএমসি / ফ্লোর)" : "Scope (roof / RMC / floor)"]
					],
					storeKey: "oxilar-projects-rfq",
					bn
				})]
			})
		]
	});
}
function FormCard({ title, fields, storeKey, bn }) {
	const [ok, setOk] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = {};
		fields.forEach(([k]) => {
			data[k] = String(fd.get(k) || "");
		});
		save(storeKey, data);
		setOk(true);
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "rounded-xl bg-card p-5 ring-1 ring-line",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-3",
				children: fields.map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm font-medium",
					children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: k,
						required: true,
						className: "mt-1 h-12 w-full rounded-md border border-line px-3"
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper",
				type: "submit",
				children: bn ? "জমা দিন" : "Submit"
			}),
			ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-brand-deep",
				children: bn ? "এই ব্রাউজারে সেভ হয়েছে।" : "Saved in this browser."
			})
		]
	});
}
//#endregion
export { Page as component };
