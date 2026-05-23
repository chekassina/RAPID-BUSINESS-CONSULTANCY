import { useState } from "react";
import { BLOG_POSTS } from "../data";
import { PageId, BlogPost } from "../types";
import { Search, Calendar, User, Clock, ArrowRight, X, ArrowUpRight } from "lucide-react";

interface BlogViewProps {
  setCurrentPage: (page: PageId) => void;
  setBookingCategory?: (cat: string) => void;
}

export default function BlogView({ setCurrentPage, setBookingCategory }: BlogViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ["All", "Compliance", "Scholarship", "Branding", "Tax"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleInquireFromArticle = (post: BlogPost) => {
    if (setBookingCategory) {
      setBookingCategory(`Inquiry prompted by: ${post.title}`);
    }
    setActivePost(null);
    setCurrentPage("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in py-16 px-4" id="blog-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Articles & Intelligence</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Insights & Regulatory News
          </h1>
          <p className="text-gray-300 mt-4 text-xs sm:text-sm leading-relaxed">
            Stay aligned with statutory revisions in Zambia. Read expert columns on corporate governance, bookkeeping standardizations, scholarship applications, and PACRA guidelines.
          </p>
        </div>

        {/* Search and Filters Hub */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-corporate-blue-light border border-corporate-gold/20 p-5 rounded-sm shadow-none">
          {/* Keyword Tracker Input */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              placeholder="Search news & tip reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 rounded-sm py-3 pl-10 pr-4 text-xs text-white focus:outline-hidden focus:ring-1 focus:ring-corporate-gold placeholder:text-gray-450"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-450" />
          </div>

          {/* Categories select pills list */}
          <div className="flex flex-wrap gap-2">
            {categories.map((catName) => (
              <button
                key={catName}
                onClick={() => setSelectedCategory(catName)}
                className={`px-4 py-2 border rounded-sm text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === catName
                    ? "bg-corporate-gold border-corporate-gold text-corporate-blue-dark font-black"
                    : "bg-corporate-blue-dark/45 border-corporate-gold/15 text-gray-300 hover:bg-corporate-blue-dark"
                }`}
              >
                {catName === "All" ? "All Columns" : catName}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-corporate-blue-light border border-corporate-gold/20 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-corporate-gold/40 transition-transform hover:-translate-y-1 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="py-1 px-3 bg-corporate-blue-dark/60 text-corporate-gold text-[10px] border border-corporate-gold/15 font-black uppercase rounded-sm tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-corporate-gold" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-corporate-gold transition-colors leading-tight mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-corporate-gold/10 flex items-center justify-between mt-auto">
                  <div className="text-[11px] text-gray-400">
                    <span className="font-bold text-white block">{post.author}</span>
                    <span>Published: {post.date}</span>
                  </div>
                  <button
                    onClick={() => setActivePost(post)}
                    className="text-xs font-black text-corporate-gold hover:text-white flex items-center gap-1 transition-colors"
                  >
                    Read Column <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-corporate-blue-light border border-corporate-gold/20 rounded-sm p-8 max-w-md mx-auto">
            <Search className="w-10 h-10 text-gray-400 mx-auto mb-4 animate-bounce" />
            <p className="font-extrabold text-white text-md">No Reports Found</p>
            <p className="text-xs text-gray-300 mt-2">
              We couldn't match your keyword. Try looking up broader terms like 'TPIN', 'PACRA', or 'Scholarship'.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-6 bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-2.5 px-4 rounded-sm text-xs tracking-wider transition-colors cursor-pointer uppercase"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Detailed Modal Reader Overlay */}
        {activePost && (
          <div className="fixed inset-0 z-50 bg-corporate-blue-dark/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
            <div className="bg-corporate-blue-light border border-corporate-gold/30 rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative animate-fade-in-up text-white">
              {/* Close pin */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 bg-corporate-blue-dark border border-corporate-gold/15 hover:bg-corporate-blue hover:text-white text-white font-extrabold text-lg p-2 px-3 rounded-sm z-10 transition-colors cursor-pointer"
                aria-label="Close Article"
              >
                ×
              </button>

              <div className="p-6 sm:p-10 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="py-1 px-3 bg-corporate-blue-dark border border-corporate-gold/25 text-corporate-gold text-[10px] font-black uppercase rounded-sm tracking-widest">
                      {activePost.category}
                    </span>
                    <span className="text-[10px] text-gray-300 font-bold uppercase flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-corporate-gold" /> {activePost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {activePost.title}
                  </h2>
                </div>

                {/* Author Credentials */}
                <div className="bg-corporate-blue-dark/50 p-4 rounded-sm border border-corporate-gold/15 flex items-center justify-between text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-corporate-blue border border-corporate-gold/15 text-corporate-gold flex items-center justify-center font-bold text-xs">
                      {activePost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-extrabold text-white">{activePost.author}</p>
                      <p className="text-[10px] text-gray-400 font-bold">Zambia Strategic Consultant</p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-400">{activePost.date}</span>
                </div>

                {/* Detailed body paragraph */}
                <div className="text-gray-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-4">
                  {activePost.content}
                </div>

                {/* Inside article contextual booking box */}
                <div className="bg-corporate-blue-dark/45 border-t border-corporate-gold/15 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-sm border border-corporate-gold/10">
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-sm text-white">Inquire About This Custom Topic?</h4>
                    <p className="text-xs text-gray-300 mt-1">Our certified team handles registration audits across Zambia.</p>
                  </div>
                  <button
                    onClick={() => handleInquireFromArticle(activePost)}
                    className="bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black px-5 py-2.5 rounded-sm text-xs transition-all tracking-wide uppercase flex items-center gap-1 cursor-pointer"
                  >
                    Discuss Topic With Consultant <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
