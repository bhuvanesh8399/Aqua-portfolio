import { ArrowLeft, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <PageWrapper>
        <div className="aqua-card p-8 text-center">
          <h1 className="text-3xl font-bold text-white">Project not found</h1>
          <Link to="/projects" className="mt-5 inline-flex text-aqua-300">
            Back to Projects
          </Link>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Link
        to="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-aqua-300 hover:text-cyan-100"
      >
        <ArrowLeft size={17} /> Back to Projects
      </Link>

      <section className="aqua-card overflow-hidden p-7 md:p-10">
        <span className="aqua-chip">{project.domain}</span>
        <h1 className="mt-5 max-w-5xl text-3xl font-black tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">{project.summary}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span key={tech} className="aqua-chip">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-ocean-950 transition-all hover:-translate-y-1 hover:shadow-aqua"
        >
          <Github size={18} /> View Repository
        </a>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <InfoBlock title="Problem Statement" content={project.problem} />
        <InfoBlock title="Solution" content={project.solution} />
      </section>

      <section className="mt-14">
        <SectionTitle
          eyebrow="Features"
          title="Core system features"
          description="The main modules and capabilities that make this project a complete product-style system."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature) => (
            <div key={feature} className="aqua-card aqua-card-hover p-5">
              <p className="font-semibold text-white">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle
          eyebrow="Architecture"
          title="System workflow"
          description="A simple view of how data or user actions move through the system."
        />

        <div className="aqua-card p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.architecture.map((step, index) => (
              <div
                key={step}
                className="relative rounded-3xl border border-cyan-300/15 bg-white/[0.05] p-5"
              >
                <span className="mb-4 grid h-9 w-9 place-items-center rounded-2xl bg-cyan-300 text-sm font-black text-ocean-950">
                  {index + 1}
                </span>
                <p className="font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="aqua-card p-7">
          <h2 className="text-2xl font-bold text-white">Innovation Highlight</h2>
          <p className="mt-4 leading-8 text-slate-300">{project.highlight}</p>
        </div>

        <div className="aqua-card p-7">
          <h2 className="text-2xl font-bold text-white">Real-World Impact</h2>
          <p className="mt-4 leading-8 text-slate-300">{project.impact}</p>
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle
          eyebrow="Future Scope"
          title="How this project can grow"
          description="Possible improvements for production-level usage and stronger real-world deployment."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.futureScope.map((scope) => (
            <div
              key={scope}
              className="rounded-3xl border border-emerald-300/15 bg-emerald-300/10 p-5"
            >
              <p className="font-semibold text-emerald-100">{scope}</p>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

function InfoBlock({ title, content }) {
  return (
    <div className="aqua-card p-7">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 leading-8 text-slate-300">{content}</p>
    </div>
  );
}
