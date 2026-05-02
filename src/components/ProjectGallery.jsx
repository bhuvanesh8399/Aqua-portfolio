import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";
import ProjectMockup from "./ProjectMockup";

export default function ProjectGallery({ onOpenProject }) {
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="px-6 py-24">
      <div className="section-container">
        <SectionTitle
          label="Project Gallery"
          title="More Systems I Built"
          description="The sharks hunt real-world problems here, showing my full project range."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="glass-panel grid gap-5 rounded-[2rem] p-6 lg:grid-cols-[0.85fr_1.15fr]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectMockup type={project.mockup} />

              <div>
                <span className="w-fit rounded-full border border-aqua-200/15 bg-aqua-400/10 px-3 py-1 text-xs font-bold text-aqua-200">
                  {project.domain}
                </span>
                <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
