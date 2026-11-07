import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, h as quotes, m as projects, p as projectSectors } from "./router-42WzPhYH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-FtmoR5wr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { tx, lang } = useI18n();
	const [sector, setSector] = (0, import_react.useState)("all");
	const [split, setSplit] = (0, import_react.useState)(55);
	const list = projects.filter((p) => sector === "all" || p.sector === sector);
	const bn = lang === "bn";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: bn ? "প্রকল্প রেফারেন্স" : "Project references"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: bn ? "নিচের কাজগুলো সিস্টেমের ধরন দেখায়। ছবি সাপ্লাই ও অ্যাপ্লিকেশন রেফারেন্স, একই দেয়ালের আগে-পরে নয়।" : "These jobs show system type. Photos are supply and application references, not a single wall before and after."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex gap-2 overflow-auto",
				children: projectSectors.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSector(s.id),
					className: `min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${sector === s.id ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`,
					children: tx(s.label)
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "overflow-hidden rounded-xl bg-card ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: "",
						className: "h-52 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-sky",
								children: tx(p.place)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: tx(p.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: tx(p.summary)
							})
						]
					})]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: bn ? "সাপ্লাই বনাম সিস্টেম" : "Supply versus system"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: bn ? "স্লাইডার টেনে দুটি রেফারেন্স ফ্রেম তুলনা করুন।" : "Drag to compare two reference frames."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-4 h-72 overflow-hidden rounded-xl bg-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/stack.jpg",
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/pail.jpg",
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover",
								style: { clipPath: `inset(0 ${100 - split}% 0 0)` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": "Compare",
								type: "range",
								min: 5,
								max: 95,
								value: split,
								onChange: (e) => setSplit(Number(e.target.value)),
								className: "absolute inset-x-4 bottom-4"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-12 grid gap-4 lg:grid-cols-3",
				children: quotes.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-xl bg-card p-5 ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							"“",
							tx(q.quote),
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-3 text-xs font-semibold text-muted",
						children: tx(q.who)
					})]
				}, q.who.en))
			})
		]
	});
}
//#endregion
export { Page as component };
