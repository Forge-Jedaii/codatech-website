import React from 'react';
import { Instagram, ExternalLink, Search, Menu, X } from 'lucide-react';
import { NavItem, Section } from '../../types';
import Image from 'next/image';

interface HeaderProps {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-cyan-400/20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/COD_solo.png"
                width={500}
                height={500}
                alt="Logo de codatech"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 font-mono">
              CODATECH
            </span>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <div className="flex items-center px-3 py-2 bg-slate-800 text-gray-200 rounded-lg border border-cyan-400/20 shadow-inner focus-within:ring-2 focus-within:ring-cyan-400 min-w-[200px]">
              <Search className="w-4 h-4 mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent outline-none text-sm font-mono placeholder-gray-400 w-full"
              />
            </div>
          </div>

          {/* Mobile Search Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors mr-2"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden sm:flex items-center space-x-2 lg:space-x-4 flex-shrink-0 ml-4">
            <a 
              href="https://www.instagram.com/o_ark.io/" 
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 lg:w-5 lg:h-5 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a 
              href="https://oark.io" 
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors ml-2"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden mt-3 transition-all duration-200">
            <div className="flex items-center px-3 py-2 bg-slate-800 text-gray-200 rounded-lg border border-cyan-400/20 shadow-inner focus-within:ring-2 focus-within:ring-cyan-400">
              <Search className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-transparent outline-none text-sm font-mono placeholder-gray-400 w-full"
              />
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-3 transition-all duration-200">
            <div className="bg-slate-800/80 rounded-lg p-3 border border-cyan-400/20 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id as Section);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 text-left ${
                      currentSection === item.id
                        ? 'bg-cyan-400 text-slate-900 shadow-lg'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile Social Links */}
              <div className="flex sm:hidden items-center justify-center space-x-4 mt-4 pt-3 border-t border-cyan-400/20">
                <a 
                  href="https://www.instagram.com/o_ark.io/" 
                  className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                </a>
                <a 
                  href="https://oark.io" 
                  className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;