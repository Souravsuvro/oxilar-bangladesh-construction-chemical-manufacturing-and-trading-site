export type Lang = "en" | "bn";
export type Copy = { en: string; bn: string };

export type Pack = "1L" | "4L" | "10L" | "20L" | "drum" | "1kg" | "25kg";

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
  "1L": { en: "1L pail", bn: "১ লিটার পেইল" },
  "4L": { en: "4L pail", bn: "৪ লিটার পেইল" },
  "10L": { en: "10L pail", bn: "১০ লিটার পেইল" },
  "20L": { en: "20L pail", bn: "২০ লিটার পেইল" },
  drum: { en: "Heavy-duty drum", bn: "হেভি-ডিউটি ড্রাম" },
  "1kg": { en: "1 kg pack", bn: "১ কেজি প্যাক" },
  "25kg": { en: "25 kg bag", bn: "২৫ কেজি ব্যাগ" },
};

export const products: Product[] = [
  {
    slug: "oxilar-super-100",
    sku: "OX-S100",
    name: { en: "Oxilar Super-100", bn: "অক্সিলার সুপার-১০০" },
    category: "admixture",
    packs: ["1L", "4L", "10L", "20L"],
    image: "/media/stack.jpg",
    short: {
      en: "Multipurpose polymerised concrete admixture. Protects against acid rain, improves workability and strength, reduces heat of hydration, and helps keep damp and salts inactive.",
      bn: "মাল্টিপারপাস পলিমারাইজড কংক্রিট অ্যাডমিক্সচার। অ্যাসিড বৃষ্টি থেকে রক্ষা করে, ওয়ার্ক্যাবিলিটি ও শক্তি বাড়ায়।",
    },
    applications: [
      { en: "Column and roof casting, overhead tanks", bn: "কলাম ও ছাদ ঢালাই, ওভারহেড ট্যাংক" },
      { en: "Ready-mix plants", bn: "রেডি মিক্স ইয়ার্ড" },
    ],
    dosage: {
      en: "250–300 ml per 50 kg cement bag (normal). 300–400 ml for acid exposure. Confirm with trial mix and TDS.",
      bn: "সাধারণ কাজে প্রতি ব্যাগে ২৫০–৩০০ মিলি। অ্যাসিড এক্সপোজারে ৩০০–৪০০ মিলি।",
    },
    mlPerBag: 275,
    method: [
      { en: "Add with mixing water after cement and aggregates are wet.", bn: "সিমেন্ট ও অ্যাগ্রিগেট ভেজার পর মিক্সিং ওয়াটারের সাথে যোগ করুন।" },
    ],
    safety: [{ en: "Store sealed, cool and dry. Keep out of reach of children.", bn: "সিল করে ঠান্ডা শুষ্ক স্থানে রাখুন।" }],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Polymerised liquid", bn: "পলিমারাইজড লিকুইড" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: { en: "1 / 4 / 10 / 20 L", bn: "১ / ৪ / ১০ / ২০ লিটার" } },
    ],
  },
  {
    slug: "oxilar-damp-guard-400",
    sku: "OX-DG400",
    name: { en: "Oxilar Damp Guard-400", bn: "অক্সিলার ড্যাম্প গার্ড-৪০০" },
    category: "waterproofing",
    packs: ["1L", "4L", "10L", "20L"],
    image: "/media/pail.jpg",
    short: {
      en: "Water-reducing and waterproofing liquid admixture. Resists damp and salt attack for roofs, basements, tanks and plaster.",
      bn: "ওয়াটার-রিডিউসিং ও ওয়াটারপ্রুফিং লিকুইড। ছাদ, বেজমেন্ট, ট্যাংক ও প্লাস্টারে ড্যাম্প ও লবণ প্রতিরোধ করে।",
    },
    applications: [
      { en: "Roofs, basements, water tanks", bn: "ছাদ, বেজমেন্ট, পানির ট্যাংক" },
      { en: "External plaster", bn: "বাহ্যিক প্লাস্টার" },
    ],
    dosage: {
      en: "Typically 250–400 ml per 50 kg cement. Confirm with site trial and TDS.",
      bn: "সাধারণত প্রতি ৫০ কেজি সিমেন্টে ২৫০–৪০০ মিলি।",
    },
    mlPerBag: 300,
    method: [{ en: "Dose into mixing water.", bn: "মিক্সিং ওয়াটারে ডোজ দিন।" }],
    safety: [{ en: "Store sealed away from frost and direct sun.", bn: "হিম ও রোদ থেকে দূরে সিল করে রাখুন।" }],
    specs: [{ label: { en: "Type", bn: "ধরন" }, value: { en: "Water reducing + waterproofing", bn: "ওয়াটার রিডিউসিং + ওয়াটারপ্রুফিং" } }],
  },
  {
    slug: "oxilar-pre-cast-premium",
    sku: "OX-PCP",
    name: { en: "Oxilar Pre Cast Premium", bn: "অক্সিলার প্রি কাস্ট প্রিমিয়াম" },
    category: "waterproofing",
    packs: ["1L", "4L", "10L", "20L"],
    image: "/media/stack.jpg",
    short: {
      en: "Damp- and waterproof polymer admixture for precast and site concrete with improved density and durability.",
      bn: "প্রিকাস্ট ও সাইট কংক্রিটের জন্য ড্যাম্প ও ওয়াটারপ্রুফ পলিমার অ্যাডমিক্সচার।",
    },
    applications: [
      { en: "Precast elements", bn: "প্রিকাস্ট এলিমেন্ট" },
      { en: "Water-retaining structures", bn: "ওয়াটার-রিটেইনিং স্ট্রাকচার" },
    ],
    dosage: { en: "250–400 ml per 50 kg cement bag per TDS.", bn: "টিডিএস অনুযায়ী প্রতি ব্যাগে ২৫০–৪০০ মিলি।" },
    mlPerBag: 300,
    method: [{ en: "Add with gauging water.", bn: "গেজিং ওয়াটারের সাথে যোগ করুন।" }],
    safety: [{ en: "Use gloves. Store cool and sealed.", bn: "গ্লাভস ব্যবহার করুন।" }],
    specs: [{ label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Damp & waterproof", bn: "ড্যাম্প ও ওয়াটারপ্রুফ" } }],
  },
  {
    slug: "oxilar-solid-bond",
    sku: "OX-SB20",
    name: { en: "Oxilar Solid Bond", bn: "অক্সিলার সলিড বন্ড" },
    category: "admixture",
    packs: ["20L"],
    image: "/media/pail.jpg",
    short: {
      en: "Water-reducing admixture in a 20 L site pack for construction mix — better bond and waterproof performance.",
      bn: "২০ লিটার সাইট প্যাক ওয়াটার-রিডিউসিং অ্যাডমিক্সচার — বন্ধন ও ওয়াটারপ্রুফ পারফরম্যান্স।",
    },
    applications: [
      { en: "Structural pours", bn: "স্ট্রাকচারাল পোর" },
      { en: "Waterproof concrete mixes", bn: "ওয়াটারপ্রুফ কংক্রিট মিক্স" },
    ],
    dosage: { en: "Per current TDS; trial mix recommended.", bn: "বর্তমান টিডিএস অনুযায়ী; ট্রায়াল মিক্স করুন।" },
    mlPerBag: 300,
    method: [{ en: "Dispense into mixing water.", bn: "মিক্সিং ওয়াটারে দিন।" }],
    safety: [{ en: "Store sealed.", bn: "সিল করে রাখুন।" }],
    specs: [{ label: { en: "Pack", bn: "প্যাক" }, value: { en: "20 litre", bn: "২০ লিটার" } }],
  },
  {
    slug: "oxilar-rapid-bland",
    sku: "OX-RB",
    name: { en: "Oxilar Rapid Bland", bn: "অক্সিলার র‍্যাপিড ব্ল্যান্ড" },
    category: "admixture",
    packs: ["1kg", "25kg"],
    image: "/media/stack.jpg",
    short: {
      en: "High-strength powder blended with cement for fast set and strong bond to old concrete — leaks, joints and repairs.",
      bn: "উচ্চ শক্তির গুঁড়া — দ্রুত সেট ও পুরাতন কংক্রিটের সাথে শক্ত বন্ধন।",
    },
    applications: [
      { en: "Leak sealing and joint repairs", bn: "লিকেজ ও জয়েন্ট রিপেয়ার" },
    ],
    dosage: { en: "Blend with cement per pack / TDS.", bn: "প্যাক/টিডিএস অনুযায়ী সিমেন্টের সাথে মিশান।" },
    mlPerBag: 0,
    method: [{ en: "Dry-blend with cement, then add clean water.", bn: "সিমেন্টের সাথে শুকনো মিশিয়ে পানি যোগ করুন।" }],
    safety: [{ en: "Use a mask when opening bags.", bn: "ব্যাগ খোলার সময় মাস্ক ব্যবহার করুন।" }],
    specs: [{ label: { en: "Form", bn: "ফর্ম" }, value: { en: "Powder", bn: "পাউডার" } }],
  },
  {
    slug: "oxilar-befit-dust",
    sku: "OX-BD",
    name: { en: "Oxilar Befit Dust", bn: "অক্সিলার বেফিট ডাস্ট" },
    category: "dust",
    packs: ["1L", "4L", "10L", "20L"],
    image: "/media/drum.jpg",
    short: {
      en: "Liquid dust suppressant for road bases and aggregates — binds fine dust for cleaner yards and haul roads.",
      bn: "রাস্তার বেস ও অ্যাগ্রিগেটের জন্য লিকুইড ডাস্ট সাপ্রেসেন্ট।",
    },
    applications: [{ en: "Road sub-base and haul roads", bn: "রোড সাব-বেস ও হল রোড" }],
    dosage: { en: "Dilute and spray per TDS.", bn: "টিডিএস অনুযায়ী পাতলা করে স্প্রে করুন।" },
    mlPerBag: 0,
    method: [{ en: "Apply on prepared surface; cure before heavy traffic.", bn: "প্রস্তুত সারফেসে প্রয়োগ করুন।" }],
    safety: [{ en: "Avoid eye contact. Store sealed.", bn: "চোখে লাগবেন না। সিল করে রাখুন।" }],
    specs: [{ label: { en: "Form", bn: "ফর্ম" }, value: { en: "Liquid", bn: "লিকুইড" } }],
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
    applications: [{ en: "Industrial floors and yards", bn: "ইন্ডাস্ট্রিয়াল ফ্লোর ও ইয়ার্ড" }],
    dosage: { en: "1 kg packs — dose per TDS.", bn: "১ কেজি প্যাক — টিডিএস অনুযায়ী।" },
    mlPerBag: 0,
    method: [{ en: "Follow pack instructions.", bn: "প্যাক নির্দেশনা অনুসরণ করুন।" }],
    safety: [{ en: "Avoid inhaling dust.", bn: "ধুলা শ্বাসে নেবেন না।" }],
    specs: [{ label: { en: "Form", bn: "ফর্ম" }, value: { en: "Powder, 1 kg", bn: "পাউডার, ১ কেজি" } }],
  },
];

export const benefits: { title: Copy; body: Copy }[] = [
  { title: { en: "Monsoon ready", bn: "বর্ষার জন্য প্রস্তুত" }, body: { en: "Integral systems formulated for Bangladesh rainfall and humidity.", bn: "বাংলাদেশের বৃষ্টি ও আর্দ্রতার জন্য ইন্টিগ্রাল সিস্টেম।" } },
  { title: { en: "Lab referenced", bn: "ল্যাব রেফারেন্সড" }, body: { en: "Programmes referenced against BUET, CUET and BCSIR methods.", bn: "BUET, CUET ও BCSIR পদ্ধতির রেফারেন্স।" } },
  { title: { en: "Independent manufacturer", bn: "স্বাধীন প্রস্তুতকারক" }, body: { en: "Blended in Dhamrai. Direct importer of selected raw materials.", bn: "ধামরাইতে ব্লেন্ড। নির্বাচিত কাঁচামাল সরাসরি আমদানি।" } },
];

export const sourcing: { code: string; country: Copy; items: Copy }[] = [
  { code: "IN", country: { en: "India", bn: "ভারত" }, items: { en: "Admixture bases and polymers", bn: "অ্যাডমিক্সচার বেস ও পলিমার" } },
  { code: "MY", country: { en: "Malaysia", bn: "মালয়েশিয়া" }, items: { en: "Specialty chemicals", bn: "স্পেশালিটি কেমিক্যাল" } },
  { code: "TW", country: { en: "Taiwan", bn: "তাইওয়ান" }, items: { en: "Selected intermediates", bn: "নির্বাচিত ইন্টারমিডিয়েট" } },
];

export const strengthSeries = [
  { day: "3d", control: 12, dosed: 16 },
  { day: "7d", control: 22, dosed: 28 },
  { day: "28d", control: 32, dosed: 38 },
];

export const gallery: { src: string; caption: Copy }[] = [
  { src: "/media/pail.jpg", caption: { en: "Damp Guard site pails", bn: "ড্যাম্প গার্ড সাইট পেইল" } },
  { src: "/media/stack.jpg", caption: { en: "Stacked packs ready for delivery", bn: "ডেলিভারির জন্য স্ট্যাকড প্যাক" } },
  { src: "/media/drum.jpg", caption: { en: "Drum supply for plants", bn: "প্ল্যান্টের জন্য ড্রাম সাপ্লাই" } },
  { src: "/media/logo.jpg", caption: { en: "Oxilar Bangladesh", bn: "অক্সিলার বাংলাদেশ" } },
];

export const processSteps: { step: string; title: Copy; body: Copy }[] = [
  { step: "01", title: { en: "Specify", bn: "স্পেসিফাই" }, body: { en: "Match product and dose to the exposure.", bn: "এক্সপোজার অনুযায়ী পণ্য ও ডোজ।" } },
  { step: "02", title: { en: "Trial", bn: "ট্রায়াল" }, body: { en: "Confirm with a site trial mix and current TDS.", bn: "সাইট ট্রায়াল ও টিডিএস দিয়ে নিশ্চিত করুন।" } },
  { step: "03", title: { en: "Supply", bn: "সাপ্লাই" }, body: { en: "Pails or drums to site or ready-mix plant.", bn: "সাইট বা রেডি-মিক্স প্ল্যান্টে পেইল বা ড্রাম।" } },
  { step: "04", title: { en: "Support", bn: "সাপোর্ট" }, body: { en: "Hotline and WhatsApp for engineers and dealers.", bn: "ইঞ্জিনিয়ার ও ডিলারদের জন্য হটলাইন ও হোয়াটসঅ্যাপ।" } },
];

export const stats: { value: string; label: Copy }[] = [
  { value: "2019", label: { en: "Established", bn: "প্রতিষ্ঠা" } },
  { value: "7+", label: { en: "Core products", bn: "কোর পণ্য" } },
  { value: "6", label: { en: "Trade hubs", bn: "ট্রেড হাব" } },
  { value: "3", label: { en: "Lab references", bn: "ল্যাব রেফারেন্স" } },
];

export const companyProfile = {
  established: "6 September 2019",
  about: {
    en: "Oxilar Bangladesh is an independent manufacturer of high-performance construction chemicals. Established on 6 September 2019, we serve civil engineers, consultants and project developers nationwide from our Kalampur, Dhamrai plant and Mohammadpur office.",
    bn: "অক্সিলার বাংলাদেশ স্বাধীন কনস্ট্রাকশন কেমিক্যাল প্রস্তুতকারক। ৬ সেপ্টেম্বর ২০১৯-এ প্রতিষ্ঠিত। ধামরাই প্ল্যান্ট ও মোহাম্মদপুর অফিস থেকে সারা দেশে সেবা।",
  },
  vision: {
    en: "To be a leading contributor to Bangladesh’s industrial and infrastructural progress with world-class construction chemical solutions.",
    bn: "বিশ্বমানের কনস্ট্রাকশন কেমিক্যাল সমাধান দিয়ে বাংলাদেশের শিল্প ও অবকাঠামো অগ্রগতিতে নেতৃত্ব দেওয়া।",
  },
  mission: {
    en: "Empower the construction industry with innovative, high-quality and sustainable chemical solutions while creating value for customers and partners.",
    bn: "উদ্ভাবনী, উচ্চমানের ও টেকসই কেমিক্যাল সমাধান দিয়ে নির্মাণ শিল্পকে শক্তিশালী করা।",
  },
};

export const faqs: { q: Copy; a: Copy }[] = [
  {
    q: { en: "How much Oxilar Super-100 per bag of cement?", bn: "প্রতি ব্যাগ সিমেন্টে কত সুপার-১০০?" },
    a: { en: "Guide dose 250–300 ml per 50 kg bag for normal work; 300–400 ml for aggressive exposure. Always confirm with a trial mix and the current TDS.", bn: "সাধারণ কাজে ২৫০–৩০০ মিলি; অ্যাগ্রেসিভ এক্সপোজারে ৩০০–৪০০ মিলি। ট্রায়াল ও টিডিএস দিয়ে নিশ্চিত করুন।" },
  },
  {
    q: { en: "Is Oxilar a sister concern of another group?", bn: "অক্সিলার কি অন্য গ্রুপের সিস্টার কনসার্ন?" },
    a: { en: "No. Oxilar Bangladesh is an independent manufacturer and global direct importer of construction chemicals.", bn: "না। অক্সিলার বাংলাদেশ স্বাধীন প্রস্তুতকারক ও গ্লোবাল ডাইরেক্ট ইমপোর্টার।" },
  },
  {
    q: { en: "Where is the factory?", bn: "কারখানা কোথায়?" },
    a: { en: "Kalampur, Dhamrai, Dhaka. Office: 31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka. Phone +88 0196-0198313.", bn: "কালামপুর, ধামরাই, ঢাকা। অফিস: ৩১/১ বাবর রোড, মোহাম্মদপুর। ফোন +৮৮ ০১৯৬-০১৯৮৩১৩।" },
  },
  {
    q: { en: "Do you supply drums to ready-mix plants?", bn: "রেডি-মিক্স প্ল্যান্টে ড্রাম সাপ্লাই করেন?" },
    a: { en: "Yes. Project and plant supply is available nationwide — call or send an RFQ.", bn: "হ্যাঁ। সারা দেশে প্রকল্প ও প্ল্যান্ট সাপ্লাই — কল বা আরএফকিউ পাঠান।" },
  },
];

export const labs: { id: string; name: Copy; href: string }[] = [
  { id: "buet", name: { en: "BUET referenced methods", bn: "BUET রেফারেন্সড পদ্ধতি" }, href: "/documents/lab-buet.html" },
  { id: "cuet", name: { en: "CUET referenced methods", bn: "CUET রেফারেন্সড পদ্ধতি" }, href: "/documents/lab-cuet.html" },
  { id: "bcsir", name: { en: "BCSIR referenced methods", bn: "BCSIR রেফারেন্সড পদ্ধতি" }, href: "/documents/lab-bcsir.html" },
];

export const sheets: { id: string; title: Copy; href: string }[] = [
  { id: "tds-s100", title: { en: "TDS Super-100", bn: "টিডিএস সুপার-১০০" }, href: "/documents/tds-super-100.html" },
  { id: "tds-dg", title: { en: "TDS Damp Guard-400", bn: "টিডিএস ড্যাম্প গার্ড-৪০০" }, href: "/documents/tds-super-100.html" },
];
