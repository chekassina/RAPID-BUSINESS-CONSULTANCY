import { useState } from "react";
import { COMPLIANCE_AGENCIES } from "../data";
import { PageId, ComplianceAgency } from "../types";
import { Landmark, ShieldAlert, Award, FileSpreadsheet, FileCheck, CheckCircle2 } from "lucide-react";

interface ComplianceViewProps {
  setCurrentPage: (page: PageId) => void;
  setBookingCategory?: (cat: string) => void;
}

export default function ComplianceView({ setCurrentPage, setBookingCategory }: ComplianceViewProps) {
  const [selectedAgencyId, setSelectedAgencyId] = useState<string>("pacra");

  const activeAgency = COMPLIANCE_AGENCIES.find((a) => a.id === selectedAgencyId) || COMPLIANCE_AGENCIES[0];

  const handleInquiryAction = (agency: ComplianceAgency) => {
    if (setBookingCategory) {
      setBookingCategory(`Zambian Compliance setup - ${agency.name}`);
    }
    setCurrentPage("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in py-16 px-4" id="compliance-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Statutory Accreditations</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Zambia Regulatory & Compliance
          </h1>
          <p className="text-gray-300 mt-4 text-xs sm:text-sm leading-relaxed">
            Operating a business without correct statutory filings triggers severe fines or complete blacklisting. We navigate complex portals to register your firm securely with leading statutory boards.
          </p>
        </div>

        {/* Regulatory Agency Logo Selector Grid - Replicating Reference Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {COMPLIANCE_AGENCIES.map((agency) => {
            const isSelected = agency.id === selectedAgencyId;
            return (
              <button
                key={agency.id}
                onClick={() => setSelectedAgencyId(agency.id)}
                className={`p-4 rounded-sm text-center border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-corporate-gold text-corporate-blue-dark border-corporate-gold shadow-md transform -translate-y-1"
                    : "bg-corporate-blue-light border-corporate-gold/20 text-gray-300 hover:bg-corporate-blue-light/80 hover:border-corporate-gold/40"
                }`}
                id={`compliance-btn-${agency.id}`}
              >
                {/* Simulated Logo Emblem inside selectors to build visual interest */}
                <div className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center font-black text-xs mb-2 transition-colors ${
                  isSelected ? "bg-corporate-blue-dark/20 text-corporate-blue-dark" : "bg-corporate-blue-dark/50 text-corporate-gold"
                }`}>
                  {agency.logoText.slice(0, 3)}
                </div>
                <span className="font-extrabold text-xs block tracking-wide">{agency.name}</span>
                <span className="text-[9px] text-gray-400 font-bold block mt-auto pt-1">Zambia</span>
              </button>
            );
          })}
        </div>

        {/* Active Selected Agency Presentation Sheet */}
        <div className="bg-corporate-blue-light border border-corporate-gold/20 rounded-sm p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-corporate-gold/10 text-corporate-gold font-bold text-[10px] py-1 px-3 rounded-full uppercase tracking-wider mb-2">
                <Landmark className="w-3.5 h-3.5" /> Approved Guidance Track
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                {activeAgency.fullName} ({activeAgency.name})
              </h2>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {activeAgency.description}
            </p>

            <div className="border-t border-corporate-gold/15 pt-6">
              <h3 className="font-extrabold text-sm text-corporate-gold uppercase tracking-wider mb-4">
                What We Coordinate & Manage:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-2">
                {activeAgency.requirements.map((req, rid) => (
                  <div key={rid} className="flex items-start gap-2.5 bg-corporate-blue-dark/30 p-3.5 rounded-sm border border-corporate-gold/10 hover:border-corporate-gold/25 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-300 font-semibold leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance Action Sidebar */}
          <div className="bg-corporate-blue-dark/60 rounded-sm p-6 border border-corporate-gold/15 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" /> Penalties Alert
              </div>
              <div className="text-xs text-gray-300 space-y-2 leading-relaxed">
                <p>
                  Failure to register with <span className="font-bold text-white">{activeAgency.name}</span> or missing annual returns timelines leads to immediate freeze actions and compounding interest.
                </p>
                <p>
                  We coordinate with authority officers to submit compliance folders with minimal wait times.
                </p>
              </div>

              <div className="border-t border-corporate-gold/15 pt-4 space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Authority Type</span>
                  <span className="text-white font-extrabold uppercase">Zambia Statutory</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Processing Time</span>
                  <span className="text-corporate-gold font-bold">2 - 5 Business Days</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Document Filing</span>
                  <span className="text-white font-semibold">100% Handled By Rapid</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-corporate-gold/15 animate-pulse-subtle">
              <button
                onClick={() => handleInquiryAction(activeAgency)}
                className="w-full bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-3 rounded-sm text-xs tracking-wider transition-all cursor-pointer"
              >
                {activeAgency.ctaText}
              </button>
              <button
                onClick={() => {
                  const url = `https://wa.me/260775449792?text=${encodeURIComponent(
                    `Hello! I need compliance assistance for ${activeAgency.name} (${activeAgency.fullName}) in Zambia.`
                  )}`;
                  window.open(url, "_blank");
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 rounded-sm text-xs transition-all flex items-center justify-center gap-2"
              >
                WhatsApp Direct Inquire
              </button>
            </div>
          </div>
        </div>

        {/* Specialized Corporate Document Highlight */}
        <section className="mt-16 bg-corporate-blue-light border border-corporate-gold/15 p-8 rounded-sm shadow-xs">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-corporate-gold font-bold text-xs uppercase tracking-wider mb-2">
                <Award className="w-5 h-5 text-corporate-gold" />
                Specialized Tender Documents Setup
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Want to secure lucrative supply tenders?
              </h3>
              <p className="text-gray-300 mt-2 text-xs sm:text-sm leading-relaxed">
                Many local mining, agricultural, and logistics bids require robust certifications. Rapid Business compiles, notarizes, and bounds your entire bidding document packet including supplier databases registrations (ZPPA), company constitutions, and profiles.
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  if (setBookingCategory) {
                    setBookingCategory("Tender Bidding Document compiles");
                  }
                  setCurrentPage("booking");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-extrabold px-6 py-3.5 rounded-sm text-xs tracking-wide transition-colors shrink-0 cursor-pointer"
              >
                Request Bid Folder Setup
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
