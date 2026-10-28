import React from "react";
import Image from "next/image";
import { MessageCircle, Compass, ChevronDown, Sparkles, ShieldCheck, MapPin, Award } from "lucide-react";
import { BRAND, generateWhatsAppLink } from "@/data/products";

export default function Hero() {
  return (
    <section
      id="accueil"
      aria-label="Section d'accueil AMCHOU"
      className="relative min-h-[95vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#070708] pt-24 pb-16 sm:py-28 w-full max-w-full"
    >
      {/* Conteneur d'arrière-plan et halos avec overflow-hidden strict */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-full">
        {/* Halo lumineux or royal d'ambiance */}
        <div className="absolute inset-0 hero-gold-glow z-0" />
        
        {/* Lignes et cercles géométriques subtils d'arrière-plan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] lg:w-[950px] h-[340px] sm:h-[680px] lg:h-[950px] rounded-full border border-[#D4AF37]/15 blur-[1px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[480px] lg:w-[650px] h-[240px] sm:h-[480px] lg:h-[650px] rounded-full border border-[#FFD700]/20 blur-[1px]" />
      </div>

      {/* Contenu principal Hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        
        {/* Logo Blason Médaillon AMCHOU */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-full p-1 border-2 border-[#D4AF37] bg-black shadow-[0_0_35px_rgba(218,165,32,0.45)]">
          <Image
            src="/logo.png"
            alt="Blason AMCHOU"
            fill
            sizes="80px"
            className="object-cover rounded-full"
            priority
          />
        </div>

        {/* Badge Prestige Dakar */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#121215]/90 shadow-[0_0_20px_rgba(218,165,32,0.25)] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#FFD700] font-semibold">
            Maison Sénégalaise d&apos;Exception • Dakar
          </span>
        </div>

        {/* Grand Titre Slogan */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FBF9F5] max-w-4xl leading-[1.1] sm:leading-[1.1] mb-6">
          <span className="block text-[#FAF8F5]">La noblesse</span>
          <span className="block mt-1 font-italic gold-gradient-text italic font-medium">
            en héritage
          </span>
        </h1>

        {/* Ligne séparatrice dorée avec losange */}
        <div className="flex items-center justify-center gap-3 w-56 mx-auto mb-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#FFD700] bg-[#B8860B]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Sous-titre court et évocateur */}
        <p className="text-base sm:text-lg md:text-xl text-[#D8D6CE] max-w-2xl font-light leading-relaxed mb-10 sm:mb-12">
          L&apos;alliance subtile du prêt-à-porter masculin d&apos;exception et de la décoration d&apos;intérieur raffinée.
          Retrouvez nos créations exclusives dans nos 3 boutiques à Dakar.
        </p>

        {/* Les 2 Boutons d'Action (Responsive, grand touch target sur mobile) */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          
          {/* Bouton 1 : Découvrir la collection */}
          <a
            href="#collections"
            id="hero-cta-discover"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl sm:rounded-full text-sm font-semibold tracking-wide text-[#FAF8F5] bg-[#141418] border border-[#D4AF37]/60 hover:border-[#FFD700] hover:bg-[#1E1E24] transition-all duration-300 shadow-lg min-h-[50px] group"
          >
            <Compass className="w-4 h-4 text-[#FFD700] group-hover:rotate-45 transition-transform duration-300" />
            <span>Découvrir la collection</span>
          </a>

          {/* Bouton 2 : Commander sur WhatsApp */}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl sm:rounded-full text-sm font-bold uppercase tracking-wider text-black gold-gradient-bg gold-gradient-bg-hover transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_35px_rgba(255,215,0,0.4)] min-h-[50px] group"
          >
            <MessageCircle className="w-5 h-5 fill-black stroke-black group-hover:scale-110 transition-transform" />
            <span>Commander sur WhatsApp</span>
          </a>
        </div>

        {/* Mini bande de 3 atouts sous le Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl pt-8 border-t border-[#D4AF37]/20 text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <MapPin className="w-5 h-5 text-[#FFD700] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#FAF8F5]">3 Adresses à Dakar</div>
              <div className="text-[11px] text-[#A1A1AA]">Ouakam, Keur Damel, Cheikh Anta Diop</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <Award className="w-5 h-5 text-[#FFD700] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#FAF8F5]">Finitions Nobles</div>
              <div className="text-[11px] text-[#A1A1AA]">Matières premium & coupe sur-mesure</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#FFD700] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#FAF8F5]">Commande Express</div>
              <div className="text-[11px] text-[#A1A1AA]">Échange direct & livraison à Dakar</div>
            </div>
          </div>
        </div>

        {/* Flèche d'invitation au scroll */}
        <div className="mt-12 hidden md:block">
          <a
            href="#collections"
            aria-label="Faire défiler vers les collections"
            className="inline-flex flex-col items-center text-xs tracking-widest text-[#D4AF37] hover:text-[#FFD700] transition-colors"
          >
            <span className="uppercase text-[10px] mb-1 font-light">Explorer</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
}
