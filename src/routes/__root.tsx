import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { LanguageProvider } from "@/lib/i18n";
import { SiteChrome } from "@/components/layout/SiteChrome";
import appCss from "../styles.css?url";

const TITLE =
  "Oxilar Bangladesh | Construction Chemical Manufacturer & Global Raw Material Importer";
const DESC =
  "Oxilar Bangladesh (A Sister Concern of Filament Group) produces BUET-tested construction chemicals, concrete admixtures, roof waterproofing, and epoxy flooring in Bangladesh. Factory: Dhamrai, Dhaka. Established 6 September 2019.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "theme-color", content: "#059669" },
      {
        name: "keywords",
        content:
          "Construction chemical company in Bangladesh, Best roof waterproofing chemical BD, Concrete admixture manufacturer Dhaka, Epoxy flooring supplier Bangladesh, BUET certified waterproofing chemical, Salinity & damp proofing chemical, Oxilar Super-100 dosage per bag of cement, Oxilar Bangladesh Kalampur",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og.jpg" },
      { property: "og:locale", content: "en_BD" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/og.jpg" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;600;700&family=Sora:wght@500;600;700&display=swap",
      },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
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
