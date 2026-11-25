import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LiveRegion } from "@/components/a11y/LiveRegion";
import { projectSectors, projects, quotes } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project References | Waterproofing & Admixtures | Oxilar BD" },
      {
        name: "description",
        content:
          "Selected waterproofing, concrete admixture and industrial references using Oxilar systems across Bangladesh. Supply and application context for civil engineers.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { tx, lang } = useI18n();
  const [sector, setSector] = useState("all");
  const [split, setSplit] = useState(55);
  const list = projects.filter((p) => sector === "all" || p.sector.en === sector);
  const bn = lang === "bn";
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">
        {bn ? "বাংলাদেশজুড়ে প্রকল্প রেফারেন্স" : "Project references across Bangladesh"}
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        {bn ? "নিচের কাজগুলো সিস্টেমের ধরন দেখায়। ছবি সাপ্লাই ও অ্যাপ্লিকেশন রেফারেন্স, একই দেয়ালের আগে-পরে নয়।" : "These jobs show system type. Photos are supply and application references, not a single wall before and after."}
      </p>
      <div className="mt-6 flex gap-2 overflow-auto">
        <button type="button" aria-pressed={sector === "all"} onClick={() => setSector("all")} className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${sector === "all" ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`}>
          {bn ? "সব" : "All"}
        </button>
        {projectSectors.map((s) => (
          <button key={s.en} type="button" aria-pressed={sector === s.en} onClick={() => setSector(s.en)} className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${sector === s.en ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`}>
            {tx(s)}
          </button>
        ))}
      </div>
      <LiveRegion message={bn ? `${list.length}টি প্রকল্প পাওয়া গেছে` : `${list.length} project${list.length === 1 ? "" : "s"} found`} />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {list.map((p) => (
          <article key={p.title.en} className="overflow-hidden rounded-xl bg-card ring-1 ring-line">
            <img src="/media/stack.jpg" alt={bn ? `${tx(p.title)} পণ্য ও সাপ্লাই সিস্টেম` : `${tx(p.title)} product and supply system`} className="h-52 w-full object-cover" />
            <div className="p-4">
              <p className="text-xs font-semibold text-sky">{tx(p.sector)}</p>
              <h2 className="text-xl font-semibold">{tx(p.title)}</h2>
              <p className="mt-2 text-sm text-muted">{tx(p.summary)}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{bn ? "সাপ্লাই বনাম সিস্টেম" : "Supply versus system"}</h2>
        <p className="mt-1 text-sm text-muted">{bn ? "স্লাইডার টেনে দুটি রেফারেন্স ফ্রেম তুলনা করুন।" : "Drag to compare two reference frames."}</p>
        <div className="relative mt-4 h-72 overflow-hidden rounded-xl bg-ink">
          <img src="/media/stack.jpg" alt={bn ? "অক্সিলার পণ্য স্ট্যাকের সাপ্লাই রেফারেন্স" : "Oxilar product stack supply reference"} className="absolute inset-0 h-full w-full object-cover" />
          <img src="/media/pail.jpg" alt={bn ? "অক্সিলার পেইলের অ্যাপ্লিকেশন সিস্টেম রেফারেন্স" : "Oxilar pail application system reference"} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }} />
          <input aria-label="Compare" type="range" min={5} max={95} value={split} onChange={(e) => setSplit(Number(e.target.value))} className="absolute inset-x-4 bottom-4" />
        </div>
      </section>
      <section className="mt-12 grid gap-4 lg:grid-cols-3">
        {quotes.map((q) => (
          <blockquote key={q.by.en} className="rounded-xl bg-card p-5 ring-1 ring-line">
            <p className="text-sm">“{tx(q.quote)}”</p>
            <footer className="mt-3 text-xs font-semibold text-muted">{tx(q.by)}</footer>
          </blockquote>
        ))}
      </section>
    </div>
  );
}
