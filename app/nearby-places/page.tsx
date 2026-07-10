"use client";

import ZigzagPageLayout from "../components/ui/ZigzagPageLayout";
import ZigzagSectionList from "../components/ui/ZigzagSectionList";

const NEARBY_PLACES_DATA = [
  {
    title: "Guruvayur Temple",
    tagline: "Spiritual Abode of Lord Krishna",
    description: "Guruvayur, according to the legends may be 5,000 years old is a famous Krishna temple and is one of the most important places of worship for Hindus and is often referred to as \"Bhooloka Vaikuntam\" which translates to the holy abode of Vishnu on Earth.\n\nThe divine idol installed here represents the enchanting form of Sree Krishna endowed with the four lustrous arms carrying the conch Panchajanya, the discus Sudarshana Chakra, the mace Kaumodaki and the lotus. He is worshipped according to the pooja routines laid down by Adi Sankaracharya and later written formally in the Tantric way by Chennas Narayanan Namboodiri (born in 1427). The temple/pooja routines are strictly followed without any compromise.",
    images: [
      "/nearby-places/guruvayur temple.jpg"
    ]
  },
  {
    title: "Elephant Camp at Punnathurkotta",
    tagline: "World's Largest Elephant Sanctuary",
    description: "The Elephant Camp is located in Punnathur Kotta, at a distance of 3 km from the Guruvayur Temple. This Elephant Camp is one of its kinds in the world and is considered to be one of the largest elephant sanctuaries housing around 60 elephants. The fascinating feature is that all the elephants are offerings that are made by the devotees, at the temple.\n\nThe rituals of Gajapooja (Worshipping Elephants) and Anayoottu (Feeding Elephants) are observed here, as an offering to Lord Ganesha. The legendary elephant \"Guruvayur Keshavan\" was housed here. The complex also contains a temple dedicated to Lord Shiva and Bhagavathy.",
    images: [
      "/nearby-places/elephant camp at punnathurkotta.jpg"
    ]
  },
  {
    title: "Mammiyoor Temple",
    tagline: "Historic Shiva Kshetram",
    description: "Famously known as Mammiyur Mahadeva Kshetram is a Shiva temple situated in Guruvayoor, Thrissur district of Kerala. Every devotee who goes to Guruvayur Temple is supposed to go to Mammiyoor also, as the ritual goes. The temple is a part of the 108 famous Shiva temples in Kerala and one among the five Shiva temples around Guruvayoor. The main deity is Shiva and he is facing east and is in rowdra bhava.\n\nIt is considered that any pilgrimage to Guruvayoor Temple is complete only after a visit to Mammiyur Temple also. Almost all the poojas and rituals in this Temple are regulated in tune with the poojas and rituals in Guruvayoor Temple.",
    images: [
      "/nearby-places/mammiyoor temple.jpg"
    ]
  },
  {
    title: "Palayoor and Pavaratty Churches",
    tagline: "Centuries-Old Christian Heritage",
    description: "St. Thomas Syro-Malabar Catholic Church in Palayoor was established in 52 AD by St. Thomas the Apostle, making it one of the oldest churches in India. The historical structure features a rich architectural heritage and holds great significance in Christian history.\n\nLocated nearby, the Pavaratty St. Joseph's Shrine is another highly renowned Christian pilgrimage center, attracting thousands of devotees annually for its historic feast and blessings.",
    images: [
      "/nearby-places/palayoor and pavaratty churches.jpg"
    ]
  },
  {
    title: "Cheraman Juma Mosque",
    tagline: "India's First Mosque",
    description: "The Cheraman Perumal Mosque (Cheraman Juma Masjid) is situated in Kodungallur, Thrissur district in Kerala. It is the symbol for trade relations between Arabia and India. Located about one hour journey from Perumbayil Ayurvedamana, this historical site represents the ancient roots of Islamic heritage in the Indian subcontinent.",
    images: [
      "/nearby-places/cheraman juma mosque.jpg"
    ]
  }
];

export default function NearbyPlacesPage() {
  return (
    <ZigzagPageLayout
      title="Nearby Places"
      subtitle="Explore sacred temples, heritage churches, historic mosques, and sanctuaries around Guruvayur."
      bannerImage="/nearby-places/banner.jpg"
    >
      <ZigzagSectionList items={NEARBY_PLACES_DATA} />
    </ZigzagPageLayout>
  );
}
