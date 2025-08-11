"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="TGC" width={140} height={28} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/tjanster" className="text-zinc-300 hover:text-white">Tjänster</Link>
          <Link href="/case" className="text-zinc-300 hover:text-white">Case</Link>
          <Link href="/om" className="text-zinc-300 hover:text-white">Om</Link>
          <Link href="/blogg" className="text-zinc-300 hover:text-white">Blogg</Link>
          <Link href="/kontakt" className="btn-ghost">Kontakt</Link>
          <Link href="/bokning" className="btn-primary">Boka prototyp</Link>
        </nav>
        <button className="md:hidden btn-ghost" onClick={() => setOpen(!open)}>Meny</button>
      </div>
      {open && (
        <div className="md:hidden container pb-4">
          <div className="flex flex-col gap-2">
            <Link href="/tjanster">Tjänster</Link>
            <Link href="/case">Case</Link>
            <Link href="/om">Om</Link>
            <Link href="/blogg">Blogg</Link>
            <Link href="/kontakt" className="btn-ghost w-max">Kontakt</Link>
            <Link href="/bokning" className="btn-primary w-max">Boka prototyp</Link>
          </div>
        </div>
      )}
    </header>
  );
}
