import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, g as sheets, l as labs, y as videos } from "./router-42WzPhYH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-B4e-tSjK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { tx, lang } = useI18n();
	const [q, setQ] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("All");
	const rows = (0, import_react.useMemo)(() => sheets.filter((s) => (kind === "All" || s.kind === kind) && `${s.product} ${s.kind}`.toLowerCase().includes(q.toLowerCase())), [q, kind]);
	const bn = lang === "bn";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: bn ? "টিডিএস, এসডিএস ও ল্যাব" : "TDS, SDS and lab"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: bn ? "শিটগুলো ডেমো ডকুমেন্ট। মাঠে ব্যবহারের আগে স্বাক্ষরিত কপি নিন।" : "These sheets are demo documents. Take a signed copy before field use."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					className: "h-12 flex-1 rounded-md border border-line px-3",
					placeholder: bn ? "পণ্য খুঁজুন" : "Search product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: [
						"All",
						"TDS",
						"SDS",
						"Manual"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setKind(k),
						className: `min-h-12 rounded-full px-4 text-sm font-semibold ${kind === k ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`,
						children: k
					}, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto rounded-xl bg-card ring-1 ring-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-paper text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: bn ? "ধরন" : "Type"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: bn ? "পণ্য" : "Product"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: bn ? "ফাইল" : "File"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-semibold text-sky",
								children: r.kind
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: r.product
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "font-semibold text-brand",
									href: r.file,
									children: bn ? "খুলুন" : "Open"
								})
							})
						]
					}, r.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-semibold",
				children: bn ? "ল্যাব রেফারেন্স" : "Lab references"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-3",
				children: labs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-card p-5 ring-1 ring-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-amber",
							children: l.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-lg font-semibold",
							children: tx(l.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: tx(l.note)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "mt-4 inline-flex min-h-11 items-center font-semibold text-brand",
							href: l.file,
							children: bn ? "রিপোর্ট" : "Report"
						})
					]
				}, l.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl font-semibold",
				children: bn ? "প্রয়োগ নোট" : "Application notes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-3",
				children: videos.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-ink p-5 text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-amber",
							children: [
								v.length,
								" · ",
								bn ? "গাইড" : "Guide"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-lg font-semibold text-paper",
							children: tx(v.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-paper/75",
							children: tx(v.body)
						})
					]
				}, v.title.en))
			})
		]
	});
}
//#endregion
export { Page as component };
