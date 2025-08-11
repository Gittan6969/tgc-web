import { kpis } from "@/content/copy";

export function KPIBar() {
  return (
    <div className="flex flex-wrap gap-3">
      {kpis.map((k) => <span key={k} className="kpi-chip">{k}</span>)}
    </div>
  );
}
