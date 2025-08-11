import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold">Kontakt</h1>
      <p className="text-zinc-300">Berätta vad du vill uppnå – vi återkommer samma dag.</p>
      <ContactForm />
    </div>
  );
}
