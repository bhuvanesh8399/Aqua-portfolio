import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Eye } from "lucide-react";
import { certificates } from "../data/certificates";
import SectionTitle from "./SectionTitle";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="px-6 py-24">
      <div className="section-container">
        <SectionTitle
          label="Certifications"
          title="Achievement Bubbles"
          description="Here the sharks celebrate upward with bubbles, representing certifications and proof of work."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              className="glass-panel rounded-[1.5rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Award className="text-aqua-300" />
              <h3 className="mt-5 text-xl font-black text-white">{certificate.title}</h3>
              <p className="mt-2 text-slate-300">{certificate.provider}</p>
              <p className="mt-1 text-sm text-slate-400">{certificate.category}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                  Verified
                </span>

                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-white"
                >
                  <Eye size={14} /> View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
