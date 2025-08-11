import { ProcessSteps } from "@/components/ProcessSteps";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Om TGC</h1>
      <p className="text-zinc-300 max-w-2xl">
        TGC kombinerar modern webbutveckling med konverteringsdriven design. Vi levererar
        mätbara resultat: fler möten, högre hitrate och bättre ROAS.
      </p>
      <h2 className="text-2xl font-semibold">Metodik</h2>
      <ProcessSteps />
      <div className="card p-6">
        <h3 className="text-xl font-semibold">Team</h3>
        <p className="text-zinc-300 mt-2">Lägg in era profiler här.</p>
      </div>
    </div>
  );
}
