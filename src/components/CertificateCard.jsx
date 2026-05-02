import { motion } from "framer-motion";
import { Award, Eye } from "lucide-react";

export default function CertificateCard({ certificate, index, onOpen }) {
  return (
    <motion.article
      className="glass-card wave-bottom ripple-hover rounded-[1.5rem] p-5"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-2xl border border-skywave-300/20 bg-skywave-300/10 text-skywave-200">
          <Award size={22} />
        </span>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
          {certificate.status}
        </span>
      </div>

      <h3 className="text-lg font-black text-white">{certificate.title}</h3>
      <p className="mt-2 text-sm text-[#B6D7EA]">{certificate.provider}</p>

      <div className="mt-4 space-y-1 text-sm text-slate-300">
        <p>{certificate.category}</p>
        <p>{certificate.date}</p>
        {certificate.score && <p>Score: {certificate.score}</p>}
      </div>

      <button
        onClick={() => onOpen(certificate)}
        className="water-button mt-5 inline-flex items-center gap-2 rounded-full border border-skywave-300/20 bg-white/5 px-4 py-2 text-sm font-bold text-skywave-100"
      >
        <Eye size={16} /> View Certificate
      </button>
    </motion.article>
  );
}
