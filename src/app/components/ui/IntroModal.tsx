import React from 'react';
// import { Zap } from 'lucide-react';
import Image from 'next/image';

interface IntroModalProps {
  isRevealed: boolean;
  onImageClick: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ isRevealed, onImageClick }) => (
  <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
    isRevealed ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
  }`}>
    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-lg"></div>
    <div className="relative flex flex-col justify-center items-center bg-slate-800/90 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-4 text-center border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
      <div 
        className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={onImageClick}
      >
        {/* <Zap className="w-16 h-16 text-white" /> */}
        <Image
      src="/COD_solo.png"
      width={500}
      height={500}
      alt="Logo de codatech"
    />
      </div>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">L&apos;aventure commence ici</h2>
      <div className="text-sm text-gray-400 font-mono">
        &gt; Cliquez sur le logo pour révéler l&apos;interface et commencer votre aventure.
      </div>
    </div>
  </div>
);

export default IntroModal;