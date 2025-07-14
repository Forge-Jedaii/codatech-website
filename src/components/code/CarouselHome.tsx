import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carouselhome: React.FC = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: { perView: 4, spacing: 15 },
        mode: "free-snap",
      });
    
      const items = [
        {
          title: "🎮 Dernières Nouvelles",
          description: "Découvrez les dernières mises à jour et fonctionnalités de l'univers OARK.",
        },
        {
          title: "👾 Communauté",
          description: "Rejoignez notre communauté de gamers et partagez vos expériences.",
        },
        {
          title: "📅 Événements",
          description: "Retour sur la Japan Expo 2025 et autres moments forts de l'année.",
        },
        {
          title: "⚔️ Tournois",
          description: "Affrontez d'autres joueurs dans des combats épiques et classements eSport.",
        },
      ];
    
      return (
        <div className="h-full w-full bg-slate-900/60 rounded-2xl p-4 border border-cyan-400/20 shadow-inner">
          <div ref={sliderRef} className="keen-slider">
            {items.map((item, i) => (
              <div
                key={i}
                className="keen-slider__slide min-h-[200px] bg-slate-800/60 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(34,211,238,0.2)] transition-all hover:scale-[1.03] hover:shadow-cyan-400/40"
              >
                <h3 className="text-2xl font-bold text-purple-400 mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Carouselhome;
