import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { LanguageProvider } from "@/lib/i18n";
import { SiteChrome } from "@/components/layout/SiteChrome";
import appCss from "../styles.css?url";

const SITE = "https://www.oxilarbd.com";
const TITLE =
  "Oxilar Bangladesh | Construction Chemical Manufacturer & Global Raw Material Importer";
const DESC =
  "Independent manufacturer of BUET-referenced construction chemicals in Bangladesh. Roof waterproofing, concrete admixtures, epoxy flooring and industrial systems. Factory: Kalampur, Dhamrai. Established 6 September 2019. Request RFQ or WhatsApp for same-day project support.";

/** Set VITE_GA_MEASUREMENT_ID in Vercel (e.g. G-XXXXXXXX). Placeholder IDs are ignored. */
const GA_ID = (typeof import.meta !== "undefined" && import.meta.env?.VITE_GA_MEASUREMENT_ID) || "";
const GA_ACTIVE = /^G-[A-Z0-9]+$/i.test(GA_ID) && !/X{4,}/i.test(GA_ID);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "theme-color", content: "#059669" },
      { name: "author", content: "Oxilar Bangladesh" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "Construction chemical company in Bangladesh, Best roof waterproofing chemical BD, Concrete admixture manufacturer Dhaka, Epoxy flooring supplier Bangladesh, BUET tested construction chemicals, Salinity damp proofing chemical, Oxilar Super-100 dosage per bag of cement, Oxilar Bangladesh Dhamrai, RFQ construction chemicals BD",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { property: "og:image", content: `${SITE}/og.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_BD" },
      { property: "og:locale:alternate", content: "bn_BD" },
      { property: "og:site_name", content: "Oxilar Bangladesh" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE}/og.jpg` },
      // Uncomment and set after Google Search Console verification:
      // { name: "google-site-verification", content: "YOUR_GSC_TOKEN" },
    ],
    links: [
      { rel: "canonical", href: SITE },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;600;700&family=Sora:wght@500;600;700&display=swap",
      },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
    scripts: GA_ACTIVE
      ? [
          {
            children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:true,anonymize_ip:true});`,
          },
        ]
      : [],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        {GA_ACTIVE && <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />}
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <LanguageProvider>
            <SiteChrome>
              <Outlet />
            </SiteChrome>
          </LanguageProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
