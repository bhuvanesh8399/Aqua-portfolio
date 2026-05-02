import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.article
      className="glass-card wave-bottom ripple-hover flex h-full flex-col rounded-[1.75rem] p-6"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="rounded-full border border-skywave-300/20 bg-skywave-300/10 px-3 py-1 text-xs font-bold text-skywave-200">
          {project.domain}
        </span>
      </div>

      <h3 className="text-2xl font-black leading-tight text-white">{project.shortTitle}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#B6D7EA]">{project.description}</p>

      <div className="mt-5 rounded-2xl border border-skywave-300/12 bg-white/[0.035] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-skywave-300">
          Innovation
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-200">{project.highlight}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-semibold text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => onOpen(project)}
          className="water-button inline-flex items-center gap-2 rounded-full bg-skywave-gradient px-5 py-2.5 text-sm font-black text-ocean-950"
        >
          Case Study <ArrowUpRight size={16} />
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="water-button inline-flex items-center gap-2 rounded-full border border-skywave-300/20 bg-white/5 px-5 py-2.5 text-sm font-bold text-skywave-100"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </motion.article>
  );
}
