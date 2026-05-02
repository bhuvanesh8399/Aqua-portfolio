import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="aqua-card aqua-card-hover group flex h-full flex-col overflow-hidden p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <span className="aqua-chip">{project.domain}</span>
          <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-aqua-300">
            {project.shortTitle}
          </h3>
        </div>
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-aqua-300">
          <Sparkles size={20} />
        </div>
      </div>

      <p className="leading-7 text-slate-400">{project.summary}</p>

      <div className="mt-5 rounded-2xl border border-violet-300/15 bg-violet-300/10 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
          Innovation
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">{project.highlight}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 6).map((tech) => (
          <span key={tech} className="aqua-chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-ocean-950 transition-all hover:-translate-y-1 hover:shadow-aqua"
        >
          Case Study <ArrowUpRight size={16} />
        </Link>

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-300/45 hover:text-aqua-300"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </motion.article>
  );
}
