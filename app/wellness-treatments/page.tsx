"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BookingModal from "../components/ui/BookingModal";
import TreatmentCard from "../components/ui/TreatmentCard";
import Image from "next/image";

interface WellnessTreatment {
  name: string;
  slug: string;
  image: string;
}

const WELLNESS_TREATMENTS: WellnessTreatment[] = [
  {
    name: "Rejuvenation [ Rasayana Chikithsa ]",
    slug: "rejuvenation",
    image: "/services-methods/Abhyanga/thumbnail.JPG"
  },
  {
    name: "Stress & Strain Management",
    slug: "stress-strain-management",
    image: "/services-methods/Shirodhara/thumbnail.JPG"
  },
  {
    name: "Weight Reduction And Obesity",
    slug: "weight-reduction-obesity",
    image: "/services-methods/Udwarthanam-Powder/thumbnail.JPG"
  },
  {
    name: "Womens Care Programme",
    slug: "womens-care-programme",
    image: "/services-methods/Arrival-Ceremony-with-flowers/IMG_9924.JPG"
  },
  {
    name: "Beauty Care Treatment",
    slug: "beauty-care-treatment",
    image: "/services-methods/Wellness-Mask/thumbnail.JPG"
  },
  {
    name: "Postpartum Care In Ayurveda",
    slug: "postpartum-care",
    image: "/services-methods/Prizil-Cotton_oil/thumbnail.JPG"
  }
];

export default function WellnessTreatmentsPage() {
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
    <div className="relative flex flex-col min-h-screen text-[#3D0004] overflow-x-hidden">
      <Header onOpenBooking={openBooking} />

      <main className="flex-grow pb-20">

        {/* Parallax Hero Section */}
        <motion.section
          ref={heroRef}
          className="relative w-full h-[60vh] bg-[#3D0004] z-20 flex flex-col justify-end"
          style={{ scale, borderRadius, opacity }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/wellness-banner/banner.png"
              alt="Wellness Treatments Banner"
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
                  Wellness Treatments
                </h1>
              </div>

              {/* Subtitle */}
              <div className="max-w-md text-left md:text-right">
                <p className="font-serif text-xs md:text-sm text-white/90 font-medium uppercase tracking-widest leading-relaxed">
                  Lineage-based rejuvenation and healing <br /> therapies designed for complete wellness.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          {/* Treatment Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WELLNESS_TREATMENTS.map((treatment, index) => (
              <TreatmentCard
                key={index}
                name={treatment.name}
                image={treatment.image}
                href={`/wellness-treatments/${treatment.slug}`}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
