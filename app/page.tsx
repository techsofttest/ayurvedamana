"use client";

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustHeritage from "./components/TrustHeritage";
import TreatmentsBento from "./components/TreatmentsBento";
import SuccessStories from "./components/SuccessStories";
import ProductBanner from "./components/ProductBanner";
import Footer from "./components/Footer";
import VirtualTour from "./components/VirtualTour";
import Facilities from "./components/Facilities";
import WhyChooseCarousel from "./components/WhyChooseCarousel";
import BookingModal from "./components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-[#3D0004] overflow-x-hidden selection:bg-[#a84e32]/25 selection:text-[#3D0004]">
      {/* Sticky Header Navigation */}
      <Header onOpenBooking={openBooking} />

      {/* Main Content Layout */}
      <main className="flex-grow">

        <Hero onOpenBooking={openBooking} />

        <TrustHeritage />

        <TreatmentsBento />

        <VirtualTour />

        <Facilities />

        <WhyChooseCarousel />

        <ProductBanner />

        <SuccessStories />
      </main>
      <Footer />

      {/* Floating Action Elements */}
      {/* <WhatsAppFloat /> */}

      {/* State-driven Consultation/Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />

      {/* Hidden button for triggering modal programmatically from child components */}
      <button
        data-booking-trigger
        onClick={openBooking}
        className="sr-only"
        aria-hidden="true"
      >
        Trigger Booking
      </button>
    </div>
  );
}
