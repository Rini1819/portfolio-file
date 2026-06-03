import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import HomeOverview from "./components/HomeOverview";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ToolkitSection from "./components/ToolkitSection";
import CareerRoadmap from "./components/CareerRoadmap";
import ContactSection from "./components/ContactSection";
import Toast, { ToastItem } from "./components/Toast";
import { useEditMode } from "./components/EditModeContext";
import { Edit2, RefreshCw } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const { isEditMode, toggleEditMode, resetAllToDefault } = useEditMode();

  // Show a beautifully animated toast overlay on the top-level app layer
  const showToast = (message: string, type: "success" | "info" | "error" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleEdit = () => {
    toggleEditMode();
    showToast(
      !isEditMode
        ? "Live Edit Mode activated! Click any highlighted text across the portfolio to edit in real-time."
        : "Live Edit Mode deactivated. Your changes have been saved!",
      "success"
    );
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all customized portfolio to original text copy?")) {
      resetAllToDefault();
      showToast("All portfolio texts have been successfully reset to defaults.", "info");
    }
  };


  // Selector for currently displayed tab layout
  const renderActiveContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-16">
            <HomeOverview
              onContactClick={() => setActiveTab("contact")}
              onCaseStudiesClick={() => setActiveTab("case-studies")}
            />
            <ToolkitSection />
          </div>
        );
      case "experience":
        return <CareerRoadmap />;
      case "case-studies":
        return <CaseStudiesSection />;
      case "contact":
        return <ContactSection onShowToast={showToast} />;
      default:
        return (
          <div className="space-y-16">
            <HomeOverview
              onContactClick={() => setActiveTab("contact")}
              onCaseStudiesClick={() => setActiveTab("case-studies")}
            />
            <ToolkitSection />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-gray-900 font-sans flex flex-col justify-between">
      {/* Target header bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main layout with framer-motion transitions */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            {renderActiveContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Brand Footer */}
      <footer className="border-t border-gray-150 bg-white py-12 select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branding */}
            <div className="text-center md:text-left">
              <div className="font-sans font-extrabold text-md tracking-wider text-gray-900 flex items-center justify-center md:justify-start gap-1">
                <span>RINI SWING</span>
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-600"></span>
              </div>
              <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mt-1">
                Digital Strategist • Available for Hire
              </p>
            </div>

            {/* Quick anchors */}
            <div className="flex flex-wrap justify-center gap-6 font-sans text-xs tracking-wide text-gray-500 font-medium font-semibold">
              <button onClick={() => setActiveTab("overview")} className="hover:text-crimson-600 transition-colors">
                Expertise
              </button>
              <button onClick={() => setActiveTab("experience")} className="hover:text-crimson-600 transition-colors">
                Experience
              </button>
              <button onClick={() => setActiveTab("case-studies")} className="hover:text-crimson-600 transition-colors">
                Case Studies
              </button>
              <button onClick={() => setActiveTab("contact")} className="hover:text-crimson-600 transition-colors text-crimson-700">
                Contact
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-[11px] text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Rini Swing. All rights reserved. Indian Passport Holder &bull; Active Seek to Relocate to Dubai, UAE.
            </p>
            <div className="flex gap-4 font-mono text-[9px] text-gray-410">
              <span className="hover:text-gray-600 hover:underline cursor-pointer">Immediate Relocation</span>
              <span>&bull;</span>
              <span className="hover:text-gray-650 hover:underline cursor-pointer">Bespoke Inquiries</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Live Edit Control Panel */}
      <div className="fixed bottom-6 left-6 z-[90] flex items-center">
        <div className="flex items-center gap-3 bg-white border border-gray-150 rounded-full px-4 py-2.5 shadow-xl select-none">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isEditMode ? "bg-emerald-400" : "bg-gray-400"}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isEditMode ? "bg-emerald-500" : "bg-gray-400"}`}></span>
            </span>
            <span className="font-mono text-[10px] font-bold text-gray-700 uppercase tracking-wider">
              {isEditMode ? "Editor Active" : "Interactive Edit"}
            </span>
          </div>

          <div className="h-4 w-[1px] bg-gray-200" />

          <button
            onClick={handleToggleEdit}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-sans font-bold text-[9px] uppercase tracking-wider transition-all duration-150 ${
              isEditMode
                ? "bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm"
                : "bg-crimson-600 text-white hover:bg-crimson-700 shadow-sm"
            }`}
            title={isEditMode ? "Turn off Live Editing" : "Enable Live Editing of Texts"}
          >
            <Edit2 className="w-3 h-3" />
            <span>{isEditMode ? "Finish" : "Edit Text"}</span>
          </button>

          {isEditMode && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1 rounded-full bg-gray-100 hover:bg-gray-200 px-3 py-1 font-sans font-bold text-[9px] uppercase tracking-wider text-gray-600 transition-colors"
              title="Reset all texts to originals"
            >
              <RefreshCw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Absolute Toast Container overlying the window */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} onClose={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
