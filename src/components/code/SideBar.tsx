"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconUserBolt,
  IconSwords,
  IconShieldHalfFilled,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../../app/lib/utils";
import Image from "next/image";
import Carouselhome from "./CarouselHome";
import Loader from "../ui/loader";
import Card from "./Cards";
import CardOldSchool from "./CardOldSchool";

export function SidebarDemo() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("nouveautes");

  const links = [
    {
      id: "nouveautes",
      label: "Nouveautés",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      id: "apropos",
      label: "À propos",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      id: "battlesword",
      label: "Battle Sword",
      href: "#",
      icon: (
        <IconSwords className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      id: "oark",
      label: "O.ARK",
      href: "#",
      icon: (
        <IconShieldHalfFilled className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      id: "contact",
      label: "Contact",
      href: "#",
      icon: (
        <IconMail className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      id: "logout",
      label: "Logout",
      href: "/404",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const handleLinkClick = (linkId: string) => {
    if (linkId === "logout") {
      window.location.href = "/404";
      return;
    }
    setActiveSection(linkId);
    // Fermer la sidebar sur mobile après la sélection
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div
                  key={idx}
                  onClick={() => handleLinkClick(link.id)}
                  className={cn(
                    "cursor-pointer rounded-lg px-2 py-2 transition-colors duration-200",
                    activeSection === link.id
                      ? "bg-blue-100 dark:bg-blue-900"
                      : "hover:bg-gray-100 dark:hover:bg-neutral-700"
                  )}
                >
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden sm:block">
            <SidebarLink
              link={{
                label: "Codatech",
                href: "#",
                icon: (
                  <Image
                    src="/images/COD_solo.png"
                    width={200}
                    height={200}
                    alt="Logo de CODATECH"
                    className="w-full h-auto max-w-[120px] sm:max-w-[200px]"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard activeSection={activeSection} />
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white text-xs sm:text-sm"
      >
        Tableau de bord
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

// Composants pour chaque section
const NouveautesContent = () => (
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Nouveautés</h2>
    
    <div className="grid grid-cols-1 gap-4">
      <div className="w-full">
        <Carouselhome/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  </div>
);

const AProposContent = () => (
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">À propos</h2>
    
    {/* Première ligne avec CardOldSchool */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="lg:block hidden"></div>
      <div className="flex justify-center">
        <CardOldSchool/>
      </div>
    </div>
    
    {/* Deuxième ligne avec trois cartes */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-600">10+</div>
          <div className="text-xs sm:text-sm text-gray-500">Années d&apos;expérience</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-green-600">500+</div>
          <div className="text-xs sm:text-sm text-gray-500">Projets réalisés</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm md:col-span-2 lg:col-span-1">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-purple-600">50+</div>
          <div className="text-xs sm:text-sm text-gray-500">Clients satisfaits</div>
        </div>
      </div>
    </div>
  </div>
);

const BattleSwordContent = () => (
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Battle Sword</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-600">10+</div>
          <div className="text-xs sm:text-sm text-gray-500">Années d&apos;expérience</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-green-600">500+</div>
          <div className="text-xs sm:text-sm text-gray-500">Projets réalisés</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm md:col-span-2 lg:col-span-1">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-purple-600">50+</div>
          <div className="text-xs sm:text-sm text-gray-500">Clients satisfaits</div>
        </div>
      </div>
    </div>
  </div>
);

const OArkContent = () => (
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">O.ARK</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Qu&apos;est ce qu&apos;O-A.R.K ?
          Comment cela fonctionne ?
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-blue-600">10+</div>
          <div className="text-xs sm:text-sm text-gray-500">Années d&apos;expérience</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-green-600">500+</div>
          <div className="text-xs sm:text-sm text-gray-500">Projets réalisés</div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm md:col-span-2 lg:col-span-1">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          Notre entreprise se spécialise dans le développement de solutions innovantes 
          pour les défis technologiques modernes.
        </p>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-purple-600">50+</div>
          <div className="text-xs sm:text-sm text-gray-500">Clients satisfaits</div>
        </div>
      </div>
    </div>
    
    <div className="mt-6 flex justify-center">
      <div className="w-full max-w-md sm:max-w-lg">
        <Image
          src="/images/hardware.png"
          width={700}
          height={700}
          alt="Logo de CODATECH"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
);

const ContactContent = () => (
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Contact</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Informations de contact</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <IconMail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
            <span className="text-sm sm:text-base break-all">contact@oark.io</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 text-center">📱</div>
            <span className="text-sm sm:text-base">+33 6 67 42 07 74</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0 text-center">📍</div>
            <span className="text-sm sm:text-base">Nice, France</span>
          </div>
          <div className="mt-4">
            <Loader/>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 sm:p-6 shadow-sm">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Nous contacter</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Votre message"
            rows={4}
            className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white p-2 sm:p-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  </div>
);

// Dashboard mis à jour avec navigation
const Dashboard = ({ activeSection }: { activeSection: string }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "nouveautes":
        return <NouveautesContent />;
      case "apropos":
        return <AProposContent />;
      case "battlesword":
        return <BattleSwordContent />;
      case "oark":
        return <OArkContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <NouveautesContent />;
    }
  };

  return (
    <div className="flex flex-1 min-h-0">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 sm:p-4 md:p-6 lg:p-10 dark:border-neutral-700 dark:bg-neutral-900 overflow-y-auto">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-1"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};