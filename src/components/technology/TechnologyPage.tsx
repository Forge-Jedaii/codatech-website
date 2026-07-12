"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, MapPin, Radio, ShieldCheck, Users, Wifi } from "lucide-react";

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] as const } } };
const whatsapp = "https://wa.me/33617114620?text=Bonjour%20CODATECH%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20vos%20technologies.";

type Product = "oark" | "battlesword";

const content = {
  oark: {
    label: "O.A.R.K — Immersive system",
    title: "Devenez le héros de votre propre jeu.",
    intro: "O.A.R.K combine sport, technologies connectées et gamification. Chaque mouvement devient une donnée, chaque combat une expérience interactive projetée en temps réel.",
    hero: "/images/materiel.png",
    heroAlt: "Deux joueurs équipés du système O.A.R.K connecté à un écran",
    steps: [["Connexion", "Les armes et équipements en mousse intègrent des capteurs reliés à la Battle Box."], ["Projection", "Impacts, parades et actions sont retransmis sur écran avec effets visuels et sonores."], ["Gameplay", "Les joueurs se déplacent librement et combattent comme dans un jeu vidéo grandeur nature."]],
    features: ["Technologie sans fil, rapide et fiable", "Armes sécurisées en mousse", "Scores et barres de vie en direct", "Multijoueur jusqu'à 50 personnes", "Installation simple et transportable", "Interfaces et scénarios personnalisables"],
    detailTitle: "Le réel devient interface.",
    detailCopy: "Sabres, katanas, épées médiévales ou haches : les équipements compatibles détectent les coups, parades et impacts. L'interface restitue instantanément barres de vie, effets et statistiques.",
    detailImage: "/images/hardware.png",
    detailAlt: "Détail de l'équipement connecté O.A.R.K",
    audience: "O.A.R.K s'adresse aux professionnels comme aux particuliers : salles de sport, centres de loisirs, événements, associations, familles et groupes d'amis.",
  },
  battlesword: {
    label: "BattleSword — Connected duel",
    title: "Le duel connecté. Libre. Immédiat.",
    intro: "BattleSword est un duel d'épée connecté et autonome. Déplacez-vous librement dans l'arène et vivez une expérience physique, immersive et sécurisée, en famille, entre amis ou collègues.",
    hero: "/images/READY.png",
    heroAlt: "Univers BattleSword avec borne d'arcade et duel connecté",
    steps: [["Préparation", "Installez la Battle Box, lancez la partie et préparez les épées connectées."], ["Objectif", "Touchez votre adversaire pour faire descendre sa barre de vie avant la fin du temps."], ["Fin du duel", "Suivez les scores en direct sur écran ou LEDs et savourez l'adrénaline du résultat."]],
    features: ["Liberté totale, sans câble ni armure", "Protection en mousse sécurisée", "Équipement modulable dès 6 ans", "Wi-Fi haute vitesse intégré", "Jusqu'à 6 heures d'autonomie", "Katana, sabre, épée pirate ou médiévale"],
    detailTitle: "La borne d'arcade, réinventée.",
    detailCopy: "Une expérience autonome avec retour visuel et sonore, idéale pour les événements et lieux de loisirs. Deux joueurs s'affrontent par arène avec scores affichés en direct.",
    detailImage: "/images/borne.png",
    detailAlt: "Borne d'arcade BattleSword",
    audience: "Disponible partout en France pour les entreprises, anniversaires, centres aérés et campings. La licence professionnelle inclut formation et support pour salles VR, parcs de loisirs, escape games ou kartings.",
  },
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }}>{children}</motion.div>;
}

export function TechnologyPage({ product }: { product: Product }) {
  const data = content[product];
  const battleFeatures = [
    ["/images/picto1.png", "Liberté de mouvement", "Sans câbles ni armures, déplacez-vous et combattez librement."],
    ["/images/picto4.png", "Sécurité optimale", "Des protections en mousse pensées pour protéger chaque joueur."],
    ["/images/picto3.png", "Pour tous les âges", "Un équipement modulable dès 6 ans, pour enfants et adultes."],
    ["/images/picto6.png", "Sans fil", "Wi-Fi haute vitesse intégré pour jouer partout, sans restriction."],
    ["/images/picto5.png", "6 h d'autonomie", "Jouez longtemps et sans interruption pendant vos événements."],
    ["/images/picto2.png", "Multijoueur", "Deux joueurs par arène, avec les scores affichés en direct."],
    ["/images/picto7.png", "Armes multiples", "Katana, sabre, épée pirate ou médiévale avec protection mousse."],
  ];
  return <main className="noise overflow-hidden bg-[#050505] text-[#f5f5f5]">
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4"><nav className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-white/[.08] bg-black/70 px-5 backdrop-blur-xl"><Link href="/" className="text-sm font-semibold tracking-[.2em]">CODATECH</Link><Link href="/" className="flex items-center gap-2 text-xs text-[#a6aab1] transition hover:text-white"><ArrowLeft size={14}/> Retour</Link><a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">Nous contacter</a></nav></header>

    <section className="relative min-h-screen px-6 pb-20 pt-32"><div className="grid-bg absolute inset-0"/><div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]"><motion.div initial="hidden" animate="visible" variants={{visible:{transition:{staggerChildren:.1}}}}><motion.p variants={reveal} className="eyebrow mb-7">{data.label}</motion.p><motion.h1 variants={reveal} className="text-balance text-5xl font-medium leading-[.95] tracking-[-.06em] md:text-7xl">{data.title}</motion.h1><motion.p variants={reveal} className="mt-7 max-w-xl text-base leading-7 text-[#9ca3af] md:text-lg">{data.intro}</motion.p><motion.a variants={reveal} href={whatsapp} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black">Organiser une expérience <ArrowRight size={15}/></motion.a></motion.div><Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#0b0b0b]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,156,249,.15),transparent_55%)]"/><Image src={data.hero} alt={data.heroAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain p-5"/></div></Reveal></div></section>

    <section className="border-y border-white/[.06] bg-[#0b0b0b] px-6 py-28 md:py-40"><div className="mx-auto max-w-6xl"><Reveal><p className="eyebrow mb-5">Comment ça fonctionne</p><h2 className="max-w-3xl text-4xl font-medium tracking-[-.045em] md:text-6xl">Simple à lancer. Impossible à oublier.</h2></Reveal><div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[.08] bg-white/[.08] md:grid-cols-3">{data.steps.map(([title, copy], i) => <Reveal key={title} className="min-h-64 bg-[#0b0b0b] p-8"><span className="font-mono text-xs text-[#4f9cf9]">0{i + 1}</span><h3 className="mt-20 text-2xl font-medium">{title}</h3><p className="mt-4 text-sm leading-6 text-[#8d929a]">{copy}</p></Reveal>)}</div></div></section>

    {product === "battlesword" ? <section className="px-6 py-28 md:py-40"><div className="mx-auto max-w-6xl"><Reveal><p className="eyebrow mb-5">Pourquoi BattleSword ?</p><h2 className="max-w-3xl text-4xl font-medium tracking-[-.045em] md:text-6xl">Moins de contraintes. Plus de jeu.</h2></Reveal><div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{battleFeatures.map(([image, title, copy]) => <Reveal key={title}><article className="group flex min-h-72 flex-col items-center rounded-3xl border border-white/[.08] bg-[#0b0b0b] p-6 text-center transition hover:-translate-y-1 hover:border-[#ec4899]/25"><div className="relative h-28 w-32"><Image src={image} alt="" fill sizes="128px" className="object-contain mix-blend-screen"/></div><h3 className="mt-5 text-base font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-[#8f949c]">{copy}</p></article></Reveal>)}</div></div></section> : <section className="px-6 py-28 md:py-40"><div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2"><Reveal><p className="eyebrow mb-5">En résumé</p><h2 className="text-4xl font-medium tracking-[-.045em] md:text-6xl">Pensé pour jouer. Conçu pour durer.</h2></Reveal><div className="grid gap-3 sm:grid-cols-2">{data.features.map((feature) => <Reveal key={feature}><div className="flex min-h-28 items-start gap-4 rounded-2xl border border-white/[.08] bg-[#0b0b0b] p-5"><span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#4f9cf9]/10 text-[#70b1ff]"><Check size={14}/></span><p className="text-sm leading-6 text-[#b7bbc2]">{feature}</p></div></Reveal>)}</div></div></section>}

    {product === "oark" && <section className="border-y border-white/[.06] bg-[#0b0b0b] px-6 py-28 md:py-40"><div className="mx-auto max-w-6xl"><Reveal><p className="eyebrow mb-5">Prochains formats</p><h2 className="max-w-4xl text-balance text-4xl font-medium tracking-[-.045em] md:text-6xl">Le terrain de jeu devient immense.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-[#9ca3af]">CODATECH prépare des expériences collectives en intérieur comme en extérieur, dans des lieux remarquables sélectionnés pour leur décor et leur potentiel de jeu.</p></Reveal><div className="mt-16 grid gap-4 md:grid-cols-3">{[["Battle Royale", "Des affrontements à grande échelle où stratégie, mouvement et alliances font la différence."], ["Hunger Games", "Les armes attendent au centre du terrain. À chacun de choisir sa trajectoire dès le signal."], ["Highlander", "Des duels et éliminations successives jusqu'à ce qu'il n'en reste plus qu'un."]].map(([title,copy],i)=><Reveal key={title}><article className="relative min-h-72 overflow-hidden rounded-3xl border border-white/[.08] bg-[#111] p-7"><div className={`absolute inset-0 ${i===1 ? "bg-[radial-gradient(circle_at_75%_20%,rgba(236,72,153,.15),transparent_42%)]" : "bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,.13),transparent_42%)]"}`}/><MapPin size={19} className="relative text-[#7ebaff]"/><div className="absolute bottom-7 left-7 right-7"><h3 className="text-2xl font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-[#8f949c]">{copy}</p></div></article></Reveal>)}</div></div></section>}

    <section className="bg-[#0b0b0b] px-6 py-28 md:py-40"><div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2"><Reveal><div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/[.08] bg-[#111]"><Image src={data.detailImage} alt={data.detailAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8"/></div></Reveal><Reveal><p className="eyebrow mb-5">L'expérience</p><h2 className="text-balance text-4xl font-medium tracking-[-.045em] md:text-6xl">{data.detailTitle}</h2><p className="mt-7 max-w-lg text-base leading-7 text-[#9ca3af]">{data.detailCopy}</p>{product === "battlesword" && <p className="mt-5 max-w-lg text-sm leading-7 text-[#8d929a]">La borne s'adapte à chaque organisateur : plusieurs tailles de malles sont disponibles selon le nombre de joueurs et le volume de matériel. Des boîtes à thème permettent également d'ajuster l'univers visuel, les accessoires et le scénario à l'événement attendu.</p>}<div className="mt-9 flex gap-3"><span className="glass grid h-12 w-12 place-items-center rounded-2xl"><Radio size={18} className="text-[#78b5ff]"/></span><span className="glass grid h-12 w-12 place-items-center rounded-2xl"><ShieldCheck size={18} className="text-[#78b5ff]"/></span><span className="glass grid h-12 w-12 place-items-center rounded-2xl"><Wifi size={18} className="text-[#78b5ff]"/></span><span className="glass grid h-12 w-12 place-items-center rounded-2xl"><Users size={18} className="text-[#78b5ff]"/></span></div></Reveal></div></section>

    <section className="px-6 py-28 text-center md:py-44"><Reveal className="mx-auto max-w-4xl"><p className="eyebrow mb-6">Événements & distribution</p><h2 className="text-balance text-4xl font-medium tracking-[-.05em] md:text-7xl">Une expérience qui s'adapte à votre terrain.</h2><p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#969ba4]">{data.audience}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black">Parler à notre équipe <ArrowRight size={16}/></a><a href="mailto:contact@oark.io" className="mx-auto mt-5 block w-fit text-sm text-[#858b94]">contact@oark.io</a></Reveal></section>

    <footer className="border-t border-white/[.08] px-6 py-9"><div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-[#777d86]"><Link href="/" className="font-semibold tracking-[.2em] text-white">CODATECH</Link><p>© {new Date().getFullYear()} CODATECH</p></div></footer>
  </main>;
}
