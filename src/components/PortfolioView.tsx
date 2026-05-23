import { useState } from "react";
import { PORTFOLIO_ITEMS } from "../data";
import { PageId, PortfolioItem } from "../types";
import { LayoutGrid, CheckCircle2, Award, ArrowUpRight, Target } from "lucide-react";

interface PortfolioViewProps {
  setCurrentPage: (page: PageId) => void;
  setBookingCategory?: (cat: string) => void;
}

export default function PortfolioView({ setCurrentPage, setBookingCategory }: PortfolioViewProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", "Company Profiles", "Branding & Identity", "Social Media Design", "Business Documents"];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    return activeTab === "All" || item.category === activeTab;
  });

  const handleInquireProject = (item: PortfolioItem) => {
    if (setBookingCategory) {
      setBookingCategory(`Project custom alignment - ${item.title}`);
    }
    setCurrentPage("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in py-16 px-4" id="portfolio-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Client Deliverables Record</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Our Portfolio & Placements
          </h1>
          <p className="text-gray-300 mt-4 text-xs sm:text-sm leading-relaxed">
            Delivering corporate design solutions. Browse our designed company profiles, corporate branding systems, and business portfolios that have won bids across Zambia.
          </p>
        </div>

        {/* Tab Filter System */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveTab(c)}
              className={`px-4 py-2.5 rounded-sm text-xs font-bold transition-all border cursor-pointer ${
                activeTab === c
                  ? "bg-corporate-gold border-corporate-gold text-corporate-blue-dark font-black"
                  : "bg-corporate-blue-dark border-corporate-gold/15 text-gray-300 hover:bg-corporate-blue-dark/80"
              }`}
            >
              {c === "All" ? "All Deliverables" : c}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-corporate-blue-light border border-corporate-gold/20 p-6 sm:p-8 rounded-sm hover:border-corporate-gold/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Category indicator label */}
              <div className="absolute top-0 right-0 py-1.5 px-4 bg-corporate-blue-dark text-corporate-gold text-[10px] uppercase font-black tracking-widest rounded-bl-sm border-l border-b border-corporate-gold/15">
                {item.category}
              </div>

              <div>
                <span className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider block mb-1">
                  Client Case Study
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-corporate-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-corporate-gold font-bold mt-1">Client: {item.client}</p>

                {/* Simulated visuals card inside to fulfill the portfolio design requirements */}
                <div className="my-6 p-6 rounded-sm bg-corporate-blue-dark/50 border border-dashed border-corporate-gold/15 flex flex-col items-center justify-center text-center relative group-hover:bg-corporate-blue-dark/70 transition-colors">
                  <LayoutGrid className="w-10 h-10 text-corporate-gold/40 group-hover:text-corporate-gold transition-colors mb-3" />
                  <span className="font-extrabold text-xs text-white tracking-wide">{item.imageSource}</span>
                  <span className="text-[10px] text-gray-400 font-medium block mt-1">Custom Digital Asset Designed by Rapid</span>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[9px] uppercase font-bold text-emerald-400">Active Blueprint</span>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Checklist with success details */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-corporate-gold shrink-0" /> Built Core Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                    {item.features.map((ft, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-gray-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-4 border-t border-corporate-gold/10 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-white flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-corporate-gold" /> Guaranteed B2B standards
                </span>
                <button
                  onClick={() => handleInquireProject(item)}
                  className="text-xs font-bold text-corporate-gold hover:text-white flex items-center gap-1 transition-colors"
                >
                  Request Similar Style ➔
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <section className="bg-corporate-blue-light border border-corporate-gold/25 rounded-sm p-6 sm:p-10 text-center max-w-4xl mx-auto shadow-none">
          <h3 className="text-lg sm:text-xl font-extrabold text-corporate-gold mb-2 uppercase tracking-wide">
            Ready to Build Your Tender Document Packet?
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Your corporate documents determine your brand's authority when pitching. Partner with our Lusaka graphic and copywriting teams to draft professional company profiles and branding identities.
          </p>
          <button
            onClick={() => {
              if (setBookingCategory) {
                setBookingCategory("Custom Company Profile or Brand development");
              }
              setCurrentPage("booking");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-6 bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-3 px-6 rounded-sm text-xs uppercase tracking-widest transition-colors cursor-pointer"
          >
            Create My Company Profile Now
          </button>
        </section>
      </div>
    </div>
  );
}
