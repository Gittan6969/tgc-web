import Link from "next/link";
import type { CaseItem } from "@/lib/cases";

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <div className="card p-6 space-y-2">
      <div className="text-sm text-emerald-400">{item.industry}</div>
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-zinc-300">{item.summary}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {item.stats.map(s => <span key={s} className="kpi-chip">{s}</span>)}
      </div>
      <Link href={`/case/${item.slug}`} className="text-emerald-400 hover:underline mt-3 inline-block">Läs case →</Link>
    </div>
  );
}
