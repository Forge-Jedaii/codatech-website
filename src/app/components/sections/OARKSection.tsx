import React from 'react';
import { Cpu, Zap, Users } from 'lucide-react';

const OARKSection: React.FC = () => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6">OARK</h1>
    <div className="space-y-6">
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-cyan-400/20">
        <h3 className="text-2xl font-bold text-purple-400 mb-4">Qu&apos;est-ce que OARK ?</h3>
        <p className="text-gray-300 mb-4">
          OARK est bien plus qu&apos;un simple jeu. C&apos;est un écosystème complet qui redéfinit 
          l&apos;expérience gaming à travers des technologies de pointe et une communauté passionnée.
        </p>
        <div className="grid-cols-3 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
            <Cpu className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-sm text-gray-300">Armure intelligente</div>
          </div>
          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-sm text-gray-300">Données en temps réel</div>
          </div>
          <div className="text-center p-4 bg-slate-700/30 rounded-lg">
            <Users className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <div className="text-sm text-gray-300">Communauté</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OARKSection;