"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  UtensilsCrossed, 
  Star, 
  Sparkles, 
  MapPin, 
  Wine, 
  ChevronDown, 
  Play, 
  Pause,
  Flame,
  Volume2,
  VolumeX
} from "lucide-react";

interface HeroProps {
  onOpenReservation: () => void;
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85",
    caption: "Prime Dry-Aged Ribeye & Truffle Gastronomy",
  },
  {
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=2000&q=85",
    caption: "Balcones Texas Smoked Old Fashioned",
  },
  {
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85",
    caption: "Le Méridien Houston Downtown Dining Room",
  },
];

export default function Hero({ onOpenReservation }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Background Slide Carousel for smooth cinematic Ken Burns transitions
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-zutro-950">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* HTML5 Cinematic Video with Fallback */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transform scale-105 transition-opacity duration-1000 ${
            videoLoaded ? "opacity-75" : "opacity-0"
          }`}
          poster="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85"
        >
          {/* High-speed luxury mixology & restaurant video streams */}
          <source
            src="https://cdn.coverr.co/videos/coverr-pouring-a-drink-in-a-glass-5272/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-bartender-making-a-cocktail-in-a-bar-40244-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ken Burns Multi-Layer Image Fallback & Subtle Crossfade */}
        {!videoLoaded && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1.08, opacity: 0.85 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${HERO_SLIDES[currentSlideIndex].image}')`,
              }}
            />
          </AnimatePresence>
        )}

        {/* Luxury Vignettes & Radial Gold Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zutro-black via-black/70 to-black/55" />
        <div className="absolute inset-0 bg-radial-dark opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.14)_0%,transparent_70%)]" />

        {/* Floating Gold Sparkle Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: `${(i * 9) % 100}vw`,
                y: "100vh",
                opacity: 0,
                scale: Math.random() * 0.8 + 0.4,
              }}
              animate={{
                y: "-10vh",
                opacity: [0, 0.8, 0.4, 0],
                x: `calc(${(i * 9) % 100}vw + ${(i % 2 === 0 ? 30 : -30)}px)`,
              }}
              transition={{
                duration: 9 + (i % 6),
                repeat: Infinity,
                delay: (i * 0.7) % 5,
                ease: "linear",
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-zutro-gold-light to-amber-200 shadow-gold-glow"
            />
          ))}
        </div>
      </div>

      {/* Decorative Ambient Radial Lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-zutro-gold/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-zutro-gold/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-16">
        {/* Top Badges & Live Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 border border-zutro-border-gold backdrop-blur-md mb-6 shadow-gold-glow"
        >
          <Sparkles className="w-3.5 h-3.5 text-zutro-gold animate-spin" />
          <span className="text-xs uppercase tracking-[0.25em] text-zutro-cream font-medium">
            Inside Le Méridien Houston Downtown
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-xs text-zutro-gold font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-zutro-gold" /> 4.9 Rating
          </span>
        </motion.div>

        {/* Main Headline with Animated Gradient Shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl mx-auto"
        >
          Experience <span className="text-gold-gradient font-serif">Elevated Dining</span> in Downtown Houston
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-light drop-shadow-md"
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
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-white border border-zutro-border-gold hover:border-zutro-gold bg-black/60 hover:bg-zinc-800/80 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <UtensilsCrossed className="w-4 h-4 text-zutro-gold" />
            <span>View Menu</span>
          </a>

          <a
            href="#sparkling-hour"
            className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-zutro-gold hover:text-white border border-transparent hover:border-zutro-border bg-black/40 hover:bg-zinc-900/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
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
          <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Location
            </span>
            <span className="text-xs text-zinc-200 flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-400" /> 1121 Walker St, Houston
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Sparkling Hour
            </span>
            <span className="text-xs text-zinc-200">Daily 4 PM – 7 PM</span>
          </div>

          <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Dining Periods
            </span>
            <span className="text-xs text-zinc-200">Breakfast, Lunch & Dinner</span>
          </div>

          <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800/80 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-widest text-zutro-gold block font-semibold mb-0.5">
              Valet & Transit
            </span>
            <span className="text-xs text-zinc-200">Hotel Valet Available</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Video Play/Pause Control (Bottom Right) */}
      <div className="absolute bottom-5 right-5 z-20 hidden sm:flex items-center gap-2">
        <button
          onClick={toggleVideoPlay}
          className="px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 border border-zinc-700 hover:border-zutro-gold text-xs text-zinc-300 hover:text-white backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg"
          aria-label="Toggle Hero Background Motion"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3 h-3 text-zutro-gold" />
              <span className="text-[10px] uppercase tracking-wider">Pause Motion</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-zutro-gold" />
              <span className="text-[10px] uppercase tracking-wider">Play Motion</span>
            </>
          )}
        </button>
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
