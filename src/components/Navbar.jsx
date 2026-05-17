import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home", "home"],
  ["Featured", "#featured", "featured"],
  ["About", "#about", "about"],
  ["Skills", "#skills", "skills"],
  ["Projects", "#projects", "projects"],
  ["Contact", "#contact", "contact"]
];

const mobileLinks = [
  ["Home", "#home", "home"],
  ["Featured", "#featured", "featured"],
  ["About", "#about", "about"],
  ["Skills", "#skills", "skills"],
  ["Projects", "#projects", "projects"],
  ["Certifications", "#certifications", "certifications"],
  ["Challenges", "#challenges", "challenges"],
  ["Teamwork", "#teamwork", "teamwork"],
  ["Future", "#future", "future"],
  ["Contact", "#contact", "contact"]
];

export default function Navbar({ activeSection = "home" }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 18);

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && !open) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, open]);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "border-b border-white/10 bg-ocean-950/78 shadow-glow backdrop-blur-xl"
          : "bg-ocean-950/55 backdrop-blur-md"
      }`}
    >
      <div className="section-container flex h-14 items-center justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-aqua-400 text-sm font-black text-ocean-950">
            B
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black text-white">
              Bhuvanesh D
            </span>
            <span className="hidden text-[11px] text-aqua-200 sm:block">
              Ocean Journey Portfolio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          {links.map(([label, href, id]) => {
            const active = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                className={`rounded-full px-3 py-1.5 text-sm font-bold transition ${
                  active
                    ? "bg-aqua-400/15 text-aqua-200"
                    : "text-slate-200 hover:bg-white/10 hover:text-aqua-200"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/resume.pdf"
            download
            className="water-button inline-flex items-center gap-2 rounded-full bg-aqua-400 px-4 py-2 text-sm font-black text-ocean-950 transition hover:bg-aqua-300"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-white/10 bg-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ocean-950/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-2 sm:grid-cols-2">
            {mobileLinks.map(([label, href, id]) => {
              const active = activeSection === id;
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold ${
                    active
                      ? "bg-aqua-400/15 text-aqua-200"
                      : "text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <a
            href="/resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-aqua-400 px-5 py-3 text-sm font-black text-ocean-950"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
