import { COMPANY_OBJECTIVES } from "../data";
import { Compass, Lightbulb, Target, Users, Landmark, BookOpen } from "lucide-react";

export default function AboutView() {
  const leadershipValues = [
    {
      title: "Integrity Above All",
      desc: "Honest representation on all registrations. We deliver transparency across PACRA, ZRA, and educational applications.",
      icon: Compass
    },
    {
      title: "Client-Centric Acceleration",
      desc: "Our primary measure of victory is our clients successfully expanding. Seeing local companies thrive is our absolute pride.",
      icon: Lightbulb
    },
    {
      title: "Continuous Innovation",
      desc: "We build modern social templates, install automated bookkeeping setups, and curate overseas scholarship portfolios.",
      icon: Target
    }
  ];

  return (
    <div className="animate-fade-in py-16 px-4" id="about-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Head Segment */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Our Heritage & Integrity</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Zambia's Professional Growth Catalyst
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
            Rapid Business Consultancy is structured as a premium one-stop professional service provider in Lusaka, Zambia. We enable startups, students, and organizations to bypass operational bottlenecks and unlock their potential.
          </p>
        </div>

        {/* Corporate History & Backstory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-corporate-gold">
              Connecting Ambition with Regulatory Structure
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Founded as an alternative to administrative complexity, Rapid Business Consultancy has evolved into a premier advisory model. We recognized that starting a business under PACRA, organizing accounts under ZRA, and structuring HR rosters could be intimidating.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We did not stop at business solutions. Understanding that youth education is a vital pillar, we pioneered expert scholarship advisory modules. We help promising students analyze bilateral scholarship opportunities-secure placement abroad, draft compliant portfolios, and begin global educational careers.
            </p>
            <div className="bg-corporate-gold/5 border-l-4 border-corporate-gold p-4 rounded-r-lg">
              <span className="font-bold text-corporate-gold block text-xs uppercase tracking-wide">Our Living Motto</span>
              <p className="text-sm italic text-gray-200 font-semibold mt-1">
                “Seeing You Succeeding Is Our Pride.”
              </p>
            </div>
          </div>

          {/* Visual Profile Block */}
          <div className="bg-corporate-blue-light text-white p-8 sm:p-12 rounded-2xl shadow-xl relative border border-corporate-gold/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-gold/10 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold text-corporate-gold uppercase tracking-wider mb-6">Quick Overview</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-corporate-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Regulatory Hub Alignment</h4>
                  <p className="text-xs text-gray-300 mt-1">Excellent pathways to align corporate documents across PACRA, ZRA, NHIMA, TCZ, EIZ, NMCZ, and ZPPA.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-corporate-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Empathetic Advisors</h4>
                  <p className="text-xs text-gray-300 mt-1">Each of our team members brings deep localized and international knowledge to assist you.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-corporate-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Scholarship Placement Hub</h4>
                  <p className="text-xs text-gray-300 mt-1">Helping bright minds connect with fully funded admissions in the UK, China, and Europe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-corporate-blue-light border border-corporate-gold/20 p-8 rounded-2xl shadow-xs relative hover:border-corporate-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-corporate-gold/10 text-corporate-gold flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white">Our Mission Statement</h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-4 leading-relaxed">
              To eliminate bureaucratic bottlenecks for startups, streamline corporate accounting under ZRA benchmarks, structure elite document assets, and offer straightforward admissions assistance to allow brilliant learners to gain scholarships locally and abroad without operational friction.
            </p>
          </div>

          <div className="bg-corporate-blue-light border border-corporate-gold/20 p-8 rounded-2xl shadow-xs relative hover:border-corporate-gold/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-corporate-gold/10 text-corporate-gold flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-corporate-gold" />
            </div>
            <h3 className="text-xl font-black text-white">Our Long-term Vision</h3>
            <p className="text-gray-300 text-xs sm:text-sm mt-4 leading-relaxed">
              To remain Southern Africa's premier, gold-standard advisory network which directly facilitates regional compliance, creates international business partnerships, and positions Zambia as an active exporter of top-tier talents and trade leaders.
            </p>
          </div>
        </div>

        {/* Corporate Objectives List */}
        <section className="bg-corporate-blue-dark/50 p-8 sm:p-12 rounded-2xl border border-corporate-gold/15 mb-20">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-8">
            Our Fundamental Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPANY_OBJECTIVES.map((obj, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-corporate-blue-light/50 border border-corporate-gold/15 rounded-xl">
                <span className="w-7 h-7 bg-corporate-gold text-corporate-blue-dark text-xs font-black rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leaders Values list */}
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-10">
            Our Pillars of Consultation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-corporate-blue-light border border-corporate-gold/15 p-6 rounded-xl shadow-xs text-center flex flex-col items-center hover:border-corporate-gold/40 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-corporate-gold/10 text-corporate-gold flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-md text-white mb-2">{val.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
