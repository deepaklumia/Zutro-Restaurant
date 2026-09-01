"use client";

import React from "react";
import { 
  MapPin, 
  Clock, 
  Car, 
  Train, 
  ExternalLink, 
  Phone, 
  Mail, 
  Sparkles,
  Navigation
} from "lucide-react";

export default function LocationSection() {
  const hours = [
    { period: "Artisanal Breakfast", time: "6:30 AM – 11:00 AM", days: "Daily" },
    { period: "Executive Lunch", time: "11:30 AM – 2:30 PM", days: "Monday – Friday" },
    { period: "Weekend Brunch", time: "11:00 AM – 3:00 PM", days: "Saturday & Sunday" },
    { period: "Sparkling Hour", time: "4:00 PM – 7:00 PM", days: "Daily (Bar & Lounge)" },
    { period: "Dinner & Wine", time: "5:30 PM – 10:00 PM", days: "Sunday – Thursday" },
    { period: "Late Night Dinner", time: "5:30 PM – 11:00 PM", days: "Friday & Saturday" },
  ];

  return (
    <section id="location" className="py-24 bg-zutro-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zutro-card border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Downtown Houston Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Location & <span className="text-gold-gradient font-serif">Hours</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-3" />
          <p className="text-sm sm:text-base text-zinc-400 font-light max-w-2xl mx-auto">
            Located on the ground floor of Le Méridien Houston Downtown, just steps from the theater district, Discovery Green, and Minute Maid Park.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Hours & Directions Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Hours Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zutro-card border border-zutro-border-gold/40 shadow-xl space-y-5">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                <Clock className="w-5 h-5 text-zutro-gold" />
                <h3 className="font-serif text-xl font-bold text-white">
                  Hours of Operation
                </h3>
              </div>

              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="text-white font-medium block">{h.period}</span>
                      <span className="text-[11px] text-zinc-500">{h.days}</span>
                    </div>
                    <span className="text-zutro-gold font-mono font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking & Access Info */}
            <div className="p-6 rounded-3xl bg-zutro-card border border-zutro-border space-y-4">
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-zutro-gold" />
                Valet & Arrival
              </h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Dedicated hotel valet parking is available at the main entrance of <strong>Le Méridien Houston Downtown (1121 Walker St)</strong>. Complimentary validation is provided for dinner guests (up to 3 hours).
              </p>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <Train className="w-4 h-4 text-zutro-gold shrink-0" />
                <span>METRORail: Central Station Main is 1 block away.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Embed & Navigation CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden bg-zutro-card border border-zutro-border-gold/50 shadow-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-zutro-gold font-semibold block">
                  Zutro Restaurant & Lounge
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  1121 Walker Street, Houston, TX 77002
                </h3>
              </div>

              {/* External Navigation Links */}
              <div className="flex items-center gap-2">
                <a
                  href="https://maps.google.com/?q=1121+Walker+Street,+Houston,+TX+77002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-gradient text-zutro-black shadow-gold-glow hover:scale-105 transition-all flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
                <a
                  href="https://maps.apple.com/?address=1121+Walker+St,+Houston,+TX+77002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-700 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-zutro-gold" />
                  <span>Apple Maps</span>
                </a>
              </div>
            </div>

            {/* Custom Google Map Iframe with Dark Mode Filter */}
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border border-zinc-800 shadow-inner">
              <iframe
                title="Zutro Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.6766487920367!2d-95.36601442345512!3d29.758066832085794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf38f1ea2423%3A0xe54d92297eb0ff1e!2sLe%20M%C3%A9ridien%20Houston%20Downtown!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact quick links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 border-t border-zinc-800">
              <a
                href="tel:7132210011"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-zutro-border-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-zutro-gold" />
                <div>
                  <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">
                    Direct Phone
                  </span>
                  <span className="text-xs font-semibold text-white">(713) 221-0011</span>
                </div>
              </a>

              <a
                href="mailto:reservations@zutrorestaurant.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-zutro-border-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-zutro-gold" />
                <div>
                  <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">
                    Concierge Email
                  </span>
                  <span className="text-xs font-semibold text-white truncate">
                    reservations@zutrorestaurant.com
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
