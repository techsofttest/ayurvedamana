"use client";

import { useState } from "react";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BookingModal from "../components/ui/BookingModal";
import PhysiciansHero from "../components/physicians/PhysiciansHero";
import AshtaVidyaSection from "../components/physicians/AshtaVidyaSection";
import GuruparamparaSection from "../components/physicians/GuruparamparaSection";
import OtherDoctorsSection from "../components/physicians/OtherDoctorsSection";

export default function PhysiciansPage() {
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
            <Header onOpenBooking={openBooking} />

            {/* Main Content */}
            <main className="flex-grow pb-20">
                <PhysiciansHero />
                <AshtaVidyaSection />
                <GuruparamparaSection />
                <OtherDoctorsSection />

            </main>

            {/* Footer */}
            <Footer />

            {/* Consultation/Booking Modal */}
            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
        </div>
    );
}