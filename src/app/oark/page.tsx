import type { Metadata } from "next";
import { TechnologyPage } from "@/components/technology/TechnologyPage";

export const metadata: Metadata = {
  title: "O.A.R.K — Expérience de combat immersive | CODATECH",
  description: "O.A.R.K combine sport, capteurs connectés et gamification pour transformer chaque combat en jeu vidéo grandeur nature.",
};

export default function OarkPage() {
  return <TechnologyPage product="oark" />;
}
