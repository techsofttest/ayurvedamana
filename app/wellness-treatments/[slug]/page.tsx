"use client";

import { useState, use } from "react";
import Header from "@/app/components/global/Header";
import Footer from "@/app/components/global/Footer";
import BookingModal from "@/app/components/ui/BookingModal";
import DetailedHeader from "@/app/components/detailed-pages/DetailedHeader";
import DetailedCarousel from "@/app/components/detailed-pages/DetailedCarousel";
import DetailedContent from "@/app/components/detailed-pages/DetailedContent";
import DetailedSidebar from "@/app/components/detailed-pages/DetailedSidebar";

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface WellnessData {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

const WELLNESS_TREATMENTS_DATA: WellnessData[] = [
  {
    id: "rejuvenation",
    title: "Rejuvenation [ Rasayana Chikithsa ]",
    description: "A comprehensive therapy designed to revitalize the body cells, boost immunity, and promote longevity. It cleanses the system of accumulated toxins, slows down the ageing process, and restores youthful vigor.",
    image: "/services-methods/Abhyanga/thumbnail.JPG",
    highlights: [
      "Daily Abhyanga (synchronized warm oil massage) to promote joint lubrication.",
      "Pizhichil (rich warm oil bath therapy) to nourish muscles and nerves.",
      "Njavarakizhi (medicated rice compress) to regenerate skin cells.",
      "Customized rejuvenation diet and herbal teas based on body constitution.",
      "Internal Rasayana formulations to enhance cell longevity."
    ]
  },
  {
    id: "stress-strain-management",
    title: "Stress & Strain Management",
    description: "Addresses modern-day stress, anxiety, exhaustion, and sleep disorders. The treatments soothe the nervous system, balance the mind, and release deep physical tension.",
    image: "/services-methods/Shirodhara/thumbnail.JPG",
    highlights: [
      "Shirodhara (gentle continuous pouring of warm medicated oil on forehead) to soothe nerves.",
      "Thalam (herbal paste application on head vertex) to cool the mind.",
      "Nasyam (nasal cleaning therapy) to remove physical and mental congestion.",
      "Gentle therapeutic body massage to release deep muscle tension.",
      "Daily guided meditation and yoga sessions for complete nervous stabilization."
    ]
  },
  {
    id: "weight-reduction-obesity",
    title: "Weight Reduction And Obesity",
    description: "A natural approach to healthy weight loss and metabolic balance. Combines deep dry herbal powder massages to burn subcutaneous fat with internal cleansing and structured dietary control.",
    image: "/services-methods/Udwarthanam-Powder/thumbnail.JPG",
    highlights: [
      "Udwarthanam (vigorous dry powder massage) to break down subcutaneous fat.",
      "Swedanam (medicated steam bath) to flush out mobilized toxins.",
      "Internal toxin-cleansing herbs to stimulate metabolism.",
      "Individually customized caloric diet chart to support healthy weight loss.",
      "Light yoga postures for endocrine and thyroid stimulation."
    ]
  },
  {
    id: "womens-care-programme",
    title: "Womens Care Programme",
    description: "Tailored to address the unique hormonal, physical, and emotional health phases of women. Supports menstrual health, menopause transition, and ovarian/uterine vitality.",
    image: "/services-methods/Arrival-Ceremony-with-flowers/IMG_9924.JPG",
    highlights: [
      "Comprehensive hormonal health consultation with women care experts.",
      "Yoni Prakshalana (herbal local cleansing) to maintain hygiene and pH.",
      "Greeva & Kativasti for lower back strength and pelvic health.",
      "Herbal formulations for endocrine and hormonal balance support.",
      "Nurturing massage and body treatments to calm body stress."
    ]
  },
  {
    id: "beauty-care-treatment",
    title: "Beauty Care Treatment",
    description: "Enhances skin texture, restores natural radiance, and purifies the complexion using organic herbal pastes, fruit extracts, and essential oils. Focuses on beauty from within.",
    image: "/services-methods/Wellness-Mask/thumbnail.JPG",
    highlights: [
      "Mukha Lepam (herbal face pack and face mask) for skin cleansing.",
      "Kesha Lepam (hair and scalp nourishing therapy) to encourage hair growth.",
      "Face, neck, and shoulder massage with Kumkumadi oil to remove blemishes.",
      "Herbal steam bath for skin detoxification and cell opening.",
      "Organic nail and foot care therapies."
    ]
  },
  {
    id: "postpartum-care",
    title: "Postpartum Care In Ayurveda",
    description: "A specialized therapy for new mothers to help regain physical strength, shrink the uterus, stimulate lactation, and prevent postpartum fatigue and depression.",
    image: "/services-methods/Prizil-Cotton_oil/thumbnail.JPG",
    highlights: [
      "Soothe-and-heal warm oil massages to relieve delivery-related body aches.",
      "Abdominal binding/firming wraps to bring abdominal muscles back to shape.",
      "Vethu Kuli (special herbal bath for postpartum recovery).",
      "Medicated herbal decoctions for lactation and internal health restoration.",
      "Gentle baby massage training and guidance."
    ]
  }
];

export default function WellnessTreatmentDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => {
    window.location.href = "/online-consultation";
  };
  const closeBooking = () => setIsBookingOpen(false);

  const treatment = WELLNESS_TREATMENTS_DATA.find((t) => t.id === slug);

  if (!treatment) {
    return (
      <div className="relative flex flex-col min-h-screen text-[#3D0004]">
        <Header onOpenBooking={openBooking} forceSolid={true} />
        <main className="flex-grow pt-36 pb-20 flex flex-col items-center justify-center">
          <h1 className="font-samarn text-3xl text-[#680007] mb-4">Treatment Not Found</h1>
          <a href="/wellness-treatments" className="font-serif text-sm uppercase tracking-wider text-[#680007] hover:underline">
            &larr; Back to Wellness Treatments
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col min-h-screen text-[#3D0004] overflow-x-clip">
      <Header onOpenBooking={openBooking} forceSolid={true} />

      <main className="flex-grow pt-28 md:pt-36 pb-20">
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header Title Section */}
          <DetailedHeader title={treatment.title} subtitle="Wellness Treatment" />

          {/* Banner Image / Carousel */}
          <div className="relative w-full mb-12 md:mb-16 overflow-hidden rounded-none border border-[#680007]/10">
            <DetailedCarousel images={[treatment.image]} />
          </div>

          {/* Split Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start mt-8">
            <DetailedContent
              aboutLabel="About the Treatment"
              mainTitle="Description & Details"
              description={treatment.description}
              inclusionsTitle="Treatment Inclusions & Highlights"
              inclusions={treatment.highlights}
            />

            <DetailedSidebar
              title="Heritage Care"
              description="Perumbayil Ayurvedamana offers dedicated, clinical lineage therapies targeting these specific health issues. Get in touch with our experts for a detailed analysis of your health condition."
              buttonText="Inquire & Consult Now"
              onButtonClick={openBooking}
              backText="Back to Wellness Treatments"
              backHref="/wellness-treatments"
            />
          </div>

        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
