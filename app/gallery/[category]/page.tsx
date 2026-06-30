"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import BookingModal from "../../components/ui/BookingModal";
import categoriesData from "../../components/gallery-data.json";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryGalleryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = use(params);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

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
          <p className="text-lg font-light text-[#680007]/80">The requested gallery category does not exist.</p>
          <Link href="/gallery" className="inline-block text-[#680007] border-b border-[#680007] pb-1 uppercase tracking-widest text-sm font-semibold">
            &larr; Return to Gallery
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const images = currentCategory.images;

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
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
              src={images[0]}
              alt={currentCategory.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-8 md:pb-12 pt-24 z-20">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-white/10 pb-6">
              <div className="max-w-2xl text-left">
                <Link
                  href="/gallery"
                  className="font-serif text-xs md:text-sm text-white/70 hover:text-white uppercase tracking-wider mb-2 inline-block"
                >
                  &larr; Back to Gallery
                </Link>
                <h1 className="font-samarn text-2xl md:text-3xl lg:text-5xl font-light tracking-tight text-white leading-tight uppercase">
                  {currentCategory.name}
                </h1>
              </div>
              <div className="max-w-md text-left md:text-right">
                <p className="font-serif text-xs md:text-sm text-white/90 font-medium uppercase tracking-widest leading-relaxed">
                  Viewing collection &mdash; <span className="font-sans font-normal">{images.length}</span> items
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-serif">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className="group relative aspect-[4/3] w-full overflow-hidden border border-[#680007]/10 bg-[#e6e0d5] cursor-pointer hover:border-[#680007]/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Image
                  src={imgSrc}
                  alt={`${currentCategory.name} - ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-3xl font-light">+</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Premium Full-Screen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white z-[99999]"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6">
            <span className="font-serif text-sm uppercase tracking-widest text-white/70">
              {currentCategory.name} &mdash; <span className="font-sans">{activeImageIndex + 1}</span> / <span className="font-sans">{images.length}</span>
            </span>
            <button
              onClick={() => setActiveImageIndex(null)}
              className="text-white text-3xl font-light hover:text-white/70 transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              &times;
            </button>
          </div>

          {/* Main Interactive Slide */}
          <div className="relative flex-grow flex items-center justify-center p-4">
            {/* Left Button */}
            <button
              onClick={showPrev}
              className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-2xl cursor-pointer z-10 select-none"
              aria-label="Previous image"
            >
              &#8592;
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full max-w-5xl max-h-[75vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[activeImageIndex]}
                alt={`${currentCategory.name} - Fullscreen`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Right Button */}
            <button
              onClick={showNext}
              className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 text-2xl cursor-pointer z-10 select-none"
              aria-label="Next image"
            >
              &#8594;
            </button>
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
