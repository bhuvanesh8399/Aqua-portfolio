import { Download, Github, MessageCircle } from "lucide-react";
import { resumeFile } from "../data/assets";
import SectionTitle from "./SectionTitle";

const resumeCards = [
  ["Target Role", "Software Engineer / Full Stack Developer"],
  ["Focus", "AI + Full Stack Systems"],
  ["Strong Areas", "Java, Python, React, FastAPI, SQL, AI/ML"],
  ["Proof", "Projects + Certifications + GitHub"]
];

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="section-container">
        <SectionTitle
          eyebrow="Resume"
          title="Recruiter Snapshot"
          description="A quick, focused summary for recruiters and collaborators."
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-card wave-bottom rounded-[2rem] p-7">
            <h3 className="text-3xl font-black text-white">Bhuvanesh D</h3>
            <p className="mt-3 text-xl font-bold text-skywave-300">
              Software Engineer Aspirant | Full Stack Developer | AI Product Builder
            </p>
            <p className="mt-5 leading-8 text-[#B6D7EA]">
              Fresher software engineer focused on building full-stack AI systems
              with React, FastAPI, Python, SQL, dashboards, automation, and
              real-world workflows.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={resumeFile}
                download
                className="water-button inline-flex items-center gap-2 rounded-full bg-skywave-gradient px-5 py-3 font-black text-ocean-950"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="https://github.com/bhuvanesh8399"
                target="_blank"
                rel="noreferrer"
                className="water-button inline-flex items-center gap-2 rounded-full border border-skywave-300/20 bg-white/5 px-5 py-3 font-bold text-skywave-100"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="#contact"
                className="water-button inline-flex items-center gap-2 rounded-full border border-skywave-300/20 bg-skywave-300/10 px-5 py-3 font-bold text-skywave-100"
              >
                <MessageCircle size={18} /> Contact
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {resumeCards.map(([title, value]) => (
              <div key={title} className="glass-card ripple-hover rounded-3xl p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-skywave-300">
                  {title}
                </p>
                <p className="mt-3 text-lg font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
