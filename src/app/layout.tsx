// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Meta tags Open Graph + Twitter
export const metadata: Metadata = {
  title: "Codatech",
  description: "BattleSword | Oark",
  openGraph: {
    title: "Codatech",
    description: "Site web de Codatech",
    url: "https://codatech-website.vercel.app/",
    siteName: "Codatech",
    images: [
      {
        url: "/images/COD_solo.png", // ton image de vignette
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codatech",
    description: "BattleSword | Oark",
    images: ["/images/COD_solo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`dark ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
