import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Products from "@/components/Products";
import Stores from "@/components/Stores";
import Reassurance from "@/components/Reassurance";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#FAF8F5] flex flex-col">
      {/* 1. Header Fixe */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero plein écran avec lumière dorée et boutons d'action */}
        <Hero />

        {/* 3. Collections (4 cartes avec survol) */}
        <Collections />

        {/* 4. Produits vedettes (grille de 6 produits avec commande WhatsApp pré-remplie) */}
        <Products />

        {/* 5. Nos 3 boutiques (Ouakam, Keur Damel, Av. Cheikh Anta Diop avec itinéraires) */}
        <Stores />

        {/* 6. Bandeau de réassurance */}
        <Reassurance />
      </main>

      {/* 7. Footer avec logo, slogan, WhatsApp, réseaux sociaux et liens */}
      <Footer />

      {/* Bouton d'action WhatsApp flottant */}
      <WhatsAppFloatingButton />
    </div>
  );
}
