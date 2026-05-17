import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Sparkles
} from "lucide-react";
import HeroOceanVisual from "./HeroOceanVisual";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22
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

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-24 sm:px-6 lg:pt-24">
      <div className="pointer-events-none absolute left-[-12%] top-20 h-64 w-64 rounded-full bg-aqua-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 right-[-12%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="section-container grid min-h-[calc(100vh-96px)] items-center gap-8 lg:grid-cols-[1fr_0.85fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-aqua-200/20 bg-white/10 px-3.5 py-2 text-xs font-bold text-aqua-100 backdrop-blur-md sm:text-sm"
          >
            <Sparkles size={15} className="text-aqua-300" />
            Ocean Journey Portfolio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m
            <span className="block">Bhuvanesh D</span>
            <span className="hero-gradient-title block">
              AI + Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
          >
            I build practical AI-powered full-stack systems for real-world
            problems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#featured"
              className="water-button group inline-flex w-full items-center justify-center gap-2 rounded-full bg-aqua-400 px-5 py-2.5 text-sm font-black text-ocean-950 shadow-glow transition hover:-translate-y-1 hover:bg-aqua-300 sm:w-auto"
            >
              View Projects
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="water-button group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15 sm:w-auto"
            >
              <Download size={17} />
              Download Resume
            </a>

            <a
              href="https://github.com/bhuvanesh8399"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-aqua-300/15 bg-ocean-950/35 px-5 py-2.5 text-sm font-bold text-aqua-100 backdrop-blur-md transition hover:-translate-y-1 hover:bg-aqua-400/10 sm:w-auto"
            >
              <Github size={17} />
              GitHub
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm font-semibold tracking-wide text-slate-300"
          >
            React <span className="text-aqua-300">•</span> FastAPI{" "}
            <span className="text-aqua-300">•</span> Python{" "}
            <span className="text-aqua-300">•</span> SQL{" "}
            <span className="text-aqua-300">•</span> AI/ML
          </motion.p>
        </motion.div>

        <HeroOceanVisual />
      </div>

      <motion.a
        href="#featured"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-xs font-bold text-aqua-100 md:flex"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll to explore</span>
        <ArrowDown className="hero-scroll-arrow" size={20} />
      </motion.a>
    </section>
  );
}
