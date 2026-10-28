"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Phone, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { BRAND, generateWhatsAppLink } from "@/data/products";

// Icônes personnalisées pour les réseaux sociaux
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.449-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll d'arrière-plan quand le menu mobile plein écran est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { number: "01", label: "Accueil", href: "#accueil" },
    { number: "02", label: "Collections", href: "#collections" },
    { number: "03", label: "Produits Vedettes", href: "#produits" },
    { number: "04", label: "Nos 3 Boutiques", href: "#boutiques" },
    { number: "05", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        id="header-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#070708]/98 backdrop-blur-md border-b border-[#B8860B]/30 shadow-[0_4px_30px_rgba(0,0,0,0.9)] py-2 sm:py-3"
            : "bg-gradient-to-b from-[#070708] via-[#070708]/90 to-transparent py-2.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Logo Brand */}
            <Link
              href="#accueil"
              onClick={closeMenu}
              className="flex items-center gap-2.5 group focus:outline-none min-w-0"
              aria-label="AMCHOU - Accueil"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D4AF37] group-hover:border-[#FFD700] transition-colors bg-black shadow-[0_0_15px_rgba(218,165,32,0.35)] shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo AMCHOU"
                  width={40}
                  height={40}
                  className="object-cover rounded-full w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif tracking-widest text-lg sm:text-2xl font-bold uppercase gold-gradient-text leading-tight truncate">
                  AMCHOU
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-light truncate">
                  Shop & Déco Dakar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Navigation principale"
              className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#121215]/80 border border-[#B8860B]/25 rounded-full px-5 py-2 shadow-inner backdrop-blur-sm"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs lg:text-sm font-medium text-[#FAF8F5]/85 hover:text-[#FFD700] px-3.5 py-1.5 rounded-full transition-colors relative hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA WhatsApp */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-cta-desktop"
                className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-black transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 gold-gradient-bg gold-gradient-bg-hover shadow-[0_0_25px_rgba(255,215,0,0.35)] min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-black stroke-black group-hover:scale-110 transition-transform" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>

            {/* BOUTON MENU MOBILE : Seul élément à droite sur mobile pour éviter tout débordement */}
            <div className="flex items-center md:hidden shrink-0">
              <button
                type="button"
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                className="h-10 px-4 rounded-full border-2 border-[#FFD700] bg-[#141418] hover:bg-[#202026] text-[#FFD700] flex items-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.4)] active:scale-95 transition-transform cursor-pointer"
                aria-label="Ouvrir le menu de navigation"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-[#FFD700]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FAF8F5]">Menu</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Fond semi-transparent cliquable pour fermer le menu */}
      <div
        id="mobile-menu-backdrop"
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-[998] bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      />

      {/* Panneau coulissant du menu burger */}
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal AMCHOU"
        className={`fixed top-0 right-0 z-[999] h-dvh w-[88vw] max-w-sm box-border bg-[#070708] border-l border-[#B8860B]/30 flex flex-col justify-between overflow-y-auto overflow-x-hidden p-5 sm:p-6 text-[#FAF8F5] shadow-[-10px_0_40px_rgba(0,0,0,0.95)] transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "translate-x-0 visible pointer-events-auto"
            : "translate-x-full invisible pointer-events-none"
        }`}
      >
        {/* Haut du Panneau : Logo & Bouton Fermer */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#B8860B]/30">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#D4AF37] bg-black shrink-0">
                <Image
                  src="/logo.png"
                  alt="AMCHOU Logo"
                  width={36}
                  height={36}
                  className="object-cover rounded-full w-full h-full"
                />
              </div>
              <div className="min-w-0">
                <span className="font-serif tracking-widest text-base font-bold uppercase gold-gradient-text block leading-none truncate">
                  AMCHOU
                </span>
                <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase block mt-1 truncate">
                  Dakar • Sénégal
                </span>
              </div>
            </div>

            {/* Bouton de Fermeture */}
            <button
              type="button"
              id="close-mobile-menu-btn"
              onClick={closeMenu}
              className="w-10 h-10 rounded-full border border-[#FFD700]/70 bg-[#141418] hover:bg-[#202026] text-[#FFD700] flex items-center justify-center focus:outline-none shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5 text-[#FFD700]" />
            </button>
          </div>

          {/* Slogan Prestige */}
          <div className="pt-3.5 pb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121215] border border-[#B8860B]/35 text-[11px] text-[#FFD700] max-w-full">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
              <span className="font-serif italic truncate">« {BRAND.tagline} »</span>
            </div>
          </div>

          {/* Liste des Liens de Navigation Numérotés */}
          <nav className="py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between py-3 px-3.5 rounded-xl bg-white/[0.03] hover:bg-gradient-to-r hover:from-[#B8860B]/20 hover:to-transparent border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-[#D4AF37] group-hover:text-[#FFD700]">
                    {link.number}
                  </span>
                  <span className="font-serif text-base tracking-wide text-[#FAF8F5] group-hover:text-[#FFD700] transition-colors">
                    {link.label}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bas du Menu : Boutons WhatsApp, Boutiques & Réseaux Sociaux */}
        <div className="pt-3 border-t border-white/10 space-y-3 pb-2">
          
          {/* Bouton WhatsApp Principal */}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="w-full flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-black gold-gradient-bg shadow-[0_0_20px_rgba(255,215,0,0.3)] min-h-[44px] text-xs uppercase tracking-wider active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-black stroke-black shrink-0" />
            <span className="truncate">Commander sur WhatsApp</span>
          </a>

          {/* Appel Téléphonique */}
          <a
            href={`tel:${BRAND.phone}`}
            onClick={closeMenu}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#B8860B]/40 text-[#FAF8F5] bg-[#121215] text-[11px] font-medium hover:border-[#FFD700] min-h-[40px]"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
            <span className="truncate">Service Client : {BRAND.phone}</span>
          </a>

          {/* Les 3 Boutiques à Dakar */}
          <div className="p-3 rounded-xl bg-[#121215] border border-white/5 space-y-1 text-xs">
            <div className="flex items-center gap-1.5 text-[#FFD700] font-semibold text-[10px] uppercase tracking-wider">
              <MapPin className="w-3 h-3 shrink-0" />
              <span>3 Boutiques à Dakar :</span>
            </div>
            <p className="text-[10px] text-[#A1A1AA] leading-relaxed">
              • Ouakam (Batrain) • Keur Damel • Cheikh Anta Diop
            </p>
          </div>

          {/* Réseaux Sociaux */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest font-light">
              Suivez-nous :
            </span>
            <a
              href={BRAND.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#18181C] border border-[#B8860B]/40 text-[#FAF8F5] hover:text-[#FFD700] flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BRAND.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#18181C] border border-[#B8860B]/40 text-[#FAF8F5] hover:text-[#FFD700] flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={BRAND.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#18181C] border border-[#B8860B]/40 text-[#FAF8F5] hover:text-[#FFD700] flex items-center justify-center transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
