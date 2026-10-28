import React from "react";
import { MapPin, Navigation, Clock, Phone, Sparkles, MessageCircle } from "lucide-react";
import { STORES, generateWhatsAppLink } from "@/data/products";

export default function Stores() {
  return (
    <section
      id="boutiques"
      aria-label="Nos boutiques à Dakar"
      className="py-20 sm:py-28 bg-[#0A0A0D] relative border-t border-b border-[#B8860B]/15 overflow-hidden w-full max-w-full"
    >
      {/* Halo discret avec overflow-hidden strict */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B8860B]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#B8860B]/30 bg-[#141416] text-xs uppercase tracking-[0.2em] text-[#FFD700] mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Adresses de Prestige</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-normal tracking-tight">
            Nos 3 Boutiques à <span className="gold-gradient-text italic font-medium">Dakar</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#D0CECB] font-light max-w-xl mx-auto">
            Un accueil privilégié au cœur de la capitale. Venez essayer nos pièces, découvrir notre mobilier ou récupérer vos commandes WhatsApp.
          </p>
        </div>

        {/* Grille des 3 boutiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STORES.map((store, index) => (
            <div
              key={store.id}
              className="group rounded-2xl bg-[#141416] border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Numéro de boutique en filigrane */}
              <span className="absolute top-3 right-4 font-serif text-6xl font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-[#FFD700]/[0.06] transition-colors">
                0{index + 1}
              </span>

              <div>
                {/* Badge Quartier */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1F24] border border-[#B8860B]/30 text-[11px] font-semibold tracking-wider text-[#FFD700] uppercase mb-4">
                  <MapPin className="w-3 h-3 text-[#FFD700]" />
                  <span>{store.district}</span>
                </div>

                {/* Nom Boutique */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-normal mb-3 group-hover:text-[#FFD700] transition-colors">
                  {store.name}
                </h3>

                {/* Adresse exacte */}
                <div className="flex items-start gap-3 text-sm text-[#D8D6CE] mb-4">
                  <span className="font-medium">{store.address}</span>
                </div>

                {/* Repère / Info supplémentaire */}
                <div className="text-xs text-[#A1A1AA] bg-white/[0.03] p-3 rounded-lg border border-white/5 mb-5 leading-relaxed">
                  <span className="text-[#FFD700] font-medium">Repère : </span>
                  {store.landmarks}
                </div>

                {/* Horaires et Téléphone */}
                <div className="space-y-2.5 text-xs text-[#C5C3BC] mb-6">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <a
                      href={`tel:${store.phone}`}
                      className="hover:text-[#FFD700] transition-colors"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Boutons d'Action : Itinéraire Google Maps & WhatsApp pour cette boutique */}
              <div className="space-y-2.5 pt-4 border-t border-white/5">
                {/* Bouton Itinéraire (requis) */}
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`store-directions-${store.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1E1E22] hover:bg-white/10 border border-[#B8860B]/40 hover:border-[#FFD700] transition-all duration-300 min-h-[44px]"
                  aria-label={`Obtenir l'itinéraire vers la boutique ${store.name}`}
                >
                  <Navigation className="w-4 h-4 text-[#FFD700]" />
                  <span>Itinéraire Google Maps</span>
                </a>

                {/* Bouton Contacter cette boutique */}
                <a
                  href={generateWhatsAppLink(`Information pour la boutique de ${store.district}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[11px] font-semibold uppercase tracking-wider text-black gold-gradient-bg gold-gradient-bg-hover transition-all duration-300 min-h-[44px]"
                  aria-label={`Écrire à la boutique ${store.name} sur WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-black" />
                  <span>Contacter cette boutique</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
