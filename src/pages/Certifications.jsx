import { useMemo, useState } from "react";
import CertificateCard from "../components/certifications/CertificateCard";
import CertificateModal from "../components/certifications/CertificateModal";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";
import { certificateGroups, certificates } from "../data/certificates";

export default function Certifications() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = useMemo(() => {
    if (activeGroup === "All") return certificates;

    return certificates.filter((certificate) => {
      if (activeGroup === "HackerRank") return certificate.provider === "HackerRank";
      if (activeGroup === "NPTEL") return certificate.provider === "NPTEL";
      return certificate.category === activeGroup;
    });
  }, [activeGroup]);

  return (
    <PageWrapper>
      <SectionTitle
        eyebrow="Certifications"
        title="Verified Achievement Vault"
        description="A collection of certifications that support my skills in programming, problem solving, cloud computing, technical participation, and continuous learning."
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {certificateGroups.map((group) => (
          <button
            key={group}
            onClick={() => setActiveGroup(group)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              activeGroup === group
                ? "border-emerald-300/50 bg-emerald-300 text-ocean-950 shadow-emerald"
                : "border-cyan-300/15 bg-white/[0.05] text-slate-300 hover:border-cyan-300/35 hover:text-aqua-300"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCertificates.map((certificate, index) => (
          <CertificateCard
            key={`${certificate.title}-${certificate.provider}`}
            certificate={certificate}
            index={index}
            onOpen={setSelectedCertificate}
          />
        ))}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </PageWrapper>
  );
}
