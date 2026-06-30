"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import ProductBanner from "../components/home/ProductBanner";

export interface Product {
  id: string;
  name: string;
  category: "Oils" | "Elixirs" | "Wellness" | "Formulations";
  image: string;
  originalPrice: number;
  offerPrice: number;
  volume: string;
  shortDesc: string;
  details: string;
  benefits: string[];
  usage: string;
  ingredients: string[];
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "balaguluchyadi",
    name: "Balaguluchyadi Thailam",
    category: "Oils",
    image: "/product-banner/products/Balaguluchyadi 1.png",
    originalPrice: 320,
    offerPrice: 250,
    volume: "200 ml",
    shortDesc: "Traditional Ayurvedic oil formulated for relieving joint pains, stiffness, and heat sensations.",
    details: "Balaguluchyadi Thailam is a classical Ayurvedic formulation prepared with Bala, Guduchi, and Devadaru in a sesame oil base. It is traditionally used in Ayurveda for conditions related to gouty arthritis, rheumatoid arthritis, and burning sensations of the skin.",
    benefits: [
      "Alreduces pain and swelling in inflamed joints",
      "Soothes burning sensations and skin heat",
      "Nourishes local nerves and relaxes stiffness",
      "Balances Pitta and Vata doshas"
    ],
    usage: "Apply lukewarm oil over the affected body parts, leave for 30–45 minutes, then rinse off with warm water.",
    ingredients: ["Bala (Sida cordifolia)", "Guduchi (Tinospora cordifolia)", "Devadaru (Cedrus deodara)", "Sesame Oil"]
  },
  {
    id: "chyavanaprasham",
    name: "Special Chyavanaprasham",
    category: "Elixirs",
    image: "/product-banner/products/Chayanaprasaham 1.png",
    originalPrice: 550,
    offerPrice: 450,
    volume: "500 g",
    shortDesc: "Rejuvenating wellness elixir enriched with Amla and potent forest herbs to boost immunity.",
    details: "Our signature Chyavanaprasham is a time-tested health recipe packed with vitamin C and antioxidant-rich herbs. Prepared using authentic traditional methods, it revitalizes respiratory health, improves digestion, and enhances cellular energy.",
    benefits: [
      "Strengthens the body's natural defense mechanism",
      "Enhances respiratory health and stamina",
      "Promotes youthful skin, healthy hair, and vitality",
      "Supports optimal metabolic and digestive functions"
    ],
    usage: "Take 1–2 teaspoons daily on an empty stomach, followed by a cup of warm milk or warm water.",
    ingredients: ["Fresh Amalaki (Amla)", "Ghee", "Wild Honey", "Ashwagandha", "Shatavari", "Dashamoola"]
  },
  {
    id: "dhanwantaram-tailam",
    name: "Dhanwantaram Thailam",
    category: "Oils",
    image: "/product-banner/products/Dhanwantaram Tailam 1.png",
    originalPrice: 390,
    offerPrice: 320,
    volume: "200 ml",
    shortDesc: "Complete body oil designed for neuromuscular conditions, general wellness, and prenatal care.",
    details: "Dhanwantaram Thailam is a celebrated Ayurvedic multi-purpose oil used for massage and sensory rejuvenation. It is highly beneficial for strengthening bones, muscles, and nerves, making it ideal for post-injury recovery and maternity wellness.",
    benefits: [
      "Highly effective for neuromuscular pain and spasms",
      "Nourishes skin texture and improves blood circulation",
      "Ideal massage oil for expectant and new mothers",
      "Balances Vata dosha effectively"
    ],
    usage: "Massage gently all over the body, allow 30 minutes of absorption, and bathe in warm water.",
    ingredients: ["Bala", "Dashamoola", "Triphala", "Medicated Cow's Milk", "Sesame Oil"]
  },
  {
    id: "kottamchukaadi",
    name: "Kottamchukaadi Thailam",
    category: "Oils",
    image: "/product-banner/products/Kottamchukaadi 1.png",
    originalPrice: 350,
    offerPrice: 280,
    volume: "200 ml",
    shortDesc: "Excellent local massage oil for reducing joint swelling, stiffness, and cervical pain.",
    details: "Kottamchukaadi Thailam is specially formulated to target inflammatory joint conditions and muscular sprains. It features a strong blend of dried ginger, calamus, and garlic, which work together to reduce fluid retention around joints and relieve chronic pains.",
    benefits: [
      "Provides quick relief from stiff joints and backaches",
      "Helps subside local swelling and chronic pain",
      "Soothes pain from spondylosis and sciatica",
      "Re-mobilizes restricted limbs"
    ],
    usage: "Apply locally over the painful or swollen joints, wrap with warm cloth if desired, and wash after 45 minutes.",
    ingredients: ["Kottam (Saussurea lappa)", "Chukku (Zingiber officinale)", "Vayambu (Acorus calamus)", "Lashuna (Garlic)"]
  },
  {
    id: "kumkumadi-tailam",
    name: "Kumkumadi Tailam",
    category: "Wellness",
    image: "/product-banner/products/Kumkumadi 1.png",
    originalPrice: 950,
    offerPrice: 750,
    volume: "15 ml",
    shortDesc: "Premium saffron facial oil for skin brightening, pigmentation correction, and natural glow.",
    details: "Kumkumadi Tailam is a legendary beauty elixir made from pure Kashmiri Saffron, sandalwood, and other rare Himalayan herbs. It acts as an overnight skin treatment that enhances skin texture, corrects dark spots, and imparts a golden, youthful radiance.",
    benefits: [
      "Corrects dark spots, blemishes, and under-eye circles",
      "Brightens skin complexion and reduces tan",
      "Deeply hydrates and delays fine line appearance",
      "Formulated with 100% natural herbs and premium saffron"
    ],
    usage: "Apply 3–4 drops on a clean face and neck at night. Gently massage in upward circular strokes.",
    ingredients: ["Kesar (Saffron)", "Yashtimadhu (Licorice)", "Manjistha", "Red Sandalwood", "Goat Milk"]
  },
  {
    id: "mahanarayana-tailam",
    name: "Mahanarayana Thailam",
    category: "Oils",
    image: "/product-banner/products/Mahanarayana tailam 1.png",
    originalPrice: 420,
    offerPrice: 350,
    volume: "200 ml",
    shortDesc: "A powerful nourishing oil to soothe tired muscles, support joint mobility, and relieve fatigue.",
    details: "Mahanarayana Thailam is a classical Ayurvedic formulation enriched with wild herbs and pure sesame oil. Renowned for its healing properties in musculoskeletal disorders, it provides deep tissue nourishment and restores strength to weakened joints.",
    benefits: [
      "Relieves joint pain, stiffness, and muscle fatigue",
      "Improves flexibility, joint range of motion, and vigor",
      "Supports fast recovery of muscles after intense physical strain",
      "Pacifies high Vata dosha"
    ],
    usage: "Massage warm oil over painful body regions. Wait 30-45 minutes before rinsing with warm water.",
    ingredients: ["Shatavari", "Ashwagandha", "Bala", "Gokshura", "Sesame Oil", "Camphor"]
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Oils", "Elixirs", "Wellness"];

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen text-[#3D0004] selection:bg-[#a84e32]/25 selection:text-[#3D0004] font-serif">
      <Header onOpenBooking={() => window.location.href = "/online-consultation"} forceSolid={true} />

      <main className="flex-grow pt-28 md:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Page Banner Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="font-samarn text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#3D0004] leading-tight">
              Ayurvedic Products Store
            </h1>
          </div>

          {/* Highlighted Products Banner */}
          <div className="-mx-6 md:-mx-12">
            <ProductBanner showViewAllLink={false} />
          </div>

          {/* Filtering Tabs */}
          <div className="flex justify-center space-x-2 md:space-x-4 mb-12 border-b border-[#680007]/10 pb-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-md font-bold uppercase tracking-widest transition-all duration-300 border-b-2 whitespace-nowrap cursor-pointer ${selectedCategory === category
                  ? "border-[#680007] text-[#680007]"
                  : "border-transparent text-[#3D0004]/60 hover:text-[#680007]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Listing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-[#ffff] flex flex-col transition-all duration-300 cursor-pointer"
              >
                {/* Image Container with Hover Actions */}
                <div className="relative w-full aspect-[4/5] bg-[#e6e0d5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-w-768px) 100vw, 20vw"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay containing 'Buy It Now' and 'View Details' */}
                  <div className="absolute inset-0 bg-[#3D0004]/65 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4 px-4 z-20">
                    <span
                      className="w-full max-w-[160px] border border-white hover:bg-white text-white hover:text-[#3D0004] py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer text-center"
                    >
                      View Details
                    </span>
                    <span
                      className="w-full max-w-[160px] bg-[#A3000B] hover:bg-[#faf8f5] text-white hover:text-[#3D0004] py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer text-center"
                    >
                      Buy It Now
                    </span>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-serif text-base md:text-lg font-medium text-[#3D0004] group-hover:text-[#b38e5d] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="font-serif text-md text-[#3D0004]/70 leading-relaxed mb-4 line-clamp-2">
                    {product.shortDesc}
                  </p>

                  {/* Pricing Row */}
                  <div className="flex items-center space-x-3 mt-auto font-sans">
                    <span className="text-sm line-through text-[#3D0004]/70">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-lg font-bold text-[#680007]">
                      ₹{product.offerPrice}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
