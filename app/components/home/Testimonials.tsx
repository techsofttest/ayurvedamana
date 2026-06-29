"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  quote: string;
  narrative: string;
  videoUrl?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    location: "Australia",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    quote: "Ayurveda Mana changed my life. The therapies, care and environment helped me heal naturally and find balance in my body and mind.",
    narrative: "Arrived with chronic physical exhaustion. Underwent a personalized rejuvenation program that successfully restored sleep rhythms and energy balance.",
  },
  {
    name: "Dr. Dominique",
    location: "France",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "This is my first experience in Ayurveda and it was amazing. Treatments are at top level.",
    narrative: "Sought muscular recovery and nervous system rebalancing. Experienced substantial physical agility improvements under the senior Aramthampuran physicians.",
    videoUrl: "https://www.youtube.com/embed/gZ8z9mTIkwQ",
  },
  {
    name: "Sabine Landyt",
    location: "Belgium",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    quote: "Everyone took care of me through my 4 weeks. I discovered the delicious vegetarian Indian cuisine.",
    narrative: "Aimed for metabolic rebalancing. Benefited from strict doctor-directed dietary planning (farm-to-table cuisine) paired with daily custom cleansing oils.",
  },
  {
    name: "Allister Bond",
    location: "Thailand",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "My first Ayurveda experience... I came here with two specific goals and both have been achieved.",
    narrative: "Targeted lumbar disc compression and spinal mobility. Achieved full recovery of movement range through localized Kativasthy hot oil therapies, avoiding surgical recommendations.",
  },
  {
    name: "Carmel Cessna",
    location: "Florida, USA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "Overall, I found my time here to be very restorative. This was my first time at Ayurveda Mana.",
    narrative: "Sought high-end clinical environment for stress fatigue recovery. Found deep rest in the calm heritage campus, experiencing significant improvement in sleep and cortisol levels.",
    videoUrl: "https://www.youtube.com/embed/3dtY9cxJlBQ",
  }
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    setPlayVideo(false);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setPlayVideo(false);
  };

  const currentTestimonial = TESTIMONIALS[activeSlide];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="testimonials" className="w-full text-[#3D0004] font-sans py-16 md:py-24 bg-transparent"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <div className="flex flex-col items-center text-center space-y-2 mb-16">
          <div className="w-[70%] h-0.5 bg-[#680007]/20"></div>
          <span className="font-serif text-2xl font-light text-[#680007]">
            Trusted by Thousands
          </span>
          <h2 className="font-samarn text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#3D0004] leading-tight">
            Patient Success Stories
          </h2>
          <div className="w-[70%] h-0.5 bg-[#680007]/20"></div>
        </div>

        <div className="relative w-full flex flex-col items-center min-h-[260px] md:min-h-[200px] justify-center">
          <span className="font-serif text-7xl text-[#b38e5d]/60 leading-none pointer-events-none select-none h-8">
            &ldquo;
          </span>

          {playVideo && currentTestimonial.videoUrl ? (
            <div className="relative w-full max-w-xl aspect-video border border-[#680007]/15 mt-4 overflow-hidden bg-black shadow-md rounded-sm animate-fade-in">
              <iframe
                src={`${currentTestimonial.videoUrl}?autoplay=1`}
                title={`Testimonial video by ${currentTestimonial.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              ></iframe>
            </div>
          ) : (
            <p className="font-serif italic text-lg md:text-4xl text-[#3D0004] leading-relaxed max-w-2xl mt-2 transition-all duration-500 animate-fade-in">
              {currentTestimonial.quote}
            </p>
          )}

          <div className="flex items-center space-x-6 mt-8">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#b38e5d]/30 bg-[#faf8f5]">
                <Image
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left leading-tight">
                <h4 className="font-serif text-sm font-semibold text-[#3D0004]">
                  {currentTestimonial.name}
                </h4>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#3D0004]/60">
                  {currentTestimonial.location}
                </span>
              </div>
            </div>

            {currentTestimonial.videoUrl && (
              <button
                onClick={() => setPlayVideo(!playVideo)}
                className="flex items-center space-x-1.5 bg-[#680007] hover:bg-[#b38e5d] text-[#faf8f5] px-3 py-1.5 rounded-sm text-[10px] uppercase font-bold tracking-wider transition-all cursor-pointer shadow-xs border border-[#680007] hover:border-[#b38e5d]"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{playVideo ? "Show Text Review" : "Play Video Review"}</span>
              </button>
            )}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#680007]/10 flex items-center justify-center text-[#3D0004]/60 hover:text-[#3D0004] hover:border-[#b38e5d] transition-all hover:scale-105 active:scale-95 bg-[#FBF3EF] shadow-xs cursor-pointer z-10"
            aria-label="Previous Testimonial"
          >
            &larr;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#680007]/10 flex items-center justify-center text-[#3D0004]/60 hover:text-[#3D0004] hover:border-[#b38e5d] transition-all hover:scale-105 active:scale-95 bg-[#FBF3EF] shadow-xs cursor-pointer z-10"
            aria-label="Next Testimonial"
          >
            &rarr;
          </button>
        </div>

        <div className="flex space-x-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSlide(idx);
                setPlayVideo(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? "bg-[#680007] w-4" : "bg-[#680007]/20"}`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
