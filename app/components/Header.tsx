"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import StyledButton from "./StyledButton";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-70 w-full transition-all duration-300 font-sans ${scrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#680007]/10 shadow-xs"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        {/* Light Black Gradient Overlay (Only when transparent/not scrolled) */}
        {!scrolled && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent -z-10 pointer-events-none h-[150%]"></div>
        )}

        {!scrolled ? (
          /* =========================================================
             1. HERO STATE (Transparent Header, Centered Logo)
             ========================================================= */
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex items-center justify-between py-5 w-full">
            {/* Left End: Animated Burger Menu Trigger */}
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white p-2.5 transition-all cursor-pointer group"
                aria-label="Open mobile menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between items-center relative overflow-hidden">
                  <span className="w-full h-[2px] bg-white rounded-lg transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />
                  <span className="w-full h-[2px] bg-white rounded-lg transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  <span className="w-full h-[2px] bg-white rounded-lg transition-transform duration-300 ease-in-out group-hover:-translate-x-1" />
                </div>
              </button>
            </div>

            {/* Center: Brand Logo (A little bit bigger, e.g. h-12 md:h-16) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <a href="/">
                <Image
                  src="/logo/logo-white.png"
                  alt="Perumbayil Ayurvedamana Logo"
                  width={240}
                  height={65}
                  className="h-14 md:h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
                  priority
                />
              </a>
            </div>

            {/* Right End: CTA Button */}
            <div>
              <StyledButton
                onClick={onOpenBooking}
                variant="secondary"
                className="text-white border-1 border-white/20 hover:bg-white/10 hover:text-white"
              >Book Consultation</StyledButton>
            </div>
          </div>
        ) : (
          /* =========================================================
             2. SCROLLED STATE (Full Nav Header, Left Logo, 0 Changes)
             ========================================================= */
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative pt-0">
            <div className="flex items-start justify-between">
              {/* White Logo on Transparent, Color Logo on Scrolled */}
              <a href="/" className="flex-shrink-0 -ml-4 transition-all duration-300 py-2.5">
                <Image
                  src="/logo/logo.png"
                  alt="Perumbayil Ayurvedamana Logo"
                  width={200}
                  height={55}
                  className="h-10 md:h-20 w-auto object-contain transition-all duration-300"
                  priority
                />
              </a>

              {/* Combined Right Section */}
              <div className="hidden xl:flex flex-col items-end">
                {/* Level 1: Top Bar (Desktop Only) - Now Boxed */}
                <div className="flex p-4 items-center transition-all duration-300 rounded-b-lg bg-[#3D0004]/5">
                  {/* Products Block */}
                  <a
                    href="#treatments"
                    className="flex items-center space-x-1.5 px-4 text-[10px] font-semibold uppercase tracking-wider border-l transition-colors text-[#3D0004] hover:text-[#b38e5d] border-[#680007]/10"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517L5.05 15.2c-.315-.063-.648.024-.897.24a2 2 0 00-.547 1.022l-.78 3.896a1 1 0 00.98 1.196h16.216a1 1 0 00.98-1.196l-.78-3.896zM12 3v3m0 0a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                    <span>Products</span>
                  </a>

                  {/* Guruvayur Block */}
                  <a
                    href="#footer"
                    className="flex items-center space-x-1.5 px-4 text-[10px] font-semibold uppercase tracking-wider border-l transition-colors text-[#3D0004] hover:text-[#b38e5d] border-[#680007]/10"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Guruvayur</span>
                  </a>

                  {/* Send an Enquiry Block */}
                  <a
                    href="#footer"
                    className="flex items-center space-x-1.5 px-4 text-[10px] font-semibold uppercase tracking-wider border-l transition-colors text-[#3D0004] hover:text-[#b38e5d] border-[#680007]/10"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>Send An Enquiry</span>
                  </a>

                  {/* Online Consultation Block (CTA) */}
                  <button
                    onClick={onOpenBooking}
                    className="flex items-center space-x-1.5 px-4 text-[10px] font-semibold uppercase tracking-wider border-l border-r cursor-pointer transition-colors text-[#3D0004] hover:text-[#b38e5d] border-[#680007]/10"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 1 1 0 7.75" />
                    </svg>
                    <span>Online Consultation</span>
                  </button>
                </div>

                {/* Level 2: Main Navigation Links */}
                <nav className="flex items-center space-x-5 pt-2">
                  {[
                    { label: "Home", href: "#", active: true },
                    { label: "History", href: "#why-choose" },
                    { label: "Physicians", href: "#why-choose" },
                    { label: "Therapies", href: "#treatments" },
                    { label: "Special Treatments", href: "#treatments" },
                    { label: "Wellness Treatments", href: "#wellness-packages" },
                    { label: "Packages", href: "#wellness-packages" },
                    { label: "Facilities", href: "#facilities" },
                    { label: "Contact Us", href: "#footer" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`text-[12px] font-bold uppercase tracking-wider relative group py-2 transition-colors duration-200 ${link.active
                        ? "text-[#b38e5d]"
                        : "text-[#3D0004]/85 hover:text-[#b38e5d]"
                        }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-[#b38e5d] transition-all duration-300 ${link.active ? "w-full" : "w-0 group-hover:w-full"
                        }`}></span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Hamburger menu & Quick CTA */}
              <div className="xl:hidden flex items-center space-x-3 pt-3">
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 text-[10px] uppercase font-bold tracking-widest rounded-sm transition-all duration-300 border cursor-pointer bg-[#680007] hover:bg-[#3D0004] text-[#faf8f5] border-[#680007]"
                >
                  Book
                </button>

                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 transition-colors rounded-sm border cursor-pointer text-[#3D0004] border-[#680007]/15 hover:bg-[#3D0004]/5"
                  aria-label="Open mobile menu"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Menu (Responsive) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-90 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
          {/* Backdrop close area */}
          <div className="absolute inset-0" onClick={() => setMobileMenuOpen(false)}></div>

          <div className="relative w-80 h-full bg-[#3D0004] text-[#faf8f5] p-6 flex flex-col justify-between z-10 shadow-2xl overflow-y-auto">
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <Image
                  src="/logo/logo-white.png"
                  alt="Perumbayil Ayurvedamana Logo"
                  width={140}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white border border-white/10 rounded-full hover:bg-white/5 cursor-pointer"
                  aria-label="Close mobile menu"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4">
                {[
                  { label: "Home", href: "#" },
                  { label: "History", href: "#why-choose" },
                  { label: "Physicians", href: "#why-choose" },
                  { label: "Therapies", href: "#treatments" },
                  { label: "Special Treatments", href: "#treatments" },
                  { label: "Wellness Treatments", href: "#wellness-packages" },
                  { label: "Packages", href: "#wellness-packages" },
                  { label: "Facilities", href: "#facilities" },
                  { label: "Contact Us", href: "#footer" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-[#c8ab80] transition-colors py-1.5 border-b border-white/5 last:border-b-0"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Contact & Top bar metrics */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <a
                href="#treatments"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 bg-[#c8ab80] hover:bg-[#faf8f5] text-[#3D0004] py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517L5.05 15.2c-.315-.063-.648.024-.897.24a2 2 0 00-.547 1.022l-.78 3.896a1 1 0 00.98 1.196h16.216a1 1 0 00.98-1.196l-.78-3.896zM12 3v3m0 0a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
                <span>Products Store</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#680007] hover:bg-[#3D0004] text-[#faf8f5] py-3 rounded-sm text-xs font-bold uppercase tracking-widest border border-white/15 cursor-pointer transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 1 1 0 7.75" />
                </svg>
                <span>Online Consultation</span>
              </button>

              <div className="text-[10px] text-white/50 tracking-widest text-center uppercase font-mono mt-2">
                Guruvayur, Kerala, India
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
