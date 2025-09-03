"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carouselhome: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    drag: true, // 🔹 active le drag tactile
    rubberband: true, // 🔹 ajoute un effet de “rebond” naturel
  });

  const items = [
    {
      title: "🎮 Dernières Nouvelles",
      description:
        "Découvrez les dernières mises à jour et fonctionnalités de l'univers OARK. Plongez dans un monde de possibilités infinies.",
      backgroundImage: "from-purple-900/80 via-blue-900/80 to-cyan-900/80",
      accentColor: "purple-400",
    },
    {
      title: "👾 Communauté",
      description:
        "Rejoignez notre communauté de gamers et partagez vos expériences. Connectez-vous avec des millions de joueurs dans le monde entier.",
      backgroundImage: "from-green-900/80 via-teal-900/80 to-blue-900/80",
      accentColor: "green-400",
    },
    {
      title: "📅 Événements",
      description:
        "Retour sur la Japan Expo 2025 et autres moments forts de l'année. Revivez les moments épiques et découvrez ce qui vous attend ensuite.",
      backgroundImage: "from-orange-900/80 via-red-900/80 to-pink-900/80",
      accentColor: "orange-400",
    },
    {
      title: "⚔️ Tournois",
      description:
        "Affrontez d'autres joueurs dans des combats épiques et classements eSport. Montez dans les classements et prouvez que vous êtes le meilleur joueur.",
      backgroundImage: "from-red-900/80 via-purple-900/80 to-blue-900/80",
      accentColor: "red-400",
    },
  ];

  return (
    <div className="relative w-full h-[60vh] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-slate-900 border border-cyan-400/30 shadow-2xl">
      
      {/* Boutons de navigation */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-black/70 transition-all shadow-xl"
      >
        ◀
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-black/70 transition-all shadow-xl"
      >
        ▶
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider h-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="keen-slider__slide relative h-full min-w-full"
          >
            {/* Fond */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.backgroundImage} opacity-90`}
            />

            {/* Contenu */}
            <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
              <h2
                className={`font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6`}
                style={{ color: `#${item.accentColor}` }}
              >
                {item.title}
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bullets */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carouselhome;
