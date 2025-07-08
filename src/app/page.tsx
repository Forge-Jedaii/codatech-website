"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Users, Mail, Menu } from 'lucide-react';
import { NavItem, Section } from './types';
import Header from './components/ui/Header';
import Sidebar from './components/ui/Sidebar';
import LoadingScreen from './components/ui/LoadingScreen';
import LandingPage from './components/ui/LandingPage';
import IntroModal from './components/ui/IntroModal';
import MainContent from './components/MainContent';

const OARKWebsite: React.FC = () => {
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentSection, setCurrentSection] = useState<Section>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Accueil', icon: <Terminal className="w-4 h-4" /> },
    { id: 'battle-sword', label: 'Battle Sword', icon: <Shield className="w-4 h-4" /> },
    { id: 'oark', label: 'OARK', icon: <Cpu className="w-4 h-4" /> },
    { id: 'about', label: 'À propos', icon: <Users className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Fermer la sidebar quand on clique en dehors ou qu'on change de section
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleEnterUniverse = () => {
    setShowIntroModal(true);
  };

  const handleImageClick = () => {
    setIsRevealed(true);
    setTimeout(() => setShowIntroModal(false), 800);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(34,211,238,0.3)_1px,transparent_0)] bg-[length:40px_40px] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-cyan-900/30"></div>
      
      {/* Header */}
      <Header 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        navItems={navItems}
      />

      {/* Menu Hamburger pour mobile (visible uniquement quand isRevealed est true) */}
      {isRevealed && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Main Content */}
      <main className="pt-20">
        {!isRevealed ? (
          <LandingPage onEnterUniverse={handleEnterUniverse} />
        ) : (
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="hidden lg:block w-64">
              <Sidebar 
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                navItems={navItems}
                isOpen={sidebarOpen}
                onClose={closeSidebar}
              />
            </div>
            
            {/* Sidebar mobile (overlay) */}
            <div className="lg:hidden">
              <Sidebar 
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                navItems={navItems}
                isOpen={sidebarOpen}
                onClose={closeSidebar}
              />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 lg:ml-0">
              <MainContent currentSection={currentSection} />
            </div>
          </div>
        )}
      </main>

      {/* Intro Modal */}
      {showIntroModal && (
        <IntroModal 
          isRevealed={isRevealed}
          onImageClick={handleImageClick}
        />
      )}
    </div>
  );
};

export default OARKWebsite;