"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BookingModal from "../components/ui/BookingModal";
import DetailedCarousel from "../components/detailed-pages/DetailedCarousel";

const FACILITIES_DATA = [
  {
    title: "Heritage Bed Rooms",
    tagline: "Royal Heritage Living",
    description: "20 beautifully furnished spacious Heritage bed rooms in three categories: Deluxe (12 rooms), Premium (4 rooms), and Superior (4 rooms) with attached bathrooms and toilets. All the rooms are decorated and furnished keeping in view to depict the ecstasies of the past, giving guests a feel of the royal living. Each room is equipped with TV, telephones, and WiFi, along with 24 hours hot water.",
    images: [
      "/services-methods/Check-in-Hotel-Room/IMG_9784.JPG",
      "/services-methods/Check-in-Hotel-Room/IMG_9823.JPG",
      "/services-methods/Check-in-Hotel-Room/IMG_9828.JPG"
    ]
  },
  {
    title: "Library",
    tagline: "Sanctuary for Book Lovers",
    description: "Perumbayil Ayurvedamana holds a variety of books, curated specially for readers and book lovers seeking peace, quiet contemplation, and healing wisdom.",
    images: [
      "/services-methods/Check-in-Hotel-Room/IMG_9823.JPG",
      "/services-methods/Check-in-Hotel-Room/IMG_9828.JPG"
    ]
  },
  {
    title: "Private Herbal Garden",
    tagline: "Energy & Prana from Nature",
    description: "The Ayurveda Mana is surrounded by rich vegetation of herbs and medicinal plants which generate positive energy in your body and mind. You can find native herbs in the surroundings, including Aambal, Arayaal, Asoka, Avanekku, Ayamodakam, Brahmi, Chempakam, Chemparuthi, Cherupunna, Inchi, Jaathi, and many more.",
    images: [
      "/services-methods/guarden/guarden.JPG"
    ]
  },
  {
    title: "Yoga Room",
    tagline: "Spiritual & Metabolic Harmony",
    description: "Yoga is a science as well as a method of achieving spiritual harmony through the control of mind and body. The Asanas (Yogic postures) and Pranayama (control of breath) are practices that not only help to acquire perfect health but also to develop a calm and serene mind. Correct practice of Pranayama under the supervision of our competent Yoga teacher can dramatically reduce the incidence of Asthma, Bronchitis, Sinus problems, and colds.",
    images: [
      "/services-methods/Yoga/IMG_9178.JPG",
      "/services-methods/Yoga/IMG_9181.JPG",
      "/services-methods/Yoga/IMG_9220.JPG"
    ]
  },
  {
    title: "Treatment Rooms",
    tagline: "Authentic Massage Sanctuaries",
    description: "6 spacious treatment and massage rooms separate for ladies and gents. Each room is attached with fully functional bathrooms, toilets, and individual steam baths.",
    images: [
      "/services-methods/Abhyanga/thumbnail.JPG",
      "/services-methods/Shirodhara/thumbnail.JPG",
      "/services-methods/Swedanam-Steam/thumbnail.JPG"
    ]
  },
  {
    title: "Pharmacy & Medicine Manufacturing",
    tagline: "Handpicked Natural Formulations",
    description: "Fully stocked pharmacy and custom medicine preparing room for individual formulation preparation, strictly adhering to traditional lineage pharmacology.",
    images: [
      "/services-methods/Pharmacie/IMG_8868.JPG",
      "/services-methods/Pharmacie/IMG_8875.JPG",
      "/services-methods/Pharmacie/IMG_8879.JPG"
    ]
  },
  {
    title: "Kitchen and Dining Area",
    tagline: "Dietary Restoration & Sattvic Meals",
    description: "Open kitchen (which guests can visit anytime) using organically grown vegetables, manned by ladies from the local area. Spacious dining area serving individual diet requirements. Food is served in Kansa Vataki plates and bowls which have therapeutic values derived from Copper (relieves pain, inflammation, and prevents arthritis), Zinc (boosts immunity and digestion), and Tin (relieves headaches and insomnia).",
    images: [
      "/services-methods/Kitchen/IMG_9316.JPG",
      "/services-methods/Kitchen/IMG_9326.JPG",
      "/services-methods/Lunch/IMG_9764.JPG",
      "/services-methods/Lunch/IMG_9765.JPG"
    ]
  }
];

export default function FacilitiesPage() {
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

      {/* Header */}
      <Header onOpenBooking={openBooking} />

      {/* Main Content */}
      <main className="flex-grow pb-20">

        {/* Parallax Hero Section - Matching Wellness Treatments page banner design */}
        <motion.section
          ref={heroRef}
          className="relative w-full h-[60vh] bg-[#3D0004] z-20 flex flex-col justify-end"
          style={{ scale, borderRadius, opacity }}
        >
          {/* Background Image - Trust Heritage image used as banner */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-section/building3.png"
              alt="Facilities Banner"
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
                  Facilities
                </h1>
              </div>

              {/* Subtitle */}
              <div className="max-w-md text-left md:text-right">
                <p className="font-serif text-xs md:text-sm text-white/90 font-medium uppercase tracking-widest leading-relaxed">
                  20 Heritage Bedrooms, Organic Kitchens, <br /> and Lineage Treatment Sanctuaries.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Facilities Sections List - ZIGZAG Layout */}
          <div className="space-y-24 md:space-y-36">
            {FACILITIES_DATA.map((facility, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center"
                >
                  {/* Left/Right Column: Image Carousel based on index (zigzag) */}
                  <div className={`md:col-span-6 overflow-hidden rounded-none border border-[#680007]/10 ${isEven ? "md:order-first" : "md:order-last"
                    }`}>
                    <DetailedCarousel images={facility.images} />
                  </div>

                  {/* Right/Left Column: Title + Description with increased font sizes */}
                  <div className="md:col-span-6 space-y-5">
                    <div>
                      <span className="font-serif text-md md:text-lg uppercase tracking-wider text-[#680007] block mb-2">
                        {facility.tagline}
                      </span>
                      <h2 className="font-serif text-3xl md:text-4xl font-light text-[#680007] tracking-tight uppercase">
                        {facility.title}
                      </h2>
                    </div>

                    <p className="font-serif text-lg md:text-xl text-[#3D0004]/80 leading-relaxed font-light whitespace-pre-line">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
