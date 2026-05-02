import { motion } from "framer-motion";
import { Brain, Code2, Compass, Lightbulb } from "lucide-react";
import MoodVideo from "./MoodVideo";
import SectionTitle from "./SectionTitle";

const cards = [
  ["Problem Solver", Brain],
  ["Full Stack Learner", Code2],
  ["AI System Builder", Lightbulb],
  ["Explorer Mindset", Compass]
];

export default function About() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <MoodVideo src="/videos/manta-ray.mp4" opacity="opacity-20" />

      <div className="section-container relative z-10">
        <SectionTitle
          label="About"
          title="Exploring the Developer Ocean"
          description="The manta ray shows calm exploration, learning, and curiosity."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            className="glass-panel rounded-[2rem] p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-slate-200">
              I am a software engineering fresher focused on building complete
              systems with frontend, backend, database, and AI features. I enjoy
              creating projects that solve real problems and feel like actual products.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-200">
              My work includes AI dashboards, prediction systems, emergency response
              workflows, agriculture assistants, academic evaluation tools, and SaaS platforms.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(([title, Icon], index) => (
              <motion.div
                key={title}
                className="soft-card rounded-3xl p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Icon className="text-aqua-300" size={30} />
                <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
