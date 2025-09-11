"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Variants pour animations scroll
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const BattleSword: React.FC = () => {
  return (
    <div className="space-y-24 p-4 sm:p-6 md:p-10">

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
          Battle Sword
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Duel d’épée connecté et autonome, où vous vous déplacez librement dans une arène. Une expérience immersive et sécurisée pour tous, en famille, entre amis ou collègues.
        </p>
      </motion.section>

      {/* Section vidéo */}
      <motion.section
        className="flex justify-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Cf-WV-SgBII"
            title="Battle Sword"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.section>

      {/* Section Avantages / fonctionnalités */}
      <motion.section
        className="space-y-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Pourquoi choisir Battle Sword ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Chaque card avec hover coloré */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900">
            <Image src="/images/picto1.png" width={200} height={200} alt="Liberté de mouvement" className="mb-4"/>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Liberté de mouvement</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Sans câbles ni armures, profitez d’une totale liberté pour vous déplacer et combattre.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-green-100 dark:hover:bg-green-900">
            <Image src="/images/picto4.png" width={110} height={110} alt="Sécurité" className="mb-4"/>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Sécurité optimale</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Garnissage en mousse pour une protection maximale des joueurs.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900">
            <Image src="/images/picto3.png" width={200} height={200} alt="Multijoueur" className="mb-4"/>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Adapté à tous les âges</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Équipement modulable dès 6 ans, pour enfants et adultes.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-yellow-100 dark:hover:bg-yellow-900">
            <Image src="/images/picto6.png" width={200} height={200} alt="Sans fil" className="mb-4"/>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Sans fil</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Wi-Fi haute vitesse intégré, jouez partout sans aucune restriction.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-pink-100 dark:hover:bg-pink-900">
            <Image src="/images/picto5.png" width={155} height={155} alt="Jouer longtemps" className="mb-4"/>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Jouer sans interruption</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Jusqu’à 6 heures d’utilisation continue pour profiter pleinement de l’expérience.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-orange-100 dark:hover:bg-orange-900">
            <Image src="/images/picto2.png" width={200} height={200} alt="Adapté aux jeunes" className="mb-4"/>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Multijoueur</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              2 joueurs par arène avec scores affichés en direct.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-900">
            <Image src="/images/picto7.png" width={200} height={200} alt="Armes multiples" className="mb-4"/>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Choisissez votre arme</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Katana, sabre laser, épée pirate ou médiévale avec protection mousse.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section Borne d’arcade */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <div className="md:w-1/2">
          <Image src="/images/ready.png" width={600} height={400} alt="Borne d'arcade Battle Sword" className="rounded-xl shadow-lg"/>
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">La Borne d’arcade</h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Une expérience immersive et rétro avec retour visuel et sonore, idéale pour événements et lieux de loisirs.
          </p>
        </div>
      </motion.section>

      {/* Section Comment jouer */}
<motion.section
  className="space-y-6 text-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={4}
>
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Comment jouer ?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">1. Préparation</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Installez la Battle Box, lancez la partie et préparez vos épées connectées.
      </p>
    </div>
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">2. Objectif</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Touchez vos adversaires pour faire descendre leur barre de vie. La partie se termine lorsqu’un joueur atteint 0 ou que le temps est écoulé.
      </p>
    </div>
    <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">3. Fin du duel</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Suivez les scores en direct sur écran ou LEDs et savourez l’adrénaline du duel.
      </p>
    </div>
  </div>
</motion.section>


      {/* Section Événements et distribution */}
      <motion.section
        className="space-y-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={5}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Événements et distribution</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Battle Sword est disponible partout en France pour tous types d’événements : soirées d’entreprise, team-building, anniversaires, centres aérés et campings.  
          Nous distribuons également la licence officielle Battle Sword pour les professionnels (salles VR, parcs de loisirs, escape games, karting, etc.) avec formation et support technique.
        </p>
      </motion.section>

      {/* Section Statistiques */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={6}
      >
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm">
          <div className="text-3xl font-bold text-blue-600">10+</div>
          <div className="text-gray-500 text-sm mt-2">Ans d’expérience dans le loisir</div>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm">
          <div className="text-3xl font-bold text-green-600">2</div>
          <div className="text-gray-500 text-sm mt-2">Joueurs simultanés par arène</div>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm">
          <div className="text-3xl font-bold text-purple-600">100000%</div>
          <div className="text-gray-500 text-sm mt-2">de fun</div>
        </div>
      </motion.section>

      {/* Section Conclusion */}
      <motion.section
        className="text-center space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={7}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Jouez sans limites</h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Une activité ludique et physique, adaptée à toutes les tranches d’âge, modulable et facile à installer. Battle Sword est le duel connecté ultime, sécurisé et fun, à refaire encore et encore !
        </p>
      </motion.section>

    </div>
  );
};

export default BattleSword;
