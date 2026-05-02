import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-300/10 bg-ocean-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 lg:px-10">
        <div>
          <h3 className="text-xl font-bold text-white">Bhuvanesh D</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Software Engineer Aspirant, Full Stack Developer, and AI Product Builder.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-400">
            <Link to="/projects" className="hover:text-aqua-300">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-aqua-300">
              Skills
            </Link>
            <Link to="/certifications" className="hover:text-aqua-300">
              Certifications
            </Link>
            <Link to="/contact" className="hover:text-aqua-300">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Connect</h4>
          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/bhuvanesh8399"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/15 bg-white/[0.06] text-slate-300 transition-all hover:text-aqua-300"
            >
              <Github size={19} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/15 bg-white/[0.06] text-slate-300 transition-all hover:text-aqua-300"
            >
              <Linkedin size={19} />
            </a>
            <a
              href="mailto:yourmail@example.com"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/15 bg-white/[0.06] text-slate-300 transition-all hover:text-aqua-300"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cyan-300/10 py-5 text-center text-xs text-slate-500">
        Built with React, Tailwind CSS, and Framer Motion.
      </div>
    </footer>
  );
}
