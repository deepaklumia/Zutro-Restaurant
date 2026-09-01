"use client";

import React from "react";
import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  Wine,
  UtensilsCrossed
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zutro-950 text-zinc-400 font-sans border-t border-zinc-900 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl sm:text-3xl tracking-widest text-white font-bold uppercase">
                Z U T R O
              </span>
              <span className="text-[10px] tracking-[0.3em] text-zutro-gold font-sans uppercase block -mt-1 font-medium">
                Restaurant & Lounge • Downtown
              </span>
            </Link>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              An elevated American culinary and cocktail destination nestled on the ground floor of Le Méridien Houston Downtown.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zutro-gold hover:border-zutro-gold transition-colors"
                aria-label="Zutro Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zutro-gold hover:border-zutro-gold transition-colors"
                aria-label="Zutro Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zutro-gold hover:border-zutro-gold transition-colors"
                aria-label="Zutro LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Dining Periods */}
          <div className="space-y-3">
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider">
              Dining Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-zutro-gold transition-colors">
                  Artisanal Breakfast (6:30 – 11 AM)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-zutro-gold transition-colors">
                  Executive Lunch (11:30 AM – 2:30 PM)
                </a>
              </li>
              <li>
                <a href="#sparkling-hour" className="text-zutro-gold hover:underline">
                  Sparkling Hour (4 – 7 PM Daily)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-zutro-gold transition-colors">
                  Fine Dining (5:30 – 10 PM)
                </a>
              </li>
              <li>
                <a href="#private-events" className="hover:text-zutro-gold transition-colors">
                  Private Group Buyouts
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider">
              Experience
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-zutro-gold transition-colors">
                  Our Culinary Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-zutro-gold transition-colors">
                  Atmosphere Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-zutro-gold transition-colors">
                  Guest Testimonials
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-zutro-gold transition-colors">
                  Reserve a Table
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-zutro-gold transition-colors">
                  Directions & Valet Parking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-white font-semibold text-sm uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zutro-gold shrink-0 mt-0.5" />
                <span>1121 Walker Street, Houston, TX 77002</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zutro-gold shrink-0" />
                <a href="tel:7132210011" className="hover:text-white">
                  (713) 221-0011
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zutro-gold shrink-0" />
                <a href="mailto:contact@zutrorestaurant.com" className="hover:text-white truncate">
                  contact@zutrorestaurant.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Affiliation */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Zutro Restaurant & Lounge. Located inside Le Méridien Houston Downtown. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Hospitality
            </a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
