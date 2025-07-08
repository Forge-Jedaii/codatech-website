import React from 'react';
import { NavItem, Section } from '../../types';

interface SidebarProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, setCurrentSection, navItems }) => (
  <nav className="fixed left-0 top-20 h-full w-64 bg-slate-900/90 backdrop-blur-lg border-r border-cyan-400/20 p-6 space-y-4 overflow-y-auto">
    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => setCurrentSection(item.id as Section)}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-mono ${
          currentSection === item.id
            ? 'bg-cyan-400/20 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
        }`}
      >
        {item.icon}
        <span>{item.label}</span>
      </button>
    ))}
  </nav>
);

export default Sidebar;