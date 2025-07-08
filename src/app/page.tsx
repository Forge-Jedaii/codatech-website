"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Users, Mail } from 'lucide-react';
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

  const handleEnterUniverse = () => {
    setShowIntroModal(true);
  };

  const handleImageClick = () => {
    setIsRevealed(true);
    setTimeout(() => setShowIntroModal(false), 800);
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

      {/* Main Content */}
      <main className="pt-20">
        {!isRevealed ? (
          <LandingPage onEnterUniverse={handleEnterUniverse} />
        ) : (
          <div className="flex min-h-screen">
  <div className="hidden md:block w-64">
    <Sidebar 
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
      navItems={navItems}
    />
  </div>
  <div className="flex-1">
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