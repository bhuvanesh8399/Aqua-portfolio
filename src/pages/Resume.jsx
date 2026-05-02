import { Download, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";
import { resumeFile } from "../data/assets";

const columns = [
  {
    title: "Core Skills",
    items: ["Java", "Python", "React", "FastAPI", "SQL", "AI/ML"]
  },
  {
    title: "Strong Projects",
    items: ["Water Safety AI", "Aqua AI", "Digital Krishi", "Ambulance Delay AI", "RubricIQ"]
  },
  {
    title: "Proof",
    items: ["HackerRank Certifications", "NPTEL Certifications", "Hackathon Participation", "GitHub Projects"]
  }
];

export default function Resume() {
  return (
    <PageWrapper>
      <SectionTitle
        eyebrow="Resume"
        title="Recruiter resume dashboard"
        description="A quick, recruiter-friendly summary of my profile, skills, projects, and proof of learning."
      />

      <section className="aqua-card p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <h1 className="text-4xl font-black text-white">Bhuvanesh D</h1>
            <p className="mt-3 text-xl text-aqua-300">
              Software Engineer Aspirant | Full Stack Developer | AI Product Builder
            </p>
            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              Fresher software engineer focused on building full-stack AI systems with
              React, FastAPI, Python, SQL, dashboards, automation, and real-world workflows.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-ocean-950 hover:shadow-aqua"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-6 py-3 font-semibold text-cyan-100 hover:shadow-aqua"
              >
                Open Resume
              </a>
              <a
                href="https://github.com/bhuvanesh8399"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/[0.06] px-6 py-3 font-semibold text-cyan-100 hover:shadow-aqua"
              >
                <Github size={18} /> GitHub
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-6 py-3 font-semibold text-emerald-100 hover:shadow-emerald"
              >
                <Mail size={18} /> Contact
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-300/15 bg-ocean-950/60 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-aqua-300">
              Target Role
            </p>
            <p className="mt-3 text-2xl font-bold text-white">Software Engineer</p>

            <div className="mt-6 space-y-4">
              {["Full Stack Developer", "AI-Focused Developer", "Backend / Dashboard Engineer"].map((role) => (
                <div
                  key={role}
                  className="rounded-2xl border border-cyan-300/10 bg-white/[0.05] p-4 text-slate-300"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="aqua-card overflow-hidden p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Resume Preview</h2>
              <p className="mt-2 text-sm text-slate-400">
                Embedded PDF preview connected to the same resume file used by the download links.
              </p>
            </div>
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition-all hover:shadow-aqua"
            >
              Open Full PDF
            </a>
          </div>

          <iframe
            title="Bhuvanesh Resume Preview"
            src={resumeFile}
            className="h-[75vh] w-full rounded-3xl border border-cyan-300/10 bg-white"
          />
        </div>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.title} className="aqua-card p-6">
            <h2 className="text-xl font-bold text-white">{column.title}</h2>
            <div className="mt-5 space-y-3">
              {column.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-cyan-300/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageWrapper>
  );
}
