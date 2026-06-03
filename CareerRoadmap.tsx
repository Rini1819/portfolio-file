import { TIMELINE } from "../data";
import { motion } from "motion/react";
import { Award, Briefcase, MapPin, Calendar, CheckSquare, Sparkles } from "lucide-react";

export default function CareerRoadmap() {
  return (
    <div className="space-y-12 py-6 sm:py-10 px-4">
      
      {/* Page Title & Intro */}
      <div className="mx-auto max-w-5xl text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-crimson-50 border border-crimson-100/50 text-crimson-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest">
            A Journey of Verified Impact
          </span>
        </div>
        <h2 className="font-sans font-extrabold text-2xl sm:text-4xl tracking-tight text-gray-900">
          Career Evolution
        </h2>
        <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
          A decade of driving growth across telecommunications, fintech, and aviation within competitive markets. Defined by operational excellence, multi-brand alignment, and proven regional leadership.
        </p>
      </div>

      {/* Stats Counter Strip (From her visual template in Screenshot 2) */}
      <div className="mx-auto max-w-5xl bg-white border border-gray-150 rounded-2xl p-5 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-6 text-center select-none">
        <div className="space-y-1">
          <span className="font-sans font-extrabold text-2xl text-crimson-600 block">10+</span>
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">Years Experience</span>
        </div>
        <div className="space-y-1 md:border-l md:border-gray-100">
          <span className="font-sans font-extrabold text-2xl text-crimson-600 block">1.5k+</span>
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">Organic Sprint</span>
        </div>
        <div className="space-y-1 md:border-l md:border-gray-100">
          <span className="font-sans font-extrabold text-2xl text-crimson-600 block">8-10</span>
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">Team Leadership</span>
        </div>
        <div className="space-y-1 md:border-l md:border-gray-100">
          <span className="font-sans font-extrabold text-2xl text-crimson-600 block">GCC</span>
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-wider block">Regional Footprint</span>
        </div>
      </div>

      {/* Timeline Wrapper Grid */}
      <div className="mx-auto max-w-4xl relative">
        {/* Aesthetic Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-150 transform md:-translate-x-1/2 pointer-events-none" />

        <div className="space-y-12">
          {TIMELINE.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className={`flex flex-col md:flex-row items-stretch gap-6 relative md:justify-between ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline center bullet pin */}
                <div className="absolute left-4 md:left-1/2 h-8 w-8 rounded-full bg-crimson-50 border-2 border-crimson-600 shadow transform -translate-x-[15px] md:-translate-x-[16px] z-10 flex items-center justify-center text-crimson-650 shrink-0">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Left (or Right) Content Card Side */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-xs hover:border-crimson-200 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] font-bold text-crimson-700 bg-crimson-50 px-2.5 py-1 rounded-md border border-crimson-100/50">
                        {step.year}
                      </span>
                      <div className="flex items-center gap-1 font-mono text-[10px] text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-crimson-600" />
                        <span>{step.location}</span>
                      </div>
                    </div>

                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-gray-900 tracking-tight leading-snug">
                      {step.role}
                    </h3>
                    <p className="font-sans text-[11px] font-bold text-gray-500 mb-4 uppercase tracking-wider">
                      {step.company}
                    </p>

                    <p className="font-sans text-xs text-gray-650 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Impact Bullets */}
                    <div className="space-y-2 pt-3.5 border-t border-gray-50">
                      <h4 className="font-sans font-bold text-[10px] uppercase tracking-wider text-gray-400 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-crimson-600" />
                        <span>Key Achievements</span>
                      </h4>
                      <div className="space-y-2">
                        {step.outcomes.map((out, outIdx) => (
                          <div key={outIdx} className="flex items-start gap-2">
                            <CheckSquare className="w-3.5 h-3.5 text-crimson-500 shrink-0 mt-0.5" />
                            <p className="font-sans text-xs text-gray-700 leading-relaxed">
                              {out}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {step.tags.map((tg, tgIdx) => (
                        <span
                          key={tgIdx}
                          className="font-mono text-[9px] text-gray-400 bg-gray-50 px-2.5 py-0.5 rounded border border-gray-100"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Aesthetic Spacing Placeholder Side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
