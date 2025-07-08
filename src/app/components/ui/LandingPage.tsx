import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface LandingPageProps {
  onEnterUniverse: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterUniverse }) => (
  <div className="min-h-screen flex flex-col items-center justify-center relative px-6">
    <div className="text-center space-y-8 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          CODATECH
        </h1>
        <p className="text-xl md:text-2xl text-cyan-300 font-mono">
          Entrez dans l&apos;univers du gaming futuriste
        </p>
      </div>

      <div className="relative space-y-6">
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Découvrez une nouvelle dimension du gaming avec la technologie OARK. 
          Une expérience immersive où la technologie rencontre l&apos;art du jeu.
        </p>

        <button
          onClick={onEnterUniverse}
          className="group relative z-20 inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-mono font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
        >
          <span className="relative z-10">Entrez dans l&apos;univers CODATECH</span>
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Image positionnée sous le bouton */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-10 pointer-events-none">
          <Image
            src="/arene.png"
            width={1000}
            height={1000}
            alt="Logo de codatech"
            className="opacity-80"
          />
        </div>
      </div>
    </div>

    {/* Floating Elements */}
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
  </div>
);

export default LandingPage;
