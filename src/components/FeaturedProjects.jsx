import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectMockup from "./ProjectMockup";

export default function FeaturedProjects({ onOpenProject }) {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="px-6 py-24">
      <div className="section-container">
        <SectionTitle
          label="Featured Work"
          title="Top Projects First"
          description="The best projects appear early, so recruiters can quickly understand my strongest work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              className="glass-panel flex h-full flex-col rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectMockup type={project.mockup} />

              <span className="mt-5 w-fit rounded-full border border-aqua-200/15 bg-aqua-400/10 px-3 py-1 text-xs font-bold text-aqua-200">
                {project.domain}
              </span>

              <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-200">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenProject(project)}
                  className="water-button inline-flex items-center gap-2 rounded-full bg-aqua-400 px-4 py-2 text-sm font-black text-ocean-950"
                >
                  Case Study <ArrowUpRight size={16} />
                </button>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="water-button inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
