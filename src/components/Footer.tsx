import { useState, FormEvent } from "react";
import { PageId } from "../types";
import { COMPANY_CONTACTS } from "../data";
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleQuickLink = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <footer className="bg-corporate-blue-dark text-white pt-16 pb-8 border-t border-corporate-gold/20" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Logo size={40} className="shrink-0 rounded-full border border-corporate-gold/25 shadow-md" />
            <span className="text-md font-serif font-light tracking-widest text-white uppercase">RAPID CONSULTANCY</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            Your trusted partner in business growth, regulatory compliance, bookkeeping software, HR solutions, and local & international scholarships.
          </p>
          <div className="mt-2">
            <p className="text-[10px] text-corporate-gold font-bold uppercase tracking-widest">Tagline</p>
            <p className="text-xs italic font-serif text-gray-300">“{COMPANY_CONTACTS.slogan}”</p>
          </div>
        </div>

        {/* Regulatory & Services Column */}
        <div>
          <h3 className="text-xs font-bold text-corporate-gold uppercase tracking-widest mb-6 border-b border-corporate-gold/15 pb-2">
            Consultancy Areas
          </h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => handleQuickLink("compliance")}
                className="text-xs text-gray-300 hover:text-corporate-gold transition-colors flex items-center gap-1.5 text-left uppercase tracking-wider"
              >
                ➔ PACRA Registration
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink("compliance")}
                className="text-xs text-gray-300 hover:text-corporate-gold transition-colors flex items-center gap-1.5 text-left uppercase tracking-wider"
              >
                ➔ ZRA TPIN & Tax Certificates
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink("services")}
                className="text-xs text-gray-300 hover:text-corporate-gold transition-colors flex items-center gap-1.5 text-left uppercase tracking-wider"
              >
                ➔ Company Profile Design
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink("scholarships")}
                className="text-xs text-gray-300 hover:text-corporate-gold transition-colors flex items-center gap-1.5 text-left uppercase tracking-wider"
              >
                ➔ Study Abroad Pathways
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink("booking")}
                className="text-xs text-gray-300 hover:text-corporate-gold transition-colors flex items-center gap-1.5 text-left uppercase tracking-wider"
              >
                ➔ Online Bookings
              </button>
            </li>
          </ul>
        </div>

        {/* Physical Office Address / Contact */}
        <div>
          <h3 className="text-xs font-bold text-corporate-gold uppercase tracking-widest mb-6 border-b border-corporate-gold/15 pb-2">
            Zambia Headquarters
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-corporate-gold shrink-0 mt-0.5" />
              <div className="text-xs text-gray-300 leading-relaxed">
                <p className="font-bold text-white uppercase tracking-wider">Lusaka Principal Office:</p>
                <p className="mt-1">{COMPANY_CONTACTS.address}</p>
                <p className="text-[10px] text-corporate-gold mt-1 font-bold">LUSAKA, ZAMBIA</p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-corporate-gold shrink-0" />
              <div className="text-xs text-gray-300">
                <p>{COMPANY_CONTACTS.phone1}</p>
                <p>{COMPANY_CONTACTS.phone2}</p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-corporate-gold shrink-0" />
              <span className="text-xs text-gray-300 break-all">{COMPANY_CONTACTS.email}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / Bulletin Subscription */}
        <div>
          <h3 className="text-xs font-bold text-corporate-gold uppercase tracking-widest mb-6 border-b border-corporate-gold/15 pb-2">
            Compliance Alerts & Updates
          </h3>
          <p className="text-xs text-gray-300 leading-relaxed mb-4">
            Subscribe to receive critical PACRA annual deadlines, ZRA tax updates, and fresh scholarship listings directly in your inbox.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full bg-white/5 border border-corporate-gold/30 rounded-sm py-2.5 px-3 text-xs text-white focus:outline-hidden focus:ring-1 focus:ring-corporate-gold placeholder:text-gray-400 font-sans"
              />
              <button
                type="submit"
                className="w-full bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue border border-corporate-gold/50 font-bold py-2.5 px-4 rounded-sm text-[10px] uppercase tracking-widest transition-colors cursor-pointer"
              >
                Sign Up for Alerts
              </button>
            </form>
          ) : (
            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3 rounded-sm flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
              <div>
                <span className="font-bold">Subscription Confirmed!</span>
                <p className="mt-1 text-[11px]">Thank you for subscribing. You'll now receive timely regulatory alerts.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-corporate-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-400">
        <p>© 2026 Rapid Business Consultancy. All rights reserved.</p>
        <p className="font-serif">
          Slogan: <span className="text-corporate-gold font-bold">“Seeing You Succeeding Is Our Pride”</span>
        </p>
      </div>
    </footer>
  );
}
