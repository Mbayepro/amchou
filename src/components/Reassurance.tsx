import React from "react";
import { MessageCircle, Store, Headphones, Sparkles, Truck, Award } from "lucide-react";
import { REASSURANCE_ITEMS } from "@/data/products";

export default function Reassurance() {
  const iconMap: Record<string, React.ReactNode> = {
    "reass-whatsapp": <MessageCircle className="w-6 h-6 text-[#FFD700] fill-[#FFD700]/20" />,
    "reass-boutiques": <Store className="w-6 h-6 text-[#FFD700]" />,
    "reass-service": <Headphones className="w-6 h-6 text-[#FFD700]" />,
  };

  return (
    <section
      id="reassurance"
      aria-label="Engagements et réassurance AMCHOU"
      className="py-16 sm:py-20 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Ligne dorée supérieure */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bandeau principal des 3 piliers exigés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REASSURANCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#141416]/90 border border-[#B8860B]/25 hover:border-[#FFD700]/60 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 group"
            >
              {/* Conteneur d'icône or */}
              <div className="w-14 h-14 rounded-2xl bg-[#1E1E22] border border-[#B8860B]/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#FFD700] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.25)] transition-all duration-300">
                {iconMap[item.id] || <Sparkles className="w-6 h-6 text-[#FFD700]" />}
              </div>

              {/* Texte */}
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-[#FAF8F5] font-normal group-hover:text-[#FFD700] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2 atouts supplémentaires d'excellence */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <Truck className="w-4 h-4 text-[#B8860B]" />
            <span className="text-xs text-[#D8D6CE]">
              <strong className="text-[#FAF8F5]">Livraison sécurisée</strong> partout à Dakar et dans les régions du Sénégal
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
            <Award className="w-4 h-4 text-[#B8860B]" />
            <span className="text-xs text-[#D8D6CE]">
              <strong className="text-[#FAF8F5]">Matières sélectionnées</strong> pour leur durabilité, leur tenue et leur raffinement
            </span>
          </div>
        </div>

      </div>
      
      {/* Ligne dorée inférieure */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
    </section>
  );
}
