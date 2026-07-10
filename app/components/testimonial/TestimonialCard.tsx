"use client";

import { motion } from "framer-motion";
import { SuccessStory } from "./types";

interface TestimonialCardProps {
  story: SuccessStory;
  index: number;
  onPlayVideo: (videoSrc: string, title: string) => void;
}

export default function TestimonialCard({ story, index, onPlayVideo }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/60 backdrop-blur-sm border border-[#680007]/10 p-8 md:p-10 hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      {/* 1. Header: Always Renders */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-8 border-b border-[#680007]/10 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {/* Person Icon */}
            <svg className="w-6 h-6 md:w-7 md:h-7 text-[#680007]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#680007] uppercase">
              {story.patientName}
            </h3>
          </div>
          <span className="font-serif text-sm font-bold text-[#3D0004]/70 uppercase tracking-wider block ml-9 md:ml-10">
            {story.condition}
          </span>
        </div>
        <div className="flex items-center gap-2 w-fit ml-9 sm:ml-0">
          <img 
            src={story.flag} 
            alt={story.country} 
            className="w-6 h-4 object-cover shadow-sm"
          />
          <span className="font-serif text-xs font-bold uppercase tracking-widest text-[#680007]">
            {story.country}
          </span>
        </div>
      </div>

      {/* 2. Video Placeholder: Clicking opens lightbox modal */}
      {story.hasVideo && story.video && (
        <div 
          onClick={() => onPlayVideo(story.video!, `${story.patientName} - ${story.condition}`)}
          className="relative w-full aspect-video mb-8 border border-[#680007]/10 flex items-center justify-center group cursor-pointer overflow-hidden flex-shrink-0 bg-[#e6e0d5]"
        >
          {/* Cover photo */}
          {story.coverPhoto && (
            <img 
              src={story.coverPhoto} 
              alt={`${story.patientName} Cover`} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors z-10"></div>
          
          {/* Centered Play Button Icon */}
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[14px] border-l-[#680007] border-b-8 border-b-transparent ml-1"></div>
          </div>
          
          <span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-widest z-20 drop-shadow-md">
            Watch Video Testimonial
          </span>
        </div>
      )}

      {/* 3. Quote: Conditionally Renders */}
      {story.quote && (
        <blockquote className="font-serif text-xl md:text-3xl text-[#3D0004] italic leading-snug mb-8 relative z-10">
          <span className="absolute -top-6 -left-4 text-7xl text-[#680007]/10 font-serif -z-10">"</span>
          {story.quote}
        </blockquote>
      )}

      {/* 4. Before and After Narrative: Conditionally Renders */}
      {(story.before || story.after) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FBF3EF]/40 p-6 border border-[#680007]/5 mt-auto">
          {story.before && (
            <div>
              <span className="font-serif text-xs font-bold uppercase tracking-widest text-[#680007] block mb-3">
                Before Treatment
              </span>
              <p className="font-serif text-lg md:text-xl text-[#3D0004]/95 leading-relaxed">
                {story.before}
              </p>
            </div>
          )}
          {story.after && (
            <div className={`pt-6 md:pt-0 border-t border-[#680007]/10 md:border-t-0 ${story.before ? 'md:border-l md:border-[#680007]/10 md:pl-8' : ''}`}>
              <span className="font-serif text-xs font-bold uppercase tracking-widest text-[#680007] block mb-3">
                After Treatment
              </span>
              <p className="font-serif text-lg md:text-xl text-[#3D0004]/95 leading-relaxed">
                {story.after}
              </p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
