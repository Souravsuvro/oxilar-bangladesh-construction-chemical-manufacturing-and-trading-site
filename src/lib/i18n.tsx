import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Copy, Lang } from "@/data/catalog";

type Dict = Record<string, Copy>;

const dict: Dict = {
  hotline: { en: "Hotline", bn: "হটলাইন" },
  office: { en: "Office · Mohammadpur", bn: "অফিস · মোহাম্মদপুর" },
  factory: { en: "Factory · Dhamrai", bn: "কারখানা · ধামরাই" },
  home: { en: "Home", bn: "হোম" },
  about: { en: "About", bn: "আমাদের কথা" },
  sourcing: { en: "Sourcing", bn: "সোর্সিং" },
  products: { en: "Products", bn: "পণ্য" },
  calculators: { en: "Calculators", bn: "ক্যালকুলেটর" },
  resources: { en: "TDS / Lab", bn: "টিডিএস / ল্যাব" },
  projects: { en: "Projects", bn: "প্রকল্প" },
  b2b: { en: "Dealers", bn: "ডিলার" },
  contact: { en: "Contact", bn: "যোগাযোগ" },
  rfq: { en: "Request RFQ", bn: "আরএফকিউ" },
  explore: { en: "Explore products", bn: "পণ্য দেখুন" },
  launchCalc: { en: "Launch calculator", bn: "ক্যালকুলেটর খুলুন" },
  call: { en: "Call", bn: "কল" },
  whatsapp: { en: "WhatsApp", bn: "হোয়াটসঅ্যাপ" },
  basket: { en: "RFQ basket", bn: "আরএফকিউ বাস্কেট" },
  addRfq: { en: "Add to RFQ", bn: "আরএফকিউতে যোগ" },
  added: { en: "Added", bn: "যোগ হয়েছে" },
  sister: { en: "A sister concern of Filament Group", bn: "ফিলামেন্ট গ্রুপের একটি সিস্টার কনসার্ন" },
  heroTitle: { en: "Construction chemicals built for Bangladesh’s climate.", bn: "বাংলাদেশের আবহাওয়ার জন্য তৈরি কনস্ট্রাকশন কেমিক্যাল।" },
  heroSub: {
    en: "Waterproofing, concrete admixtures and industrial floors. Blended in Dhamrai. Checked against BUET, CUET and BCSIR methods.",
    bn: "ওয়াটারপ্রুফিং, কংক্রিট অ্যাডমিক্সচার ও ইন্ডাস্ট্রিয়াল ফ্লোর। ধামরাইয়ে ব্লেন্ড। BUET, CUET ও BCSIR পদ্ধতিতে যাচাই।",
  },
  slogan: { en: "For a better future. Your building safety first.", bn: "ভালো ভবিষ্যতের জন্য। আপনার ভবনের নিরাপত্তা আগে।" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
  tx: (copy: Copy) => string;
};

const C = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("ox-lang");
    if (saved === "bn" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ox-lang", l);
    document.documentElement.lang = l === "bn" ? "bn" : "en";
  };
  const t = (key: keyof typeof dict) => dict[key][lang];
  const tx = (copy: Copy) => copy[lang];
  return <C.Provider value={{ lang, setLang, t, tx }}>{children}</C.Provider>;
}

export function useI18n() {
  const v = useContext(C);
  if (!v) throw new Error("useI18n outside provider");
  return v;
}
