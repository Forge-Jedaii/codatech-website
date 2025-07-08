import React from 'react';

const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-10 h-10 border-4 border-slate-700 border-t-cyan-400 rounded-full animate-spin mb-8 mx-auto"></div>
      <div className="text-4xl font-bold text-cyan-400 mb-4 animate-pulse font-mono">CODATECH</div>
      <div className="text-cyan-400 font-mono">Initializing...</div>
    </div>
  </div>
);

export default LoadingScreen;