"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Wine, Clock, GlassWater, Flame, Calendar, ArrowRight } from "lucide-react";

interface SparklingHourProps {
  onOpenReservation: () => void;
}

export default function SparklingHour({ onOpenReservation }: SparklingHourProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    isActive: boolean;
  }>({ hours: 0, minutes: 0, seconds: 0, isActive: false });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMin = now.getMinutes();
      const currentSec = now.getSeconds();

      // Sparkling hour is 4:00 PM (16:00) to 7:00 PM (19:00)
      const isCurrentlyActive = currentHour >= 16 && currentHour < 19;

      if (isCurrentlyActive) {
        // Time remaining until 19:00:00
        const endHour = 19;
        const totalRemainingSec = (endHour * 3600) - (currentHour * 3600 + currentMin * 60 + currentSec);
        const hours = Math.floor(totalRemainingSec / 3600);
        const minutes = Math.floor((totalRemainingSec % 3600) / 60);
        const seconds = totalRemainingSec % 60;
        setTimeLeft({ hours, minutes, seconds, isActive: true });
      } else {
        // Time remaining until next 16:00:00
        let target = new Date(now);
        if (currentHour >= 19) {
          // Next day 16:00
          target.setDate(target.getDate() + 1);
        }
        target.setHours(16, 0, 0, 0);

        const diffMs = target.getTime() - now.getTime();
        const diffSec = Math.max(0, Math.floor(diffMs / 1000));
        const hours = Math.floor(diffSec / 3600);
        const minutes = Math.floor((diffSec % 3600) / 60);
        const seconds = diffSec % 60;
        setTimeLeft({ hours, minutes, seconds, isActive: false });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const sparklingSpecials = [
    {
      title: "$12 Signature Cocktails",
      description: "Texas Smoked Old Fashioned, Midnight Espresso Martini & Downtown Mezcalita.",
      icon: Wine,
    },
    {
      title: "$9 Curated Bubbles & Wine",
      description: "Chandon Brut, Prosecco Superiore, Sonoma Chardonnay & Alexander Valley Cabernet.",
      icon: GlassWater,
    },
    {
      title: "$10 Chef-Selected Bites",
      description: "Truffle Parmesan Pomme Frites, Fresh Gulf Oysters, and Crispy Pork Belly Sliders.",
      icon: Flame,
    },
  ];

  return (
    <section id="sparkling-hour" className="py-24 bg-zutro-black relative overflow-hidden">
      {/* Ambient Gold Radial Glows */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-zutro-gold/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-zutro-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-zutro-card via-zutro-dark to-zutro-card/80 border border-zutro-border-gold/60 p-8 sm:p-12 lg:p-16 shadow-luxury relative overflow-hidden">
          {/* Subtle Champagne bubble effect background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge & Timing */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Le Méridien Tradition</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-medium text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-zutro-gold" />
                  Daily 4:00 PM – 7:00 PM
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight">
                Sparkling <span className="text-gold-gradient font-serif">Hour</span>
              </h2>

              {/* Content description */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
                Join us daily from <strong>4 PM – 7 PM</strong> for handcrafted cocktails, sommelier wine specials, and chef-selected appetizers.
              </p>

              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                Inspired by the European tradition of the aperitif, Sparkling Hour invites you to pause, savor, and toast to the evening in the heart of Downtown Houston.
              </p>

              {/* Live Countdown Clock / Active Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-zutro-border-gold/40 backdrop-blur-md">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold block">
                      {timeLeft.isActive ? "✨ Sparkling Hour is Active Right Now!" : "Countdown to Next Sparkling Hour"}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {timeLeft.isActive ? "Ends at 7:00 PM CST" : "Begins at 4:00 PM CST Daily"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-zutro-gold">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-500">Hours</span>
                    </div>
                    <span className="text-zinc-600 font-bold text-lg">:</span>
                    <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-zutro-gold">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-500">Mins</span>
                    </div>
                    <span className="text-zinc-600 font-bold text-lg">:</span>
                    <div className="flex flex-col items-center px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-zutro-gold animate-pulse">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-500">Secs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {sparklingSpecials.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zutro-border-gold transition-all"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-zutro-gold" />
                        <h4 className="text-xs font-bold text-white">{spec.title}</h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">{spec.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={onOpenReservation}
                  className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gold-gradient text-zutro-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <Wine className="w-4 h-4" />
                  <span>Reserve Your Evening</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zutro-border-gold/60 shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=1000&q=80"
                  alt="Zutro Sparkling Cocktail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-center">
                  <span className="font-serif text-base text-white font-bold block mb-0.5">
                    Zutro Signature Sparkling Cocktail
                  </span>
                  <span className="text-xs text-zutro-gold font-medium">
                    Veuve Clicquot • St-Germain Elderflower • 24K Gold Shimmer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
