"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Utensils, Wine, Clock, Award, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Utensils,
      title: "Simple Yet Refined American Cuisine",
      description:
        "Classic American culinary traditions reimagined with seasonal Texas ingredients and modern culinary precision.",
    },
    {
      icon: Wine,
      title: "Handcrafted Mixology & Wine Cellar",
      description:
        "Curated artisanal spirits, vintage champagne flutes, and signature smoked infusions crafted by master mixologists.",
    },
    {
      icon: Clock,
      title: "European Sparkling Hour Tradition",
      description:
        "Daily from 4 PM to 7 PM, celebrate the European golden hour with effervescent cocktails and gourmet small plates.",
    },
    {
      icon: Award,
      title: "Unrivaled Downtown Hospitality",
      description:
        "Hospitality benchmarked against world-class luxury standards inside Le Méridien Houston Downtown.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-zutro-black relative overflow-hidden">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-zutro-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zutro-card border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Heritage & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight">
              Welcome to <span className="text-gold-gradient font-serif">Zutro</span>
            </h2>

            <div className="gold-divider-left w-24 my-4" />

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              Nestled inside <strong>Le Méridien Houston Downtown</strong>, Zutro Restaurant & Lounge offers a refined dining experience featuring modern American cuisine, handcrafted cocktails, and exceptional service in a sophisticated atmosphere.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
              Whether you are beginning your morning with our artisanal breakfast, closing a pivotal business deal over lunch, unwinding with friends during our signature <em>Sparkling Hour</em>, or indulging in an exquisite dry-aged ribeye dinner, Zutro is your downtown sanctuary for memorable moments.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zutro-card/80 border border-zutro-border hover:border-zutro-border-gold transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-zutro-950 border border-zutro-border-gold/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-zutro-gold" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-zutro-gold-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Visual Composition with Dual Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zutro-border-gold/50 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Zutro Dining Room Atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold">
                      Le Méridien Houston Downtown
                    </span>
                    <span className="text-sm font-serif text-white font-medium">
                      1121 Walker Street, Texas
                    </span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-zutro-gold" />
                </div>
              </div>

              {/* Overlapping Floating Small Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-52 h-52 rounded-xl overflow-hidden border-2 border-zutro-gold shadow-gold-glow-lg z-20">
                <Image
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
                  alt="Craft Cocktail at Zutro"
                  fill
                  sizes="200px"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-black/70 text-[10px] text-center font-sans uppercase tracking-widest text-zutro-gold-light">
                  Handcrafted Spirits
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
