import Link from "next/link";

export function ServiceCard({ title, desc, href }: { title: string; desc: string; href: string; }) {
  return (
    <div className="card p-6 space-y-3">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-zinc-300">{desc}</p>
      <Link href={href} className="text-emerald-400 hover:underline">Läs mer →</Link>
    </div>
  );
}
