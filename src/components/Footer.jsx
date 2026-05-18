import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Trophy
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Coding Arena", href: "#coding" },
  { label: "Contact", href: "#contact" }
];

const profileLinks = [
  {
    label: "GitHub",
    href: "https://github.com/bhuvanesh8399",
    icon: Github
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhuvanesh-d-4a1642370/",
    icon: Linkedin
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/bhuvanesh_0326/",
    icon: Trophy
  }
];

export default function Footer() {
  const scrollToSection = (href) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-sky-300/10 bg-slate-950/80 px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.8fr]">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 text-left"
            >
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-sky-300/20 bg-sky-300/10 shadow-lg shadow-sky-500/10">
                <img
                  src="/icons/shark-logo.png"
                  alt="Bhuvanesh D shark logo"
                  className="h-10 w-10 object-contain"
                />
              </span>

              <span>
                <span className="block text-lg font-black text-white">
                  Bhuvanesh D
                </span>
                <span className="block text-xs font-bold text-sky-200/75">
                  AI + Full Stack Developer
                </span>
              </span>
            </button>

            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-slate-200/75">
              Building practical full-stack and AI-powered products with clean
              UI, strong logic, and real-world deployment.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black text-emerald-100">
              Open to Software Engineer opportunities
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-sky-200/70">
              Quick Links
            </h3>

            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="w-fit text-sm font-bold text-slate-200/75 transition hover:text-sky-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-sky-200/70">
              Profiles
            </h3>

            <div className="mt-5 grid gap-3">
              {profileLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex w-fit items-center gap-2 text-sm font-bold text-slate-200/75 transition hover:text-sky-200"
                  >
                    <Icon size={17} />
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                );
              })}

              <a
                href="/resume.pdf"
                download
                className="group flex w-fit items-center gap-2 text-sm font-bold text-slate-200/75 transition hover:text-sky-200"
              >
                <Download size={17} />
                Resume
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-sky-200/70">
              Connect
            </h3>

            <p className="mt-5 text-sm font-medium leading-7 text-slate-200/75">
              Have a role, project, or idea? Let&apos;s connect and build
              something useful.
            </p>

            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:bg-sky-200"
            >
              <Mail size={17} />
              Send Message
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 text-sm font-medium text-slate-300/65 md:flex-row md:items-center">
            <p>
              Built with React, Vite, Tailwind CSS, Framer Motion, Vercel &
              Resend.
            </p>

            <p>© 2026 Bhuvanesh D. Crafted through the Ocean Journey.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
