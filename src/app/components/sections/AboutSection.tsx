import React from 'react';

const AboutSection: React.FC = () => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6">À propos</h1>
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-400/20">
      <h3 className="text-2xl font-bold text-purple-400 mb-4">Notre Vision</h3>
      <p className="text-gray-300 mb-6">
        Chez OARK, nous croyons que le gaming est l&apos;art du futur. Nous créons des expériences 
        immersives qui repoussent les limites de ce qui est possible.
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          <span className="text-gray-300">Innovation constante</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          <span className="text-gray-300">Communauté au centre</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
          <span className="text-gray-300">Qualité premium</span>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;