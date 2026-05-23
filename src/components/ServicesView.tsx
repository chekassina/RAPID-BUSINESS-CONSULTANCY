import { useState } from "react";
import { SERVICES_DATA } from "../data";
import { PageId } from "../types";
import { CheckCircle2, ShieldAlert, BadgeCheck, HelpCircle } from "lucide-react";

interface ServicesViewProps {
  setCurrentPage: (page: PageId) => void;
  setBookingCategory?: (cat: string) => void;
}

export default function ServicesView({ setCurrentPage, setBookingCategory }: ServicesViewProps) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const activeCategory = SERVICES_DATA[activeCategoryIdx];

  const handleBookService = (serviceTitle: string) => {
    if (setBookingCategory) {
      setBookingCategory(serviceTitle);
    }
    setCurrentPage("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in py-16 px-4" id="services-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Our Service Suite</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Professional Enterprise Services
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            We deliver highly targeted, licensed solutions to catalyze growth, secure regulatory compliance under ZRA & PACRA, and structure premium company portfolios.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SERVICES_DATA.map((cat, idx) => {
            const isActive = activeCategoryIdx === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`px-5 py-3 rounded-sm text-xs sm:text-sm font-bold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-corporate-gold text-corporate-blue-dark border-corporate-gold shadow-md"
                    : "bg-corporate-blue-light border-corporate-gold/25 text-gray-300 hover:bg-corporate-blue-light/80"
                }`}
                id={`service-cat-${cat.id}`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Selected Category Presentation */}
        <div className="bg-corporate-blue-light border border-corporate-gold/20 p-6 sm:p-10 rounded-sm">
          {/* Header area of category */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-corporate-gold/20 pb-8 mb-8 gap-4">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold text-corporate-gold uppercase tracking-wider block mb-1">
                Active Pillar
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeCategory.title}
              </h2>
              <p className="text-gray-300 mt-2 text-xs sm:text-sm leading-relaxed">
                {activeCategory.description}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleBookService(activeCategory.title)}
                className="bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black px-5 py-3 rounded-sm text-xs tracking-wide transition-colors cursor-pointer"
              >
                Inquire Category Solutions
              </button>
            </div>
          </div>

          {/* Sub-Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeCategory.services.map((subMsg) => (
              <div
                key={subMsg.id}
                className="bg-corporate-blue-dark/50 hover:bg-corporate-blue-dark border border-corporate-gold/15 hover:border-corporate-gold/30 p-6 rounded-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-corporate-gold/10 text-corporate-gold flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <h3 className="font-extrabold text-md sm:text-lg text-corporate-gold">
                      {subMsg.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mt-3 text-xs sm:text-sm leading-relaxed">
                    {subMsg.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">What's Included:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      {subMsg.bulletPoints.map((bpStr, bId) => (
                        <div key={bId} className="flex items-start gap-1.5 text-xs text-gray-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bpStr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sub Service Booking trigger */}
                <div className="mt-8 pt-4 border-t border-corporate-gold/10 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-corporate-gold" />
                    Guaranteed Turnaround
                  </span>
                  <button
                    onClick={() => handleBookService(`${activeCategory.title} - ${subMsg.title}`)}
                    className="text-xs font-bold text-corporate-gold hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Request Solutions ➔
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized consultation note */}
        <div className="mt-16 bg-gradient-corporate text-white p-6 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-corporate-gold flex items-center gap-1.5">
              <HelpCircle className="w-5 h-5" /> Need a Customized Package Combo?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Are you registering a company under PACRA and need a company profile, logo brand identity, ZRA TPIN alignment, and custom QuickBooks accounts setup all at once? We assemble discounted packages for newly registered cooperatives and businesses.
            </p>
          </div>
          <div>
            <button
              onClick={() => handleBookService("Custom Integrated Package Combo")}
              className="bg-white text-corporate-blue-dark font-extrabold px-6 py-3 rounded-lg text-xs transition-colors hover:bg-gray-100 shrink-0 cursor-pointer"
            >
              Configure Combo Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
