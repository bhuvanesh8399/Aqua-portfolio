import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export default function ProjectDrawer({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-ocean-950/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 z-[100] h-full w-full overflow-y-auto border-l border-white/10 bg-ocean-950/95 p-6 shadow-glow backdrop-blur-xl md:w-[720px]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
          >
            <div className="sticky top-0 z-10 -mx-6 -mt-6 mb-6 border-b border-white/10 bg-ocean-950/90 p-6 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-aqua-300">
                    Project Case Study
                  </p>
                  <h2 className="mt-2 text-3xl font-black text-white">{project.title}</h2>
                  <p className="mt-2 text-slate-300">{project.domain}</p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-2xl border border-white/10 bg-white/10 p-2 text-white"
                  aria-label="Close drawer"
                >
                  <X />
                </button>
              </div>
            </div>

            <div className="space-y-5 pb-10">
              <Block title="Overview" text={project.description} />
              <Block title="Problem" text={project.problem} />
              <Block title="Solution" text={project.solution} />

              <section className="glass-panel rounded-3xl p-5">
                <h3 className="text-xl font-black text-white">Key Points</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {project.points.map((point) => (
                    <div key={point} className="soft-card rounded-2xl p-4 text-sm text-slate-200">
                      {point}
                    </div>
                  ))}
                </div>
              </section>

              <section className="glass-panel rounded-3xl p-5">
                <h3 className="text-xl font-black text-white">Tech Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-aqua-200/15 bg-aqua-400/10 px-3 py-1.5 text-xs font-bold text-aqua-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="water-button inline-flex items-center gap-2 rounded-full bg-aqua-400 px-6 py-3 font-black text-ocean-950 hover:bg-aqua-300"
              >
                Open GitHub Repository <ExternalLink size={18} />
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Block({ title, text }) {
  return (
    <section className="glass-panel rounded-3xl p-5">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-200">{text}</p>
    </section>
  );
}
