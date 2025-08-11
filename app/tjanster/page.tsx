import { services } from "@/content/copy";

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Tjänster</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {services.map(s => (
          <div key={s.id} id={s.id} className="card p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="text-zinc-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
