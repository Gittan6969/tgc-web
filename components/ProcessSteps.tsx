import { process } from "@/content/copy";

export function ProcessSteps() {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {process.map((s, i) => (
        <div key={s.title} className="card p-5">
          <div className="text-sm text-zinc-400">Steg {i+1}</div>
          <div className="text-lg font-semibold">{s.title}</div>
          <p className="text-zinc-300 mt-2">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
