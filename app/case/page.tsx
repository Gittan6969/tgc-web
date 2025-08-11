import { getAllCases } from "@/lib/cases";
import { CaseCard } from "@/components/CaseCard";

export default function CasePage() {
  const items = getAllCases();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Case</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(i => <CaseCard key={i.slug} item={i} />)}
      </div>
    </div>
  );
}
