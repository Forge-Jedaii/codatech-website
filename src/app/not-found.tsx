import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050505] px-6 text-[#f5f5f5]">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[.2em] text-[#4f9cf9]">Erreur 404</p>
        <h1 className="mt-6 text-6xl font-medium tracking-[-.06em] md:text-8xl">Hors réseau.</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#9ca3af]">Cette expérience n’existe pas encore.</p>
        <Link href="/" className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black">Retour à CODATECH</Link>
      </div>
    </main>
  );
}
