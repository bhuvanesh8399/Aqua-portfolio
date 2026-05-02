import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function CertificateModal({ certificate, onClose }) {
  const isPdf = certificate?.image?.toLowerCase().endsWith(".pdf");

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[110] grid place-items-center bg-ocean-950/80 p-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-panel max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] p-5"
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-aqua-300">
                  Certificate
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">{certificate.title}</h3>
                <p className="mt-1 text-slate-300">{certificate.provider}</p>
              </div>
              <button onClick={onClose} className="rounded-2xl border border-white/10 bg-white/10 p-2 text-white">
                <X />
              </button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              {isPdf ? (
                <iframe
                  title={certificate.title}
                  src={certificate.image}
                  className="min-h-[70vh] w-full bg-white"
                />
              ) : (
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="min-h-[260px] w-full object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
              <div className="p-6 text-center text-sm text-slate-300">
                If this image is not visible, add it to: <code>public{certificate.image}</code>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
