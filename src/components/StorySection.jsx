import { motion } from "framer-motion";
import MoodVideo from "./MoodVideo";

export default function StorySection({
  label,
  title,
  description,
  points = [],
  video,
  videoOpacity = "opacity-25"
}) {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      {video && <MoodVideo src={video} opacity={videoOpacity} />}

      <div className="section-container relative z-10">
        <motion.div
          className="glass-panel mx-auto max-w-5xl rounded-[2rem] p-8 md:p-10"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-aqua-300">
            {label}
          </p>
          <h2 className="text-3xl font-black text-white md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            {description}
          </p>

          {points.length > 0 && (
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {points.map((point) => (
                <div key={point} className="soft-card rounded-3xl p-5 text-slate-200">
                  {point}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
