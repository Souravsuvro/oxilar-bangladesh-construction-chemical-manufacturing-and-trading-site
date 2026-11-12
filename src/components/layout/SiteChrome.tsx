import { useEffect, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, MessageCircle, ClipboardList, Mail } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useRfq } from "@/lib/rfq-store";
import { RfqDrawer } from "@/components/products/RfqDrawer";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", key: "home" as const },
  { to: "/about", key: "about" as const },
  { to: "/products", key: "products" as const },
  { to: "/calculators", key: "calculators" as const },
  { to: "/resources", key: "resources" as const },
  { to: "/projects", key: "projects" as const },
  { to: "/b2b-portal", key: "b2b" as const },
  { to: "/contact", key: "contact" as const },
];

const WA_DEFAULT =
  "https://wa.me/8801960198313?text=" +
  encodeURIComponent("Hello Oxilar Bangladesh — I need product advice / RFQ for a project.");

export function SiteChrome({ children }: { children: ReactNode }) {
  const { t, lang, setLang } = useI18n();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const lines = useRfq((s) => s.lines);
  const setRfq = useRfq((s) => s.setOpen);
  const count = lines.reduce((n, l) => n + l.qty, 0);

  useEffect(() => {
    void useRfq.persist.rehydrate();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <div className="bg-ink text-paper text-sm">
        <div className="container-site flex flex-wrap items-center justify-between gap-2 py-2">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-paper/80">
            <a className="inline-flex min-h-12 items-center gap-1.5 hover:text-paper" href="tel:+8801960198313">
              <Phone className="size-3.5" aria-hidden />
              +88 0196-0198313
            </a>
            <a className="inline-flex min-h-12 items-center gap-1.5 hover:text-paper" href="mailto:oxilarbangladesh@gmail.com">
              <Mail className="size-3.5" aria-hidden />
              oxilarbangladesh@gmail.com
            </a>
            <span className="hidden lg:inline">{t("office")}</span>
            <span className="hidden xl:inline">{t("factory")}</span>
          </div>
          <div className="inline-flex rounded-full bg-ink-soft p-1" role="group" aria-label="Language">
            <button
              type="button"
              className={cn("min-h-11 rounded-full px-3 text-xs font-semibold", lang === "en" ? "bg-brand text-paper" : "text-paper/70")}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={cn("min-h-11 rounded-full px-3 text-xs font-semibold", lang === "bn" ? "bg-brand text-paper" : "text-paper/70")}
              onClick={() => setLang("bn")}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line/80 bg-card/80 backdrop-blur-md">
        <div className="container-site flex h-16 items-center gap-3 lg:h-[4.5rem]">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <img
              src="/media/logo.jpg"
              alt="Oxilar Bangladesh"
              width={40}
              height={40}
              className="size-10 rounded-full object-cover ring-2 ring-brand-soft"
              decoding="async"
            />
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold text-ink">Oxilar</span>
              <span className="block text-xs font-medium tracking-wide text-brand">BANGLADESH</span>
            </span>
          </Link>
          <nav className="ml-4 hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-2.5 py-2.5 text-sm font-medium text-ink-soft hover:bg-paper",
                  path === item.to && "bg-brand-soft text-brand-deep",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-12 items-center gap-1.5 rounded-full bg-sky px-3 text-sm font-semibold text-paper hover:opacity-95 lg:inline-flex"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setRfq(true)}
              className="hidden min-h-12 items-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-paper hover:bg-brand-deep md:inline-flex"
            >
              <ClipboardList className="size-4" aria-hidden />
              {t("rfq")}
              {count > 0 && (
                <span className="rounded-full bg-paper px-1.5 text-xs text-brand-deep">{count}</span>
              )}
            </button>
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center rounded-full border border-line lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-line bg-card lg:hidden">
            <div className="container-site grid gap-1 py-3">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} className="min-h-12 rounded-lg px-3 py-3 text-base font-medium hover:bg-paper">
                  {t(item.key)}
                </Link>
              ))}
              <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="min-h-12 rounded-lg px-3 py-3 text-base font-semibold text-sky">
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setRfq(true)}
                className="min-h-12 rounded-lg px-3 py-3 text-left text-base font-semibold text-brand"
              >
                {t("rfq")} {count > 0 ? `(${count})` : ""}
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="main">{children}</main>

      <footer className="mt-16 bg-ink text-paper">
        <div className="container-site grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold">Oxilar Bangladesh</p>
            <p className="mt-2 max-w-md text-sm text-paper/75">
              {t("sister")}. {t("slogan")}
            </p>
            <p className="mt-3 text-xs text-paper/55">Established 6 September 2019 · Kalampur plant, Dhamrai</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="tel:+8801960198313" className="inline-flex min-h-11 items-center rounded-full bg-brand px-4 text-sm font-semibold text-paper">
                {lang === "bn" ? "কল করুন" : "Call now"}
              </a>
              <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-sky px-4 text-sm font-semibold text-paper">
                WhatsApp
              </a>
              <button type="button" onClick={() => setRfq(true)} className="inline-flex min-h-11 items-center rounded-full bg-white/10 px-4 text-sm font-semibold text-paper hover:bg-white/15">
                {t("rfq")}
              </button>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-amber">{t("office")}</p>
            <p className="mt-2 text-sm text-paper/75">31/1 Babar Road, Mohammadpur, Dhanmondi, Dhaka</p>
            <p className="mt-3 text-sm font-semibold text-amber">{t("factory")}</p>
            <p className="mt-2 text-sm text-paper/75">Kalampur, Dhamrai, Dhaka</p>
          </div>
          <div className="text-sm">
            <a className="block min-h-12 py-2 hover:text-brand-soft" href="tel:+8801960198313">+88 0196-0198313</a>
            <a className="block min-h-12 py-2 hover:text-brand-soft" href="mailto:oxilarbangladesh@gmail.com">oxilarbangladesh@gmail.com</a>
            <p className="py-2 text-paper/70">www.oxilarbd.com</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <Link to="/products" className="rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15">{t("products")}</Link>
              <Link to="/calculators" className="rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15">{t("calculators")}</Link>
              <Link to="/resources" className="rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15">{t("resources")}</Link>
              <Link to="/b2b-portal" className="rounded-full bg-white/10 px-3 py-1.5 hover:bg-white/15">{t("b2b")}</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-site flex flex-col gap-2 py-4 text-xs text-paper/60 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Oxilar Bangladesh. Independent manufacturer.</p>
            <p>BUET · CUET · BCSIR referenced test programme</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-card md:hidden">
        <a className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink" href="tel:+8801960198313">
          <Phone className="size-4 text-brand" />
          {t("call")}
        </a>
        <a
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink"
          href={WA_DEFAULT}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="size-4 text-sky" />
          {t("whatsapp")}
        </a>
        <button type="button" className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-ink" onClick={() => setRfq(true)}>
          <ClipboardList className="size-4 text-amber" />
          {t("basket")} {count > 0 ? `(${count})` : ""}
        </button>
      </div>
      <RfqDrawer />
    </div>
  );
}
