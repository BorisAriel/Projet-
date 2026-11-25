import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outils Pro — Abonnements professionnels",
  description: "Des outils commerciaux adaptés aux particuliers et aux entreprises.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
