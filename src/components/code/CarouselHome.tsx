import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carouselhome: React.FC = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: { perView: 4, spacing: 15 },
        mode: "free-snap",
        initial: 0,
        slideChanged() {
            // Optionnel: vous pouvez ajouter une logique ici si nécessaire
        },
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

    // Fonction pour aller à la slide précédente
    const goToPrevious = () => {
        instanceRef.current?.prev();
    };

    // Fonction pour aller à la slide suivante
    const goToNext = () => {
        instanceRef.current?.next();
    };

    return (
        <div className="h-[350px] w-full bg-slate-900/60 rounded-2xl p-4 border border-cyan-400/20 shadow-inner relative">
            {/* Flèche gauche */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 border border-cyan-400/30 rounded-full p-3 text-cyan-400 hover:text-cyan-300 transition-all duration-200 shadow-lg hover:shadow-cyan-400/20"
                aria-label="Slide précédente"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
            </button>

            {/* Flèche droite */}
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 border border-cyan-400/30 rounded-full p-3 text-cyan-400 hover:text-cyan-300 transition-all duration-200 shadow-lg hover:shadow-cyan-400/20"
                aria-label="Slide suivante"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
            </button>

            <div ref={sliderRef} className="keen-slider min-h-[300px]">
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