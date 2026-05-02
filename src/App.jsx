import { useEffect, useState } from "react";

import OceanBackground from "./components/OceanBackground";
import Navbar from "./components/Navbar";
import JourneyProgress from "./components/JourneyProgress";
import SharkMoodIndicator from "./components/SharkMoodIndicator";
import MotionToggle from "./components/MotionToggle";
import BackToTop from "./components/BackToTop";
import CodezillaGuide from "./components/CodezillaGuide";

import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDrawer from "./components/ProjectDrawer";
import StorySection from "./components/StorySection";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [sharkMode, setSharkMode] = useState("intro");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-off", reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-shark-mode]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const mode = visible[0].target.getAttribute("data-shark-mode");
          const id = visible[0].target.getAttribute("id");

          setSharkMode(mode);
          setActiveSection(id);
        }
      },
      {
        threshold: [0.35, 0.5, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <OceanBackground mode={sharkMode} reduceMotion={reduceMotion} />

      <JourneyProgress activeSection={activeSection} />
      <SharkMoodIndicator activeSection={activeSection} />
      <MotionToggle reduceMotion={reduceMotion} setReduceMotion={setReduceMotion} />
      <BackToTop />
      <CodezillaGuide activeSection={activeSection} />

      <div className="relative z-10">
        <Navbar />

        <section id="home" data-shark-mode="intro">
          <Hero />
        </section>

        <section id="featured" data-shark-mode="focus">
          <FeaturedProjects onOpenProject={setSelectedProject} />
        </section>

        <section id="about" data-shark-mode="explore">
          <About />
        </section>

        <section id="skills" data-shark-mode="fast">
          <Skills />
        </section>

        <section id="projects" data-shark-mode="focus">
          <ProjectGallery onOpenProject={setSelectedProject} />
        </section>

        <section id="certifications" data-shark-mode="celebrate">
          <Certifications />
        </section>

        <section id="challenges" data-shark-mode="fight">
          <StorySection
            label="Challenges"
            title="Risk, Pressure & Problem Solving"
            description="The challenge scene represents bugs, deadlines, debugging, difficult logic, and competition. It is not violence — it shows persistence through pressure."
            points={["Debugging", "Learning new tools", "Building complete systems"]}
            video="/videos/challenge-risk.mp4"
            videoOpacity="opacity-25"
          />
        </section>

        <section id="teamwork" data-shark-mode="friends">
          <StorySection
            label="Teamwork"
            title="Friends & Collaboration"
            description="The dolphin and friendly shark movement represent teamwork, hackathons, communication, and learning with others."
            points={["Hackathons", "Collaboration", "Communication"]}
            video="/videos/dolphin.mp4"
            videoOpacity="opacity-20"
          />
        </section>

        <section id="future" data-shark-mode="love">
          <StorySection
            label="Future Goals"
            title="Passion For Building"
            description="The soft manta ray and calm shark motion represent passion, growth, and the goal to become a strong software engineer who builds useful real-world systems."
            points={["Software Engineer role", "Full-stack growth", "AI product building"]}
            video="/videos/manta-ray.mp4"
            videoOpacity="opacity-20"
          />
        </section>

        <section id="contact" data-shark-mode="together">
          <Contact />
        </section>

        <Footer />
      </div>

      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />
    </main>
  );
}
