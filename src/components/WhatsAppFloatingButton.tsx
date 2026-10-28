"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND, generateWhatsAppLink } from "@/data/products";

export default function WhatsAppFloatingButton() {
  return (
    <aside
      aria-label="Contact rapide WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      {/* Tooltip élégant au survol */}
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full bg-[#141416]/95 border border-[#B8860B]/50 text-xs font-semibold text-[#FAF8F5] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Commander sur WhatsApp
      </span>

      {/* Bouton d'action flottant */}
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        className="relative flex items-center justify-center w-14 h-14 rounded-full gold-gradient-bg gold-gradient-bg-hover text-black shadow-[0_4px_25px_rgba(255,215,0,0.4)] transition-all duration-300 transform group-hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Discuter directement avec AMCHOU sur WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366]" />
        </span>
        <MessageCircle className="w-7 h-7 fill-black stroke-black" />
      </a>
    </aside>
  );
}
