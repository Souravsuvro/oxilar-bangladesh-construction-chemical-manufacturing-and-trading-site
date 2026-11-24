export type Lang = "en" | "bn";
export type Copy = { en: string; bn: string };

export type Pack = "1L" | "5L" | "10L" | "20L" | "200L";

export type Category = "waterproofing" | "admixture";

export type Product = {
  slug: string;
  sku: string;
  name: Copy;
  category: Category;
  packs: Pack[];
  image: string;
  gallery?: string[];
  colorTag?: Copy;
  short: Copy;
  benefits: Copy[];
  applications: Copy[];
  dosage: Copy;
  mlPerBag: number;
  method: Copy[];
  safety: Copy[];
  specs: { label: Copy; value: Copy }[];
};

export const categories: { id: Category | "all"; label: Copy }[] = [
  { id: "all", label: { en: "All systems", bn: "সব সিস্টেম" } },
  { id: "waterproofing", label: { en: "Damp & waterproofing", bn: "ড্যাম্প ও ওয়াটারপ্রুফিং" } },
  { id: "admixture", label: { en: "Concrete admixtures", bn: "কংক্রিট অ্যাডমিক্সচার" } },
];

export const packLabels: Record<Pack, Copy> = {
  "1L": { en: "1 Liter", bn: "১ লিটার" },
  "5L": { en: "5 Liter", bn: "৫ লিটার" },
  "10L": { en: "10 Liter", bn: "১০ লিটার" },
  "20L": { en: "20 Liter", bn: "২০ লিটার" },
  "200L": { en: "200 Liter", bn: "২০০ লিটার" },
};

const LIQUID: Pack[] = ["1L", "5L", "10L", "20L", "200L"];
const PACK_SPEC = { en: "1 / 5 / 10 / 20 / 200 L", bn: "১ / ৫ / ১০ / ২০ / ২০০ লিটার" };

export const products: Product[] = [
  {
    slug: "oxilar-damp-guard",
    sku: "OX-DG",
    name: { en: "Oxilar Damp Guard", bn: "অক্সিলার ড্যাম্প গার্ড" },
    category: "waterproofing",
    packs: LIQUID,
    image: "/media/damp-guard-front.jpg",
    gallery: ["/media/damp-guard-front.jpg", "/media/damp-guard-studio-backside.jpg", "/media/damp-guard-front.jpg"],
    colorTag: { en: "Yellow Drum", bn: "হলুদ ড্রাম" },
    short: {
      en: "Water-reducing and waterproofing liquid admixture for every type of casting. Acid and salt resistance, higher strength, and lasting inactivation of damp and salts.",
      bn: "ওয়াটার-রিডিউসিং ও ওয়াটারপ্রুফিং লিকুইড অ্যাডমিক্সচার। অ্যাসিড ও লবণ প্রতিরোধ, উচ্চ শক্তি এবং ড্যাম্প ও লবণ স্থায়ীভাবে নিষ্ক্রিয় রাখে।",
    },
    benefits: [
      { en: "Integral damp & waterproofing in the mix", bn: "মিক্সের সাথেই ড্যাম্প ও ওয়াটারপ্রুফিং" },
      { en: "Resists acid rain, salts and coastal exposure", bn: "অ্যাসিড বৃষ্টি, লবণ ও উপকূলীয় এক্সপোজার প্রতিরোধ" },
      { en: "Improves workability and compressive strength", bn: "ওয়ার্ক্যাবিলিটি ও কম্প্রেসিভ স্ট্রেংথ বাড়ায়" },
      { en: "Available in site-ready 1L to 200L packs", bn: "সাইট-রেডি ১ লিটার থেকে ২০০ লিটার প্যাক" },
    ],
    applications: [
      { en: "Roofs, basements, water tanks and external plaster", bn: "ছাদ, বেজমেন্ট, পানির ট্যাংক ও বাহ্যিক প্লাস্টার" },
      { en: "All structural casting where damp and salt attack is a risk", bn: "ড্যাম্প ও লবণ ঝুঁকিযুক্ত সব স্ট্রাকচারাল ঢালাই" },
      { en: "Ready-mix and site-batched concrete", bn: "রেডি-মিক্স ও সাইট-ব্যাচড কংক্রিট" },
    ],
    dosage: {
      en: "Typically 250–400 ml per 50 kg cement bag. Confirm with site trial mix and current TDS for your cement brand.",
      bn: "সাধারণত প্রতি ৫০ কেজি সিমেন্ট ব্যাগে ২৫০–৪০০ মিলি। সাইট ট্রায়াল মিক্স ও টিডিএস দিয়ে নিশ্চিত করুন।",
    },
    mlPerBag: 300,
    method: [
      { en: "Add with mixing water after cement and aggregates are wet.", bn: "সিমেন্ট ও অ্যাগ্রিগেট ভেজার পর মিক্সিং ওয়াটারের সাথে যোগ করুন।" },
      { en: "Mix thoroughly until uniform. Do not overdose.", bn: "সম্পূর্ণ মিশিয়ে নিন। অতিরিক্ত ডোজ দেবেন না।" },
      { en: "Follow trial mix results for local cement brands.", bn: "স্থানীয় সিমেন্ট ব্র্যান্ডের ট্রায়াল মিক্স অনুসরণ করুন।" },
    ],
    safety: [
      { en: "Store sealed, upright, away from children, at ambient temperature.", bn: "শিশুদের নাগালের বাইরে, সোজা ও সিল করে স্বাভাবিক তাপমাত্রায় রাখুন।" },
      { en: "Avoid contact with eyes and prolonged skin contact. Rinse with water if exposed.", bn: "চোখে বা দীর্ঘক্ষণ ত্বকে লাগবেন না। লাগলে পানি দিয়ে ধুয়ে ফেলুন।" },
    ],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Polymerised liquid", bn: "পলিমারাইজড লিকুইড" } },
      { label: { en: "Type", bn: "ধরন" }, value: { en: "Water reducing + waterproofing", bn: "ওয়াটার রিডিউসিং + ওয়াটারপ্রুফিং" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: PACK_SPEC },
      { label: { en: "Colour tag", bn: "রঙের ট্যাগ" }, value: { en: "Yellow drum / pail", bn: "হলুদ ড্রাম / পেইল" } },
    ],
  },
  {
    slug: "oxilar-solid-bond",
    sku: "OX-SB",
    name: { en: "Oxilar Solid Bond", bn: "অক্সিলার সলিড বন্ড" },
    category: "admixture",
    packs: LIQUID,
    image: "/media/solid-bond-front.jpg",
    gallery: ["/media/solid-bond-front.jpg", "/media/solid-bond-studio-backside.jpg", "/media/oxilar-green-pail.jpg"],
    colorTag: { en: "Green Drum", bn: "সবুজ ড্রাম" },
    short: {
      en: "Water-reducing admixture for stronger bond and waterproof performance in structural pours. Site packs from 1 L to 200 L.",
      bn: "স্ট্রাকচারাল পোরে শক্তিশালী বন্ধন ও ওয়াটারপ্রুফ পারফরম্যান্সের জন্য ওয়াটার-রিডিউসিং অ্যাডমিক্সচার। ১ থেকে ২০০ লিটার সাইট প্যাক।",
    },
    benefits: [
      { en: "Stronger concrete bond and denser matrix", bn: "শক্তিশালী কংক্রিট বন্ধন ও ঘন ম্যাট্রিক্স" },
      { en: "Improved waterproof performance of the mix", bn: "মিক্সের ওয়াটারপ্রুফ পারফরম্যান্স উন্নত" },
      { en: "Better workability without excess water", bn: "অতিরিক্ত পানি ছাড়াই ভালো ওয়ার্ক্যাবিলিটি" },
      { en: "Clear green pack identification on site", bn: "সাইটে সবুজ প্যাক দিয়ে সহজে শনাক্ত" },
    ],
    applications: [
      { en: "Structural pours and waterproof concrete mixes", bn: "স্ট্রাকচারাল পোর ও ওয়াটারপ্রুফ কংক্রিট মিক্স" },
      { en: "Columns, slabs, rafts and water-retaining elements", bn: "কলাম, স্ল্যাব, র‍্যাফট ও ওয়াটার-রিটেইনিং এলিমেন্ট" },
      { en: "Ready-mix and site batching yards", bn: "রেডি-মিক্স ও সাইট ব্যাচিং ইয়ার্ড" },
    ],
    dosage: {
      en: "Per current TDS; typically in the 250–400 ml per 50 kg cement bag range. Trial mix recommended before large pours.",
      bn: "বর্তমান টিডিএস অনুযায়ী; সাধারণত প্রতি ৫০ কেজি সিমেন্ট ব্যাগে ২৫০–৪০০ মিলি। বড় পোরের আগে ট্রায়াল মিক্স করুন।",
    },
    mlPerBag: 300,
    method: [
      { en: "Dispense into mixing water after aggregates and cement are wet.", bn: "অ্যাগ্রিগেট ও সিমেন্ট ভেজার পর মিক্সিং ওয়াটারে দিন।" },
      { en: "Mix until the colour is uniform throughout the batch.", bn: "ব্যাচ জুড়ে রং একরকম না হওয়া পর্যন্ত মিশান।" },
      { en: "Do not add extra water after dosing.", bn: "ডোজ দেওয়ার পর অতিরিক্ত পানি যোগ করবেন না।" },
    ],
    safety: [
      { en: "Store sealed and upright on a level surface.", bn: "সমতল স্থানে সিল করে সোজা রাখুন।" },
      { en: "Keep away from children and food areas.", bn: "শিশু ও খাবারের জায়গা থেকে দূরে রাখুন।" },
    ],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Liquid admixture", bn: "লিকুইড অ্যাডমিক্সচার" } },
      { label: { en: "Type", bn: "ধরন" }, value: { en: "Water reducing admixture", bn: "ওয়াটার রিডিউসিং অ্যাডমিক্সচার" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: PACK_SPEC },
      { label: { en: "Colour tag", bn: "রঙের ট্যাগ" }, value: { en: "Green drum / pail", bn: "সবুজ ড্রাম / পেইল" } },
    ],
  },
  {
    slug: "oxilar-sb-250",
    sku: "OX-SB250",
    name: { en: "Oxilar SB-250", bn: "অক্সিলার এসবি-২৫০" },
    category: "admixture",
    packs: LIQUID,
    image: "/media/oxilar-green-pail.jpg",
    gallery: ["/media/oxilar-green-pail.jpg", "/media/oxilar-green-pail-backside.jpg"],
    colorTag: { en: "Blue Barrel", bn: "নীল ব্যারেল" },
    short: {
      en: "High-performance bonding and waterproofing admixture in blue-barrel identification. Designed for structural and water-retaining concrete across 1–200 L packs.",
      bn: "নীল ব্যারেল শনাক্তকরণসহ উচ্চ পারফরম্যান্স বন্ডিং ও ওয়াটারপ্রুফিং অ্যাডমিক্সচার। ১–২০০ লিটার প্যাকে স্ট্রাকচারাল ও ওয়াটার-রিটেইনিং কংক্রিটের জন্য।",
    },
    benefits: [
      { en: "Strong bonding performance in structural mixes", bn: "স্ট্রাকচারাল মিক্সে শক্তিশালী বন্ডিং" },
      { en: "Supports waterproof and dense concrete", bn: "ওয়াটারপ্রুফ ও ঘন কংক্রিট সাপোর্ট করে" },
      { en: "Clear blue-barrel identification on site", bn: "সাইটে নীল ব্যারেল দিয়ে সহজে শনাক্ত" },
      { en: "Full range of site and plant pack sizes", bn: "সাইট ও প্ল্যান্টের সব প্যাক সাইজ" },
    ],
    applications: [
      { en: "Structural concrete and water-retaining structures", bn: "স্ট্রাকচারাল কংক্রিট ও ওয়াটার-রিটেইনিং স্ট্রাকচার" },
      { en: "Basements, tanks, columns and slabs", bn: "বেজমেন্ট, ট্যাংক, কলাম ও স্ল্যাব" },
      { en: "Projects requiring clear pack colour coding", bn: "প্যাক কালার কোডিং প্রয়োজন এমন প্রকল্প" },
    ],
    dosage: {
      en: "Follow current TDS. Typical range 250–400 ml per 50 kg cement bag. Always confirm with trial mix.",
      bn: "বর্তমান টিডিএস অনুসরণ করুন। সাধারণত প্রতি ৫০ কেজি সিমেন্ট ব্যাগে ২৫০–৪০০ মিলি। ট্রায়াল মিক্স দিয়ে নিশ্চিত করুন।",
    },
    mlPerBag: 300,
    method: [
      { en: "Add with gauging / mixing water after materials are wet.", bn: "মালামাল ভেজার পর গেজিং / মিক্সিং ওয়াটারের সাথে যোগ করুন।" },
      { en: "Mix thoroughly for uniform distribution.", bn: "একরকম বিতরণের জন্য ভালোভাবে মিশান।" },
      { en: "Do not overdose; rely on trial mix for site cement.", bn: "অতিরিক্ত ডোজ দেবেন না; সাইট সিমেন্টের ট্রায়াল মিক্স অনুসরণ করুন।" },
    ],
    safety: [
      { en: "Store sealed, upright, away from children.", bn: "সিল করে সোজা ও শিশুদের নাগালের বাইরে রাখুন।" },
      { en: "Use clean equipment; avoid contamination of the product.", bn: "পরিষ্কার যন্ত্রপাতি ব্যবহার করুন; পণ্য দূষণ এড়ান।" },
    ],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Liquid admixture", bn: "লিকুইড অ্যাডমিক্সচার" } },
      { label: { en: "Type", bn: "ধরন" }, value: { en: "Bonding + waterproofing admixture", bn: "বন্ডিং + ওয়াটারপ্রুফিং অ্যাডমিক্সচার" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: PACK_SPEC },
      { label: { en: "Colour tag", bn: "রঙের ট্যাগ" }, value: { en: "Blue barrel", bn: "নীল ব্যারেল" } },
    ],
  },
];

export const benefits: { title: Copy; body: Copy }[] = [
  {
    title: { en: "Independent manufacturer", bn: "স্বাধীন প্রস্তুতকারক" },
    body: {
      en: "Established 6 September 2019. Construction chemicals made and supplied in Bangladesh.",
      bn: "৬ সেপ্টেম্বর ২০১৯ থেকে। বাংলাদেশে তৈরি ও সরবরাহ।",
    },
  },
  {
    title: { en: "Dose and trial mix", bn: "ডোজ ও ট্রায়াল মিক্স" },
    body: {
      en: "Published dosage ranges with site trial-mix guidance for local cement brands.",
      bn: "স্থানীয় সিমেন্ট ব্র্যান্ডের জন্য ট্রায়াল মিক্স নির্দেশনাসহ ডোজ রেঞ্জ।",
    },
  },
  {
    title: { en: "Clear pack colour coding", bn: "স্পষ্ট প্যাক কালার কোডিং" },
    body: {
      en: "Yellow = Damp Guard · Green = Solid Bond · Blue = SB-250 — easy identification on busy sites.",
      bn: "হলুদ = ড্যাম্প গার্ড · সবুজ = সলিড বন্ড · নীল = এসবি-২৫০ — ব্যস্ত সাইটে সহজে শনাক্ত।",
    },
  },
];

export const sourcing: Copy = {
  en: "Raw materials are direct-imported from India, Malaysia and Taiwan.",
  bn: "কাঁচামাল ভারত, মালয়েশিয়া ও তাইওয়ান থেকে সরাসরি আমদানি করা হয়।",
};

export const strengthSeries: { label: Copy; value: number }[] = [
  { label: { en: "Control", bn: "কন্ট্রোল" }, value: 100 },
  { label: { en: "With Oxilar system", bn: "অক্সিলার সিস্টেম সহ" }, value: 118 },
];

export const gallery: { src: string; alt: Copy }[] = [
  { src: "/media/damp-guard-front.jpg", alt: { en: "Damp Guard pack", bn: "ড্যাম্প গার্ড প্যাক" } },
  { src: "/media/solid-bond-front.jpg", alt: { en: "Solid Bond pack", bn: "সলিড বন্ড প্যাক" } },
  { src: "/media/oxilar-green-pail.jpg", alt: { en: "Oxilar pack", bn: "অক্সিলার প্যাক" } },
];

export const processSteps: { step: string; title: Copy; body: Copy }[] = [
  {
    step: "01",
    title: { en: "Specify system", bn: "সিস্টেম নির্ধারণ" },
    body: { en: "Match product to exposure and structure type.", bn: "এক্সপোজার ও স্ট্রাকচার অনুযায়ী পণ্য মিলান।" },
  },
  {
    step: "02",
    title: { en: "Trial mix", bn: "ট্রায়াল মিক্স" },
    body: { en: "Confirm dose with site cement brand.", bn: "সাইটের সিমেন্ট ব্র্যান্ড দিয়ে ডোজ নিশ্চিত করুন।" },
  },
  {
    step: "03",
    title: { en: "Apply", bn: "প্রয়োগ" },
    body: { en: "Follow TDS and method notes.", bn: "টিডিএস ও মেথড নোট অনুসরণ করুন।" },
  },
  {
    step: "04",
    title: { en: "Support", bn: "সাপোর্ট" },
    body: { en: "Call or WhatsApp the technical desk.", bn: "টেকনিক্যাল ডেস্কে কল বা হোয়াটসঅ্যাপ করুন।" },
  },
];

export const stats: { value: string; label: Copy }[] = [
  { value: "2019", label: { en: "Established", bn: "প্রতিষ্ঠিত" } },
  { value: "3", label: { en: "Core systems", bn: "কোর সিস্টেম" } },
  { value: "64", label: { en: "Districts covered", bn: "জেলা কভারেজ" } },
];

export const companyProfile = {
  founded: { en: "6 September 2019", bn: "৬ সেপ্টেম্বর ২০১৯" },
  focus: {
    en: "Independent manufacturer of construction chemicals, waterproofing systems and industrial raw materials.",
    bn: "কনস্ট্রাকশন কেমিক্যাল, ওয়াটারপ্রুফিং সিস্টেম ও ইন্ডাস্ট্রিয়াল কাঁচামালের স্বাধীন প্রস্তুতকারক।",
  },
  office: { en: "31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka", bn: "৩১/১ বাবার রোড, মোহাম্মদপুর, ধানমন্ডি, ঢাকা" },
  factory: { en: "Kalampur, Dhamrai", bn: "কালামপুর, ধামরাই" },
};

export const faqs: { q: Copy; a: Copy }[] = [
  {
    q: { en: "Which pack sizes are available?", bn: "কোন প্যাক সাইজ পাওয়া যায়?" },
    a: {
      en: "All three systems — Damp Guard, Solid Bond and SB-250 — are supplied in 1 L, 5 L, 10 L, 20 L and 200 L packs.",
      bn: "তিনটি সিস্টেমই — ড্যাম্প গার্ড, সলিড বন্ড ও এসবি-২৫০ — ১, ৫, ১০, ২০ ও ২০০ লিটার প্যাকে সরবরাহ করা হয়।",
    },
  },
  {
    q: { en: "How do I tell the products apart on site?", bn: "সাইটে পণ্যগুলো কীভাবে আলাদা করব?" },
    a: {
      en: "Colour coding: Yellow drum = Damp Guard, Green drum = Solid Bond, Blue barrel = SB-250.",
      bn: "কালার কোডিং: হলুদ ড্রাম = ড্যাম্প গার্ড, সবুজ ড্রাম = সলিড বন্ড, নীল ব্যারেল = এসবি-২৫০।",
    },
  },
  {
    q: { en: "Do you provide dosage guidance?", bn: "ডোজ গাইডেন্স দেওয়া হয়?" },
    a: {
      en: "Yes. Typical ranges are published on each product page. Always confirm with a site trial mix and the current TDS for your cement brand.",
      bn: "হ্যাঁ। প্রতিটি পণ্য পেজে সাধারণ রেঞ্জ দেওয়া আছে। সাইট ট্রায়াল মিক্স ও টিডিএস দিয়ে নিশ্চিত করুন।",
    },
  },
  {
    q: { en: "How do I request a quotation?", bn: "কোটেশন কীভাবে চাইব?" },
    a: {
      en: "Use Add to RFQ on any product page, open the B2B portal, or WhatsApp / call the sales desk.",
      bn: "যেকোনো পণ্য পেজে Add to RFQ ব্যবহার করুন, B2B পোর্টাল খুলুন, অথবা সেলস ডেস্কে হোয়াটসঅ্যাপ / কল করুন।",
    },
  },
  {
    q: { en: "WhatsApp number?", bn: "হোয়াটসঅ্যাপ নম্বর?" },
    a: { en: "01826736886 (WhatsApp Business).", bn: "০১৮২৬৭৩৬৮৮৬ (হোয়াটসঅ্যাপ বিজনেস)।" },
  },
  {
    q: { en: "Dealership contact?", bn: "ডিলারশিপ যোগাযোগ?" },
    a: { en: "Call 01960198313 or use the B2B portal.", bn: "০১৯৬০১৯৮৩১৩-এ কল করুন অথবা বিটুবি পোর্টাল ব্যবহার করুন।" },
  },
  {
    q: { en: "How do I apply for a job?", bn: "চাকরির জন্য কীভাবে আবেদন করব?" },
    a: {
      en: "See Careers. Email your CV to oxilarbangladesh@gmail.com or call 01960198313.",
      bn: "ক্যারিয়ার পেজ দেখুন। সিভি oxilarbangladesh@gmail.com-এ পাঠান অথবা ০১৯৬০১৯৮৩১৩-এ কল করুন।",
    },
  },
];

export const projectSectors: Copy[] = [
  { en: "Residential & high-rise", bn: "আবাসিক ও হাই-রাইজ" },
  { en: "Industrial floors", bn: "ইন্ডাস্ট্রিয়াল ফ্লোর" },
  { en: "Water-retaining structures", bn: "ওয়াটার-রিটেইনিং স্ট্রাকচার" },
  { en: "Roads & infrastructure", bn: "সড়ক ও অবকাঠামো" },
];

export const projects: { title: Copy; sector: Copy; summary: Copy }[] = [
  {
    title: { en: "Roof waterproofing programmes", bn: "ছাদ ওয়াটারপ্রুফিং" },
    sector: { en: "Residential", bn: "আবাসিক" },
    summary: {
      en: "Damp Guard and Super-100 dosed systems for monsoon-exposed roofs.",
      bn: "বর্ষাপ্রবণ ছাদে ড্যাম্প গার্ড ও সুপার-১০০ ডোজড সিস্টেম।",
    },
  },
  {
    title: { en: "Plant and yard dust control", bn: "প্ল্যান্ট ও ইয়ার্ড ডাস্ট কন্ট্রোল" },
    sector: { en: "Industrial", bn: "ইন্ডাস্ট্রিয়াল" },
    summary: {
      en: "Befit Dust and Anti Dust for cleaner aggregates and floors.",
      bn: "পরিষ্কার অ্যাগ্রিগেট ও ফ্লোরের জন্য বেফিট ডাস্ট ও অ্যান্টি ডাস্ট।",
    },
  },
];

export const quotes: { quote: Copy; by: Copy }[] = [
  {
    quote: {
      en: "Dose, TDS and trial mix together — that is how site teams mix with confidence.",
      bn: "ডোজ, টিডিএস ও ট্রায়াল একসাথে — এভাবেই সাইট টিম আত্মবিশ্বাসে মিক্স করে।",
    },
    by: { en: "Oxilar technical desk", bn: "অক্সিলার টেকনিক্যাল ডেস্ক" },
  },
];

export const videos: { title: Copy; body: Copy; length: string }[] = [
  {
    title: { en: "Roof slurry method", bn: "ছাদের স্লারি পদ্ধতি" },
    body: {
      en: "SSD the slab, two cross coats, keep rain off 24 hours, then plaster.",
      bn: "স্ল্যাব এসএসডি, দুই আড়াআড়ি কোট, ২৪ ঘণ্টা বৃষ্টি থেকে রক্ষা, তারপর প্লাস্টার।",
    },
    length: "Guide",
  },
];

export const sheets: { id: string; kind: "TDS" | "SDS" | "Manual"; product: string; file: string }[] = [
  { id: "tds-s100", kind: "TDS", product: "Oxilar Super-100", file: "/documents/tds-super-100.html" },
  { id: "sds-s100", kind: "SDS", product: "Oxilar Super-100", file: "/documents/sds-super-100.html" },
  { id: "manual-roof", kind: "Manual", product: "Roof slurry guide", file: "/documents/guide-roof.html" },
];

export const labs: { id: string; body: string; title: Copy; note: Copy; file: string }[] = [
  {
    id: "lab-buet",
    body: "BUET",
    title: { en: "BUET method reference", bn: "বুয়েট মেথড রেফারেন্স" },
    note: {
      en: "Working HTML sheet — not a signed BUET certificate.",
      bn: "ওয়ার্কিং এইচটিএমএল শিট — স্বাক্ষরিত বুয়েট সনদ নয়।",
    },
    file: "/documents/lab-buet.html",
  },
  {
    id: "lab-cuet",
    body: "CUET",
    title: { en: "CUET method reference", bn: "চুয়েট মেথড রেফারেন্স" },
    note: {
      en: "Working HTML sheet — not a signed CUET certificate.",
      bn: "ওয়ার্কিং এইচটিএমএল শিট — স্বাক্ষরিত চুয়েট সনদ নয়।",
    },
    file: "/documents/lab-cuet.html",
  },
  {
    id: "lab-bcsir",
    body: "BCSIR",
    title: { en: "BCSIR method reference", bn: "বিসিএসআইআর মেথড রেফারেন্স" },
    note: {
      en: "Working HTML sheet — not a signed BCSIR certificate.",
      bn: "ওয়ার্কিং এইচটিএমএল শিট — স্বাক্ষরিত বিসিএসআইআর সনদ নয়।",
    },
    file: "/documents/lab-bcsir.html",
  },
];
