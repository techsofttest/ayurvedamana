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

interface TreatmentData {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

const SPECIAL_TREATMENTS_DATA: TreatmentData[] = [
  {
    id: "neurological-disorders",
    title: "Neurological Disorders",
    description: "Ayurvedic management of neurological conditions aims to restore Vata balance, which governs the nervous system. Traditional therapies like Shirodhara, Pizhichil, and Basti are used alongside specific herbal formulations to nourish nerves and improve cognitive and physical motor functions.",
    image: "/special-treatments/neurological.png",
    highlights: [
      "Detailed Neurological Assessment by Expert Physicians.",
      "Sirodhara with Warm Medicated Oils to calm Vata.",
      "Pizhichil (Oil Bath Therapy) to nourish muscles and nerves.",
      "Lineage-based Basti (Enema Therapy) for core Vata regulation.",
      "Nervine tonic herbal preparations to stimulate nervous response."
    ]
  },
  {
    id: "muscular-problems-diseases",
    title: "Muscular Problems/Diseases",
    description: "Addresses disorders of the muscles, tendons, and ligaments by reducing localized inflammation, improving circulation, and restoring muscle tone. Deep herbal paste massages and hot compress techniques (Kizhi) are applied to relieve stiffness and spasm.",
    image: "/special-treatments/muscular.png",
    highlights: [
      "Muscle and Joint Mobility Assessment.",
      "Elakizhi (Herbal leaf compress) to improve muscular blood flow.",
      "Kativasti/Januvasti (Local oil retention) for muscle strengthening.",
      "Udwarthanam (Medicated dry powder massage) to reduce muscle stiffness.",
      "Anti-inflammatory herbal supplements to reduce pain and inflammation."
    ]
  },
  {
    id: "bone-joint-spine-related-problems",
    title: "Bone, Joint & Spine Related Problems",
    description: "Ayurvedic therapies targeting arthritis, spondylosis, slip disc, and sciatica. The treatments focus on regenerating cartilage, reducing inflammation, and strengthening the skeletal framework through specialized oil therapies and gentle physical therapies.",
    image: "/special-treatments/bone-joint.png",
    highlights: [
      "Skeletal & Spine Alignment Analysis by our chief physicians.",
      "Greevavasti / Kativasti localized oil pools for joint lubrication.",
      "Navarakizhi (Medicated rice compress) to regenerate joints and cartilage.",
      "Abhyangam (Warm therapeutic massage) to promote joint lubrication.",
      "Bone-strengthening mineral formulations to improve skeletal density."
    ]
  },
  {
    id: "head-ache-and-related-problems",
    title: "Head Ache and Related Problems",
    description: "Deals with migraines, tension headaches, and sinus-induced headaches by detoxifying the upper respiratory tract and head region. Therapies like Shirovasti and Nasyam are highly effective in bringing long-term relief.",
    image: "/special-treatments/headache.png",
    highlights: [
      "Symptom & Trigger Factor Analysis.",
      "Shirovasti (Oil retention on head) for deep nervous soothing.",
      "Nasyam (Nasal drops administration) to clear sinus congestion.",
      "Siroabhyangam (Head massage) for mental stress relief.",
      "Cooling herbal therapies to balance Pitta."
    ]
  },
  {
    id: "ent-problems",
    title: "ENT Problems",
    description: "Targeted therapies for ear, nose, and throat disorders. Ayurveda uses localized cleansing treatments (Kriya Kalpa) such as Karnapoorana (ear oiling) and Nasyam to treat sinusitis, tinnitus, and tonsillitis.",
    image: "/services-methods/Nasyam-Nase/thumbnail.JPG",
    highlights: [
      "ENT clinical diagnosis by Ayurvedic doctors.",
      "Nasyam (Nasal cleansing) to clear blockage and heal mucous membranes.",
      "Karnapoorana (Medicated ear drops) for earache and tinnitus relief.",
      "Gandusha (Medicated gargling) for throat purification.",
      "Immune-boosting ENT herbs to prevent recurrent infections."
    ]
  },
  {
    id: "digestive-disorders",
    title: "Digestive Disorders",
    description: "Focuses on restoring the digestive fire (Agni), which is the cornerstone of good health. Therapies targeting IBS, acidity, bloating, and chronic constipation combine panchakarma therapies with strict custom diets.",
    image: "/services-methods/Lunch/IMG_9764.JPG",
    highlights: [
      "Agni (Digestive Fire) Assessment.",
      "Vamana / Virechana detoxification to clear bowel tract.",
      "Customized dietary plans matching your body constitution (Prakriti).",
      "Takradhara (Buttermilk stream therapy) to calm digestive anxiety.",
      "Carminative and digestive herbal formulations to enhance metabolism."
    ]
  },
  {
    id: "urinary-disorders",
    title: "Urinary Disorders",
    description: "Treatments for kidney stones, UTIs, and urinary incontinence. Focuses on flushing toxins, cooling the urinary tract, and rejuvenating the bladder and kidneys using diuretic herbs and basti.",
    image: "/services-methods/Swedanam-Steam/thumbnail.JPG",
    highlights: [
      "Renal & Bladder assessment.",
      "Uttar Basti / Niruha Basti for bladder rejuvenation.",
      "Swedanam (Steam therapy) for detox and sweat channel activation.",
      "Diuretic herbal decoctions to flush kidney stones.",
      "Custom fluid-intake and dietary guidance."
    ]
  }
];

export default function SpecialTreatmentDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => {
    window.location.href = "/online-consultation";
  };
  const closeBooking = () => setIsBookingOpen(false);

  const treatment = SPECIAL_TREATMENTS_DATA.find((t) => t.id === slug);

  if (!treatment) {
    return (
      <div className="relative flex flex-col min-h-screen text-[#3D0004]">
        <Header onOpenBooking={openBooking} forceSolid={true} />
        <main className="flex-grow pt-36 pb-20 flex flex-col items-center justify-center">
          <h1 className="font-samarn text-3xl text-[#680007] mb-4">Treatment Not Found</h1>
          <a href="/special-treatments" className="font-serif text-sm uppercase tracking-wider text-[#680007] hover:underline">
            &larr; Back to Special Treatments
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
          <DetailedHeader title={treatment.title} subtitle="Special Treatment" />

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
              backText="Back to Special Treatments"
              backHref="/special-treatments"
            />
          </div>

        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}
