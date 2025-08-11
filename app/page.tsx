import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/content/copy";
import { Testimonial } from "@/components/Testimonial";
import { Pricing } from "@/components/Pricing";
import { ProcessSteps } from "@/components/ProcessSteps";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Vad vi gör</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {services.map(s => <ServiceCard key={s.id} title={s.title} desc={s.desc} href={`/tjanster#${s.id}`} />)}
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Så jobbar vi</h2>
        <ProcessSteps />
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Prispaket</h2>
        <Pricing />
      </section>
      <Testimonial />
    </div>
  );
}
