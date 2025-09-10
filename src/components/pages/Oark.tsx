"use client";
import React from "react";
import Image from "next/image";

const OArkContent = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">O.ARK</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Qu&apos;est ce qu&apos;O-A.R.K ?  
            Comment cela fonctionne ?
            Vous êtes le héros de votre propre aventure
          </p>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">10+</div>
            <div className="text-xs sm:text-sm text-gray-500">Années d&apos;expérience</div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Notre technologie innovante permet de combiner le sport ainsi que le monde virtuel des jeux vidéos, alliant compétences et gamification.
          </p>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-600">50 joueurs max</div>
            <div className="text-xs sm:text-sm text-gray-500">Mode multijoueur</div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm md:col-span-2 lg:col-span-1">
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Notre entreprise se spécialise dans le développement de solutions innovantes 
            pour les défis technologiques modernes.
          </p>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">50+</div>
            <div className="text-xs sm:text-sm text-gray-500">Clients satisfaits</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg">
          <Image
            src="/images/hardware.png"
            width={700}
            height={700}
            alt="Logo de CODATECH"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OArkContent;
