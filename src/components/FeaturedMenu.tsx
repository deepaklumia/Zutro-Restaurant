"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS } from "@/data/menuData";
import { MenuItem, MealCategory } from "@/types";
import { 
  Sparkles, 
  Search, 
  Wine, 
  Utensils, 
  Coffee, 
  Sun, 
  Moon, 
  Flame, 
  Calendar,
  Download,
  Info
} from "lucide-react";

interface FeaturedMenuProps {
  onOpenReservation: () => void;
}

export default function FeaturedMenu({ onOpenReservation }: FeaturedMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<MealCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDietary, setSelectedDietary] = useState<string>("all");
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const categories: { id: MealCategory; label: string; icon: any }[] = [
    { id: "all", label: "Full Collection", icon: Utensils },
    { id: "breakfast", label: "Breakfast", icon: Coffee },
    { id: "lunch", label: "Lunch", icon: Sun },
    { id: "dinner", label: "Dinner", icon: Moon },
    { id: "cocktails", label: "Craft Cocktails", icon: Wine },
    { id: "desserts", label: "Desserts", icon: Flame },
  ];

  const dietaryOptions = ["all", "GF", "V", "Signature", "Texas Sourced"];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDietary =
        selectedDietary === "all" ||
        item.tags?.some((t) => t.toLowerCase().includes(selectedDietary.toLowerCase()));

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, selectedDietary]);

  return (
    <section id="menu" className="py-24 bg-zutro-950 relative">
      {/* Subtle Background Radial Gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-zutro-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-zutro-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zutro-card border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Masterpieces</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Featured <span className="text-gold-gradient font-serif">Menus</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-3" />
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto">
            From energizing artisanal breakfast dishes to Texas dry-aged prime steaks and handcrafted cocktails, discover our complete culinary repertoire.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? "bg-gold-gradient text-zutro-black font-bold shadow-gold-glow scale-105"
                    : "bg-zutro-card text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zutro-border"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-zutro-black" : "text-zutro-gold"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 max-w-4xl mx-auto p-4 rounded-2xl bg-zutro-card/70 border border-zutro-border backdrop-blur-md">
          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zutro-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold transition-colors"
            />
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center w-full sm:w-auto">
            <span className="text-xs text-zinc-400 mr-2 hidden md:inline">Dietary:</span>
            {dietaryOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedDietary(opt)}
                className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                  selectedDietary === opt
                    ? "bg-zutro-gold text-black font-semibold"
                    : "bg-zutro-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800"
                }`}
              >
                {opt === "all" ? "All Diets" : opt}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl overflow-hidden bg-zutro-card border border-zutro-border hover:border-zutro-border-gold transition-all duration-500 hover:shadow-gold-glow flex flex-col justify-between"
              >
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zutro-card via-transparent to-black/30" />

                  {/* Price Tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zutro-border-gold shadow-md">
                    <span className="font-serif font-bold text-zutro-gold text-sm">
                      {item.price}
                    </span>
                  </div>

                  {/* Tag Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[70%]">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-zutro-black/80 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-zutro-cream border border-zinc-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-gradient transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Pairing & Details Footer */}
                  <div className="pt-4 border-t border-zinc-800/80 mt-2">
                    {item.pairing && (
                      <div className="flex items-center gap-1.5 text-xs text-zutro-gold-light mb-3">
                        <Wine className="w-3.5 h-3.5 text-zutro-gold shrink-0" />
                        <span className="italic truncate">Pair with: {item.pairing}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-zinc-500">
                        {item.calories || "Chef Prepared"}
                      </span>
                      <button
                        onClick={onOpenReservation}
                        className="text-xs font-semibold uppercase tracking-wider text-zutro-gold hover:text-white transition-colors flex items-center gap-1"
                      >
                        Reserve Table &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-zutro-card/40 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 font-serif text-lg">No dishes found matching your selection.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setSelectedDietary("all");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-zutro-gold text-black text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Menu Actions */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenReservation}
            className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gold-gradient text-zutro-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Dining Experience</span>
          </button>
          <a
            href="#sparkling-hour"
            className="px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300 hover:text-white border border-zutro-border hover:border-zutro-gold/60 bg-zutro-card/60 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-zutro-gold" />
            <span>View Sparkling Hour Specials</span>
          </a>
        </div>
      </div>
    </section>
  );
}
