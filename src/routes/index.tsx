import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { benefits, faqs, processSteps, products, sourcing } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";
import { CalculatorSuite } from "@/components/calculators/Calculators";
import { TrustBlocks } from "@/components/home/TrustBlocks";
import { LiveRegion } from "@/components/a11y/LiveRegion";
import { WA_DEFAULT, SITE } from "@/lib/site";
import type { Pack } from "@/data/catalog";

const StrengthChart = lazy(() =>
  import("@/components/home/StrengthChart").then((m) => ({ default: m.StrengthChart })),
);

const WA = WA_DEFAULT;

const HOME_TITLE =
  "Oxilar Bangladesh | Construction Chemical Manufacturer & Global Raw Material Importer";
const HOME_DESC =
  "Independent manufacturer (est. 2019) of construction chemicals for Bangladesh’s climate: Damp Guard, Solid Bond & SB-250 in 1–200 L packs. Factory Kalampur, Dhamrai. BUET · CUET · BCSIR referenced.";
const HOME_OG = `${SITE.web}/og.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      {
        name: "keywords",
        content:
          "Construction chemical company in Bangladesh, Damp Guard, Solid Bond, SB-250, Concrete admixture manufacturer Dhaka, Roof waterproofing chemical BD, BUET referenced, Oxilar Bangladesh Dhamrai",
      },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.web },
      { property: "og:image", content: HOME_OG },
      { property: "og:image:secure_url", content: HOME_OG },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Oxilar Bangladesh — Damp Guard, Solid Bond and SB-250 construction chemicals",
      },
      { property: "og:site_name", content: "Oxilar Bangladesh" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
      { name: "twitter:image", content: HOME_OG },
    ],
  }),
  component: Home,
});
