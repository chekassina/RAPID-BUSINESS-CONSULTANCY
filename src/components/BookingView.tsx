import { useState, useEffect, FormEvent } from "react";
import { ConsultationBooking } from "../types";
import { COMPANY_CONTACTS } from "../data";
import { Calendar, Clock, TicketCheck, FileText, CheckCircle2, ListFilter, Trash2 } from "lucide-react";

interface BookingViewProps {
  initialCategory?: string;
  setBookingCategory?: (cat: string) => void;
}

export default function BookingView({ initialCategory, setBookingCategory }: BookingViewProps) {
  // Booking Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+260 ");
  const [serviceOption, setServiceOption] = useState(initialCategory || "🏢 General PACRA & ZRA Business Consultancy");
  const [prefDate, setPrefDate] = useState("");
  const [prefTime, setPrefTime] = useState("10:00 CAT (Morning Session)");
  const [inquiryText, setInquiryText] = useState("");

  // Submissions Logs state
  const [bookedReceipt, setBookedReceipt] = useState<ConsultationBooking | null>(null);
  const [historicBookings, setHistoricBookings] = useState<ConsultationBooking[]>([]);

  // Synchronize category if it changed outside
  useEffect(() => {
    if (initialCategory) {
      setServiceOption(initialCategory);
    }
  }, [initialCategory]);

  // Load bookings from local storage
  useEffect(() => {
    const saved = localStorage.getItem("rapid_client_bookings");
    if (saved) {
      try {
        setHistoricBookings(JSON.parse(saved));
      } catch (e) {
        setHistoricBookings([]);
      }
    }
  }, []);

  const handleBookingSubmission = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !prefDate) return;

    const bookingId = `RBC-2026-X${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: ConsultationBooking = {
      id: bookingId,
      fullName: fullName,
      email: email || "direct@consultancy.com",
      phone: phone,
      serviceCategory: serviceOption,
      preferredDate: prefDate,
      preferredTime: prefTime,
      inquiryDetails: inquiryText,
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };

    const nextBookingsList = [newBooking, ...historicBookings];
    setHistoricBookings(nextBookingsList);
    localStorage.setItem("rapid_client_bookings", JSON.stringify(nextBookingsList));

    // Display voucher look
    setBookedReceipt(newBooking);

    // Reset Form
    setFullName("");
    setEmail("");
    setPhone("+260 ");
    setInquiryText("");
  };

  const clearReceipt = () => {
    setBookedReceipt(null);
    if (setBookingCategory) {
      setBookingCategory("");
    }
  };

  const handleDeleteHistoryItem = (id: string) => {
    const filtered = historicBookings.filter((b) => b.id !== id);
    setHistoricBookings(filtered);
    localStorage.setItem("rapid_client_bookings", JSON.stringify(filtered));
  };

  // Helper date lists for interactive scheduling picker
  const upcomingDates = [
    { label: "Monday, May 25", value: "2026-05-25" },
    { label: "Tuesday, May 26", value: "2026-05-26" },
    { label: "Wednesday, May 27", value: "2026-05-27" },
    { label: "Thursday, May 28", value: "2026-05-28" },
    { label: "Friday, May 29", value: "2026-05-29" },
    { label: "Saturday, May 30", value: "2026-05-30" },
  ];

  const timeslots = [
    "09:00 CAT (Early Session)",
    "10:30 CAT (Morning Session)",
    "13:00 CAT (Afternoon Launch)",
    "14:30 CAT (Mid-day Session)",
    "16:00 CAT (Closing Panel)"
  ];

  return (
    <div className="animate-fade-in py-16 px-4" id="booking-view-container">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Calendar className="w-12 h-12 text-corporate-gold mx-auto mb-4" />
          <p className="text-xs text-corporate-gold font-bold uppercase tracking-widest">Appointment Desk</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            Schedule a Consultation
          </h1>
          <p className="text-gray-300 mt-4 text-xs sm:text-sm leading-relaxed">
            Reserve your confidential session directly with our Lusaka managers over Video Conference, WhatsApp Voice, or physical meeting at Dedan Kimathi Office Tower.
          </p>
        </div>

        {/* Layout distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Panel */}
          <div className="lg:col-span-2">
            {!bookedReceipt ? (
              <div className="bg-corporate-blue-light border border-corporate-gold/20 rounded-sm p-6 sm:p-10 shadow-none">
                <h2 className="text-xl font-extrabold text-white mb-2">Book Free Appointment</h2>
                <p className="text-xs text-gray-300 mb-6 font-medium">
                  We verify coordinates and arrange professional advisors tailored to your custom specifications.
                </p>

                <form onSubmit={handleBookingSubmission} className="space-y-6">
                  {/* Basic user parameters */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Martha Mweli"
                        className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Contact Phone *</label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +260 963 910 639"
                        className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Primary Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. martha@consultancy.zM"
                        className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Consultation Topic Desk</label>
                      <select
                        value={serviceOption}
                        onChange={(e) => setServiceOption(e.target.value)}
                        className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-2.5 text-xs text-white font-semibold focus:outline-hidden focus:ring-1 focus:ring-corporate-gold"
                      >
                        <option value="🏢 General PACRA & ZRA Business Consultancy" className="bg-corporate-blue-dark text-white">🏢 General PACRA & ZRA Business Consultancy</option>
                        <option value="📝 Company Registration Setup Under PACRA" className="bg-corporate-blue-dark text-white">📝 Company Registration Under PACRA</option>
                        <option value="📊 ZRA Tax clearances & Turnover Tax calculations" className="bg-corporate-blue-dark text-white">📊 ZRA Tax compliance & Turnover taxes</option>
                        <option value="🎓 Study Abroad International Scholarship advisory" className="bg-corporate-blue-dark text-white">🎓 Study Abroad International Scholarship advisory</option>
                        <option value="🎨 Corporate Company Profile Designing" className="bg-corporate-blue-dark text-white">🎨 Corporate Company Profile Designing</option>
                        <option value="⚙️ Bookkeeping Software Installation & Configuration" className="bg-corporate-blue-dark text-white">⚙️ Bookkeeping Software setup (QuickBooks/Sage)</option>
                        <option value="👥 HR code handbook and Payroll setup" className="bg-corporate-blue-dark text-white">👥 HR code handbook & Payroll setups</option>
                      </select>
                    </div>
                  </div>

                  {/* Interactive Date selecting strip */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2 border-b border-corporate-gold/15 pb-1">
                      Preferred Date Selecting Grid *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                      {upcomingDates.map((dt) => {
                        const isChosen = prefDate === dt.value;
                        return (
                          <button
                            key={dt.value}
                            type="button"
                            onClick={() => setPrefDate(dt.value)}
                            className={`p-3 rounded-sm border text-center text-xs transition-colors cursor-pointer block ${
                              isChosen
                                ? "bg-corporate-gold text-corporate-blue-dark font-extrabold border-corporate-gold"
                                : "bg-corporate-blue-dark/50 text-gray-300 border-corporate-gold/15 hover:bg-corporate-blue-dark/85"
                            }`}
                          >
                            <span>{dt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeslots Selecting buttons */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2 border-b border-corporate-gold/15 pb-1">
                      Available Consultation Timeslot CAT *
                    </label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {timeslots.map((tmSlot) => {
                        const isChosen = prefTime === tmSlot;
                        return (
                          <button
                            key={tmSlot}
                            type="button"
                            onClick={() => setPrefTime(tmSlot)}
                            className={`px-3 py-2 rounded-sm border text-[11px] font-semibold transition-colors cursor-pointer ${
                              isChosen
                                ? "bg-corporate-gold text-corporate-blue-dark border-corporate-gold"
                                : "bg-corporate-blue-dark/50 text-gray-300 border-corporate-gold/15 hover:bg-corporate-blue-dark/85"
                            }`}
                          >
                            {tmSlot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Details summary */}
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Additional Project Specifications</label>
                    <textarea
                      rows={3}
                      value={inquiryText}
                      onChange={(e) => setInquiryText(e.target.value)}
                      placeholder="Briefly state target goals (e.g. 'I want to register a mining cooperative', 'I need a corporate profile done in 3 days')..."
                      className="w-full bg-corporate-blue-dark/50 border border-corporate-gold/15 text-white rounded-sm py-2.5 px-3 text-xs focus:outline-hidden focus:ring-1 focus:ring-corporate-gold resize-none"
                    />
                  </div>

                  {/* Trigger */}
                  <button
                    type="submit"
                    className="w-full bg-corporate-gold hover:bg-corporate-gold-light text-corporate-blue-dark font-black py-4 px-4 rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    Confirm Booking Voucher ➔
                  </button>
                </form>
              </div>
            ) : (
              /* Receipt Voucher look */
              <div className="bg-corporate-blue-light border border-corporate-gold/25 rounded-sm p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-fade-in">
                {/* Decorative visual accent */}
                <div className="absolute top-0 inset-x-0 h-3 bg-corporate-gold"></div>

                <div className="text-center pb-6 border-b border-corporate-gold/15">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full mx-auto flex items-center justify-center mb-3 border border-emerald-500/20 animate-pulse-subtle">
                    <TicketCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-white text-lg">Consultation Ticket Authorized!</h3>
                  <p className="text-xs text-gray-300 mt-1">Ticket ID: <span className="font-mono font-bold text-corporate-gold bg-corporate-blue-dark/60 border border-corporate-gold/25 px-2 py-0.5 rounded-sm">{bookedReceipt.id}</span></p>
                </div>

                <div className="py-6 space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-corporate-blue-dark/50 p-4 rounded-sm border border-corporate-gold/10">
                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wide text-[9px] font-bold">Client Full Name</span>
                      <span className="font-bold text-white text-sm">{bookedReceipt.fullName}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wide text-[9px] font-bold">Inquiry Topic Desk</span>
                      <span className="font-semibold text-corporate-gold text-xs">{bookedReceipt.serviceCategory}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-corporate-blue-dark/50 p-4 rounded-sm border border-corporate-gold/10">
                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wide text-[9px] font-bold">Assigned Consultation Date</span>
                      <span className="font-black text-white text-xs">{bookedReceipt.preferredDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block mb-0.5 uppercase tracking-wide text-[9px] font-bold">Scheduled Timeslot CAT</span>
                      <span className="font-black text-corporate-gold text-xs">{bookedReceipt.preferredTime}</span>
                    </div>
                  </div>

                  <div className="bg-corporate-blue-dark/50 p-4 rounded-sm border border-corporate-gold/10 text-center">
                    <span className="text-gray-400 block mb-1 uppercase tracking-wide text-[9px] font-bold">Official Connection Protocol</span>
                    <p className="font-semibold text-gray-200">A senior consultant from our Dedan Kimathi Office, Lusaka will dial your line (<span className="text-corporate-gold font-bold">{bookedReceipt.phone}</span>) or ping your WhatsApp instantly on the reserved slot.</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-corporate-gold/15 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={clearReceipt}
                    className="flex-1 bg-corporate-blue-dark border border-corporate-gold/20 hover:text-white text-gray-300 font-bold py-2.5 px-4 rounded-sm text-xs transition-colors text-center"
                  >
                    Set Another Booking
                  </button>
                  <a
                    href={`https://wa.me/260775449792?text=${encodeURIComponent(
                      `Hello Rapid, I checked my Consultation Ticket (Ticket ID: ${bookedReceipt.id}) for ${bookedReceipt.serviceCategory} scheduled on ${bookedReceipt.preferredDate} at ${bookedReceipt.preferredTime}. I would like to lock this entry.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-2.5 px-4 rounded-sm text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    Confirm Instant on WhatsApp ➔
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Area with Active schedules count and logs */}
          <div className="space-y-6">
            <div className="bg-corporate-blue-light border border-corporate-gold/15 text-white rounded-sm p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-20 h-20 bg-corporate-gold/5 rounded-full blur-xl animate-pulse"></div>
              <div>
                <h3 className="font-extrabold text-sm text-corporate-gold uppercase tracking-wider mb-2">Our Quality Clause</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We maintain a rigorous standard of consultation confidentiality. All statutory files, shareholding parameters, CV profiles, and student scores are handled securely.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-corporate-gold/10 flex items-center justify-between text-[11px] text-gray-400">
                <span>"Seeing You Succeeding"</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Active Desk
                </span>
              </div>
            </div>

            {/* Historic submissions logs to add absolute completeness */}
            <div className="bg-corporate-blue-light border border-corporate-gold/15 rounded-sm p-6 shadow-none">
              <div className="flex items-center justify-between border-b border-corporate-gold/15 pb-3 mb-4">
                <span className="font-extrabold text-xs text-white uppercase tracking-wider flex items-center gap-1">
                  <ListFilter className="w-4 h-4 text-corporate-gold" />
                  Your Active Slots ({historicBookings.length})
                </span>
              </div>

              {historicBookings.length > 0 ? (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {historicBookings.map((b) => (
                    <div
                      key={b.id}
                      className="p-3 bg-corporate-blue-dark/50 border border-corporate-gold/10 rounded-sm relative group hover:border-corporate-gold/35 transition-colors text-xs flex flex-col justify-between animate-fade-in"
                    >
                      <button
                        onClick={() => handleDeleteHistoryItem(b.id)}
                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity"
                        title="Delete scheduling entry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="font-bold text-white leading-tight pr-5 mb-1 truncate">
                        {b.fullName}
                      </div>
                      <div className="text-[10px] text-gray-400 font-bold mb-1 truncate">{b.serviceCategory}</div>
                      <div className="flex justify-between items-center text-[10px] text-gray-400 pt-1.5 border-t border-corporate-gold/10 border-dashed">
                        <span>{b.preferredDate}</span>
                        <span className="text-emerald-400 font-bold">{b.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400 text-xs">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                  No booked slots. Formulate your parameters above to schedule an session!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
