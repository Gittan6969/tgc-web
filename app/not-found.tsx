import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-2">Sidan hittas inte</h1>
      <p className="text-zinc-400">Hoppsan. Låt oss ta dig hem igen.</p>
      <Link className="btn-primary mt-6 inline-block" href="/">Till startsidan</Link>
    </div>
  );
}
