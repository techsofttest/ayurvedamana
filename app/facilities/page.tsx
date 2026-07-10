"use client";

import ZigzagPageLayout from "../components/ui/ZigzagPageLayout";
import ZigzagSectionList from "../components/ui/ZigzagSectionList";

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
  return (
    <ZigzagPageLayout
      title="Facilities"
      subtitle="20 Heritage Bedrooms, Organic Kitchens, and Lineage Treatment Sanctuaries."
      bannerImage="/about-section/building3.png"
    >
      <ZigzagSectionList items={FACILITIES_DATA} />
    </ZigzagPageLayout>
  );
}
