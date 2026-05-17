import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Featured", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastY && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastY = currentY;

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current?.id) {
        setActive(current.id);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (href) => {
    setOpen(false);
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled
            ? "border-b border-sky-300/10 bg-slate-950/75 shadow-lg shadow-sky-950/30 backdrop-blur-xl"
            : "bg-slate-950/45 backdrop-blur-md"
        }`}
      >
        <button
          onClick={() => handleNavigate("#home")}
          className="flex items-center gap-3 rounded-2xl text-left"
          aria-label="Go to home"
        >
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-sky-300/25 bg-sky-300/10 shadow-lg shadow-sky-500/10">
            <img
              src="/icons/shark-logo.png"
              alt="Bhuvanesh D shark logo"
              className="h-9 w-9 object-contain"
            />
          </span>

          <span className="leading-tight">
            <span className="block text-sm font-black text-white sm:text-base">
              Bhuvanesh D
            </span>
            <span className="block text-[10px] font-semibold text-sky-200/75 sm:text-xs">
              Ocean Journey Portfolio
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;

            return (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-sky-300 text-slate-950 shadow-lg shadow-sky-400/20"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <a
          href="/resume.pdf"
          download
          className="hidden items-center gap-2 rounded-full bg-sky-300 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:bg-sky-200 lg:flex"
        >
          <Download size={16} />
          Resume
        </a>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 overflow-hidden rounded-3xl border border-sky-300/15 bg-slate-950/90 p-3 shadow-2xl shadow-sky-950/40 backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className="rounded-2xl px-4 py-3 text-left text-sm font-bold text-white/85 transition hover:bg-sky-300/10 hover:text-sky-100"
              >
                {link.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-sky-300 px-4 py-3 text-sm font-black text-slate-950"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
