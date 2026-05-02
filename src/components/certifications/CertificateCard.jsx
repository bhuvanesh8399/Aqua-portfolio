import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function CertificateCard({ certificate, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="aqua-card aqua-card-hover p-5"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-300">
          <Award size={22} />
        </div>
        <span className="emerald-chip">{certificate.status}</span>
      </div>

      <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{certificate.provider}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="aqua-chip">{certificate.category}</span>
        {certificate.score && <span className="purple-chip">Score: {certificate.score}</span>}
      </div>

      <button
        onClick={() => onOpen(certificate)}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition-all hover:border-cyan-300/45 hover:shadow-aqua"
      >
        View Certificate <ExternalLink size={15} />
      </button>
    </motion.article>
  );
}
