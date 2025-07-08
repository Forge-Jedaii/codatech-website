import React from 'react';

const HomeSection: React.FC = () => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6">Accueil</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20">
        <h3 className="text-xl font-bold text-purple-400 mb-4">Dernières Nouvelles</h3>
        <p className="text-gray-300">Découvrez les dernières mises à jour et fonctionnalités de l&apos;univers OARK.</p>
      </div>
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20">
        <h3 className="text-xl font-bold text-purple-400 mb-4">Communauté</h3>
        <p className="text-gray-300">Rejoignez notre communauté de gamers et partagez vos expériences.</p>
      </div>
    </div>
  </div>
);

export default HomeSection;