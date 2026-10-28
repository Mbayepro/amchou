import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amchoushop.sn"),
  title: "AMCHOU – La noblesse en héritage | Shop & Déco Dakar",
  description:
    "Maison de prêt-à-porter masculin d'exception et décoration d'intérieur raffinée à Dakar. Retrouvez nos collections dans nos 3 boutiques : Ouakam, Keur Damel et Avenue Cheikh Anta Diop. Commandes directes sur WhatsApp.",
  keywords: [
    "AMCHOU",
    "AMCHOU Shop",
    "Boutique Dakar",
    "Mode Homme Dakar",
    "Déco Dakar",
    "La noblesse en héritage",
    "Chemises Dakar",
    "Mocassins Dakar",
    "Ouakam",
    "Keur Damel",
    "Cheikh Anta Diop",
  ],
  authors: [{ name: "AMCHOU" }],
  openGraph: {
    title: "AMCHOU – La noblesse en héritage | Shop & Déco Dakar",
    description:
      "Boutiques de mode masculine et décoration d'intérieur haut de gamme à Dakar. Commandez directement sur WhatsApp.",
    url: "https://amchoushop.sn",
    siteName: "AMCHOU",
    locale: "fr_SN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AMCHOU – La noblesse en héritage | Shop & Déco Dakar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMCHOU – La noblesse en héritage | Dakar",
    description: "Prêt-à-porter masculin d'exception et décoration raffinée. 3 boutiques à Dakar.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-[#FAF8F5] font-sans antialiased selection:bg-[#B8860B]/30 selection:text-[#FFD700] min-h-screen">
        {children}
      </body>
    </html>
  );
}
