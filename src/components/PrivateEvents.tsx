"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Sparkles, GlassWater, ShieldCheck, Mail, Phone, CalendarCheck } from "lucide-react";

interface PrivateEventsProps {
  onOpenReservation: () => void;
}

export default function PrivateEvents({ onOpenReservation }: PrivateEventsProps) {
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryGuests, setInquiryGuests] = useState("20");
  const [inquiryType, setInquiryType] = useState("Corporate Dinner");

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  const spaces = [
    {
      title: "The Magnolia Private Alcove",
      capacity: "Up to 16 Guests",
      description: "Intimate enclosed dining alcove featuring handcrafted walnut tables and ambient gold accent lighting.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Gold Lounge & Bar Buyout",
      capacity: "Up to 60 Guests Reception",
      description: "Glamorous cocktail reception space with dedicated master mixologists, DJ sound hookup, and pass-around canapés.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Full Restaurant Buyout",
      capacity: "Up to 140 Seated / 200 Reception",
      description: "Exclusive access to the full dining room, lounge, and sommelier cellar inside Le Méridien Houston Downtown.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="private-events" className="py-24 bg-zutro-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zutro-card border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Celebrations & Executive Dining</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Private Events & <span className="text-gold-gradient font-serif">Group Dining</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-3" />
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto">
            From high-stakes executive dinners to memorable wedding celebrations, host your next signature event in Downtown Houston's most refined setting.
          </p>
        </div>

        {/* Spaces Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {spaces.map((space, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-zutro-card border border-zutro-border hover:border-zutro-border-gold transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zutro-card via-black/20 to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-semibold text-zutro-gold border border-zutro-border-gold">
                  {space.capacity}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold-gradient transition-colors">
                    {space.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                    {space.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-zutro-gold" /> Dedicated Event Captain
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Event Inquiry Card */}
        <div className="rounded-3xl bg-gradient-to-br from-zutro-card via-zinc-900 to-zutro-card border border-zutro-border-gold/60 p-8 sm:p-12 shadow-luxury max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                Plan Your <span className="text-gold-gradient font-serif">Private Event</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Our Private Events Concierge will craft a customized tasting menu, sommelier wine pairing, and seating arrangement tailored to your vision.
              </p>
              <div className="space-y-2 pt-2 text-xs text-zinc-300">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zutro-gold" />
                  Direct: (713) 221-0011 (Ext. Events)
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-zutro-gold" />
                  events@zutrorestaurant.com
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              {inquirySent ? (
                <div className="p-6 rounded-2xl bg-black/60 border border-zutro-gold text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-zutro-gold/20 text-zutro-gold flex items-center justify-center mx-auto">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-white font-bold">Inquiry Received</h4>
                  <p className="text-xs text-zinc-300">
                    Thank you, {inquiryName || "Guest"}! Our Private Dining Coordinator will contact you within 24 hours with custom menu proposals and availability.
                  </p>
                  <button
                    onClick={() => setInquirySent(false)}
                    className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-800 text-zinc-300 hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Katherine Pierce"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="katherine@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Event Type
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-zutro-gold"
                      >
                        <option value="Corporate Dinner">Corporate Dinner</option>
                        <option value="Executive Meeting">Executive Board Dinner</option>
                        <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                        <option value="Cocktail Reception">Cocktail & Canapé Reception</option>
                        <option value="Full Buyout">Full Restaurant Buyout</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Estimated Guest Count
                      </label>
                      <select
                        value={inquiryGuests}
                        onChange={(e) => setInquiryGuests(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-zutro-gold"
                      >
                        <option value="8-15">8 - 15 Guests (Alcove)</option>
                        <option value="16-30">16 - 30 Guests</option>
                        <option value="31-60">31 - 60 Guests (Lounge)</option>
                        <option value="60+">60+ Guests (Full Buyout)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gold-gradient text-zutro-black shadow-gold-glow hover:scale-[1.02] transition-all duration-300 mt-2"
                  >
                    Request Private Event Proposal
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
