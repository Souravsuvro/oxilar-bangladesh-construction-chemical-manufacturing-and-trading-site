# Oxilar Bangladesh — Construction Chemicals Web App

Independent manufacturer and global direct importer of high-performance construction chemicals, waterproofing systems, and industrial raw materials. Established **6 September 2019**. Blending plant: **Kalampur, Dhamrai, Dhaka**. Corporate office: **31/1 Babar Road, Mohammadpur**.

> Oxilar Bangladesh is **not** affiliated with Filament Group.

## Stack

- **TanStack Start** (file-based routes) + React 19
- **Tailwind CSS v4** design tokens in `src/styles.css`
- **Zustand** (persisted RFQ basket + language)
- **Recharts** (lab reference chart)
- **Nitro** Vercel preset → `.vercel/output` prebuild

## Scripts

```bash
npm install
npm run dev          # http://0.0.0.0:8080
npm run build        # vite build + migrate → refreshes .vercel/output
npm run preview      # local production preview
npm run typecheck
```

## Architecture

| Path | Role |
|------|------|
| `src/data/catalog.ts` | Products, FAQs, stats, gallery, process, company profile (bilingual) |
| `src/lib/i18n.tsx` | EN/BN provider |
| `src/lib/rfq-store.ts` | RFQ basket (localStorage) |
| `src/components/calculators/Calculators.tsx` | Slab volume / cement bags / epoxy coverage |
| `src/components/layout/SiteChrome.tsx` | Shell, nav, footer, mobile dock |
| `src/routes/*` | Pages + route-level `head` meta |

### Calculator logic (estimates only)

- **Volume:** `m³ = L × W × (T_mm/1000)` → litres = `m³ × dose_L_per_m³`
- **Bags:** litres = `(bags × ml_per_bag) / 1000`
- **Epoxy:** `m² = ft² × 0.092903` → litres = `m² × (micron/400) × 0.40`

Always confirm with trial mix + current TDS.

## Branding rules

- Position as **independent** manufacturer + **global direct importer**
- Audience: civil engineers, structural consultants, mega-project procurement
- Lab references: BUET, CUET, BCSIR (methods / programme — not a certification claim unless certificate is on file)
- No third-party corporate parent claims

## SEO & analytics

- Root + route `head` meta (title, description, OG, Twitter)
- JSON-LD: Organization / LocalBusiness + FAQPage on home
- `public/sitemap.xml`, `public/robots.txt`
- GA4 placeholder: replace `G-XXXXXXXX` in `src/routes/__root.tsx` with your Measurement ID
- Optional: Google Search Console meta in `__root.tsx`

## Deploy (Vercel)

This project currently ships a **committed prebuild** under `.vercel/output`.

1. Codespace or local machine with repo access:
   ```bash
   rm -rf .vercel/output node_modules
   npm install
   npm run build
   npm run preview   # verify Filament-free copy + enhanced home sections
   git add -A && git commit -m "Production rebuild" && git push origin main
   ```
2. Vercel auto-deploys `main` to production alias.
3. Map custom domain `www.oxilarbd.com` in Vercel → Domains (SSL automatic).

**Do not** push a partial `.vercel/output` (deletions only) — that previously caused production 500s.

## Contact

- Phone / WhatsApp: +88 0196-0198313
- Email: oxilarbangladesh@gmail.com
- Web: https://www.oxilarbd.com
