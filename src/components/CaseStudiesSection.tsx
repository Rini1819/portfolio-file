import { useState } from "react";
import { CASE_STUDIES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, FileText, Landmark, Calendar, Target, CheckCircle2 } from "lucide-react";
import EditableImage from "./EditableImage";

export default function CaseStudiesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const filterCategories = ["All", "Social Strategy", "On-Ground Campaigns", "Video Storytelling"];

  // Mapping filter name to industry values inside CASE_STUDIES
  const getFilteredStudies = () => {
    if (selectedIndustry === "All") return CASE_STUDIES;
    return CASE_STUDIES.filter(c => c.industry === selectedIndustry);
  };

  const filteredStudies = getFilteredStudies();

  // Animation presets
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="space-y-12 py-6 sm:py-10">
      {/* Intro and Filters */}
      <div className="mx-auto max-w-5xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-gray-900">
            Case Studies & Verification
          </h2>
          <p className="font-sans text-sm text-gray-500 max-w-md">
            Direct, data-signed outcomes confirming revenue growth, lead expansion, and brand elevation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-gray-100 rounded-xl border border-gray-200/50">
          {filterCategories.map((cat) => {
            const isSelected = selectedIndustry === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedIndustry(cat)}
                className={`relative rounded-lg px-3.5 py-1.5 font-sans font-semibold text-xs transition-all focus:outline-none ${
                  isSelected ? "bg-white text-crimson-700 shadow-sm" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Case studies list mapping */}
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => (
              <motion.div
                layout
                variants={cardVariants}
                key={study.id}
                exit={{ opacity: 0, scale: 0.95 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-gray-200 transition-all duration-300"
              >
                {/* Header card info */}
                <div className="p-6 sm:p-8 bg-gray-50 border-b border-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-crimson-50 text-crimson-700 rounded-full border border-crimson-100/50">
                          {study.industry}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400">
                          {study.location}
                        </span>
                      </div>
                      <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight">
                        {study.title}
                      </h3>
                      <p className="font-sans text-xs text-gray-400">
                        Client: <strong className="text-gray-700">{study.client}</strong> &bull; Engagement: <strong className="text-gray-700">{study.engagementPeriod}</strong>
                      </p>
                    </div>

                    {/* Quick Budget / Metrics Tags */}
                    {study.adSpendText && (
                      <div className="text-right">
                        <div className="font-mono text-xs text-gray-500">{study.adSpendText}</div>
                        <div className="font-sans font-bold text-sm text-crimson-600 font-semibold">{study.roasText}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content split in Grid - Stats / Left copy / SVG charts */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left stats & text column */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Metrics grid block */}
                    <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                      {study.impactMetrics.map((met, index) => (
                        <div key={index} className="space-y-1 select-none">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 block truncate">
                            {met.label}
                          </span>
                          <span className="font-sans font-extrabold text-lg sm:text-2xl text-gray-900 block tracking-tight">
                            {met.value}
                          </span>
                          <span className="font-sans text-[10px] text-gray-400 leading-tight block">
                            {met.subtext}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Challenge Solution blocks */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">
                          The Core Business Challenge
                        </h4>
                        <p className="font-sans text-xs text-gray-600 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">
                          Rini Swing's Strategic Solution
                        </h4>
                        <p className="font-sans text-xs text-gray-600 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Verified outputs + Custom SVG Month chart and list */}
                  <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-gray-50 lg:pl-8">
                    {/* Bullet Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">
                        Verified Business Outcomes
                      </h4>
                      <div className="space-y-2.5">
                        {study.results.map((res, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-crimson-600 shrink-0 mt-0.5" />
                            <p className="font-sans text-xs text-gray-700 leading-relaxed">
                              {res}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Campaign Portfolio Image Showcase */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400">
                          Portfolio Showcase
                        </h4>
                        <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-crimson-700 bg-crimson-50 px-2.5 py-1 rounded border border-crimson-100/30">
                          Verified Asset
                        </span>
                      </div>

                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 group/img">
                        <EditableImage
                          id={`case-study-image-${study.id}`}
                          defaultImage={study.imagePath || ""}
                          alt={`${study.title} Campaign Preview`}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                        />
                        {/* Overlay caption watermark */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent p-4 flex items-end justify-between text-white z-10 pointer-events-none">
                          <span className="font-sans font-medium text-[11px] tracking-wide text-white/95">
                            {study.client} &bull; {study.industry}
                          </span>
                          <span className="font-mono text-[9px] font-bold text-white/90 bg-white/10 backdrop-blur-xs px-2 py-0.5 rounded border border-white/25 uppercase tracking-wider leading-none">
                            Portfolio Match
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
