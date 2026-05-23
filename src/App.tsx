/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PageId } from "./types";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import ComplianceView from "./components/ComplianceView";
import ScholarshipsView from "./components/ScholarshipsView";
import BlogView from "./components/BlogView";
import PortfolioView from "./components/PortfolioView";
import TestimonialsView from "./components/TestimonialsView";
import ContactView from "./components/ContactView";
import BookingView from "./components/BookingView";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [bookingCategory, setBookingCategory] = useState<string>("");

  const renderCurrentView = () => {
    switch (currentPage) {
      case "home":
        return <HomeView setCurrentPage={setCurrentPage} />;
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView setCurrentPage={setCurrentPage} setBookingCategory={setBookingCategory} />;
      case "compliance":
        return <ComplianceView setCurrentPage={setCurrentPage} setBookingCategory={setBookingCategory} />;
      case "scholarships":
        return <ScholarshipsView setCurrentPage={setCurrentPage} setBookingCategory={setBookingCategory} />;
      case "blog":
        return <BlogView setCurrentPage={setCurrentPage} setBookingCategory={setBookingCategory} />;
      case "portfolio":
        return <PortfolioView setCurrentPage={setCurrentPage} setBookingCategory={setBookingCategory} />;
      case "testimonials":
        return <TestimonialsView />;
      case "contact":
        return <ContactView setCurrentPage={setCurrentPage} setBookingCategory={setBookingCategory} />;
      case "booking":
        return <BookingView initialCategory={bookingCategory} setBookingCategory={setBookingCategory} />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-corporate-blue-dark text-white relative selection:bg-corporate-gold selection:text-corporate-blue-dark">
      {/* Structural Branded Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area Container with Slide Fade Route Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            id="primary-animated-route-wrapper"
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* High-Impact Brand Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Contextual Support & Trigger Box */}
      <WhatsAppButton />
    </div>
  );
}

