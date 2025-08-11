"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { sendContact } from "@/app/kontakt/actions";
import useRecaptcha from "@/lib/useRecaptcha";

const schema = z.object({
  name: z.string().min(2, "Ange ditt namn"),
  email: z.string().email("Ogiltig e-post"),
  reason: z.enum(["prototyp", "offert", "ovrigt"]),
  message: z.string().min(10, "Skriv lite mer för att förstå ditt behov"),
  honey: z.string().max(0).optional()
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const { execute } = useRecaptcha();

  const onSubmit = async (data: FormData) => {
    try {
      const token = await execute();
      const res = await sendContact({ ...data, token });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("honey")} />
      <div>
        <label className="block text-sm mb-1">Namn</label>
        <input className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-3" {...register("name")} />
        {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">E-post</label>
        <input className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-3" {...register("email")} />
        {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm mb-1">Ärende</label>
        <select className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-3" {...register("reason")}>
          <option value="prototyp">Kostnadsfri prototyp</option>
          <option value="offert">Offert</option>
          <option value="ovrigt">Allmänt</option>
        </select>
      </div>
      <div>
        <label className="block text-sm mb-1">Meddelande</label>
        <textarea rows={5} className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 p-3" {...register("message")} />
        {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>}
      </div>
      <button className="btn-primary" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Skickar..." : "Skicka"}
      </button>
      {status === "ok" && <p className="text-emerald-400">Tack! Vi återkommer samma dag.</p>}
      {status === "err" && <p className="text-red-400">Något gick fel. Testa igen.</p>}
    </form>
  );
}
