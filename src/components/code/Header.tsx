"use client";
import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import styled from 'styled-components';

// Composant de recherche animé intégré
const AnimatedSearchInput = () => {
  return (
    <StyledWrapper>
      <div>
        <div id="poda">
          <div className="glow" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="darkBorderBg" />
          <div className="white" />
          <div className="border" />
          <div id="main">
            <input placeholder="Rechercher..." type="text" name="text" className="input" />
            <div id="input-mask" />
            <div id="pink-mask" />
            <div className="filterBorder" />
            <div id="filter-icon">
              <svg preserveAspectRatio="none" height={27} width={27} viewBox="4.8 4.56 14.832 15.408" fill="none">
                <path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="#d6d6e6" strokeWidth={1} strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div id="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" height={24} fill="none" className="feather feather-search">
                <circle stroke="url(#search)" r={8} cy={11} cx={11} />
                <line stroke="url(#searchl)" y2="16.65" y1={22} x2="16.65" x1={22} />
                <defs>
                  <linearGradient gradientTransform="rotate(50)" id="search">
                    <stop stopColor="#f8e7f8" offset="0%" />
                    <stop stopColor="#b6a9b7" offset="50%" />
                  </linearGradient>
                  <linearGradient id="searchl">
                    <stop stopColor="#b6a9b7" offset="0%" />
                    <stop stopColor="#837484" offset="50%" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .white,
  .border,
  .darkBorderBg,
  .glow {
    max-height: 50px;
    max-width: 280px;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -1;
    border-radius: 10px;
    filter: blur(2px);
  }
  
  .input {
    background-color: rgba(15, 23, 42, 0.9);
    border: none;
    width: 270px;
    height: 40px;
    border-radius: 8px;
    color: white;
    padding-inline: 50px 45px;
    font-size: 14px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  }
  
  #poda {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .input::placeholder {
    color: #64748b;
  }

  .input:focus {
    outline: none;
  }

  #main:focus-within > #input-mask {
    display: none;
  }

  #input-mask {
    pointer-events: none;
    width: 80px;
    height: 15px;
    position: absolute;
    background: linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.9));
    top: 13px;
    left: 55px;
  }
  
  #pink-mask {
    pointer-events: none;
    width: 25px;
    height: 15px;
    position: absolute;
    background: #22d3ee;
    top: 8px;
    left: 4px;
    filter: blur(15px);
    opacity: 0.6;
    transition: all 2s;
  }
  
  #main:hover > #pink-mask {
    opacity: 0;
  }

  .white {
    max-height: 43px;
    max-width: 275px;
    border-radius: 8px;
    filter: blur(1.5px);
  }

  .white::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(83deg);
    position: absolute;
    width: 400px;
    height: 400px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.2);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0) 0%,
      #22d3ee,
      rgba(0, 0, 0, 0) 8%,
      rgba(0, 0, 0, 0) 50%,
      #a855f7,
      rgba(0, 0, 0, 0) 58%
    );
    transition: all 2s;
  }
  
  .border {
    max-height: 42px;
    max-width: 273px;
    border-radius: 8px;
    filter: blur(0.5px);
  }
  
  .border::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(70deg);
    position: absolute;
    width: 400px;
    height: 400px;
    filter: brightness(1.1);
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #1e293b,
      #22d3ee 5%,
      #1e293b 14%,
      #1e293b 50%,
      #a855f7 60%,
      #1e293b 64%
    );
    transition: all 2s;
  }
  
  .darkBorderBg {
    max-height: 45px;
    max-width: 278px;
  }
  
  .darkBorderBg::before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(82deg);
    position: absolute;
    width: 400px;
    height: 400px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #1e40af,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0) 50%,
      #7c3aed,
      rgba(0, 0, 0, 0) 60%
    );
    transition: all 2s;
  }
  
  #poda:hover > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(-98deg);
  }
  #poda:hover > .glow::before {
    transform: translate(-50%, -50%) rotate(-120deg);
  }
  #poda:hover > .white::before {
    transform: translate(-50%, -50%) rotate(-97deg);
  }
  #poda:hover > .border::before {
    transform: translate(-50%, -50%) rotate(-110deg);
  }

  #poda:focus-within > .darkBorderBg::before {
    transform: translate(-50%, -50%) rotate(442deg);
    transition: all 4s;
  }
  #poda:focus-within > .glow::before {
    transform: translate(-50%, -50%) rotate(420deg);
    transition: all 4s;
  }
  #poda:focus-within > .white::before {
    transform: translate(-50%, -50%) rotate(443deg);
    transition: all 4s;
  }
  #poda:focus-within > .border::before {
    transform: translate(-50%, -50%) rotate(430deg);
    transition: all 4s;
  }

  .glow {
    overflow: hidden;
    filter: blur(20px);
    opacity: 0.3;
    max-height: 80px;
    max-width: 300px;
  }
  
  .glow:before {
    content: "";
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(60deg);
    position: absolute;
    width: 600px;
    height: 600px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(
      #000,
      #22d3ee 5%,
      #000 38%,
      #000 50%,
      #a855f7 60%,
      #000 87%
    );
    transition: all 2s;
  }

  #filter-icon {
    position: absolute;
    top: 6px;
    right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    max-height: 28px;
    max-width: 28px;
    height: 100%;
    width: 100%;
    isolation: isolate;
    overflow: hidden;
    border-radius: 6px;
    background: linear-gradient(180deg, #334155, #1e293b, #475569);
    border: 1px solid transparent;
  }
  
  .filterBorder {
    height: 30px;
    width: 30px;
    position: absolute;
    overflow: hidden;
    top: 5px;
    right: 5px;
    border-radius: 6px;
  }

  .filterBorder::before {
    content: "";
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    position: absolute;
    width: 400px;
    height: 400px;
    background-repeat: no-repeat;
    background-position: 0 0;
    filter: brightness(1.2);
    background-image: conic-gradient(
      rgba(0, 0, 0, 0),
      #475569,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 50%,
      #475569,
      rgba(0, 0, 0, 0) 100%
    );
    animation: rotate 4s linear infinite;
  }
  
  #main {
    position: relative;
  }
  
  #search-icon {
    position: absolute;
    left: 15px;
    top: 8px;
  }

  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(450deg);
    }
  }
`;

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-cyan-400/20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/images/COD_solo.png"
                width={300}
                height={300}
                alt="Logo de codatech"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 font-mono">
              CODATECH
            </span>
          </div>

          {/* Desktop Animated Search Bar */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <AnimatedSearchInput />
          </div>

          {/* Mobile Search Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors mr-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" fill="none" className="feather feather-search">
                <circle stroke="currentColor" r={8} cy={11} cx={11} />
                <line stroke="currentColor" y2="16.65" y1={22} x2="16.65" x1={22} />
              </svg>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
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
        </div>

        {/* Mobile Animated Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden mt-3 transition-all duration-200 flex justify-center">
            <div className="scale-90">
              <AnimatedSearchInput />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;