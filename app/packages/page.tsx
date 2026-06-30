"use client";

import { useState, useMemo } from "react";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import BookingModal from "@/app/components/ui/BookingModal";
import StyledButton from "@/app/components/ui/StyledButton";
import PackagesHero from "@/app/components/packages/PackagesHero";
import PackageCard from "@/app/components/packages/PackageCard";
import {
    GENERAL_PROGRAMMES,
    WELLNESS_PACKAGES,
    SPECIAL_PACKAGES
} from "@/app/components/packages/data";

export default function PackagesPage() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all"); // "all" | "wellness" | "special" | "general"

    const openBooking = () => {
        window.location.href = "/online-consultation";
    };
    const closeBooking = () => setIsBookingOpen(false);

    // --- SEARCH AND FILTER LOGIC ---

    const filteredGeneral = useMemo(() => {
        return GENERAL_PROGRAMMES.filter(pkg =>
            pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const filteredWellness = useMemo(() => {
        return WELLNESS_PACKAGES.filter(pkg =>
            pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const filteredSpecial = useMemo(() => {
        return SPECIAL_PACKAGES.filter(pkg =>
            pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const hasResults = useMemo(() => {
        const hasGen = (activeTab === "all" || activeTab === "general") && filteredGeneral.length > 0;
        const hasWell = (activeTab === "all" || activeTab === "wellness") && filteredWellness.length > 0;
        const hasSpec = (activeTab === "all" || activeTab === "special") && filteredSpecial.length > 0;
        return hasGen || hasWell || hasSpec;
    }, [activeTab, filteredGeneral, filteredWellness, filteredSpecial]);

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

                {/* HERO SECTION */}
                <PackagesHero
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* RESULTS GRID / NO RESULTS EMPTY STATE */}
                <div className="relative w-full">
                    <div>
                        {!hasResults ? (
                            <div
                                className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center"
                            >
                                <div className="max-w-md mx-auto flex flex-col items-center">
                                    <span className="text-[#680007] text-4xl mb-4">◆</span>
                                    <h3 className="font-serif text-2xl font-medium text-[#680007] uppercase mb-3">
                                        No Packages Found
                                    </h3>
                                    <p className="font-serif text-md text-[#3D0004]/70 leading-relaxed font-light mb-6">
                                        We couldn't find any packages matching "{searchQuery}". Please try another search query or request a custom consultation tailored to your wellness needs.
                                    </p>
                                    <StyledButton href="/online-consultation" variant="primary">
                                        Custom Consultation
                                    </StyledButton>
                                </div>
                            </div>
                        ) : (
                            <div key="results-container">

                                {/* GENERAL PROGRAMMES SECTION */}
                                {(activeTab === "all" || activeTab === "general") && filteredGeneral.length > 0 && (
                                    <section
                                        className="relative w-full bg-transparent py-16 border-t border-[#680007]/10 bg-[#FBF3EF]/40"
                                    >
                                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                                            <div className="mb-12">
                                                <h2 className="font-serif text-2xl md:text-3xl font-light text-[#680007] tracking-tight uppercase">
                                                    General Accommodation Programmes
                                                </h2>
                                                <div className="w-16 h-[2px] bg-[#680007]/30 mt-4"></div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                                {filteredGeneral.map((pkg, index) => (
                                                    <div
                                                        key={pkg.id}
                                                        className="flex flex-col bg-white/50 backdrop-blur-sm border border-[#680007]/10 p-8 rounded-none hover:shadow-xl hover:border-[#680007]/20 transition-all duration-300"
                                                    >
                                                        <h3 className="font-serif text-xl md:text-2xl font-medium text-[#680007] mb-3 uppercase leading-snug">
                                                            {pkg.title}
                                                        </h3>
                                                        <p className="font-serif text-lg text-[#3D0004]/80 leading-relaxed font-light mb-6 flex-grow">
                                                            {pkg.description}
                                                        </p>

                                                        {/* StyledButton replacement */}
                                                        <StyledButton
                                                            href="/online-consultation"
                                                            variant="secondary"
                                                            className="self-start mt-2"
                                                        >
                                                            Enquire Now
                                                        </StyledButton>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* WELLNESS TREATMENTS PACKAGES SECTION */}
                                {(activeTab === "all" || activeTab === "wellness") && filteredWellness.length > 0 && (
                                    <section
                                        className="relative w-full bg-transparent py-16 border-t border-[#680007]/10"
                                    >
                                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                                            <div className="mb-12">
                                                <h2 className="font-serif text-2xl md:text-3xl font-light text-[#680007] tracking-tight uppercase">
                                                    Wellness Treatments Packages
                                                </h2>
                                                <div className="w-16 h-[2px] bg-[#680007]/30 mt-4"></div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                                {filteredWellness.map((pkg, index) => (
                                                    <PackageCard key={pkg.id} pkg={pkg} index={index} onOpenBooking={openBooking} />
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                )}

                                {/* SPECIAL TREATMENT PACKAGES SECTION */}
                                {(activeTab === "all" || activeTab === "special") && filteredSpecial.length > 0 && (
                                    <section
                                        className="relative w-full bg-transparent py-16 border-t border-[#680007]/10 bg-[#FBF3EF]/40"
                                    >
                                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                                            <div className="mb-12">
                                                <h2 className="font-serif text-2xl md:text-3xl font-light text-[#680007] tracking-tight uppercase">
                                                    Special Treatment Packages
                                                </h2>
                                                <div className="w-16 h-[2px] bg-[#680007]/30 mt-4"></div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                                {filteredSpecial.map((pkg, index) => (
                                                    <PackageCard key={pkg.id} pkg={pkg} index={index} onOpenBooking={openBooking} />
                                                ))}
                                            </div>
                                        </div>
                                    </section>
                                )}

                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />

            {/* Consultation/Booking Modal */}
            <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
        </div>
    );
}