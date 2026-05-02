import { motion } from "framer-motion";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";

const dna = [
  "Problem Solver",
  "AI System Builder",
  "Dashboard Developer",
  "Backend Learner",
  "Product Thinker",
  "Continuous Learner"
];

export default function About() {
  return (
    <PageWrapper>
      <SectionTitle
        eyebrow="About"
        title="Developer profile system"
        description="A short story about who I am, how I build, and what I am currently working toward."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="aqua-card p-7"
        >
          <h3 className="text-2xl font-bold text-white">Who I Am</h3>
          <p className="mt-5 leading-8 text-slate-300">
            I am a software engineering fresher focused on building intelligent full-stack
            applications using React, FastAPI, Python, SQL, and AI/ML concepts.
          </p>
          <p className="mt-5 leading-8 text-slate-300">
            I like building projects that are not only UI screens, but complete systems
            with users, workflows, dashboards, analytics, and real-world problem solving.
          </p>

          <div className="mt-7 rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-aqua-300">
              Current Goal
            </p>
            <p className="mt-3 leading-7 text-slate-200">
              Targeting Software Engineer, Full Stack Developer, and AI-focused developer roles.
              Current focus: React, FastAPI, DSA, AI/ML systems, and system design basics.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {dna.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="aqua-card aqua-card-hover p-5"
            >
              <p className="text-lg font-bold text-white">{item}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Part of my developer DNA and project-building mindset.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Education", "Computer Science / Engineering background with practical project focus."],
          ["Learning Style", "I learn by building complete systems and improving them step by step."],
          ["Portfolio Direction", "Aqua-tech AI dashboard style with professional multi-page case studies."]
        ].map(([title, desc]) => (
          <div key={title} className="aqua-card p-6">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-3 leading-7 text-slate-400">{desc}</p>
          </div>
        ))}
      </section>
    </PageWrapper>
  );
}
