import type { Metadata } from "next";
import { ShopPage } from "@/components/shop/ShopPage";

export const metadata: Metadata = {
  title: "Boutique — Équipements BattleSword et O.A.R.K | CODATECH",
  description: "Malles BattleSword, bornes personnalisées, boîtes à thème, armes et équipements connectés CODATECH.",
};

export default function BoutiquePage() {
  return <ShopPage />;
}
