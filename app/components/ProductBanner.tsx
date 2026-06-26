"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import StyledButton from "./StyledButton";
import Image from "next/image";

export default function ProductBanner() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12"
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/7] md:aspect-[16/5] min-h-[400px] md:min-h-[500px] overflow-hidden bg-[#061209]">

        {/* LAYER 1: Background (z-0) */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/product-banner/background.png"
            alt="Lush herbal garden background"
            fill
            className="object-cover object-[center_60%]"
            priority
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0410064D] via-[#08180A1A] to-[#04100699] z-10" />
        </div>

        {/* AMBIENT DOTS (z-20) */}
        <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
          <span className="absolute w-[4px] h-[4px] rounded-full bg-white/90 shadow-[0_0_5px_2px_rgba(255,255,255,0.45)] animate-pulse" style={{ top: "8%", left: "7%", animationDelay: "0s", animationDuration: "2.6s" }} />
          <span className="absolute w-[3px] h-[3px] rounded-full bg-white/90 shadow-[0_0_5px_2px_rgba(255,255,255,0.45)] animate-pulse" style={{ top: "15%", left: "22%", animationDelay: "0.4s", animationDuration: "3.0s" }} />
          <span className="absolute w-[5px] h-[5px] rounded-full bg-white/90 shadow-[0_0_5px_2px_rgba(255,255,255,0.45)] animate-pulse" style={{ top: "6%", left: "38%", animationDelay: "0.8s", animationDuration: "2.2s" }} />
          <span className="absolute w-[4px] h-[4px] rounded-full bg-white/90 shadow-[0_0_5px_2px_rgba(255,255,255,0.45)] animate-pulse" style={{ top: "9%", left: "68%", animationDelay: "1.1s", animationDuration: "3.2s" }} />
          <span className="absolute w-[5px] h-[5px] rounded-full bg-white/90 shadow-[0_0_5px_2px_rgba(255,255,255,0.45)] animate-pulse" style={{ top: "32%", left: "60%", animationDelay: "0.1s", animationDuration: "3.4s" }} />
          <span className="absolute w-[5px] h-[5px] rounded-full bg-white/90 shadow-[0_0_5px_2px_rgba(255,255,255,0.45)] animate-pulse" style={{ top: "55%", left: "18%", animationDelay: "0.45s", animationDuration: "2.8s" }} />
          <span className="absolute w-[4px] h-[4px] rounded-full bg-white/90 shadow-[0_0_5px_2px_rgba(255,255,255,0.45)] animate-pulse" style={{ top: "65%", left: "10%", animationDelay: "0.55s", animationDuration: "3.4s" }} />
        </div>

        {/* LAYER 2: Midground Products (z-30) */}
        <div className="absolute inset-x-0 bottom-[12%] h-[50%] z-30 pointer-events-none flex justify-center items-end gap-x-4 md:gap-x-8">

          {/* PRODUCT 1: Balaguluchyadi */}
          <a
            href="/products/balaguluchyadi"
            className={`relative flex flex-col items-center origin-bottom transition-all duration-300 ease-out cursor-pointer pointer-events-auto ${hovered === "balaguluchyadi" ? "scale-110 z-50" : "z-30"}`}
            style={{ width: "100px" }}
            onMouseEnter={() => setHovered("balaguluchyadi")}
            onMouseLeave={() => setHovered(null)}
            aria-label="Balaguluchyadi"
          >
            <div className={`relative w-full transition-all duration-300 ${hovered === "balaguluchyadi" ? "drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] brightness-110" : "drop-shadow-[0_8px_20px_rgba(0,0,0,0.50)]"}`}>
              <Image src="/product-banner/products/Balaguluchyadi 1.png" alt="Balaguluchyadi" width={100} height={140} className="w-full h-auto object-contain block" />
            </div>

            {/* Center Dot */}
            <span className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.28),0_0_12px_5px_rgba(255,255,255,0.50)] transition-opacity duration-300 z-40 ${hovered === "balaguluchyadi" ? "opacity-100" : "opacity-0"}`} />

            {/* Top-Right Angled Tooltip */}
            <div className={`absolute top-[45%] left-1/2 z-40 transition-all duration-300 pointer-events-none ${hovered === "balaguluchyadi" ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"}`}>
              <div className="absolute top-0 left-0 w-12 md:w-16 h-[1.5px] bg-white/80 origin-top-left -rotate-45" />
              <div className="absolute bottom-[34px] left-[34px] md:bottom-[45px] md:left-[45px] flex flex-col items-start px-4 py-1.5 bg-white -skew-x-[15deg] shadow-lg">
                <span className="font-serif text-[10px] md:text-sm font-semibold text-[#3D0004] skew-x-[15deg] whitespace-nowrap">Balaguluchyadi</span>
                <span className="text-[9px] md:text-xs text-[#3D0004]/70 skew-x-[15deg] whitespace-nowrap">₹250</span>
              </div>
            </div>
          </a>

          {/* PRODUCT 2: Chyavanaprasham */}
          <a
            href="/products/chyavanaprasham"
            className={`relative flex flex-col items-center origin-bottom transition-all duration-300 ease-out cursor-pointer pointer-events-auto ${hovered === "chyavanaprasham" ? "scale-110 z-50" : "z-30"}`}
            style={{ width: "118px" }}
            onMouseEnter={() => setHovered("chyavanaprasham")}
            onMouseLeave={() => setHovered(null)}
            aria-label="Chyavanaprasham"
          >
            <div className={`relative w-full transition-all duration-300 ${hovered === "chyavanaprasham" ? "drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] brightness-110" : "drop-shadow-[0_8px_20px_rgba(0,0,0,0.50)]"}`}>
              <Image src="/product-banner/products/Chayanaprasaham 1.png" alt="Chyavanaprasham" width={118} height={165} className="w-full h-auto object-contain block" />
            </div>

            {/* Center Dot */}
            <span className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.28),0_0_12px_5px_rgba(255,255,255,0.50)] transition-opacity duration-300 z-40 ${hovered === "chyavanaprasham" ? "opacity-100" : "opacity-0"}`} />

            {/* Top-Right Angled Tooltip */}
            <div className={`absolute top-[45%] left-1/2 z-40 transition-all duration-300 pointer-events-none ${hovered === "chyavanaprasham" ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"}`}>
              <div className="absolute top-0 left-0 w-12 md:w-16 h-[1.5px] bg-white/80 origin-top-left -rotate-45" />
              <div className="absolute bottom-[34px] left-[34px] md:bottom-[45px] md:left-[45px] flex flex-col items-start px-4 py-1.5 bg-white -skew-x-[15deg] shadow-lg">
                <span className="font-serif text-[10px] md:text-sm font-semibold text-[#3D0004] skew-x-[15deg] whitespace-nowrap">Chyavanaprasham</span>
                <span className="text-[9px] md:text-xs text-[#3D0004]/70 skew-x-[15deg] whitespace-nowrap">₹450</span>
              </div>
            </div>
          </a>

          {/* PRODUCT 3: Dhanwantaram Tailam */}
          <a
            href="/products/dhanwantaram-tailam"
            className={`relative flex flex-col items-center origin-bottom transition-all duration-300 ease-out cursor-pointer pointer-events-auto ${hovered === "dhanwantaram" ? "scale-110 z-50" : "z-30"}`}
            style={{ width: "102px" }}
            onMouseEnter={() => setHovered("dhanwantaram")}
            onMouseLeave={() => setHovered(null)}
            aria-label="Dhanwantaram Tailam"
          >
            <div className={`relative w-full transition-all duration-300 ${hovered === "dhanwantaram" ? "drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] brightness-110" : "drop-shadow-[0_8px_20px_rgba(0,0,0,0.50)]"}`}>
              <Image src="/product-banner/products/Dhanwantaram Tailam 1.png" alt="Dhanwantaram Tailam" width={102} height={143} className="w-full h-auto object-contain block" />
            </div>

            {/* Center Dot */}
            <span className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.28),0_0_12px_5px_rgba(255,255,255,0.50)] transition-opacity duration-300 z-40 ${hovered === "dhanwantaram" ? "opacity-100" : "opacity-0"}`} />

            {/* Top-Right Angled Tooltip */}
            <div className={`absolute top-[45%] left-1/2 z-40 transition-all duration-300 pointer-events-none ${hovered === "dhanwantaram" ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"}`}>
              <div className="absolute top-0 left-0 w-12 md:w-16 h-[1.5px] bg-white/80 origin-top-left -rotate-45" />
              <div className="absolute bottom-[34px] left-[34px] md:bottom-[45px] md:left-[45px] flex flex-col items-start px-4 py-1.5 bg-white -skew-x-[15deg] shadow-lg">
                <span className="font-serif text-[10px] md:text-sm font-semibold text-[#3D0004] skew-x-[15deg] whitespace-nowrap">Dhanwantaram Tailam</span>
                <span className="text-[9px] md:text-xs text-[#3D0004]/70 skew-x-[15deg] whitespace-nowrap">₹320</span>
              </div>
            </div>
          </a>

          {/* PRODUCT 4: Kottamchukaadi */}
          <a
            href="/products/kottamchukaadi"
            className={`relative flex flex-col items-center origin-bottom transition-all duration-300 ease-out cursor-pointer pointer-events-auto ${hovered === "kottamchukaadi" ? "scale-110 z-50" : "z-30"}`}
            style={{ width: "102px" }}
            onMouseEnter={() => setHovered("kottamchukaadi")}
            onMouseLeave={() => setHovered(null)}
            aria-label="Kottamchukaadi"
          >
            <div className={`relative w-full transition-all duration-300 ${hovered === "kottamchukaadi" ? "drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] brightness-110" : "drop-shadow-[0_8px_20px_rgba(0,0,0,0.50)]"}`}>
              <Image src="/product-banner/products/Kottamchukaadi 1.png" alt="Kottamchukaadi" width={102} height={143} className="w-full h-auto object-contain block" />
            </div>

            {/* Center Dot */}
            <span className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.28),0_0_12px_5px_rgba(255,255,255,0.50)] transition-opacity duration-300 z-40 ${hovered === "kottamchukaadi" ? "opacity-100" : "opacity-0"}`} />

            {/* Top-Right Angled Tooltip */}
            <div className={`absolute top-[45%] left-1/2 z-40 transition-all duration-300 pointer-events-none ${hovered === "kottamchukaadi" ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"}`}>
              <div className="absolute top-0 left-0 w-12 md:w-16 h-[1.5px] bg-white/80 origin-top-left -rotate-45" />
              <div className="absolute bottom-[34px] left-[34px] md:bottom-[45px] md:left-[45px] flex flex-col items-start px-4 py-1.5 bg-white -skew-x-[15deg] shadow-lg">
                <span className="font-serif text-[10px] md:text-sm font-semibold text-[#3D0004] skew-x-[15deg] whitespace-nowrap">Kottamchukaadi</span>
                <span className="text-[9px] md:text-xs text-[#3D0004]/70 skew-x-[15deg] whitespace-nowrap">₹280</span>
              </div>
            </div>
          </a>

          {/* PRODUCT 5: Kumkumadi Tailam */}
          <a
            href="/products/kumkumadi-tailam"
            className={`relative flex flex-col items-center origin-bottom transition-all duration-300 ease-out cursor-pointer pointer-events-auto ${hovered === "kumkumadi" ? "scale-110 z-50" : "z-30"}`}
            style={{ width: "93px" }}
            onMouseEnter={() => setHovered("kumkumadi")}
            onMouseLeave={() => setHovered(null)}
            aria-label="Kumkumadi Tailam"
          >
            <div className={`relative w-full transition-all duration-300 ${hovered === "kumkumadi" ? "drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] brightness-110" : "drop-shadow-[0_8px_20px_rgba(0,0,0,0.50)]"}`}>
              <Image src="/product-banner/products/Kumkumadi 1.png" alt="Kumkumadi Tailam" width={93} height={130} className="w-full h-auto object-contain block" />
            </div>

            {/* Center Dot */}
            <span className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.28),0_0_12px_5px_rgba(255,255,255,0.50)] transition-opacity duration-300 z-40 ${hovered === "kumkumadi" ? "opacity-100" : "opacity-0"}`} />

            {/* Top-Right Angled Tooltip */}
            <div className={`absolute top-[45%] left-1/2 z-40 transition-all duration-300 pointer-events-none ${hovered === "kumkumadi" ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"}`}>
              <div className="absolute top-0 left-0 w-12 md:w-16 h-[1.5px] bg-white/80 origin-top-left -rotate-45" />
              <div className="absolute bottom-[34px] left-[34px] md:bottom-[45px] md:left-[45px] flex flex-col items-start px-4 py-1.5 bg-white -skew-x-[15deg] shadow-lg">
                <span className="font-serif text-[10px] md:text-sm font-semibold text-[#3D0004] skew-x-[15deg] whitespace-nowrap">Kumkumadi Tailam</span>
                <span className="text-[9px] md:text-xs text-[#3D0004]/70 skew-x-[15deg] whitespace-nowrap">₹750</span>
              </div>
            </div>
          </a>

          {/* PRODUCT 6: Mahanarayana Tailam */}
          <a
            href="/products/mahanarayana-tailam"
            className={`relative flex flex-col items-center origin-bottom transition-all duration-300 ease-out cursor-pointer pointer-events-auto ${hovered === "mahanarayana" ? "scale-110 z-50" : "z-30"}`}
            style={{ width: "107px" }}
            onMouseEnter={() => setHovered("mahanarayana")}
            onMouseLeave={() => setHovered(null)}
            aria-label="Mahanarayana Tailam"
          >
            <div className={`relative w-full transition-all duration-300 ${hovered === "mahanarayana" ? "drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] brightness-110" : "drop-shadow-[0_8px_20px_rgba(0,0,0,0.50)]"}`}>
              <Image src="/product-banner/products/Mahanarayana tailam 1.png" alt="Mahanarayana Tailam" width={107} height={150} className="w-full h-auto object-contain block" />
            </div>

            {/* Center Dot */}
            <span className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.28),0_0_12px_5px_rgba(255,255,255,0.50)] transition-opacity duration-300 z-40 ${hovered === "mahanarayana" ? "opacity-100" : "opacity-0"}`} />

            {/* Top-Right Angled Tooltip */}
            <div className={`absolute top-[45%] left-1/2 z-40 transition-all duration-300 pointer-events-none ${hovered === "mahanarayana" ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-2 translate-y-2"}`}>
              <div className="absolute top-0 left-0 w-12 md:w-16 h-[1.5px] bg-white/80 origin-top-left -rotate-45" />
              <div className="absolute bottom-[34px] left-[34px] md:bottom-[45px] md:left-[45px] flex flex-col items-start px-4 py-1.5 bg-white -skew-x-[15deg] shadow-lg">
                <span className="font-serif text-[10px] md:text-sm font-semibold text-[#3D0004] skew-x-[15deg] whitespace-nowrap">Mahanarayana Tailam</span>
                <span className="text-[9px] md:text-xs text-[#3D0004]/70 skew-x-[15deg] whitespace-nowrap">₹350</span>
              </div>
            </div>
          </a>
        </div>

        {/* LAYER 3: Foreground grass cutout (z-40) */}
        <div className="absolute bottom-0 left-0 w-full h-[35%] z-40 pointer-events-none">
          <Image
            src="/product-banner/foreground4.png"
            alt=""
            fill
            className="object-cover object-bottom"
            aria-hidden="true"
          />
        </div>

        {/* Heading Layer (Left Aligned) */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center text-center space-y-2">
          <div className="w-[70%] h-0.5 bg-white/20"></div>
          <span className="font-serif text-2xl font-light text-white/90">
            Ancient Wisdom, Bottled
          </span>
          <h2 className="font-samarn text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
            Our Signature Products
          </h2>
          <div className="w-[70%] h-0.5 bg-white/20"></div>
        </div>

        {/* View All Products Button (Right Aligned) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
          <StyledButton href="/products" variant="secondary" className="text-white border-1 border-white hover:bg-white/10 hover:text-white">
            View All Products
          </StyledButton>
        </div>

      </div>
    </motion.section>
  );
}