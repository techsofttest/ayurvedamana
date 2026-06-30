"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BookingModal from "../components/ui/BookingModal";
import HistoryCarousel from "../components/history/HistoryCarousel";

export default function HistoryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => {
    window.location.href = "/online-consultation";
  };
  const closeBooking = () => setIsBookingOpen(false);

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
      {/* Sticky Header */}
      <Header onOpenBooking={openBooking} forceSolid={true} />

      {/* Main Content */}
      <main className="flex-grow pt-28 md:pt-36 pb-20">

        {/* Parallax Background Wrapper (matches TrustHeritage design) */}
        <section className="relative w-full bg-transparent text-[#3D0004] font-serif py-12">

          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Top Title Section - Left aligned like reference image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full text-left mb-8 md:mb-12"
            >
              <span className="font-serif text-md uppercase tracking-wider text-[#680007] block mb-2">
                Our Lineage
              </span>
              <h1 className="font-samarn text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#680007] leading-tight uppercase">
                THE HISTORY OF <br /> PERUMBAYIL AYURVEDAMANA
              </h1>
            </motion.div>

            {/* Featured Main Image - Wide aspect matching the map/main photo in reference */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[21/9] sm:aspect-[16/6] md:aspect-[21/9] mb-12 md:mb-16 overflow-hidden rounded-sm border border-[#680007]/10"
            >
              <Image
                src="/history/history11.png"
                alt="Historical map and architecture of Perumbayil Ayurvedamana"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Two-Column Middle Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24"
            >
              <div className="space-y-4">
                <p className="font-serif text-base md:text-lg text-[#3D0004]/80 leading-relaxed font-light">
                  After the fall of the Mahodayapuram Cheras in 12th century, Malabar Coast was fragmented into numerous feudal city states called nads (swaroopams), ruled by Naduvazhis. Moopil Nair is the term used to denote Nair Naduvazhis (rulers of nads or city states) and Desavazhis (rulers of desams) of tiny feudal kingdoms on the Malabar Coast, present day Kerala state, South India. Moopil Nairs belonged to the Samanthan Nair subcaste of the Nair caste in the Hindu Caste system.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-serif text-base md:text-lg text-[#3D0004]/80 leading-relaxed font-light">
                  These Nads were again divided in to desams ruled by the Desavazhis. Perumbayil Tharavadu was the desavazhis of Paluvai desam.
                </p>
              </div>
            </motion.div>

            {/* Split Bottom Section - Carousel Left, Title + Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
            >
              {/* Left Column: Carousel & Caption */}
              <div className="md:col-span-6 space-y-3">
                <HistoryCarousel />
                <p className="font-serif text-md text-[#3D0004] italic pl-1">
                  Historical representation of the ancient mana and surrounding heritage estates.
                </p>
              </div>

              {/* Right Column: Title & Detailed Narrative */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <span className="font-serif text-md uppercase tracking-wider text-[#680007] block mb-1">
                    PERUMBAYIL THARAVADU
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-[#680007] tracking-tight uppercase">
                    Guruvayoor's Ancestral Lineage
                  </h2>
                </div>

                <p className="font-serif text-base md:text-lg text-[#3D0004]/80 leading-relaxed font-light">
                  Perumbayil family is one of the oldest and aristocratic Nair/Menon families in Guruvayoor Area. Some of this family members were ayurveda practitioners. The most famous royal dynasty of the Moopil Nairs were Valluvakkonathiris, who ruled Valluvanad, based on present day Angadippuram. Other important royal dynasties were that of Kavalappara Moopil Nair (of Kavalappara Swaroopam), Kuthiravattathu Moopil Nair (near Kozhikode, commanded Samoothiri of Calicut's cavalry forces), Mannarkad Moopil Nayar (ruled the area in and around Attappady) and Kuppathode Moopil Nair (ruled Pulpally).
                </p>
              </div>
            </motion.div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation/Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
