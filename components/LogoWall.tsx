export function LogoWall() {
  const logos = ["ClientOne", "ClientTwo", "ClientThree", "ClientFour", "ClientFive", "ClientSix"];
  return (
    <div className="card p-6">
      <div className="text-sm text-zinc-400 mb-4">Förtroende från team inom SaaS, IT och finans</div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
        {logos.map(l => (
          <div key={l} className="h-10 rounded bg-zinc-800/60 flex items-center justify-center">{l}</div>
        ))}
      </div>
    </div>
  );
}
