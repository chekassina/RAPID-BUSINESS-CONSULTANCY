import { useState, FormEvent } from "react";
import { COMPANY_CONTACTS } from "../data";
import { PageId } from "../types";
import { Phone, Mail, MapPin, Clock, CalendarCheck, Send, CheckCircle2 } from "lucide-react";

interface ContactViewProps {
  setCurrentPage: (page: PageId) => void;
  setBookingCategory?: (cat: string) => void;
}

export default function ContactView({ setCurrentPage, setBookingCategory }: ContactViewProps) {
  // Contact Form Inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+260 ");
  const [subject, setSubject] = useState("Corporate PACRA/ZRA Registration Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitContact = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !message.trim()) return;

    // Simulate submission persistence or notification
    setSubmitted(true);
    setTimeout(() => {
      setFullName("");
      setEmail("");
      setPhone("+260 ");
      setMessage("");
      setSubmitted(false);
    }, 5500);
  };

  const handleBookNow = () => {
    if (setBookingCategory) {
      setBookingCategory("General consultation");
    }
    setCurrentPage("booking");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="animate-fade-in py-16 px-4" id="contact-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Connect with our team</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Zambia Office & Enquiries Hub
          </h1>
          <p className="text-gray-300 mt-4 text-xs sm:text-sm leading-relaxed">
            Have a question about enterprise compliance under PACRA or international scholarships admission files? Reach our Lusaka specialists on WhatsApp, email, or schedule an online video consultation.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-20">
          {/* Card list */}
          <div className="bg-corporate-blue-light border border-corporate-gold/20 text-white rounded-sm p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-xl lg:h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-gold/5 rounded-full blur-2xl"></div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-corporate-gold uppercase tracking-wider mb-2">Corporate Office</h3>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-corporate-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-corporate-gold uppercase tracking-wider">Office Address</h4>
                  <p className="text-sm text-gray-200 leading-relaxed mt-1">
                    {COMPANY_CONTACTS.address}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Lusaka, Zambia</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-corporate-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-corporate-gold uppercase tracking-wider">Inquiry Lines</h4>
                  <p className="text-sm text-gray-200 mt-1">{COMPANY_CONTACTS.phone1}</p>
                  <p className="text-sm text-gray-200">{COMPANY_CONTACTS.phone2}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-corporate-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-corporate-gold uppercase tracking-wider">Email Address</h4>
                  <p className="text-sm text-gray-200 mt-1 break-all">{COMPANY_CONTACTS.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-corporate-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-corporate-gold uppercase tracking-wider">Operational Hours</h4>
                  <p className="text-sm text-gray-200 mt-1">Monday - Saturday (08:00 - 17:00 CAT)</p>
                  <p className="text-xs text-gray-400">Closed Sundays & Zambian Public Holidays</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-corporate-gold/15 mt-6 text-center">
              <p className="text-xs italic text-gray-300">“{COMPANY_CONTACTS.slogan}”</p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="bg-corporate-blue-light border border-corporate-gold/20 rounded-sm p-6 sm:p-10 shadow-none lg:col-span-2">
            <h3 className="text-xl font-extrabold text-white mb-2">Send Immediate Security Inquiry</h3>
            <p className="text-xs text-gray-300 mb-6 font-medium">
              Formulate your corporate query or scholarship issues and our advisory desks will review details in under 2 hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Kelvin Phiri"
                      className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold focus:border-corporate-gold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Your Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. kelvin@gmail.com"
                      className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold focus:border-corporate-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Phone Line (Zambia Preferred) *</label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +260 775 449 792"
                      className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold focus:border-corporate-gold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Inquiry Primary Topic</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-2.5 text-xs text-white font-semibold focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                    >
                      <option value="Corporate PACRA/ZRA Registration Inquiry" className="bg-corporate-blue-dark text-white">🏢 Company PACRA / ZRA Registration</option>
                      <option value="International/Local Scholarships Placement Guidance" className="bg-corporate-blue-dark text-white">🎓 Scholarships Admission Support</option>
                      <option value="Accounting system Bookkeeping & ZRA Taxes filing" className="bg-corporate-blue-dark text-white">📊 Accounts, Bookkeeping & Taxes</option>
                      <option value="Company profile designing and Visual Branding" className="bg-corporate-blue-dark text-white">🎨 Company Profile Designing</option>
                      <option value="Association Constitution & Business Plan writing" className="bg-corporate-blue-dark text-white">📝 Cooperative / Business Writing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Detailed Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter details of your registration issues or scholarship plans..."
                    className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold focus:border-corporate-gold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-3.5 px-4 rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Security Inquiry
                </button>
              </form>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-6 rounded-sm flex items-start gap-4">
                <CheckCircle2 className="w-7 h-7 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-md mb-1">Message Transmitted Successfully!</h4>
                  <p className="text-xs text-gray-300">
                    Thank you. Your enquiry dossier has been securely logged on our server database. A professional advisor from our Dedan Kimathi Office, Lusaka will coordinate with you shortly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Simulated Map Block representing office location in Lusaka Dedan Kimathi RD */}
        <section className="bg-corporate-blue-light border border-corporate-gold/20 rounded-sm p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-corporate-gold/15 pb-6 mb-6">
            <div>
              <span className="text-[10px] font-bold text-corporate-gold uppercase tracking-wider block">Office Locator</span>
              <h3 className="text-lg sm:text-xl font-bold text-white">Find Us in Lusaka, Zambia</h3>
              <p className="text-xs text-gray-300 mt-1">Centrally situated on Dedan Kimathi Road, Premium Plaza for convenient access.</p>
            </div>
            <button
              onClick={handleBookNow}
              className="bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-2.5 px-5 rounded-sm text-xs transition-colors cursor-pointer"
            >
              Book In-Person Appointment
            </button>
          </div>

          {/* Interactive look of map */}
          <div className="w-full h-80 rounded-sm bg-slate-900 overflow-hidden relative border border-corporate-gold/20">
            {/* Visual Vector Grid resembling maps */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800"></div>

            {/* Simulated streets lines and markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Radar ripple rings */}
                <span className="absolute -inset-8 bg-corporate-gold/20 rounded-full animate-ping opacity-75"></span>
                <span className="absolute -inset-4 bg-corporate-blue-light/30 rounded-full animate-pulse"></span>

                {/* Point pin badge */}
                <div className="relative bg-corporate-blue-dark text-white py-2 px-3.5 rounded-sm border border-corporate-gold flex items-center gap-1.5 shadow-2xl">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full animate-pulse shrink-0"></span>
                  <div className="text-left leading-none">
                    <span className="font-extrabold text-[10px] tracking-wide block">RAPID OFFICE</span>
                    <span className="text-[8px] text-corporate-gold font-bold">Premium Plaza</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary map labels and guides */}
            <div className="absolute top-4 left-4 text-left p-4 rounded-sm bg-slate-950/80 border border-slate-800 text-white text-xs max-w-xs backdrop-blur-md">
              <span className="font-bold text-corporate-gold text-[10px] block mb-1 tracking-wider uppercase">Active GPS Coordinates</span>
              <p className="font-mono text-[10px] text-gray-300">Lat: 15.4167° S, Lon: 28.2833° E</p>
              <p className="text-gray-400 text-[10px] mt-1.5 leading-relaxed">Located near Premium Plaza, surrounding transportation loops link directly into our office tower.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
