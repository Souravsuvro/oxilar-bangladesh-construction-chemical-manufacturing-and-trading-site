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
  sister: {
    en: "Independent manufacturer & global direct importer",
    bn: "স্বাধীন প্রস্তুতকারক ও বৈশ্বিক সরাসরি আমদানিকারক",
  },
  heroTitle: {
    en: "Construction chemicals engineered for Bangladesh’s climate.",
    bn: "বাংলাদেশের আবহাওয়ার জন্য প্রকৌশলকৃত কনস্ট্রাকশন কেমিক্যাল।",
  },
  heroSub: {
    en: "Waterproofing, concrete admixtures and industrial floors for civil engineers, consultants and mega-projects. Blended in Dhamrai. Referenced against BUET, CUET and BCSIR methods.",
    bn: "সিভিল ইঞ্জিনিয়ার, কনসালট্যান্ট ও মেগা-প্রকল্পের জন্য ওয়াটারপ্রুফিং, কংক্রিট অ্যাডমিক্সচার ও ইন্ডাস্ট্রিয়াল ফ্লোর। ধামরাইয়ে ব্লেন্ড। BUET, CUET ও BCSIR পদ্ধতিতে রেফারেন্সড।",
  },
  slogan: {
    en: "Dose, TDS and lab sheet together — so site teams mix with confidence.",
    bn: "ডোজ, টিডিএস ও ল্যাব শিট একসাথে — যাতে সাইট টিম আত্মবিশ্বাসে মিক্স করতে পারে।",
  },
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
