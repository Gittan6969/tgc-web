import { getCaseBySlug } from "@/lib/cases";
import { notFound } from "next/navigation";

export default function CaseDetail({ params }: { params: { slug: string } }) {
  const item = getCaseBySlug(params.slug);
  if (!item) return notFound();
  return (
    <article className="space-y-4">
      <div className="text-sm text-emerald-400">{item.industry}</div>
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <div className="flex flex-wrap gap-2">
        {item.stats.map(s => <span key={s} className="kpi-chip">{s}</span>)}
      </div>
      <p className="text-zinc-300">{item.summary}</p>
      <div className="card p-6">Detaljerad case‑text (fyll på efter behov).</div>
    </article>
  );
}
