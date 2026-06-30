"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import TrustIndicators from "./TrustIndicators";

interface HeroProps {
  onOpenBooking: () => void;
}

const STORY_SLIDES = [
  {
    label: "Chapter I: The Arrival",
    title: "Escaping the noise to seek sanctuary.",
    story: "Exhausted by the relentless pace of city life, Sarah arrives at Perumbayil Ayurvedamana. The gentle whisper of leaves and scent of herbs signal the start of her transformation.",
    image: "/hero-bg/welcome2.png",
    shortName: "Arrival"
  },
  {
    label: "Chapter II: Pure Hospitality",
    title: "Welcomed like royalty, cared for like family.",
    story: "Warm herbal drinks, customized organic meals aligned to her constitution, and the sincere hospitality of our heritage lineage make Sarah feel truly at home.",
    image: "/hero-bg/client-food.png",
    shortName: "Hospitality"
  },
  {
    label: "Chapter III: Mindful Practice",
    title: "Reconnecting body, breath, and nature.",
    story: "In the soft morning light, Sarah learns the art of mindful breathing and yoga. With every posture, she releases deep physical tension and discovers inner clarity.",
    image: "/hero-bg/clent-yoga.png",
    shortName: "Yoga"
  },
  {
    label: "Chapter IV: Sacred Healing",
    title: "Time-tested therapies tailored for you.",
    story: "Under the guidance of our Aramthampuran physicians, Sarah undergoes deep cleansing treatments custom-tailored to her unique dosha balance.",
    image: "/hero-bg/client-tratment.png",
    shortName: "Healing"
  },
  {
    label: "Chapter V: Rejuvenation",
    title: "Emerging restored, radiant, and whole.",
    story: "Following authentic therapeutic herbal oil massages, Sarah feels her stress dissolve entirely—leaving her fully restored, energized, and ready to embrace life.",
    image: "/hero-bg/client-oilmessage.png",
    shortName: "Rejuvenation"
  }
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroRef = useRef<HTMLElement>(null);

  // Framer Motion scroll animations for the zoom-out effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"] // Animate from when the top of the section hits the top of the viewport, to when the bottom hits the top
  });

  // As scrollYProgress goes from 0 to 1 (scrolling down), scale down and increase border radius
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "4px"]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Auto-play timer (5 seconds per slide)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % STORY_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % STORY_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + STORY_SLIDES.length) % STORY_SLIDES.length);
  };

  const handleSelect = (idx: number) => {
    setCurrentSlide(idx);
  };

  return (
    <motion.section
      ref={heroRef}
      className="relative w-full h-[90vh] min-h-[480px] lg:min-h-[520px] overflow-hidden bg-[#3D0004] font-serif"
      style={{ scale, borderRadius, opacity }}
    >
      <style>{`
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-bar {
          animation: progressBar 5000ms linear forwards;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Horizontal Storytelling Sliding Background Layer */}
      <div
        className="absolute inset-0 z-0 flex transition-transform duration-[1200ms] ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {STORY_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-full h-full flex-shrink-0"
          >
            <Image
              src={slide.image}
              alt={`Sarah's Journey - ${slide.shortName}`}
              fill
              priority={idx === 0}
              className="object-cover object-center opacity-85"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay on Top-Left Corner only for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/30 via-30% to-transparent to-60% z-5"></div>

      {/* Top-Left Content: Title & Chapter */}
      <div
        key={`title-${currentSlide}`}
        className="absolute top-12 left-6 md:top-40 md:left-12 max-w-lg md:max-w-xl text-left z-10 animate-fade-in-up"
      >
        {/* Chapter Designation */}
        <span className="block font-mono text-xs md:text-sm uppercase tracking-widest text-[#c8ab80] mb-2 md:mb-3">
          {STORY_SLIDES[currentSlide].label}
        </span>

        {/* Main Title Heading */}
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#faf8f5] leading-[1.2] mb-6">
          {STORY_SLIDES[currentSlide].title}
        </h1>

        {/* Carousel Controls (Placed below title) */}
        <div className="flex flex-col space-y-2 text-left">
          <div className="flex items-center space-x-3">
            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              className="p-2 text-[#faf8f5]/60 hover:text-[#faf8f5] transition-colors border border-white/10 hover:border-white/30 rounded-full cursor-pointer bg-black/10 hover:bg-black/25"
              aria-label="Previous Slide"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Indicator */}
            <span className="text-[11px] font-mono text-[#faf8f5]/85 bg-black/20 px-2.5 py-1 border border-white/10 rounded-sm">
              0{currentSlide + 1} / 0{STORY_SLIDES.length}
            </span>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="p-2 text-[#faf8f5]/60 hover:text-[#faf8f5] transition-colors border border-white/10 hover:border-white/30 rounded-full cursor-pointer bg-black/10 hover:bg-black/25"
              aria-label="Next Slide"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Current slide tagline */}
          {/* <span className="text-[9px] text-white/40 tracking-widest uppercase font-mono pl-1">
            {STORY_SLIDES[currentSlide].shortName}
          </span> */}
        </div>
      </div>

      {/* Bottom Content: Trust Indicators inside Hero with light black gradient overlay */}
      <TrustIndicators isHero={true} />
    </motion.section>
  );
}
