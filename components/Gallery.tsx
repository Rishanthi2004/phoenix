"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Flame } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Training" | "Competitions" | "Events" | "Students" | "Awards";
  image: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Embers & Staff Dynamics",
    category: "Training",
    image: "/images/hero.jpg",
    caption: "Mastering high-speed single stick rotation with traditional balance.",
  },
  {
    id: "g2",
    title: "Temple Gurukulam Mentorship",
    category: "Events",
    image: "/images/guru.jpg",
    caption: "Master S. Muhibur Rahman conducting classical heritage orientation.",
  },
  {
    id: "g3",
    title: "Youth Gurukulam Batch",
    category: "Students",
    image: "/images/kids.jpg",
    caption: "Young practitioners mastering foundational footwork in the open red-soil arena.",
  },
  {
    id: "g4",
    title: "High-Octane Tournament Sparring",
    category: "Competitions",
    image: "/images/competition.jpg",
    caption: "Fast-paced Sandai stick clash in front of championship spectators.",
  },
  {
    id: "g5",
    title: "State Championship Laurels",
    category: "Awards",
    image: "/images/awards.jpg",
    caption: "Phoenix Silambam Academy champions lifting the State Trophy with pride.",
  },
  {
    id: "g6",
    title: "Classical Tamil Weaponry Armoury",
    category: "Training",
    image: "/images/weapons.jpg",
    caption: "Traditional bamboo staves, Surul Vaal flexible swords, and Maduvu deer horns.",
  },
  {
    id: "g7",
    title: "Foundation & Footwork Drills",
    category: "Students",
    image: "/images/beginner.jpg",
    caption: "Beginner students honing single-stick Kaaladi stances and posture.",
  },
  {
    id: "g8",
    title: "Self Defence Disarm Duel",
    category: "Competitions",
    image: "/images/selfdefence.jpg",
    caption: "Acrobatic jump counter and strike disarm technique demonstration.",
  },
];

const categories = ["All", "Training", "Competitions", "Events", "Students", "Awards"] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 relative bg-[#0b1d36] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Visual Glimpses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cinzel text-white mb-4">
            Academy <span className="flame-gradient-text">Gallery</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Witness the discipline, intensity, camaraderie, and warrior spirit in action at Phoenix Silambam Academy.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-orange-500/20 font-bold"
                  : "phoenix-card text-slate-200 hover:text-white hover:border-sky-400/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-black/40 border border-sky-400/20 hover:border-amber-400 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Dark gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09172a] via-[#09172a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h4 className="text-white font-cinzel font-bold text-sm leading-snug">
                  {item.title}
                </h4>
                <p className="text-slate-200 text-xs mt-1 line-clamp-2">
                  {item.caption}
                </p>
                
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0d223d]/80 border border-sky-400/40 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#06101e]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={prevLightbox}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#0d223d]/80 border border-sky-400/30 text-white hover:text-amber-300 hover:bg-[#102c52] transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={nextLightbox}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#0d223d]/80 border border-sky-400/30 text-white hover:text-amber-300 hover:bg-[#102c52] transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] rounded-2xl overflow-hidden border border-sky-400/40 shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain bg-[#071424]"
              />
            </div>
            
            <div className="text-center mt-4 max-w-xl">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-xl font-bold font-cinzel text-white mt-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
