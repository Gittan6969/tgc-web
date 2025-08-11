export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm text-zinc-400">
        <div>
          <div className="font-semibold text-white">The Growth Company</div>
          <p>Webbyrå • Performance Marketing</p>
          <p className="mt-2">hello@thegrowthcompany.co</p>
        </div>
        <div>
          <div className="font-semibold text-white">Snabblänkar</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/tjanster">Tjänster</a></li>
            <li><a href="/case">Case</a></li>
            <li><a href="/om">Om oss</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Juridik</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/integritet">Integritet</a></li>
            <li><a href="/cookies">Cookies</a></li>
            <li>Org.nr: 559000-0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <div className="container py-6 text-xs text-zinc-500">© {new Date().getFullYear()} The Growth Company</div>
      </div>
    </footer>
  );
}
