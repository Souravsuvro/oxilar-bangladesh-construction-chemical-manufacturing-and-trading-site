import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, d as packLabels, f as products, i as useRfq, s as categories } from "./router-42WzPhYH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CpsJxBKr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const { tx, lang, t } = useI18n();
	const add = useRfq((s) => s.add);
	const [cat, setCat] = (0, import_react.useState)("all");
	const [pack, setPack] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => products.filter((p) => {
		if (cat !== "all" && p.category !== cat) return false;
		if (pack !== "all" && !p.packs.includes(pack)) return false;
		return `${p.sku} ${p.name.en} ${p.name.bn}`.toLowerCase().includes(q.toLowerCase());
	}), [
		cat,
		pack,
		q
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold",
				children: lang === "bn" ? "পণ্য ও প্যাক" : "Products and packs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-muted",
				children: lang === "bn" ? "ক্যাটাগরি, সাইজ ও নাম দিয়ে ছাঁকুন। প্রতিটি কার্ড থেকে টিডিএস ও আরএফকিউ।" : "Filter by category, pack size and name. Each card opens the TDS path and the RFQ basket."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[240px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-2 lg:sticky lg:top-24 lg:self-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: lang === "bn" ? "খুঁজুন" : "Search",
							className: "mb-2 h-12 w-full rounded-md border border-line px-3"
						}),
						categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setCat(c.id),
							className: `block min-h-11 w-full rounded-lg px-3 text-left text-sm font-medium ${cat === c.id ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`,
							children: tx(c.label)
						}, c.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2 pt-2",
							children: [
								"all",
								"4L",
								"20L",
								"drum"
							].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPack(p),
								className: `min-h-11 rounded-full px-3 text-sm font-semibold ${pack === p ? "bg-sky text-paper" : "bg-card ring-1 ring-line"}`,
								children: p === "all" ? lang === "bn" ? "সব প্যাক" : "All packs" : tx(packLabels[p])
							}, p))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: "",
							className: "h-44 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-sky",
									children: p.sku
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold",
									children: tx(p.name)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 flex-1 text-sm text-muted",
									children: tx(p.short)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs text-ink-soft",
									children: p.packs.map((pk) => tx(packLabels[pk])).join(" · ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/products/$slug",
										params: { slug: p.slug },
										className: "inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-paper px-3 text-sm font-semibold ring-1 ring-line",
										children: lang === "bn" ? "বিস্তারিত" : "Details"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-brand px-3 text-sm font-semibold text-paper",
										onClick: () => add({
											sku: p.sku,
											name: p.name.en,
											pack: p.packs[0],
											note: ""
										}),
										children: t("addRfq")
									})]
								})
							]
						})]
					}, p.slug)), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: lang === "bn" ? "কোনো মিল নেই।" : "No matches."
					})]
				})]
			})
		]
	});
}
//#endregion
export { ProductsPage as component };
