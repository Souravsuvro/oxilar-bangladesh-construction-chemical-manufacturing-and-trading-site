/** Single source of truth for public contact channels. */

export const SITE = {
  brand: "Oxilar Bangladesh",
  email: "oxilarbangladesh@gmail.com",
  /** Primary public line / WhatsApp Business (Contact section). */
  phoneDisplay: "+88 0182-6736886",
  phoneTel: "+8801826736886",
  /** WhatsApp Business account used by site CTAs. */
  whatsappDisplay: "+88 01826-736886",
  whatsappE164: "8801826736886",
  /**
   * Dealership & HR voice line (per client correction).
   * Kept separate from WhatsApp Business number.
   */
  dealerPhoneDisplay: "+88 0196-0198313",
  dealerPhoneTel: "+8801960198313",
  hrPhoneDisplay: "+88 0196-0198313",
  hrPhoneTel: "+8801960198313",
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
