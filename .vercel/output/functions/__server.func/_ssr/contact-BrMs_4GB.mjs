import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n } from "./router-42WzPhYH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BrMs_4GB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { lang } = useI18n();
	const bn = lang === "bn";
	const [ok, setOk] = (0, import_react.useState)(false);
	const submit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const row = Object.fromEntries(fd.entries());
		const prev = JSON.parse(localStorage.getItem("oxilar-contact") || "[]");
		localStorage.setItem("oxilar-contact", JSON.stringify([row, ...prev].slice(0, 30)));
		setOk(true);
		e.currentTarget.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: bn ? "যোগাযোগ" : "Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-card p-5 ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: bn ? "কর্পোরেট অফিস" : "Corporate office"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: "31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Office map",
							className: "mt-3 h-56 w-full rounded-lg border-0",
							src: `https://maps.google.com/maps?q=${encodeURIComponent("31/1 Babar Road Mohammadpur Dhaka")}&z=15&output=embed`
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-card p-5 ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: bn ? "কারখানা" : "Factory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm",
							children: "Kalampur, Dhamrai, Dhaka"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Factory map",
							className: "mt-3 h-56 w-full rounded-lg border-0",
							src: `https://maps.google.com/maps?q=${encodeURIComponent("Kalampur Dhamrai Dhaka")}&z=13&output=embed`
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "block min-h-11 py-2 font-semibold text-brand",
							href: "tel:+8801960198313",
							children: "+88 0196-0198313"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "block min-h-11 py-2 font-semibold text-brand",
							href: "mailto:oxilarbangladesh@gmail.com",
							children: "oxilarbangladesh@gmail.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-2",
							children: "www.oxilarbd.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-12 items-center rounded-full bg-sky px-5 font-semibold text-paper",
							href: "https://wa.me/8801960198313",
							target: "_blank",
							rel: "noreferrer",
							children: "WhatsApp"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "rounded-xl bg-card p-5 ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: bn ? "বার্তা" : "Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 block text-sm font-medium",
							children: [bn ? "নাম" : "Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								className: "mt-1 h-12 w-full rounded-md border border-line px-3"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 block text-sm font-medium",
							children: [bn ? "ফোন" : "Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "phone",
								required: true,
								className: "mt-1 h-12 w-full rounded-md border border-line px-3"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 block text-sm font-medium",
							children: [bn ? "বিষয়" : "Topic", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "topic",
								className: "mt-1 h-12 w-full rounded-md border border-line px-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: bn ? "সাধারণ" : "General" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: bn ? "সাইট পরিদর্শন" : "Site inspection" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: bn ? "পণ্য সহায়তা" : "Product support" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-3 block text-sm font-medium",
							children: [bn ? "বিবরণ" : "Detail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "detail",
								required: true,
								rows: 4,
								className: "mt-1 w-full rounded-md border border-line px-3 py-2"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper",
							type: "submit",
							children: bn ? "পাঠান" : "Send"
						}),
						ok && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-brand-deep",
							children: bn ? "বার্তা এই ডিভাইসে আছে। জরুরি হলে কল করুন।" : "Message stored on this device. Call if it is urgent."
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
