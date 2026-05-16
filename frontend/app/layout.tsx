import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SA Daily Toolkit — Fernando Azevedo",
  description:
    "Daily skills, scripts and templates for Solution Architects: ADRs, Well-Architected, threat modeling, sizing calculators, RFC templates and decision matrices.",
  authors: [{ name: "Fernando Francisco Azevedo", url: "https://fernando.moretes.com" }],
  openGraph: {
    title: "SA Daily Toolkit",
    description: "A toolkit for Solution Architects: ADRs, Well-Architected, threat modeling, sizing calculators.",
    url: "https://toolkit.moretes.com",
    siteName: "SA Daily Toolkit",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
