import Link from "next/link";
import { hero } from "@/content/copy";
import { KPIBar } from "./KPIBar";
import { LogoWall } from "./LogoWall";

export function Hero() {
  return (
    <section className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{hero.title}</h1>
          <ul className="space-y-2 text-zinc-300">
            {hero.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="kpi-chip">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Link href="/bokning" className="btn-primary">{hero.ctaPrimary}</Link>
            <Link href="/case" className="btn-ghost">{hero.ctaSecondary}</Link>
          </div>
        </div>
        <div className="card p-6">
          <video className="w-full rounded-lg" autoPlay muted loop playsInline>
            <source src="" type="video/mp4" />
          </video>
          <p className="mt-3 text-sm text-zinc-400">Demo-yta (video/animation) – byt ut vid behov.</p>
        </div>
      </div>
      <KPIBar />
      <LogoWall />
    </section>
  );
}
