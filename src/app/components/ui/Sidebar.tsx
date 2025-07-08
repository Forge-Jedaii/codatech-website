import React from 'react';
import { NavItem, Section } from '../../types';

interface SidebarProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  navItems: NavItem[];
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentSection, 
  setCurrentSection, 
  navItems, 
  isOpen = false,
  onClose 
}) => (
  <>
    {/* Overlay pour mobile uniquement */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
    )}
    
    {/* Sidebar - Version desktop intacte + overlay mobile */}
    <nav className={`
      fixed left-0 top-20 h-full w-64 bg-slate-900/90 backdrop-blur-lg border-r border-cyan-400/20 p-6 flex flex-col pt-6 overflow-y-auto
      lg:translate-x-0 lg:z-auto lg:space-y-8
      space-y-4
      ${isOpen ? 'translate-x-0 z-50' : '-translate-x-full z-50'}
      transition-transform duration-300 ease-in-out lg:transition-none
    `}>
      {/* Bouton de fermeture pour mobile seulement */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors lg:hidden"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setCurrentSection(item.id as Section);
            onClose?.(); // Fermer la sidebar sur mobile après sélection
          }}
          className={`w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-mono ${
            currentSection === item.id
              ? 'bg-cyan-400/20 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)]'
              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  </>
);

export default Sidebar;