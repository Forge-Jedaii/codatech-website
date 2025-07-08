import React from 'react';
import { Section } from '../types';
import HomeSection from '../components/sections/HomeSection';
import BattleSwordSection from './sections/BattleSwordSection';
import OARKSection from './sections/OARKSection';
import AboutSection from './sections/AboutSection';
import ContactSection from '../components/sections/ContactSession';

interface MainContentProps {
  currentSection: Section;
}

const MainContent: React.FC<MainContentProps> = ({ currentSection }) => {
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection />;
      case 'battle-sword':
        return <BattleSwordSection />;
      case 'oark':
        return <OARKSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="flex-1 ml-64 p-8">
      <div className="max-w-4xl mx-auto">
        {renderSection()}
      </div>
    </div>
  );
};

export default MainContent;