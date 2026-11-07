import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as MessageCircle, n as TriangleAlert, o as Mail, r as Phone, s as ClipboardList, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-IMuDmOgO.js
var categories = [
	{
		id: "all",
		label: {
			en: "All systems",
			bn: "সব সিস্টেম"
		}
	},
	{
		id: "admixture",
		label: {
			en: "Concrete admixtures",
			bn: "কংক্রিট অ্যাডমিক্সচার"
		}
	},
	{
		id: "waterproofing",
		label: {
			en: "Liquid waterproofing",
			bn: "লিকুইড ওয়াটারপ্রুফিং"
		}
	},
	{
		id: "flooring",
		label: {
			en: "Industrial flooring",
			bn: "ইন্ডাস্ট্রিয়াল ফ্লোরিং"
		}
	},
	{
		id: "grout",
		label: {
			en: "Grouts & anchors",
			bn: "গ্রাউট ও অ্যাঙ্কর"
		}
	},
	{
		id: "coating",
		label: {
			en: "Protective coatings",
			bn: "প্রোটেকটিভ কোটিং"
		}
	}
];
var packLabels = {
	"4L": {
		en: "4L pail",
		bn: "৪ লিটার পেইল"
	},
	"20L": {
		en: "20L pail",
		bn: "২০ লিটার পেইল"
	},
	drum: {
		en: "Heavy-duty drum",
		bn: "হেভি-ডিউটি ড্রাম"
	}
};
var products = [
	{
		slug: "oxilar-super-100",
		sku: "OX-WP-100",
		name: {
			en: "Oxilar Super-100",
			bn: "অক্সিলার সুপার-১০০"
		},
		category: "waterproofing",
		packs: ["4L", "20L"],
		image: "/media/pail.jpg",
		short: {
			en: "Integral waterproofing and damp-control liquid for roofs, basements, water tanks and plaster. Formulated for monsoon saturation and coastal salinity.",
			bn: "ছাদ, বেজমেন্ট, পানির ট্যাংক ও প্লাস্টারের জন্য ইন্টিগ্রাল ওয়াটারপ্রুফিং ও ড্যাম্প-কন্ট্রোল লিকুইড। বর্ষা ও উপকূলীয় লবণাক্ততার জন্য তৈরি।"
		},
		applications: [
			{
				en: "Roof slabs and sunken toilets",
				bn: "ছাদের স্ল্যাব ও সানকেন টয়লেট"
			},
			{
				en: "Basement and retaining walls",
				bn: "বেজমেন্ট ও রিটেইনিং ওয়াল"
			},
			{
				en: "Overhead and underground tanks",
				bn: "ওভারহেড ও আন্ডারগ্রাউন্ড ট্যাংক"
			}
		],
		dosage: {
			en: "250–400 ml per 50 kg cement for integral mixes. As a slurry coat, 1 litre covers about 3.5–4.5 m² per coat.",
			bn: "ইন্টিগ্রাল মিক্সে প্রতি ৫০ কেজি সিমেন্টে ২৫০–৪০০ মিলি। স্লারি কোট হিসেবে প্রতি কোটে প্রায় ৩.৫–৪.৫ বর্গমিটারে ১ লিটার।"
		},
		mlPerBag: 300,
		method: [
			{
				en: "Clean laitance, oil and loose particles. Pre-wet absorbent surfaces to SSD.",
				bn: "লেইটেন্স, তেল ও আলগা কণা পরিষ্কার করুন। শোষক সারফেস SSD অবস্থায় ভিজিয়ে নিন।"
			},
			{
				en: "For slurry: 1 L Super-100 + 10–12 L water + 12.5 kg cement, brush in two coats at right angles.",
				bn: "স্লারি: ১ লিটার সুপার-১০০ + ১০–১২ লিটার পানি + ১২.৫ কেজি সিমেন্ট, দুই কোট আড়াআড়ি ব্রাশ করুন।"
			},
			{
				en: "For concrete: dose into mixing water. Do not add neat to dry cement.",
				bn: "কংক্রিটে মিক্সিং ওয়াটারে ডোজ দিন। শুকনো সিমেন্টে সরাসরি দেবেন না।"
			}
		],
		safety: [{
			en: "Alkaline cement slurry — gloves and eye protection required.",
			bn: "ক্ষারীয় সিমেন্ট স্লারি — গ্লাভস ও চোখের সুরক্ষা বাধ্যতামূলক।"
		}, {
			en: "Store sealed, away from frost and direct sun. Shelf life 12 months.",
			bn: "সিল করে রাখুন, হিম ও সরাসরি রোদ থেকে দূরে। শেল্ফ লাইফ ১২ মাস।"
		}],
		specs: [
			{
				label: {
					en: "Form",
					bn: "ফর্ম"
				},
				value: {
					en: "Semi-paste liquid",
					bn: "সেমি-পেস্ট লিকুইড"
				}
			},
			{
				label: {
					en: "Chloride",
					bn: "ক্লোরাইড"
				},
				value: {
					en: "Nil",
					bn: "নেই"
				}
			},
			{
				label: {
					en: "pH",
					bn: "পিএইচ"
				},
				value: {
					en: "7.5–9",
					bn: "৭.৫–৯"
				}
			}
		]
	},
	{
		slug: "oxilar-plast-sp",
		sku: "OX-AD-SP220",
		name: {
			en: "Oxilar Plast SP-220",
			bn: "অক্সিলার প্লাস্ট এসপি-২২০"
		},
		category: "admixture",
		packs: ["20L", "drum"],
		image: "/media/drum.jpg",
		short: {
			en: "High-range water-reducing superplasticizer for pumped, ready-mix and high-grade structural concrete.",
			bn: "পাম্পড, রেডি-মিক্স ও হাই-গ্রেড স্ট্রাকচারাল কংক্রিটের জন্য হাই-রেঞ্জ ওয়াটার-রিডিউসিং সুপারপ্লাস্টিসাইজার।"
		},
		applications: [
			{
				en: "Columns, cores and long-span slabs",
				bn: "কলাম, কোর ও লং-স্প্যান স্ল্যাব"
			},
			{
				en: "Ready-mix and site-batched pours",
				bn: "রেডি-মিক্স ও সাইট-ব্যাচড পোর"
			},
			{
				en: "Fair-face and dense concrete",
				bn: "ফেয়ার-ফেস ও ঘন কংক্রিট"
			}
		],
		dosage: {
			en: "Guide dose 0.6–1.2% by cement weight (300–600 ml per 50 kg bag). Confirm with a trial mix.",
			bn: "গাইড ডোজ সিমেন্ট ওজনের ০.৬–১.২% (প্রতি ৫০ কেজি ব্যাগে ৩০০–৬০০ মিলি)। ট্রায়াল মিক্স দিয়ে নিশ্চিত করুন।"
		},
		mlPerBag: 450,
		method: [{
			en: "Add with the final mixing water after cement and aggregates are wet.",
			bn: "সিমেন্ট ও অ্যাগ্রিগেট ভেজার পর শেষ মিক্সিং ওয়াটারের সাথে যোগ করুন।"
		}, {
			en: "Do not combine with another plasticizer without a compatibility trial.",
			bn: "কম্প্যাটিবিলিটি ট্রায়াল ছাড়া অন্য প্লাস্টিসাইজারের সাথে মেশাবেন না।"
		}],
		safety: [{
			en: "Chloride-free. Will not promote corrosion of reinforcement.",
			bn: "ক্লোরাইড-মুক্ত। রিইনফোর্সমেন্টের ক্ষয় বাড়ায় না।"
		}],
		specs: [
			{
				label: {
					en: "Base",
					bn: "বেস"
				},
				value: {
					en: "Sulphonated polymer",
					bn: "সালফোনেটেড পলিমার"
				}
			},
			{
				label: {
					en: "Water reduction",
					bn: "পানি হ্রাস"
				},
				value: {
					en: "Up to 25%",
					bn: "২৫% পর্যন্ত"
				}
			},
			{
				label: {
					en: "Standard",
					bn: "স্ট্যান্ডার্ড"
				},
				value: {
					en: "ASTM C494 Type F",
					bn: "ASTM C494 Type F"
				}
			}
		]
	},
	{
		slug: "oxilar-set-fast",
		sku: "OX-AD-AF90",
		name: {
			en: "Oxilar Set-Fast AF90",
			bn: "অক্সিলার সেট-ফাস্ট এএফ৯০"
		},
		category: "admixture",
		packs: ["4L", "20L"],
		image: "/media/stack.jpg",
		short: {
			en: "Non-chloride accelerator that shortens set time and helps early strength in cool mornings and repair pours.",
			bn: "নন-ক্লোরাইড অ্যাক্সিলারেটর — ঠান্ডা সকাল ও রিপেয়ার পোরে সেট টাইম কমায় এবং আর্লি স্ট্রেংথ বাড়ায়।"
		},
		applications: [
			{
				en: "Early strip of formwork",
				bn: "ফর্মওয়ার্ক আগে খোলা"
			},
			{
				en: "Block and brick mixes",
				bn: "ব্লক ও ইটের মিক্স"
			},
			{
				en: "Cold-weather and repair concrete",
				bn: "ঠান্ডা আবহাওয়া ও রিপেয়ার কংক্রিট"
			}
		],
		dosage: {
			en: "150–350 ml per 50 kg cement. Higher doses speed set; trial before structural use.",
			bn: "প্রতি ৫০ কেজি সিমেন্টে ১৫০–৩৫০ মিলি। বেশি ডোজে সেট দ্রুত হয়; স্ট্রাকচারাল ব্যবহারে আগে ট্রায়াল করুন।"
		},
		mlPerBag: 250,
		method: [{
			en: "Dispense into mixing water. Never dose dry onto cement.",
			bn: "মিক্সিং ওয়াটারে দিন। সিমেন্টের উপর শুকনো অবস্থায় দেবেন না।"
		}],
		safety: [{
			en: "Not a freeze-protection system below 5°C without thermal curing.",
			bn: "৫°সে-এর নিচে থার্মাল কিউরিং ছাড়া ফ্রিজ-প্রোটেকশন নয়।"
		}],
		specs: [{
			label: {
				en: "Chloride",
				bn: "ক্লোরাইড"
			},
			value: {
				en: "Nil",
				bn: "নেই"
			}
		}, {
			label: {
				en: "Effect",
				bn: "প্রভাব"
			},
			value: {
				en: "Accelerated set",
				bn: "ত্বরান্বিত সেট"
			}
		}]
	},
	{
		slug: "oxilar-set-hold",
		sku: "OX-AD-RT60",
		name: {
			en: "Oxilar Set-Hold RT60",
			bn: "অক্সিলার সেট-হোল্ড আরটি৬০"
		},
		category: "admixture",
		packs: ["20L", "drum"],
		image: "/media/drum.jpg",
		short: {
			en: "Set-retarding plasticizer for long hauls, mass pours and hot-weather Dhaka summer concreting.",
			bn: "দীর্ঘ পরিবহন, মাস পোর ও ঢাকার গরম আবহাওয়ার কংক্রিটিংয়ের জন্য সেট-রিটার্ডিং প্লাস্টিসাইজার।"
		},
		applications: [{
			en: "Ready-mix beyond 45 minutes",
			bn: "৪৫ মিনিটের বেশি রেডি-মিক্স"
		}, {
			en: "Rafts and mass foundations",
			bn: "রাফট ও মাস ফাউন্ডেশন"
		}],
		dosage: {
			en: "200–500 ml per 50 kg cement depending on delay required.",
			bn: "প্রয়োজনীয় বিলম্ব অনুযায়ী প্রতি ৫০ কেজি সিমেন্টে ২০০–৫০০ মিলি।"
		},
		mlPerBag: 350,
		method: [{
			en: "Dose at the plant. Re-temper only with technical approval.",
			bn: "প্ল্যান্টে ডোজ দিন। রি-টেম্পার শুধু টেকনিক্যাল অনুমোদনে।"
		}],
		safety: [{
			en: "Extended set means longer curing protection from sun and wind.",
			bn: "বর্ধিত সেট মানে রোদ ও বাতাস থেকে দীর্ঘ কিউরিং সুরক্ষা।"
		}],
		specs: [{
			label: {
				en: "Standard",
				bn: "স্ট্যান্ডার্ড"
			},
			value: {
				en: "ASTM C494 Type D",
				bn: "ASTM C494 Type D"
			}
		}]
	},
	{
		slug: "oxilar-floor-epx",
		sku: "OX-FL-EP400",
		name: {
			en: "Oxilar Floor EP-400",
			bn: "অক্সিলার ফ্লোর ইপি-৪০০"
		},
		category: "flooring",
		packs: ["4L", "20L"],
		image: "/media/pail.jpg",
		short: {
			en: "Two-component self-leveling epoxy for garment floors, warehouses and chemical-resistant plant areas.",
			bn: "গার্মেন্টস ফ্লোর, ওয়্যারহাউস ও কেমিক্যাল-রেজিস্ট্যান্ট প্ল্যান্টের জন্য টু-কম্পোনেন্ট সেলফ-লেভেলিং ইপক্সি।"
		},
		applications: [{
			en: "Factory and warehouse floors",
			bn: "ফ্যাক্টরি ও ওয়্যারহাউস ফ্লোর"
		}, {
			en: "Pharma and food-adjacent zones",
			bn: "ফার্মা ও ফুড-সংলগ্ন জোন"
		}],
		dosage: {
			en: "Coverage about 2.5 m² per litre at 400 micron DFT on a sealed substrate. Primer is separate.",
			bn: "সিল করা সাবস্ট্রেটে ৪০০ মাইক্রন DFT-এ প্রতি লিটারে প্রায় ২.৫ বর্গমিটার। প্রাইমার আলাদা।"
		},
		mlPerBag: 0,
		method: [
			{
				en: "Shot-blast or grind to CSP 2–3. Moisture below the specified limit.",
				bn: "CSP ২–৩ পর্যন্ত শট-ব্লাস্ট বা গ্রাইন্ড করুন। আর্দ্রতা নির্ধারিত সীমার নিচে।"
			},
			{
				en: "Mix resin and hardener to a uniform color. Do not thin.",
				bn: "রেজিন ও হার্ডেনার সমান রং পর্যন্ত মেশান। পাতলা করবেন না।"
			},
			{
				en: "Spike-roll within the open time. Keep traffic off for 24 hours.",
				bn: "ওপেন টাইমের মধ্যে স্পাইক-রোল করুন। ২৪ ঘণ্টা ট্রাফিক বন্ধ রাখুন।"
			}
		],
		safety: [{
			en: "Ventilate. Hardener is sensitising — gloves, goggles, organic vapour protection.",
			bn: "বাতাস চলাচল নিশ্চিত করুন। হার্ডেনার সেন্সিটাইজিং — গ্লাভস, গগলস, অর্গানিক ভেপার সুরক্ষা।"
		}],
		specs: [{
			label: {
				en: "System",
				bn: "সিস্টেম"
			},
			value: {
				en: "Epoxy, 2K",
				bn: "ইপক্সি, ২কে"
			}
		}, {
			label: {
				en: "Finish",
				bn: "ফিনিশ"
			},
			value: {
				en: "Self-leveling",
				bn: "সেলফ-লেভেলিং"
			}
		}]
	},
	{
		slug: "oxilar-grout-ns",
		sku: "OX-GR-NS50",
		name: {
			en: "Oxilar Grout NS-50",
			bn: "অক্সিলার গ্রাউট এনএস-৫০"
		},
		category: "grout",
		packs: ["20L", "drum"],
		image: "/media/stack.jpg",
		short: {
			en: "Non-shrink cementitious grout for base plates, machine beds and anchor pockets.",
			bn: "বেস প্লেট, মেশিন বেড ও অ্যাঙ্কর পকেটের জন্য নন-শ্রিঙ্ক সিমেন্টিশাস গ্রাউট।"
		},
		applications: [{
			en: "Column base plates",
			bn: "কলাম বেস প্লেট"
		}, {
			en: "Precast joints and pockets",
			bn: "প্রিকাস্ট জয়েন্ট ও পকেট"
		}],
		dosage: {
			en: "Mix water as stated on the pack (typically 3.5–4.0 L per 25 kg equivalent). Do not retemper.",
			bn: "প্যাকে উল্লেখিত পানি (সাধারণত ২৫ কেজি সমতুল্যে ৩.৫–৪.০ লিটার)। রিটেম্পার করবেন না।"
		},
		mlPerBag: 0,
		method: [{
			en: "Saturate the pocket, remove standing water, pour from one side.",
			bn: "পকেট স্যাচুরেট করুন, দাঁড়ানো পানি সরান, এক পাশ থেকে ঢালুন।"
		}],
		safety: [{
			en: "Cementitious alkaline dust — mask when opening bags or drums.",
			bn: "সিমেন্টিশাস ক্ষারীয় ধুলা — ড্রাম খোলার সময় মাস্ক ব্যবহার করুন।"
		}],
		specs: [{
			label: {
				en: "Shrinkage",
				bn: "সংকোচন"
			},
			value: {
				en: "Non-shrink",
				bn: "নন-শ্রিঙ্ক"
			}
		}]
	},
	{
		slug: "oxilar-shield-af",
		sku: "OX-CT-AF1",
		name: {
			en: "Oxilar Shield AF",
			bn: "অক্সিলার শিল্ড এএফ"
		},
		category: "coating",
		packs: ["4L", "20L"],
		image: "/media/pail.jpg",
		short: {
			en: "Thermal-assist protective coating that keeps damp and salts inactive and resists algae and fungi on exterior walls.",
			bn: "থার্মাল-অ্যাসিস্ট প্রোটেকটিভ কোটিং — ড্যাম্প ও লবণ নিষ্ক্রিয় রাখে এবং বাইরের দেয়ালে শেওলা ও ছত্রাক প্রতিরোধ করে।"
		},
		applications: [{
			en: "Exterior plaster and parapets",
			bn: "বাহ্যিক প্লাস্টার ও প্যারাপেট"
		}, {
			en: "North-facing damp walls",
			bn: "উত্তরমুখী ড্যাম্প দেয়াল"
		}],
		dosage: {
			en: "Two coats. About 5–6 m² per litre per coat on sound plaster.",
			bn: "দুই কোট। ভালো প্লাস্টারে প্রতি কোটে প্রতি লিটারে প্রায় ৫–৬ বর্গমিটার।"
		},
		mlPerBag: 0,
		method: [{
			en: "Stop active leaks first. Apply on dry, sound plaster.",
			bn: "আগে সক্রিয় লিক বন্ধ করুন। শুকনো, মজবুত প্লাস্টারে লাগান।"
		}],
		safety: [{
			en: "Keep off skin. Wash tools in water before the film sets.",
			bn: "ত্বকে লাগতে দেবেন না। ফিল্ম সেট হওয়ার আগে টুল পানিতে ধুয়ে নিন।"
		}],
		specs: [{
			label: {
				en: "Resistance",
				bn: "প্রতিরোধ"
			},
			value: {
				en: "Algae, fungi, salt damp",
				bn: "শেওলা, ছত্রাক, লবণ ড্যাম্প"
			}
		}]
	},
	{
		slug: "oxilar-anchor-ch",
		sku: "OX-AN-CH2",
		name: {
			en: "Oxilar Anchor CH-2",
			bn: "অক্সিলার অ্যাঙ্কর সিএইচ-২"
		},
		category: "grout",
		packs: ["4L"],
		image: "/media/pail.jpg",
		short: {
			en: "Two-part chemical anchoring resin for rebar dowels and threaded rods in sound concrete.",
			bn: "মজবুত কংক্রিটে রিবার ডাওয়েল ও থ্রেডেড রডের জন্য টু-পার্ট কেমিক্যাল অ্যাঙ্করিং রেজিন।"
		},
		applications: [{
			en: "Starter bars and edge dowels",
			bn: "স্টার্টার বার ও এজ ডাওয়েল"
		}, {
			en: "Handrail and plant fixings",
			bn: "হ্যান্ডরেইল ও প্ল্যান্ট ফিক্সিং"
		}],
		dosage: {
			en: "Volume is hole geometry. Use the epoxy calculator with hole diameter and embedment.",
			bn: "ভলিউম হোল জ্যামিতি অনুযায়ী। হোল ব্যাস ও এমবেডমেন্ট দিয়ে ইপক্সি ক্যালকুলেটর ব্যবহার করুন।"
		},
		mlPerBag: 0,
		method: [{
			en: "Drill, blow, brush, blow. Inject from the back of the hole.",
			bn: "ড্রিল, ব্লো, ব্রাশ, ব্লো। গর্তের পেছন থেকে ইনজেক্ট করুন।"
		}],
		safety: [{
			en: "Epoxy sensitiser. Do not use in wet, uncleaned holes.",
			bn: "ইপক্সি সেন্সিটাইজার। ভেজা, অপরিষ্কার গর্তে ব্যবহার করবেন না।"
		}],
		specs: [{
			label: {
				en: "Type",
				bn: "ধরন"
			},
			value: {
				en: "Chemical anchor",
				bn: "কেমিক্যাল অ্যাঙ্কর"
			}
		}]
	}
];
var benefits = [
	{
		title: {
			en: "Maximum water resistance",
			bn: "সর্বোচ্চ পানি প্রতিরোধ"
		},
		body: {
			en: "Integral and surface systems that cut capillary suction in slabs, tanks and plaster.",
			bn: "স্ল্যাব, ট্যাংক ও প্লাস্টারে ক্যাপিলারি সাকশন কমানোর ইন্টিগ্রাল ও সারফেস সিস্টেম।"
		}
	},
	{
		title: {
			en: "Thermal insulation assist",
			bn: "থার্মাল ইনসুলেশন সহায়তা"
		},
		body: {
			en: "Coatings that buffer surface temperature on roofs and exposed walls.",
			bn: "ছাদ ও খোলা দেয়ালে সারফেস তাপমাত্রা বাফার করে এমন কোটিং।"
		}
	},
	{
		title: {
			en: "Faster concrete set",
			bn: "দ্রুত কংক্রিট সেট"
		},
		body: {
			en: "Non-chloride accelerators for early strength without attacking steel.",
			bn: "স্টিল আক্রমণ না করে আর্লি স্ট্রেংথের জন্য নন-ক্লোরাইড অ্যাক্সিলারেটর।"
		}
	},
	{
		title: {
			en: "Casting temperature control",
			bn: "কাস্টিং তাপমাত্রা নিয়ন্ত্রণ"
		},
		body: {
			en: "Retarders and water reducers that keep hot-weather pours workable.",
			bn: "গরম আবহাওয়ার পোরকে কার্যকর রাখে এমন রিটার্ডার ও ওয়াটার রিডিউসার।"
		}
	},
	{
		title: {
			en: "Damp and salts stay inactive",
			bn: "ড্যাম্প ও লবণ নিষ্ক্রিয় থাকে"
		},
		body: {
			en: "Salinity control for coastal and high water-table sites across Bangladesh.",
			bn: "বাংলাদেশের উপকূল ও উচ্চ ওয়াটার-টেবিল সাইটের জন্য স্যালিনিটি কন্ট্রোল।"
		}
	},
	{
		title: {
			en: "Algae and fungi resistance",
			bn: "শেওলা ও ছত্রাক প্রতিরোধ"
		},
		body: {
			en: "Exterior films that stay cleaner through the monsoon season.",
			bn: "বর্ষায় পরিষ্কার থাকে এমন বাহ্যিক ফিল্ম।"
		}
	}
];
var sourcing = [
	{
		code: "CN",
		country: {
			en: "China",
			bn: "চীন"
		},
		items: {
			en: "Epoxy resin, hardener, solvents",
			bn: "ইপক্সি রেজিন, হার্ডেনার, সলভেন্ট"
		}
	},
	{
		code: "KR",
		country: {
			en: "South Korea",
			bn: "দক্ষিণ কোরিয়া"
		},
		items: {
			en: "Epoxy resin, hardener",
			bn: "ইপক্সি রেজিন, হার্ডেনার"
		}
	},
	{
		code: "TW",
		country: {
			en: "Taiwan",
			bn: "তাইওয়ান"
		},
		items: {
			en: "Epoxy resin",
			bn: "ইপক্সি রেজিন"
		}
	},
	{
		code: "IN",
		country: {
			en: "India",
			bn: "ভারত"
		},
		items: {
			en: "Resin, solvent, admixtures",
			bn: "রেজিন, সলভেন্ট, অ্যাডমিক্সচার"
		}
	},
	{
		code: "TH",
		country: {
			en: "Thailand",
			bn: "থাইল্যান্ড"
		},
		items: {
			en: "Construction chemicals and raw materials",
			bn: "কনস্ট্রাকশন কেমিক্যাল ও কাঁচামাল"
		}
	},
	{
		code: "SG",
		country: {
			en: "Singapore",
			bn: "সিঙ্গাপুর"
		},
		items: {
			en: "Chemical trading and distribution hub",
			bn: "কেমিক্যাল ট্রেডিং ও ডিস্ট্রিবিউশন হাব"
		}
	}
];
var leaders = [
	{
		role: {
			en: "Technical Director",
			bn: "টেকনিক্যাল ডিরেক্টর"
		},
		focus: {
			en: "Mix design review and site dosage sign-off.",
			bn: "মিক্স ডিজাইন রিভিউ ও সাইট ডোজ সাইন-অফ।"
		}
	},
	{
		role: {
			en: "QC Laboratory Lead",
			bn: "কিউসি ল্যাবরেটরি লিড"
		},
		focus: {
			en: "Batch release against BUET, CUET and BCSIR methods.",
			bn: "BUET, CUET ও BCSIR পদ্ধতিতে ব্যাচ রিলিজ।"
		}
	},
	{
		role: {
			en: "Applications Engineer",
			bn: "অ্যাপ্লিকেশনস ইঞ্জিনিয়ার"
		},
		focus: {
			en: "Waterproofing details, epoxy substrate checks, contractor training.",
			bn: "ওয়াটারপ্রুফিং ডিটেইল, ইপক্সি সাবস্ট্রেট চেক, ঠিকাদার প্রশিক্ষণ।"
		}
	}
];
var projects = [
	{
		id: "uttara-roof",
		sector: "residential",
		title: {
			en: "Uttara residential roof",
			bn: "উত্তরা আবাসিক ছাদ"
		},
		place: {
			en: "Dhaka",
			bn: "ঢাকা"
		},
		summary: {
			en: "Two-coat Super-100 slurry plus plaster dose on a leaking sunken slab.",
			bn: "লিক করা সানকেন স্ল্যাবে দুই কোট সুপার-১০০ স্লারি ও প্লাস্টার ডোজ।"
		},
		image: "/media/pail.jpg"
	},
	{
		id: "gazipur-floor",
		sector: "industrial",
		title: {
			en: "Gazipur garment floor",
			bn: "গাজীপুর গার্মেন্টস ফ্লোর"
		},
		place: {
			en: "Gazipur",
			bn: "গাজীপুর"
		},
		summary: {
			en: "EP-400 self-leveling bay after mechanical preparation of a dusty RCC floor.",
			bn: "ধুলোময় RCC ফ্লোর মেকানিক্যাল প্রিপারেশনের পর EP-400 সেলফ-লেভেলিং বে।"
		},
		image: "/media/drum.jpg"
	},
	{
		id: "rmc-sylhet",
		sector: "readymix",
		title: {
			en: "Sylhet ready-mix plant",
			bn: "সিলেট রেডি-মিক্স প্ল্যান্ট"
		},
		place: {
			en: "Sylhet",
			bn: "সিলেট"
		},
		summary: {
			en: "SP-220 dosed for 90-minute haul in summer without extra site water.",
			bn: "গ্রীষ্মে অতিরিক্ত সাইট ওয়াটার ছাড়া ৯০ মিনিট হলের জন্য SP-220 ডোজ।"
		},
		image: "/media/stack.jpg"
	},
	{
		id: "ctg-culvert",
		sector: "infra",
		title: {
			en: "Chattogram culvert repair",
			bn: "চট্টগ্রাম কালভার্ট মেরামত"
		},
		place: {
			en: "Chattogram",
			bn: "চট্টগ্রাম"
		},
		summary: {
			en: "Non-shrink grout under bearing plates with salinity-control plaster.",
			bn: "বিয়ারিং প্লেটের নিচে নন-শ্রিঙ্ক গ্রাউট ও স্যালিনিটি-কন্ট্রোল প্লাস্টার।"
		},
		image: "/media/drum.jpg"
	}
];
var projectSectors = [
	{
		id: "all",
		label: {
			en: "All works",
			bn: "সব কাজ"
		}
	},
	{
		id: "residential",
		label: {
			en: "Residential",
			bn: "আবাসিক"
		}
	},
	{
		id: "industrial",
		label: {
			en: "Industrial",
			bn: "শিল্প"
		}
	},
	{
		id: "readymix",
		label: {
			en: "Ready-mix",
			bn: "রেডি-মিক্স"
		}
	},
	{
		id: "infra",
		label: {
			en: "Bridges & culverts",
			bn: "সেতু ও কালভার্ট"
		}
	}
];
var quotes = [
	{
		quote: {
			en: "We stopped adding site water on the 18th-floor pump. Slump held and the cube break at 7 days was ahead of the mix design.",
			bn: "১৮তম ফ্লোর পাম্পে সাইট ওয়াটার বন্ধ করেছি। স্লাম্প ধরেছে এবং ৭ দিনের কিউব ব্রেক মিক্স ডিজাইনের আগেই এসেছে।"
		},
		who: {
			en: "Site engineer, high-rise pour, Dhaka",
			bn: "সাইট ইঞ্জিনিয়ার, হাই-রাইজ পোর, ঢাকা"
		}
	},
	{
		quote: {
			en: "The north wall stopped showing salt rings after the slurry and Shield AF. We checked it through one full monsoon.",
			bn: "স্লারি ও শিল্ড এএফ-এর পর উত্তর দেয়ালে লবণের দাগ থেমেছে। এক পুরো বর্ষা পর্যবেক্ষণ করেছি।"
		},
		who: {
			en: "Project manager, residential retrofit",
			bn: "প্রজেক্ট ম্যানেজার, আবাসিক রেট্রোফিট"
		}
	},
	{
		quote: {
			en: "Drum supply to the batching plant was consistent. QC sheets matched the CUET chloride result we asked for.",
			bn: "ব্যাচিং প্ল্যান্টে ড্রাম সাপ্লাই স্থিতিশীল ছিল। কিউসি শিট আমাদের চাওয়া CUET ক্লোরাইড রেজাল্টের সাথে মিলেছে।"
		},
		who: {
			en: "Plant chemist, ready-mix, Sylhet",
			bn: "প্ল্যান্ট কেমিস্ট, রেডি-মিক্স, সিলেট"
		}
	}
];
var sheets = [
	{
		id: "tds-100",
		kind: "TDS",
		product: "Oxilar Super-100",
		file: "/documents/tds-super-100.html"
	},
	{
		id: "sds-100",
		kind: "SDS",
		product: "Oxilar Super-100",
		file: "/documents/sds-super-100.html"
	},
	{
		id: "tds-sp",
		kind: "TDS",
		product: "Oxilar Plast SP-220",
		file: "/documents/tds-sp-220.html"
	},
	{
		id: "tds-ep",
		kind: "TDS",
		product: "Oxilar Floor EP-400",
		file: "/documents/tds-ep-400.html"
	},
	{
		id: "guide-roof",
		kind: "Manual",
		product: "Roof slurry method",
		file: "/documents/guide-roof.html"
	}
];
var labs = [
	{
		id: "buet",
		body: "BUET",
		title: {
			en: "Compressive strength & permeability",
			bn: "কম্প্রেসিভ স্ট্রেংথ ও পারমিয়াবিলিটি"
		},
		note: {
			en: "Reference cubes with Super-100 integral dose versus control mix.",
			bn: "কন্ট্রোল মিক্সের বিপরীতে সুপার-১০০ ইন্টিগ্রাল ডোজের রেফারেন্স কিউব।"
		},
		file: "/documents/lab-buet.html"
	},
	{
		id: "cuet",
		body: "CUET",
		title: {
			en: "Chloride ion resistance",
			bn: "ক্লোরাইড আয়ন প্রতিরোধ"
		},
		note: {
			en: "Chloride-free confirmation on SP-220 and Set-Fast batches.",
			bn: "SP-220 ও সেট-ফাস্ট ব্যাচে ক্লোরাইড-মুক্ত নিশ্চিতকরণ।"
		},
		file: "/documents/lab-cuet.html"
	},
	{
		id: "bcsir",
		body: "BCSIR",
		title: {
			en: "Damp and fungal exposure",
			bn: "ড্যাম্প ও ফাঙ্গাল এক্সপোজার"
		},
		note: {
			en: "Shield AF film checked for algal staining under humid conditioning.",
			bn: "আর্দ্র কন্ডিশনিংয়ে শিল্ড এএফ ফিল্মের শৈবাল দাগ পরীক্ষা।"
		},
		file: "/documents/lab-bcsir.html"
	}
];
var strengthSeries = [
	{
		day: "3d",
		control: 18,
		dosed: 22
	},
	{
		day: "7d",
		control: 28,
		dosed: 34
	},
	{
		day: "28d",
		control: 38,
		dosed: 46
	}
];
var faqs = [
	{
		q: {
			en: "How much Oxilar Super-100 per bag of cement?",
			bn: "প্রতি ব্যাগ সিমেন্টে কত অক্সিলার সুপার-১০০?"
		},
		a: {
			en: "A practical starting point is 300 ml per 50 kg bag for integral waterproofing. Roof slurry is mixed separately: 1 litre with 10–12 litres water and 12.5 kg cement.",
			bn: "ইন্টিগ্রাল ওয়াটারপ্রুফিংয়ের ব্যবহারিক শুরু প্রতি ৫০ কেজি ব্যাগে ৩০০ মিলি। ছাদের স্লারি আলাদা: ১ লিটারের সাথে ১০–১২ লিটার পানি ও ১২.৫ কেজি সিমেন্ট।"
		}
	},
	{
		q: {
			en: "Are the admixtures chloride-free?",
			bn: "অ্যাডমিক্সচার কি ক্লোরাইড-মুক্ত?"
		},
		a: {
			en: "Super-100, Plast SP-220 and Set-Fast are specified chloride-free. Ask for the batch CUET or BCSIR sheet before a prestressed pour.",
			bn: "সুপার-১০০, প্লাস্ট SP-220 ও সেট-ফাস্ট ক্লোরাইড-মুক্ত হিসেবে উল্লেখিত। প্রিস্ট্রেসড পোরের আগে ব্যাচের CUET বা BCSIR শিট চান।"
		}
	},
	{
		q: {
			en: "Where is the factory?",
			bn: "কারখানা কোথায়?"
		},
		a: {
			en: "Blending is at Kalampur, Dhamrai, Dhaka. The corporate office is 31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka.",
			bn: "ব্লেন্ডিং কালামপুর, ধামরাই, ঢাকায়। কর্পোরেট অফিস ৩১/১ বাবর রোড, মোহাম্মদপুর, ধানমন্ডি, ঢাকা।"
		}
	}
];
var videos = [
	{
		title: {
			en: "Roof slurry, two coats",
			bn: "ছাদের স্লারি, দুই কোট"
		},
		length: "6 min",
		body: {
			en: "SSD surface, slurry ratio, cross-brush, and cure.",
			bn: "SSD সারফেস, স্লারি অনুপাত, আড়াআড়ি ব্রাশ ও কিউর।"
		}
	},
	{
		title: {
			en: "Dosing a ready-mix truck",
			bn: "রেডি-মিক্স ট্রাকে ডোজ"
		},
		length: "4 min",
		body: {
			en: "Where to add SP-220 and why not to add site water.",
			bn: "SP-220 কোথায় দেবেন এবং সাইট ওয়াটার কেন দেবেন না।"
		}
	},
	{
		title: {
			en: "Epoxy floor prep",
			bn: "ইপক্সি ফ্লোর প্রিপ"
		},
		length: "8 min",
		body: {
			en: "Grinding profile, moisture check, mix and spike roll.",
			bn: "গ্রাইন্ডিং প্রোফাইল, আর্দ্রতা চেক, মিক্স ও স্পাইক রোল।"
		}
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-42WzPhYH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var dict = {
	hotline: {
		en: "Hotline",
		bn: "হটলাইন"
	},
	office: {
		en: "Office · Mohammadpur",
		bn: "অফিস · মোহাম্মদপুর"
	},
	factory: {
		en: "Factory · Dhamrai",
		bn: "কারখানা · ধামরাই"
	},
	home: {
		en: "Home",
		bn: "হোম"
	},
	about: {
		en: "About",
		bn: "আমাদের কথা"
	},
	sourcing: {
		en: "Sourcing",
		bn: "সোর্সিং"
	},
	products: {
		en: "Products",
		bn: "পণ্য"
	},
	calculators: {
		en: "Calculators",
		bn: "ক্যালকুলেটর"
	},
	resources: {
		en: "TDS / Lab",
		bn: "টিডিএস / ল্যাব"
	},
	projects: {
		en: "Projects",
		bn: "প্রকল্প"
	},
	b2b: {
		en: "Dealers",
		bn: "ডিলার"
	},
	contact: {
		en: "Contact",
		bn: "যোগাযোগ"
	},
	rfq: {
		en: "Request RFQ",
		bn: "আরএফকিউ"
	},
	explore: {
		en: "Explore products",
		bn: "পণ্য দেখুন"
	},
	launchCalc: {
		en: "Launch calculator",
		bn: "ক্যালকুলেটর খুলুন"
	},
	call: {
		en: "Call",
		bn: "কল"
	},
	whatsapp: {
		en: "WhatsApp",
		bn: "হোয়াটসঅ্যাপ"
	},
	basket: {
		en: "RFQ basket",
		bn: "আরএফকিউ বাস্কেট"
	},
	addRfq: {
		en: "Add to RFQ",
		bn: "আরএফকিউতে যোগ"
	},
	added: {
		en: "Added",
		bn: "যোগ হয়েছে"
	},
	sister: {
		en: "A sister concern of Filament Group",
		bn: "ফিলামেন্ট গ্রুপের একটি সিস্টার কনসার্ন"
	},
	heroTitle: {
		en: "Construction chemicals built for Bangladesh’s climate.",
		bn: "বাংলাদেশের আবহাওয়ার জন্য তৈরি কনস্ট্রাকশন কেমিক্যাল।"
	},
	heroSub: {
		en: "Waterproofing, concrete admixtures and industrial floors. Blended in Dhamrai. Checked against BUET, CUET and BCSIR methods.",
		bn: "ওয়াটারপ্রুফিং, কংক্রিট অ্যাডমিক্সচার ও ইন্ডাস্ট্রিয়াল ফ্লোর। ধামরাইয়ে ব্লেন্ড। BUET, CUET ও BCSIR পদ্ধতিতে যাচাই।"
	},
	slogan: {
		en: "For a better future. Your building safety first.",
		bn: "ভালো ভবিষ্যতের জন্য। আপনার ভবনের নিরাপত্তা আগে।"
	}
};
var C = (0, import_react.createContext)(null);
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("en");
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("ox-lang");
		if (saved === "bn" || saved === "en") setLangState(saved);
	}, []);
	const setLang = (l) => {
		setLangState(l);
		localStorage.setItem("ox-lang", l);
		document.documentElement.lang = l === "bn" ? "bn" : "en";
	};
	const t = (key) => dict[key][lang];
	const tx = (copy) => copy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(C.Provider, {
		value: {
			lang,
			setLang,
			t,
			tx
		},
		children
	});
}
function useI18n() {
	const v = (0, import_react.useContext)(C);
	if (!v) throw new Error("useI18n outside provider");
	return v;
}
var useRfq = create()(persist((set) => ({
	lines: [],
	open: false,
	setOpen: (open) => set({ open }),
	add: (line) => set((s) => {
		const id = `${line.sku}-${line.pack}-${line.note}`;
		if (s.lines.find((l) => l.id === id)) return {
			open: true,
			lines: s.lines.map((l) => l.id === id ? {
				...l,
				qty: l.qty + (line.qty ?? 1)
			} : l)
		};
		return {
			open: true,
			lines: [...s.lines, {
				...line,
				id,
				qty: line.qty ?? 1
			}]
		};
	}),
	setQty: (id, qty) => set((s) => ({ lines: s.lines.map((l) => l.id === id ? {
		...l,
		qty: Math.max(1, qty)
	} : l) })),
	remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.id !== id) })),
	clear: () => set({ lines: [] })
}), {
	name: "oxilar-rfq",
	skipHydration: true,
	partialize: (s) => ({ lines: s.lines })
}));
function RfqDrawer() {
	const open = useRfq((s) => s.open);
	const setOpen = useRfq((s) => s.setOpen);
	const lines = useRfq((s) => s.lines);
	const setQty = useRfq((s) => s.setQty);
	const remove = useRfq((s) => s.remove);
	const clear = useRfq((s) => s.clear);
	const { lang } = useI18n();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	if (!open) return null;
	const submit = (e) => {
		e.preventDefault();
		const payload = {
			name,
			phone,
			lines,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const prev = JSON.parse(localStorage.getItem("oxilar-rfq-sent") || "[]");
		localStorage.setItem("oxilar-rfq-sent", JSON.stringify([payload, ...prev].slice(0, 20)));
		setSent(true);
		clear();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex justify-end bg-ink/50",
		role: "dialog",
		"aria-modal": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "hidden flex-1 md:block",
			"aria-label": "Close",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full w-full flex-col bg-card shadow-2xl md:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: lang === "bn" ? "আরএফকিউ বাস্কেট" : "RFQ basket"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 px-3 text-sm font-semibold text-brand",
						onClick: () => setOpen(false),
						children: lang === "bn" ? "বন্ধ" : "Close"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-3 overflow-auto p-4",
					children: [
						lines.length === 0 && !sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: lang === "bn" ? "এখনও কোনো লাইন নেই। পণ্য বা ক্যালকুলেটর থেকে যোগ করুন।" : "No lines yet. Add a product or import a calculator result."
						}),
						lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-line p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: l.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										l.sku,
										" · ",
										l.pack
									]
								}),
								l.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-ink-soft",
									children: l.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										min: 1,
										value: l.qty,
										onChange: (e) => setQty(l.id, Number(e.target.value)),
										className: "h-11 w-20 rounded-md border border-line px-2"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "min-h-11 text-sm text-sky",
										onClick: () => remove(l.id),
										children: lang === "bn" ? "সরান" : "Remove"
									})]
								})
							]
						}, l.id)),
						sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-lg bg-brand-soft p-3 text-sm text-brand-deep",
							children: lang === "bn" ? "আপনার আরএফকিউ এই ডিভাইসে সংরক্ষিত হয়েছে। আমাদের টিম হটলাইনে কল করতে পারে।" : "Your RFQ is saved on this device. Call the hotline if you need a same-day reply."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-2 border-t border-line p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: lang === "bn" ? "নাম" : "Name",
							className: "h-12 w-full rounded-md border border-line px-3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: phone,
							onChange: (e) => setPhone(e.target.value),
							placeholder: lang === "bn" ? "ফোন" : "Phone",
							className: "h-12 w-full rounded-md border border-line px-3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: lines.length === 0,
							className: "h-12 w-full rounded-full bg-brand font-semibold text-paper disabled:opacity-40",
							type: "submit",
							children: lang === "bn" ? "আরএফকিউ পাঠান" : "Send RFQ"
						})
					]
				})
			]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var nav = [
	{
		to: "/",
		key: "home"
	},
	{
		to: "/about",
		key: "about"
	},
	{
		to: "/products",
		key: "products"
	},
	{
		to: "/calculators",
		key: "calculators"
	},
	{
		to: "/resources",
		key: "resources"
	},
	{
		to: "/projects",
		key: "projects"
	},
	{
		to: "/b2b-portal",
		key: "b2b"
	},
	{
		to: "/contact",
		key: "contact"
	}
];
function SiteChrome({ children }) {
	const { t, lang, setLang } = useI18n();
	const path = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const lines = useRfq((s) => s.lines);
	const setRfq = useRfq((s) => s.setOpen);
	const count = lines.reduce((n, l) => n + l.qty, 0);
	(0, import_react.useEffect)(() => {
		useRfq.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-ink text-paper text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site flex flex-wrap items-center justify-between gap-2 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-paper/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "inline-flex min-h-11 items-center gap-1.5 hover:text-paper",
								href: "tel:+8801960198313",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-3.5",
									"aria-hidden": true
								}), "+88 0196-0198313"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "inline-flex min-h-11 items-center gap-1.5 hover:text-paper",
								href: "mailto:oxilarbangladesh@gmail.com",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "size-3.5",
									"aria-hidden": true
								}), "oxilarbangladesh@gmail.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden lg:inline",
								children: t("office")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden xl:inline",
								children: t("factory")
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex rounded-full bg-ink-soft p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("min-h-9 rounded-full px-3 text-xs font-semibold", lang === "en" ? "bg-brand text-paper" : "text-paper/70"),
							onClick: () => setLang("en"),
							children: "EN"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("min-h-9 rounded-full px-3 text-xs font-semibold", lang === "bn" ? "bg-brand text-paper" : "text-paper/70"),
							onClick: () => setLang("bn"),
							children: "বাংলা"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line/80 bg-card/80 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site flex h-16 items-center gap-3 lg:h-[4.5rem]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/logo.jpg",
								alt: "Oxilar Bangladesh",
								className: "size-10 rounded-full object-cover ring-2 ring-brand-soft"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-base font-semibold text-ink",
									children: "Oxilar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs font-medium tracking-wide text-brand",
									children: "BANGLADESH"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-4 hidden items-center gap-0.5 lg:flex",
							children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-full px-2 py-2 text-sm font-medium text-ink-soft hover:bg-paper", path === item.to && "bg-brand-soft text-brand-deep"),
								children: t(item.key)
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setRfq(true),
								className: "hidden min-h-11 items-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-paper hover:bg-brand-deep md:inline-flex",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, {
										className: "size-4",
										"aria-hidden": true
									}),
									t("rfq"),
									count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-paper px-1.5 text-xs text-brand-deep",
										children: count
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden",
								"aria-label": "Menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line bg-card lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "container-site grid gap-1 py-3",
						children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "min-h-12 rounded-lg px-3 py-3 text-base font-medium hover:bg-paper",
							children: t(item.key)
						}, item.to))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-16 bg-ink text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-site grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl font-semibold",
								children: "Oxilar Bangladesh"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 max-w-md text-sm text-paper/75",
								children: [
									t("sister"),
									". ",
									t("slogan")
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-amber",
								children: t("office")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-paper/75",
								children: "31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm font-semibold text-amber",
								children: t("factory")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-paper/75",
								children: "Kalampur, Dhamrai, Dhaka"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "block min-h-11 py-2 hover:text-brand-soft",
									href: "tel:+8801960198313",
									children: "+88 0196-0198313"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "block min-h-11 py-2 hover:text-brand-soft",
									href: "mailto:oxilarbangladesh@gmail.com",
									children: "oxilarbangladesh@gmail.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "py-2 text-paper/70",
									children: "www.oxilarbd.com"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "container-site flex flex-col gap-2 py-4 text-xs text-paper/60 sm:flex-row sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Oxilar Bangladesh. Filament Group."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "BUET · CUET · BCSIR referenced test programme" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-card md:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink",
						href: "tel:+8801960198313",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-brand" }), t("call")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink",
						href: "https://wa.me/8801960198313",
						target: "_blank",
						rel: "noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4 text-sky" }), t("whatsapp")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink",
						onClick: () => setRfq(true),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "size-4 text-amber" }),
							t("basket"),
							" ",
							count > 0 ? `(${count})` : ""
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RfqDrawer, {})
		]
	});
}
var styles_default = "/assets/styles-zsX4UGP2.css";
var TITLE = "Oxilar Bangladesh | Construction Chemical Manufacturer & Global Raw Material Importer";
var DESC = "Oxilar Bangladesh (A Sister Concern of Filament Group) produces BUET-tested construction chemicals, concrete admixtures, roof waterproofing, and epoxy flooring in Bangladesh. Factory: Dhamrai, Dhaka.";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: TITLE },
			{
				name: "description",
				content: DESC
			},
			{
				name: "theme-color",
				content: "#059669"
			},
			{
				name: "keywords",
				content: "Construction chemical company in Bangladesh, Best roof waterproofing chemical BD, Concrete admixture manufacturer Dhaka, Epoxy flooring supplier Bangladesh, BUET certified waterproofing chemical, Salinity & damp proofing chemical, Oxilar Super-100 dosage per bag of cement"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;600;700&family=Sora:wght@500;600;700&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$8 = () => import("./routes-DOXvyjNp.mjs");
var Route$8 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./about-DCEQk6pp.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Oxilar Bangladesh | Filament Group" }, {
		name: "description",
		content: "Oxilar Bangladesh blends construction chemicals in Kalampur, Dhamrai, as a sister concern of Filament Group."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./b2b-portal-BE72vwLO.mjs");
var Route$6 = createFileRoute("/b2b-portal")({
	head: () => ({ meta: [{ title: "Dealer & Project Procurement | Oxilar Bangladesh" }, {
		name: "description",
		content: "Apply for Oxilar dealership or request a bulk quotation for ready-mix plants and contractors."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./calculators-CS-eGgRb.mjs");
var Route$5 = createFileRoute("/calculators")({
	head: () => ({ meta: [{ title: "Dosage & Coverage Calculators | Oxilar Bangladesh" }, {
		name: "description",
		content: "Slab volume, cement-bag dosage and epoxy coverage calculators for Oxilar Super-100 and Floor EP-400."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-BrMs_4GB.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Oxilar Bangladesh | Dhanmondi & Dhamrai" }, {
		name: "description",
		content: "Office at 31/1 Babar Road, Mohammadpur. Factory at Kalampur, Dhamrai. Phone +88 0196-0198313."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./products-CpsJxBKr.mjs");
var Route$3 = createFileRoute("/products")({
	head: () => ({ meta: [{ title: "Construction Chemicals & Waterproofing | Oxilar Bangladesh" }, {
		name: "description",
		content: "Concrete admixtures, Oxilar Super-100 waterproofing, epoxy floors, grouts and coatings. 4L, 20L and drums."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projects-FtmoR5wr.mjs");
var Route$2 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Project References | Oxilar Bangladesh" }, {
		name: "description",
		content: "Waterproofing, epoxy floor and ready-mix references using Oxilar systems in Bangladesh."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./resources-B4e-tSjK.mjs");
var Route$1 = createFileRoute("/resources")({
	head: () => ({ meta: [{ title: "TDS, SDS & Lab Reports | Oxilar Bangladesh" }, {
		name: "description",
		content: "Technical data sheets, safety sheets and BUET, CUET, BCSIR reference reports for Oxilar products."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products._slug-5pQBRHA_.mjs");
var Route = createFileRoute("/products/$slug")({
	head: ({ params }) => {
		const p = products.find((x) => x.slug === params.slug);
		return { meta: [{ title: p ? `${p.name.en} | Oxilar Bangladesh` : "Product | Oxilar Bangladesh" }, {
			name: "description",
			content: p?.short.en ?? "Oxilar product"
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var B2bPortalRoute = Route$6.update({
	id: "/b2b-portal",
	path: "/b2b-portal",
	getParentRoute: () => Route$9
});
var CalculatorsRoute = Route$5.update({
	id: "/calculators",
	path: "/calculators",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var ProductsRoute = Route$3.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$9
});
var ProjectsRoute = Route$2.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$9
});
var ResourcesRoute = Route$1.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$9
});
var ProductsRouteChildren = { ProductsSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProductsRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	B2bPortalRoute,
	CalculatorsRoute,
	ContactRoute,
	ProductsRoute: ProductsRoute._addFileChildren(ProductsRouteChildren),
	ProjectsRoute,
	ResourcesRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { sourcing as _, useI18n as a, faqs as c, packLabels as d, products as f, sheets as g, quotes as h, useRfq as i, labs as l, projects as m, Route as n, benefits as o, projectSectors as p, cn as r, categories as s, router_exports as t, leaders as u, strengthSeries as v, videos as y };
