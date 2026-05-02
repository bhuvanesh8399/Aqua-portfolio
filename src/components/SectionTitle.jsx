import { motion } from "framer-motion";

export default function SectionTitle({ label, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55 }}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-aqua-300">
        {label}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
          {description}
        </p>
      )}
      <div className="section-wave-line mx-auto mt-6 max-w-sm" />
    </motion.div>
  );
}
