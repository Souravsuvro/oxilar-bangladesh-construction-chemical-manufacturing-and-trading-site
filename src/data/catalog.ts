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

/**
 * Product lineup aligned to Oxilar brochure (Super-100, Damp Guard-400, Pre Cast Premium,
 * Solid Bond, Rapid Bland, Befit Dust, Anti Dust). Images use public/media paths.
 * Prefer dedicated pack shots when available; fall back to stack/pail/drum.
 */
export const products: Product[] = [
  {
    slug: "oxilar-super-100",
    sku: "OX-S100",
    name: { en: "Oxilar Super-100", bn: "অক্সিলার সুপার-১০০" },
    category: "admixture",
    packs: ["1L", "4L", "10L", "20L"],
    image: "/media/stack.jpg",
    short: {
      en: "Multipurpose polymerised concrete admixture. Protects against acid rain, reduces heat of hydration during casting, improves workability and strength, and helps keep damp and salts inactive.",
      bn: "মাল্টিপারপাস পলিমারাইজড কংক্রিট অ্যাডমিক্সচার। অ্যাসিড বৃষ্টি থেকে রক্ষা করে, ঢালাইয়ের সময় তাপমাত্রা নিয়ন্ত্রণ করে, ওয়ার্ক্যাবিলিটি ও শক্তি বাড়ায় এবং লবণাক্ততা ও ড্যাম্প নিষ্ক্রিয় রাখতে সাহায্য করে।",
    },
    applications: [
      { en: "Column and roof casting, overhead water tanks", bn: "কলাম ঢালাই, ছাদ ঢালাই, ওভারহেড পানির ট্যাংক" },
      { en: "Ready-mix yards and structural pours", bn: "রেডি মিক্স ইয়ার্ড ও স্ট্রাকচারাল পোর" },
    ],
    dosage: {
      en: "Piling, basement, raft, column, slab, water tank, shuttering yards: 250–300 ml per 50 kg cement bag. Acid / aggressive exposure: 300–400 ml per bag. Confirm with trial mix and current TDS.",
      bn: "পাইলিং, বেজমেন্ট, র‍্যাফট, কলাম, স্ল্যাব, ওয়াটার ট্যাংক, শাটারিং ইয়ার্ড: প্রতি ৫০ কেজি সিমেন্ট ব্যাগে ২৫০–৩০০ মিলি। অ্যাসিড/অ্যাগ্রেসিভ: ৩০০–৪০০ মিলি। ট্রায়াল মিক্স ও টিডিএস দিয়ে নিশ্চিত করুন।",
    },
    mlPerBag: 275,
    method: [
      { en: "Add with mixing water after cement and aggregates are wet.", bn: "সিমেন্ট ও অ্যাগ্রিগেট ভেজার পর মিক্সিং ওয়াটারের সাথে যোগ করুন।" },
      { en: "Do not overdose; follow trial mix for site cement brand.", bn: "অতিরিক্ত ডোজ দেবেন না; সাইটের সিমেন্ট ব্র্যান্ড অনুযায়ী ট্রায়াল করুন।" },
    ],
    safety: [
      {
        en: "Store sealed, away from children, at ambient temperature on a level surface.",
        bn: "শিশুদের নাগালের বাইরে, স্বাভাবিক তাপমাত্রায় ও সমতল স্থানে সিল করে রাখুন।",
      },
    ],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Polymerised liquid", bn: "পলিমারাইজড লিকুইড" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: { en: "1 / 4 / 10 / 20 L", bn: "১ / ৪ / ১০ / ২০ লিটার" } },
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Multipurpose admixture", bn: "মাল্টিপারপাস অ্যাডমিক্সচার" } },
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
      en: "Water-reducing and waterproofing liquid admixture for every type of casting — acid and salt resistance, freeze–thaw durability, higher strength and permanent inactivation of damp and salts.",
      bn: "ওয়াটার-রিডিউসিং ও ওয়াটারপ্রুফিং লিকুইড অ্যাডমিক্সচার। অ্যাসিড ও লবণ প্রতিরোধ, ফ্রিজ-থ, উচ্চ শক্তি এবং ড্যাম্প ও লবণ স্থায়ীভাবে নিষ্ক্রিয় রাখে।",
    },
    applications: [
      { en: "Roofs, basements, water tanks and external plaster", bn: "ছাদ, বেজমেন্ট, পানির ট্যাংক ও বাহ্যিক প্লাস্টার" },
      { en: "All structural casting where damp and salt attack is a risk", bn: "ড্যাম্প ও লবণ ঝুঁকিযুক্ত সব স্ট্রাকচারাল ঢালাই" },
    ],
    dosage: {
      en: "Typically 250–400 ml per 50 kg cement bag. Confirm with site trial and current TDS.",
      bn: "সাধারণত প্রতি ৫০ কেজি সিমেন্ট ব্যাগে ২৫০–৪০০ মিলি। সাইট ট্রায়াল ও টিডিএস দিয়ে নিশ্চিত করুন।",
    },
    mlPerBag: 300,
    method: [{ en: "Dose into mixing water; mix thoroughly.", bn: "মিক্সিং ওয়াটারে ডোজ দিয়ে ভালোভাবে মিশান।" }],
    safety: [
      {
        en: "Store sealed, away from children, at ambient temperature on a level surface.",
        bn: "শিশুদের নাগালের বাইরে, স্বাভাবিক তাপমাত্রায় সমতল স্থানে সিল করে রাখুন।",
      },
    ],
    specs: [
      {
        label: { en: "Type", bn: "ধরন" },
        value: { en: "Water reducing + waterproofing", bn: "ওয়াটার রিডিউসিং + ওয়াটারপ্রুফিং" },
      },
      { label: { en: "Packs", bn: "প্যাক" }, value: { en: "1 / 4 / 10 / 20 L", bn: "১ / ৪ / ১০ / ২০ লিটার" } },
    ],
  },
  {
    slug: "oxilar-pre-cast-premium",
    sku: "OX-PCP",
    name: { en: "Oxilar Pre Cast Premium", bn: "অক্সিলার প্রি কাস্ট প্রিমিয়াম" },
    category: "waterproofing",
    packs: ["1L", "4L", "10L", "20L"],
    image: "/media/stack.jpg",
    short: {
      en: "Damp- and waterproof polymer admixture for precast and site concrete — denser concrete, higher durability, protection against leakage, salinity and harmful substances.",
      bn: "প্রিকাস্ট ও সাইট কংক্রিটের জন্য ড্যাম্প ও ওয়াটারপ্রুফ পলিমার অ্যাডমিক্সচার — ঘন কংক্রিট, উচ্চ স্থায়িত্ব, লিকেজ ও লবণাক্ততা প্রতিরোধ।",
    },
    applications: [
      { en: "Precast elements and water-retaining structures", bn: "প্রিকাস্ট এলিমেন্ট ও ওয়াটার-রিটেইনিং স্ট্রাকচার" },
      { en: "Piling, basement concrete, swimming pools, casting bridge etc.", bn: "পাইলিং, বেজমেন্ট, সুইমিং পুল, ব্রিজ ঢালাই ইত্যাদি" },
    ],
    dosage: {
      en: "250–400 ml per 50 kg cement bag per TDS; trial mix recommended.",
      bn: "টিডিএস অনুযায়ী প্রতি ব্যাগে ২৫০–৪০০ মিলি; ট্রায়াল মিক্স করুন।",
    },
    mlPerBag: 300,
    method: [{ en: "Add with gauging water and mix until uniform.", bn: "গেজিং ওয়াটারের সাথে যোগ করে সমান না হওয়া পর্যন্ত মিশান।" }],
    safety: [
      {
        en: "Store sealed, away from children, at ambient temperature.",
        bn: "শিশুদের নাগালের বাইরে স্বাভাবিক তাপমাত্রায় সিল করে রাখুন।",
      },
    ],
    specs: [
      { label: { en: "Focus", bn: "ফোকাস" }, value: { en: "Damp & waterproof", bn: "ড্যাম্প ও ওয়াটারপ্রুফ" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: { en: "1 / 4 / 10 / 20 L", bn: "১ / ৪ / ১০ / ২০ লিটার" } },
    ],
  },
  {
    slug: "oxilar-solid-bond",
    sku: "OX-SB20",
    name: { en: "Oxilar Solid Bond", bn: "অক্সিলার সলিড বন্ড" },
    category: "admixture",
    packs: ["20L"],
    image: "/media/pail.jpg",
    short: {
      en: "Water-reducing admixture in a 20 L site pack for construction mix — stronger bond, waterproof performance and QC-passed quality for structural pours.",
      bn: "২০ লিটার সাইট প্যাক ওয়াটার-রিডিউসিং অ্যাডমিক্সচার — শক্তিশালী বন্ধন, ওয়াটারপ্রুফ পারফরম্যান্স ও QC-পাসড কোয়ালিটি।",
    },
    applications: [
      { en: "Structural pours and waterproof concrete mixes", bn: "স্ট্রাকচারাল পোর ও ওয়াটারপ্রুফ কংক্রিট মিক্স" },
      { en: "Site and plant batching", bn: "সাইট ও প্ল্যান্ট ব্যাচিং" },
    ],
    dosage: {
      en: "Per current TDS; trial mix recommended before large pours.",
      bn: "বর্তমান টিডিএস অনুযায়ী; বড় পোরের আগে ট্রায়াল মিক্স করুন।",
    },
    mlPerBag: 300,
    method: [{ en: "Dispense into mixing water.", bn: "মিক্সিং ওয়াটারে দিন।" }],
    safety: [{ en: "Store sealed and upright.", bn: "সিল করে সোজা রাখুন।" }],
    specs: [
      { label: { en: "Pack", bn: "প্যাক" }, value: { en: "20 litre", bn: "২০ লিটার" } },
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
      en: "High-strength powder blended with cement for fast set and strong bond to old concrete — leaks, joints, anchors and structural repairs.",
      bn: "উচ্চ শক্তির গুঁড়া — সিমেন্টের সাথে মিশিয়ে দ্রুত সেট ও পুরাতন কংক্রিটের সাথে শক্ত বন্ধন; লিকেজ, জয়েন্ট ও রিপেয়ার।",
    },
    applications: [
      { en: "Leak sealing, joint repairs and bonding to old concrete", bn: "লিকেজ সিলিং, জয়েন্ট রিপেয়ার ও পুরাতন কংক্রিট বন্ডিং" },
    ],
    dosage: {
      en: "Blend with cement per pack instructions and current TDS.",
      bn: "প্যাক নির্দেশনা ও টিডিএস অনুযায়ী সিমেন্টের সাথে মিশান।",
    },
    mlPerBag: 0,
    method: [
      { en: "Dry-blend with cement, then add clean water to working consistency.", bn: "সিমেন্টের সাথে শুকনো মিশিয়ে পরিষ্কার পানি যোগ করুন।" },
    ],
    safety: [
      {
        en: "Use a mask when opening bags. Store away from children at ambient temperature.",
        bn: "ব্যাগ খোলার সময় মাস্ক ব্যবহার করুন। শিশুদের নাগালের বাইরে রাখুন।",
      },
    ],
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
    packs: ["1L", "4L", "10L", "20L"],
    image: "/media/drum.jpg",
    short: {
      en: "Liquid dust suppressant for road bases and aggregates — binds fine dust for cleaner yards and longer-lasting haul roads.",
      bn: "রাস্তার বেস ও অ্যাগ্রিগেটের জন্য লিকুইড ডাস্ট সাপ্রেসেন্ট — সূক্ষ্ম ধুলা বেঁধে পরিষ্কার ইয়ার্ড ও দীর্ঘস্থায়ী হল রোড।",
    },
    applications: [
      { en: "Road sub-base, haul roads and aggregate yards", bn: "রোড সাব-বেস, হল রোড ও অ্যাগ্রিগেট ইয়ার্ড" },
    ],
    dosage: { en: "Dilute and spray per TDS.", bn: "টিডিএস অনুযায়ী পাতলা করে স্প্রে করুন।" },
    mlPerBag: 0,
    method: [
      { en: "Apply on prepared surface; allow to cure before heavy traffic.", bn: "প্রস্তুত সারফেসে প্রয়োগ করুন; ভারী ট্রাফিকের আগে কিউর হতে দিন।" },
    ],
    safety: [
      {
        en: "Avoid eye contact. Store sealed, away from children, at ambient temperature.",
        bn: "চোখে লাগবেন না। শিশুদের নাগালের বাইরে সিল করে রাখুন।",
      },
    ],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Liquid", bn: "লিকুইড" } },
      { label: { en: "Packs", bn: "প্যাক" }, value: { en: "1 / 4 / 10 / 20 L", bn: "১ / ৪ / ১০ / ২০ লিটার" } },
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
      en: "Powder dust-control additive for concrete and mortar surfaces — reduces dusting and helps protect floors from acid rain and weathering.",
      bn: "কংক্রিট ও মর্টার সারফেসের জন্য পাউডার ডাস্ট-কন্ট্রোল অ্যাডিটিভ — ধুলা কমায় এবং অ্যাসিড বৃষ্টি থেকে ফ্লোর রক্ষা করে।",
    },
    applications: [
      { en: "Industrial floors, yards and dust-prone concrete surfaces", bn: "ইন্ডাস্ট্রিয়াল ফ্লোর, ইয়ার্ড ও ধুলাপ্রবণ কংক্রিট সারফেস" },
    ],
    dosage: { en: "1 kg packs — dose per TDS and surface area.", bn: "১ কেজি প্যাক — টিডিএস ও সারফেস এরিয়া অনুযায়ী।" },
    mlPerBag: 0,
    method: [{ en: "Follow pack instructions for dry or wet application.", bn: "শুকনো বা ভেজা প্রয়োগের জন্য প্যাক নির্দেশনা অনুসরণ করুন।" }],
    safety: [
      {
        en: "Avoid inhaling dust. Store sealed away from children.",
        bn: "ধুলা শ্বাসে নেবেন না। শিশুদের নাগালের বাইরে সিল করে রাখুন।",
      },
    ],
    specs: [
      { label: { en: "Form", bn: "ফর্ম" }, value: { en: "Powder, 1 kg", bn: "পাউডার, ১ কেজি" } },
    ],
  },
];

/** Marketing + brochure benefit pillars (banner: water resistance, faster set, inactive damp/salts). */
export const benefits: { title: Copy; body: Copy }[] = [
  {
    title: { en: "Maximum water resistance", bn: "সর্বোচ্চ পানি প্রতিরোধ" },
    body: {
      en: "Integral systems that raise density and keep damp and salts permanently inactive in Bangladesh monsoon conditions.",
      bn: "ঘনত্ব বাড়িয়ে বাংলাদেশের বর্ষায় ড্যাম্প ও লবণ স্থায়ীভাবে নিষ্ক্রিয় রাখে।",
    },
  },
  {
    title: { en: "Faster set & formwork cycle", bn: "দ্রুত সেট ও ফর্মওয়ার্ক" },
    body: {
      en: "Helps concrete gain early strength so formwork and follow-on trades move faster when dosed per TDS.",
      bn: "টিডিএস অনুযায়ী ডোজ দিলে আগাম শক্তি পেয়ে ফর্মওয়ার্ক ও পরবর্তী কাজ দ্রুত হয়।",
    },
  },
  {
    title: { en: "Lab-referenced quality", bn: "ল্যাব রেফারেন্সড কোয়ালিটি" },
    body: {
      en: "Programmes referenced against BUET, CUET and BCSIR methods — dose, TDS and site trial together.",
      bn: "BUET, CUET ও BCSIR পদ্ধতির রেফারেন্স — ডোজ, টিডিএস ও সাইট ট্রায়াল একসাথে।",
    },
  },
  {
    title: { en: "Independent manufacturer", bn: "স্বাধীন প্রস্তুতকারক" },
    body: {
      en: "Blended in Dhamrai. Raw materials direct-imported from India, Malaysia and Taiwan.",
      bn: "ধামরাইতে ব্লেন্ড। কাঁচামাল ভারত, মালয়েশিয়া ও তাইওয়ান থেকে সরাসরি আমদানি।",
    },
  },
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
  { src: "/media/pail.jpg", caption: { en: "Damp Guard & Solid Bond site pails", bn: "ড্যাম্প গার্ড ও সলিড বন্ড সাইট পেইল" } },
  { src: "/media/stack.jpg", caption: { en: "Stacked packs ready for delivery", bn: "ডেলিভারির জন্য স্ট্যাকড প্যাক" } },
  { src: "/media/drum.jpg", caption: { en: "Drum supply for plants", bn: "প্ল্যান্টের জন্য ড্রাম সাপ্লাই" } },
  { src: "/media/logo.jpg", caption: { en: "Oxilar Bangladesh", bn: "অক্সিলার বাংলাদেশ" } },
];

export const processSteps: { step: string; title: Copy; body: Copy }[] = [
  {
    step: "01",
    title: { en: "Specify", bn: "স্পেসিফাই" },
    body: { en: "Match product and dose to the exposure class.", bn: "এক্সপোজার অনুযায়ী পণ্য ও ডোজ বেছে নিন।" },
  },
  {
    step: "02",
    title: { en: "Trial", bn: "ট্রায়াল" },
    body: { en: "Confirm with a site trial mix and current TDS.", bn: "সাইট ট্রায়াল ও টিডিএস দিয়ে নিশ্চিত করুন।" },
  },
  {
    step: "03",
    title: { en: "Supply", bn: "সাপ্লাই" },
    body: { en: "Pails or drums to site or ready-mix plant.", bn: "সাইট বা রেডি-মিক্স প্ল্যান্টে পেইল বা ড্রাম।" },
  },
  {
    step: "04",
    title: { en: "Support", bn: "সাপোর্ট" },
    body: { en: "Hotline and WhatsApp for engineers and dealers.", bn: "ইঞ্জিনিয়ার ও ডিলারদের জন্য হটলাইন ও হোয়াটসঅ্যাপ।" },
  },
];

export const stats: { value: string; label: Copy }[] = [
  { value: "2019", label: { en: "Established", bn: "প্রতিষ্ঠা" } },
  { value: "7+", label: { en: "Core products", bn: "কোর পণ্য" } },
  { value: "3", label: { en: "Sourcing hubs", bn: "সোর্সিং হাব" } },
  { value: "3", label: { en: "Lab references", bn: "ল্যাব রেফারেন্স" } },
];

export const companyProfile = {
  established: "6 September 2019",
  about: {
    en: "Oxilar Bangladesh is an independent manufacturer, marketer and supplier of construction chemicals. Established on 6 September 2019, we serve civil engineers, consultants and project developers nationwide from our Kalampur, Dhamrai plant and Mohammadpur office. Specialty chemistry is controlled for quality; systems are referenced against BUET, BCSIR and other accredited methods.",
    bn: "অক্সিলার বাংলাদেশ স্বাধীন কনস্ট্রাকশন কেমিক্যাল প্রস্তুতকারক, বাজারজাতকারক ও সরবরাহকারী। ৬ সেপ্টেম্বর ২০১৯-এ প্রতিষ্ঠিত। ধামরাই প্ল্যান্ট ও মোহাম্মদপুর অফিস থেকে সারা দেশে সেবা। বিশেষায়িত কেমিস্ট্রি কোয়ালিটি কন্ট্রোলড; BUET, BCSIR ও অন্যান্য স্বীকৃত পদ্ধতিতে রেফারেন্সড।",
  },
  vision: {
    en: "To be a leading contributor to Bangladesh’s industrial and infrastructural progress with world-class construction chemical solutions — For Better Future.",
    bn: "বিশ্বমানের কনস্ট্রাকশন কেমিক্যাল সমাধান দিয়ে বাংলাদেশের শিল্প ও অবকাঠামো অগ্রগতিতে নেতৃত্ব দেওয়া — উন্নত ভবিষ্যতের জন্য।",
  },
  mission: {
    en: "Empower the construction industry with innovative, high-quality and sustainable chemical solutions while creating value for customers and partners.",
    bn: "উদ্ভাবনী, উচ্চমানের ও টেকসই কেমিক্যাল সমাধান দিয়ে নির্মাণ শিল্পকে শক্তিশালী করা।",
  },
};

export const faqs: { q: Copy; a: Copy }[] = [
  {
    q: { en: "How much Oxilar Super-100 per bag of cement?", bn: "প্রতি ব্যাগ সিমেন্টে কত সুপার-১০০?" },
    a: {
      en: "Guide dose 250–300 ml per 50 kg bag for normal work (piling, basement, raft, column, slab, tanks); 300–400 ml for aggressive / acid exposure. Always confirm with a trial mix and the current TDS.",
      bn: "সাধারণ কাজে ২৫০–৩০০ মিলি; অ্যাগ্রেসিভ/অ্যাসিড এক্সপোজারে ৩০০–৪০০ মিলি। ট্রায়াল ও টিডিএস দিয়ে নিশ্চিত করুন।",
    },
  },
  {
    q: { en: "Is Oxilar Bangladesh independent?", bn: "অক্সিলার বাংলাদেশ কি স্বাধীন?" },
    a: {
      en: "Yes. Oxilar Bangladesh is an independent manufacturer and global direct importer — not a sister concern of any other group. Raw materials are sourced from India, Malaysia and Taiwan.",
      bn: "হ্যাঁ। অক্সিলার বাংলাদেশ স্বাধীন প্রস্তুতকারক ও বৈশ্বিক সরাসরি আমদানিকারক। কাঁচামাল ভারত, মালয়েশিয়া ও তাইওয়ান থেকে আসে।",
    },
  },
  {
    q: { en: "What packs are available?", bn: "কী কী প্যাক আছে?" },
    a: {
      en: "Most liquid systems: 1 L, 4 L, 10 L and 20 L pails. Solid Bond ships as 20 L. Rapid Bland as 1 kg and 25 kg. Anti Dust as 1 kg. Confirm stock on RFQ.",
      bn: "লিকুইড সিস্টেম সাধারণত ১ / ৪ / ১০ / ২০ লিটার। সলিড বন্ড ২০ লিটার। র‍্যাপিড ব্ল্যান্ড ১ ও ২৫ কেজি। অ্যান্টি ডাস্ট ১ কেজি।",
    },
  },
  {
    q: { en: "Do you provide TDS and lab references?", bn: "টিডিএস ও ল্যাব রেফারেন্স কি দেন?" },
    a: {
      en: "Yes. Current TDS sheets and programmes referenced against BUET, CUET and BCSIR methods are available via the Resources page and on request.",
      bn: "হ্যাঁ। রিসোর্সেস পেজ ও অনুরোধে বর্তমান টিডিএস এবং BUET, CUET, BCSIR রেফারেন্সড প্রোগ্রাম পাওয়া যায়।",
    },
  },
  {
    q: { en: "How do I request a quotation?", bn: "কীভাবে কোটেশন চাইব?" },
    a: {
      en: "Add lines to the RFQ basket from Products or Calculators, or use Contact / WhatsApp. Email oxilarbangladesh@gmail.com for formal RFQs.",
      bn: "পণ্য বা ক্যালকুলেটর থেকে আরএফকিউ বাস্কেটে যোগ করুন, অথবা যোগাযোগ / হোয়াটসঅ্যাপ ব্যবহার করুন।",
    },
  },
  {
    q: { en: "Where is the factory?", bn: "কারখানা কোথায়?" },
    a: {
      en: "Blending plant: Kalampur, Dhamrai, Dhaka. Corporate office: 31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka.",
      bn: "ব্লেন্ডিং প্ল্যান্ট: কালামপুর, ধামরাই, ঢাকা। কর্পোরেট অফিস: ৩১/১ বাবার রোড, মোহাম্মদপুর।",
    },
  },
  {
    q: { en: "What is Damp Guard-400 used for?", bn: "ড্যাম্প গার্ড-৪০০ কী কাজে?" },
    a: {
      en: "Water-reducing and waterproofing admixture for roofs, basements, tanks and general casting where damp and salt attack must stay inactive.",
      bn: "ছাদ, বেজমেন্ট, ট্যাংক ও সাধারণ ঢালাইয়ে ওয়াটারপ্রুফিং ও ড্যাম্প/লবণ নিষ্ক্রিয় রাখতে।",
    },
  },
  {
    q: { en: "Can I apply for a job online?", bn: "অনলাইনে চাকরির আবেদন করা যায়?" },
    a: {
      en: "Yes. See Join Our Team (/careers), submit the form, and email your resume to oxilarbangladesh@gmail.com.",
      bn: "হ্যাঁ। ক্যারিয়ার পেজে ফর্ম পূরণ করুন এবং রিজিউমি oxilarbangladesh@gmail.com-এ পাঠান।",
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
      en: "Working application note for the Super-100 roof guide: SSD the slab, two cross coats, keep rain off for 24 hours, then plaster.",
      bn: "সুপার-১০০ ছাদ গাইডের ওয়ার্কিং অ্যাপ্লিকেশন নোট: স্ল্যাব এসএসডি, দুই আড়াআড়ি কোট, ২৪ ঘণ্টা বৃষ্টি থেকে রক্ষা, তারপর প্লাস্টার।",
    },
    length: "Guide",
  },
];

export const sheets: { id: string; kind: "TDS" | "SDS" | "Manual"; product: string; file: string }[] = [
  { id: "tds-super-100", kind: "TDS", product: "Oxilar Super-100", file: "/documents/tds-super-100.html" },
  { id: "sds-super-100", kind: "SDS", product: "Oxilar Super-100", file: "/documents/sds-super-100.html" },
  { id: "manual-roof", kind: "Manual", product: "Roof slurry guide", file: "/documents/guide-roof.html" },
  {
    id: "tds-sp-220-legacy",
    kind: "TDS",
    product: "Legacy sheet name: Plast SP-220 (not a current SKU)",
    file: "/documents/tds-sp-220.html",
  },
  {
    id: "tds-ep-400-legacy",
    kind: "TDS",
    product: "Legacy sheet name: Floor EP-400 (not a current SKU)",
    file: "/documents/tds-ep-400.html",
  },
];

export const labs: { id: string; body: string; title: Copy; note: Copy; file: string }[] = [
  {
    id: "buet",
    body: "BUET",
    title: { en: "Strength and permeability method note", bn: "স্ট্রেংথ ও পারমিয়েবিলিটি মেথড নোট" },
    note: {
      en: "Referenced methods on a working HTML sheet — not a signed BUET certificate.",
      bn: "ওয়ার্কিং এইচটিএমএল শিটে রেফারেন্সড মেথড — স্বাক্ষরিত বিইউইটি সনদ নয়।",
    },
    file: "/documents/lab-buet.html",
  },
  {
    id: "cuet",
    body: "CUET",
    title: { en: "Chloride screen method note", bn: "ক্লোরাইড স্ক্রিন মেথড নোট" },
    note: {
      en: "Referenced methods on a working HTML sheet — not a signed CUET certificate.",
      bn: "ওয়ার্কিং এইচটিএমএল শিটে রেফারেন্সড মেথড — স্বাক্ষরিত সিইউইটি সনদ নয়।",
    },
    file: "/documents/lab-cuet.html",
  },
  {
    id: "bcsir",
    body: "BCSIR",
    title: { en: "Material characterisation method note", bn: "ম্যাটেরিয়াল ক্যারেক্টারাইজেশন মেথড নোট" },
    note: {
      en: "Referenced methods on a working HTML sheet — not a signed BCSIR certificate.",
      bn: "ওয়ার্কিং এইচটিএমএল শিটে রেফারেন্সড মেথড — স্বাক্ষরিত বিসিএসআইআর সনদ নয়।",
    },
    file: "/documents/lab-bcsir.html",
  },
];
