"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu as MenuIcon, 
  X, 
  Sparkles, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock,
  Wine
} from "lucide-react";

interface NavbarProps {
  onOpenReservation: (initialCategory?: string) => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentMealPeriod, setCurrentMealPeriod] = useState("Open Today");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Calculate current meal status based on Houston local time
    const checkMealPeriod = () => {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 6 && hour < 11) {
        setCurrentMealPeriod("Serving Breakfast");
      } else if (hour >= 11 && hour < 15) {
        setCurrentMealPeriod("Serving Lunch");
      } else if (hour >= 16 && hour < 19) {
        setCurrentMealPeriod("Sparkling Hour (4–7 PM)");
      } else if (hour >= 17 && hour < 22) {
        setCurrentMealPeriod("Serving Dinner");
      } else {
        setCurrentMealPeriod("Lounge & Bar Open");
      }
    };

    checkMealPeriod();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Story", href: "#about" },
    { label: "Menus", href: "#menu" },
    { label: "Sparkling Hour", href: "#sparkling-hour", highlight: true },
    { label: "Gallery", href: "#gallery" },
    { label: "Private Dining", href: "#private-events" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-zutro-950/90 text-xs border-b border-zutro-border/60 py-1.5 px-4 text-center text-zutro-muted font-sans flex items-center justify-between z-50 relative">
        <div className="hidden md:flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-zutro-gold">
            <MapPin className="w-3.5 h-3.5" />
            1121 Walker Street, Houston, TX (Inside Le Méridien)
          </span>
          <span className="text-zinc-600">|</span>
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-zutro-gold" />
            {currentMealPeriod}
          </span>
        </div>
        <div className="mx-auto md:mx-0 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-200">
            Sparkling Hour Daily <strong className="text-zutro-gold-light">4:00 PM – 7:00 PM</strong>
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:7132210011"
            className="text-zinc-400 hover:text-zutro-gold transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-zutro-gold" />
            (713) 221-0011
          </a>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-zutro-950/95 backdrop-blur-md shadow-luxury border-b border-zutro-border/80 py-3.5"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col items-start">
            <span className="font-serif text-2xl sm:text-3xl tracking-widest text-white font-bold group-hover:text-gold-gradient transition-all duration-300 uppercase">
              Z U T R O
            </span>
            <span className="text-[10px] tracking-[0.3em] text-zutro-gold font-sans uppercase -mt-1 font-medium">
              Restaurant & Lounge • Downtown
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors duration-200 relative py-1 text-sm ${
                  link.highlight
                    ? "text-zutro-gold hover:text-zutro-gold-light font-semibold flex items-center gap-1.5"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 animate-pulse text-zutro-gold" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#menu"
              className="px-4 py-2 text-xs uppercase tracking-widest text-zinc-300 hover:text-white border border-zutro-border hover:border-zutro-gold/60 rounded-full transition-all duration-300 bg-zinc-900/50 backdrop-blur-sm"
            >
              View Menu
            </a>
            <button
              onClick={() => onOpenReservation()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-gradient text-zutro-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-zutro-black" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenReservation()}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-gold-gradient text-zutro-black"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[96px] z-30 bg-zutro-950/98 backdrop-blur-xl border-b border-zutro-border p-6 shadow-2xl xl:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-serif py-2 border-b border-zinc-900 flex items-center justify-center gap-2 ${
                    link.highlight ? "text-zutro-gold font-bold" : "text-zinc-200"
                  }`}
                >
                  {link.highlight && <Wine className="w-4 h-4 text-zutro-gold" />}
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gold-gradient text-black shadow-gold-glow"
                >
                  Reserve Table Now
                </button>
                <a
                  href="tel:7132210011"
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-zinc-300 border border-zutro-border flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-zutro-gold" />
                  Call (713) 221-0011
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
