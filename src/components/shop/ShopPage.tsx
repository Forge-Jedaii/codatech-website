"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Box, Check, Package, Palette, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";

const whatsapp = "https://wa.me/33617114620?text=Bonjour%20CODATECH%2C%20je%20souhaite%20recevoir%20des%20informations%20sur%20la%20boutique.";
const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] as const } } };

const products = [
  { title: "Malle Essential", type: "Format compact", copy: "Le nécessaire pour lancer rapidement une arène BattleSword à deux joueurs.", icon: Package, tag: "Mobilité maximale" },
  { title: "Malle Event", type: "Format intermédiaire", copy: "Plus d'équipements et d'autonomie pour les animations, entreprises et événements.", icon: Box, tag: "Le format polyvalent" },
  { title: "Malle Arena", type: "Grand format", copy: "Une configuration complète conçue pour les flux importants et les exploitants professionnels.", icon: ShoppingBag, tag: "Usage intensif" },
  { title: "Borne personnalisée", type: "Sur mesure", copy: "Habillage, couleurs, interface et signalétique adaptés à votre marque ou à votre lieu.", icon: Palette, tag: "Votre identité" },
  { title: "Boîte à thème", type: "Univers de jeu", copy: "Pirate, médiéval, futuriste ou création originale : accessoires et ambiance prêts à déployer.", icon: Sparkles, tag: "Expérience scénarisée" },
  { title: "Pack armes & protections", type: "Accessoires", copy: "Katanas, sabres, épées et protections en mousse compatibles avec nos systèmes.", icon: ShieldCheck, tag: "Compatible O.A.R.K" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}>{children}</motion.div>;
}

export function ShopPage() {
  return <main className="noise overflow-hidden bg-[#050505] text-[#f5f5f5]">
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4"><nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/[.08] bg-black/70 px-5 backdrop-blur-xl"><Link href="/" className="text-sm font-semibold tracking-[.2em]">CODATECH</Link><Link href="/" className="flex items-center gap-2 text-xs text-[#a6aab1]"><ArrowLeft size={14}/> Retour</Link><a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">Demander un devis</a></nav></header>

    <section className="relative px-6 pb-24 pt-40 md:pb-36 md:pt-52"><div className="grid-bg absolute inset-0"/><div className="absolute right-[18%] top-[18%] h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]"/><div className="absolute left-[20%] top-[35%] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]"/><motion.div initial="hidden" animate="visible" variants={{visible:{transition:{staggerChildren:.1}}}} className="relative mx-auto max-w-6xl"><motion.p variants={reveal} className="eyebrow mb-7">CODATECH Store</motion.p><motion.h1 variants={reveal} className="max-w-5xl text-balance text-6xl font-medium leading-[.9] tracking-[-.065em] md:text-8xl">L'expérience,<br/><span className="bg-gradient-to-r from-[#78baff] via-[#55e1d0] to-[#ed72b3] bg-clip-text text-transparent">prête à déployer.</span></motion.h1><motion.p variants={reveal} className="mt-8 max-w-xl text-base leading-7 text-[#9ca3af]">Découvrez nos configurations BattleSword, nos équipements et les options de personnalisation conçues pour les événements et les professionnels.</motion.p></motion.div></section>

    <section className="px-6 pb-28 md:pb-40"><div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">{products.map(({title,type,copy,icon:Icon,tag},i)=><Reveal key={title}><article className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#0b0b0b] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/20"><div className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 ${i%2 ? "bg-[radial-gradient(circle_at_80%_10%,rgba(236,72,153,.12),transparent_40%)]" : "bg-[radial-gradient(circle_at_80%_10%,rgba(34,211,238,.12),transparent_40%)]"}`}/><div className="relative flex items-start justify-between"><span className="glass grid h-12 w-12 place-items-center rounded-2xl"><Icon size={19} className={i%2 ? "text-[#ed72b3]" : "text-[#67d9e8]"}/></span><span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#858b94]">{tag}</span></div><div className="relative mt-auto"><p className="eyebrow mb-3">{type}</p><h2 className="text-2xl font-medium tracking-tight">{title}</h2><p className="mt-4 text-sm leading-6 text-[#8f949c]">{copy}</p><a href={`${whatsapp}%20Produit%20%3A%20${encodeURIComponent(title)}`} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-xs text-[#78b5ff]">En savoir plus <ArrowRight size={14}/></a></div></article></Reveal>)}</div></section>

    <section className="border-y border-white/[.06] bg-[#0b0b0b] px-6 py-28"><div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2"><Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#111]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,156,249,.18),transparent_55%)]"/><Image src="/images/borne.png" alt="Borne BattleSword personnalisable" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-contain p-12"/></div></Reveal><Reveal><p className="eyebrow mb-5">Configuration personnalisée</p><h2 className="text-balance text-4xl font-medium tracking-[-.045em] md:text-6xl">Votre borne. Votre univers.</h2><p className="mt-6 max-w-lg text-base leading-7 text-[#9ca3af]">Nous adaptons chaque configuration à votre activité, votre public et votre identité. Le catalogue présente les bases : notre équipe compose ensuite la solution qui vous correspond.</p><div className="mt-8 space-y-3">{["Choix de la taille de malle", "Habillage et interface personnalisés", "Boîtes à thème et accessoires", "Formation et support technique"].map(item=><p key={item} className="flex items-center gap-3 text-sm text-[#b5b9c0]"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#4f9cf9]/10 text-[#78b5ff]"><Check size={12}/></span>{item}</p>)}</div></Reveal></div></section>

    <section className="px-6 py-32 text-center md:py-48"><Reveal className="mx-auto max-w-4xl"><p className="eyebrow mb-6">Parlons configuration</p><h2 className="text-balance text-5xl font-medium tracking-[-.055em] md:text-7xl">Quel format correspond à votre projet ?</h2><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black">Échanger sur WhatsApp <ArrowRight size={16}/></a><a href="mailto:contact@oark.fr" className="mx-auto mt-5 block w-fit text-sm text-[#858b94]">contact@oark.fr</a></Reveal></section>
  </main>;
}
