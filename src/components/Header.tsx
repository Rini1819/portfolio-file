import { motion } from "motion/react";
import { Sparkles, MapPin, Menu, X, Mail } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "case-studies", label: "Case Studies" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Branding Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab("overview");
              setMobileMenuOpen(false);
            }}
            className="flex flex-col items-start font-sans tracking-tight"
          >
            <div className="flex items-center gap-1.5 font-sans font-extrabold text-lg text-gray-900 tracking-wide">
              <span>RINI SWING</span>
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-600"></span>
            </div>
            <span className="font-mono text-[9px] text-gray-505 uppercase tracking-widest leading-none mt-0.5">
              Digital Strategist • Social Specialist
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-4 py-2 font-sans font-medium text-sm transition-colors text-gray-600 hover:text-crimson-600 focus:outline-none"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabOutline"
                    className="absolute inset-0 rounded-lg bg-crimson-50/75 text-crimson-600 border border-crimson-100/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? "text-crimson-750 font-bold" : ""}`}>
                  {tab.id === "contact" && (
                    <Mail className="inline-block w-3.5 h-3.5 mr-1.5 text-crimson-600" />
                  )}
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Location Indicators & Action button */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-gray-550 px-3 py-1 bg-gray-50 rounded-full border border-gray-100">
            <MapPin className="w-3.5 h-3.5 text-crimson-650 animate-pulse" />
            <span>Seeking Dubai Roles • India & Bahrain Experience</span>
          </div>
          <button
            onClick={() => setActiveTab("contact")}
            className="rounded-lg bg-crimson-600 hover:bg-crimson-700 font-sans font-semibold text-xs tracking-wide uppercase px-4 py-2.5 text-white shadow-sm shadow-crimson-600/10 transition-all duration-205 hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Rini
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setActiveTab("contact")}
            className="sm:hidden rounded-lg bg-crimson-600 px-3.5 py-1.5 font-sans font-bold text-[10px] uppercase text-white shadow"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden w-full border-t border-gray-100 bg-white px-4 py-3 shadow-md"
        >
          <div className="flex flex-col gap-1.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 font-sans font-medium text-sm transition-all ${
                    isActive
                      ? "bg-crimson-50 text-crimson-700 border-l-4 border-crimson-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center">
                    {tab.id === "contact" && <Mail className="w-3.5 h-3.5 mr-1.5 text-crimson-500" />}
                    {tab.label}
                  </span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-crimson-600"></span>}
                </button>
              );
            })}
            <div className="mt-2 border-t border-gray-100 pt-3 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-1 font-mono text-[10px] text-gray-500 py-1 bg-gray-50 rounded-md border border-gray-100">
                <MapPin className="w-3 h-3 text-crimson-600 animate-pulse" />
                <span>Dubai Bound • India & Bahrain Core</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveTab("contact");
                }}
                className="w-full text-center rounded-lg bg-crimson-600 hover:bg-crimson-700 py-2.5 font-sans font-semibold text-xs tracking-wide uppercase text-white shadow"
              >
                Hire Rini
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
