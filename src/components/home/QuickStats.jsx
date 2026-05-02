import { motion } from "framer-motion";
import { Award, BrainCircuit, Code2, Layers } from "lucide-react";

const stats = [
  { icon: BrainCircuit, label: "AI Systems", value: "7+" },
  { icon: Code2, label: "Tech Focus", value: "Full Stack" },
  { icon: Award, label: "Verified Skills", value: "3+" },
  { icon: Layers, label: "Domains", value: "7" }
];

export default function QuickStats() {
  return (
    <section className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="aqua-card aqua-card-hover p-5"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-aqua-300">
              <Icon size={22} />
            </div>
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        );
      })}
    </section>
  );
}
