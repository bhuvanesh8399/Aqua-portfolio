import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const phrases = [
  "I build AI-powered dashboards.",
  "I design automation systems.",
  "I create full-stack products.",
  "I solve real-world problems with software."
];

const floatingCards = [
  { label: "AI Systems", value: "7+", color: "aqua" },
  { label: "Focus", value: "Full Stack + AI", color: "emerald" },
  { label: "Verified Skills", value: "HackerRank", color: "purple" },
  { label: "Theme", value: "Aqua Intelligence", color: "aqua" }
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
        >
          <Sparkles size={16} />
          Aqua Intelligence Command Center
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          Bhuvanesh D
          <span className="mt-3 block bg-gradient-to-r from-aqua-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
            AI Product Builder
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
        >
          Software Engineer Aspirant and Full Stack Developer building intelligent
          systems through AI, automation, dashboards, prediction, and practical
          real-world workflows.
        </motion.p>

        <motion.div
          key={phrases[phraseIndex]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-6 inline-flex min-h-12 items-center rounded-2xl border border-cyan-300/15 bg-white/[0.055] px-5 text-aqua-300 shadow-aqua"
        >
          {phrases[phraseIndex]}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.26, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-ocean-950 transition-all hover:-translate-y-1 hover:shadow-aqua"
          >
            View Projects <ArrowRight size={18} />
          </Link>

          <a
            href="https://github.com/bhuvanesh8399"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/[0.06] px-6 py-3 font-semibold text-cyan-100 transition-all hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-aqua"
          >
            <Github size={18} /> GitHub
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-6 py-3 font-semibold text-emerald-100 transition-all hover:-translate-y-1 hover:shadow-emerald"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.22, duration: 0.6 }}
        className="relative"
      >
        <div className="aqua-card relative overflow-hidden p-6">
          <div className="absolute right-4 top-4 h-28 w-28 rounded-full bg-cyan-300/15 blur-2xl" />

          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">System Status</p>
              <h3 className="text-2xl font-bold text-white">Portfolio Online</h3>
            </div>
            <span className="emerald-chip">Active</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {floatingCards.map((card, index) => (
              <div
                key={card.label}
                className={`animate-float rounded-3xl border bg-white/[0.055] p-5 ${
                  card.color === "emerald"
                    ? "border-emerald-300/20"
                    : card.color === "purple"
                      ? "border-violet-300/20"
                      : "border-cyan-300/20"
                }`}
                style={{ animationDelay: `${index * 0.45}s` }}
              >
                <p className="text-sm text-slate-400">{card.label}</p>
                <p className="mt-2 text-xl font-bold text-white">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-cyan-300/15 bg-ocean-950/70 p-5 font-mono text-sm">
            <p className="text-emerald-300">&gt; whoami</p>
            <p className="mt-2 text-slate-300">Bhuvanesh D — Software Engineer Aspirant</p>
            <p className="mt-4 text-emerald-300">&gt; focus</p>
            <p className="mt-2 text-slate-300">Full Stack Development + AI Systems</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
