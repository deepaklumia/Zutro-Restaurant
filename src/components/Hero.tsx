"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, UtensilsCrossed, Star, Sparkles, MapPin, Wine, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenReservation: () => void;
}

export default function Hero({ onOpenReservation }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-zutro-950">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Luxury Vignette & Radial Gold Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zutro-black via-black/75 to-black/60" />
        <div className="absolute inset-0 bg-radial-dark opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.1)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-zutro-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-zutro-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        {/* Luxury Affiliation Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-zutro-border-gold backdrop-blur-md mb-6 shadow-gold-glow"
        >
          <Sparkles className="w-3.5 h-3.5 text-zutro-gold" />
          <span className="text-xs uppercase tracking-[0.25em] text-zutro-cream font-medium">
            Inside Le Méridien Houston Downtown
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-xs text-zutro-gold font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-zutro-gold" /> 4.9 Rating
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Experience <span className="text-gold-gradient font-serif">Elevated Dining</span> in Downtown Houston
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light"
        >
          Enjoy exceptional American cuisine, handcrafted cocktails, and unforgettable hospitality in a sophisticated downtown haven.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gold-gradient text-zutro-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
          >
            <Calendar className="w-4 h-4 text-zutro-black transition-transform group-hover:rotate-12" />
            <span>Reserve a Table</span>
          </button>

          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white border border-zutro-border-gold hover:border-zutro-gold bg-zinc-900/60 hover:bg-zinc-800/80 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <UtensilsCrossed className="w-4 h-4 text-zutro-gold" />
            <span>View Menu</span>
          </a>

          <a
            href="#sparkling-hour"
            className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-zutro-gold hover:text-white border border-transparent hover:border-zutro-border bg-black/40 hover:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Wine className="w-4 h-4 text-zutro-gold" />
            <span>Sparkling Hour</span>
          </a>
        </motion.div>

        {/* Feature Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-zinc-800/80"
        >
          <div className="p-3 rounded-xl bg-black/40 border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Location
            </span>
            <span className="text-xs text-zinc-300 flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-400" /> 1121 Walker St, Houston
            </span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Sparkling Hour
            </span>
            <span className="text-xs text-zinc-300">Daily 4 PM – 7 PM</span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Dining Periods
            </span>
            <span className="text-xs text-zinc-300">Breakfast, Lunch & Dinner</span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-zinc-800/60 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Valet & Transit
            </span>
            <span className="text-xs text-zinc-300">Hotel Valet Available</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-zinc-400 hover:text-zutro-gold transition-colors flex flex-col items-center gap-1 group"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] opacity-70 group-hover:opacity-100 font-sans">
          Discover
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-zutro-gold" />
      </a>
    </section>
  );
}
