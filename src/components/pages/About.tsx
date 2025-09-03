"use client";

import React from "react";
import CardOldSchool from "../code/CardOldSchool";

const AProposContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">À propos</h2>
      
      {/* Première ligne avec CardOldSchool */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:block hidden"></div>
        <div className="flex justify-center">
          <CardOldSchool />
        </div>
      </div>
      
      {/* Deuxième ligne avec trois cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoCard
          number="10+"
          color="text-blue-600"
          label="Années d'expérience"
          description="Notre entreprise se spécialise dans le développement de solutions innovantes pour les défis technologiques modernes."
        />
        <InfoCard
          number="500+"
          color="text-green-600"
          label="Projets réalisés"
          description="Notre entreprise se spécialise dans le développement de solutions innovantes pour les défis technologiques modernes."
        />
        <InfoCard
          number="50+"
          color="text-purple-600"
          label="Clients satisfaits"
          description="Notre entreprise se spécialise dans le développement de solutions innovantes pour les défis technologiques modernes."
          colSpan="md:col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
};

type InfoCardProps = {
  number: string;
  color: string;
  label: string;
  description: string;
  colSpan?: string;
};

const InfoCard = ({ number, color, label, description, colSpan }: InfoCardProps) => {
  return (
    <div className={`bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm ${colSpan || ""}`}>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">{description}</p>
      <div className="text-center">
        <div className={`text-2xl sm:text-3xl font-bold ${color}`}>{number}</div>
        <div className="text-xs sm:text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
};

export default AProposContent;
