import { useState } from "react";
import { SCHOLARSHIPS_DATA } from "../data";
import { PageId, ScholarshipItem } from "../types";
import { GraduationCap, Award, Compass, Heart, ClipboardCheck, ArrowUpRight } from "lucide-react";

interface ScholarshipsViewProps {
  setCurrentPage: (page: PageId) => void;
  setBookingCategory?: (cat: string) => void;
}

export default function ScholarshipsView({ setCurrentPage, setBookingCategory }: ScholarshipsViewProps) {
  const [filterType, setFilterType] = useState<"All" | "Zambian" | "International">("All");

  const filteredScholarships = SCHOLARSHIPS_DATA.filter((item) => {
    if (filterType === "All") return true;
    if (filterType === "Zambian") return item.type === "Zambian";
    return item.type === "International" || item.type === "Study Abroad";
  });

  const handleApplyScholarship = (schName: string) => {
    if (setBookingCategory) {
      setBookingCategory(`Scholarship Admission advisory - ${schName}`);
    }
    setCurrentPage("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in py-16 px-4" id="scholarships-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <GraduationCap className="w-12 h-12 text-corporate-gold mx-auto mb-4" />
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Global Study Programs</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Scholarship & Education Advisors
          </h1>
          <p className="text-gray-300 mt-4 text-xs sm:text-sm leading-relaxed">
            Unlocking world-class education pathways. We parse eligibility frameworks and help brilliant Zambian students structure bulletproof portfolios for fully-funded states and global university scholarships.
          </p>
        </div>

        {/* Filters Selectors */}
        <div className="flex justify-center gap-3 mb-10">
          {(["All", "Zambian", "International"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold transition-all border cursor-pointer ${
                filterType === t
                  ? "bg-corporate-gold text-corporate-blue-dark border-corporate-gold shadow-md"
                  : "bg-corporate-blue-light border-corporate-gold/25 text-gray-300 hover:bg-corporate-blue-light/80"
              }`}
            >
              {t === "All" ? "All Scholarships" : t === "Zambian" ? "Zambia Local Grants" : "International Abroad"}
            </button>
          ))}
        </div>

        {/* Scholarships List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredScholarships.map((sch) => (
            <div
              key={sch.id}
              className="bg-corporate-blue-light border border-corporate-gold/20 p-6 sm:p-8 rounded-sm hover:border-corporate-gold/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Type Pin */}
              <div className="absolute top-0 right-0 py-1 px-4 bg-corporate-blue-dark text-corporate-gold text-[10px] font-black uppercase rounded-bl-sm tracking-wider border-l border-b border-corporate-gold/20">
                {sch.type}
              </div>

              <div>
                <span className="text-xs text-corporate-gold font-bold uppercase flex items-center gap-1">
                  <Award className="w-4 h-4 text-corporate-gold" /> {sch.coverage}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-corporate-gold transition-colors mt-2">
                  {sch.title}
                </h3>

                <div className="mt-4 flex flex-col gap-2 border-y border-corporate-gold/15 py-3.5 my-3.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target Location:</span>
                    <span className="text-white font-bold text-right">{sch.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Intake Deadline:</span>
                    <span className="text-rose-400 font-semibold">{sch.deadline}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {sch.description}
                </p>

                {/* Eligibility checklist */}
                <div className="mt-5 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1">
                    <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" /> Key Eligibility Requirements:
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5 mt-1.5">
                    {sch.eligibility.map((el, idx) => (
                      <li key={idx} className="text-xs text-gray-300 font-medium flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-corporate-gold mt-1.5 shrink-0"></span>
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-corporate-gold/15 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span> Guidance Active
                </span>
                <button
                  onClick={() => handleApplyScholarship(sch.title)}
                  className="text-xs font-bold text-corporate-gold hover:text-white flex items-center gap-1 transition-colors"
                >
                  Apply Advisory ➔
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Student Preparation dossier guide box */}
        <section className="bg-corporate-blue-light rounded-sm p-8 sm:p-12 border border-corporate-gold/20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[10px] font-bold text-corporate-gold uppercase tracking-wider block">Admissions Booster</span>
            <h3 className="text-2xl font-black text-white leading-tight">
              Elite Document Packages Designed for Selection Committees
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Applying for an outstanding scholarship with bad file architectures, generic resumes, and unstructured cover letters leads to prompt rejections. Our academic team will rewrite, format, and audit your entire application packet.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="p-3 bg-corporate-blue-dark/50 rounded-sm border border-corporate-gold/15 text-center">
                <span className="text-md font-bold block text-corporate-gold">ATS-CV</span>
                <span className="text-[10px] text-gray-400">Curriculums</span>
              </div>
              <div className="p-3 bg-corporate-blue-dark/50 rounded-sm border border-corporate-gold/15 text-center">
                <span className="text-md font-bold block text-corporate-gold">Cover Letter</span>
                <span className="text-[10px] text-gray-400">Statement</span>
              </div>
              <div className="p-3 bg-corporate-blue-dark/50 rounded-sm border border-corporate-gold/15 text-center">
                <span className="text-md font-bold block text-corporate-gold">Bilateral</span>
                <span className="text-[10px] text-gray-400">Support</span>
              </div>
              <div className="p-3 bg-corporate-blue-dark/50 rounded-sm border border-corporate-gold/15 text-center">
                <span className="text-md font-bold block text-corporate-gold">Interview</span>
                <span className="text-[10px] text-gray-400">Advisory</span>
              </div>
            </div>
          </div>

          <div className="bg-corporate-blue-dark/45 rounded-sm p-6 border border-corporate-gold/15 flex flex-col justify-between align-middle text-center shadow-none">
            <div>
              <p className="font-extrabold text-white tracking-wide text-md">Begin Free Assessment</p>
              <p className="text-xs text-gray-300 mt-2">
                Send your transcript summary & career plans. Our scholarship coordinator will analyze your chances for active intakes and map next moves.
              </p>
            </div>
            <button
              onClick={() => handleApplyScholarship("General Academic Profile Evaluation")}
              className="mt-6 bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-3 px-4 rounded-sm text-xs uppercase tracking-wide transition-colors cursor-pointer"
            >
              Analyze My Chances Free
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
