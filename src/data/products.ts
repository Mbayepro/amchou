// ============================================================================
// AMCHOU SHOP & DÉCO - DONNÉES DES PRODUITS (EXEMPLES FACILES À MODIFIER)
// Ces données sont fournies à titre de démonstration et peuvent être éditées.
// ============================================================================

export interface Product {
  id: string;
  name: string;
  category: "Mode Homme" | "Chaussures" | "Accessoires" | "Décoration";
  price: number; // en FCFA fictif
  originalPrice?: number;
  image: string;
  badge?: "Nouveauté" | "Bestseller" | "Édition Limitée" | "Coup de Cœur";
  shortDescription: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: string;
  tag: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  district: string;
  address: string;
  landmarks: string;
  phone: string;
  hours: string;
  mapsUrl: string;
}

// ----------------------------------------------------------------------------
// Constantes de contact et identité AMCHOU
// ----------------------------------------------------------------------------
export const BRAND = {
  name: "AMCHOU",
  tagline: "La noblesse en héritage",
  subtagline: "Boutiques de prêt-à-porter masculin d'exception et décoration d'intérieur raffinée à Dakar.",
  phone: "+221 77 851 02 42",
  phoneRaw: "221778510242",
  email: "contact@amchoushop.sn",
  socials: {
    instagram: "https://www.instagram.com/amchouboutique.mode?rpxt=MWR1NGF1ejV5b3VzZQ==",
    facebook: "https://www.facebook.com/amchoushopetdecration",
    tiktok: "https://vm.tiktok.com/ZS9yBMD7qv8GJ-T6CSS/",
  },
};

// ----------------------------------------------------------------------------
// Fonction utilitaire pour générer le lien WhatsApp avec message pré-rempli
// ----------------------------------------------------------------------------
export function generateWhatsAppLink(productName?: string, price?: number): string {
  let message = `Bonjour AMCHOU, je vous contacte depuis le site web.`;
  if (productName) {
    message = `Bonjour AMCHOU, je souhaite commander le produit suivant :\n- Produit : ${productName}${
      price ? `\n- Prix indicatif : ${price.toLocaleString("fr-FR")} FCFA` : ""
    }\n\nMerci de m'indiquer la disponibilité et les modalités de livraison à Dakar.`;
  }
  return `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(message)}`;
}

// ----------------------------------------------------------------------------
// Grille des 6 Produits Vedettes (exemples fictifs)
// ----------------------------------------------------------------------------
export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Chemise Prestige Safari Bleu Nuit",
    category: "Mode Homme",
    price: 35000,
    originalPrice: 42000,
    image: "/products/chemise-bleu-marine.jpg",
    badge: "Bestseller",
    shortDescription: "Coton égyptien haut de gamme, coupe cintrée et double poche poitrine élégante.",
  },
  {
    id: "prod-2",
    name: "Mocassins Nubuck Gris Anthracite",
    category: "Chaussures",
    price: 48000,
    originalPrice: 55000,
    image: "/products/mocassin-gris.jpg",
    badge: "Coup de Cœur",
    shortDescription: "Cuir suédé velouté, surpiqûres sellier artisanales et semelle confort antidérapante.",
  },
  {
    id: "prod-3",
    name: "Chemise Manches Courtes Carreaux Ocre",
    category: "Mode Homme",
    price: 28000,
    image: "/products/chemise-ocre.jpg",
    badge: "Nouveauté",
    shortDescription: "Tissage texturé frais et respirant, motifs carreaux intemporels aux tons ambrés.",
  },
  {
    id: "prod-4",
    name: "Mocassins Penny Cuir Bleu Saphir",
    category: "Chaussures",
    price: 48000,
    image: "/products/mocassin-bleu.jpg",
    badge: "Édition Limitée",
    shortDescription: "Confection artisanale italienne, teinte saphir nuit et souplesse incomparable.",
  },
  {
    id: "prod-5",
    name: "Chemise Vichy Casual Rouge & Noir",
    category: "Mode Homme",
    price: 28000,
    originalPrice: 32000,
    image: "/products/chemise-rouge.jpg",
    badge: "Bestseller",
    shortDescription: "Style contemporain dakarois, finitions boutons nacrés et tombé parfait.",
  },
  {
    id: "prod-6",
    name: "Mocassins Nubuck Noir Impérial",
    category: "Chaussures",
    price: 52000,
    image: "/products/mocassin-noir.jpg",
    badge: "Édition Limitée",
    shortDescription: "L'élégance absolue en cuir nubuck noir profond, pour cérémonies et soirées distinguées.",
  },
];

// ----------------------------------------------------------------------------
// Les 4 Catégories de Collections
// ----------------------------------------------------------------------------
export const COLLECTIONS: CollectionItem[] = [
  {
    id: "col-mode",
    title: "Mode Homme & Prêt-à-Porter",
    subtitle: "L'allure du gentleman",
    description: "Chemises sur-mesure, costumes raffinés et coupes modernes adaptées au climat sénégalais.",
    image: "/collections/mode.jpg",
    itemCount: "45+ modèles",
    tag: "Signature",
  },
  {
    id: "col-deco",
    title: "Déco d'Intérieur & Design",
    subtitle: "L'art de vivre d'exception",
    description: "Pièces maîtresses contemporaines, marbres noirs, touches dorées et mobilier prestigieux.",
    image: "/collections/deco.jpg",
    itemCount: "30+ créations",
    tag: "Exclusivité",
  },
  {
    id: "col-chaussures",
    title: "Chaussures & Maroquinerie",
    subtitle: "Le pas assuré",
    description: "Mocassins en nubuck premium, richelieus et ceintures en cuir véritable aux finitions sellier.",
    image: "/collections/chaussures.jpg",
    itemCount: "25+ paires",
    tag: "Artisanat",
  },
  {
    id: "col-cadeaux",
    title: "Accessoires & Coffrets Cadeaux",
    subtitle: "Le cadeau mémorable",
    description: "Boutons de manchette dorés, parfums de créateur, maroquinerie de poche et montres exclusives.",
    image: "/collections/cadeaux.jpg",
    itemCount: "20+ coffrets",
    tag: "Prestige",
  },
];

// ----------------------------------------------------------------------------
// Les 3 Boutiques Physiques à Dakar
// ----------------------------------------------------------------------------
export const STORES: StoreLocation[] = [
  {
    id: "store-ouakam",
    name: "AMCHOU Ouakam",
    district: "Ouakam",
    address: "Cité Batrain, côté Église Bleue, Dakar",
    landmarks: "À deux pas de l'Église Bleue – Parking client réservé",
    phone: "+221 77 851 02 42",
    hours: "Lun – Sam : 09h30 à 21h00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cite+Batrain+Eglise+Bleue+Ouakam+Dakar",
  },
  {
    id: "store-keur-damel",
    name: "AMCHOU Keur Damel",
    district: "Parcelles Assainies",
    address: "Cité Keur Damel, Parcelles Assainies, Dakar",
    landmarks: "Proche Rond-point 26 – Face commerces de prestige",
    phone: "+221 77 851 02 42",
    hours: "Lun – Sam : 10h00 à 21h30",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cite+Keur+Damel+Parcelles+Assainies+Dakar",
  },
  {
    id: "store-cheikh-anta-diop",
    name: "AMCHOU Shop & Déco Flagship",
    district: "Avenue Cheikh Anta Diop",
    address: "Avenue Cheikh Anta Diop, Dakar",
    landmarks: "Boutique Concept Shop & Décoration – Espace VIP",
    phone: "+221 77 851 02 42",
    hours: "Lun – Sam : 09h00 à 21h00 | Dim : 15h00 à 20h00",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Avenue+Cheikh+Anta+Diop+Dakar",
  },
];

// ----------------------------------------------------------------------------
// Éléments du bandeau de réassurance
// ----------------------------------------------------------------------------
export const REASSURANCE_ITEMS = [
  {
    id: "reass-whatsapp",
    title: "Commande via WhatsApp",
    description: "Échange direct, conseil personnalisé et confirmation immédiate en un clic.",
  },
  {
    id: "reass-boutiques",
    title: "3 boutiques à Dakar",
    description: "Retrait gratuit, essayage sur place et accueil haut de gamme garanti.",
  },
  {
    id: "reass-service",
    title: "Service client réactif",
    description: "Une équipe dédiée à votre écoute 7j/7 pour vous assister avec diligence.",
  },
];
