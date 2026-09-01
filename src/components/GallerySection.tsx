"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/data/galleryData";
import { GalleryItem } from "@/types";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Moments" },
    { id: "interior", label: "Restaurant Interior" },
    { id: "dishes", label: "Signature Dishes" },
    { id: "cocktails", label: "Craft Cocktails" },
    { id: "lounge", label: "Lounge Atmosphere" },
  ];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    selectedFilter === "all" ? true : item.category === selectedFilter
  );

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    if (idx !== -1) setActiveLightboxIndex(idx);
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % GALLERY_ITEMS.length));
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="py-24 bg-zutro-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zutro-card border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Journey</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Atmosphere & <span className="text-gold-gradient font-serif">Aesthetics</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-3" />
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto">
            Step inside our glamorous dining room, private alcoves, and radiant cocktail lounge nestled in Le Méridien Houston Downtown.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                selectedFilter === f.id
                  ? "bg-zutro-gold text-black font-semibold shadow-gold-glow"
                  : "bg-zutro-card text-zinc-400 hover:text-white border border-zutro-border"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[280px]"
        >
          <AnimatePresence>
            {filteredGallery.map((item, index) => {
              // Create dynamic span sizing for masonry effect
              const isLarge = index === 0 || index === 4;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleOpenLightbox(item)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-zutro-border hover:border-zutro-border-gold transition-all duration-500 hover:shadow-gold-glow ${
                    isLarge ? "sm:col-span-2 sm:row-span-2" : "col-span-1 row-span-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Hover Details Overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-end">
                      <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-zutro-gold border border-white/10">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-zutro-gold font-semibold block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-300 font-light line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-colors z-50 border border-zinc-700"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-colors z-50 border border-zinc-700"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white transition-colors z-50 border border-zinc-700"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Content */}
            <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-xl overflow-hidden border border-zutro-border-gold/40 shadow-2xl">
                <Image
                  src={GALLERY_ITEMS[activeLightboxIndex].image}
                  alt={GALLERY_ITEMS[activeLightboxIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4 max-w-xl">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-1">
                  {GALLERY_ITEMS[activeLightboxIndex].title}
                </h3>
                <p className="text-sm text-zinc-300 font-light">
                  {GALLERY_ITEMS[activeLightboxIndex].caption}
                </p>
                <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mt-2">
                  Photo {activeLightboxIndex + 1} of {GALLERY_ITEMS.length} • Zutro Restaurant & Lounge
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
