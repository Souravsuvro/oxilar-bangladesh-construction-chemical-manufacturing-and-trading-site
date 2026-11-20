export type Lang = "en" | "bn";
export type Copy = { en: string; bn: string };

export type Pack = "1L" | "5L" | "10L" | "20L" | "200L" | "1kg" | "25kg";

export type Category = "admixture" | "waterproofing" | "dust" | "flooring" | "grout";

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
  { id: "waterproofing", label: { en: "Damp & waterproofing", bn: "ড্যাম্প ও ওয়াটারপ্রুফিং" } },
  { id: "dust", label: { en: "Dust control", bn: "ডাস্ট কন্ট্রোল" } },
  { id: "flooring", label: { en: "Industrial flooring", bn: "ইন্ডাস্ট্রিয়াল ফ্লোরিং" } },
  { id: "grout", label: { en: "Grouts & anchors", bn: "গ্রাউট ও অ্যাঙ্কর" } },
];

export const packLabels: Record<Pack, Copy> = {
  "1L": { en: "1 Liter", bn: "১ লিটার" },
  "5L": { en: "5 Liter", bn: "৫ লিটার" },
  "10L": { en: "10 Liter", bn: "১০ লিটার" },
  "20L": { en: "20 Liter", bn: "২০ লিটার" },
  "200L": { en: "200 Liter", bn: "২০০ লিটার" },
  "1kg": { en: "1 kg pack", bn: "১ কেজি প্যাক" },
  "25kg": { en: "25 kg bag", bn: "২৫ কেজি ব্যাগ" },
};

const LIQUID: Pack[] = ["1L", "5L", "10L", "20L", "200L"];
const PACK_SPEC = { en: "1 / 5 / 10 / 20 / 200 L", bn: "১ / ৫ / ১০ / ২০ / ২০০ লিটার" };

export const products: Product[] = [
  {
    slug: "oxilar-super-100",
    sku: "OX-S100",
    name: { en: "Oxilar Super-100", bn: "অক্সিলার সুপার-১০০" },
    category: "admixture",
    packs: LIQUID,
    image: "/media/oxilar-product-pails.jpg",
    short: {
      en: "Multipurpose polymerised concrete admixture. Protects against acid rain, reduces heat of hydration, improves workability and strength.",
      bn: "মাল্টিপারপাস পলিমারাইজড কংক্রিট অ্যাডমিক্সচার। অ্যাসিড বৃষ্টি থেকে রক্ষা, ওয়ার্ক্যাবিলিটি ও শক্তি বৃদ্ধি।",
    },
    applications: [
      { en: "Column and roof casting, overhead water tanks", bn: "কলাম ও ছাদ ঢালাই, ওভারহেড পানির ট্যাংক" },
      { en: "Ready-mix yards and structural pours", bn: "রেডি মিক্স ইয়ার্ড ও স্ট্রাকচারাল পোর" },
    ],
    dosage: {
      en: "250–300 ml per 50 kg cement bag; acid exposure 300–400 ml. Confirm with trial mix and TDS.",
      bn: "প্রতি ৫০ কেজি সিমেন্ট ব্যাগে ২৫০–৩০০ মিলি; অ্যাসিড এক্সপোজারে ৩০০–৪০০ মিলি।",
    },
    mlPerBag: 275,
    method: [
      { en: "Add with mixing water after cement and aggregates are wet.", bn: "সিমেন্ট ও অ্যাগ্রিগেট ভেজার পর মিক্সিং ওয়াটারের সাথে যোগ করুন।" },
    ],
    safety: [{ en: "Store sealed, away from children, at ambient temperature.", bn: "শিশুদের নাগালের বাইরে সিল করে রাখুন।" }],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Polymerised liquid", bn: "পলিমারাইজড লিকুইড" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: PACK_SPEC },
    ],
  },
  {
    slug: "oxilar-damp-guard-400",
    sku: "OX-DG400",
    name: { en: "Oxilar Damp Guard-400", bn: "অক্সিলার ড্যাম্প গার্ড-৪০০" },
    category: "waterproofing",
    packs: LIQUID,
    image: "/media/oxilar-product-pail-closeup.jpg",
    short: {
      en: "Water-reducing and waterproofing liquid admixture — acid and salt resistance, higher strength, damp inactivation.",
      bn: "ওয়াটার-রিডিউসিং ও ওয়াটারপ্রুফিং লিকুইড — অ্যাসিড ও লবণ প্রতিরোধ, উচ্চ শক্তি।",
    },
    applications: [
      { en: "Roofs, basements, water tanks and external plaster", bn: "ছাদ, বেজমেন্ট, পানির ট্যাংক ও বাহ্যিক প্লাস্টার" },
    ],
    dosage: {
      en: "Typically 250–400 ml per 50 kg cement bag. Confirm with site trial and TDS.",
      bn: "সাধারণত প্রতি ৫০ কেজি সিমেন্ট ব্যাগে ২৫০–৪০০ মিলি।",
    },
    mlPerBag: 300,
    method: [{ en: "Dose into mixing water; mix thoroughly.", bn: "মিক্সিং ওয়াটারে ডোজ দিয়ে মিশান।" }],
    safety: [{ en: "Store sealed, away from children.", bn: "শিশুদের নাগালের বাইরে সিল করে রাখুন।" }],
    specs: [
      { label: { en: "Type", bn: "ধরন" }, value: { en: "Water reducing + waterproofing", bn: "ওয়াটার রিডিউসিং + ওয়াটারপ্রুফিং" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: PACK_SPEC },
    ],
  },
  {
    slug: "oxilar-pre-cast-premium",
    sku: "OX-PCP",
    name: { en: "Oxilar Pre Cast Premium", bn: "অক্সিলার প্রি কাস্ট প্রিমিয়াম" },
    category: "waterproofing",
    packs: LIQUID,
    image: "/media/oxilar-product-pails.jpg",
    short: {
      en: "Damp- and waterproof polymer admixture for precast and site concrete.",
      bn: "প্রিকাস্ট ও সাইট কংক্রিটের জন্য ড্যাম্প ও ওয়াটারপ্রুফ পলিমার অ্যাডমিক্সচার।",
    },
    applications: [
      { en: "Precast elements and water-retaining structures", bn: "প্রিকাস্ট এলিমেন্ট ও ওয়াটার-রিটেইনিং স্ট্রাকচার" },
    ],
    dosage: {
      en: "250–400 ml per 50 kg cement bag per TDS; trial mix recommended.",
      bn: "টিডিএস অনুযায়ী প্রতি ব্যাগে ২৫০–৪০০ মিলি।",
    },
    mlPerBag: 300,
    method: [{ en: "Add with gauging water and mix until uniform.", bn: "গেজিং ওয়াটারের সাথে যোগ করে মিশান।" }],
    safety: [{ en: "Store sealed, away from children.", bn: "শিশুদের নাগালের বাইরে সিল করে রাখুন।" }],
    specs: [
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Damp & waterproof", bn: "ড্যাম্প ও ওয়াটারপ্রুফ" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: PACK_SPEC },
    ],
  },
  {
    slug: "oxilar-solid-bond",
    sku: "OX-SB20",
    name: { en: "Oxilar Solid Bond", bn: "অক্সিলার সলিড বন্ড" },
    category: "admixture",
    packs: LIQUID,
    image: "/media/oxilar-product-pail-closeup.jpg",
    short: {
      en: "Water-reducing admixture in 1–200 L site packs — stronger bond and waterproof performance.",
      bn: "১–২০০ লিটার সাইট প্যাক ওয়াটার-রিডিউসিং অ্যাডমিক্সচার — শক্তিশালী বন্ধন ও ওয়াটারপ্রুফ পারফরম্যান্স।",
    },
    applications: [
      { en: "Structural pours and waterproof concrete mixes", bn: "স্ট্রাকচারাল পোর ও ওয়াটারপ্রুফ কংক্রিট মিক্স" },
    ],
    dosage: {
      en: "Per current TDS; trial mix recommended before large pours.",
      bn: "বর্তমান টিডিএস অনুযায়ী; বড় পোরের আগে ট্রায়াল মিক্স করুন।",
    },
    mlPerBag: 300,
    method: [{ en: "Dispense into mixing water.", bn: "মিক্সিং ওয়াটারে দিন।" }],
    safety: [{ en: "Store sealed and upright.", bn: "সিল করে সোজা রাখুন।" }],
    specs: [
      { label: { en: "Pack", bn: "প্যাক" }, value: PACK_SPEC },
      { label: { en: "Type", bn: "ধরন" }, value: { en: "Water reducing admixture", bn: "ওয়াটার রিডিউসিং অ্যাডমিক্সচার" } },
    ],
  },
  {
    slug: "oxilar-rapid-bland",
    sku: "OX-RB",
    name: { en: "Oxilar Rapid Bland", bn: "অক্সিলার র‍্যাপিড ব্ল্যান্ড" },
    category: "admixture",
    packs: ["1kg", "25kg"],
    image: "/media/stack.jpg",
    short: {
      en: "High-strength powder for fast set and strong bond to old concrete — leaks, joints and repairs.",
      bn: "উচ্চ শক্তির গুঁড়া — দ্রুত সেট ও পুরাতন কংক্রিটের সাথে শক্ত বন্ধন।",
    },
    applications: [
      { en: "Leak sealing, joint repairs and bonding to old concrete", bn: "লিকেজ সিলিং, জয়েন্ট রিপেয়ার ও পুরাতন কংক্রিট বন্ডিং" },
    ],
    dosage: {
      en: "Blend with cement per pack instructions and current TDS.",
      bn: "প্যাক নির্দেশনা ও টিডিএস অনুযায়ী সিমেন্টের সাথে মিশান।",
    },
    mlPerBag: 0,
    method: [{ en: "Dry-blend with cement, then add clean water.", bn: "সিমেন্টের সাথে শুকনো মিশিয়ে পানি যোগ করুন।" }],
    safety: [{ en: "Use a mask when opening bags.", bn: "ব্যাগ খোলার সময় মাস্ক ব্যবহার করুন।" }],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Powder", bn: "পাউডার" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: { en: "1 kg / 25 kg", bn: "১ কেজি / ২৫ কেজি" } },
    ],
  },
  {
    slug: "oxilar-befit-dust",
    sku: "OX-BD",
    name: { en: "Oxilar Befit Dust", bn: "অক্সিলার বেফিট ডাস্ট" },
    category: "dust",
    packs: LIQUID,
    image: "/media/oxilar-product-drums.jpg",
    short: {
      en: "Liquid dust suppressant for road bases and aggregates.",
      bn: "রাস্তার বেস ও অ্যাগ্রিগেটের জন্য লিকুইড ডাস্ট সাপ্রেসেন্ট।",
    },
    applications: [
      { en: "Road sub-base, haul roads and aggregate yards", bn: "রোড সাব-বেস, হল রোড ও অ্যাগ্রিগেট ইয়ার্ড" },
    ],
    dosage: { en: "Dilute and spray per TDS.", bn: "টিডিএস অনুযায়ী পাতলা করে স্প্রে করুন।" },
    mlPerBag: 0,
    method: [{ en: "Apply on prepared surface; allow to cure before traffic.", bn: "প্রস্তুত সারফেসে প্রয়োগ করুন; ট্রাফিকের আগে কিউর হতে দিন।" }],
    safety: [{ en: "Avoid eye contact. Store sealed.", bn: "চোখে লাগবেন না। সিল করে রাখুন।" }],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Liquid", bn: "লিকুইড" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: PACK_SPEC },
    ],
  },
  {
    slug: "oxilar-anti-dust",
    sku: "OX-AD",
    name: { en: "Oxilar Anti Dust", bn: "অক্সিলার অ্যান্টি ডাস্ট" },
    category: "dust",
    packs: ["1kg"],
    image: "/media/stack.jpg",
    short: {
      en: "Powder dust-control additive for concrete and mortar surfaces.",
      bn: "কংক্রিট ও মর্টার সারফেসের জন্য পাউডার ডাস্ট-কন্ট্রোল অ্যাডিটিভ।",
    },
    applications: [
      { en: "Industrial floors, yards and dust-prone concrete surfaces", bn: "ইন্ডাস্ট্রিয়াল ফ্লোর, ইয়ার্ড ও ধুলাপ্রবণ কংক্রিট" },
    ],
    dosage: { en: "1 kg packs — dose per TDS and surface area.", bn: "১ কেজি প্যাক — টিডিএস ও সারফেস এরিয়া অনুযায়ী।" },
    mlPerBag: 0,
    method: [{ en: "Follow pack instructions for dry or wet application.", bn: "শুকনো বা ভেজা প্রয়োগের নির্দেশনা অনুসরণ করুন।" }],
    safety: [{ en: "Use dust mask when handling powder.", bn: "গুঁড়া হ্যান্ডেল করার সময় মাস্ক ব্যবহার করুন।" }],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Powder", bn: "পাউডার" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: { en: "1 kg", bn: "১ কেজি" } },
    ],
  },
];

export const benefits: { title: Copy; body: Copy }[] = [
  {
    title: { en: "Independent manufacturer", bn: "স্বাধীন প্রস্তুতকারক" },
    body: { en: "Established 6 September 2019. Construction chemicals made and supplied in Bangladesh.", bn: "৬ সেপ্টেম্বর ২০১৯ থেকে। বাংলাদেশে তৈরি ও সরবরাহ।" },
  },
  {
    title: { en: "Dose and trial mix", bn: "ডোজ ও ট্রায়াল মিক্স" },
    body: { en: "Published dosage ranges with site trial-mix guidance for local cement brands.", bn: "স্থানীয় সিমেন্ট ব্র্যান্ডের জন্য ট্রায়াল মিক্স নির্দেশনাসহ ডোজ রেঞ্জ।" },
  },
  {
    title: { en: "Lab method references", bn: "ল্যাব মেথড রেফারেন্স" },
    body: { en: "Working sheets referenced to BUET, CUET and BCSIR practices on the Resources page.", bn: "রিসোর্স পেজে BUET, CUET ও BCSIR রেফারেন্সড ওয়ার্কিং শিট।" },
  },
];

export const sourcing: Copy = {
  en: "Raw materials are direct-imported from India, Malaysia and Taiwan.",
  bn: "কাঁচামাল ভারত, মালয়েশিয়া ও তাইওয়ান থেকে সরাসরি আমদানি করা হয়।",
};

export const strengthSeries: { label: Copy; value: number }[] = [
  { label: { en: "Control", bn: "কন্ট্রোল" }, value: 100 },
  { label: { en: "With Super-100", bn: "সুপার-১০০ সহ" }, value: 118 },
];

export const gallery: { src: string; alt: Copy }[] = [
  { src: "/media/sm-damp-guard-front.jpg", alt: { en: "Damp Guard pack", bn: "ড্যাম্প গার্ড প্যাক" } },
  { src: "/media/pail.jpg", alt: { en: "Oxilar pack", bn: "অক্সিলার প্যাক" } },
  { src: "/media/stack.jpg", alt: { en: "Site stack", bn: "সাইট স্ট্যাক" } },
];

export const processSteps: { step: string; title: Copy; body: Copy }[] = [
  { step: "01", title: { en: "Specify system", bn: "সিস্টেম নির্ধারণ" }, body: { en: "Match product to exposure and structure type.", bn: "এক্সপোজার ও স্ট্রাকচার অনুযায়ী পণ্য মিলান।" } },
  { step: "02", title: { en: "Trial mix", bn: "ট্রায়াল মিক্স" }, body: { en: "Confirm dose with site cement brand.", bn: "সাইটের সিমেন্ট ব্র্যান্ড দিয়ে ডোজ নিশ্চিত করুন।" } },
  { step: "03", title: { en: "Apply", bn: "প্রয়োগ" }, body: { en: "Follow TDS and method notes.", bn: "টিডিএস ও মেথড নোট অনুসরণ করুন।" } },
  { step: "04", title: { en: "Support", bn: "সাপোর্ট" }, body: { en: "Call or WhatsApp the technical desk.", bn: "টেকনিক্যাল ডেস্কে কল বা হোয়াটসঅ্যাপ করুন।" } },
];

export const stats: { value: string; label: Copy }[] = [
  { value: "2019", label: { en: "Established", bn: "প্রতিষ্ঠিত" } },
  { value: "7+", label: { en: "Core systems", bn: "কোর সিস্টেম" } },
  { value: "64", label: { en: "Districts covered", bn: "জেলা কভারেজ" } },
];

export const companyProfile: {
  founded: Copy;
  focus: Copy;
  office: Copy;
  factory: Copy;
} = {
  founded: { en: "6 September 2019", bn: "৬ সেপ্টেম্বর ২০১৯" },
  focus: {
    en: "Independent manufacturer of construction chemicals, waterproofing systems and industrial raw materials.",
    bn: "কনস্ট্রাকশন কেমিক্যাল, ওয়াটারপ্রুফিং সিস্টেম ও ইন্ডাস্ট্রিয়াল কাঁচামালের স্বাধীন প্রস্তুতকারক।",
  },
  office: { en: "31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka", bn: "৩১/১ বাবার রোড, মোহাম্মদপুর, ধানমন্ডি, ঢাকা" },
  factory: { en: "Kalampur, Dhamrai, Dhaka", bn: "কালামপুর, ধামরাই, ঢাকা" },
};

export const faqs: { q: Copy; a: Copy }[] = [
  {
    q: { en: "What pack sizes are available?", bn: "কোন প্যাক সাইজ পাওয়া যায়?" },
    a: { en: "Liquid systems: 1, 5, 10, 20 and 200 Liter. Powder: 1 kg and 25 kg where listed.", bn: "লিকুইড: ১, ৫, ১০, ২০ ও ২০০ লিটার। পাউডার: ১ কেজি ও ২৫ কেজি।" },
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
    a: { en: "See Careers. Email CV to oxilarbangladesh@gmail.com or call 01960198313.", bn: "ক্যারিয়ার পেজ দেখুন। সিভি oxilarbangladesh@gmail.com-এ পাঠান অথবা ০১৯৬০১৯৮৩১৩-এ কল করুন।" },
  },
  {
    q: { en: "Where is the factory?", bn: "কারখানা কোথায়?" },
    a: { en: "Kalampur, Dhamrai, Dhaka. Office: Mohammadpur, Dhaka.", bn: "কালামপুর, ধামরাই, ঢাকা। অফিস: মোহাম্মদপুর, ঢাকা।" },
  },
  {
    q: { en: "Are lab certificates provided?", bn: "ল্যাব সনদ দেওয়া হয় কি?" },
    a: { en: "Resources page has working method sheets referenced to BUET, CUET and BCSIR practices — not signed certificates.", bn: "রিসোর্স পেজে BUET, CUET, BCSIR মেথড শিট আছে — স্বাক্ষরিত সনদ নয়।" },
  },
  {
    q: { en: "How do I request RFQ?", bn: "আরএফকিউ কীভাবে চাইব?" },
    a: { en: "Use Add to RFQ on product pages, or Contact / WhatsApp.", bn: "পণ্য পেজে Add to RFQ, অথবা কন্টাক্ট / হোয়াটসঅ্যাপ।" },
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
