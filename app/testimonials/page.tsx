"use client";

import { useState } from "react";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BookingModal from "../components/ui/BookingModal";
import StyledButton from "../components/ui/StyledButton";

// Import custom components
import TestimonialHero from "../components/testimonial/TestimonialHero";
import CountryFilter from "../components/testimonial/CountryFilter";
import TestimonialCard from "../components/testimonial/TestimonialCard";
import VideoLightbox from "../components/testimonial/VideoLightbox";
import { SUCCESS_STORIES } from "../components/testimonial/data";

export default function TestimonialsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  // Derive unique countries for the filter requirement
  const countries = ["All", ...Array.from(new Set(SUCCESS_STORIES.map(story => story.country)))];

  const filteredStories = activeFilter === "All" 
    ? SUCCESS_STORIES 
    : SUCCESS_STORIES.filter(story => story.country === activeFilter);

  const handlePlayVideo = (src: string, title: string) => {
    setActiveVideo({ src, title });
  };

  return (
    <div className="relative flex flex-col min-h-screen text-[#3D0004] overflow-x-hidden selection:bg-[#a84e32]/25 selection:text-[#3D0004]">
      {/* Background Layers */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "linear-gradient(to top, hsla(208, 60%, 85%, 0.5) 0%, transparent 50%)",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
        }}
      />
      <div
        className="fixed inset-0 -z-30"
        style={{
          backgroundImage: "url('/backgrounds/cloud-texture.png')",
          opacity: 0.5,
        }}
      />
      
      <Header onOpenBooking={openBooking} />

      <main className="flex-grow pb-20">
        
        {/* Parallax Hero Section */}
        <TestimonialHero />

        {/* COUNTRY FILTER SECTION */}
        <CountryFilter 
          countries={countries} 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />

        {/* SUCCESS STORIES EDITORIAL LAYOUT (Single Column) */}
        <section className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-12">
            {filteredStories.map((story, index) => (
              <TestimonialCard 
                key={story.id} 
                story={story} 
                index={index} 
                onPlayVideo={handlePlayVideo} 
              />
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mt-24 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#680007] mb-8 uppercase">Ready to Write Your Own Success Story?</h2>
            <StyledButton onClick={openBooking} className="px-12 py-4 text-lg">
              Get Your Free Medical Opinion
            </StyledButton>
        </section>

      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />

      {/* Premium Full-Screen Video Lightbox Modal */}
      <VideoLightbox video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}