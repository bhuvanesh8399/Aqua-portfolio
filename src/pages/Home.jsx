import { Link } from "react-router-dom";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Hero from "../components/home/Hero";
import QuickStats from "../components/home/QuickStats";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <QuickStats />
      <FeaturedProjects />

      <section className="py-14">
        <div className="aqua-card overflow-hidden p-8 md:p-10">
          <SectionTitle
            align="center"
            eyebrow="Recruiter Snapshot"
            title="Full Stack + AI + Product Thinking"
            description="My portfolio focuses on building complete systems, not just UI screens — with dashboards, workflows, automation, role-based modules, and real-world impact."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {[
              "AI-first project thinking",
              "Dashboard and workflow design",
              "Backend API and database logic"
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-cyan-300/15 bg-white/[0.05] p-5 text-center"
              >
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/resume"
              className="inline-flex rounded-full bg-emerald-300 px-6 py-3 font-bold text-ocean-950 transition-all hover:-translate-y-1 hover:shadow-emerald"
            >
              View Resume Snapshot
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
