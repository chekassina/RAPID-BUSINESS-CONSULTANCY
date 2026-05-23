
import { useState } from "react";
import { PageId } from "../types";
import { COMPANY_CONTACTS } from "../data";
import { Menu, X, Clock } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "compliance", label: "Compliance & PACRA" },
    { id: "scholarships", label: "Scholarships" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full bg-corporate-blue border-b border-corporate-gold/20 sticky top-0 z-50 shadow-md">
      {/* Main Logo & Branded Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Company Name */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <Logo
            size={48}
            className="shrink-0 shadow-md rounded-full border border-corporate-gold/20"
          />

          <div>
            <div className="text-md sm:text-xl font-serif font-light text-white leading-tight tracking-tight flex items-center flex-wrap gap-x-1 uppercase">
              RAPID{" "}
              <span className="text-corporate-gold font-bold italic font-serif">
                BUSINESS
              </span>{" "}
              CONSULTANCY
            </div>

            <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              “{COMPANY_CONTACTS.slogan}”
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick("booking")}
            className="bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue border border-corporate-gold/40 font-bold px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest transition-all duration-300"
            id="header-booking-btn"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors focus:outline-hidden"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-corporate-gold" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-corporate-blue-dark border-t border-corporate-blue/30 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <ul className="flex flex-wrap items-center">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-3 text-sm font-semibold transition-all duration-300 relative border-b-2 block ${
                      isActive
                        ? "text-corporate-gold border-corporate-gold bg-white/5"
                        : "text-gray-200 border-transparent hover:text-white hover:bg-white/5"
                    }`}
                    id={`desktop-nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => handleNavClick("booking")}
            className="text-xs text-corporate-gold hover:text-white font-bold transition-colors py-3 px-2 flex items-center gap-1"
          >
            <span>Online Inquiries Portal</span>

            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-corporate-blue-dark text-white border-t border-corporate-blue/40 shadow-xl overflow-hidden animate-fade-in-down">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-corporate-gold text-corporate-blue-dark"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Mobile CTA Buttons */}
            <div className="pt-2 pb-1 border-t border-white/10 mt-2 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick("booking")}
                className="w-full bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black text-center py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
                id="mobile-cta-booking-btn"
              >
                <Clock className="w-4 h-4" />
                Book Free Consultation
              </button>

              <a
                href={`https://wa.me/${COMPANY_CONTACTS.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_CONTACTS.whatsappWelcomeMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-center py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515.003 10.018-4.5 10.022-10.045.003-2.684-1.038-5.207-2.93-7.104C16.475 1.558 13.958.514 11.285.514c-5.52 0-10.019 4.499-10.022 10.042-.001 1.744.457 3.447 1.328 4.952L1.57 21.05l5.077-1.331z" />
                </svg>

                WhatsApp Us Directly
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
