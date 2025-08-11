const tiers = [
  { name: "Start", price: "Från 25 000 kr", points: ["1-3 sidor", "Grund-SEO", "Snabb leverans"] },
  { name: "Pro", price: "Från 55 000 kr", points: ["5-10 sidor", "CRO-basutrustning", "PageSpeed-optimering"] },
  { name: "Scale", price: "Från 95 000 kr", points: ["10+ sidor", "Komponentbibliotek", "Tillväxt & experiments"] }
];

export function Pricing() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {tiers.map(t => (
        <div key={t.name} className="card p-6">
          <div className="text-emerald-400 text-sm">{t.name}</div>
          <div className="text-2xl font-bold mt-1">{t.price}</div>
          <ul className="mt-4 space-y-2 text-zinc-300">
            {t.points.map(p => <li key={p}>• {p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
