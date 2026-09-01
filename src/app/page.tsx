"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedMenu from "@/components/FeaturedMenu";
import SparklingHour from "@/components/SparklingHour";
import GallerySection from "@/components/GallerySection";
import PrivateEvents from "@/components/PrivateEvents";
import ReviewsSection from "@/components/ReviewsSection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import NewsletterVIP from "@/components/NewsletterVIP";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import ReservationModal from "@/components/ReservationModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-zutro-black text-zutro-cream selection:bg-zutro-gold selection:text-black">
      {/* Top Header & Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Cinematic Hero */}
      <Hero onOpenReservation={handleOpenReservation} />

      {/* Story & Philosophy */}
      <AboutSection />

      {/* Interactive Menu Experience */}
      <FeaturedMenu onOpenReservation={handleOpenReservation} />

      {/* Le Méridien Sparkling Hour Highlight (4 - 7 PM) */}
      <SparklingHour onOpenReservation={handleOpenReservation} />

      {/* Masonry Atmosphere Gallery */}
      <GallerySection />

      {/* Private Dining & Events */}
      <PrivateEvents onOpenReservation={handleOpenReservation} />

      {/* 5-Star Reviews & Accolades */}
      <ReviewsSection />

      {/* Reservation Engine */}
      <ReservationSection />

      {/* Location, Google Map, Valet & Hours */}
      <LocationSection />

      {/* VIP Dining Club Perk */}
      <NewsletterVIP />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Sticky Reservation Bar */}
      <MobileStickyBar onOpenReservation={handleOpenReservation} />

      {/* Global Quick Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={handleCloseReservation}
      />
    </main>
  );
}
