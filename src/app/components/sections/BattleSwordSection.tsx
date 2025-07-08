import React from 'react';
import { Shield } from 'lucide-react';

const BattleSwordSection: React.FC = () => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6">Battle Sword</h1>
    <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-400/20">
      <h3 className="text-2xl font-bold text-purple-400 mb-4">L&apos;Épée de Combat Ultime</h3>
      <p className="text-gray-300 mb-6">
        Battle Sword représente l&apos;alliance parfaite entre tradition et innovation. 
        Le jeu vidéo d’affrontement multi armes, est une expérience immersive et innovante mêlant activité physique et technologie. Dans ce concept unique de réalité augmentée, oubliez clavier, souris et manette : votre habileté est mise à l’épreuve avec une arme enveloppée d&apos;une mousse protectrice. Que vous cherchiez à défier vos amis, collègues ou confrères dans des combats épiques, ou à décrocher le titre de champion incontesté, BattleSword vous promet des sensations fortes et des moments inoubliables dans un environnement sécurisé.
      </p>
      <div className="flex space-x-4">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-lg">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-cyan-400">Puissance Maximum</h4>
          <p className="text-sm text-gray-400">Dégâts augmentés de 300%</p>
        </div>
      </div>
    </div>
  </div>
);

export default BattleSwordSection;