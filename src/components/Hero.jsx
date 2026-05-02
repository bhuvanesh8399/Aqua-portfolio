import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Mail,
  Sparkles
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const techChips = ["React", "FastAPI", "Python", "SQL", "AI/ML", "Tailwind"];

const stats = [
  {
    label: "AI Systems",
    value: "7+"
  },
  {
    label: "Focus",
    value: "Full Stack + AI"
  },
  {
    label: "Proof",
    value: "Projects + Certs"
  },
  {
    label: "Status",
    value: "Open to Roles"
  }
];

const featuredProjects = [
  {
    name: "Aqua AI",
    tag: "Aquaculture AI"
  },
  {
    name: "Water Safety AI",
    tag: "Public Health"
  },
  {
    name: "Digital Krishi",
    tag: "Agriculture AI"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28">
      <div className="pointer-events-none absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-aqua-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 right-[-8%] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="section-container grid min-h-[calc(100vh-112px)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-aqua-200/20 bg-white/10 px-4 py-2 text-sm font-bold text-aqua-100 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-aqua-300" />
            Ocean Journey Portfolio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl"
          >
            Hi, I&apos;m
            <span className="block">Bhuvanesh D</span>
            <span className="hero-gradient-title block">
              Full Stack & AI Builder
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-200"
          >
            I build practical AI-powered full-stack systems that solve real-world
            problems across public health, aquaculture, agriculture, education,
            finance, and SaaS.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#featured"
              className="water-button group inline-flex items-center gap-2 rounded-full bg-aqua-400 px-6 py-3 font-black text-ocean-950 shadow-glow transition hover:-translate-y-1 hover:bg-aqua-300"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="water-button group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="water-button group inline-flex items-center gap-2 rounded-full border border-aqua-200/20 bg-aqua-400/10 px-6 py-3 font-bold text-aqua-100 backdrop-blur-md transition hover:-translate-y-1 hover:bg-aqua-400/15"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
            {techChips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.85 + index * 0.08
                }}
                className="rounded-full border border-aqua-200/15 bg-white/10 px-4 py-2 text-sm font-semibold text-aqua-100 backdrop-blur-md transition hover:-translate-y-1 hover:border-aqua-300/40 hover:bg-aqua-400/10"
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 max-w-xl rounded-3xl border border-white/10 bg-ocean-950/35 p-4 text-sm text-slate-200 backdrop-blur-md"
          >
            <span className="font-black text-aqua-300">Ocean Scene:</span>{" "}
            Entry - two sharks begin the developer journey.
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 48, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          className="hero-float relative z-10"
        >
          <div className="glass-panel rounded-[2rem] p-6 md:p-7">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-aqua-300">
                  Developer System
                </p>
                <h2 className="mt-3 text-3xl font-black text-white">
                  Profile Online
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Full-stack + AI project builder
                </p>
              </div>

              <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-200">
                Available
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="soft-card rounded-3xl p-5"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.55 + index * 0.08 }}
                >
                  <p className="text-sm text-slate-300">{item.label}</p>
                  <p className="mt-2 text-xl font-black text-white">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-ocean-950/70 p-5 font-mono text-sm">
              <motion.p
                className="text-aqua-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                &gt; whoami
              </motion.p>
              <motion.p
                className="mt-2 text-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15 }}
              >
                Bhuvanesh D
              </motion.p>

              <motion.p
                className="mt-4 text-aqua-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                &gt; focus
              </motion.p>
              <motion.p
                className="mt-2 text-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.45 }}
              >
                React + FastAPI + AI Systems
              </motion.p>

              <motion.p
                className="mt-4 text-aqua-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                &gt; status
              </motion.p>
              <motion.p
                className="mt-2 text-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.75 }}
              >
                Open to Software Engineer roles
              </motion.p>
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-aqua-300">
                  Featured Builds
                </p>
                <a
                  href="#featured"
                  className="text-xs font-bold text-aqua-200 hover:text-white"
                >
                  View all
                </a>
              </div>

              <div className="grid gap-3">
                {featuredProjects.map((project, index) => (
                  <motion.a
                    key={project.name}
                    href="#featured"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/8 px-4 py-3 transition hover:border-aqua-300/30 hover:bg-white/12"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + index * 0.12 }}
                  >
                    <span>
                      <span className="block text-sm font-black text-white">
                        {project.name}
                      </span>
                      <span className="block text-xs text-slate-300">
                        {project.tag}
                      </span>
                    </span>
                    <ArrowRight size={16} className="text-aqua-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#featured"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm font-bold text-aqua-100 md:flex"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span>Scroll to explore</span>
        <ArrowDown className="hero-scroll-arrow" size={22} />
      </motion.a>
    </section>
  );
}
