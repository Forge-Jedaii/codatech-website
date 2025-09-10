"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animation fadeUp
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const OArkContent = () => {
  return (
    <div className="space-y-20 p-4 sm:p-6 md:p-10">
      {/* Section Titre */}
      <motion.section
        className="text-center space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          O.A.R.K
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Entrez dans une nouvelle ère où le sport et le jeu vidéo se
          rencontrent. Devenez le héros de votre propre aventure.
        </p>
      </motion.section>

      {/* Qu’est ce qu’O-A.R.K ? */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Qu’est ce qu’O-A.R.K ?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          O.A.R.K est une technologie immersive qui combine le sport, la réalité
          augmentée et la gamification. Grâce à nos capteurs intégrés dans les
          armes en mousse et l&apos;armure, chaque combat devient un jeu vidéo en temps réel,
          projeté sur écran.
          Dans ce nouveau jeu immersif et sécurisé, l’habilité du joueur est mise à l’épreuve dans des battle épiques. Que ce soit pour affronter ses amis, collègues ou confrères dans des combats amicaux ou pour devenir le champion incontesté, O-A.R.K vous permettra de vivre une expérience immersive unique et intense.
        </p>
      </motion.section>

      {/* Comment cela fonctionne ? */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Comment cela fonctionne ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            number="1"
            title="Connexion"
            description="Les armes en mousse sont équipées de capteurs reliés à la Battle Box."
            color="blue"
          />
          <StepCard
            number="2"
            title="Projection"
            description="Les actions sont retransmises en temps réel sur écran avec effets visuels et sonores."
            color="green"
          />
          <StepCard
            number="3"
            title="Gameplay"
            description="Les joueurs combattent librement comme dans un jeu vidéo grandeur nature."
            color="purple"
          />
        </div>
      </motion.section>

      {/* En résumé */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          En résumé
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 text-lg">
          <li>Technologie sans fil, rapide et fiable</li>
          <li>Armes sécurisées en mousse adaptées à tous les âges</li>
          <li>Scores affichés en direct</li>
          <li>Multijoueur jusqu’à 50 personnes</li>
          <li>Facile à installer et transporter</li>
        </ul>
      </motion.section>

      {/* Interfaces */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Les interfaces
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          L’interface O.A.R.K permet de suivre en temps réel l’évolution du
          combat : barres de vie, effets visuels et statistiques affichées à
          l’écran comme dans un jeu vidéo.
        </p>
        <Image
          src="/images/materiel.png"
          width={900}
          height={600}
          alt="Interface O.A.R.K"
          className="rounded-lg shadow-lg mx-auto"
        />
      </motion.section>

      {/* Le matériel de jeu */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={5}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Le matériel de jeu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <Image
            src="/images/hardware.png"
            width={600}
            height={400}
            alt="Matériel O.A.R.K"
            className="rounded-lg shadow-lg"
          />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Sabres, katanas, épées médiévales ou haches : toutes nos armes en
            mousse sont compatibles avec O.A.R.K. Elles intègrent des capteurs
            qui détectent les coups, parades et impacts, et retranscrivent
            l’action instantanément dans le jeu.
          </p>
        </div>
      </motion.section>

      {/* À qui est-ce destiné ? */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={6}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          À qui est-ce destiné ?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          O.A.R.K s’adresse aussi bien aux{" "}
          <span className="font-semibold text-blue-600">professionnels</span>
          (salles de sport, centres de loisirs, événements) qu’aux{" "}
          <span className="font-semibold text-green-600">particuliers</span>
          (familles, amis, associations). Une activité fun, immersive et
          sécurisée, adaptée à tous les âges.
        </p>
      </motion.section>
    </div>
  );
};

type StepCardProps = {
  number: string;
  title: string;
  description: string;
  color: "blue" | "green" | "purple";
};

const StepCard = ({ number, title, description, color }: StepCardProps) => {
  const colors = {
    blue: "border-blue-500 hover:border-blue-700",
    green: "border-green-500 hover:border-green-700",
    purple: "border-purple-500 hover:border-purple-700",
  };

  return (
    <div
      className={`bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md border-2 transition-all duration-300 transform hover:scale-105 ${colors[color]}`}
    >
      <div className="text-3xl font-extrabold mb-2 text-gray-900 dark:text-white">
        {number}
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default OArkContent;
