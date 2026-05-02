import { motion } from "framer-motion";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <PageWrapper>
      <SectionTitle
        eyebrow="Skills"
        title="Technical skill matrix"
        description="Skills organized by how I use them in real projects, dashboards, APIs, AI workflows, and full-stack systems."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.section
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.06 }}
            className="aqua-card p-6"
          >
            <h3 className="text-2xl font-bold text-white">{group.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>

            <div className="mt-6 grid gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-3xl border border-cyan-300/10 bg-white/[0.045] p-4 transition-all hover:border-cyan-300/30 hover:bg-white/[0.07]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="font-bold text-white">{skill.name}</h4>
                    <span className="emerald-chip">{skill.level}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Used for: {skill.usedIn}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </PageWrapper>
  );
}
