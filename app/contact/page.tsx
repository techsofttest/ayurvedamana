"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BookingModal from "../components/ui/BookingModal";
import StyledButton from "../components/ui/StyledButton";
import {
  IoAirplaneOutline,
  IoTrainOutline,
  IoBusOutline,
  IoWarningOutline,
  IoLocationOutline,
  IoGlobeOutline,
  IoMailOutline,
  IoCallOutline
} from "react-icons/io5";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "4px"]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div className="relative flex flex-col min-h-screen text-[#680007] overflow-x-hidden selection:bg-[#a84e32]/25 selection:text-[#680007]">
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

      {/* Header */}
      <Header onOpenBooking={openBooking} />

      {/* Main Content */}
      <main className="flex-grow pb-20">

        {/* Parallax Hero Section - Banner design matches other subpages */}
        <motion.section
          ref={heroRef}
          className="relative w-full h-[60vh] bg-[#3D0004] z-20 flex flex-col justify-end"
          style={{ scale, borderRadius, opacity }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/package-banner/welcome2.png"
              alt="Contact Banner"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

          {/* Content Container */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-8 md:pb-12 pt-24 z-20">
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-white/10 pb-6">
              {/* Title */}
              <div className="max-w-2xl text-left">
                <h1 className="font-samarn text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight uppercase">
                  Contact Us
                </h1>
              </div>

              {/* Subtitle */}
              <div className="max-w-md text-left md:text-right">
                <p className="font-serif text-xs md:text-sm text-white/90 font-medium uppercase tracking-widest leading-relaxed">
                  Start your journey to healing <br /> at our ancestral heritage retreat.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 font-serif">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Address & Core Info (7 Cols) */}
            <div className="lg:col-span-7 space-y-10">

              <div>
                <span className="text-md md:text-lg uppercase tracking-wider text-[#680007] block mb-2 font-medium">
                  Location & Office
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-[#680007] uppercase">
                  Perumbayil Ayurveda Mana
                </h2>
                <p className="text-[#680007] text-base mt-1 uppercase tracking-widest">
                  A NABH-Accredited Ayurveda Hospital
                </p>
              </div>

              {/* Address Block */}
              <div className="space-y-3 text-xl md:text-2xl text-[#680007]/80 font-light leading-relaxed">
                <p className="flex items-start gap-3">
                  <IoLocationOutline className="text-[#680007] mt-1.5 flex-shrink-0 text-xl md:text-2xl" />
                  <span>Perumbaipadi, Paluvai, Guruvayoor, Trichur Dist, Kerala, India &mdash; Pin: <span className="font-sans">680552</span></span>
                </p>
                <p className="flex items-center gap-3 pt-2">
                  <IoGlobeOutline className="text-[#680007] flex-shrink-0 text-xl md:text-2xl" />
                  <a
                    href="http://www.ayurvedamana.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#680007] hover:underline font-normal"
                  >
                    www.ayurvedamana.com
                  </a>
                </p>
              </div>

              {/* Contacts Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#680007]/10">
                <div className="space-y-2">
                  <h4 className="text-sm uppercase tracking-widest text-[#680007] font-semibold flex items-center gap-2">
                    <IoMailOutline className="text-[#680007] flex-shrink-0 text-lg" />
                    Room Bookings & Enquiries
                  </h4>
                  <p className="text-lg md:text-xl text-[#680007]/80 font-light">
                    <a href="mailto:info@ayurvedamana.com" className="hover:underline text-[#680007] font-normal">
                      info@ayurvedamana.com
                    </a>
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm uppercase tracking-widest text-[#680007] font-semibold flex items-center gap-2">
                    <IoCallOutline className="text-[#680007] flex-shrink-0 text-lg" />
                    Consultation Bookings
                  </h4>
                  <div className="text-lg md:text-xl text-[#680007]/80 font-light space-y-1 font-sans">
                    <p>
                      <a href="tel:+914872560009" className="hover:underline">
                        +91 487 2560009
                      </a>
                    </p>
                    <p>
                      <a href="tel:+919645095696" className="hover:underline">
                        +91 96450 95696
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* IMPORTANT Disclaimer Card */}
              <div className="bg-[#680007]/5 border border-[#680007]/15 p-8 rounded-none space-y-3 mt-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#680007] flex items-center gap-2">
                  <IoWarningOutline className="text-[#680007] text-xl" /> IMPORTANT NOTICE
                </h4>
                <p className="text-[#680007] text-lg md:text-xl font-medium uppercase tracking-wide leading-relaxed">
                  THERE ARE NO SPA OR DAY MASSAGES AVAILABLE HERE.
                </p>
                <p className="text-[#680007]/80 text-base md:text-lg font-light leading-relaxed">
                  Perumbayil Ayurvedamana operates strictly as a clinical, NABH-accredited Ayurvedic Hospital focusing on lineage-based therapies, custom dietary restoration, and physician-supervised healthcare programs.
                </p>
              </div>

            </div>

            {/* Right Column: Travel & Connectivity (5 Cols) */}
            <div className="lg:col-span-5 bg-white border border-[#680007]/10 p-8 rounded-none space-y-8 sticky top-28">

              <div>
                <h3 className="text-2xl font-medium text-[#680007] uppercase border-b border-[#680007]/10 pb-3 mb-6">
                  Connectivity Guide
                </h3>

                {/* Airports */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm uppercase tracking-widest text-[#680007]/60 font-semibold flex items-center gap-2">
                    <IoAirplaneOutline className="text-[#680007]/70 flex-shrink-0 text-xl" /> Nearby Airports
                  </h4>
                  <ul className="space-y-2 text-lg text-[#680007]/80 font-light pl-6 list-disc">
                    <li>Kochi Airport (COK) &mdash; <span className="font-sans">2</span> hours drive</li>
                    <li>Calicut Airport (CCJ) &mdash; <span className="font-sans">2 ½</span> hours drive</li>
                    <li>Coimbatore Airport (CJB) &mdash; <span className="font-sans">3</span> hours drive</li>
                  </ul>
                </div>

                {/* Railway Stations */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm uppercase tracking-widest text-[#680007]/60 font-semibold flex items-center gap-2">
                    <IoTrainOutline className="text-[#680007]/70 flex-shrink-0 text-xl" /> Railway Stations
                  </h4>
                  <ul className="space-y-2 text-lg text-[#680007]/80 font-light pl-6 list-disc">
                    <li>Guruvayoor Station &mdash; <span className="font-sans">3</span> kms</li>
                    <li>Trichur Station &mdash; <span className="font-sans">30</span> kms</li>
                  </ul>
                </div>

                {/* Local Town */}
                <div className="space-y-3">
                  <h4 className="text-sm uppercase tracking-widest text-[#680007]/60 font-semibold flex items-center gap-2">
                    <IoBusOutline className="text-[#680007]/70 flex-shrink-0 text-xl" /> Nearby Town & Bus Station
                  </h4>
                  <ul className="space-y-2 text-lg text-[#680007]/80 font-light pl-6 list-disc">
                    <li>Guruvayoor &mdash; <span className="font-sans">3</span> kms</li>
                  </ul>
                </div>

              </div>

              <div className="pt-4 border-t border-[#680007]/10">
                <StyledButton
                  onClick={openBooking}
                  className="w-full text-center text-white"
                >
                  Consult Online Now
                </StyledButton>
              </div>

            </div>

          </div>

          {/* Embedded Map Section */}
          <div className="mt-16 md:mt-24 bg-white border border-[#680007]/10 w-full overflow-hidden">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#680007] mb-4 pt-4 pl-1 flex items-center gap-2">
              <IoLocationOutline className="text-[#680007] text-xl" /> Find Us On Google Maps
            </h3>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3922.038593114974!2d76.051127!3d10.576153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7949d7d6e48f3%3A0x65b1d1ed6108499c!2sPerumbayil%20Ayurvedamana%2C%20NABH%20Accredited%20Ayurveda%20Hospital!5e0!3m2!1sen!2sus!4v1782817027455!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>

        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
