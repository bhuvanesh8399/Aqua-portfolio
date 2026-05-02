import { Link } from "react-router-dom";
import { featuredProjects } from "../../data/projects";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../projects/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section className="py-14">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <SectionTitle
          eyebrow="Featured Work"
          title="AI systems I’ve built"
          description="A quick look at my strongest full-stack AI projects across public health, aquaculture, agriculture, and emergency response."
        />

        <Link
          to="/projects"
          className="mb-10 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition-all hover:shadow-aqua"
        >
          View All Projects
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
