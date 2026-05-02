import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  const isPdf = certificate.file?.toLowerCase().endsWith(".pdf");

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-5 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="aqua-card max-h-[90vh] w-full max-w-4xl overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-cyan-300/10 p-5">
          <div>
            <h3 className="text-xl font-bold text-white">{certificate.title}</h3>
            <p className="text-sm text-slate-400">{certificate.provider}</p>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/20 bg-white/[0.06] text-slate-200 hover:text-aqua-300"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[72vh] overflow-auto p-5">
          {isPdf ? (
            <iframe
              title={certificate.title}
              src={certificate.file}
              className="h-[70vh] w-full rounded-2xl border border-cyan-300/10 bg-white"
            />
          ) : (
            <img
              src={certificate.file}
              alt={certificate.title}
              className="mx-auto max-h-[70vh] rounded-2xl border border-cyan-300/10 object-contain"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
