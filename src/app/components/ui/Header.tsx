import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { NavItem, Section } from '../../types';
import Image from 'next/image';

interface HeaderProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({}) => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-cyan-400/20">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
          <Image
                src="/COD_solo.png"
                width={500}
                height={500}
                alt="Logo de codatech"
              />
        </div>
        <span className="text-2xl font-bold text-cyan-400 font-mono">CODATECH</span>
      </div>

      <div className="hidden md:flex items-center px-3 py-1.5 bg-slate-800 text-gray-200 rounded-lg border border-cyan-400/20 shadow-inner focus-within:ring-2 focus-within:ring-cyan-400">
        <input
          type="text"
          placeholder="Rechercher..."
          className="bg-transparent outline-none text-sm font-mono placeholder-gray-400"
        />
      </div>
      <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/o_ark.io/" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://oark.io" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;