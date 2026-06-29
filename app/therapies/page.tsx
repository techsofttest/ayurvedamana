"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BookingModal from "../components/ui/BookingModal";

// --- DYNAMIC CONTENT DATA ---
const THERAPIES_LIST = [
  {
    id: "abhyangam",
    title: "ABHYANGAM",
    images: [
      "/services-methods/Abhyanga/thumbnail.JPG"
    ],
    description: "It is considered as one among the poorvakarmas (preparatory procedures). It implies synchronized massage to the whole body or local body parts as per the condition of disease. It is one among the most common and effective therapy in Ayurvedic medicine. Useful in nerve disorders, aches and stiffness. It is usually done for 40 to 60 minutes depending upon the need."
  },
  {
    id: "shiro-dhara",
    title: "SHIRO-DHARA AND THAKRADHARA",
    images: [
      "/services-methods/Shirodhara/thumbnail.JPG"
    ],
    description: "It is a procedure of pouring liquid form of medicine like Thallam (medicated oil) or Thakram (medicated buttermilk) constantly for a time period of 50-60 min on forehead. It is helpful in treating nervous disorders, insomnia, mental stress, anxiety, migraine etc. Thakradhara is very effective in treating skin diseases and respiratory disorders."
  },
  {
    id: "shirovasthi",
    title: "SHIROVASTHI",
    images: [
      "/services-methods/Shirovasti-Kopfzirkulation/thumbnail.JPG"
    ],
    description: "It is a procedure of retaining warm medicated oil (Thailam) in a cap like structure fitted on head. Normally this procedure will be done for 35-50 min for a time period of 7 days maximum. This is considered as one of the greatest treatment for head."
  },
  {
    id: "swedanam",
    title: "SWEDANAM(STEAM BATH)",
    images: [
      "/services-methods/Swedanam-Steam/thumbnail.JPG"
    ],
    description: "It is considered as one among the Poorvakarmas (preparatory procedures). Usually the time period of Swedanam is, till the patient gets proper sweating all over the body. It gives a feeling of lightness, it is good for skin, helps to reduce the fats collected even on extremities."
  },
  {
    id: "avagaha-sweda",
    title: "AVAGAHA SWEDA",
    images: [
      "/services-methods/Kadivasthi-Back pain/thumbnail.JPG"
    ],
    description: "It is a type of swedana (sudation) in which the patient is made to sit in a tub containing medicated liquid for a certain period. It is very helpful in treating Uro-genital, Gynaec, anorectal diseases etc."
  },
  {
    id: "elakizhi",
    title: "ELAKIZHI (PATRAPOTALISWEDAN)/MEDICINAL LEAVES/HERBS BUNDLES",
    images: [
      "/services-methods/Kizhi-Stempelmassage/thumbnail.JPG"
    ],
    description: "It is a type of swedana (sudation) treatment in which the whole body or any specific part by the application of medicinal leaves puddings (medicinal leaves are cut into small pieces and processed in the medicated oils) externally in the form of boluses tied up in muslin bag, dipping it in warm medicated oils. This is done for 45 minutes daily for a period of 07 to 14 days. Fine powder of medicinal herbs is also used. This treatment is effective in chronic back pain and rheumatic complaints, Arthritis, paralysis, pain and swelling in the joints and emaciation of limbs. It stimulates and strengthens the nervous and muscular systems, increases the circulation and metabolic rate, reduces stiffness and pain, improves the skin tone."
  },
  {
    id: "navara-kizhi",
    title: "NAVARA KIZHI (SHASTIKA SHALI PINDASWEDAM)",
    images: [
      "/services-methods/Nawara-Tepa-Treat for everyth/thumbnail.JPG"
    ],
    description: "After applying the medicated oil over the whole body or any specific part, the medicinal rice (Njavarayari) and the root of Sidaretusa extract are processed with milk and to be made in the form of paste and apply over the whole body or any specific part along with massage. This is done for 60 to 90 minutes daily for 07 to 14 days. This treatment renders strengths to nerves and muscles and purifies blood and is beneficial for all types of rheumatism, joint pain, emaciation of limbs, high blood pressure, cholesterol, paralysis, sciatica, and certain kinds of skin diseases and it improves general body weakness, the skin colour and complexion."
  },
  {
    id: "ksheeradhoomam",
    title: "KSHEERADHOOMAM",
    images: [
      "/services-methods/Wellness-Mask/thumbnail.JPG"
    ],
    description: "This is also a type of swedana(sudation) in which steam of medicated milk is made to be exposed to face for a certain time. It is effective in treating facial palsy, dribbling of saliva, strengthening of facial muscles etc."
  },
  {
    id: "pichu",
    title: "PICHU",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/thumbnail.JPG"
    ],
    description: "It is a way of application of cotton dipped in Luke warm medicated oil (Thailam) on local body parts (head, lumbar region, cervical region, joints etc). The time period and medicine used for this procedure will be decided as per the condition."
  },
  {
    id: "thalam-thala",
    title: "THALAM THALA POTHICHIL",
    images: [
      "/services-methods/Thalapodichi-Bananenblatt_auf_Kopf/thumbnail.jpg"
    ],
    description: "Thalam or Masthishkya is keeping medicated oils alone or mixed with paste of drugs on the head. Application of wet medicated paste over the head and then covering the same with a processed plantain leaf is called as Thala Pothichil. Both are very much effective in various psycho somatic disorders."
  },
  {
    id: "udwarthanam",
    title: "UDWARTHANAM",
    images: [
      "/services-methods/Udwarthanam-Powder/thumbnail.JPG"
    ],
    description: "This procedure is done here with medicated powder (Choornam) mixed in mild hot Thailam, in which this combination of medicines will be rubbed on the body surface with moderate pressure in prathilomagathi (opposite direction of normal massage). It is very useful in weight reduction."
  },
  {
    id: "pizhichil",
    title: "PIZHICHIL",
    images: [
      "/services-methods/Prizil-Cotton_oil/thumbnail.JPG"
    ],
    description: "It is a very effective treatment procedure introduced by traditional Ayurvedic physicians of Kerala for the management of severe pain and swelling due to diseases like gout, arthritis etc. It can be done with different forms of medications like thailam, amlakaanchi etc as per the condition."
  },
  {
    id: "kizhi",
    title: "KIZHI (POULTICE)",
    images: [
      "/services-methods/Kizhi-Stempelmassage/thumbnail.JPG"
    ],
    description: "It is also a special treatment procedure introduced by traditional Ayurvedic Vaidyas of Kerala. Kizhi literally means medicated bolus. It is made by tying various forms of medicaments in cotton cloth piece and then applying this bolus to the parts required after heating. Based on the type of medicines there are many types of Kizhis: Ela Kizhi (Scrapped Leaf Bolus - Kizhi Can Be Made Out Of Tying Specially Processed Leaves Of Medicinal Plants), Podikizhi (Powder Bolus), Navara Kizhi (Bolus Made Of Navara Rice Prepared In Medicated Milk And Kashayam/Decoction), and Manjakizhi (A special Kizhi used in Kalari Marma Chikitsa)."
  },
  {
    id: "lepanam",
    title: "LEPANAM",
    images: [
      "/services-methods/Wellness-Mask/thumbnail.JPG"
    ],
    description: "It is the local application of medicated pastes over the body parts."
  },
  {
    id: "upanaham",
    title: "UPANAHAM",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "It is the local application of warm medicated pastes over required areas and covering it with medicated leaves and cotton cloth piece."
  },
  {
    id: "navaratheppu",
    title: "NAVARATHEPPU",
    images: [
      "/services-methods/Nawara-Tepa-Treat for everyth/thumbnail.JPG"
    ],
    description: "Powdered Navara rice processed wit medicated milk or decoction and making it in a paste form, which is to be applied on the body for a time according to specific conditions. (40 to 1 hour)"
  },
  {
    id: "katee-pichu",
    title: "KATEE PICHU",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "In this the cotton is dipped in Luke warm medicated oil (Thailam) and the same is stick or kept over the lumbar region for a time according to condition. (40 to 1 hour)"
  },
  {
    id: "akshitarpan",
    title: "AKSHITARPAN",
    images: [
      "/services-methods/Nasyam-Nase/thumbnail.JPG"
    ],
    description: "In this procedure, a pool of mild warm oil or medicated ghee is retained for specific time over specific areas as per the conditions for both eyes."
  },
  {
    id: "yoni-pichu",
    title: "YONI PICHU",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "Yoni Pichu is a therapy whereby clean sterilized cotton is dipped in medicated oil and placed within the vaginal passage. The sterilized cotton should be retained for a long time so that It exhibits action locally. The effect of the vitiated Dosha can be nullified. The dhaatu (tissues) can be strengthened. Ulcers If present heal, pain subsides and the local hygiene improves. This treatment is particularly useful in case of vaginal infections. The oil used helps to nourish and strengthen the uterine muscles. The pichu helps to hold uterus upwards and prevents its descent. Effective in vaginal infections, discharges, uterine prolapse, habitual abortion etc."
  },
  {
    id: "yoni-kshalanam",
    title: "YONI KSHALANAM",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "Procedure of washing external genetalia as well as inner tract with specific sterilized apparatus using medicated kashaya as required for the diseased state. Very effective in allment of leucorrhoea, Genito urinary infections, infertility etc."
  },
  {
    id: "vamanam",
    title: "VAMANAM",
    images: [
      "/services-methods/Abhyanga/thumbnail.JPG"
    ],
    description: "It is the first among the five purificatory procedures (Panchakarma procedures). Shodhana or purification therapies are aimed at the removal of morbid humors responsible for diseases and to produce an ideal environment for the proper functioning of the body and better action of medicaments used. By Vamana, or medicine Induced vomiting, the bio-cleansing of accumulated vitiated humors in the upper gastro intestinal tract is done. It is very effective in gastric problems, respiratory diseases, sinusitis, skin diseases etc."
  },
  {
    id: "virechanam",
    title: "VIRECHANAM",
    images: [
      "/services-methods/Abhyanga/thumbnail.JPG"
    ],
    description: "It is a purificatory procedure used in eliminating the vitiated humors in more quantity with less stress. It is the purgation using specific medication for diseased conditions. It is very much effective in Jaundice, Skin disorders, Hemiplegia, Bronchial asthma etc."
  },
  {
    id: "vasthi",
    title: "VASTHI",
    images: [
      "/services-methods/Kadivasthi-Back pain/thumbnail.JPG"
    ],
    description: "Vasthi karma is the procedure by which the medicines in suspension form are administered through rectum or genitourinary tract using vasthiyanthra (specific apparatus for vasthi). It is one among the most important treatment modality in Ayurvedic science with a multitude of utilities and applications. This utility lies in the selection of drugs used in vasthi for specific conditions. Based on the type of drug administered vasthi is of 2 types, Nirooha or Kashaya vasthi, in which decoctions of various medicinal plants are utilized and Anuvasana or Sneha vasthi, in which medicated oils or ghee's are utilized. Also, the vasthis are given in varying quantities as per the requirement of the disease. It is very much effective in almost all neurological and arthritic conditions, old age problems, debility, infertility etc."
  },
  {
    id: "uttara-vasti",
    title: "UTTARA VASTI",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "It is done after completion of menstrual cycle when the female genital tract is receptive to the administration of medicated formulation. A certain quantity of medicated oil or ghee formulation can be administered into the uterine cavity by means of specific sterilized instrument guided with a Cusco's speculum. It is done for a period of seven days with gradual increase of the dose of medicine. It is indicated in uterine disorders, bladder disorders, dysmenorrhea, menorrhagia, primary Infertility etc."
  },
  {
    id: "hrid-dharat",
    title: "HRID DHARAT",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "The ayurvedic panchakarma therapy for blockages in the heart. This procedure is for Improving the exercise capacity of a failing heart."
  },
  {
    id: "anda-sweda",
    title: "ANDA SWEDA",
    images: [
      "/services-methods/Kizhi-Stempelmassage/thumbnail.JPG"
    ],
    description: "This is a kind of ushmasweda. Indicated in post-polio residual paralysis, traumatic conditions, spinal myelopathy etc."
  },
  {
    id: "valuka-sweda",
    title: "VALUKA SWEDA",
    images: [
      "/services-methods/Kizhi-Stempelmassage/thumbnail.JPG"
    ],
    description: "Sand particles are taken and heated over the pan and tied in bolus form which is to be applied to the affected areas for specific time according to conditions."
  },
  {
    id: "pada-dhara",
    title: "PADA DHARA",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "Pouring medicated warm oil over the feet (especially sole). Indicated in lower limb pains, insomnia etc."
  },
  {
    id: "sarvanga-dhara",
    title: "SARVANGA THAKRA/KSHEERA DHARA",
    images: [
      "/services-methods/Shirodhara/thumbnail.JPG"
    ],
    description: "In this medicated Thakra (buttermilk) or medicated milk is used in lukewarm condition, which is then poured in a systematic way over the whole body."
  },
  {
    id: "jaloukavachakana",
    title: "JALOUKAVACHAKANA (LEECH THERAPY)",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "It's a procedure of medicinal leech application in curing blood related disorders like In varicose veins, acute gout Infections etc."
  },
  {
    id: "netra-dhara",
    title: "NETRA DHARA",
    images: [
      "/services-methods/Nasyam-Nase/thumbnail.JPG"
    ],
    description: "Is a process of pouring liquid form of medicine (usually kashayam) in to the inner canthus of eyes from a desired height for recommended number of times according to the condition."
  },
  {
    id: "jaanu-dhara",
    title: "JAANU DHARA",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "Is a process in which pouring of warm liquid form of medicines (usually thallam) on the surface of knee joint for a particular time period from a particular height."
  },
  {
    id: "aschotanam",
    title: "ASCHOTANAM",
    images: [
      "/services-methods/Nasyam-Nase/thumbnail.JPG"
    ],
    description: "Means application of liquid form of medicine as drops in to the eyes. It's very helpful in treating eye diseases..."
  },
  {
    id: "tharpanam",
    title: "THARPANAM",
    images: [
      "/services-methods/Nasyam-Nase/thumbnail.JPG"
    ],
    description: "In this procedure, a pool of mild warm oil is retained for specific time over specific areas as per the conditions. According to the body parts where Tharpanam is done, It is called in different names like: Nethra Tharpanam (On Both Eyes), Kati Tharpanam (On Lumbar Region), Jaanutharpanam (On Knee Joints), Greevatharpanam (On Cervical Region)."
  },
  {
    id: "karnapooranam",
    title: "KARNAPOORANAM",
    images: [
      "/services-methods/Shirodhara/thumbnail.JPG"
    ],
    description: "Filling of medicated oil in mild warm state inside the ears is called as Karnapooranam. It is a magical remedy in so many ear disorders like Tinnitus, itching inside ears etc."
  },
  {
    id: "dhoopanam",
    title: "DHOOPANAM",
    images: [
      "/services-methods/Swedanam-Steam/thumbnail.JPG"
    ],
    description: "It is a fumigation procedure done with dry forms of medicines and Ghrutham (medicated ghee) on required body parts like ears, surface wounds etc. It is done as an effective disincentive measure in some conditions."
  },
  {
    id: "sneha-paanam",
    title: "SNEHA PAANAM",
    images: [
      "/services-methods/Kitchen/IMG_9346.JPG"
    ],
    description: "It the oral consumption of Sneham (Oil, Ghee, Fat etc). Generally it is done with Ghrutham (medicated ghee). It is considered as an important preparatory procedure for the Panchakarma therapies (purification therapies) as well as it is considered even as a main procedure in treating severe disorders like infertility, psychiatric diseases etc."
  },
  {
    id: "greeva-vasti",
    title: "GREEVA VASTI / KATI VASTI / URO VASTI",
    images: [
      "/services-methods/Kadivasthi-Back pain/thumbnail.JPG"
    ],
    description: "Retention of lukewarm medicated oils in a leak proof boundary made up of green gram powder paste over the upper back-cervical (Greevavasti), In the lower back - lumber (Kati vasti) and in the upper middle of the chest-thorax (Urovasti) is beneficial in localized and radiating pain of different origin."
  },
  {
    id: "nasyam",
    title: "NASYAM",
    images: [
      "/services-methods/Nasyam-Nase/thumbnail.JPG"
    ],
    description: "It is the nasal administration of medications. It is a very effective therapy for all systemic disorders especially those related with the head and neck. It is a proved effective therapy for psychiatric disorders."
  },
  {
    id: "kabalam",
    title: "KABALAM",
    images: [
      "/services-methods/Wellness-Mask/thumbnail.JPG"
    ],
    description: "It is the procedure of gargling with medicated oil, kashaya, saline water etc as a post procedure of Nasya as well as individual treatment for oral diseases."
  },
  {
    id: "rakthamoksham",
    title: "RAKTHAMOKSHAM",
    images: [
      "/services-methods/Pichu-Knie_und_Schulter/IMG_9267.JPG"
    ],
    description: "Raktamoksha is a unique Para surgical measure Indicated in various diseases where gross vitiation of Rakta or blood is present. It is the bloodletting therapy. Various means are utilized for the elimination of vitiated blood that play as an important causative agent for many systemic disorders. Venesection, leech therapy, Pachanga or scraping etc are utilized for specific conditions. Useful in skin disorders, Jaundice, tumors etc."
  }
];

const FEATURED_THERAPY = {
  id: "chavitti-uzhichil",
  title: "CHAVITTI UZHICHIL (FOOT MASSAGE)",
  description: [
    "'Chavitti Uzhichil' is a special massage technique applied on both healthy and sick. It has a systematic procedure derived from Kerala Martial Art known as Kalaripayattu. The same is called \"Padaghata in Ayurveda. It is efficacious in various ailments, structural deformities, sciatica, backache, disc prolepsis, spinal injuries and neurological conditions.",
    "The massage is done on the whole body using the foot and the palms as well, applying medicated herbal oil on the wholebody and head of the recipient. The masseur gently moves the footon his body controlling the pressure, balancing on a rope hung on the ceiling. Simultaneously, the massage is done with palms. It needs more than an hour to complete the entire procedure",
    "Though the process is laborious, It brings very relaxing and soothing experience to the person who receivesit. It Is mandatory that every student of Kalaripayattu has to undergo a course of treatment each year tormaintain fitness to further evolve in the practice. It also enhances vitality, strength, flexibility, stamina and stability. Normally.the course duration is either 7 days or 14 days as decided by experts, depending on the health condition of the person"
  ],
  benefits: [
    "The Marmas (vital points) are well massaged and manipulated",
    "Increases energy and vitality of the body",
    "Efficient in Marma injuries and several diseases already mentioned",
    "Excellent rejuvenation technique",
    "Beneficial for healthy people who want to enhance their health",
    "Good in obesity and weight reduction",
    "Develops mental faculties like stability, memory, concentration and strength"
  ]
};

type Therapy = typeof THERAPIES_LIST[0];


export default function TherapiesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const [selectedTherapy, setSelectedTherapy] = useState<Therapy | null>(null);

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
      <Header onOpenBooking={openBooking} forceSolid={true} />

      {/* Main Content */}
      <main className="flex-grow pt-28 md:pt-36 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full bg-transparent text-[#3D0004] font-sans py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full text-center md:text-left mb-12"
            >
              <h1 className="font-samarn text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#680007] leading-tight uppercase mb-4">
                THERAPIES
              </h1>
              <span className="font-serif text-sm md:text-md uppercase tracking-widest text-[#680007] block mb-2">
                GET THE BENEFIT OF AUTHENTIC AYURVEDA AT THE PLACE WHERE IT NURTURED
              </span>
            </motion.div>
          </div>
        </section>

        {/* THERAPIES GRID SECTION */}
        <section className="relative w-full bg-transparent py-8 border-t border-[#680007]/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {THERAPIES_LIST.map((therapy, index) => (
                <motion.div
                  key={therapy.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: "easeOut" }}
                  className="flex flex-col group h-full"
                >
                  <CardCarousel images={therapy.images} title={therapy.title} />
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-serif text-xl font-medium text-[#3D0004] group-hover:text-[#b38e5d] transition-colors mb-2 uppercase">
                      {therapy.title}
                    </h3>
                    <p className="font-serif text-lg text-[#3D0004]/60 leading-relaxed font-light line-clamp-3 mb-4">
                      {therapy.description}
                    </p>
                    <div className="mt-auto pt-2">
                      <button
                        onClick={() => setSelectedTherapy(therapy)}
                        className="font-serif text-sm uppercase tracking-wider text-[#680007] hover:text-[#b38e5d] transition-colors font-medium inline-flex items-center gap-1 group/btn cursor-pointer"
                      >
                        Read More <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED THERAPY: CHAVITTI UZHICHIL */}
        <section className="relative w-full bg-transparent py-16 mt-12 border-t border-[#680007]/10 bg-[#FBF3EF]/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20"
            >
              {/* Left Column: Sticky Image */}
              <div className="w-full lg:w-5/12 lg:sticky lg:top-36">
                <div className="relative aspect-[3/4] bg-[#e6e0d5] overflow-hidden flex-shrink-0">
                  <Image
                    src="/services-methods/foot-massage/chavitty2.png"
                    alt={FEATURED_THERAPY.title}
                    fill
                    className="object-cover"
                  />
              </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full lg:w-7/12 space-y-8 pt-4">
                <div>
                  <span className="font-serif text-md uppercase tracking-wider text-[#680007] block mb-2">
                    Specialized Treatment
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#680007] uppercase leading-snug">
                    {FEATURED_THERAPY.title}
                  </h2>
                </div>
                
                <div className="w-16 h-[2px] bg-[#680007]/30"></div>
                
                <div className="space-y-4">
                  {FEATURED_THERAPY.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="font-serif text-base md:text-lg text-[#3D0004]/80 leading-relaxed font-light">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-6 border-t border-[#680007]/10">
                  <h3 className="font-serif text-xl text-[#3D0004] font-medium mb-4">Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 font-serif text-base text-[#3D0004]/80 font-light">
                    {FEATURED_THERAPY.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="text-[#680007] mt-1 text-sm">◆</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Therapy Detail Modal */}
      <AnimatePresence>
        {selectedTherapy && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(104, 0, 7, 0.2); }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(104, 0, 7, 0.4); }
            `}</style>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FBF3EF] max-w-4xl w-full max-h-[90vh] relative flex flex-col rounded-sm"
            >
              <button
                onClick={() => setSelectedTherapy(null)}
                className="absolute top-4 right-4 text-[#3D0004]/60 hover:text-[#680007] transition-colors p-1 text-3xl font-light cursor-pointer z-20 leading-none bg-[#FBF3EF]/80 hover:bg-[#680007]/10"
                aria-label="Close modal"
              >
                &times;
              </button>

              <div className="overflow-y-auto custom-scrollbar flex-grow">
                <ModalCarousel images={selectedTherapy.images} title={selectedTherapy.title} />
                <div className="p-6 md:p-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#680007] font-semibold uppercase leading-snug mb-4">
                    {selectedTherapy.title}
                  </h3>
                  <p className="font-serif text-base md:text-lg text-[#3D0004]/80 leading-relaxed font-light whitespace-pre-line">
                    {selectedTherapy.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Consultation/Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

const CardCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect) };
  }, [emblaApi]);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#e6e0d5] rounded-sm mb-6 border border-[#680007]/5" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src, index) => (
          <div key={index} className="relative flex-[0_0_100%] h-full">
            <Image src={src} alt={`${title} - ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const ModalCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#e6e0d5]">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="relative flex-[0_0_100%] h-full">
              <Image src={src} alt={`${title} - ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors">&larr;</button>
          <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors">&rarr;</button>
        </>
      )}
    </div>
  );
};