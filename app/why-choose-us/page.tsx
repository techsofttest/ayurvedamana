"use client";

import ZigzagPageLayout from "../components/ui/ZigzagPageLayout";
import ZigzagSectionList from "../components/ui/ZigzagSectionList";

const WHY_CHOOSE_US_DATA = [
  {
    title: "The Ayurvedamana Way",
    tagline: "Authentic Classical Healing",
    description: "Ayurvedamana literally means \"House of Ayurveda\" in Sanskrit. For decades, we have been recognized as one of Kerala's oldest and most authentic centres dedicated exclusively to classical Ayurveda healing.\n\nUnlike wellness resorts that combine leisure with spa experiences, Perumbayil Ayurvedamana is a specialized Ayurveda treatment centre where every aspect of our care is focused on achieving genuine therapeutic results through authentic, classical Ayurveda.",
    images: ["/about-section/building3.png"]
  },
  {
    title: "Our Treatment Philosophy",
    tagline: "Three Ancient Healing Sciences",
    description: "Our unique treatment philosophy, known as The Ayurvedamana Way, is built upon the harmonious integration of three ancient healing sciences:\n\n• Classical Ayurveda – Personalized diagnosis and evidence-based treatment protocols based on traditional Ayurvedic principles.\n• Kalari Therapy – Therapeutic techniques derived from Kerala's ancient martial art, enhancing flexibility, circulation, muscular strength, and rehabilitation.\n• Marma Therapy – Precise stimulation of the body's vital energy points to restore balance, relieve pain, and activate the body's natural healing mechanisms.\n\nThis distinctive combination creates a holistic, scientific, and highly effective approach to healing that addresses the root cause of illness rather than merely managing symptoms.",
    images: ["/about-section/building5.png"]
  },
  {
    title: "Accredited Excellence",
    tagline: "Prestigious Certifications",
    description: "Our commitment to authenticity and quality has been recognized through prestigious certifications:\n\n• Diamond Classification (Highest Category) awarded by the Department of Tourism, Government of Kerala.\n• NABH Accreditation under the Ministry of AYUSH, Government of India, reflecting our adherence to nationally recognized standards of patient care, safety, and quality. Eligible patients may also avail medical insurance benefits subject to their policy terms.",
    images: ["/certification/nabh.png"]
  },
  {
    title: "Expert Medical Care",
    tagline: "Individualized Treatment Protocols",
    description: "Every patient receives individualized treatment under the guidance of a highly qualified medical team comprising:\n\n• Senior Consultant Ayurveda Physicians\n• Medical Officers\n• Resident Doctors\n• Experienced and professionally trained Ayurveda Therapists\n\nEach treatment programme combines carefully selected internal herbal medicines with personalized external therapies, continuously monitored and adjusted according to the patient's progress.",
    images: ["/other-doctors/dr-raghava.jpg"]
  },
  {
    title: "Complete Mind-Body Healing",
    tagline: "Beyond Medicines & Therapies",
    description: "Healing at Ayurvedamana extends beyond medicines and therapies. To support physical recovery and mental well-being, every treatment programme includes:\n\n• Daily morning Yoga sessions\n• Two times Ayurveda external therapies every day\n• Specially made Ayurveda herbal decoctions 4-5 times a day\n• Personalized dietary guidance based on Ayurvedic principles\n• A peaceful heritage environment that encourages rest and rejuvenation",
    images: ["/services-methods/Arrival-Ceremony-with-flowers/IMG_9924.JPG"]
  },
  {
    title: "Areas of Specialization",
    tagline: "Experience the true essence of Ayurveda",
    description: "We provide specialized Ayurveda treatment for:\n\n• Neurological Disorders\n• Musculoskeletal and Orthopaedic Conditions\n• Lifestyle Disorders\n• Stress-Related Conditions\n• Rejuvenation & Preventive Healthcare\n• Wellness and Healthy Ageing Programmes\n\nAt Perumbayil Ayurvedamana, we remain committed to preserving the timeless wisdom of classical Ayurveda while delivering compassionate, evidence-informed healthcare in a serene and authentic healing environment.\n\nExperience the true essence of Ayurveda—the Ayurvedamana Way.",
    images: ["/services-methods/Abhyanga/thumbnail.JPG"]
  }
];

export default function WhyChooseUsPage() {
  return (
    <ZigzagPageLayout
      title="Why Choose Us"
      subtitle="Experience the true essence of Ayurveda—the Ayurvedamana Way."
      bannerImage="/about-section/building3.png"
    >
      <ZigzagSectionList items={WHY_CHOOSE_US_DATA} />
    </ZigzagPageLayout>
  );
}
