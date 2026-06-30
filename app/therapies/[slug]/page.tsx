"use client";

import { useState, use } from "react";
import { motion } from "framer-motion";
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import BookingModal from "../../components/ui/BookingModal";
import { THERAPIES_LIST } from "../page";
import DetailedHeader from "@/app/components/detailed-pages/DetailedHeader";
import DetailedCarousel from "@/app/components/detailed-pages/DetailedCarousel";
import DetailedContent from "@/app/components/detailed-pages/DetailedContent";
import DetailedSidebar from "@/app/components/detailed-pages/DetailedSidebar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getTherapyImages(slug: string): string[] {
  // Specific image maps for therapies with rich content
  if (slug === "abhyangam") {
    return [
      "/services-methods/Abhyanga/thumbnail.JPG",
      "/services-methods/Abhyanga/IMG_8699.JPG",
      "/services-methods/Abhyanga/IMG_8705.JPG",
      "/services-methods/Abhyanga/IMG_8734.JPG",
    ];
  }
  if (slug === "shiro-dhara") {
    return [
      "/services-methods/Shirodhara/thumbnail.JPG",
      "/services-methods/Shirodhara/IMG_8608.JPG",
      "/services-methods/Shirodhara/IMG_8611.JPG",
      "/services-methods/Shirodhara/IMG_8618.JPG",
    ];
  }
  if (slug === "shirovasthi") {
    return [
      "/services-methods/Shirovasti-Kopfzirkulation/thumbnail.JPG",
      "/services-methods/Shirovasti-Kopfzirkulation/IMG_8626.JPG",
      "/services-methods/Shirovasti-Kopfzirkulation/IMG_8627.JPG",
    ];
  }
  if (slug === "swedanam") {
    return [
      "/services-methods/Swedanam-Steam/thumbnail.JPG",
      "/services-methods/Swedanam-Steam/IMG_8699.JPG", // fallback
    ];
  }
  if (slug === "avagaha-sweda") {
    return [
      "/services-methods/Kadivasthi-Back pain/thumbnail.JPG",
    ];
  }
  if (slug === "elakizhi") {
    return [
      "/services-methods/Kizhi-Stempelmassage/thumbnail.JPG",
    ];
  }
  if (slug === "navara-kizhi") {
    return [
      "/services-methods/Nawara-Tepa-Treat for everyth/thumbnail.JPG",
    ];
  }
  if (slug === "ksheeradhoomam") {
    return [
      "/services-methods/Wellness-Mask/thumbnail.JPG",
    ];
  }
  if (slug === "pichu") {
    return [
      "/services-methods/Pichu-Knie_und_Schulter/thumbnail.JPG",
    ];
  }
  if (slug === "thalam-thala") {
    return [
      "/services-methods/Thalapodichi-Bananenblatt_auf_Kopf/thumbnail.jpg",
    ];
  }
  if (slug === "udwarthanam") {
    return [
      "/services-methods/Udwarthanam-Powder/thumbnail.JPG",
    ];
  }
  if (slug === "pizhichil") {
    return [
      "/services-methods/Prizil-Cotton_oil/thumbnail.JPG",
    ];
  }
  if (slug === "chavitti-uzhichil") {
    return [
      "/services-methods/foot-massage/chavitty2.png",
    ];
  }

  // Fallback images from the services-methods directories to display a beautiful default slider
  return [
    "/services-methods/Abhyanga/thumbnail.JPG",
    "/services-methods/Shirodhara/thumbnail.JPG",
    "/services-methods/Shirovasti-Kopfzirkulation/thumbnail.JPG",
  ];
}

export default function TherapyDetailedPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => {
    window.location.href = "/online-consultation";
  };
  const closeBooking = () => setIsBookingOpen(false);

  // Look up the therapy data
  let therapy = THERAPIES_LIST.find((t) => t.id === slug);

  // Fallback map for Chavitti Uzhichil
  if (slug === "chavitti-uzhichil") {
    therapy = {
      id: "chavitti-uzhichil",
      title: "CHAVITTI UZHICHIL (FOOT MASSAGE)",
      images: ["/services-methods/foot-massage/chavitty2.png"],
      description: "'Chavitti Uzhichil' is a special massage technique applied on both healthy and sick. It has a systematic procedure derived from Kerala Martial Art known as Kalaripayattu. The same is called \"Padaghata in Ayurveda. It is efficacious in various ailments, structural deformities, sciatica, backache, disc prolepsis, spinal injuries and neurological conditions.\n\nThe massage is done on the whole body using the foot and the palms as well, applying medicated herbal oil on the wholebody and head of the recipient. The masseur gently moves the footon his body controlling the pressure, balancing on a rope hung on the ceiling. Simultaneously, the massage is done with palms. It needs more than an hour to complete the entire procedure\n\nThough the process is laborious, It brings very relaxing and soothing experience to the person who receivesit. It Is mandatory that every student of Kalaripayattu has to undergo a course of treatment each year tormaintain fitness to further evolve in the practice. It also enhances vitality, strength, flexibility, stamina and stability. Normally.the course duration is either 7 days or 14 days as decided by experts, depending on the health condition of the person."
    };
  }

  if (!therapy) {
    return (
      <div className="relative flex flex-col min-h-screen text-[#3D0004] overflow-x-clip">
        <Header onOpenBooking={openBooking} forceSolid={true} />
        <main className="flex-grow pt-36 pb-20 flex flex-col items-center justify-center">
          <h1 className="font-samarn text-3xl text-[#680007] mb-4">Therapy Not Found</h1>
          <a href="/therapies" className="font-serif text-sm uppercase tracking-wider text-[#680007] hover:underline">
            &larr; Back to Therapies
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  const images = getTherapyImages(slug);

  return (
    <div className="relative flex flex-col min-h-screen text-[#3D0004] overflow-x-clip selection:bg-[#a84e32]/25 selection:text-[#3D0004]">
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

      {/* Sticky Header */}
      <Header onOpenBooking={openBooking} forceSolid={true} />

      {/* Main Content */}
      <main className="flex-grow pt-28 md:pt-24 pb-20">
        <section className="relative w-full bg-transparent text-[#3D0004] font-serif py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Top Title Section */}
            <DetailedHeader title={therapy.title} subtitle="Ayurveda Therapy" />

            {/* Top Image Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full mb-12 md:mb-16 overflow-hidden rounded-none border border-[#680007]/10"
            >
              <DetailedCarousel images={images} />
            </motion.div>

            {/* Split Bottom Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mt-8"
            >
              <DetailedContent
                aboutLabel="About the Treatment"
                mainTitle="Description & Benefits"
                description={therapy.description}
              />

              <DetailedSidebar
                onButtonClick={openBooking}
                backText="Back to Therapies"
                backHref="/therapies"
              />
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
