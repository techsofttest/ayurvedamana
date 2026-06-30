"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import StyledButton from "../ui/StyledButton";
import Image from "next/image";

interface TreatmentItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  shortDesc: string;
  details: string;
  symptoms: string[];
  therapies: string[];
  duration: string;
}

const MOST_REQUESTED_SERVICES: TreatmentItem[] = [
  {
    id: "abhyanga",
    title: "Abhyanga",
    subtitle: "Traditional Body Massage",
    image: "/services-methods/Abhyanga/thumbnail.JPG",
    shortDesc: "A deeply relaxing, rhythmic full-body massage using warm herbal oils tailored to your body type.",
    details: "Abhyanga is the cornerstone of Ayurvedic body therapies. Warm, customized herbal oils are massaged into the skin with specific strokes. This treatment improves circulation, boosts lymphatic drainage, relieves muscle fatigue, and calms the nervous system.",
    symptoms: ["Physical Fatigue", "Body Aches & Muscle Tension", "Insomnia & Sleep Disturbance", "Dry Skin & Poor Circulation"],
    therapies: ["Sarvanga Abhyangam", "Svedanam (Herbal Steam)"],
    duration: "45 to 60 Minutes",
  },
  {
    id: "shirodhara",
    title: "Shirodhara",
    subtitle: "Mind & Nerves Rebalance",
    image: "/services-methods/Shirodhara/thumbnail.JPG",
    shortDesc: "A continuous, soothing stream of warm herbal oil poured gently onto the forehead.",
    details: "Shirodhara is a highly therapeutic procedure where medicated oil, milk, or buttermilk is poured in a steady stream onto the forehead. It directly targets the nervous system, deeply relaxing the brain, reducing stress hormones, and restoring mental clarity.",
    symptoms: ["Chronic Anxiety & Stress", "Migraine & Sinusitis Headaches", "Insomnia & Sleep Disorders", "Mental Fatigue & Hypertension"],
    therapies: ["Tailadhara (Oil Flow)", "Ksheeradhara (Medicated Milk Flow)", "Takradhara (Buttermilk Flow)"],
    duration: "45 to 60 Minutes",
  },
  {
    id: "elakizhi",
    title: "Elakizhi (Kizhi)",
    subtitle: "Herbal Bolus Stamp Therapy",
    image: "/services-methods/Kizhi-Stempelmassage/thumbnail.JPG",
    shortDesc: "Therapeutic massage using warm cloth bags filled with fresh medicinal leaves and spices.",
    details: "Elakizhi is a sudorific (sweating) therapy using warm boluses made of herbal leaves, coconut, and lemon fried in medicated oils. The body is rhythmically massaged with these stamps, which relieves joint stiffness, local inflammation, and neuromuscular pain.",
    symptoms: ["Osteoarthritis & Joint Stiffness", "Cervical & Lumbar Spondylosis", "Chronic Back Pain & Sciatica", "Spasms & Muscular Strain"],
    therapies: ["Patra Pinda Sweda", "Podikizhi (Powder Stamp)"],
    duration: "45 to 60 Minutes",
  },
  {
    id: "kativasthy",
    title: "Kativasthy",
    subtitle: "Localized Spine Care",
    image: "/services-methods/Kadivasthi-Back pain/thumbnail.JPG",
    shortDesc: "A warm pool of medicated herbal oil retained on the lower back to relieve disc issues.",
    details: "Kativasthy is a localized treatment where a reservoir of black gram paste is built over the lumbar area and filled with warm medicated oil. This deeply nourishes the spinal discs, reduces inflammation, and strengthens the supporting vertebrae.",
    symptoms: ["Lower Back Pain & Stiffness", "Sciatica", "Herniated or Prolapsed Disc", "Lumbar Spondylosis"],
    therapies: ["Kativasthy", "Abhyangam (Local)"],
    duration: "30 to 45 Minutes",
  },
  {
    id: "nasyam",
    title: "Nasyam",
    subtitle: "Nasal Therapy & Cleansing",
    image: "/services-methods/Nasyam-Nase/thumbnail.JPG",
    shortDesc: "Nasal administration of therapeutic herbal drops to cleanse sinuses and head passages.",
    details: "Nasyam is one of the five Panchakarma therapies, involving the installation of warm medicated drops through the nasal passages. It is designed to cleanse and clear the head, throat, and sinus cavities, promoting respiratory and cranial health.",
    symptoms: ["Sinus Congestion & Sinusitis", "Chronic Migraines & Tension Headaches", "Allergic Rhinitis", "Neurological Conditions of the Head"],
    therapies: ["Keshadi Nasyam", "Anu Taila Instillation"],
    duration: "20 to 30 Minutes",
  },
  {
    id: "njavarakizhi",
    title: "Njavarakizhi",
    subtitle: "Rice Pudding Bolus Massage",
    image: "/services-methods/Nawara-Tepa-Treat for everyth/thumbnail.JPG",
    shortDesc: "Nourishing therapy using warm boluses filled with medicated red rice cooked in milk.",
    details: "Njavarakizhi (Nawara Tepa) uses a special variety of red rice cooked in milk and herbal decoction, wrapped in cloth bags. Rhythmic massage with these hot boluses nourishes the muscles, improves nervous strength, restores skin tone, and is excellent for degenerative disorders.",
    symptoms: ["Muscle Wasting & Dystrophy", "Joint Pain & Rheumatism", "Physical Exhaustion", "Post-Illness Weakness"],
    therapies: ["Shashtika Shali Pinda Sweda"],
    duration: "45 to 60 Minutes",
  },
  {
    id: "pizhichil",
    title: "Pizhichil",
    subtitle: "Medicated Warm Oil Bath",
    image: "/services-methods/Prizil-Cotton_oil/thumbnail.JPG",
    shortDesc: "A warm stream of organic medicated oils poured all over the body with soft massage.",
    details: "Pizhichil combines oil therapy (Snehana) and sweating therapy (Swedana). Warm medicated oil is systematically squeezed from cotton clothes over the entire body, accompanied by gentle massage. It is highly valued for stroke recovery and nervous disorders.",
    symptoms: ["Hemiplegia & Paralysis", "Parkinson's Disease", "Severe Muscular Pain & Spasms", "Chronic Nervous Stress"],
    therapies: ["Pizhichil (Oil Squeeze Bath)"],
    duration: "60 Minutes",
  },
  {
    id: "pichu",
    title: "Pichu",
    subtitle: "Targeted Warm Oil Pad",
    image: "/services-methods/Pichu-Knie_und_Schulter/thumbnail.JPG",
    shortDesc: "A warm medicated oil pad placed on specific joints or head areas for deep absorption.",
    details: "Pichu is a non-invasive localized treatment where a thick cotton pad soaked in warm medicated oil is applied to a specific area (such as the crown of the head, knee, or shoulder). It provides targeted relief from pain, inflammation, and stiffness.",
    symptoms: ["Knee & Joint Inflammation", "Cervical Pain & Neck Stiffness", "Chronic Migraines", "Localized Muscle Sprains"],
    therapies: ["Local Pichu Therapy"],
    duration: "30 to 45 Minutes",
  },
  {
    id: "shirovasthy",
    title: "Shirovasthy",
    subtitle: "Intensive Cranial Therapy",
    image: "/services-methods/Shirovasti-Kopfzirkulation/thumbnail.JPG",
    shortDesc: "Warm medicated oil retained on the head using a secure custom leather cap.",
    details: "Shirovasthy involves securing a tall leather sleeve or cap on the patient's head, sealed with black gram paste, and filling it with warm medicated herbal oil. The oil is retained for a specific duration to nourish the brain, nervous system, and sensory organs.",
    symptoms: ["Facial Paralysis", "Severe Insomnia & Sleep Apnea", "Neurological Disorders", "Hearing Impairment & Headaches"],
    therapies: ["Shirovasthy"],
    duration: "45 to 60 Minutes",
  },
  {
    id: "swedanam",
    title: "Swedanam",
    subtitle: "Herbal Steam Detox",
    image: "/services-methods/Swedanam-Steam/thumbnail.JPG",
    shortDesc: "An aromatic herbal steam session to open skin pores and flush out metabolic toxins.",
    details: "Swedanam is a sweating therapy usually administered after a full-body oil massage. The patient sits in a customized steam chamber infused with aromatic, medicinal herbs. It opens the bodily channels (srotas), melts deep-seated toxins (ama), and flushes them out.",
    symptoms: ["Toxin Buildup & Slow Metabolism", "Body Stiffness & Heaviness", "Water Retention", "General Joint Pain"],
    therapies: ["Bashpa Sweda (Herbal Steam Room)"],
    duration: "15 to 20 Minutes",
  },
  {
    id: "thalapodichi",
    title: "Thalapodichi",
    subtitle: "Banana Leaf Head Wrap",
    image: "/services-methods/Thalapodichi-Bananenblatt_auf_Kopf/thumbnail.jpg",
    shortDesc: "Cooling herbal paste applied to the scalp and wrapped in fresh banana leaves.",
    details: "Thalapodichi is a traditional Kerala therapy where a thick paste of cooling herbs (like Amla or Sandalwood) is applied over the shaved scalp and wrapped with a banana leaf. It draws out excess heat, calms the mind, stabilizes sleep patterns, and treats scalp issues.",
    symptoms: ["Insomnia & Sleep Deprivation", "Chronic Anxiety & High Stress", "Hair Fall & Scalp Inflammation", "Migraines & Burning Sensation on Head"],
    therapies: ["Thalapodichi Head Pack"],
    duration: "30 to 45 Minutes",
  },
  {
    id: "udwarthanam",
    title: "Udvarthanam",
    subtitle: "Dry Powder Lymphatic Massage",
    image: "/services-methods/Udwarthanam-Powder/thumbnail.JPG",
    shortDesc: "A stimulating upward massage using dry herbal powders to mobilize fat and detox.",
    details: "Udvarthanam is a unique massage performed in the direction opposite to hair growth (pratiloma) using dry, aromatic herbal powders. This friction-based massage stimulates lymphatic flow, breaks down subcutaneous fat, improves skin tone, and boosts metabolism.",
    symptoms: ["Obesity & Weight Management", "Cellulite & Subcutaneous Fat", "Sluggish Lymphatic Drainage", "Lethargy & Slow Circulation"],
    therapies: ["Udvarthanam (Powder Massage)"],
    duration: "45 to 60 Minutes",
  },
  {
    id: "wellness-mask",
    title: "Mukhalepam (Wellness Mask)",
    subtitle: "Organic Facial Care",
    image: "/services-methods/Wellness-Mask/thumbnail.JPG",
    shortDesc: "A customized organic face pack made of rare herbs to nourish and brighten the skin.",
    details: "Mukha Lepam is a beauty care therapy where a paste of raw, fresh herbs, oils, and organic powders is applied to the face. It gently exfoliates, draws out skin impurities, improves complexion, reduces pigmentation, and rejuvenates facial cells.",
    symptoms: ["Dull & Dry Skin", "Acne & Hyperpigmentation", "Fine Lines & Early Aging Signs", "Complexion Loss"],
    therapies: ["Mukha Lepam (Face Mask)"],
    duration: "30 to 45 Minutes",
  },
  {
    id: "yoga",
    title: "Yoga & Meditation",
    subtitle: "Mind-Body Integration",
    image: "/services-methods/Yoga/thumbnail.JPG",
    shortDesc: "Individualized yogic posture, breathing, and meditation programs to align body systems.",
    details: "Yoga at Ayurvedamana is tailored to complement clinical treatments. Personalized sessions cover gentle physical postures (asanas), breathing regulation (pranayama), and mindfulness meditation to optimize stress reduction and hasten recovery.",
    symptoms: ["Nervous Stress & Tension", "Poor Physical Flexibility", "Respiratory Inefficiencies", "Mental Agitation & Lack of Focus"],
    therapies: ["Clinical Yoga Therapy", "Pranayama & Meditation"],
    duration: "60 Minutes",
  }
];

export default function TreatmentsBento() {
  const [selectedItem, setSelectedItem] = useState<TreatmentItem | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="bg-transparent w-full overflow-hidden">
      {/* MOST REQUESTED SERVICES SECTION */}
      <section id="treatments" className="w-full text-[#3D0004] py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 md:px-12"
        >
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-2 mb-16">
            <div className="w-[70%] h-0.5 bg-[#680007]/20"></div>
            <span className="font-serif text-2xl font-light text-[#680007]">
              Our Ayurvedic services
            </span>
            <h2 className="font-samarn text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#3D0004] leading-tight">
              Most Requested Services
            </h2>
            <div className="w-[70%] h-0.5 bg-[#680007]/20"></div>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {MOST_REQUESTED_SERVICES.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col transition-all duration-300 flex-[0_0_100%] md:flex-[0_0_33.333%] pl-4"
                  >
                    {/* Large Image Container */}
                    <div className="relative w-full aspect-[3/2] overflow-hidden bg-[#e6e0d5]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-w-768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Hover Overlay containing 'Learn More' and 'Book Consultation' */}
                      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4 px-6">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="w-full max-w-[200px] border border-white hover:bg-white text-white hover:text-[#3D0004] py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                        >
                          Learn More
                        </button>
                        <button
                          onClick={() => {
                            // Open booking directly
                            const btn = document.querySelector('[data-booking-trigger]') as HTMLButtonElement;
                            if (btn) btn.click();
                          }}
                          className="w-full max-w-[200px] bg-[#680007] hover:bg-[#3D0004] text-white py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
                        >
                          Book Consultation
                        </button>
                      </div>
                    </div>

                    {/* Text Content - Elegant Editorial Styles */}
                    <div className="mt-6 flex flex-col flex-grow">
                      <h3 className="font-serif text-xl font-medium text-[#3D0004] group-hover:text-[#b38e5d] transition-colors mb-2 uppercase">
                        {item.title}
                      </h3>
                      <p className="font-serif text-xl text-[#3D0004]/60 leading-relaxed font-light line-clamp-3">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-[#680007]/15 flex items-center justify-center text-[#3D0004]/60 hover:text-[#3D0004] hover:border-[#b38e5d] transition-all hover:scale-105 active:scale-95 bg-[#FBF3EF] shadow-md cursor-pointer z-10"
              aria-label="Previous Service"
            >
              &larr;
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full border border-[#680007]/15 flex items-center justify-center text-[#3D0004]/60 hover:text-[#3D0004] hover:border-[#b38e5d] transition-all hover:scale-105 active:scale-95 bg-[#FBF3EF] shadow-md cursor-pointer z-10"
              aria-label="Next Service"
            >
              &rarr;
            </button>
          </div>

          {/* View All Button */}
          <div className="mt-16 text-center">
            <StyledButton
              href="#treatments"
              variant="secondary"
            >View All Services</StyledButton>
          </div>
        </motion.div>
      </section>

      {/* Details Drawer / Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-[2px] p-4 animate-fade-in">
          {/* Backdrop close */}
          <div className="absolute inset-0" onClick={() => setSelectedItem(null)}></div>

          {/* Sidebar Details Drawer */}
          <div className="relative z-10 w-full max-w-xl h-full bg-[#faf8f5] text-[#3D0004] border-l border-[#680007]/15 shadow-xl p-8 md:p-12 overflow-y-auto flex flex-col justify-between font-serif animate-slide-left">
            <div>
              {/* Close Drawer Button */}
              <div className="flex justify-between items-center mb-8 border-b border-[#680007]/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b38e5d]">
                  Clinical Specifications
                </span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-[#3D0004]/60 hover:text-[#3D0004] text-lg font-serif cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl font-light text-[#3D0004] mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-xs text-[#b38e5d] font-bold uppercase tracking-wider mb-2">
                {selectedItem.subtitle}
              </p>

              <p className="text-sm text-[#3D0004]/80 leading-relaxed font-light mb-8 border-t border-[#680007]/5 pt-4">
                {selectedItem.details}
              </p>

              {/* Grid details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#b38e5d] mb-3">
                    Core Indications / Symptoms Treated
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedItem.symptoms.map((symptom, sIdx) => (
                      <li key={sIdx} className="text-xs flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-[#b38e5d] rounded-full"></span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#680007]/10 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#b38e5d] mb-3">
                    Traditional Lineage Therapies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.therapies.map((therapy, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-[#f7f4f0] border border-[#680007]/15 px-3 py-1.5 text-xs text-[#3D0004]"
                      >
                        {therapy}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action drawer footer */}
            <div className="border-t border-[#680007]/10 pt-8 mt-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-[#3D0004]/60 uppercase">Recommended Stay</span>
                <span className="text-sm font-bold text-[#3D0004]">{selectedItem.duration}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  // Open booking directly
                  const btn = document.querySelector('[data-booking-trigger]') as HTMLButtonElement;
                  if (btn) btn.click();
                }}
                className="w-full bg-[#680007] hover:bg-[#3D0004] text-[#faf8f5] py-4 uppercase font-bold tracking-widest text-xs transition-colors cursor-pointer"
              >
                Consult On This Condition
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
