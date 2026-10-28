import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { COLLECTIONS, generateWhatsAppLink } from "@/data/products";

export default function Collections() {
  return (
    <section
      id="collections"
      aria-label="Nos Collections"
      className="py-20 sm:py-28 bg-[#0D0D0E] relative border-t border-b border-[#B8860B]/15"
    >
      {/* Halo décoratif discret */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#B8860B]/30 bg-[#161618] text-xs uppercase tracking-[0.2em] text-[#FFD700] mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Univers d'Exception</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
            Nos <span className="gold-gradient-text italic font-medium">Collections</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D0CECB] font-light max-w-xl mx-auto">
            Une sélection minutieuse de pièces vestimentaires et d&apos;objets de décoration d&apos;intérieur
            qui incarnent la distinction dakaroise.
          </p>
        </div>

        {/* Grille responsive des 4 collections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
          {COLLECTIONS.map((col, idx) => (
            <div
              key={col.id}
              className="group relative rounded-2xl overflow-hidden bg-[#141416] border border-white/10 hover:border-[#FFD700]/60 transition-all duration-500 shadow-xl flex flex-col justify-end min-h-[420px] sm:min-h-[460px]"
            >
              {/* Image d'arrière-plan avec zoom au hover */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={col.image}
                  alt={`Collection AMCHOU - ${col.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Dégradé sombre pour lisibilité optimale */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/30 group-hover:via-[#0A0A0A]/50 transition-all duration-500" />
              </div>

              {/* Tag / Badge supérieur */}
              <div className="absolute top-4 left-4 z-10 flex items-center justify-between w-[calc(100%-2rem)]">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/70 backdrop-blur-md text-[#FFD700] border border-[#B8860B]/40">
                  {col.tag}
                </span>
                <span className="text-[11px] font-mono text-[#FAF8F5]/80 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  {col.itemCount}
                </span>
              </div>

              {/* Contenu de la carte en bas */}
              <div className="relative z-10 p-6 flex flex-col justify-end">
                <span className="text-xs uppercase tracking-widest text-[#B8860B] font-medium mb-1">
                  {col.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-normal leading-snug group-hover:text-[#FFD700] transition-colors mb-2">
                  {col.title}
                </h3>
                <p className="text-xs text-[#C5C3BC] line-clamp-2 leading-relaxed mb-5 font-light">
                  {col.description}
                </p>

                {/* Bouton d'action pour explorer ou demander sur WhatsApp */}
                <a
                  href={generateWhatsAppLink(col.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-white/5 hover:bg-gradient-to-r hover:from-[#B8860B] hover:to-[#FFD700] hover:text-black border border-white/15 hover:border-transparent transition-all duration-300 min-h-[44px]"
                  aria-label={`Découvrir la collection ${col.title} sur WhatsApp`}
                >
                  <span>Consulter sur WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Liseré or discret en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Note sous les collections */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#A1A1AA]">
            Vous recherchez un article ou un conseil personnalisé ? Nos stylistes vous répondent directement sur WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
