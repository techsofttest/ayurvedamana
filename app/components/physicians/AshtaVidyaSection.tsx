"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ASHTA_VIDYA_LIST, ASHTA_VIDYA_PROFILES } from "../../physicians/data";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function AshtaVidyaSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full py-20 md:py-24"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center space-y-2 mb-16"
                >
                    <div className="w-[70%] h-0.5 bg-[#680007]/20"></div>
                    <span className="font-serif text-2xl font-light text-[#680007]">
                        Our Lineage
                    </span>
                    <h2 className="font-samarn text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#3D0004] leading-tight uppercase">
                        ASHTA VIDYA LINAGE
                    </h2>
                    <div className="w-[70%] h-0.5 bg-[#680007]/20"></div>
                </motion.div>

                {/* <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-24"
                >
                    {ASHTA_VIDYA_LIST.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="bg-white/50 p-4 text-center">
                            <span className="font-serif text-base md:text-lg text-[#3D0004]/90 font-light">{item}</span>
                        </motion.div>
                    ))}
                </motion.div> */}

                <div className="space-y-24">
                    {ASHTA_VIDYA_PROFILES.map((profile, index) => (
                        <motion.div
                            key={profile.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
                        >
                            <div className="w-full md:w-2/5 relative aspect-[3/4] bg-[#e6e0d5] overflow-hidden flex-shrink-0">
                                <Image src={profile.image} alt={profile.name} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-3/5">
                                <h3 className="font-serif text-2xl md:text-3xl text-[#680007] font-medium uppercase leading-snug">{profile.name}</h3>
                                <div className="space-y-4 mt-5">
                                    {profile.description.map((paragraph, pIndex) => (
                                        <p key={pIndex} className="font-serif text-base md:text-lg text-[#3D0004]/80 leading-relaxed font-light">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
