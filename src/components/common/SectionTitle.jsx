import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={isCenter ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-aqua-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
