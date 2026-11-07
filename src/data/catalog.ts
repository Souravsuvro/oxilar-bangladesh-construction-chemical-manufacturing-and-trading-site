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
    en: "At Oxilar Bangladesh, we believe that quality construction chemicals form the foundation of lasting infrastructure. Every product we manufacture is developed with rigorous standards, advanced formulation technology, and a deep understanding of local construction challenges. Our goal is to partner with builders, engineers, and developers to create structures that stand the test of time.",
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

export const sourcing = [
  { country: { en: "China", bn: "চীন" }, focus: { en: "Polymers & resins", bn: "পলিমার ও রেজিন" } },
  { country: { en: "Korea", bn: "কোরিয়া" }, focus: { en: "Specialty additives", bn: "স্পেশালিটি অ্যাডিটিভ" } },
  { country: { en: "Taiwan", bn: "তাইওয়ান" }, focus: { en: "Epoxy systems", bn: "ইপক্সি সিস্টেম" } },
  { country: { en: "India", bn: "ভারত" }, focus: { en: "Cementitious bases", bn: "সিমেন্টিশাস বেস" } },
  { country: { en: "Thailand", bn: "থাইল্যান্ড" }, focus: { en: "Surfactants", bn: "সারফ্যাক্ট্যান্ট" } },
  { country: { en: "Singapore", bn: "সিঙ্গাপুর" }, focus: { en: "Quality labs & logistics", bn: "কোয়ালিটি ল্যাব ও লজিস্টিক্স" } },
];

export const leaders = [
  { name: { en: "Technical Director", bn: "টেকনিক্যাল ডিরেক্টর" }, role: { en: "Formulation & QC", bn: "ফর্মুলেশন ও কিউসি" }, bio: { en: "Leads product development and lab alignment with BUET / CUET protocols.", bn: "পণ্য উন্নয়ন ও BUET / CUET প্রোটোকলের সাথে ল্যাব অ্যালাইনমেন্ট নেতৃত্ব দেন।" } },
  { name: { en: "Plant Manager", bn: "প্ল্যান্ট ম্যানেজার" }, role: { en: "Kalampur operations", bn: "কালামপুর অপারেশন" }, bio: { en: "Oversees blending, packaging and dispatch for national coverage.", bn: "জাতীয় কভারেজের জন্য ব্লেন্ডিং, প্যাকেজিং ও ডিসপ্যাচ তদারকি করেন।" } },
];

export const benefits = [
  { title: { en: "Local monsoon formula", bn: "স্থানীয় বর্ষা ফর্মুলা" }, body: { en: "Designed for Bangladesh humidity, salinity and monsoon saturation.", bn: "বাংলাদেশের আর্দ্রতা, লবণাক্ততা ও বর্ষা স্যাচুরেশনের জন্য ডিজাইন।" } },
  { title: { en: "Lab-referenced", bn: "ল্যাব-রেফারেন্সড" }, body: { en: "Illustrative alignment with BUET, CUET and BCSIR test methods.", bn: "BUET, CUET ও BCSIR টেস্ট পদ্ধতির সাথে ইলাস্ট্রেটিভ অ্যালাইনমেন্ট।" } },
  { title: { en: "Site calculators", bn: "সাইট ক্যালকুলেটর" }, body: { en: "Volume, bag and epoxy estimators with RFQ import.", bn: "ভলিউম, ব্যাগ ও ইপক্সি এস্টিমেটর আরএফকিউ ইমপোর্টসহ।" } },
];

export const projects = [
  { title: { en: "Roof waterproofing — commercial", bn: "ছাদ ওয়াটারপ্রুফিং — কমার্শিয়াল" }, location: { en: "Dhaka", bn: "ঢাকা" }, system: "Super-100" },
  { title: { en: "Ready-mix admixture program", bn: "রেডি-মিক্স অ্যাডমিক্সচার প্রোগ্রাম" }, location: { en: "Gazipur", bn: "গাজীপুর" }, system: "Plast SP-220" },
  { title: { en: "Epoxy floor — garment unit", bn: "ইপক্সি ফ্লোর — গার্মেন্ট ইউনিট" }, location: { en: "Savar", bn: "সাভার" }, system: "Floor EP-400" },
];
