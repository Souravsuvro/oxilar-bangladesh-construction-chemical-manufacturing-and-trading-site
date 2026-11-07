import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as sourcing, a as useI18n, c as faqs, f as products, o as benefits, v as strengthSeries } from "./router-42WzPhYH.mjs";
import { t as CalculatorSuite } from "./Calculators-Bmv_5NMU.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DOXvyjNp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "Organization",
		name: "Oxilar Bangladesh",
		url: "https://www.oxilarbd.com",
		email: "oxilarbangladesh@gmail.com",
		telephone: "+8801960198313",
		parentOrganization: "Filament Group",
		address: {
			"@type": "PostalAddress",
			streetAddress: "31/1 Babar Road, Mohammadpur",
			addressLocality: "Dhaka",
			addressCountry: "BD"
		}
	}, {
		"@type": "FAQPage",
		mainEntity: faqs.map((f) => ({
			"@type": "Question",
			name: f.q.en,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a.en
			}
		}))
	}]
};
function Home() {
	const { t, tx, lang } = useI18n();
	const [pack, setPack] = (0, import_react.useState)("all");
	const shown = products.filter((p) => pack === "all" || p.packs.includes(pack));
	const [chart, setChart] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setChart(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-amber",
						children: t("sister")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-xl text-4xl font-semibold text-paper sm:text-5xl",
						children: t("heroTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base text-paper/80",
						children: t("heroSub")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							className: "inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 font-semibold text-paper",
							children: t("explore")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/calculators",
							className: "inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-6 font-semibold text-ink",
							children: t("launchCalc")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2 text-xs font-semibold",
						children: [
							"BUET",
							"CUET",
							"BCSIR"
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full bg-white/10 px-3 py-2",
							children: b
						}, b))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/pail.jpg",
					alt: "Oxilar Super-100 pail",
					className: "aspect-[4/5] w-full rounded-xl object-cover sm:aspect-[5/4]"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "sourcing",
			className: "container-site py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold",
					children: lang === "bn" ? "কাঁচামালের উৎস" : "Raw material origins"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-muted",
					children: lang === "bn" ? "ইপক্সি, হার্ডেনার, সলভেন্ট ও অ্যাডমিক্সচার ছয়টি ট্রেড হাব থেকে আসে। কার্ডে চাপুন।" : "Epoxy, hardener, solvents and admixture bases arrive from six trade hubs. Select a card."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: sourcing.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-card p-5 ring-1 ring-line",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-sky",
								children: s.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-xl font-semibold",
								children: tx(s.country)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: tx(s.items)
							})
						]
					}, s.code))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold",
					children: lang === "bn" ? "প্যাকেজিংয়ে যা লেখা আছে" : "What the pack promises"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-paper p-5 ring-1 ring-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: tx(b.title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: tx(b.body)
						})]
					}, b.title.en))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold",
					children: lang === "bn" ? "নির্বাচিত পণ্য" : "Featured products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2 overflow-auto",
					children: [
						"all",
						"4L",
						"20L",
						"drum"
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPack(p),
						className: `min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${pack === p ? "bg-brand text-paper" : "bg-card ring-1 ring-line"}`,
						children: p === "all" ? lang === "bn" ? "সব সাইজ" : "All sizes" : p
					}, p))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: shown.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/products/$slug",
					params: { slug: p.slug },
					className: "overflow-hidden rounded-xl bg-card ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.image,
						alt: "",
						className: "h-44 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold text-sky",
								children: p.sku
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: tx(p.name)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-sm text-muted",
								children: tx(p.short)
							})
						]
					})]
				}, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink py-14 text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-site",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold text-paper",
						children: lang === "bn" ? "সাইট অনুমান" : "Site estimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-6 max-w-2xl text-paper/70",
						children: lang === "bn" ? "স্ল্যাব, ব্যাগ বা ইপক্সি — ফলাফল প্রিন্ট করুন বা আরএফকিউতে নিন।" : "Slab, bags or epoxy — print the result or drop it into the RFQ."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculatorSuite, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold",
					children: lang === "bn" ? "ল্যাব তুলনা (রেফারেন্স)" : "Lab comparison (reference)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted",
					children: lang === "bn" ? "চিত্রটি প্রকাশিত সারাংশের ধরন দেখায়, স্বতন্ত্র সার্টিফিকেটের বদলে নয়। শিট /resources এ।" : "The chart shows the shape of a published summary, not a substitute for the certificate. Sheets live under TDS / Lab."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 h-72 rounded-xl bg-card p-3 ring-1 ring-line",
					children: chart && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: strengthSeries,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, { dataKey: "day" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "control",
									fill: "var(--color-muted)",
									name: "Control"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "dosed",
									fill: "var(--color-brand)",
									name: "Dosed"
								})
							]
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-site pb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-brand px-6 py-8 text-paper sm:flex sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold text-paper",
					children: lang === "bn" ? "ডিলার ও প্রকল্প সরবরাহ" : "Dealers and project supply"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-paper/85",
					children: lang === "bn" ? "হার্ডওয়্যার স্টকিস্ট ও মেগা-প্রকল্পের জন্য আলাদা ফর্ম।" : "Separate forms for hardware stockists and mega-project procurement."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/b2b-portal",
					className: "mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-paper px-6 font-semibold text-brand-deep sm:mt-0",
					children: t("b2b")
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-site py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-semibold",
				children: lang === "bn" ? "প্রশ্ন" : "Questions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 lg:grid-cols-3",
				children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-card p-5 ring-1 ring-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: tx(f.q)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: tx(f.a)
					})]
				}, f.q.en))
			})]
		})
	] });
}
//#endregion
export { Home as component };
