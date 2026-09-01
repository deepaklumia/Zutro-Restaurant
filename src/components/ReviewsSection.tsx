"use client";

import React from "react";
import { motion } from "framer-motion";
import { REVIEWS_DATA } from "@/data/reviewsData";
import { Star, Sparkles, CheckCircle2, Quote, Award } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-zutro-950 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-zutro-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zutro-card border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Guest Accolades</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Celebrated by <span className="text-gold-gradient font-serif">Our Guests</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-3" />

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-zutro-card/80 border border-zutro-border-gold/50 shadow-gold-glow mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-zutro-gold text-zutro-gold" />
              ))}
            </div>
            <span className="text-white font-serif font-bold text-lg">4.9 / 5.0</span>
            <span className="text-zinc-400 text-xs hidden sm:inline">
              Based on 480+ Google & OpenTable Reviews
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.slice(0, 3).map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-zutro-card/80 border border-zutro-border hover:border-zutro-border-gold transition-all duration-500 hover:shadow-gold-glow flex flex-col justify-between relative group"
            >
              {/* Gold Quote Watermark */}
              <Quote className="w-10 h-10 text-zutro-gold/15 absolute top-6 right-6 pointer-events-none group-hover:text-zutro-gold/30 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-zutro-gold text-zutro-gold" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-white text-sm">
                      {rev.author}
                    </span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-zutro-gold" />
                    )}
                  </div>
                  <span className="text-[11px] text-zinc-400 block font-sans">
                    {rev.source} • {rev.date}
                  </span>
                </div>

                {rev.highlightDish && (
                  <span className="text-[10px] text-zutro-gold-light bg-black/50 px-2 py-1 rounded border border-zinc-800 max-w-[120px] truncate text-right">
                    {rev.highlightDish}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* OpenTable & Google Reviews Trust Badges */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 flex items-center justify-center gap-8 flex-wrap text-zinc-400 text-xs font-sans uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-zutro-gold fill-zutro-gold" />
            OpenTable Diner's Choice 2024
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-zutro-gold fill-zutro-gold" />
            Google Top Rated Downtown Houston
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-zutro-gold fill-zutro-gold" />
            Marriott Bonvoy Dining Partner
          </span>
        </div>
      </div>
    </section>
  );
}
