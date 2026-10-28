"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Sparkles, Check, ArrowRight } from "lucide-react";
import { FEATURED_PRODUCTS, generateWhatsAppLink, Product } from "@/data/products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = ["Tous", "Mode Homme", "Chaussures"];

  const filteredProducts =
    selectedCategory === "Tous"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="produits"
      aria-label="Produits vedettes AMCHOU"
      className="py-20 sm:py-28 bg-[#0A0A0A] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#B8860B]/30 bg-[#141416] text-xs uppercase tracking-[0.2em] text-[#FFD700] mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Pièces Sélectionnées</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
              Produits <span className="gold-gradient-text italic font-medium">Vedettes</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D0CECB] font-light">
              Les incontournables du moment. Chaque commande est traitée directement sur WhatsApp par nos conseillers à Dakar.
            </p>
          </div>

          {/* Filtres par catégorie */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all min-h-[44px] whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "gold-gradient-bg text-black shadow-lg"
                    : "bg-[#18181B] text-[#D8D6CE] hover:text-[#FFD700] border border-white/5"
                }`}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des 6 produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group rounded-2xl bg-[#141416] border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Zone Image */}
                <div className="relative aspect-[4/3] w-full bg-[#1A1A1E] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge Produit */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#0A0A0A]/85 backdrop-blur-md text-[#FFD700] border border-[#B8860B]/40 shadow-md">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Catégorie */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-medium tracking-wide uppercase bg-black/60 backdrop-blur-sm text-[#E0DFD8] border border-white/10">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Détails du produit */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#FAF8F5] group-hover:text-[#FFD700] transition-colors leading-snug mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  {/* Prix */}
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-xl sm:text-2xl font-bold text-[#FFD700] font-sans tracking-tight">
                      {product.price.toLocaleString("fr-FR")} <span className="text-xs font-medium text-[#FFD700]/80">FCFA</span>
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#71717A] line-through">
                        {product.originalPrice.toLocaleString("fr-FR")} FCFA
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bouton d'action WhatsApp (au moins 44px de hauteur) */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={generateWhatsAppLink(product.name, product.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`product-order-${product.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black gold-gradient-bg gold-gradient-bg-hover transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] min-h-[46px] group-hover:-translate-y-0.5 active:translate-y-0"
                  aria-label={`Commander ${product.name} sur WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 fill-black stroke-black" />
                  <span>Commander sur WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bannière de commande personnalisée */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#18181B] via-[#141416] to-[#18181B] border border-[#B8860B]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-[#FAF8F5]">
              Vous avez un modèle spécifique en tête ?
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
              Envoyez-nous une photo ou décrivez votre souhait. Nos équipes à Dakar recherchent pour vous.
            </p>
          </div>
          <a
            href={generateWhatsAppLink("Demande sur-mesure / Recherche d'article")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#B8860B] hover:border-[#FFD700] text-[#FFD700] hover:text-black hover:bg-[#FFD700] text-xs uppercase font-bold tracking-wider transition-all duration-300 min-h-[44px]"
          >
            <span>Envoyer une demande spéciale</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
