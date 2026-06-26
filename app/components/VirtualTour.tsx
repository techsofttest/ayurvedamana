import Image from "next/image";
import { motion } from "framer-motion";

export default function VirtualTour() {
  return (
    <section id="virtual-tour" className="relative w-full h-[60vh] min-h-[400px] group bg-black">
      <Image
        src="/services-methods/Umbrella-to/thumbnail.JPG"
        alt="Ayurvedamana Traditional Verandah"
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-6"
      >
        <a
          href="https://www.youtube.com/watch?v=3dtY9cxJlBQ"
          target="_blank"
          rel="noopener noreferrer"
          className="w-24 h-24 rounded-full bg-white/90 hover:bg-white text-[#3D0004] flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl group"
          aria-label="Play Virtual Tour Video"
        >
          <svg className="w-10 h-10 fill-current ml-1 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </a>
        <h2 className="font-samarn text-3xl md:text-5xl mt-8 text-shadow-lg">
          Experience Ayurveda Mana
        </h2>
        <p className="font-serif text-lg md:text-xl font-light mt-2 opacity-90">
          Take a virtual tour of our serene heritage campus.
        </p>
      </motion.div>
    </section>
  );
}
