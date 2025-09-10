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
import Card from "./Cards";
import BattleSword from "../pages/BattleSword";
import Link from "next/link";
import ContactContent from "../pages/Contact";
import OArkContent from "../pages/Oark";
import AProposContent from "../pages/About";

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
    <Link
      href="/"   // ✅ Page d'accueil
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
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"   // ✅ Page d'accueil
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </Link>
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
      
      <div className="flex flex-wrap justify-center gap-6">
  <div className="w-full sm:w-64 md:w-72 lg:w-80">
    <Card />
  </div>
  <div className="w-full sm:w-64 md:w-72 lg:w-80">
    <Card />
  </div>
  <div className="w-full sm:w-64 md:w-72 lg:w-80">
    <Card />
  </div>
  <div className="w-full sm:w-64 md:w-72 lg:w-80">
    <Card />
  </div>
</div>

    </div>
  </div>
);



const BattleSwordContent = () => (
  <BattleSword/>
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