"use client";

import React, { useState } from "react";
import { Sparkles, Mail, CheckCircle2, Gift } from "lucide-react";

export default function NewsletterVIP() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zutro-black via-zutro-dark to-zutro-950 border-t border-b border-zutro-border/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
          <Gift className="w-3.5 h-3.5" />
          <span>Exclusive Perks</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold tracking-tight mb-3">
          Join the <span className="text-gold-gradient font-serif">Zutro VIP Dining Club</span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-xl mx-auto mb-8">
          Receive invitations to sommelier wine dinners, secret menu releases, and complimentary signature cocktails on your birthday.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/60 border border-zutro-gold text-zutro-gold text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-zutro-gold" />
            <span>Welcome to the Zutro VIP Club! Check your inbox for your welcome perk.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-zinc-950/90 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gold-gradient text-zutro-black shadow-gold-glow hover:scale-105 transition-all shrink-0"
            >
              Join VIP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
