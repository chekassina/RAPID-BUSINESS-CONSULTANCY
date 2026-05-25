import { PageId } from "../types";
import { CORE_VALUES, SERVICES_DATA } from "../data";
import {
  ArrowRight,
  Building,
  ShieldCheck,
  CheckCircle,
  Zap,
} from "lucide-react";
import Logo from "./Logo";

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  setSelectedCategory?: (catId: string) => void;
}

export default function HomeView({
  setCurrentPage,
}: HomeViewProps) {
  const stats = [
    {
      value: "500+",
      label: "Businesses Registered",
      desc: "Formed & structured under PACRA",
    },
    {
      value: "200+",
      label: "Scholarships Secured",
      desc: "Zambian & international study grants",
    },
    {
      value: "K15M+",
      label: "Capital Raised",
      desc: "For local agricultural & mining partners",
    },
    {
      value: "99.4%",
      label: "Approval Rating",
      desc: "Regulatory audit clearances",
    },
  ];

  const handleServiceClick = (catId: string) => {
    setCurrentPage("services");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="animate-fade-in" id="home-view-container">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-corporate-blue py-20 lg:py-28 text-white border-b border-corporate-gold/10">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-corporate-gold/25 via-corporate-blue-light to-corporate-blue-dark"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-corporate-gold/5 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          {/* LEFT CONTENT */}
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
              <span className="italic text-corporate-gold">
                Global Scholarships
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Experience flawless corporate registrations, bulletproof tax prep,
              elite document branding, and certified study abroad pathways.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => setCurrentPage("booking")}
                className="w-full sm:w-auto bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue font-bold px-8 py-4 rounded-sm text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Free Appointment
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage("services")}
                className="w-full sm:w-auto bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold px-8 py-4 rounded-sm text-xs uppercase tracking-widest transition-all"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full lg:w-[420px] h-[380px] flex items-center justify-center relative">
            <div className="absolute w-[340px] h-[340px] border border-corporate-gold/10 rounded-full animate-pulse"></div>

            <div className="absolute w-[260px] h-[260px] border border-corporate-gold/20 rounded-full"></div>

            <div className="w-[190px] h-[290px] bg-gradient-to-br from-corporate-blue-light to-corporate-blue-dark border border-corporate-gold/40 rounded-t-full shadow-2xl flex flex-col items-center justify-between py-8 px-6 text-center relative z-10">
              <div className="flex flex-col items-center">
                <Logo
                  size={56}
                  className="mb-4 shadow-xl border border-corporate-gold/40 rounded-full"
                />

                <span className="text-corporate-gold text-4xl font-serif italic mb-2">
                  15+
                </span>

                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Years of Excellence
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-corporate-gold/20 w-full">
                <p className="text-[9px] uppercase font-extrabold tracking-widest text-corporate-gold">
                  Zambia & International
                </p>

                <p className="text-[8px] uppercase tracking-widest mt-1 text-gray-400">
                  Consultancy Axis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-corporate-blue-dark py-12 border-b border-corporate-gold/15">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center md:text-left border-l-4 border-corporate-gold pl-5"
              >
                <div className="text-3xl sm:text-4xl font-serif italic font-bold text-white">
                  {stat.value}
                </div>

                <div className="text-[10px] font-extrabold text-corporate-gold mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>

                <div className="text-xs text-gray-400 mt-1">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS SOLUTIONS */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">
            Business Solutions
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mt-3">
            Professional Enterprise &{" "}
            <span className="italic text-corporate-gold">
              Academic Ecosystems
            </span>
          </h2>

          <p className="text-gray-400 mt-3 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Offering comprehensive statutory pathways, custom corporate
            documents, and study opportunities locally and abroad.
          </p>
        </div>

        {/* IMAGES 1-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((cat, index) => (
            <div
              key={cat.id}
              className="bg-corporate-blue-light/40 border border-corporate-gold/20 rounded-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`/image/${index + 1}.jpg`}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue-dark/90 via-transparent to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="w-12 h-12 rounded-sm bg-corporate-gold/10 text-corporate-gold flex items-center justify-center mb-6">
                  <Building className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {cat.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {cat.services.slice(0, 3).map((s) => (
                    <li
                      key={s.id}
                      className="text-xs text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-corporate-gold"></span>

                      {s.title}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4 border-t border-corporate-gold/10">
                  <button
                    onClick={() => handleServiceClick(cat.id)}
                    className="text-xs font-bold text-corporate-gold hover:text-white transition-colors uppercase tracking-widest"
                  >
                    Configure Solutions ➔
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
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
                We Assist With{" "}
                <span className="italic text-corporate-gold">
                  ZRA, PACRA & NHIMA
                </span>
                .
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-4 max-w-xl">
                We provide certified consultations and expedite setup requests
                for PACRA, ZRA, NHIMA, TCZ, EIZ, ZPPA, NMCZ, ZIHRM,
                ZIM, business licensing, and labour related issue support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  "PACRA Company Creation",
                  "ZRA TPIN & Cleared Status",
                  "National Health (NHIMA)",
                  "ZPPA Procurement Supplier Registry",
                  "NMCZ Professional Licensing",
                  "ZIHRM Human Resource Compliance",
                  "ZIM Marketing Registration",
                  "Labour related issue",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-corporate-gold mt-0.5" />

                    <span className="font-bold text-xs text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY CORE */}
      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">
            Company Core
          </p>

          <h2 className="text-3xl sm:text-4xl font-serif font-light text-white mt-3">
            Corporate{" "}
            <span className="italic text-corporate-gold">
              Value Foundations
            </span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Our firm maintains an outstanding path of success inside Zambia.
          </p>
        </div>

        {/* IMAGES 4-7 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-corporate-blue-light/40 border border-corporate-gold/15 rounded-lg overflow-hidden group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={`/image/${idx + 4}.jpg`}
                  alt={val.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-corporate-blue-dark/90 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 relative">
                <div className="absolute top-4 right-4 text-corporate-gold font-serif italic opacity-15 text-5xl">
                  0{idx + 1}
                </div>

                <div className="w-10 h-10 rounded-sm bg-corporate-gold/10 text-corporate-gold flex items-center justify-center mb-4">
                  <Zap className="w-4 h-4 text-corporate-gold" />
                </div>

                <h3 className="font-bold text-sm text-white tracking-wide">
                  {val.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}