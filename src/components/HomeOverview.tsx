import { motion } from "motion/react";
import { TrendingUp, Sparkles, Target, ArrowRight, Star, Cpu, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import Editable from "./Editable";
import EditableImage from "./EditableImage";

interface HomeOverviewProps {
  onContactClick: () => void;
  onCaseStudiesClick: () => void;
}

export default function HomeOverview({ onContactClick, onCaseStudiesClick }: HomeOverviewProps) {
  // Animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16 py-6 sm:py-10"
    >
      {/* Hero Intro section */}
      <section className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center space-y-6">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-crimson-50 border border-crimson-100/50"
          >
            <Sparkles className="w-3.5 h-3.5 text-crimson-600 animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-crimson-700">
              <Editable id="hero-tag" defaultText="Actively Seeking Roles in Dubai • GCC Market Base" />
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-[1.1] text-balance"
          >
            <Editable id="hero-title-main" defaultText="Digital Growth Strategist" /> &amp; <br />
            <span className="text-crimson-600">
              <Editable id="hero-title-sub" defaultText="Social Media Specialist" />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-2xl font-sans text-xs sm:text-sm text-gray-650 leading-relaxed text-balance"
          >
            <Editable
              id="hero-paragraph-text"
              defaultText="With 8+ years of high-performance social media marketing operations execution across Bahrain and India, I specialize in transforming digital footprints into high-status engagement channels. Now focused on relocating my expertise to Dubai, UAE to assist progressive brands and teams."
              component="span"
            />
          </motion.p>


          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onContactClick}
              className="flex items-center gap-2 rounded-xl bg-gray-900 hover:bg-gray-800 px-6 py-3.5 font-sans font-bold text-xs tracking-wide uppercase text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Connect with Rini</span>
              <Mail className="w-4 h-4 text-crimson-400" />
            </button>
            <button
              onClick={onCaseStudiesClick}
              className="flex items-center gap-2 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 px-6 py-3.5 font-sans font-bold text-xs tracking-wide uppercase text-gray-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4 text-crimson-600" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Profile Photo Spotlight - Capturing Visual Polish from the Screenshots */}
      <section className="px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-4xl rounded-2xl border border-gray-150 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Headshot container */}
          <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-xl overflow-hidden shrink-0 shadow-md">
            <EditableImage 
              id="profile-spotlight-photo"
              defaultImage="/src/assets/images/rini_photo_original_1780218916813.png" 
              alt="Rini Swing Portrait"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent pointer-events-none z-10" />
          </div>

          <div className="space-y-4 text-center md:text-left flex-grow">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="font-mono text-[9px] uppercase font-bold text-crimson-750 bg-crimson-50 border border-crimson-100/50 px-2.5 py-1 rounded-md">
                <Editable id="spotlight-tag" defaultText="Professional Profile" />
              </span>
              <span className="font-mono text-[9px] uppercase text-gray-400">
                <Editable id="spotlight-tag-sub" defaultText="8+ Years of Verified Results" />
              </span>
            </div>
            
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-gray-900 tracking-tight leading-tight">
              <Editable id="spotlight-heading" defaultText="A Seasoned Expert with Roots in Agency & Telecom Sectors" />
            </h3>
            
            <p className="font-sans text-xs text-gray-500 leading-relaxed">
              <Editable id="spotlight-description" defaultText="Throughout my journey navigating client-facing accounts and organic social media metrics at Nuetel Communications and Crayons Global Media in Bahrain, as well as fintech campaigns in India, I have mastered the art of building audience trust. I bridge the gap between creative visual execution and robust performance metrics." component="span" />
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 max-w-sm mx-auto md:mx-0">
              <div className="border-l-3 border-crimson-600 pl-3">
                <span className="font-mono text-[9px] uppercase text-gray-400 block leading-tight">Past Markets</span>
                <span className="font-sans text-xs font-bold text-gray-800">
                  <Editable id="spotlight-past-markets" defaultText="Bahrain & India" />
                </span>
              </div>
              <div className="border-l-3 border-crimson-600 pl-3">
                <span className="font-mono text-[9px] uppercase text-gray-400 block leading-tight">Target Role</span>
                <span className="font-sans text-xs font-bold text-gray-800">
                  <Editable id="spotlight-target-role" defaultText="Dubai (Immediate)" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Summary Highlights */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center md:text-left max-w-md space-y-1">
            <h2 className="font-sans font-bold text-xl text-gray-900 tracking-tight">
              Core Competencies I Bring to Your Team
            </h2>
            <p className="font-sans text-xs text-gray-500">
              Acquisition metrics, creative workflows, and platform expertise designed to hit the ground running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Capability 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group rounded-xl bg-white border border-gray-150 p-6 shadow-xs flex flex-col justify-between hover:border-crimson-200 transition-all"
            >
              <div className="space-y-3">
                <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-crimson-50 text-crimson-600 group-hover:bg-crimson-600 group-hover:text-white transition-colors duration-200">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-sans font-bold text-md text-gray-900 group-hover:text-crimson-600 transition-colors">
                  Organic Growth Architecture
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Proven recipe for generating audience lift and authentic community reach with 0% paid ad spend. Master of localized storytelling, visual trends, and high-pacing video shorts.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-50 font-mono text-[9px] text-gray-400 uppercase tracking-wider">
                Key Focus: 1,500+ followers sprint
              </div>
            </motion.div>

            {/* Capability 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group rounded-xl bg-white border border-gray-150 p-6 shadow-xs flex flex-col justify-between hover:border-crimson-200 transition-all"
            >
              <div className="space-y-3">
                <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-crimson-50 text-crimson-600 group-hover:bg-crimson-600 group-hover:text-white transition-colors duration-200">
                  <Cpu className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-sans font-bold text-md text-gray-900 group-hover:text-crimson-600 transition-colors">
                  AI Workflow Integration
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Utilizing next-generation developer tooling, LLMs, and post-production accelerators to double execution speeds, automate comment inquiries, and streamline brand assets.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-50 font-mono text-[9px] text-gray-400 uppercase tracking-wider">
                Key Focus: 15+ weekly hours saved
              </div>
            </motion.div>

            {/* Capability 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group rounded-xl bg-white border border-gray-150 p-6 shadow-xs flex flex-col justify-between hover:border-crimson-200 transition-all"
            >
              <div className="space-y-3">
                <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-crimson-50 text-crimson-600 group-hover:bg-crimson-600 group-hover:text-white transition-colors duration-200">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <h3 className="font-sans font-bold text-md text-gray-900 group-hover:text-crimson-600 transition-colors">
                  Account Management
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  Managing corporate relationship dynamics and design timelines across multi-brand agency portfolios. Deep understanding of retail flow conversions and luxury styling standards.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-gray-50 font-mono text-[9px] text-gray-400 uppercase tracking-wider">
                Key Focus: 12+ brand channels unified
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Recruiter Callcard banner */}
      <section className="px-4 sm:px-6 lg:px-8 border-t border-gray-100 pt-12">
        <div className="mx-auto max-w-4xl bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-full bg-crimson-100 flex items-center justify-center text-crimson-750">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans font-bold text-sm text-gray-900 leading-tight">
                Immediate Relocation Potential
              </p>
              <p className="font-sans text-xs text-gray-500">
                Indian passport holder with immediate flight readiness and experience base in Bahrain & India.
              </p>
            </div>
          </div>
          <button 
            onClick={onContactClick}
            className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase text-crimson-700 bg-crimson-50/70 hover:bg-crimson-100/75 border border-crimson-200/50 px-4 py-2.5 rounded-lg transition"
          >
            <span>Request Resume / Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </motion.div>
  );
}
