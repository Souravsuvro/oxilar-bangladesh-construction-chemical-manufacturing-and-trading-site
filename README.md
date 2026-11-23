# Oxilar Bangladesh — Construction Chemicals Web App

## Live links

- **Production:** https://oxilarbd.com
- **Vercel preview:** https://oxilar-bangladesh-staging-hbm5i9klj.vercel.app
- **GitHub:** https://github.com/Souravsuvro/oxilar-bangladesh-construction-chemical-manufacturing-and-trading-site

Independent manufacturer, marketer and supplier of high-performance construction chemicals, waterproofing systems and industrial materials. Established **6 September 2019**. Slogan: **For Better Future**.

- **Plant:** Kalampur, Dhamrai, Dhaka  
- **Office:** 31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka 
- **Email:** oxilarbangladesh@gmail.com  
- **WhatsApp (Business):** 01826736886
- **Voice hotline:** 01826736886
- **Dealership & HR:** 01960198313
- **Facebook:** https://www.facebook.com/share/19MbCzTKzp/  
- **Web:** https://oxilarbd.com

> Oxilar Bangladesh is **not** affiliated with Filament Group. Ignore any legacy brochure URLs pointing at filamentbd.com.

Raw materials are **direct-imported from India, Malaysia and Taiwan**.

---

## What the site is for

| Audience | What they get |
|----------|----------------|
| Civil engineers & consultants | Product TDS guidance, dosage calculators, RFQ basket |
| Project procurement | Pack sizes, lab references, contact / WhatsApp |
| Dealers | B2B portal path + RFQ |
| Job seekers | `/careers` application form |
| Search engines | EN/BN meta, FAQ JSON-LD, product pages |

---

## Stack

- **TanStack Start** (file routes) + React 19  
- **Tailwind CSS v4** tokens in `src/styles.css`  
- **Zustand** (RFQ basket + language, localStorage)  
- **Recharts** (lab strength chart, code-split where possible)  
- **Nitro** Vercel preset  
- **Formspree** optional inbox for contact / RFQ / careers (`VITE_FORMSPREE_ID`)

## Scripts

```bash
npm install
npm run dev          # local app
npm run build        # production build
npm run preview      # preview production output
npm run typecheck
```

Prefer **source builds on Vercel** (do not commit stale `.vercel/output`).

---

## Architecture (developer map)

| Path | Role |
|------|------|
| `src/data/catalog.ts` | Products, FAQs, benefits, gallery, company profile, sourcing (EN/BN) |
| `src/lib/site.ts` | Phone, WhatsApp, email, Facebook, sourcing one-liner |
| `src/lib/i18n.tsx` | Language provider |
| `src/lib/leads.ts` | Formspree / webhook lead delivery + honeypot drop |
| `src/lib/rfq-store.ts` | RFQ basket |
| `src/components/layout/SiteChrome.tsx` | Shell, nav, footer, mobile dock, toast |
| `src/components/products/RfqDrawer.tsx` | RFQ UI + WhatsApp handoff |
| `src/components/calculators/Calculators.tsx` | Volume / bags / epoxy estimates |
| `src/routes/*` | Pages + `head` SEO |
| `public/media/*` | Pack photography and brand assets |

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Hero, benefits, products teaser, FAQ, conversion |
| `/about` | Independent brand, vision/mission, sourcing |
| `/products` | Filters + RFQ |
| `/products/$slug` | Detail + Product schema |
| `/calculators` | Dosage tools |
| `/resources` | TDS / lab |
| `/projects` | Sectors / case blurbs |
| `/b2b-portal` | Dealers |
| `/careers` | HR contact details, open roles + anti-spam form |
| `/contact` | Maps, form, WhatsApp, Facebook |

### Calculator logic (estimates only)

- **Volume:** `m³ = L × W × (T_mm/1000)` → litres = `m³ × dose_L_per_m³`  
- **Bags:** litres = `(bags × ml_per_bag) / 1000`  
- **Epoxy:** `m² = ft² × 0.092903` → litres ≈ coverage model  

Always confirm with **trial mix + current TDS**.

---

## Product lineup (brochure-aligned)

| Product | Role | Typical packs |
|---------|------|----------------|
| **Super-100** | Multipurpose polymerised admixture | 1 / 5 / 10 / 20 / 200 L |
| **Damp Guard-400** | Water reducing + waterproofing | 1 / 5 / 10 / 20 / 200 L |
| **Pre Cast Premium** | Damp & waterproof polymer | 1 / 5 / 10 / 20 / 200 L |
| **Solid Bond** | Water-reducing site admixture | 1 / 5 / 10 / 20 / 200 L |
| **Rapid Bland** | High-strength powder for repairs | 1 kg / 25 kg |
| **Befit Dust** | Liquid dust suppressant | 1 / 5 / 10 / 20 / 200 L |
| **Anti Dust** | Powder dust control | 1 kg |

**Brochure dosage (Super-100 guide):** 250–300 ml / 50 kg bag general; 300–400 ml aggressive / acid exposure.

**Marketing benefits (banner):** maximum water resistance · helps concrete set faster · damp and salts permanently inactive.

---

## Branding rules

- Independent manufacturer + global direct importer  
- Audience: civil engineers, structural consultants, mega-project procurement  
- Lab references: BUET, CUET, BCSIR (**methods / programme** — not a certification claim unless certificate is on file)  
- No Filament Group / filamentbd.com references  
- Contact truth source: `src/lib/site.ts`

---

## Media (`public/media/`)

Currently live:

| File | Use |
|------|-----|
| `logo.jpg` | Header mark |
| `pail.jpg` | Damp Guard / Solid Bond style pails |
| `stack.jpg` | Stacked packs / hero support |
| `drum.jpg` | Plant / dust line |
| `oxilar-product-pails.jpg` | Supplied branded pail stack |
| `oxilar-product-pail-closeup.jpg` | Supplied branded pail close-up |
| `oxilar-product-drums.jpg` | Supplied branded drums |

Product cards use the supplied photos in `src/data/catalog.ts`; the homepage featured cards share that catalog data. The pail-stack source photo visibly includes a legacy “4 Liter” label and should be replaced with updated packaging photography if that size is no longer sold.

---

## Environment (Vercel)

| Variable | Purpose |
|----------|---------|
| `VITE_FORMSPREE_ID` | Formspree form id → inbox for contact, RFQ, careers |
| `VITE_LEAD_ENDPOINT` | Optional full webhook URL (overrides Formspree) |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (load only if real) |

Set in Vercel → Project → Settings → Environment Variables → Production + Preview → Redeploy.

Careers anti-spam: honeypot field + minimum form dwell time; bots are dropped silently. Applicants should still **email resumes** to oxilarbangladesh@gmail.com.

---

## Deploy

1. Push `main` (source only; keep `.vercel/` gitignored).  
2. Vercel builds from GitHub.  
3. Add `oxilarbd.com` in Vercel Project Settings → Domains and configure DNS exactly as Vercel instructs (SSL is provisioned automatically).
4. Verify: independent brand copy, WhatsApp **01826736886**, `/careers`, no Filament mentions.

---

## Next to-do plan (prioritized)

### P0 — Conversion & truth
1. **Activate Formspree** (`VITE_FORMSPREE_ID`) so contact, RFQ and careers hit `oxilarbangladesh@gmail.com`.
2. Replace the legacy “4 Liter” pail photo if that package size is no longer sold.
3. **GA4** real Measurement ID (or remove placeholder).
4. **Hard-refresh** production domain after each deploy; confirm WhatsApp opens Business account **01826736886**.

### P1 — Content & SEO
5. Per-product **Product + Offer** JSON-LD polish on `$slug` pages.  
6. Downloadable **TDS PDFs** under `public/tds/` + links on Resources.  
7. Replace any remaining generic stock with **site pack photography**.  
8. Optional Bengali-first landing section for high-intent BD keywords.

### P2 — UX / a11y
9. Mobile nav density (Careers added a 9th link — consider “More” drawer on small screens).  
10. Screen-reader pass (NVDA/VoiceOver) on calculators + RFQ + careers form.  
11. Light code-split remaining heavy client chunks if Lighthouse flags JS.

### P3 — Growth features
12. Dealer locator / district coverage map.  
13. Project case studies with before/after photos.  
14. WhatsApp catalog deep links per product.  
15. Careers: more openings or “general application” only when hiring freezes.

### Explicitly out of scope (unless requested)
- Full auth / customer portal database  
- Payment gateway  
- Claiming lab **certification** without certificates on file  

---

## Feature explainer (for stakeholders)

| Feature | Owner benefit | Visitor benefit |
|---------|---------------|-----------------|
| RFQ basket | Structured leads | Multi-line quote without chat friction |
| Calculators | Positions Oxilar as technical | Fast dosage estimate on site |
| WhatsApp CTAs | High reply rate in BD | Instant human contact |
| Careers form | Hiring pipeline | Transparent openings |
| EN/BN toggle | Wider reach | Comfort in preferred language |
| Product detail pages | SEO + education | Specs, dosage, safety before call |
| Lab / TDS resources | Trust | Engineers can specify correctly |

---

## Contact (canonical)

```
Email:     oxilarbangladesh@gmail.com
WhatsApp:  01826736886
Call:      01960198313
Facebook:  https://www.facebook.com/share/19MbCzTKzp/
Web:       https://oxilarbd.com
```
