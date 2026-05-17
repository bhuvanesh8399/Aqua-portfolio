import { ArrowRight, Github, Download, Sparkles } from "lucide-react";
import HeroOceanVisual from "./HeroOceanVisual";

export default function Hero() {
  const scrollToProjects = () => {
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-10 lg:pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[1fr_0.95fr] lg:gap-2">
        <div className="relative z-10 max-w-3xl text-center lg:text-left">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-white/10 px-4 py-2 text-xs font-black text-sky-100 shadow-lg shadow-sky-950/20 backdrop-blur lg:mx-0">
            <Sparkles size={15} />
            Ocean Journey Portfolio
          </div>

          <h1 className="text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <span className="block text-white">Bhuvanesh D</span>
            <span className="block bg-gradient-to-r from-sky-100 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
              AI + Full Stack Developer
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-200/85 sm:text-lg sm:leading-8 lg:mx-0">
            I build practical AI-powered full-stack systems for real-world
            problems, with clean UI, strong logic, and deployable products.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <button
              onClick={scrollToProjects}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:bg-sky-200 sm:w-auto"
            >
              View Projects
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
            >
              <Download size={17} />
              Download Resume
            </a>

            <a
              href="https://github.com/bhuvanesh8399"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-950/30 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>

          <div className="mt-6 text-sm font-bold text-sky-100/80">
            React • FastAPI • Python • SQL • AI/ML
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center lg:-translate-x-8">
          <HeroOceanVisual />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-center text-xs font-black text-white/70 sm:block">
        <p>Scroll to explore</p>
        <div className="mx-auto mt-2 h-6 w-px animate-pulse bg-sky-200/50" />
      </div>
    </section>
  );
}
