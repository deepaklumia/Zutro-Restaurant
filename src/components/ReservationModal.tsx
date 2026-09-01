"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, Users, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTime?: string;
}

export default function ReservationModal({ isOpen, onClose, initialTime }: ReservationModalProps) {
  const [confirmed, setConfirmed] = useState(false);
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    time: initialTime || "18:30",
    guests: 2,
    seatingArea: "main_dining",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCode = `ZUTRO-${Math.floor(1000 + Math.random() * 9000)}`;
    setCode(newCode);
    setConfirmed(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.5 },
        colors: ["#D4A017", "#F5D061", "#FFFFFF"],
      });
    } catch {}
  };

  const handleClose = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg rounded-3xl bg-zutro-dark border border-zutro-border-gold/60 p-6 sm:p-8 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close Reservation Drawer"
            >
              <X className="w-5 h-5" />
            </button>

            {!confirmed ? (
              <div>
                <div className="text-center mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-zutro-gold font-semibold block mb-1">
                    Instant Table Booking
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Reserve at <span className="text-gold-gradient font-serif">Zutro</span>
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Inside Le Méridien Houston Downtown
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-3 gap-2.5">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: parseInt(e.target.value, 10) })
                        }
                        className="w-full px-2.5 py-2 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-zutro-gold"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-2 py-2 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-zutro-gold [color-scheme:dark]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-2 py-2 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-zutro-gold"
                      >
                        <option value="08:00">8:00 AM (Breakfast)</option>
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="16:30">4:30 PM (Sparkling Hour)</option>
                        <option value="18:30">6:30 PM (Dinner)</option>
                        <option value="19:30">7:30 PM (Dinner)</option>
                        <option value="20:30">8:30 PM (Dinner)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam Hayes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="liam@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(713) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 block mb-1">
                      Seating Preference
                    </label>
                    <select
                      value={formData.seatingArea}
                      onChange={(e) =>
                        setFormData({ ...formData, seatingArea: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-zutro-950 border border-zinc-800 text-xs text-white focus:outline-none focus:border-zutro-gold"
                    >
                      <option value="main_dining">Main Dining Room</option>
                      <option value="bar_lounge">The Gold Bar & Lounge</option>
                      <option value="chefs_counter">Chef&apos;s Tasting Counter</option>
                      <option value="private_alcove">Private Alcove</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-gold-gradient text-zutro-black shadow-gold-glow hover:scale-[1.02] transition-all duration-300 mt-2"
                  >
                    Confirm Table Reservation
                  </button>
                </form>
              </div>
            ) : (
              /* Success confirmation */
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 rounded-full bg-gold-gradient text-black flex items-center justify-center mx-auto shadow-gold-glow">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Reservation Confirmed!
                </h3>
                <p className="text-xs text-zinc-300">
                  Thank you, <strong>{formData.name}</strong>. Your table for <strong>{formData.guests} guests</strong> is booked for <strong>{formData.date} at {formData.time}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-zutro-950 border border-zutro-border-gold/50 text-center">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-0.5">
                    Confirmation Code
                  </span>
                  <span className="font-mono text-lg font-bold text-zutro-gold">{code}</span>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
