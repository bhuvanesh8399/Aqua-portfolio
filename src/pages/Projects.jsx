import { useMemo, useState } from "react";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectFilter from "../components/projects/ProjectFilter";
import { projectCategories, projects } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category.includes(activeCategory);

      const search = query.trim().toLowerCase();
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(search) ||
        project.domain.toLowerCase().includes(search) ||
        project.summary.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  return (
    <PageWrapper>
      <SectionTitle
        eyebrow="Projects"
        title="Project Command Center"
        description="A collection of full-stack AI platforms focused on public health, aquaculture, agriculture, emergency response, education, finance, and SaaS automation."
      />

      <div className="mb-7 grid gap-4 lg:grid-cols-[1fr_280px]">
        <ProjectFilter
          categories={projectCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects..."
          className="glass-input h-12"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="aqua-card p-8 text-center text-slate-400">
          No projects found for this filter.
        </div>
      )}
    </PageWrapper>
  );
}
