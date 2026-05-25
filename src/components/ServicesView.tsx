import { useState } from "react";
import { SERVICES_DATA } from "../data";
import { PageId } from "../types";
import {
  CheckCircle2,
  BadgeCheck,
  HelpCircle,
} from "lucide-react";

interface ServicesViewProps {
  setCurrentPage: (page: PageId) => void;
  setBookingCategory?: (cat: string) => void;
}

export default function ServicesView({
  setCurrentPage,
  setBookingCategory,
}: ServicesViewProps) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const activeCategory = SERVICES_DATA[activeCategoryIdx];

  const handleBookService = (serviceTitle: string) => {
    if (setBookingCategory) {
      setBookingCategory(serviceTitle);
    }

    setCurrentPage("booking");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="animate-fade-in py-16 px-4 bg-corporate-blue-dark min-h-screen"
      id="services-view-container"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-[4px]">
            Our Service Suite
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
            Professional Enterprise Services
          </h1>

          <p className="text-gray-300 mt-5 text-sm sm:text-base leading-relaxed">
            We deliver highly targeted business solutions to catalyze growth,
            secure regulatory compliance under ZRA, PACRA, Zambia Public
            Procurement Authority (ZPPA), Nursing and Midwifery Council of
            Zambia (NMCZ), Zambia Institute of Human Resource Management
            (ZIHRM), Zambia Institute of Marketing (ZIM), and other statutory
            authorities.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SERVICES_DATA.map((cat, idx) => {
            const isActive = activeCategoryIdx === idx;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`px-5 py-3 rounded-md text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-corporate-gold text-corporate-blue-dark border-corporate-gold shadow-lg"
                    : "bg-corporate-blue-light border-corporate-gold/20 text-gray-300 hover:bg-corporate-blue-light/70"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* ACTIVE CATEGORY */}
        <div className="bg-corporate-blue-light border border-corporate-gold/20 p-6 sm:p-10 rounded-2xl shadow-xl">

          {/* CATEGORY HEADER */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-corporate-gold/20 pb-8 mb-8 gap-6">

            <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-corporate-gold uppercase tracking-wider block mb-2">
                Active Service Category
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                {activeCategory.title}
              </h2>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {activeCategory.description}
              </p>
            </div>

            <button
              onClick={() => handleBookService(activeCategory.title)}
              className="bg-corporate-gold hover:bg-yellow-400 text-corporate-blue-dark font-black px-6 py-4 rounded-lg text-xs tracking-wide transition-all duration-300 cursor-pointer"
            >
              Inquire Category Solutions
            </button>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeCategory.services.map((service) => (
              <div
                key={service.id}
                className="bg-corporate-blue-dark/60 hover:bg-corporate-blue-dark border border-corporate-gold/10 hover:border-corporate-gold/30 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>

                  {/* SERVICE HEADER */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-corporate-gold/10 text-corporate-gold flex items-center justify-center text-lg font-bold">
                      ✓
                    </div>

                    <h3 className="font-extrabold text-lg sm:text-xl text-corporate-gold">
                      {service.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* INCLUDED ITEMS */}
                  <div className="mt-6">
                    <span className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                      What's Included
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                      {service.bulletPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FOOTER */}
                <div className="mt-8 pt-5 border-t border-corporate-gold/10 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-corporate-gold" />
                    Guaranteed Turnaround
                  </span>

                  <button
                    onClick={() =>
                      handleBookService(
                        `${activeCategory.title} - ${service.title}`
                      )
                    }
                    className="text-xs font-bold text-corporate-gold hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Request Solutions →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CUSTOM PACKAGE SECTION */}
        <div className="mt-16 bg-gradient-to-r from-corporate-blue-light to-corporate-blue-dark border border-corporate-gold/20 text-white p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>

          <div className="max-w-3xl relative z-10">

            <h3 className="text-xl sm:text-2xl font-bold text-corporate-gold flex items-center gap-2">
              <HelpCircle className="w-6 h-6" />
              Need a Customized Package Combo?
            </h3>

            <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
              Are you registering a company or cooperative and need company
              registration, ZRA TPIN setup, company profile designing,
              constitution writing, branding, HR documentation, accounting
              setup, marketing support, ZPPA registration, NMCZ licensing,
              ZIHRM compliance, ZIM registration, or license platform
              applications all at once?
            </p>

            {/* LICENSE PLATFORM SERVICES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
              {[
                "Business License Applications",
                "Trading License Processing",
                "ZPPA Supplier Registration",
                "NMCZ Licensing Assistance",
                "ZIHRM Professional Registration",
                "ZIM Membership & Licensing",
                "PACRA Annual Returns Filing",
                "General Statutory Compliance Renewals",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 bg-corporate-blue-dark/40 border border-corporate-gold/10 rounded-xl p-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

                  <span className="text-sm text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-gray-300 mt-6 leading-relaxed">
              We provide discounted integrated service packages tailored for
              startups, cooperatives, NGOs, contractors, clinics,
              educational institutions, and growing businesses.
            </p>
          </div>

          <div className="relative z-10">
            <button
              onClick={() =>
                handleBookService("Custom Integrated Package Combo")
              }
              className="bg-white text-corporate-blue-dark font-extrabold px-8 py-4 rounded-xl text-sm transition-all duration-300 hover:bg-gray-100 cursor-pointer"
            >
              Configure Combo Package
            </button>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-16 bg-corporate-blue-light border border-corporate-gold/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-corporate-gold mb-6">
            Contact Us
          </h3>

          <div className="flex flex-col gap-4 text-sm">

            <a
              href="tel:+260775449792"
              className="text-white hover:text-corporate-gold transition-colors"
            >
              Direct Calls: +260 775 449 792
            </a>

            <a
              href="https://wa.me/260963910639"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors"
            >
              WhatsApp Business: +260 963 910 639
            </a>

            <a
              href="mailto:rapidbusinessconsultancy83@gmail.com"
              className="text-white hover:text-corporate-gold transition-colors"
            >
              rapidbusinessconsultancy83@gmail.com
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}