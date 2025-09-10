"use client";

import React from "react";
import CardOldSchool from "../code/CardOldSchool";
import Image from "next/image";

const AProposContent = () => {
  return (
    <div className="space-y-10">
      {/* Section titre */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">
        À propos de CODATECH
      </h2>

      {/* Présentation CODATECH + CardOldSchool */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            CODATECH est une entreprise spécialisée dans le développement de
            technologies innovantes qui allient sport, divertissement et
            réalité augmentée. Nos solutions transforment l’expérience du
            combat sportif et de l’animation en mélangeant **jeu vidéo et
            réalité**.
          </p>
        </div>
        <div className="flex justify-center">
          <CardOldSchool />
        </div>
      </div>

      {/* Les directeurs */}
      <section>
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          Les Directeurs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DirectorCard
            name="Anthony LOCOCO"
            role="Directeur Général"
            image="/images/director1.jpg"
            description="Image de la société, Anthony est en charge de la stratégie globale et du développement commercial de CODATECH."
          />
          <DirectorCard
            name="Jehan GUILLOT"
            role="Directeur Technique"
            image="/images/director2.jpg"
            description="Expert en ingénierie électronique, Jehan est le maître d'œuvre de la technologie O.A.R.K."
          />
          <DirectorCard
            name="Damien PINAUDEAU"
            role="Directeur Opérationnel"
            image="/images/director3.jpg"
            description="Spécialiste en organisation et logistique, Damien supervise l'administration et ressources de CODATECH."
          />
        </div>
      </section>

      {/* Technologies */}
      <section>
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          Nos Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechCard
            title="O.A.R.K"
            description="Un système qui permet aux combattants de devenir les héros de leur propre jeu vidéo, projeté en temps réel sur écran avec barres de vie, stream, multijoueurs et animations."
            image="/images/oark.png"
          />
          <TechCard
            title="BattleSword"
            description="Une technologie innovante qui transforme n’importe quelle arme (katana, hache, sabre laser, etc.) en périphérique interactif, connecté à nos systèmes immersifs."
            image="/images/battlesword.png"
          />
        </div>
      </section>

      {/* Prestations */}
      <section>
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
          Nos Prestations
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Vente" />
          <ServiceCard title="Installation" />
          <ServiceCard title="Mise à jour" />
          <ServiceCard title="Upgrade" />
          <ServiceCard title="Animations" />
          <ServiceCard title="Événements" />
        </div>
      </section>
    </div>
  );
};

type DirectorCardProps = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const DirectorCard = ({ name, role, image, description }: DirectorCardProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden p-4 sm:p-6 text-center">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
      />
      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h4>
      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{role}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

type TechCardProps = {
  title: string;
  description: string;
  image: string;
};

const TechCard = ({ title, description, image }: TechCardProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="mb-4 w-32 h-32 object-contain"
      />
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

type ServiceCardProps = {
  title: string;
};

const ServiceCard = ({ title }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-4 sm:p-6 text-center hover:shadow-lg transition">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
    </div>
  );
};

export default AProposContent;
