import { PageId } from "../types";
import { CORE_VALUES, SERVICES_DATA, COMPANY_CONTACTS } from "../data";
import { ArrowRight, BookOpen, Building, ShieldCheck, Star, Users, CheckCircle, Zap } from "lucide-react";

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  setSelectedCategory?: (catId: string) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const stats = [
    { value: "500+", label: "Businesses Registered", desc: "Formed & structured under PACRA" },
    { value: "200+", label: "Scholarships Secured", desc: "Zambian & international study grants" },
    { value: "K15M+", label: "Capital Raised", desc: "For local agricultural & mining partners" },
    { value: "99.4%", label: "Approval Rating", desc: "Regulatory audit clearances" }
  ];

  const handleServiceClick = (catId: string) => {
    setCurrentPage("services");
    // Soft scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in" id="home-view-container">
      {/* Premium Artistic Hero Section */}
      <section className="relative overflow-hidden bg-corporate-blue py-20 lg:py-28 text-white border-b border-corporate-gold/10">
        {/* Subtle decorative background gradients */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-corporate-gold/25 via-corporate-blue-light to-corporate-blue-dark"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-corporate-gold/5 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          {/* Hero Credentials */}
          <div className="flex-grow max-w-2xl text-center lg:text-left">
            <div className="w-16 h-1 bg-corporate-gold mb-6 mx-auto lg:mx-0"></div>
            
            <div className="inline-flex items-center gap-2 bg-white/5 border border-corporate-gold/30 rounded-full py-1.5 px-4 mb-6 hover:bg-white/10 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-corporate-gold animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-corporate-gold uppercase">
                Zambia's Professional Consultancy Axis
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.15] tracking-tight mb-6">
              Empowering Startups, <br className="hidden sm:inline" />
              Sovereign Compliance & <br />
              <span className="italic text-corporate-gold">Global Scholarships</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Experience flawless corporate registrations, bulletproof tax prep, elite document branding, and certified study abroad pathways. At Rapid, we streamline statutory guidelines to let you win.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setCurrentPage("booking")}
                className="w-full sm:w-auto bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue border border-corporate-gold/50 font-bold px-8 py-4.5 rounded-sm text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Free Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-corporate-blue" />
              </button>
              <button
                onClick={() => setCurrentPage("services")}
                className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4.5 rounded-sm text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-corporate-gold" /> PACRA Registered
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-corporate-gold" /> Certified Accountants
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-corporate-gold" /> International Placement
              </span>
            </div>
          </div>

          {/* Artistic Visual Center (Right Side) */}
          <div className="w-full lg:w-[420px] h-[380px] flex items-center justify-center relative select-none">
            {/* Pulsing ring geometry from the Design HTML */}
            <div className="absolute w-[340px] h-[340px] border border-corporate-gold/10 rounded-full animate-pulse"></div>
            <div className="absolute w-[260px] h-[260px] border border-corporate-gold/20 rounded-full"></div>
            
            {/* Elegant Arched Capsule from the design mockup */}
            <div className="w-[190px] h-[290px] bg-gradient-to-br from-corporate-blue-light to-corporate-blue-dark border border-corporate-gold/40 rounded-t-full shadow-2xl flex flex-col items-center justify-between py-8 px-6 text-center relative z-10 group hover:border-corporate-gold transition-colors duration-500">
              <div className="flex flex-col items-center">
                <div className="px-3 py-1 bg-corporate-gold rounded-sm flex items-center justify-center font-bold text-corporate-blue-dark text-sm mb-4">
                  BRC
                </div>
                <span className="text-corporate-gold text-4xl font-serif italic mb-2 select-all">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years of Excellence</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-corporate-gold/20 w-full">
                <p className="text-[9px] uppercase font-extrabold tracking-widest text-corporate-gold">Zambia & International</p>
                <p className="text-[8px] uppercase tracking-widest mt-1 text-gray-400">Consultancy Axis</p>
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="absolute bottom-6 right-6 z-20 bg-corporate-blue-dark/95 border border-corporate-gold/30 p-3.5 rounded-lg backdrop-blur-md shadow-xl max-w-[160px] hidden sm:block text-left">
              <span className="text-emerald-400 font-bold text-[9px] uppercase tracking-wider block mb-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live Office desk
              </span>
              <p className="text-[10px] text-gray-300 leading-snug">Lusaka advisory team ready to process files.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Scorecard Ribbon - Elegant Dark Slate Banner */}
      <section className="bg-corporate-blue-dark py-12 border-b border-corporate-gold/15 relative z-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left border-l-4 border-corporate-gold pl-5 transition-transform hover:translate-x-1">
                <div className="text-3xl sm:text-4xl font-serif italic font-bold text-white">{stat.value}</div>
                <div className="text-[10px] font-extrabold text-corporate-gold mt-1 uppercase tracking-widest">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Business Pillars Page Quick Link */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Business Solutions</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mt-3">
            Professional Enterprise & <span className="italic text-corporate-gold">Academic Ecosystems</span>
          </h2>
          <p className="text-gray-400 mt-3 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Offering comprehensive statutory pathways, custom corporate documents, and study opportunities locally and abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((cat) => (
            <div
              key={cat.id}
              className="bg-corporate-blue-light/40 border border-corporate-gold/20 p-8 rounded-lg shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative hover:-translate-y-1.5"
            >
              {/* Gold marker line from Design HTML */}
              <div className="absolute top-0 inset-x-8 h-[3px] bg-corporate-gold/20 group-hover:bg-corporate-gold transition-colors"></div>

              <div>
                <div className="w-12 h-12 rounded-sm bg-corporate-gold/10 text-corporate-gold flex items-center justify-center mb-6 group-hover:bg-corporate-gold group-hover:text-corporate-blue transition-all duration-300">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-corporate-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {cat.services.slice(0, 3).map((s) => (
                    <li key={s.id} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-corporate-gold shrink-0"></span>
                      <span>{s.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-corporate-gold/10 flex justify-between items-center">
                <button
                  onClick={() => handleServiceClick(cat.id)}
                  className="text-xs font-bold text-corporate-gold hover:text-white flex items-center gap-1 transition-colors uppercase tracking-widest"
                >
                  Configure Solutions ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zambia Regulatory Compliance Focal Section */}
      <section className="bg-corporate-blue-dark/50 py-20 lg:py-24 border-y border-corporate-gold/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <span className="text-xs text-corporate-gold font-bold uppercase tracking-widest flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-corporate-gold" />
                Zambia Board Verification Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mt-4 leading-normal">
                Stop Regulatory Hassles. <br />
                We Assist With <span className="italic text-corporate-gold">ZRA, PACRA & NHIMA</span>.
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-4 max-w-xl">
                Operating a corporate body in Zambia requires accurate registration and punctual filings. We provide certified consultations and expedite setup requests for PACRA, ZRA, NHIMA, TCZ, EIZ, ZPPA, and NMCZ.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-white">PACRA Company Creation</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">Fast clearance and incorporation certificates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-white">ZRA TPIN & Cleared Status</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">Turnover Tax alignment & VAT setup done right.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-white">National Health (NHIMA)</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">Corporate employer accounts and monthly files.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-white">ZPPA Procurement Supplier Registry</span>
                    <p className="text-[11px] text-gray-400 mt-0.5">Secure authority status to bid on regional state tenders.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => setCurrentPage("compliance")}
                  className="bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue font-bold px-6 py-3 rounded-sm text-xs uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Begin Compliance Audit</span>
                  <ArrowRight className="w-4 h-4 text-corporate-blue" />
                </button>
              </div>
            </div>

            {/* Simulated Compliance Cert Badge Rack (Artistic dark aesthetic card) */}
            <div className="w-full lg:w-96 max-w-sm bg-corporate-blue-light p-6 rounded-lg border border-corporate-gold/20 flex flex-col gap-4 relative">
              <div className="text-[10px] font-bold text-corporate-gold uppercase tracking-widest border-b border-corporate-gold/10 pb-2">
                Regulatory Coverages
              </div>
              <div className="space-y-3.5">
                {["PACRA", "ZRA", "NHIMA", "ZPPA", "TCZ"].map((item, id) => (
                  <div key={id} className="flex items-center justify-between p-2.5 rounded-sm bg-corporate-blue-dark hover:bg-corporate-gold/5 transition-colors border border-corporate-gold/10">
                    <span className="font-bold text-xs text-white tracking-widest">{item}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[9px] uppercase font-bold text-emerald-500 tracking-wider">Active Guide</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center text-[10px] text-gray-400 mt-2">
                "Seeing You Succeeding Is Our Pride" • Active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Releasing Core Corporate Value Proposition */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Company Core</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mt-3">
            Corporate <span className="italic text-corporate-gold">Value Foundations</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Our firm maintains an outstanding path of success inside Zambia, assisting with elite documents, compliance, and academic admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div key={idx} className="bg-corporate-blue-light/40 border border-corporate-gold/15 p-6 rounded-lg hover:border-corporate-gold/40 transition-colors relative">
              <div className="absolute top-4 right-4 text-corporate-gold font-serif italic opacity-15 text-5xl">
                0{idx + 1}
              </div>
              <div className="w-10 h-10 rounded-sm bg-corporate-gold/10 text-corporate-gold flex items-center justify-center mb-4">
                <Zap className="w-4 h-4 text-corporate-gold" />
              </div>
              <h3 className="font-bold text-sm text-white tracking-wide">{val.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-2.5 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promising CTB Band */}
      <section className="bg-gradient-corporate py-16 text-white text-center px-4 relative border-t border-corporate-gold/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-light mb-4 tracking-tight">
            Ready to Accelerate Your <span className="italic text-corporate-gold">Enterprise Objectives</span>?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed mb-8">
            Consult corporate specialists on bookkeeping, company profile structuring, employee payroll configurations, or study abroad applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage("booking")}
              className="w-full sm:w-auto bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue border border-corporate-gold/50 font-bold px-8 py-3.5 rounded-sm text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold px-8 py-3.5 rounded-sm text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              Get Office Address Details
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
