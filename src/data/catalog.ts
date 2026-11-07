export type Lang = "en" | "bn";
export type Copy = { en: string; bn: string };

export type Pack = "4L" | "20L" | "drum";

export type Category =
  | "admixture"
  | "waterproofing"
  | "flooring"
  | "grout"
  | "coating";

export type Product = {
  slug: string;
  sku: string;
  name: Copy;
  category: Category;
  packs: Pack[];
  image: string;
  short: Copy;
  applications: Copy[];
  dosage: Copy;
  mlPerBag: number;
  method: Copy[];
  safety: Copy[];
  specs: { label: Copy; value: Copy }[];
};

export const categories: { id: Category | "all"; label: Copy }[] = [
  { id: "all", label: { en: "All systems", bn: "সব সিস্টেম" } },
  { id: "admixture", label: { en: "Concrete admixtures", bn: "কংক্রিট অ্যাডমিক্সচার" } },
  { id: "waterproofing", label: { en: "Liquid waterproofing", bn: "লিকুইড ওয়াটারপ্রুফিং" } },
  { id: "flooring", label: { en: "Industrial flooring", bn: "ইন্ডাস্ট্রিয়াল ফ্লোরিং" } },
  { id: "grout", label: { en: "Grouts & anchors", bn: "গ্রাউট ও অ্যাঙ্কর" } },
  { id: "coating", label: { en: "Protective coatings", bn: "প্রোটেকটিভ কোটিং" } },
];

export const packLabels: Record<Pack, Copy> = {
  "4L": { en: "4L pail", bn: "৪ লিটার পেইল" },
  "20L": { en: "20L pail", bn: "২০ লিটার পেইল" },
  drum: { en: "Heavy-duty drum", bn: "হেভি-ডিউটি ড্রাম" },
};

export const products: Product[] = [
  {
    slug: "oxilar-super-100",
    sku: "OX-WP-100",
    name: { en: "Oxilar Super-100", bn: "অক্সিলার সুপার-১০০" },
    category: "waterproofing",
    packs: ["4L", "20L"],
    image: "/media/pail.jpg",
    short: {
      en: "Integral waterproofing and damp-control liquid for roofs, basements, water tanks and plaster. Formulated for monsoon saturation and coastal salinity.",
      bn: "ছাদ, বেজমেন্ট, পানির ট্যাংক ও প্লাস্টারের জন্য ইন্টিগ্রাল ওয়াটারপ্রুফিং ও ড্যাম্প-কন্ট্রোল লিকুইড। বর্ষা ও উপকূলীয় লবণাক্ততার জন্য তৈরি।",
    },
    applications: [
      { en: "Roof slabs and sunken toilets", bn: "ছাদের স্ল্যাব ও সানকেন টয়লেট" },
      { en: "Basement and retaining walls", bn: "বেজমেন্ট ও রিটেইনিং ওয়াল" },
      { en: "Overhead and underground tanks", bn: "ওভারহেড ও আন্ডারগ্রাউন্ড ট্যাংক" },
    ],
    dosage: {
      en: "250–400 ml per 50 kg cement for integral mixes. As a slurry coat, 1 litre covers about 3.5–4.5 m² per coat.",
      bn: "ইন্টিগ্রাল মিক্সে প্রতি ৫০ কেজি সিমেন্টে ২৫০–৪০০ মিলি। স্লারি কোট হিসেবে প্রতি কোটে প্রায় ৩.৫–৪.৫ বর্গমিটারে ১ লিটার।",
    },
    mlPerBag: 300,
    method: [
      { en: "Clean laitance, oil and loose particles. Pre-wet absorbent surfaces to SSD.", bn: "লেইটেন্স, তেল ও আলগা কণা পরিষ্কার করুন। শোষক সারফেস SSD অবস্থায় ভিজিয়ে নিন।" },
      { en: "For slurry: 1 L Super-100 + 10–12 L water + 12.5 kg cement, brush in two coats at right angles.", bn: "স্লারি: ১ লিটার সুপার-১০০ + ১০–১২ লিটার পানি + ১২.৫ কেজি সিমেন্ট, দুই কোট আড়াআড়ি ব্রাশ করুন।" },
      { en: "For concrete: dose into mixing water. Do not add neat to dry cement.", bn: "কংক্রিটে মিক্সিং ওয়াটারে ডোজ দিন। শুকনো সিমেন্টে সরাসরি দেবেন না।" },
    ],
    safety: [
      { en: "Alkaline cement slurry — gloves and eye protection required.", bn: "ক্ষারীয় সিমেন্ট স্লারি — গ্লাভস ও চোখের সুরক্ষা বাধ্যতামূলক।" },
      { en: "Store sealed, away from frost and direct sun. Shelf life 12 months.", bn: "সিল করে রাখুন, হিম ও সরাসরি রোদ থেকে দূরে। শেল্ফ লাইফ ১২ মাস।" },
    ],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Semi-paste liquid", bn: "সেমি-পেস্ট লিকুইড" } },
      { label: { en: "Chloride", bn: "ক্লোরাইড" }, value: { en: "Nil", bn: "নেই" } },
      { label: { en: "pH", bn: "পিএইচ" }, value: { en: "7.5–9", bn: "৭.৫–৯" } },
    ],
  },
  {
    slug: "oxilar-plast-sp",
    sku: "OX-AD-SP220",
    name: { en: "Oxilar Plast SP-220", bn: "অক্সিলার প্লাস্ট এসপি-২২০" },
    category: "admixture",
    packs: ["20L", "drum"],
    image: "/media/drum.jpg",
    short: {
      en: "High-range water-reducing superplasticizer for pumped, ready-mix and high-grade structural concrete.",
      bn: "পাম্পড, রেডি-মিক্স ও হাই-গ্রেড স্ট্রাকচারাল কংক্রিটের জন্য হাই-রেঞ্জ ওয়াটার-রিডিউসিং সুপারপ্লাস্টিসাইজার।",
    },
    applications: [
      { en: "Columns, cores and long-span slabs", bn: "কলাম, কোর ও লং-স্প্যান স্ল্যাব" },
      { en: "Ready-mix and site-batched pours", bn: "রেডি-মিক্স ও সাইট-ব্যাচড পোর" },
      { en: "Fair-face and dense concrete", bn: "ফেয়ার-ফেস ও ঘন কংক্রিট" },
    ],
    dosage: {
      en: "Guide dose 0.6–1.2% by cement weight (300–600 ml per 50 kg bag). Confirm with a trial mix.",
      bn: "গাইড ডোজ সিমেন্ট ওজনের ০.৬–১.২% (প্রতি ৫০ কেজি ব্যাগে ৩০০–৬০০ মিলি)। ট্রায়াল মিক্স দিয়ে নিশ্চিত করুন।",
    },
    mlPerBag: 450,
    method: [
      { en: "Add with the final mixing water after cement and aggregates are wet.", bn: "সিমেন্ট ও অ্যাগ্রিগেট ভেজার পর শেষ মিক্সিং ওয়াটারের সাথে যোগ করুন।" },
      { en: "Do not combine with another plasticizer without a compatibility trial.", bn: "কম্প্যাটিবিলিটি ট্রায়াল ছাড়া অন্য প্লাস্টিসাইজারের সাথে মেশাবেন না।" },
    ],
    safety: [
      { en: "Chloride-free. Will not promote corrosion of reinforcement.", bn: "ক্লোরাইড-মুক্ত। রিইনফোর্সমেন্টের ক্ষয় বাড়ায় না।" },
    ],
    specs: [
      { label: { en: "Base", bn: "বেস" }, value: { en: "Sulphonated polymer", bn: "সালফোনেটেড পলিমার" } },
      { label: { en: "Water reduction", bn: "পানি হ্রাস" }, value: { en: "Up to 25%", bn: "২৫% পর্যন্ত" } },
      { label: { en: "Standard", bn: "স্ট্যান্ডার্ড" }, value: { en: "ASTM C494 Type F", bn: "ASTM C494 Type F" } },
    ],
  },
  {
    slug: "oxilar-set-fast",
    sku: "OX-AD-AF90",
    name: { en: "Oxilar Set-Fast AF90", bn: "অক্সিলার সেট-ফাস্ট এএফ৯০" },
    category: "admixture",
    packs: ["4L", "20L"],
    image: "/media/stack.jpg",
    short: {
      en: "Non-chloride accelerator that shortens set time and helps early strength in cool mornings and repair pours.",
      bn: "নন-ক্লোরাইড অ্যাক্সিলারেটর — ঠান্ডা সকাল ও রিপেয়ার পোরে সেট টাইম কমায় এবং আর্লি স্ট্রেংথ বাড়ায়।",
    },
    applications: [
      { en: "Early strip of formwork", bn: "ফর্মওয়ার্ক আগে খোলা" },
      { en: "Block and brick mixes", bn: "ব্লক ও ইটের মিক্স" },
      { en: "Cold-weather and repair concrete", bn: "ঠান্ডা আবহাওয়া ও রিপেয়ার কংক্রিট" },
    ],
    dosage: {
      en: "150–350 ml per 50 kg cement. Higher doses speed set; trial before structural use.",
      bn: "প্রতি ৫০ কেজি সিমেন্টে ১৫০–৩৫০ মিলি। বেশি ডোজে সেট দ্রুত হয়; স্ট্রাকচারাল ব্যবহারে আগে ট্রায়াল করুন।",
    },
    mlPerBag: 250,
    method: [
      { en: "Dispense into mixing water. Never dose dry onto cement.", bn: "মিক্সিং ওয়াটারে দিন। সিমেন্টের উপর শুকনো অবস্থায় দেবেন না।" },
    ],
    safety: [
      { en: "Not a freeze-protection system below 5°C without thermal curing.", bn: "৫°সে-এর নিচে থার্মাল কিউরিং ছাড়া ফ্রিজ-প্রোটেকশন নয়।" },
    ],
    specs: [
      { label: { en: "Chloride", bn: "ক্লোরাইড" }, value: { en: "Nil", bn: "নেই" } },
      { label: { en: "Effect", bn: "প্রভাব" }, value: { en: "Accelerated set", bn: "ত্বরান্বিত সেট" } },
    ],
  },
  {
    slug: "oxilar-set-hold",
    sku: "OX-AD-RT60",
    name: { en: "Oxilar Set-Hold RT60", bn: "অক্সিলার সেট-হোল্ড আরটি৬০" },
    category: "admixture",
    packs: ["20L", "drum"],
    image: "/media/drum.jpg",
    short: {
      en: "Set-retarding plasticizer for long hauls, mass pours and hot-weather Dhaka summer concreting.",
      bn: "দীর্ঘ পরিবহন, মাস পোর ও ঢাকার গরম আবহাওয়ার কংক্রিটিংয়ের জন্য সেট-রিটার্ডিং প্লাস্টিসাইজার।",
    },
    applications: [
      { en: "Ready-mix beyond 45 minutes", bn: "৪৫ মিনিটের বেশি রেডি-মিক্স" },
      { en: "Rafts and mass foundations", bn: "রাফট ও মাস ফাউন্ডেশন" },
    ],
    dosage: {
      en: "200–500 ml per 50 kg cement depending on delay required.",
      bn: "প্রয়োজনীয় বিলম্ব অনুযায়ী প্রতি ৫০ কেজি সিমেন্টে ২০০–৫০০ মিলি।",
    },
    mlPerBag: 350,
    method: [
      { en: "Dose at the plant. Re-temper only with technical approval.", bn: "প্ল্যান্টে ডোজ দিন। রি-টেম্পার শুধু টেকনিক্যাল অনুমোদনে।" },
    ],
    safety: [
      { en: "Extended set means longer curing protection from sun and wind.", bn: "বর্ধিত সেট মানে রোদ ও বাতাস থেকে দীর্ঘ কিউরিং সুরক্ষা।" },
    ],
    specs: [
      { label: { en: "Standard", bn: "স্ট্যান্ডার্ড" }, value: { en: "ASTM C494 Type D", bn: "ASTM C494 Type D" } },
    ],
  },
  {
    slug: "oxilar-floor-epx",
    sku: "OX-FL-EP400",
    name: { en: "Oxilar Floor EP-400", bn: "অক্সিলার ফ্লোর ইপি-৪০০" },
    category: "flooring",
    packs: ["4L", "20L"],
    image: "/media/pail.jpg",
    short: {
      en: "Two-component self-leveling epoxy for garment floors, warehouses and chemical-resistant plant areas.",
      bn: "গার্মেন্টস ফ্লোর, ওয়্যারহাউস ও কেমিক্যাল-রেজিস্ট্যান্ট প্ল্যান্টের জন্য টু-কম্পোনেন্ট সেলফ-লেভেলিং ইপক্সি।",
    },
    applications: [
      { en: "Factory and warehouse floors", bn: "ফ্যাক্টরি ও ওয়্যারহাউস ফ্লোর" },
      { en: "Pharma and food-adjacent zones", bn: "ফার্মা ও ফুড-সংলগ্ন জোন" },
    ],
    dosage: {
      en: "Coverage about 2.5 m² per litre at 400 micron DFT on a sealed substrate. Primer is separate.",
      bn: "সিল করা সাবস্ট্রেটে ৪০০ মাইক্রন DFT-এ প্রতি লিটারে প্রায় ২.৫ বর্গমিটার। প্রাইমার আলাদা।",
    },
    mlPerBag: 0,
    method: [
      { en: "Shot-blast or grind to CSP 2–3. Moisture below the specified limit.", bn: "CSP ২–৩ পর্যন্ত শট-ব্লাস্ট বা গ্রাইন্ড করুন। আর্দ্রতা নির্ধারিত সীমার নিচে।" },
      { en: "Mix resin and hardener to a uniform color. Do not thin.", bn: "রেজিন ও হার্ডেনার সমান রং পর্যন্ত মেশান। পাতলা করবেন না।" },
      { en: "Spike-roll within the open time. Keep traffic off for 24 hours.", bn: "ওপেন টাইমের মধ্যে স্পাইক-রোল করুন। ২৪ ঘণ্টা ট্রাফিক বন্ধ রাখুন।" },
    ],
    safety: [
      { en: "Ventilate. Hardener is sensitising — gloves, goggles, organic vapour protection.", bn: "বাতাস চলাচল নিশ্চিত করুন। হার্ডেনার সেন্সিটাইজিং — গ্লাভস, গগলস, অর্গানিক ভেপার সুরক্ষা।" },
    ],
    specs: [
      { label: { en: "System", bn: "সিস্টেম" }, value: { en: "Epoxy, 2K", bn: "ইপক্সি, ২কে" } },
      { label: { en: "Finish", bn: "ফিনিশ" }, value: { en: "Self-leveling", bn: "সেলফ-লেভেলিং" } },
    ],
  },
  {
    slug: "oxilar-grout-ns",
    sku: "OX-GR-NS50",
    name: { en: "Oxilar Grout NS-50", bn: "অক্সিলার গ্রাউট এনএস-৫০" },
    category: "grout",
    packs: ["20L", "drum"],
    image: "/media/stack.jpg",
    short: {
      en: "Non-shrink cementitious grout for base plates, machine beds and anchor pockets.",
      bn: "বেস প্লেট, মেশিন বেড ও অ্যাঙ্কর পকেটের জন্য নন-শ্রিঙ্ক সিমেন্টিশাস গ্রাউট।",
    },
    applications: [
      { en: "Column base plates", bn: "কলাম বেস প্লেট" },
      { en: "Precast joints and pockets", bn: "প্রিকাস্ট জয়েন্ট ও পকেট" },
    ],
    dosage: {
      en: "Mix water as stated on the pack (typically 3.5–4.0 L per 25 kg equivalent). Do not retemper.",
      bn: "প্যাকে উল্লেখিত পানি (সাধারণত ২৫ কেজি সমতুল্যে ৩.৫–৪.০ লিটার)। রিটেম্পার করবেন না।",
    },
    mlPerBag: 0,
    method: [
      { en: "Saturate the pocket, remove standing water, pour from one side.", bn: "পকেট স্যাচুরেট করুন, দাঁড়ানো পানি সরান, এক পাশ থেকে ঢালুন।" },
    ],
    safety: [
      { en: "Cementitious alkaline dust — mask when opening bags or drums.", bn: "সিমেন্টিশাস ক্ষারীয় ধুলা — ড্রাম খোলার সময় মাস্ক ব্যবহার করুন।" },
    ],
    specs: [
      { label: { en: "Shrinkage", bn: "সংকোচন" }, value: { en: "Non-shrink", bn: "নন-শ্রিঙ্ক" } },
    ],
  },
  {
    slug: "oxilar-shield-af",
    sku: "OX-CT-AF1",
    name: { en: "Oxilar Shield AF", bn: "অক্সিলার শিল্ড এএফ" },
    category: "coating",
    packs: ["4L", "20L"],
    image: "/media/pail.jpg",
    short: {
      en: "Thermal-assist protective coating that keeps damp and salts inactive and resists algae and fungi on exterior walls.",
      bn: "থার্মাল-অ্যাসিস্ট প্রোটেকটিভ কোটিং — ড্যাম্প ও লবণ নিষ্ক্রিয় রাখে এবং বাইরের দেয়ালে শেওলা ও ছত্রাক প্রতিরোধ করে।",
    },
    applications: [
      { en: "Exterior plaster and parapets", bn: "বাহ্যিক প্লাস্টার ও প্যারাপেট" },
      { en: "North-facing damp walls", bn: "উত্তরমুখী ড্যাম্প দেয়াল" },
    ],
    dosage: {
      en: "Two coats. About 5–6 m² per litre per coat on sound plaster.",
      bn: "দুই কোট। ভালো প্লাস্টারে প্রতি কোটে প্রতি লিটারে প্রায় ৫–৬ বর্গমিটার।",
    },
    mlPerBag: 0,
    method: [
      { en: "Stop active leaks first. Apply on dry, sound plaster.", bn: "আগে সক্রিয় লিক বন্ধ করুন। শুকনো, মজবুত প্লাস্টারে লাগান।" },
    ],
    safety: [
      { en: "Keep off skin. Wash tools in water before the film sets.", bn: "ত্বকে লাগতে দেবেন না। ফিল্ম সেট হওয়ার আগে টুল পানিতে ধুয়ে নিন।" },
    ],
    specs: [
      { label: { en: "Resistance", bn: "প্রতিরোধ" }, value: { en: "Algae, fungi, salt damp", bn: "শেওলা, ছত্রাক, লবণ ড্যাম্প" } },
    ],
  },
  {
    slug: "oxilar-anchor-ch",
    sku: "OX-AN-CH2",
    name: { en: "Oxilar Anchor CH-2", bn: "অক্সিলার অ্যাঙ্কর সিএইচ-২" },
    category: "grout",
    packs: ["4L"],
    image: "/media/pail.jpg",
    short: {
      en: "Two-part chemical anchoring resin for rebar dowels and threaded rods in sound concrete.",
      bn: "মজবুত কংক্রিটে রিবার ডাওয়েল ও থ্রেডেড রডের জন্য টু-পার্ট কেমিক্যাল অ্যাঙ্করিং রেজিন।",
    },
    applications: [
      { en: "Starter bars and edge dowels", bn: "স্টার্টার বার ও এজ ডাওয়েল" },
      { en: "Handrail and plant fixings", bn: "হ্যান্ডরেইল ও প্ল্যান্ট ফিক্সিং" },
    ],
    dosage: {
      en: "Volume is hole geometry. Use the epoxy calculator with hole diameter and embedment.",
      bn: "ভলিউম হোল জ্যামিতি অনুযায়ী। হোল ব্যাস ও এমবেডমেন্ট দিয়ে ইপক্সি ক্যালকুলেটর ব্যবহার করুন।",
    },
    mlPerBag: 0,
    method: [
      { en: "Drill, blow, brush, blow. Inject from the back of the hole.", bn: "ড্রিল, ব্লো, ব্রাশ, ব্লো। গর্তের পেছন থেকে ইনজেক্ট করুন।" },
    ],
    safety: [
      { en: "Epoxy sensitiser. Do not use in wet, uncleaned holes.", bn: "ইপক্সি সেন্সিটাইজার। ভেজা, অপরিষ্কার গর্তে ব্যবহার করবেন না।" },
    ],
    specs: [
      { label: { en: "Type", bn: "ধরন" }, value: { en: "Chemical anchor", bn: "কেমিক্যাল অ্যাঙ্কর" } },
    ],
  },
];

export const benefits: { title: Copy; body: Copy }[] = [
  {
    title: { en: "Maximum water resistance", bn: "সর্বোচ্চ পানি প্রতিরোধ" },
    body: { en: "Integral and surface systems that cut capillary suction in slabs, tanks and plaster.", bn: "স্ল্যাব, ট্যাংক ও প্লাস্টারে ক্যাপিলারি সাকশন কমানোর ইন্টিগ্রাল ও সারফেস সিস্টেম।" },
  },
  {
    title: { en: "Thermal insulation assist", bn: "থার্মাল ইনসুলেশন সহায়তা" },
    body: { en: "Coatings that buffer surface temperature on roofs and exposed walls.", bn: "ছাদ ও খোলা দেয়ালে সারফেস তাপমাত্রা বাফার করে এমন কোটিং।" },
  },
  {
    title: { en: "Faster concrete set", bn: "দ্রুত কংক্রিট সেট" },
    body: { en: "Non-chloride accelerators for early strength without attacking steel.", bn: "স্টিল আক্রমণ না করে আর্লি স্ট্রেংথের জন্য নন-ক্লোরাইড অ্যাক্সিলারেটর।" },
  },
  {
    title: { en: "Casting temperature control", bn: "কাস্টিং তাপমাত্রা নিয়ন্ত্রণ" },
    body: { en: "Retarders and water reducers that keep hot-weather pours workable.", bn: "গরম আবহাওয়ার পোরকে কার্যকর রাখে এমন রিটার্ডার ও ওয়াটার রিডিউসার।" },
  },
  {
    title: { en: "Damp and salts stay inactive", bn: "ড্যাম্প ও লবণ নিষ্ক্রিয় থাকে" },
    body: { en: "Salinity control for coastal and high water-table sites across Bangladesh.", bn: "বাংলাদেশের উপকূল ও উচ্চ ওয়াটার-টেবিল সাইটের জন্য স্যালিনিটি কন্ট্রোল।" },
  },
  {
    title: { en: "Algae and fungi resistance", bn: "শেওলা ও ছত্রাক প্রতিরোধ" },
    body: { en: "Exterior films that stay cleaner through the monsoon season.", bn: "বর্ষায় পরিষ্কার থাকে এমন বাহ্যিক ফিল্ম।" },
  },
];

export const sourcing = [
  { code: "CN", country: { en: "China", bn: "চীন" }, items: { en: "Epoxy resin, hardener, solvents", bn: "ইপক্সি রেজিন, হার্ডেনার, সলভেন্ট" } },
  { code: "KR", country: { en: "South Korea", bn: "দক্ষিণ কোরিয়া" }, items: { en: "Epoxy resin, hardener", bn: "ইপক্সি রেজিন, হার্ডেনার" } },
  { code: "TW", country: { en: "Taiwan", bn: "তাইওয়ান" }, items: { en: "Epoxy resin", bn: "ইপক্সি রেজিন" } },
  { code: "IN", country: { en: "India", bn: "ভারত" }, items: { en: "Resin, solvent, admixtures", bn: "রেজিন, সলভেন্ট, অ্যাডমিক্সচার" } },
  { code: "TH", country: { en: "Thailand", bn: "থাইল্যান্ড" }, items: { en: "Construction chemicals and raw materials", bn: "কনস্ট্রাকশন কেমিক্যাল ও কাঁচামাল" } },
  { code: "SG", country: { en: "Singapore", bn: "সিঙ্গাপুর" }, items: { en: "Chemical trading and distribution hub", bn: "কেমিক্যাল ট্রেডিং ও ডিস্ট্রিবিউশন হাব" } },
];

export const leaders: { role: Copy; focus: Copy }[] = [
  { role: { en: "Technical Director", bn: "টেকনিক্যাল ডিরেক্টর" }, focus: { en: "Mix design review and site dosage sign-off.", bn: "মিক্স ডিজাইন রিভিউ ও সাইট ডোজ সাইন-অফ।" } },
  { role: { en: "QC Laboratory Lead", bn: "কিউসি ল্যাবরেটরি লিড" }, focus: { en: "Batch release against BUET, CUET and BCSIR methods.", bn: "BUET, CUET ও BCSIR পদ্ধতিতে ব্যাচ রিলিজ।" } },
  { role: { en: "Applications Engineer", bn: "অ্যাপ্লিকেশনস ইঞ্জিনিয়ার" }, focus: { en: "Waterproofing details, epoxy substrate checks, contractor training.", bn: "ওয়াটারপ্রুফিং ডিটেইল, ইপক্সি সাবস্ট্রেট চেক, ঠিকাদার প্রশিক্ষণ।" } },
];

export const projects = [
  {
    id: "uttara-roof",
    sector: "residential",
    title: { en: "Uttara residential roof", bn: "উত্তরা আবাসিক ছাদ" },
    place: { en: "Dhaka", bn: "ঢাকা" },
    summary: { en: "Two-coat Super-100 slurry plus plaster dose on a leaking sunken slab.", bn: "লিক করা সানকেন স্ল্যাবে দুই কোট সুপার-১০০ স্লারি ও প্লাস্টার ডোজ।" },
    image: "/media/pail.jpg",
  },
  {
    id: "gazipur-floor",
    sector: "industrial",
    title: { en: "Gazipur garment floor", bn: "গাজীপুর গার্মেন্টস ফ্লোর" },
    place: { en: "Gazipur", bn: "গাজীপুর" },
    summary: { en: "EP-400 self-leveling bay after mechanical preparation of a dusty RCC floor.", bn: "ধুলোময় RCC ফ্লোর মেকানিক্যাল প্রিপারেশনের পর EP-400 সেলফ-লেভেলিং বে।" },
    image: "/media/drum.jpg",
  },
  {
    id: "rmc-sylhet",
    sector: "readymix",
    title: { en: "Sylhet ready-mix plant", bn: "সিলেট রেডি-মিক্স প্ল্যান্ট" },
    place: { en: "Sylhet", bn: "সিলেট" },
    summary: { en: "SP-220 dosed for 90-minute haul in summer without extra site water.", bn: "গ্রীষ্মে অতিরিক্ত সাইট ওয়াটার ছাড়া ৯০ মিনিট হলের জন্য SP-220 ডোজ।" },
    image: "/media/stack.jpg",
  },
  {
    id: "ctg-culvert",
    sector: "infra",
    title: { en: "Chattogram culvert repair", bn: "চট্টগ্রাম কালভার্ট মেরামত" },
    place: { en: "Chattogram", bn: "চট্টগ্রাম" },
    summary: { en: "Non-shrink grout under bearing plates with salinity-control plaster.", bn: "বিয়ারিং প্লেটের নিচে নন-শ্রিঙ্ক গ্রাউট ও স্যালিনিটি-কন্ট্রোল প্লাস্টার।" },
    image: "/media/drum.jpg",
  },
];

export const projectSectors: { id: string; label: Copy }[] = [
  { id: "all", label: { en: "All works", bn: "সব কাজ" } },
  { id: "residential", label: { en: "Residential", bn: "আবাসিক" } },
  { id: "industrial", label: { en: "Industrial", bn: "শিল্প" } },
  { id: "readymix", label: { en: "Ready-mix", bn: "রেডি-মিক্স" } },
  { id: "infra", label: { en: "Bridges & culverts", bn: "সেতু ও কালভার্ট" } },
];

export const quotes: { quote: Copy; who: Copy }[] = [
  {
    quote: {
      en: "We stopped adding site water on the 18th-floor pump. Slump held and the cube break at 7 days was ahead of the mix design.",
      bn: "১৮তম ফ্লোর পাম্পে সাইট ওয়াটার বন্ধ করেছি। স্লাম্প ধরেছে এবং ৭ দিনের কিউব ব্রেক মিক্স ডিজাইনের আগেই এসেছে।",
    },
    who: { en: "Site engineer, high-rise pour, Dhaka", bn: "সাইট ইঞ্জিনিয়ার, হাই-রাইজ পোর, ঢাকা" },
  },
  {
    quote: {
      en: "The north wall stopped showing salt rings after the slurry and Shield AF. We checked it through one full monsoon.",
      bn: "স্লারি ও শিল্ড এএফ-এর পর উত্তর দেয়ালে লবণের দাগ থেমেছে। এক পুরো বর্ষা পর্যবেক্ষণ করেছি।",
    },
    who: { en: "Project manager, residential retrofit", bn: "প্রজেক্ট ম্যানেজার, আবাসিক রেট্রোফিট" },
  },
  {
    quote: {
      en: "Drum supply to the batching plant was consistent. QC sheets matched the CUET chloride result we asked for.",
      bn: "ব্যাচিং প্ল্যান্টে ড্রাম সাপ্লাই স্থিতিশীল ছিল। কিউসি শিট আমাদের চাওয়া CUET ক্লোরাইড রেজাল্টের সাথে মিলেছে।",
    },
    who: { en: "Plant chemist, ready-mix, Sylhet", bn: "প্ল্যান্ট কেমিস্ট, রেডি-মিক্স, সিলেট" },
  },
];

export const sheets = [
  { id: "tds-100", kind: "TDS", product: "Oxilar Super-100", file: "/documents/tds-super-100.html" },
  { id: "sds-100", kind: "SDS", product: "Oxilar Super-100", file: "/documents/sds-super-100.html" },
  { id: "tds-sp", kind: "TDS", product: "Oxilar Plast SP-220", file: "/documents/tds-sp-220.html" },
  { id: "tds-ep", kind: "TDS", product: "Oxilar Floor EP-400", file: "/documents/tds-ep-400.html" },
  { id: "guide-roof", kind: "Manual", product: "Roof slurry method", file: "/documents/guide-roof.html" },
];

export const labs = [
  { id: "buet", body: "BUET", title: { en: "Compressive strength & permeability", bn: "কম্প্রেসিভ স্ট্রেংথ ও পারমিয়াবিলিটি" }, note: { en: "Reference cubes with Super-100 integral dose versus control mix.", bn: "কন্ট্রোল মিক্সের বিপরীতে সুপার-১০০ ইন্টিগ্রাল ডোজের রেফারেন্স কিউব।" }, file: "/documents/lab-buet.html" },
  { id: "cuet", body: "CUET", title: { en: "Chloride ion resistance", bn: "ক্লোরাইড আয়ন প্রতিরোধ" }, note: { en: "Chloride-free confirmation on SP-220 and Set-Fast batches.", bn: "SP-220 ও সেট-ফাস্ট ব্যাচে ক্লোরাইড-মুক্ত নিশ্চিতকরণ।" }, file: "/documents/lab-cuet.html" },
  { id: "bcsir", body: "BCSIR", title: { en: "Damp and fungal exposure", bn: "ড্যাম্প ও ফাঙ্গাল এক্সপোজার" }, note: { en: "Shield AF film checked for algal staining under humid conditioning.", bn: "আর্দ্র কন্ডিশনিংয়ে শিল্ড এএফ ফিল্মের শৈবাল দাগ পরীক্ষা।" }, file: "/documents/lab-bcsir.html" },
];

export const strengthSeries = [
  { day: "3d", control: 18, dosed: 22 },
  { day: "7d", control: 28, dosed: 34 },
  { day: "28d", control: 38, dosed: 46 },
];

export const faqs: { q: Copy; a: Copy }[] = [
  {
    q: { en: "How much Oxilar Super-100 per bag of cement?", bn: "প্রতি ব্যাগ সিমেন্টে কত অক্সিলার সুপার-১০০?" },
    a: { en: "A practical starting point is 300 ml per 50 kg bag for integral waterproofing. Roof slurry is mixed separately: 1 litre with 10–12 litres water and 12.5 kg cement.", bn: "ইন্টিগ্রাল ওয়াটারপ্রুফিংয়ের ব্যবহারিক শুরু প্রতি ৫০ কেজি ব্যাগে ৩০০ মিলি। ছাদের স্লারি আলাদা: ১ লিটারের সাথে ১০–১২ লিটার পানি ও ১২.৫ কেজি সিমেন্ট।" },
  },
  {
    q: { en: "Are the admixtures chloride-free?", bn: "অ্যাডমিক্সচার কি ক্লোরাইড-মুক্ত?" },
    a: { en: "Super-100, Plast SP-220 and Set-Fast are specified chloride-free. Ask for the batch CUET or BCSIR sheet before a prestressed pour.", bn: "সুপার-১০০, প্লাস্ট SP-220 ও সেট-ফাস্ট ক্লোরাইড-মুক্ত হিসেবে উল্লেখিত। প্রিস্ট্রেসড পোরের আগে ব্যাচের CUET বা BCSIR শিট চান।" },
  },
  {
    q: { en: "Where is the factory?", bn: "কারখানা কোথায়?" },
    a: { en: "Blending is at Kalampur, Dhamrai, Dhaka. The corporate office is 31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka.", bn: "ব্লেন্ডিং কালামপুর, ধামরাই, ঢাকায়। কর্পোরেট অফিস ৩১/১ বাবর রোড, মোহাম্মদপুর, ধানমন্ডি, ঢাকা।" },
  },
];

export const videos = [
  { title: { en: "Roof slurry, two coats", bn: "ছাদের স্লারি, দুই কোট" }, length: "6 min", body: { en: "SSD surface, slurry ratio, cross-brush, and cure.", bn: "SSD সারফেস, স্লারি অনুপাত, আড়াআড়ি ব্রাশ ও কিউর।" } },
  { title: { en: "Dosing a ready-mix truck", bn: "রেডি-মিক্স ট্রাকে ডোজ" }, length: "4 min", body: { en: "Where to add SP-220 and why not to add site water.", bn: "SP-220 কোথায় দেবেন এবং সাইট ওয়াটার কেন দেবেন না।" } },
  { title: { en: "Epoxy floor prep", bn: "ইপক্সি ফ্লোর প্রিপ" }, length: "8 min", body: { en: "Grinding profile, moisture check, mix and spike roll.", bn: "গ্রাইন্ডিং প্রোফাইল, আর্দ্রতা চেক, মিক্স ও স্পাইক রোল।" } },
];
