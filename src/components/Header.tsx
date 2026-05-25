import { useState } from "react";
import { PageId } from "../types";
import { COMPANY_CONTACTS } from "../data";
import {
  Menu,
  X,
  Clock3,
  ArrowRight,
} from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full bg-corporate-blue/95 backdrop-blur-md border-b border-corporate-gold/10 shadow-lg">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo Section */}
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <Logo
              size={58}
              className="shrink-0 object-contain"
            />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Online Status */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

              <span className="text-xs font-semibold text-emerald-300">
                Online Support Active
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick("booking")}
              className="group bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-corporate-gold/20 flex items-center gap-2"
              id="header-booking-btn"
            >
              Book Consultation

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-corporate-gold" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block border-t border-white/5 bg-corporate-blue-dark/80">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            
            {/* Nav Links */}
            <ul className="flex items-center">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-corporate-gold"
                          : "text-gray-300 hover:text-white"
                      }`}
                      id={`desktop-nav-link-${item.id}`}
                    >
                      {item.label}

                      {/* Active Indicator */}
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-corporate-gold transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Inquiry Portal */}
            <button
              onClick={() => handleNavClick("booking")}
              className="text-sm text-corporate-gold hover:text-white font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <span>Online Inquiry Portal</span>

              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>

                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-corporate-blue-dark border-t border-white/10 shadow-2xl animate-fade-in-down">
          <div className="px-4 py-5 flex flex-col gap-2">
            
            {/* Mobile Nav Links */}
            {navItems.map((item) => {
              const isActive = currentPage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-corporate-gold text-corporate-blue-dark shadow-lg"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Divider */}
            <div className="border-t border-white/10 my-2"></div>

            {/* Mobile CTA */}
            <button
              onClick={() => handleNavClick("booking")}
              className="w-full bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
              id="mobile-cta-booking-btn"
            >
              <Clock3 className="w-4 h-4" />
              Book Free Consultation
            </button>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${
                COMPANY_CONTACTS.whatsappNumber
              }?text=${encodeURIComponent(
                COMPANY_CONTACTS.whatsappWelcomeMessage
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
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
      )}
    </header>
  );
}