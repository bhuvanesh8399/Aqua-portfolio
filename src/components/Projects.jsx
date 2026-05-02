import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section className="px-6 py-24">
      <div className="section-container">
        <SectionTitle
          label="Projects"
          title="Hunting Real-World Problems"
          description="The sharks move with focus here, representing project execution and goal-oriented development."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass-panel flex h-full flex-col rounded-[1.75rem] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="mb-4 w-fit rounded-full border border-aqua-200/15 bg-aqua-400/10 px-3 py-1 text-xs font-bold text-aqua-200">
                {project.domain}
              </span>

              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-200">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="text-sm text-slate-200">
                    • {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="water-button inline-flex items-center gap-2 rounded-full bg-aqua-400 px-4 py-2 text-sm font-black text-ocean-950"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="water-button inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white"
                >
                  View <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
