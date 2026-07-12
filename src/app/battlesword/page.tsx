import type { Metadata } from "next";
import { TechnologyPage } from "@/components/technology/TechnologyPage";

export const metadata: Metadata = {
  title: "BattleSword — Duel d'épée connecté | CODATECH",
  description: "BattleSword est un duel d'épée connecté, autonome, sans fil et sécurisé pour les événements et lieux de loisirs.",
};

export default function BattleSwordPage() {
  return <TechnologyPage product="battlesword" />;
}
