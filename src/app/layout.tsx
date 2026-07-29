import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "AURUM ELYRIQ — We Create Destinations",
    template: "%s — AURUM ELYRIQ",
  },
  description:
    "AURUM ELYRIQ conceives, finances, and operates destinations for entertainment, leisure, relaxation, and parks — for governments, private landowners, and in our own right.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cormorantGaramond.variable} ${jost.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
