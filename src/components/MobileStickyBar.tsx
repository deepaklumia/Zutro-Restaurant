"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Phone, Utensils } from "lucide-react";

interface MobileStickyBarProps {
  onOpenReservation: () => void;
}

export default function MobileStickyBar({ onOpenReservation }: MobileStickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-zutro-950/95 backdrop-blur-xl border-t border-zutro-border-gold/60 p-3 sm:hidden shadow-2xl transition-transform duration-300">
      <div className="flex items-center gap-2">
        <a
          href="tel:7132210011"
          className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-zutro-gold flex items-center justify-center shrink-0"
          aria-label="Call Zutro"
        >
          <Phone className="w-4 h-4" />
        </a>

        <a
          href="#menu"
          className="px-3 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center shrink-0"
        >
          <Utensils className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={onOpenReservation}
          className="flex-1 py-3 px-4 rounded-full bg-gold-gradient text-zutro-black text-xs font-bold uppercase tracking-[0.15em] shadow-gold-glow flex items-center justify-center gap-2"
        >
          <Calendar className="w-3.5 h-3.5 text-zutro-black" />
          <span>Reserve Table</span>
        </button>
      </div>
    </div>
  );
}
