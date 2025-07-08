import React from 'react';
import { Mail, Github } from 'lucide-react';

const ContactSection: React.FC = () => (
  <div className="space-y-8">
    <h1 className="text-4xl font-bold text-cyan-400 mb-6">Contact</h1>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20">
        <h3 className="text-xl font-bold text-purple-400 mb-4">Nous Contacter</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">contact@oark.io</span>
          </div>
          <div className="flex items-center space-x-3">
            <Github className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-300">github.com/oark</span>
          </div>
        </div>
      </div>
      <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-400/20">
        <h3 className="text-xl font-bold text-purple-400 mb-4">Suivez-nous</h3>
        <p className="text-gray-300">
          Restez connecté pour les dernières nouvelles et mises à jour de l&apos;univers OARK.
        </p>
      </div>
    </div>
  </div>
);

export default ContactSection;