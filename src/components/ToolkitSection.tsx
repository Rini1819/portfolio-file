import { TOOLKIT_ITEMS } from "../data";
import { ToolItem } from "../types";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import Editable from "./Editable";

// Helper to dynamic resolve Lucide icon components from static string property names
function IconResolver({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Cpu className={className} />;
  return <IconComponent className={className} />;
}

export default function ToolkitSection() {
  const categories = [
    "AI Content & Video",
    "Strategic Workflow",
    "Analytics & Social Ad Operations",
    "Verified Badges",
  ];

  const strategicArsenal = [
    { name: "B2B LinkedIn Architecture", value: 95, description: "C-suite profiling, authority editorial design, newsletter creation, and corporate networking maps." },
    { name: "Premium Esthetic Guarding", value: 98, description: "Color grading controls, layout pacing, font selection, and creative standards suited for HNWI eyes." },
    { name: "Lead Capture DM Engineering", value: 94, description: "Private message routing, dynamic CRM integrations, automated surveys, and appointment bookings." },
    { name: "Performance Ad Targeting", value: 92, description: "Custom audience structures, retargeting lists, and multi-channel algorithmic budget allocation." }
  ];

  return (
    <div className="space-y-16 py-6 sm:py-10 px-4">
      {/* Intro section */}
      <div className="mx-auto max-w-5xl text-center space-y-2">
        <h2 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-gray-900">
          <Editable id="toolkit-main-title" defaultText="Strategic Arsenal & AI Tools" component="h2" />
        </h2>
        <p className="font-sans text-sm text-gray-500 max-w-xl mx-auto">
          <Editable id="toolkit-main-desc" defaultText="Combining deep GCC market intelligence with advanced AI automations to multiply operational leverage by 10x." component="p" />
        </p>
      </div>

      {/* Strategic Arsenal Progress Grid */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
        <div className="space-y-4">
          <span className="font-mono text-xs font-bold text-crimson-600 uppercase tracking-widest block">
            <Editable id="toolkit-sub-cap" defaultText="Practical Capabilities" component="span" />
          </span>
          <h3 className="font-sans font-extrabold text-xl text-gray-900 tracking-tight leading-tight">
            <Editable id="toolkit-domain-title" defaultText="Strategic Marketing Domain" component="h3" />
          </h3>
          <p className="font-sans text-xs text-gray-500 leading-relaxed">
            <Editable id="toolkit-domain-desc" defaultText="I don't just 'post pictures' on social channels. I design end-to-end user acquisition pipelines. Every post is formatted as a custom content pillar, every vertical video is color-matched to luxury standards, and all incoming interactions are tracked as verified revenue." component="p" />
          </p>
          <div className="pt-4 flex flex-wrap gap-4 select-none">
            <div className="px-3.5 py-1.5 rounded-lg bg-gray-50 border border-gray-100 font-mono text-[10px] text-gray-500">
              <Editable id="toolkit-badge-1" defaultText="Dubai Real Estate Focus" component="span" />
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-gray-50 border border-gray-100 font-mono text-[10px] text-gray-500">
              <Editable id="toolkit-badge-2" defaultText="Bahrain Medical Aesthetics" component="span" />
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-gray-50 border border-gray-100 font-mono text-[10px] text-gray-500">
              <Editable id="toolkit-badge-3" defaultText="HNWI Lead Funnels" component="span" />
            </div>
          </div>
        </div>

        {/* Capability progressions bars list */}
        <div className="space-y-5">
          {strategicArsenal.map((a, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center justify-between font-sans font-semibold text-xs text-gray-800">
                <span>
                  <Editable id={`toolkit-arsenal-${i}-name`} defaultText={a.name} component="span" />
                </span>
                <span className="font-mono text-[11px] text-crimson-600 font-bold">{a.value}% Mastery</span>
              </div>
              <div className="h-2 w-full bg-gray-150 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${a.value}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-crimson-600 to-crimson-500 rounded-full"
                />
              </div>
              <p className="font-sans text-[11px] text-gray-400">
                <Editable id={`toolkit-arsenal-${i}-desc`} defaultText={a.description} component="p" />
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI & Automation Landscape Cards mapping */}
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-1 text-center md:text-left">
          <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest block">
            <Editable id="toolkit-sub-lev" defaultText="Leverage Architecture" component="span" />
          </span>
          <h3 className="font-sans font-extrabold text-xl text-gray-900 tracking-tight">
            <Editable id="toolkit-landscape-title" defaultText="AI & Strategic Productivity Toolkit" component="h3" />
          </h3>
          <p className="font-sans text-xs text-gray-500 max-w-md">
            <Editable id="toolkit-landscape-desc" defaultText="The private workflow design I deploy to automate redundant operations and cut customer response times." component="p" />
          </p>
        </div>

        {/* Grid divided by category tags */}
        <div className="space-y-10">
          {categories.map((cat) => {
            const items = TOOLKIT_ITEMS.filter((t) => t.category === cat);
            const catKey = cat.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={cat} className="space-y-4">
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-2">
                  <Editable id={`toolkit-cat-${catKey}`} defaultText={cat} component="h4" />
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {items.map((it, idx) => (
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      key={idx}
                      className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:border-crimson-100/50 flex gap-4 transition-all"
                    >
                      <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-crimson-50 text-crimson-600 animate-pulse">
                        <IconResolver name={it.icon} className="w-5 h-5" />
                      </div>

                      <div className="space-y-2 flex-grow">
                        <h5 className="font-sans font-bold text-sm text-gray-900 leading-none">
                          <Editable id={`toolkit-item-${catKey}-${idx}-name`} defaultText={it.name} component="h5" />
                        </h5>
                        <p className="font-sans text-xs text-gray-500 leading-relaxed">
                          <Editable id={`toolkit-item-${catKey}-${idx}-desc`} defaultText={it.description} component="p" />
                        </p>
                        <div className="pt-1.5">
                          <span className="inline-block font-mono text-[10px] text-crimson-700 bg-crimson-50/70 border border-crimson-100/20 px-2 py-0.5 rounded-md font-semibold">
                            <Editable id={`toolkit-item-${catKey}-${idx}-gain`} defaultText={it.efficiencyGain} component="span" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
