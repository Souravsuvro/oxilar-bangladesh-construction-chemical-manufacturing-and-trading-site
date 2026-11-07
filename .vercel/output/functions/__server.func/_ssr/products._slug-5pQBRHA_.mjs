import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useI18n, f as products, i as useRfq, n as Route } from "./router-42WzPhYH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-5pQBRHA_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { slug } = Route.useParams();
	const p = products.find((x) => x.slug === slug);
	const { tx, lang } = useI18n();
	const add = useRfq((s) => s.add);
	const [pack, setPack] = (0, import_react.useState)(p?.packs[0] ?? "20L");
	if (!p) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-site py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: lang === "bn" ? "পণ্য পাওয়া যায়নি।" : "Product not found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/products",
			className: "mt-4 inline-block text-brand",
			children: "←"
		})]
	});
	const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 2);
	const schema = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: p.name.en,
		sku: p.sku,
		brand: "Oxilar Bangladesh",
		description: p.short.en
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "container-site py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/products",
				className: "text-sm font-semibold text-brand",
				children: lang === "bn" ? "সব পণ্য" : "All products"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name.en,
					className: "w-full rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-sky",
						children: p.sku
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-4xl font-semibold",
						children: tx(p.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: tx(p.short)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: p.packs.map((pk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPack(pk),
							className: `min-h-11 rounded-full px-4 text-sm font-semibold ${pack === pk ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`,
							children: pk
						}, pk))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-4 min-h-12 rounded-full bg-brand px-6 font-semibold text-paper",
						onClick: () => add({
							sku: p.sku,
							name: p.name.en,
							pack,
							note: ""
						}),
						children: lang === "bn" ? "আরএফকিউতে যোগ করুন" : "Add to RFQ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-8 text-lg font-semibold",
						children: lang === "bn" ? "ডোজ" : "Dosage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm",
						children: tx(p.dosage)
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: lang === "bn" ? "ব্যবহার" : "Applications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5 text-sm text-muted",
						children: p.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: tx(a) }, a.en))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: lang === "bn" ? "প্রয়োগ" : "Method"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2 list-decimal space-y-2 pl-5 text-sm text-muted",
						children: p.method.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: tx(a) }, a.en))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-semibold",
							children: lang === "bn" ? "সতর্কতা" : "Safety"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-2 text-sm text-muted",
							children: p.safety.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: tx(a) }, a.en))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-4 space-y-2",
							children: p.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3 border-b border-line py-1 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: tx(s.label)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: tx(s.value)
								})]
							}, s.label.en))
						})
					] })
				]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: lang === "bn" ? "সম্পর্কিত" : "Related"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-3",
					children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/products/$slug",
						params: { slug: r.slug },
						className: "rounded-full bg-card px-4 py-3 text-sm font-semibold ring-1 ring-line",
						children: tx(r.name)
					}, r.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductDetail as component };
