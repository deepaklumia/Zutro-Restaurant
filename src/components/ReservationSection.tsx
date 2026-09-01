"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  User, 
  HeartHandshake,
  Download,
  PartyPopper
} from "lucide-react";
import { ReservationFormData } from "@/types";

export default function ReservationSection() {
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [bookingCode, setBookingCode] = useState("");
  const [formData, setFormData] = useState<ReservationFormData>({
    name: "",
    email: "",
    phone: "",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    time: "19:00",
    guests: 2,
    seatingArea: "main_dining",
    specialOccasion: "none",
    dietaryNotes: "",
  });

  const availableTimeSlots = [
    // Breakfast
    { time: "07:30", label: "7:30 AM (Breakfast)" },
    { time: "09:00", label: "9:00 AM (Breakfast)" },
    // Lunch
    { time: "12:00", label: "12:00 PM (Lunch)" },
    { time: "13:30", label: "1:30 PM (Lunch)" },
    // Sparkling Hour
    { time: "16:30", label: "4:30 PM (Sparkling Hour)" },
    { time: "17:30", label: "5:30 PM (Sparkling Hour)" },
    // Dinner
    { time: "18:30", label: "6:30 PM (Dinner)" },
    { time: "19:00", label: "7:00 PM (Prime Dinner)" },
    { time: "19:30", label: "7:30 PM (Prime Dinner)" },
    { time: "20:30", label: "8:30 PM (Dinner)" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `ZUTRO-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(randomCode);
    setStep("confirmed");

    // Launch celebratory gold confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4A017", "#F5D061", "#FFFFFF", "#E5B842"],
      });
    } catch {
      // ignore in non-browser env
    }
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Zutro Restaurant & Lounge//Table Reservation//EN
BEGIN:VEVENT
SUMMARY:Dining Reservation at Zutro Restaurant & Lounge
DESCRIPTION:Table reservation for ${formData.guests} guests under ${formData.name}. Confirmation Code: ${bookingCode}.
LOCATION:1121 Walker Street, Houston, TX 77002 (Le Méridien Houston Downtown)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Zutro-Reservation-${bookingCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="reservation" className="py-24 bg-zutro-950 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-zutro-gold/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zutro-card border border-zutro-border-gold text-zutro-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight mb-4">
            Reserve Your <span className="text-gold-gradient font-serif">Table</span>
          </h2>
          <div className="gold-divider w-32 mx-auto my-3" />
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Book your dining experience inside Le Méridien Houston Downtown. For parties of 8 or more, please contact our private dining team.
          </p>
        </div>

        {/* Reservation Card */}
        <div className="rounded-3xl bg-zutro-card/90 border border-zutro-border-gold/60 p-6 sm:p-10 shadow-luxury backdrop-blur-xl">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Guests, Date, Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Guests */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-zutro-gold" />
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: parseInt(e.target.value, 10) })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zutro-gold"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-zutro-gold" />
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zutro-gold [color-scheme:dark]"
                  />
                </div>

                {/* Time Slot */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zutro-gold" />
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zutro-gold"
                  >
                    {availableTimeSlots.map((slot) => (
                      <option key={slot.time} value={slot.time}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Seating & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2">
                    Seating Preference
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seatingArea: e.target.value as any,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zutro-gold"
                  >
                    <option value="main_dining">Main Dining Room (Standard)</option>
                    <option value="bar_lounge">The Gold Bar & Cocktail Lounge</option>
                    <option value="chefs_counter">Chef&apos;s Tasting Counter</option>
                    <option value="private_alcove">Intimate Private Alcove</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2">
                    Special Occasion
                  </label>
                  <select
                    value={formData.specialOccasion}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialOccasion: e.target.value as any,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-zutro-gold"
                  >
                    <option value="none">Standard Dining</option>
                    <option value="birthday">Birthday Celebration 🎂</option>
                    <option value="anniversary">Anniversary Romance 🥂</option>
                    <option value="business">Executive Business Meeting 💼</option>
                    <option value="date_night">Date Night ✨</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-zinc-800">
                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-zutro-gold" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-zutro-gold" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-medium block mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-zutro-gold" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(713) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                  />
                </div>
              </div>

              {/* Dietary / Special Notes */}
              <div>
                <label className="text-xs uppercase tracking-wider text-zinc-400 block mb-2">
                  Dietary Preferences or Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Gluten-free guest, quiet booth preference, champagne upon arrival..."
                  value={formData.dietaryNotes}
                  onChange={(e) =>
                    setFormData({ ...formData, dietaryNotes: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-zutro-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zutro-gold"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.25em] bg-gold-gradient text-zutro-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-zutro-black" />
                <span>Confirm Reservation at Zutro</span>
              </button>

              <p className="text-center text-[11px] text-zinc-500">
                Guaranteed booking with zero reservation fee • Free cancellation up to 2 hours prior
              </p>
            </form>
          ) : (
            /* Confirmation Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-gold-gradient text-zutro-black flex items-center justify-center mx-auto shadow-gold-glow">
                <PartyPopper className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-zutro-gold font-semibold block mb-1">
                  Reservation Confirmed
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mb-2">
                  We look forward to welcoming you, {formData.name}!
                </h3>
                <p className="text-sm text-zinc-300 font-light max-w-md mx-auto">
                  A confirmation SMS & email have been sent to <strong>{formData.email}</strong>.
                </p>
              </div>

              {/* Booking Summary Ticket */}
              <div className="p-6 rounded-2xl bg-zutro-950 border border-zutro-border-gold/50 max-w-md mx-auto text-left space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-xs text-zinc-400">Confirmation Code</span>
                  <span className="font-mono font-bold text-zutro-gold text-base tracking-wider">
                    {bookingCode}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Date & Time:</span>
                  <span className="text-white font-medium">
                    {formData.date} at {formData.time}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Party Size:</span>
                  <span className="text-white font-medium">{formData.guests} Guests</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Seating:</span>
                  <span className="text-white capitalize font-medium">
                    {formData.seatingArea.replace("_", " ")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-zutro-gold font-medium">
                    1121 Walker St, Houston (Le Méridien)
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-zutro-gold" />
                  <span>Add to Calendar (.ics)</span>
                </button>
                <button
                  onClick={() => setStep("form")}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
