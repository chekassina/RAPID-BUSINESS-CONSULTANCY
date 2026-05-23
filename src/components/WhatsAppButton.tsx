import { useState, useEffect } from "react";
import { COMPANY_CONTACTS } from "../data";
import { Send, Clock, Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  // Trigger a soft notification badge after a few seconds to draw the user's attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (presetMsg?: string) => {
    const finalText = presetMsg || message || COMPANY_CONTACTS.whatsappWelcomeMessage;
    const cleanNum = COMPANY_CONTACTS.whatsappNumber.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${cleanNum}?text=${encodeURIComponent(finalText)}`;
    window.open(url, "_blank", "noreferrer");
    setIsOpen(false);
  };

  const templates = [
    { title: "🏢 Company Registration", text: "Hello Rapid! I would like details about PACRA and ZRA registration." },
    { title: "🎓 Academic Scholarships", text: "Hello! I want to inquire about international scholarships and study abroad." },
    { title: "📊 Company Profile design", text: "Hello. I would like help designing an executive company profile." },
    { title: "📈 Accounting & Tax support", text: "Hi, I need assistance with bookkeeping or ZRA tax declarations." }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Soft floating welcome dialog */}
      {showNotification && !isOpen && (
        <div className="bg-white text-gray-800 p-4 rounded-xl shadow-2xl border border-emerald-50 max-w-xs mb-3 animate-fade-in-up flex flex-col gap-1 text-xs relative">
          <button
            onClick={() => setShowNotification(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 font-bold"
          >
            ×
          </button>
          <div className="flex items-center gap-1.5 font-bold text-emerald-600">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultant Online</span>
          </div>
          <p className="text-gray-600 leading-relaxed pr-2">
            “Seeing You Succeeding Is Our Pride.” Chat with our Lusaka team on WhatsApp for immediate solutions!
          </p>
          <button
            onClick={() => {
              setIsOpen(true);
              setShowNotification(false);
            }}
            className="text-left font-bold text-corporate-blue hover:text-corporate-blue-light mt-1 flex items-center gap-0.5"
          >
            Start WhatsApp Chat →
          </button>
        </div>
      )}

      {/* Expanded Interactive Chat Panel */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-4 animate-fade-in-up duration-300">
          {/* Header Segment */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg text-white">
                  RB
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-600 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm">Rapid Business Helpdesk</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                  <span>Online • Quick Response Team</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-emerald-100 font-extrabold text-lg p-1.5 rounded-full hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* Chat Container */}
          <div className="p-4 bg-gray-50 max-h-80 overflow-y-auto space-y-3.5">
            {/* Automatic assistant intro */}
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-xs text-xs text-gray-600 max-w-[85%]">
              <p className="font-semibold text-corporate-blue mb-1">Rapid Business Desk</p>
              Greeting from Lusaka! Choose an option or write below to send directly to our executive chat line.
            </div>

            {/* Quick Templates Buttons */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Select Inquiry Template</p>
              <div className="grid grid-cols-1 gap-1.5">
                {templates.map((tmpl, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(tmpl.text)}
                    className="w-full text-left bg-white hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 p-2.5 rounded-lg text-xs text-gray-700 font-semibold transition-all duration-200 flex items-center justify-between group"
                  >
                    <span>{tmpl.title}</span>
                    <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">Send ➔</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Message Input Box */}
          <div className="p-3 border-t border-gray-100 flex items-center gap-2 bg-white">
            <input
              type="text"
              placeholder="Type custom inquiry message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-gray-100 border-0 rounded-lg py-2 px-3 text-xs text-gray-800 placeholder:text-gray-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors"
              aria-label="Send WhatsApp Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-gray-100/60 p-1.5 text-center text-[10px] text-gray-400 flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Operational Hours: 08:00 - 17:00 (CAT)</span>
          </div>
        </div>
      )}

      {/* Core Floating WhatsApp Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 active:scale-95 group focus:outline-hidden relative"
        id="floating-whatsapp-trigger"
        aria-label="Chat on WhatsApp"
      >
        {/* Soft custom surrounding indicator ring */}
        <span className="absolute -inset-1 rounded-full border-2 border-emerald-500/20 animate-ping opacity-75"></span>

        <svg className="w-7 h-7 fill-current transform transition-transform group-hover:rotate-12" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515.003 10.018-4.5 10.022-10.045.003-2.684-1.038-5.207-2.93-7.104C16.475 1.558 13.958.514 11.285.514c-5.52 0-10.019 4.499-10.022 10.042-.001 1.744.457 3.447 1.328 4.952L1.57 21.05l5.077-1.331z" />
        </svg>

        {/* Small live notification point */}
        {showNotification && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full"></span>
        )}
      </button>
    </div>
  );
}
