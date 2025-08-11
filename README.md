# TGC Web — Webbyråstarter (Next.js 14 + Tailwind)

Snabb, konverteringsfokuserad sajt för The Growth Company. Klar att bygga ut.

## Kom igång

```bash
pnpm i
pnpm dev
# eller
npm i
npm run dev
```

Öppna http://localhost:3000

## Struktur

- `app/` – App Router-sidor
- `components/` – Återanvändbara UI-block
- `content/` – Copy och case (JSON)
- `lib/` – Hjälpfunktioner
- `public/` – Statisk media
- `app/kontakt` – Formulär med enkel POST‑stub

## Anpassa

- Ändra copy i `content/copy.ts`
- Lägg till case i `content/case/*.json`
- Byt loggor i `components/LogoWall.tsx` och `public/`

## Deploy

- Vercel: importera repo → Build command `next build` → Output `.vercel/output` hanteras automatiskt
- Sätt ev. miljönycklar i `.env` (se `env.example`)

## Codex‑tips

Klistra in denna README i Codex och be den:
- generera fler komponenter (Testimonials, Blogg/MDX)
- lägga in Schema.org JSON‑LD
- skapa sitemap/robots
- integrera Settr/Calendly i `/bokning`
