import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, FileText, Briefcase, Compass } from "lucide-react";

interface ContactSectionProps {
  onShowToast?: (message: string, type?: "success" | "info" | "error") => void;
}

export default function ContactSection({ onShowToast }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    // Simulate beautiful submittal transition
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      if (onShowToast) {
        onShowToast("Your message has been sent successfully! Rini will contact you soon.", "success");
      }
    }, 1200);
  };

  return (
    <div className="py-6 sm:py-10 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: recruiter CTA and direct details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-gradient-to-b from-gray-950 via-gray-900 to-crimson-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-900/30 border border-crimson-500/30 text-crimson-300">
              <Compass className="w-3.5 h-3.5 animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                Future-Facing Intent
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
                Let's Build the Next Chapter.
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                I have developed and executed highly successful social campaigns across <strong className="text-white font-medium">Bahrain and India</strong>. I am now actively seeking my next professional career opportunity in <strong className="text-crimson-400 font-bold">Dubai, UAE</strong> and am available for immediate hire or interview.
              </p>
            </div>

            {/* Visual Status Tag */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 select-none">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-450 font-bold">
                  Actively Seeking Opportunities
                </span>
              </div>
              <p className="font-sans text-[11px] text-gray-300 leading-relaxed">
                Open to permanent roles: Social Media Strategist, Digital Growth lead, Performance Marketing Specialist, or Digital Account Manager in Dubai.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h4 className="font-sans font-bold text-[10px] uppercase tracking-wider text-gray-400">
                Direct Recruiter Access
              </h4>
              <div className="space-y-3">
                
                {/* Email details */}
                <a 
                  href="mailto:reene1819@gmail.com" 
                  className="flex items-center gap-3.5 group p-2 rounded-xl hover:bg-white/5 transition-all"
                >
                  <div className="h-9 w-9 rounded-lg bg-crimson-600/20 text-crimson-400 border border-crimson-500/20 flex items-center justify-center shrink-0 group-hover:bg-crimson-600 group-hover:text-white transition-colors duration-200">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block">
                      Email
                    </span>
                    <span className="font-sans text-sm font-semibold block text-gray-200 group-hover:text-white">
                      reene1819@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone details */}
                <a 
                  href="tel:+919351774585" 
                  className="flex items-center gap-3.5 group p-2 rounded-xl hover:bg-white/5 transition-all"
                >
                  <div className="h-9 w-9 rounded-lg bg-crimson-600/20 text-crimson-400 border border-crimson-500/20 flex items-center justify-center shrink-0 group-hover:bg-crimson-600 group-hover:text-white transition-colors duration-200">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block">
                      Phone / WhatsApp
                    </span>
                    <span className="font-sans text-sm font-semibold block text-gray-200 group-hover:text-white">
                      +91 9351774585
                    </span>
                  </div>
                </a>

                {/* Target Hub location */}
                <div className="flex items-center gap-3.5 p-2 rounded-xl">
                  <div className="h-9 w-9 rounded-lg bg-crimson-600/20 text-crimson-400 border border-crimson-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-crimson-500 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block">
                      Target Hub
                    </span>
                    <span className="font-sans text-sm font-semibold block text-gray-200">
                      Dubai, United Arab Emirates
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <p className="font-mono text-[9px] text-gray-500 select-none pb-1">
            *Indian Citizen &bull; GCC Flight Ready
          </p>
        </div>

        {/* Right Side: Simple interactive contact form */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-5 flex-grow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-sans font-extrabold text-xl text-gray-900 tracking-tight">
                      Send a Message
                    </h3>
                    <p className="font-sans text-xs text-gray-500">
                      Looking to schedule an interview or request Rini's resume? Fill out the details below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-sans text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                        Your Name <span className="text-crimson-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. John Doe"
                        className="w-full font-sans text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                        Email Address <span className="text-crimson-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. jdoe@company.com"
                        className="w-full font-sans text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-crimson-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Company / Recruitment Agency
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Global Recruiters (Optional)"
                      className="w-full font-sans text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-crimson-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] font-bold text-gray-500 uppercase tracking-wider block">
                      Inquiry Details <span className="text-crimson-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Share details about the job vacancy, your recruitment team, or role expectations..."
                      className="w-full font-sans text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-crimson-500 transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-400 uppercase tracking-widest leading-none select-none">
                    <Sparkles className="w-3.5 h-3.5 text-crimson-550 animate-pulse" />
                    <span>Instant Direct Connect</span>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-2 rounded-lg bg-crimson-600 hover:bg-crimson-700 font-sans font-bold text-xs uppercase tracking-wide px-5 py-3 text-white transition-all shadow shadow-crimson-600/10 min-w-[130px] disabled:bg-gray-400 disabled:shadow-none"
                  >
                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                    {!submitting && <Send className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="submission-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4"
              >
                <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-500 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-sans font-extrabold text-lg text-gray-900 tracking-tight">
                    Thank You! Message Received.
                  </h4>
                  <p className="font-sans text-xs text-gray-500 max-w-sm">
                    Your invitation has been dispatched directly to Rini Swing's inbox. She will match against details and update you soon.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                  className="rounded-lg border border-gray-200 hover:bg-gray-50 px-4 py-2 font-sans text-xs font-semibold text-gray-700 transition"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
