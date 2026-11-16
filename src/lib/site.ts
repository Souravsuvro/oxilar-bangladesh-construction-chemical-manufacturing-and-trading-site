/** Single source of truth for public contact channels. */

export const SITE = {
  brand: "Oxilar Bangladesh",
  email: "oxilarbangladesh@gmail.com",
  /** Voice / hotline — aligned with WhatsApp Business. */
  phoneDisplay: "+88 0182-6736886",
  phoneTel: "+8801826736886",
  /** WhatsApp Business account used by site CTAs. */
  whatsappDisplay: "+88 01826-736886",
  whatsappE164: "8801826736886",
  facebook: "https://www.facebook.com/share/19MbCzTKzp/",
  web: "https://www.oxilarbd.com",
  office: "31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka",
  factory: "Kalampur, Dhamrai, Dhaka",
  sourcingLine: {
    en: "Raw materials are direct-imported from India, Malaysia and Taiwan.",
    bn: "কাঁচামাল ভারত, মালয়েশিয়া ও তাইওয়ান থেকে সরাসরি আমদানি করা হয়।",
  },
} as const;

export function whatsappUrl(prefill: string) {
  return `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(prefill)}`;
}

export const WA_DEFAULT = whatsappUrl(
  "Hello Oxilar Bangladesh — I need product advice / RFQ for a project.",
);
