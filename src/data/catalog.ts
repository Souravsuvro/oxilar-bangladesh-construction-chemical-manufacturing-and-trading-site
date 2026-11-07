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
      { en: "Stop active leaks first. Apply on dry, sound plaster.", bn: "সক্রিয় লিক আগে বন্ধ করুন। শুকনো, সুস্থ প্লাস্টারে লাগান।" },
    ],
    safety: [
      { en: "Keep from eyes. Wash tools with water before film forms.", bn: "চোখ থেকে দূরে রাখুন। ফিল্ম হওয়ার আগে টুল পানি দিয়ে ধুয়ে নিন।" },
    ],
    specs: [
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Damp & algae", bn: "ড্যাম্প ও শেওলা" } },
    ],
  },
  {
    slug: "oxilar-anchor-ch",
    sku: "OX-GR-CH20",
    name: { en: "Oxilar Anchor CH-20", bn: "অক্সিলার অ্যাঙ্কর সিএইচ-২০" },
    category: "grout",
    packs: ["4L", "20L"],
    image: "/media/stack.jpg",
    short: {
      en: "Chemical anchor system for rebar and threaded rod in concrete and masonry.",
      bn: "কংক্রিট ও মেসনরিতে রিবার ও থ্রেডেড রডের জন্য কেমিক্যাল অ্যাঙ্কর সিস্টেম।",
    },
    applications: [
      { en: "Rebar dowels and starter bars", bn: "রিবার ডোয়েল ও স্টার্টার বার" },
      { en: "Equipment fixings", bn: "যন্ত্রপাতি ফিক্সিং" },
    ],
    dosage: {
      en: "Follow hole diameter and depth on the cartridge label. Clean dust before injection.",
      bn: "কার্টিজ লেবেলের হোল ডায়ামিটার ও গভীরতা অনুসরণ করুন। ইনজেকশনের আগে ধুলা পরিষ্কার করুন।",
    },
    mlPerBag: 0,
    method: [
      { en: "Drill, brush, blow out dust, inject from the bottom of the hole.", bn: "ড্রিল, ব্রাশ, ধুলা ফুঁ দিয়ে সরান, হোলের তলা থেকে ইনজেক্ট করুন।" },
    ],
    safety: [
      { en: "Resin system — gloves and eye protection required.", bn: "রেজিন সিস্টেম — গ্লাভস ও চোখের সুরক্ষা বাধ্যতামূলক।" },
    ],
    specs: [
      { label: { en: "System", bn: "সিস্টেম" }, value: { en: "Chemical anchor", bn: "কেমিক্যাল অ্যাঙ্কর" } },
    ],
  },
];

export const benefits: { title: Copy; body: Copy }[] = [
  { title: { en: "Monsoon-ready waterproofing", bn: "বর্ষা-উপযোগী ওয়াটারপ্রুফিং" }, body: { en: "Formulated for Dhaka rainfall intensity and coastal salinity.", bn: "ঢাকার বৃষ্টি ও উপকূলীয় লবণাক্ততার জন্য তৈরি।" } },
  { title: { en: "Chloride-free admixtures", bn: "ক্লোরাইড-মুক্ত অ্যাডমিক্সচার" }, body: { en: "Protects reinforcement in structural and prestressed work.", bn: "স্ট্রাকচারাল ও প্রিস্ট্রেসড কাজে রিইনফোর্সমেন্ট রক্ষা করে।" } },
  { title: { en: "Pack sizes for site and plant", bn: "সাইট ও প্ল্যান্টের প্যাক" }, body: { en: "4L, 20L and heavy-duty drums for dealers and ready-mix.", bn: "ডিলার ও রেডি-মিক্সের জন্য ৪লি, ২০লি ও হেভি-ডিউটি ড্রাম।" } },
  { title: { en: "Lab-referenced quality", bn: "ল্যাব-রেফারেন্সড মান" }, body: { en: "BUET, CUET and BCSIR test programmes support batch confidence.", bn: "BUET, CUET ও BCSIR টেস্ট প্রোগ্রাম ব্যাচ আত্মবিশ্বাস দেয়।" } },
  { title: { en: "Global raw materials", bn: "গ্লোবাল কাঁচামাল" }, body: { en: "Resins and polymers from China, Korea, Taiwan, India, Thailand, Singapore.", bn: "চীন, কোরিয়া, তাইওয়ান, ভারত, থাইল্যান্ড, সিঙ্গাপুর থেকে রেজিন ও পলিমার।" } },
  { title: { en: "Site calculators & RFQ", bn: "সাইট ক্যালকুলেটর ও আরএফকিউ" }, body: { en: "Estimate litres and packs, then send a basket to procurement.", bn: "লিটার ও প্যাক অনুমান করে প্রকিউরমেন্টে বাস্কেট পাঠান।" } },
];

export const sourcing = [
  { code: "CN", country: { en: "China", bn: "চীন" }, items: { en: "Epoxy resin, hardener, solvents", bn: "ইপক্সি রেজিন, হার্ডেনার, সলভেন্ট" } },
  { code: "KR", country: { en: "South Korea", bn: "দক্ষিণ কোরিয়া" }, items: { en: "Epoxy resin, hardener", bn: "ইপক্সি রেজিন, হার্ডেনার" } },
  { code: "TW", country: { en: "Taiwan", bn: "তাইওয়ান" }, items: { en: "Epoxy resin", bn: "ইপক্সি রেজিন" } },
  { code: "IN", country: { en: "India", bn: "ভারত" }, items: { en: "Additives and carriers", bn: "অ্যাডিটিভ ও ক্যারিয়ার" } },
  { code: "TH", country: { en: "Thailand", bn: "থাইল্যান্ড" }, items: { en: "Specialty chemicals", bn: "স্পেশালিটি কেমিক্যাল" } },
  { code: "SG", country: { en: "Singapore", bn: "সিঙ্গাপুর" }, items: { en: "Trading hub & logistics", bn: "ট্রেডিং হাব ও লজিস্টিকস" } },
];

export const leaders = [
  { name: { en: "Technical leadership", bn: "টেকনিক্যাল নেতৃত্ব" }, role: { en: "Formulation & quality", bn: "ফর্মুলেশন ও মান" }, bio: { en: "Oversees blend consistency and lab coordination.", bn: "ব্লেন্ড সামঞ্জস্য ও ল্যাব সমন্বয় তদারকি করে।" } },
  { name: { en: "Commercial team", bn: "কমার্শিয়াল টিম" }, role: { en: "Dealers & projects", bn: "ডিলার ও প্রকল্প" }, bio: { en: "Supports stockists and mega-project procurement.", bn: "স্টকিস্ট ও মেগা-প্রকল্প প্রকিউরমেন্ট সাপোর্ট করে।" } },
  { name: { en: "Plant operations", bn: "প্ল্যান্ট অপারেশন" }, role: { en: "Kalampur blending", bn: "কালামপুর ব্লেন্ডিং" }, bio: { en: "Runs day-to-day production and pack filling.", bn: "দৈনন্দিন উৎপাদন ও প্যাক ফিলিং চালায়।" } },
];

export const projects = [
  { title: { en: "Roof waterproofing — Dhaka", bn: "ছাদ ওয়াটারপ্রুফিং — ঢাকা" }, sector: { en: "Residential", bn: "আবাসিক" }, product: "oxilar-super-100", summary: { en: "Slurry system on sunken toilets and roof slab.", bn: "সানকেন টয়লেট ও ছাদের স্ল্যাবে স্লারি সিস্টেম।" } },
  { title: { en: "Ready-mix dosing — Gazipur", bn: "রেডি-মিক্স ডোজিং — গাজীপুর" }, sector: { en: "Infrastructure", bn: "অবকাঠামো" }, product: "oxilar-plast-sp", summary: { en: "SP-220 for pumped structural concrete.", bn: "পাম্পড স্ট্রাকচারাল কংক্রিটের জন্য SP-220।" } },
  { title: { en: "Factory floor — Savar", bn: "ফ্যাক্টরি ফ্লোর — সাভার" }, sector: { en: "Industrial", bn: "শিল্প" }, product: "oxilar-floor-epx", summary: { en: "Self-leveling epoxy in garment unit.", bn: "গার্মেন্টস ইউনিটে সেলফ-লেভেলিং ইপক্সি।" } },
];

export const projectSectors = [
  { id: "all", label: { en: "All", bn: "সব" } },
  { id: "Residential", label: { en: "Residential", bn: "আবাসিক" } },
  { id: "Infrastructure", label: { en: "Infrastructure", bn: "অবকাঠামো" } },
  { id: "Industrial", label: { en: "Industrial", bn: "শিল্প" } },
];

export const quotes = [
  { text: { en: "Reliable dosage guidance and on-time drums for our pours.", bn: "আমাদের পোরের জন্য নির্ভরযোগ্য ডোজ গাইড ও সময়মতো ড্রাম।" }, by: { en: "Site engineer, Dhaka", bn: "সাইট ইঞ্জিনিয়ার, ঢাকা" } },
];

export const sheets = [
  { product: "Oxilar Super-100", type: "TDS", href: "/documents/super-100-tds.html" },
  { product: "Oxilar Plast SP-220", type: "TDS", href: "/documents/sp-220-tds.html" },
  { product: "Oxilar Floor EP-400", type: "TDS", href: "/documents/ep-400-tds.html" },
];

export const labs = [
  { name: "BUET", note: { en: "Referenced strength and permeability summaries", bn: "স্ট্রেংথ ও পারমিয়েবিলিটি সারাংশ" } },
  { name: "CUET", note: { en: "Batch chemistry checks", bn: "ব্যাচ কেমিস্ট্রি চেক" } },
  { name: "BCSIR", note: { en: "Material characterisation support", bn: "ম্যাটেরিয়াল ক্যারেক্টারাইজেশন সাপোর্ট" } },
];

export const strengthSeries = [
  { day: "3d", control: 12, dosed: 15 },
  { day: "7d", control: 18, dosed: 23 },
  { day: "14d", control: 24, dosed: 29 },
  { day: "28d", control: 32, dosed: 38 },
];

export const companyProfile = {
  established: "6 September 2019",
  about: {
    en: "Oxilar Bangladesh is a trusted manufacturer of high-performance construction chemicals, dedicated to delivering innovative and reliable solutions for the nation’s growing infrastructure needs. Established on 6 September 2019, we have steadily emerged as a progressive force in Bangladesh’s construction chemical industry. With a strong focus on quality, advanced technology, and customer satisfaction, Oxilar Bangladesh provides a comprehensive range of products that enhance durability, performance, and sustainability in construction.",
    bn: "অক্সিলার বাংলাদেশ উচ্চ-কর্মক্ষমতা সম্পন্ন কনস্ট্রাকশন কেমিক্যালের বিশ্বস্ত প্রস্তুতকারক, দেশের ক্রমবর্ধমান অবকাঠামো চাহিদার জন্য উদ্ভাবনী ও নির্ভরযোগ্য সমাধান সরবরাহে নিবেদিত। ৬ সেপ্টেম্বর ২০১৯-এ প্রতিষ্ঠিত হয়ে আমরা বাংলাদেশের কনস্ট্রাকশন কেমিক্যাল শিল্পে একটি প্রগতিশীল শক্তি হিসেবে আবির্ভূত হয়েছি।",
  },
  vision: {
    en: "To be a leading contributor to Bangladesh’s industrial and infrastructural progress by delivering world-class construction chemical solutions that help build a stronger and better future.",
    bn: "বিশ্বমানের কনস্ট্রাকশন কেমিক্যাল সমাধান সরবরাহ করে বাংলাদেশের শিল্প ও অবকাঠামো উন্নয়নে নেতৃত্বস্থানীয় অবদানকারী হওয়া, যা একটি শক্তিশালী ও উন্নত ভবিষ্যৎ গড়তে সাহায্য করে।",
  },
  mission: {
    en: "To empower the construction industry with innovative, high-quality, and sustainable chemical solutions while creating value for our customers, partners, and the nation through continuous improvement, integrity, and excellence.",
    bn: "উদ্ভাবনী, উচ্চ-মানের ও টেকসই রাসায়নিক সমাধান দিয়ে নির্মাণ শিল্পকে শক্তিশালী করা এবং ক্রমাগত উন্নতি, সততা ও উৎকর্ষের মাধ্যমে গ্রাহক, অংশীদার ও জাতির জন্য মূল্য সৃষ্টি করা।",
  },
  commitment: {
    en: "At Oxilar Bangladesh, we believe that quality construction chemicals form the foundation of lasting infrastructure. Every product we manufacture is developed with rigorous standards, advanced formulation technology, and a deep understanding of local construction challenges.",
    bn: "অক্সিলার বাংলাদেশে আমরা বিশ্বাস করি যে মানসম্পন্ন কনস্ট্রাকশন কেমিক্যাল স্থায়ী অবকাঠামোর ভিত্তি। আমাদের প্রতিটি পণ্য কঠোর মান, উন্নত ফর্মুলেশন প্রযুক্তি এবং স্থানীয় নির্মাণ চ্যালেঞ্জের গভীর বোঝাপড়া দিয়ে তৈরি।",
  },
  pillars: [
    { title: { en: "Quality", bn: "গুণমান" }, body: { en: "Uncompromising standards in every product we deliver", bn: "আমরা যে প্রতিটি পণ্য সরবরাহ করি তাতে আপোষহীন মান" } },
    { title: { en: "Innovation", bn: "উদ্ভাবন" }, body: { en: "Advanced technology for superior performance", bn: "উন্নত কর্মক্ষমতার জন্য উন্নত প্রযুক্তি" } },
    { title: { en: "Sustainability", bn: "টেকসইতা" }, body: { en: "Solutions that protect people and the planet", bn: "মানুষ ও গ্রহকে রক্ষা করে এমন সমাধান" } },
    { title: { en: "Partnership", bn: "অংশীদারিত্ব" }, body: { en: "Growing together with our customers & nation", bn: "আমাদের গ্রাহক ও জাতির সাথে একসাথে বেড়ে ওঠা" } },
  ],
};

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
  {
    q: { en: "When was Oxilar Bangladesh established?", bn: "অক্সিলার বাংলাদেশ কবে প্রতিষ্ঠিত?" },
    a: { en: "Oxilar Bangladesh was established on 6 September 2019 and has grown as a progressive construction chemical manufacturer serving projects nationwide.", bn: "অক্সিলার বাংলাদেশ ৬ সেপ্টেম্বর ২০১৯-এ প্রতিষ্ঠিত হয় এবং সারা দেশের প্রকল্পে কনস্ট্রাকশন কেমিক্যাল সরবরাহ করে বাড়ছে।" },
  },
  {
    q: { en: "What packaging sizes are available?", bn: "কোন কোন প্যাকেজিং সাইজ আছে?" },
    a: { en: "Most systems ship in 4 L pails, 20 L pails, and heavy-duty industrial drums for ready-mix plants and large sites.", bn: "অধিকাংশ সিস্টেম ৪ লিটার পেইল, ২০ লিটার পেইল এবং রেডি-মিক্স ও বড় সাইটের জন্য হেভি-ডিউটি ড্রামে পাওয়া যায়।" },
  },
  {
    q: { en: "Can I use Super-100 on roofs and basements?", bn: "সুপার-১০০ ছাদ ও বেজমেন্টে ব্যবহার করা যায়?" },
    a: { en: "Yes. Super-100 is formulated for roof slabs, sunken toilets, basements, retaining walls, and water tanks under Bangladesh monsoon and salinity conditions.", bn: "হ্যাঁ। সুপার-১০০ ছাদের স্ল্যাব, সানকেন টয়লেট, বেজমেন্ট, রিটেইনিং ওয়াল ও পানির ট্যাংকের জন্য বর্ষা ও লবণাক্ততার শর্তে তৈরি।" },
  },
  {
    q: { en: "Do you supply ready-mix plants?", bn: "রেডি-মিক্স প্ল্যান্টে সাপ্লাই করেন?" },
    a: { en: "Yes. Plast SP-220 and related admixtures are supplied in 20 L and drums for plant dosing. Use the B2B portal for bulk quotations.", bn: "হ্যাঁ। প্লাস্ট SP-220 ও সম্পর্কিত অ্যাডমিক্সচার ২০ লিটার ও ড্রামে প্ল্যান্ট ডোজিংয়ের জন্য সরবরাহ হয়। বাল্ক কোটেশনের জন্য বিটুবি পোর্টাল ব্যবহার করুন।" },
  },
  {
    q: { en: "How do I request a technical data sheet (TDS)?", bn: "টিডিএস কীভাবে পাব?" },
    a: { en: "Open the TDS / Lab page for Super-100, SP-220, EP-400 and application manuals, or call +88 0196-0198313 for a signed batch sheet.", bn: "টিডিএস / ল্যাব পেজে সুপার-১০০, SP-220, EP-400 ও অ্যাপ্লিকেশন ম্যানুয়াল খুলুন, অথবা স্বাক্ষরিত ব্যাচ শিটের জন্য +৮৮ ০১৯৬-০১৯৮৩১৩-এ কল করুন।" },
  },
  {
    q: { en: "Is Oxilar suitable for coastal salinity and damp walls?", bn: "উপকূলীয় লবণাক্ততা ও ড্যাম্প দেয়ালে উপযোগী?" },
    a: { en: "Yes. Super-100 and Shield AF target damp, salts, algae and fungi common on north-facing and coastal walls in Bangladesh.", bn: "হ্যাঁ। সুপার-১০০ ও শিল্ড এএফ বাংলাদেশের উত্তরমুখী ও উপকূলীয় দেয়ালের ড্যাম্প, লবণ, শেওলা ও ছত্রাক লক্ষ্য করে।" },
  },
  {
    q: { en: "How do site dosage calculators work?", bn: "সাইট ডোজ ক্যালকুলেটর কীভাবে কাজ করে?" },
    a: { en: "The Site estimate tool converts slab volume, cement bags, or epoxy area into litres and pack counts. Always confirm with a trial mix and the current TDS before pouring.", bn: "সাইট অনুমান টুল স্ল্যাব ভলিউম, সিমেন্ট ব্যাগ বা ইপক্সি এলাকাকে লিটার ও প্যাক সংখ্যায় রূপান্তর করে। পোরের আগে ট্রায়াল মিক্স ও বর্তমান টিডিএস দিয়ে নিশ্চিত করুন।" },
  },
  {
    q: { en: "How can dealers or contractors partner with Oxilar?", bn: "ডিলার বা ঠিকাদার কীভাবে অংশীদার হবেন?" },
    a: { en: "Use the B2B portal for dealership applications and project bulk RFQs. Wholesale tiers, site support, and sales kits are available for approved partners.", bn: "ডিলারশিপ আবেদন ও প্রকল্প বাল্ক আরএফকিউর জন্য বিটুবি পোর্টাল ব্যবহার করুন। অনুমোদিত অংশীদারদের জন্য পাইকারি টায়ার, সাইট সাপোর্ট ও সেলস কিট আছে।" },
  },
];

export const videos = [
  { title: { en: "Roof slurry, two coats", bn: "ছাদের স্লারি, দুই কোট" }, length: "6 min", body: { en: "SSD surface, slurry ratio, cross-brush, and cure.", bn: "SSD সারফেস, স্লারি অনুপাত, আড়াআড়ি ব্রাশ ও কিউর।" } },
  { title: { en: "Dosing a ready-mix truck", bn: "রেডি-মিক্স ট্রাকে ডোজ" }, length: "4 min", body: { en: "Where to add SP-220 and why not to add site water.", bn: "SP-220 কোথায় দেবেন এবং সাইট ওয়াটার কেন দেবেন না।" } },
  { title: { en: "Epoxy floor prep", bn: "ইপক্সি ফ্লোর প্রিপ" }, length: "8 min", body: { en: "Grinding profile, moisture check, mix and spike roll.", bn: "গ্রাইন্ডিং প্রোফাইল, আর্দ্রতা চেক, মিক্স ও স্পাইক রোল।" } },
];
