import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { BRAND, generateWhatsAppLink } from "@/data/products";

// Icônes personnalisées pour les réseaux sociaux
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      aria-label="Pied de page AMCHOU"
      className="bg-[#070708] border-t border-[#B8860B]/20 text-[#FAF8F5] pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Colonne 1 : Marque, Logo, Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B8860B] bg-black shadow-[0_0_15px_rgba(184,134,11,0.3)]">
                <Image
                  src="/logo.png"
                  alt="Logo AMCHOU"
                  fill
                  sizes="48px"
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif tracking-widest text-2xl font-bold uppercase gold-gradient-text block">
                  AMCHOU
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#E0DFD8]/80 uppercase -mt-0.5 block font-light">
                  Shop & Déco Dakar
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#FFD700] pt-1">
              « {BRAND.tagline} »
            </p>

            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Maison dakaroise dédiée au prêt-à-porter masculin d&apos;exception, à la maroquinerie haut de gamme et aux objets d&apos;art & décoration intérieure.
            </p>

            {/* Réseaux sociaux officiels */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#A1A1AA] block mb-3 font-medium">
                Suivez notre univers :
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#141416] border border-[#B8860B]/40 hover:border-[#FFD700] hover:text-[#FFD700] flex items-center justify-center text-[#E0DFD8] transition-colors"
                  aria-label="Instagram AMCHOU Boutique Mode"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={BRAND.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#141416] border border-[#B8860B]/40 hover:border-[#FFD700] hover:text-[#FFD700] flex items-center justify-center text-[#E0DFD8] transition-colors"
                  aria-label="Facebook AMCHOU Shop et Décoration"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href={BRAND.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#141416] border border-[#B8860B]/40 hover:border-[#FFD700] hover:text-[#FFD700] flex items-center justify-center text-[#E0DFD8] transition-colors"
                  aria-label="TikTok officiel AMCHOU"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#FAF8F5] tracking-wide border-b border-[#B8860B]/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#C5C3BC]">
              <li>
                <a href="#accueil" className="hover:text-[#FFD700] transition-colors py-1 inline-block">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#FFD700] transition-colors py-1 inline-block">
                  Nos Collections
                </a>
              </li>
              <li>
                <a href="#produits" className="hover:text-[#FFD700] transition-colors py-1 inline-block">
                  Produits Vedettes
                </a>
              </li>
              <li>
                <a href="#boutiques" className="hover:text-[#FFD700] transition-colors py-1 inline-block">
                  Nos 3 Boutiques à Dakar
                </a>
              </li>
              <li>
                <a href="#reassurance" className="hover:text-[#FFD700] transition-colors py-1 inline-block">
                  Engagements & Réassurance
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Nos 3 Boutiques */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#FAF8F5] tracking-wide border-b border-[#B8860B]/30 pb-2">
              Nos Boutiques
            </h4>
            <div className="space-y-3 text-xs text-[#C5C3BC]">
              <div>
                <strong className="text-[#FFD700] block text-[13px]">Boutique Ouakam</strong>
                <span>Cité Batrain, côté Église Bleue, Dakar</span>
              </div>
              <div>
                <strong className="text-[#FFD700] block text-[13px]">Boutique Keur Damel</strong>
                <span>Cité Keur Damel, Parcelles Assainies, Dakar</span>
              </div>
              <div>
                <strong className="text-[#FFD700] block text-[13px]">AMCHOU Shop & Déco Flagship</strong>
                <span>Avenue Cheikh Anta Diop, Dakar</span>
              </div>
            </div>
          </div>

          {/* Colonne 4 : Commande WhatsApp Directe */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-[#FAF8F5] tracking-wide border-b border-[#B8860B]/30 pb-2">
              Commander sur WhatsApp
            </h4>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              Commandes immédiates, conseils en direct et livraison rapide à Dakar :
            </p>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-link"
              className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl font-bold uppercase tracking-wider text-xs text-black gold-gradient-bg gold-gradient-bg-hover transition-all duration-300 shadow-md min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>+221 77 851 02 42</span>
            </a>

            <div className="pt-2 text-xs text-[#A1A1AA] space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFD700]" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-[#FFD700] transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barre inférieure des droits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© 2026 AMCHOU. Tous droits réservés.</p>
          <p className="text-center sm:text-right font-light">
            « {BRAND.tagline} » • Marque déposée à Dakar
          </p>
        </div>

      </div>
    </footer>
  );
}
