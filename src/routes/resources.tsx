import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { labs, sheets, videos } from "@/data/catalog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "TDS, SDS & Lab Reports | Oxilar Bangladesh" },
      { name: "description", content: "Technical data sheets, safety sheets and BUET, CUET, BCSIR reference reports for Oxilar products." },
    ],
  }),
  component: Page,
});

function Page() {
  const { tx, lang } = useI18n();
  const [q, setQ] = useState("");
  const [kind, setKind] = useState("All");
  const rows = useMemo(
    () => sheets.filter((s) => (kind === "All" || s.kind === kind) && `${s.product} ${s.kind}`.toLowerCase().includes(q.toLowerCase())),
    [q, kind],
  );
  const bn = lang === "bn";
  return (
    <div className="container-site py-10">
      <h1 className="text-4xl font-semibold">{bn ? "টিডিএস, এসডিএস ও ল্যাব" : "TDS, SDS and lab"}</h1>
      <p className="mt-2 max-w-2xl text-muted">
        {bn ? "শিটগুলো ডেমো ডকুমেন্ট। মাঠে ব্যবহারের আগে স্বাক্ষরিত কপি নিন।" : "These sheets are demo documents. Take a signed copy before field use."}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input value={q} onChange={(e) => setQ(e.target.value)} className="h-12 flex-1 rounded-md border border-line px-3" placeholder={bn ? "পণ্য খুঁজুন" : "Search product"} />
        <div className="flex gap-2">
          {["All", "TDS", "SDS", "Manual"].map((k) => (
            <button key={k} type="button" onClick={() => setKind(k)} className={`min-h-12 rounded-full px-4 text-sm font-semibold ${kind === k ? "bg-ink text-paper" : "bg-card ring-1 ring-line"}`}>{k}</button>
          ))}
        </div>
      </div>
      <div className="mt-4 overflow-x-auto rounded-xl bg-card ring-1 ring-line">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="bg-paper text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">{bn ? "ধরন" : "Type"}</th>
              <th className="px-4 py-3 font-medium">{bn ? "পণ্য" : "Product"}</th>
              <th className="px-4 py-3 font-medium">{bn ? "ফাইল" : "File"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-line">
                <td className="px-4 py-3 font-semibold text-sky">{r.kind}</td>
                <td className="px-4 py-3">{r.product}</td>
                <td className="px-4 py-3">
                  <a className="font-semibold text-brand" href={r.file}>{bn ? "খুলুন" : "Open"}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mt-12 text-2xl font-semibold">{bn ? "ল্যাব রেফারেন্স" : "Lab references"}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {labs.map((l) => (
          <article key={l.id} className="rounded-xl bg-card p-5 ring-1 ring-line">
            <p className="text-xs font-semibold tracking-widest text-amber">{l.body}</p>
            <h3 className="mt-2 text-lg font-semibold">{tx(l.title)}</h3>
            <p className="mt-2 text-sm text-muted">{tx(l.note)}</p>
            <a className="mt-4 inline-flex min-h-11 items-center font-semibold text-brand" href={l.file}>{bn ? "রিপোর্ট" : "Report"}</a>
          </article>
        ))}
      </div>
      <h2 className="mt-12 text-2xl font-semibold">{bn ? "প্রয়োগ নোট" : "Application notes"}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {videos.map((v) => (
          <article key={v.title.en} className="rounded-xl bg-ink p-5 text-paper">
            <p className="text-xs text-amber">{v.length} · {bn ? "গাইড" : "Guide"}</p>
            <h3 className="mt-2 text-lg font-semibold text-paper">{tx(v.title)}</h3>
            <p className="mt-2 text-sm text-paper/75">{tx(v.body)}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
