import { useState, useEffect, FormEvent } from "react";
import { TESTIMONIALS_DATA } from "../data";
import { TestimonialItem } from "../types";
import { Star, MessageSquareCode, BadgeCheck, CheckCircle2 } from "lucide-react";

export default function TestimonialsView() {
  const [filterTopic, setFilterTopic] = useState<string>("All");
  const [reviews, setReviews] = useState<TestimonialItem[]>([]);
  
  // Review Formulation State
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newCategory, setNewCategory] = useState<"Business" | "Scholarship" | "Compliance">("Business");
  const [newRating, setNewRating] = useState(5);
  const [newContent, setNewContent] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Load reviews from local storage on mount combined with standard data
  useEffect(() => {
    const saved = localStorage.getItem("rapid_client_reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setReviews([...parsed, ...TESTIMONIALS_DATA]);
      } catch (e) {
        setReviews(TESTIMONIALS_DATA);
      }
    } else {
      setReviews(TESTIMONIALS_DATA);
    }
  }, []);

  const handleComposeReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newContent.trim()) return;

    const freshReview: TestimonialItem = {
      id: `custom-test-${Date.now()}`,
      name: newName,
      role: newRole || "Director / Entrepreneur",
      company: newCompany || "Local Enterprise",
      content: newContent,
      rating: newRating,
      category: newCategory
    };

    const nextReviews = [freshReview, ...reviews];
    setReviews(nextReviews);

    // Filter out initial static reviews when persisting to save space
    const onlyCustom = nextReviews.filter(r => r.id.startsWith("custom-test-"));
    localStorage.setItem("rapid_client_reviews", JSON.stringify(onlyCustom));

    // Reset Form
    setNewName("");
    setNewRole("");
    setNewCompany("");
    setNewContent("");
    setNewRating(5);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const filteredReviews = reviews.filter((r) => {
    return filterTopic === "All" || r.category === filterTopic;
  });

  return (
    <div className="animate-fade-in py-16 px-4" id="testimonials-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Client Success Reports</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            What Our Clients Experience
          </h1>
          <p className="text-gray-300 mt-4 text-xs sm:text-sm leading-relaxed">
            Read genuine feedback from students registered abroad, startup cooperatives fully registered under PACRA, and enterprises operating tax-compliant accounts with ZRA.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Business", "Scholarship", "Compliance"].map((topic) => (
            <button
              key={topic}
              onClick={() => setFilterTopic(topic)}
              className={`px-4 py-2 border rounded-sm text-xs font-bold transition-all scroll-pt-1 cursor-pointer ${
                filterTopic === topic
                  ? "bg-corporate-gold border-corporate-gold text-corporate-blue-dark font-black"
                  : "bg-corporate-blue-dark border-corporate-gold/15 text-gray-300 hover:bg-corporate-blue-dark/80"
              }`}
            >
              {topic === "All" ? "All Endorsements" : `${topic} Reviews`}
            </button>
          ))}
        </div>

        {/* Main Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredReviews.map((r) => (
            <div
              key={r.id}
              className="bg-corporate-blue-light border border-corporate-gold/20 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-corporate-gold/40 transition-all relative"
            >
              {/* Star Rating Layout */}
              <div>
                <div className="flex items-center gap-1 text-corporate-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 text-corporate-gold shrink-0 ${
                        i < r.rating ? "fill-corporate-gold" : "opacity-35"
                      }`}
                    />
                  ))}
                  <span className="text-[10px] bg-corporate-blue-dark border border-corporate-gold/15 text-corporate-gold font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ml-2">
                    {r.category}
                  </span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  “ {r.content} ”
                </p>
              </div>

              <div className="pt-4 border-t border-corporate-gold/10 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-white text-sm">{r.name}</h4>
                  <p className="text-xs text-gray-400">
                    {r.role} at <span className="text-corporate-gold font-bold">{r.company}</span>
                  </p>
                </div>
                <div className="text-emerald-400 flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider">
                  <BadgeCheck className="w-4 h-4 shrink-0" /> Verified client
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add client review section */}
        <section className="bg-corporate-blue-light border border-corporate-gold/25 rounded-sm p-6 sm:p-10 max-w-2xl mx-auto shadow-none">
          <div className="flex items-center gap-2 text-white font-extrabold text-sm uppercase tracking-wider mb-2">
            <MessageSquareCode className="w-5 h-5 text-corporate-gold" />
            Submit Your Feedback Report
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-corporate-gold leading-tight mb-4 tracking-wide uppercase">
            Are You Already Succeeding With Rapid?
          </h3>
          <p className="text-xs text-gray-300 mb-6 leading-relaxed bg-corporate-blue-dark/20 p-3 rounded-sm border border-corporate-gold/10">
            Did our team assist with company documents, scholarships abroad, or ZRA clearance certificates? Submit your story and rating below to help guide other local business owners.
          </p>

          {!formSubmitted ? (
            <form onSubmit={handleComposeReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Grace Mwamba"
                    className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Company / Cooperative Name</label>
                  <input
                    type="text"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    placeholder="e.g. Kaleza Civil Groups"
                    className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Official Role Title</label>
                  <input
                    type="text"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="e.g. Managing Director"
                    className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Consultancy Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-2.5 text-xs text-white font-bold focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                  >
                    <option value="Business" className="bg-corporate-blue-dark text-white">Business Setup</option>
                    <option value="Scholarship" className="bg-corporate-blue-dark text-white">Academic Schol</option>
                    <option value="Compliance" className="bg-corporate-blue-dark text-white">Regulatory ZRA</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1 border-b border-corporate-gold/15 pb-1">Star Assessment Value</label>
                <div className="flex items-center gap-1.5 mt-2">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      key={stars}
                      type="button"
                      onClick={() => setNewRating(stars)}
                      className="p-1 cursor-pointer focus:outline-hidden hover:scale-110 transition-transform"
                    >
                      <Star className={`w-6 h-6 shrink-0 ${stars <= newRating ? "text-corporate-gold fill-corporate-gold" : "text-gray-600"}`} />
                    </button>
                  ))}
                  <span className="text-xs text-gray-300 font-bold ml-2">({newRating} / 5 Stars Assigned)</span>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Describe Your Actual Experience *</label>
                <textarea
                  required
                  rows={4}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Share details of your consultation, documents, registrations, or scholarship placement..."
                  className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black tracking-widest py-3.5 px-4 rounded-sm text-xs uppercase transition-colors cursor-pointer"
              >
                Publish Feedback Record
              </button>
            </form>
          ) : (
            <div className="bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 p-6 rounded-sm flex items-start gap-4 animate-fade-in">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-md mb-1">Feedback Logged Successfully!</h4>
                <p className="text-xs text-gray-300">
                  Thank you for sharing your experience. Your endorsement has been published and appended directly to our public logs above.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
