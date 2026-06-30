"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import BookingModal from "../../components/ui/BookingModal";
import categoriesData from "../../components/video-gallery-data.json";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryVideoGalleryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  // Find category in data
  const currentCategory = categoriesData.find(
    (cat) => cat.slug === decodeURIComponent(categorySlug)
  );

  if (!currentCategory) {
    return (
      <div className="relative flex flex-col min-h-screen text-[#680007] overflow-x-hidden selection:bg-[#a84e32]/25 selection:text-[#680007]">
        <Header onOpenBooking={openBooking} />
        <main className="flex-grow pt-36 pb-20 max-w-7xl mx-auto px-6 font-serif text-center space-y-6">
          <h1 className="text-3xl md:text-5xl uppercase font-light">Category Not Found</h1>
          <p className="text-lg font-light text-[#680007]/80">The requested video gallery category does not exist.</p>
          <Link href="/video-gallery" className="inline-block text-[#680007] border-b border-[#680007] pb-1 uppercase tracking-widest text-sm font-semibold">
            &larr; Return to Video Gallery
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const videos = currentCategory.videos;

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeVideoIndex !== null) {
      setActiveVideoIndex((activeVideoIndex + 1) % videos.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeVideoIndex !== null) {
      setActiveVideoIndex((activeVideoIndex - 1 + videos.length) % videos.length);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen text-[#680007] overflow-x-hidden selection:bg-[#a84e32]/25 selection:text-[#680007]">
      {/* Background Layers */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "linear-gradient(to top, hsla(208, 60%, 85%, 0.5) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
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

      {/* Header */}
      <Header onOpenBooking={openBooking} />

      {/* Main Content */}
      <main className="flex-grow pb-20">

        {/* Page Banner */}
        <section className="relative w-full h-[45vh] bg-[#3D0004] z-20 flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-section/building3.png"
              alt={currentCategory.name}
              fill
              priority
              className="object-cover opacity-60"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-8 md:pb-12 pt-24 z-20">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-white/10 pb-6">
              <div className="max-w-2xl text-left">
                <Link
                  href="/video-gallery"
                  className="font-serif text-xs md:text-sm text-white/70 hover:text-white uppercase tracking-wider mb-2 inline-block"
                >
                  &larr; Back to Video Gallery
                </Link>
                <h1 className="font-samarn text-2xl md:text-3xl lg:text-5xl font-light tracking-tight text-white leading-tight uppercase">
                  {currentCategory.name}
                </h1>
              </div>
              <div className="max-w-md text-left md:text-right">
                <p className="font-serif text-xs md:text-sm text-white/90 font-medium uppercase tracking-widest leading-relaxed">
                  Viewing collection &mdash; <span className="font-sans font-normal">{videos.length}</span> items
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-serif">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setActiveVideoIndex(index)}
                className="group relative aspect-[16/10] w-full overflow-hidden border border-[#680007]/10 bg-black/10 cursor-pointer hover:border-[#680007]/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <video
                  src={video.src}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Play icon overlay */}
                <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#680007]/90 text-white flex items-center justify-center pl-1 text-base group-hover:scale-110 transition-transform duration-300">
                    &#9658;
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Premium Full-Screen Video Lightbox Modal */}
      {activeVideoIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white z-[99999]"
          onClick={() => setActiveVideoIndex(null)}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-sm uppercase tracking-widest text-white/70">
              {videos[activeVideoIndex].title} &mdash; <span className="font-sans">{activeVideoIndex + 1}</span> / <span className="font-sans">{videos.length}</span>
            </span>
            <button
              onClick={() => setActiveVideoIndex(null)}
              className="text-white text-3xl font-light hover:text-white/70 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              &times;
            </button>
          </div>

          {/* Main Interactive Slide */}
          <div className="relative flex-grow flex items-center justify-center p-4">
            {/* Left Button */}
            {videos.length > 1 && (
              <button
                onClick={showPrev}
                className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-2xl cursor-pointer z-10 select-none"
                aria-label="Previous video"
              >
                &#8592;
              </button>
            )}

            {/* Video Player Container */}
            <div className="relative w-full max-w-4xl aspect-[16/9] shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <video
                src={videos[activeVideoIndex].src}
                autoPlay
                controls
                className="w-full h-full object-contain outline-none bg-black"
              />
            </div>

            {/* Right Button */}
            {videos.length > 1 && (
              <button
                onClick={showNext}
                className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-2xl cursor-pointer z-10 select-none"
                aria-label="Next video"
              >
                &#8594;
              </button>
            )}
          </div>

          {/* Bottom Bar Caption */}
          <div className="p-6 text-center text-sm font-serif text-white/50">
            Click outside or press Esc to close
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
