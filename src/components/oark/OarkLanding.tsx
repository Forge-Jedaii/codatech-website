"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Gamepad2,
  Menu,
  PersonStanding,
  Play,
  ShoppingBag,
  Swords,
  Trophy,
  X,
} from "lucide-react";

const whatsapp = "https://wa.me/33617114620?text=Bonjour%20CODATECH%2C%20j%27aimerais%20%C3%A9changer%20sur%20un%20projet.";
const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const pillars = [
  { title: "Combat", label: "Affrontez", image: "/images/READY.png", icon: Swords, position: "object-center" },
  { title: "Mouvement", label: "Bougez", image: "/images/materiel.png", icon: PersonStanding, position: "object-center" },
  { title: "Jeu", label: "Vivez", image: "/images/hardware.png", icon: Gamepad2, position: "object-right" },
  { title: "Compétition", label: "Dépassez-vous", image: "/images/borne.png", icon: Trophy, position: "object-center" },
];

const services = [
  ["Anniversaires", "Leur journée. Leur arène.", "/images/READY.png"],
  ["Festivals", "Faites vibrer la foule.", "/images/materiel.png"],
  ["Team Building", "Une équipe. Un défi.", "/images/hardware.png"],
  ["Conventions", "L'animation qui rassemble.", "/images/borne.png"],
  ["EVG / EVJF", "Le duel dont on reparle.", "/images/READY.png"],
  ["Collectivités", "Le jeu prend la ville.", "/images/materiel.png"],
  ["Centres de loisirs", "Jouer, bouger, recommencer.", "/images/hardware.png"],
  ["Entreprises", "Activez le collectif.", "/images/borne.png"],
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="text-balance max-w-4xl text-4xl font-medium tracking-[-.05em] md:text-6xl">{title}</h2>
    </Reveal>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Expérience", "#experience"],
    ["Technologies", "#technologies"],
    ["Prestations", "#prestations"],
    ["Galerie", "#galerie"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav aria-label="Navigation principale" className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/[.08] bg-black/70 px-5 backdrop-blur-xl">
        <a href="#top" aria-label="CODATECH, accueil" className="flex items-center gap-3 text-sm font-semibold tracking-[.2em]">
          <Image src="/images/COD_solo.png" alt="" width={32} height={32} className="h-6 w-6 object-contain" />
          <span>CODATECH</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-[#a6aab1] md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="transition hover:text-white">{label}</a>)}
        </div>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-[#dcecff] md:block">Nous contacter</a>
        <button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Ouvrir le menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0b0b0b] p-4 md:hidden">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm text-[#b8bbc1]">{label}</a>)}
          <a href={whatsapp} target="_blank" rel="noreferrer" className="block rounded-xl px-3 py-3 text-sm text-white">Nous contacter</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/[.06] px-6 pb-16 pt-28">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -right-[12%] top-[6%] h-[620px] w-[620px] rounded-full bg-fuchsia-500/15 blur-[150px]" />
      <div className="absolute left-[20%] top-[25%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 pt-8">
          <motion.div variants={reveal} className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-300" />
            <span className="eyebrow">Sport × Gaming × Technology</span>
          </motion.div>
          <motion.h1 variants={reveal} className="text-[clamp(3.6rem,10vw,8.5rem)] font-semibold leading-[.8] tracking-[-.085em]">CODATECH</motion.h1>
          <motion.h2 variants={reveal} className="text-balance mt-9 max-w-2xl text-3xl font-medium leading-tight tracking-[-.045em] md:text-5xl">
            Don't watch the game.<br />
            <span className="bg-gradient-to-r from-[#73bcff] via-[#57e0d0] to-[#ed72b3] bg-clip-text text-transparent">Become the game.</span>
          </motion.h2>
          <motion.p variants={reveal} className="mt-6 max-w-md text-base leading-7 text-[#a1a6ae]">Combattez. Bougez. Marquez. Recommencez.</motion.p>
          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
            <a href="#experience" className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black">Voir l'expérience <ArrowDown size={15} className="transition group-hover:translate-y-1" /></a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-black/20 px-6 py-3.5 text-sm backdrop-blur transition hover:bg-white/[.07]">Organiser une partie</a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative min-h-[480px] lg:min-h-[680px]">
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#09111c] shadow-[0_40px_120px_rgba(0,0,0,.55)]">
            <Image src="/images/READY.png" alt="Expérience BattleSword en action" fill priority sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-black/20" />
            <motion.div animate={{ x: ["-120%", "140%"] }} transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2 }} className="absolute inset-y-0 w-28 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent blur-xl" />
          </div>
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity }} className="glass absolute bottom-8 left-5 flex items-center gap-4 rounded-2xl px-5 py-4 md:left-8">
            <span className="relative flex h-3 w-3"><i className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-60" /><i className="relative h-3 w-3 rounded-full bg-pink-500" /></span>
            <div><p className="font-mono text-[9px] uppercase tracking-widest text-white/45">Live experience</p><p className="mt-1 text-sm font-medium">Players connected</p></div>
          </motion.div>
          <div className="glass absolute right-5 top-8 rounded-2xl px-4 py-3 text-right md:right-8"><p className="text-2xl font-semibold">4.8<span className="text-sm text-cyan-300"> ms</span></p><p className="font-mono text-[9px] uppercase tracking-widest text-white/40">latency</p></div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="experience" className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="01 — En action" title="See the experience in action." />
        <Reveal>
          <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] shadow-[0_40px_120px_rgba(0,0,0,.45)] md:rounded-[2.5rem]">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/zGd-IyxM5R4?autoplay=1&rel=0"
                title="CODATECH — L'expérience en action"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full" aria-label="Lire la vidéo CODATECH">
                <Image src="/images/experience-video-cover.jpg" alt="Couverture de la vidéo BattleSword" fill sizes="100vw" className="object-cover opacity-85 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.2)_55%,rgba(0,0,0,.75)_100%)]" />
                <span className="glass absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black md:h-24 md:w-24">
                  <Play size={26} fill="currentColor" className="ml-1" />
                </span>
                <span className="absolute bottom-7 left-7 font-mono text-[10px] uppercase tracking-[.2em] text-white/60 md:bottom-10 md:left-10">Play experience — 01:30</span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section id="technologies" className="border-y border-white/[.06] bg-[#0b0b0b] px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="02 — Nos technologies" title="Deux façons d'entrer dans le jeu." />
        <div className="space-y-5">
          <Reveal>
            <article className="group grid overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-[#081b24] to-[#101119] lg:grid-cols-[1.15fr_.85fr]">
              <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
                <Image src="/images/materiel.png" alt="O.A.R.K, combat immersif connecté" fill sizes="(max-width:1024px) 100vw, 60vw" className="object-contain p-5 transition duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071218]/50 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12">
                <p className="eyebrow text-cyan-200/70">O.A.R.K — Immersive system</p>
                <div><h3 className="text-6xl font-semibold tracking-[-.07em] md:text-8xl">OARK</h3><p className="mt-5 max-w-sm text-lg text-white/60">Jusqu'à 50 joueurs. Un terrain. Zéro limite.</p><Link href="/oark" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Entrer dans OARK <ArrowRight size={15} /></Link></div>
                <div className="mt-12 grid grid-cols-3 gap-3">
                  {["/images/OARKrouge.png", "/images/hardware.png", "/images/OARK.png"].map((src, i) => <div key={src} className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/25"><Image src={src} alt="" fill sizes="150px" className={`object-contain ${i === 1 ? "p-2" : "p-4"}`} /></div>)}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="group grid overflow-hidden rounded-[2rem] border border-fuchsia-300/15 bg-gradient-to-br from-[#25101f] via-[#111322] to-[#07151e] lg:grid-cols-[.85fr_1.15fr]">
              <div className="flex flex-col justify-between p-8 md:p-12">
                <p className="eyebrow text-pink-200/70">BattleSword — Connected duel</p>
                <div><h3 className="text-5xl font-semibold tracking-[-.07em] md:text-7xl">BattleSword</h3><p className="mt-5 max-w-sm text-lg text-white/60">Deux joueurs. Six heures d'autonomie. Revanche illimitée.</p><Link href="/battlesword" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Lancer le duel <ArrowRight size={15} /></Link></div>
                <div className="mt-12 grid grid-cols-3 gap-3">
                  {["/images/borne.png", "/images/picto7.png", "/images/BSIMG1.png"].map(src => <div key={src} className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/25"><Image src={src} alt="" fill sizes="150px" className="object-contain p-3" /></div>)}
                </div>
              </div>
              <div className="relative min-h-[420px] overflow-hidden lg:order-last lg:min-h-[560px]">
                <Image src="/images/READY.png" alt="BattleSword, duel connecté" fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover transition duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#15101b]/50 via-transparent to-transparent" />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FourPillars() {
  return (
    <section className="px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="03 — L'expérience" title="Votre corps est la manette." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ title, label, image, icon: Icon, position }, index) => (
            <Reveal key={title}>
              <article className="group relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]">
                <Image src={image} alt="" fill sizes="(max-width:768px) 100vw, 25vw" className={`object-cover ${position} opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100`} />
                <div className={`absolute inset-0 bg-gradient-to-t ${index % 2 ? "from-[#071c25]" : "from-[#28101f]"} via-black/20 to-transparent`} />
                <div className="absolute inset-x-0 bottom-0 p-7"><Icon size={22} className={index % 2 ? "text-cyan-300" : "text-pink-400"} /><p className="mt-5 font-mono text-[9px] uppercase tracking-[.2em] text-white/45">{label}</p><h3 className="mt-2 text-3xl font-medium">{title}</h3></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="prestations" className="bg-[#0b0b0b] px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="04 — Prestations" title="On apporte l'arène. Vous créez les souvenirs." />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, copy, image], index) => (
            <motion.article variants={reveal} key={title} className={`group relative overflow-hidden rounded-3xl border border-white/10 ${index === 0 || index === 5 ? "min-h-[410px] lg:row-span-2" : "min-h-[265px]"}`}>
              <Image src={image} alt="" fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-95" />
              <div className={`absolute inset-0 bg-gradient-to-t ${index % 3 === 0 ? "from-[#27101f]" : index % 3 === 1 ? "from-[#071e26]" : "from-[#171128]"} via-black/35 to-transparent`} />
              <div className="absolute inset-x-0 bottom-0 p-6"><h3 className="text-xl font-medium">{title}</h3><p className="mt-2 text-sm text-white/55">{copy}</p></div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Numbers() {
  return (
    <section className="relative overflow-hidden border-y border-white/[.06] px-6 py-28">
      <Image src="/images/READY.png" alt="" fill sizes="100vw" className="object-cover opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-[#050505]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {[["100+", "événements"], ["5 000+", "participants"], ["10+", "ans d'expérience"], ["∞", "revanche"]].map(([number, label], i) => (
          <Reveal key={label}><p className={`text-5xl font-medium tracking-[-.06em] md:text-7xl ${i % 2 ? "text-cyan-200" : "text-pink-200"}`}>{number}</p><p className="mt-3 font-mono text-[10px] uppercase tracking-[.18em] text-white/45">{label}</p></Reveal>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const { scrollYProgress } = useScroll();
  const up = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const down = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section id="galerie" className="overflow-hidden px-6 py-24 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="05 — Galerie" title="Dans l'arène, tout change." />
        <div className="grid auto-rows-[190px] grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-6">
          <motion.div style={{ y: up }} className="group relative col-span-2 row-span-2 overflow-hidden rounded-[2rem] border border-white/10 md:col-span-3"><Image src="/images/READY.png" alt="Univers BattleSword" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /></motion.div>
          <motion.div style={{ y: down }} className="group relative col-span-1 row-span-2 overflow-hidden rounded-[2rem] border border-white/10 md:col-span-2"><Image src="/images/hardware.png" alt="Équipement O.A.R.K" fill sizes="33vw" className="object-cover object-right transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#211022]/70 to-transparent" /></motion.div>
          <div className="group relative col-span-1 overflow-hidden rounded-[2rem] border border-white/10 md:col-span-1"><Image src="/images/borne.png" alt="Borne BattleSword" fill sizes="20vw" className="object-contain bg-[#0b1822] p-4 transition duration-700 group-hover:scale-110" /></div>
          <div className="group relative col-span-1 overflow-hidden rounded-[2rem] border border-white/10 md:col-span-1"><Image src="/images/BSIMG1.png" alt="Logo BattleSword" fill sizes="20vw" className="object-contain bg-[#220d18] p-3 transition duration-700 group-hover:scale-110" /></div>
          <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[2rem] border border-white/10 md:col-span-3"><Image src="/images/materiel.png" alt="Combat connecté O.A.R.K" fill sizes="50vw" className="object-contain bg-gradient-to-br from-[#091d26] to-[#25101f] p-5 transition duration-700 group-hover:scale-105" /></div>
          <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[2rem] border border-white/10 md:col-span-3"><Image src="/images/OARKrouge.png" alt="Technologie O.A.R.K" fill sizes="50vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" /></div>
        </div>
      </div>
    </section>
  );
}

function ShopAndCta() {
  return (
    <>
      <section id="boutique" className="border-y border-white/[.06] bg-[#0b0b0b] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal><p className="eyebrow mb-5">06 — Boutique</p><h2 className="text-balance text-4xl font-medium tracking-[-.05em] md:text-6xl">Votre arène.<br />Votre univers.</h2><Link href="/boutique" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black">Explorer les équipements <ShoppingBag size={16} /></Link></Reveal>
          <Reveal><div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#071e26] via-[#141122] to-[#28101f]"><Image src="/images/borne.png" alt="Borne BattleSword personnalisable" fill sizes="50vw" className="object-contain p-8" /><div className="absolute right-6 top-6 rounded-full border border-pink-200/20 bg-pink-400/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-pink-100">Custom ready</div></div></Reveal>
        </div>
      </section>

      <section id="contact" className="relative min-h-[720px] overflow-hidden px-6 py-32 text-center md:py-48">
        <Image src="/images/READY.png" alt="" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_35%),linear-gradient(to_bottom,#050505_0%,rgba(5,5,5,.55)_40%,#050505_100%)]" />
        <Reveal className="relative mx-auto max-w-5xl pt-20"><p className="eyebrow mb-7 text-cyan-200/70">Ready player?</p><h2 className="text-balance text-5xl font-medium tracking-[-.06em] md:text-8xl">Your next battle starts here.</h2><a href={whatsapp} target="_blank" rel="noreferrer" className="group mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black">Entrer dans l'arène <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a><a href="mailto:contact@oark.io" className="mx-auto mt-5 block w-fit text-sm text-white/45 transition hover:text-white">contact@oark.io</a></Reveal>
      </section>
    </>
  );
}

export function CodatechLanding() {
  return (
    <main id="top" className="ambient-color noise overflow-hidden bg-[#050505] text-[#f5f5f5]">
      <Navigation />
      <Hero />
      <ExperienceVideo />
      <Technologies />
      <FourPillars />
      <Services />
      <Numbers />
      <Gallery />
      <ShopAndCta />
      <footer className="border-t border-white/[.08] px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 text-xs text-[#777d86] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3"><Image src="/images/COD_solo.png" alt="Logo CODATECH" width={32} height={32} className="h-7 w-7 object-contain" /><div><p className="font-semibold tracking-[.2em] text-white">CODATECH</p><p className="mt-1">Interactive technologies, made in France.</p></div></div>
          <div className="flex flex-wrap gap-6"><a href="#technologies" className="hover:text-white">Technologies</a><a href="#prestations" className="hover:text-white">Prestations</a><Link href="/boutique" className="hover:text-white">Boutique</Link><a href={whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></div>
          <p>© {new Date().getFullYear()} CODATECH</p>
        </div>
      </footer>
    </main>
  );
}
