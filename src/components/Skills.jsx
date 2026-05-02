import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section className="px-6 py-24">
      <div className="section-container">
        <SectionTitle
          label="Skills"
          title="Power Building"
          description="In this section, the sharks swim faster to represent skill growth, practice, and energy."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.title}
              className="glass-panel rounded-[1.75rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <h3 className="text-2xl font-black text-white">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-aqua-200/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-aqua-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
