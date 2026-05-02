import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const guideData = {
  home: {
    zone: "Intro Zone",
    message:
      "Hey explorer, this is the starting point. Here you can quickly understand who Bhuvanesh is, what he builds, and where to go next.",
    button: "View Featured Projects",
    target: "#featured"
  },
  featured: {
    zone: "Featured Builds",
    message:
      "These are the strongest projects first. Aqua AI, Water Safety AI, and Digital Krishi show practical full-stack + AI thinking.",
    button: "See About",
    target: "#about"
  },
  about: {
    zone: "Explorer Profile",
    message:
      "This section explains Bhuvanesh's developer mindset, learning journey, and how he builds complete systems instead of only UI screens.",
    button: "See Skills",
    target: "#skills"
  },
  skills: {
    zone: "Power Zone",
    message:
      "Here you can see the core stack: Java, Python, React, FastAPI, SQL, AI/ML, and computer science fundamentals.",
    button: "View Projects",
    target: "#projects"
  },
  projects: {
    zone: "Project Reef",
    message:
      "This is the main project area. Each build solves a real-world problem using frontend, backend, database, and AI ideas.",
    button: "See Certifications",
    target: "#certifications"
  },
  certifications: {
    zone: "Proof Vault",
    message:
      "This section shows verified learning proof through HackerRank, NPTEL, and hackathon participation.",
    button: "Challenge Zone",
    target: "#challenges"
  },
  challenges: {
    zone: "Challenge Zone",
    message:
      "Careful, bugs live here. This section shows pressure, debugging, difficult logic, and how Bhuvanesh keeps solving problems.",
    button: "See Teamwork",
    target: "#teamwork"
  },
  teamwork: {
    zone: "Collaboration Bay",
    message:
      "Great projects need communication. This area shows teamwork, hackathons, collaboration, and learning with others.",
    button: "Future Goals",
    target: "#future"
  },
  future: {
    zone: "Growth Current",
    message:
      "This is the forward path. Bhuvanesh is focused on becoming a strong software engineer with full-stack, AI, DSA, and system design skills.",
    button: "Contact",
    target: "#contact"
  },
  contact: {
    zone: "Final Shore",
    message:
      "You reached the final shore. Use this section to connect, check GitHub, LinkedIn, or send a message.",
    button: "Back to Top",
    target: "#home"
  }
};

function getGuide(activeSection) {
  return guideData[activeSection] || guideData.home;
}

export default function CodezillaGuide({ activeSection = "home" }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const guide = getGuide(activeSection);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleGuideClick = () => {
    const target = document.querySelector(guide.target);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    if (isMobile) {
      setOpen(false);
    }
  };

  return (
    <>
      {!isMobile && (
        <div
          className="fixed right-0 top-0 z-[58] h-screen w-20"
          onMouseEnter={() => setOpen(true)}
        />
      )}

      {!isMobile && !open && (
        <motion.div
          className="fixed right-3 top-1/2 z-[60] hidden -translate-y-1/2 md:block"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="codezilla-hint rounded-l-2xl border border-aqua-300/25 bg-ocean-950/75 px-3 py-4 text-xs font-black text-aqua-100 shadow-glow backdrop-blur-xl">
            <div className="flex items-center gap-2 [writing-mode:vertical-rl]">
              <ChevronLeft size={18} />
              Codezilla waits
            </div>
          </div>
        </motion.div>
      )}

      {isMobile && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-36 right-4 z-[60] grid h-12 w-12 place-items-center rounded-full border border-aqua-300/25 bg-ocean-950/80 text-aqua-200 shadow-glow backdrop-blur-xl"
          aria-label="Open Codezilla Guide"
        >
          <MessageCircle size={21} />
        </button>
      )}

      <AnimatePresence>
        {open && (
          <>
            {isMobile && (
              <motion.div
                className="fixed inset-0 z-[70] bg-ocean-950/60 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              />
            )}

            <motion.aside
              className="fixed z-[80] w-[min(360px,calc(100vw-28px))] overflow-hidden rounded-[2rem] border border-aqua-300/20 bg-ocean-950/88 p-5 text-white shadow-glow backdrop-blur-2xl md:right-5 md:top-1/2 md:-translate-y-1/2"
              style={
                isMobile
                  ? {
                      right: "14px",
                      bottom: "92px"
                    }
                  : undefined
              }
              initial={{
                opacity: 0,
                x: isMobile ? 0 : 80,
                y: isMobile ? 24 : "-50%",
                scale: 0.96
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: isMobile ? 0 : "-50%",
                scale: 1
              }}
              exit={{
                opacity: 0,
                x: isMobile ? 0 : 80,
                y: isMobile ? 24 : "-50%",
                scale: 0.96
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
              onMouseLeave={() => {
                if (!isMobile) setOpen(false);
              }}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-aqua-300">
                    Codezilla Guide
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {guide.zone}
                  </h3>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/10 p-2 text-slate-100 hover:bg-white/15"
                  aria-label="Close Codezilla Guide"
                >
                  <X size={18} />
                </button>
              </div>

              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-4"
              >
                <p className="text-sm leading-7 text-slate-200">
                  {guide.message}
                </p>
              </motion.div>

              <button
                onClick={handleGuideClick}
                className="water-button mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-aqua-400 px-5 py-3 text-sm font-black text-ocean-950 transition hover:bg-aqua-300"
              >
                {guide.button}
                <ArrowRight size={17} />
              </button>

              <div className="relative mt-4 h-56 overflow-hidden rounded-3xl border border-aqua-300/15 bg-gradient-to-b from-aqua-400/10 to-ocean-950/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.22),transparent_40%)]" />

                <motion.img
                  src="/characters/codezilla.png"
                  alt="Codezilla Guide"
                  className="codezilla-breathe absolute bottom-[-16px] right-[-16px] h-[270px] object-contain drop-shadow-[0_0_24px_rgba(56,189,248,0.45)]"
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                />

                <div className="absolute bottom-4 left-4 max-w-[150px] rounded-2xl border border-aqua-300/20 bg-ocean-950/70 p-3 text-xs leading-5 text-aqua-100 backdrop-blur-md">
                  Hover the edge anytime. I&apos;ll guide the journey.
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
