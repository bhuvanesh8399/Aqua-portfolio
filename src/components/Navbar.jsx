import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Featured", "#featured"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

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
          ? "border-b border-white/10 bg-ocean-950/70 shadow-glow backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-aqua-400 font-black text-ocean-950">
            B
          </span>
          <span>
            <span className="block font-black text-white">Bhuvanesh D</span>
            <span className="block text-xs text-aqua-200">Ocean Journey Portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-semibold text-slate-200 hover:text-aqua-300">
              {label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="water-button hidden items-center gap-2 rounded-full bg-aqua-400 px-5 py-2.5 text-sm font-black text-ocean-950 transition hover:bg-aqua-300 lg:flex"
        >
          <Download size={16} />
          Resume
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-white/10 bg-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ocean-950/90 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-slate-200 hover:bg-white/10"
              >
                {label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-aqua-400 px-5 py-3 text-center font-black text-ocean-950"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
