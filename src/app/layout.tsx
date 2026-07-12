import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://codatech.fr"),
  title: "CODATECH — Interactive technologies for real-world experiences",
  description:
    "CODATECH imagine des technologies et des expériences interactives qui reconnectent les personnes au monde réel.",
  openGraph: {
    title: "CODATECH — Technology in motion.",
    description: "Technologies interactives, expériences événementielles et innovations conçues en France.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark">
      <body>{children}</body>
    </html>
  );
}
