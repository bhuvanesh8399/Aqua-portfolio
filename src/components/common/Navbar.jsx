import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { resumeFile } from "../../data/assets";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Certifications", path: "/certifications" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-aqua-300 after:w-full"
      : "text-slate-300 hover:text-aqua-200 after:w-0 hover:after:w-full";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-300/10 bg-ocean-950/75 shadow-aqua backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 font-bold text-aqua-300 shadow-aqua">
            B
          </span>
          <div>
            <p className="font-bold text-white">Bhuvanesh.dev</p>
            <p className="text-xs text-slate-400">Aqua AI Portfolio</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={(state) =>
                `${activeClass(state)} relative text-sm font-medium transition-all after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:rounded-full after:bg-aqua-300 after:transition-all`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <a
          href={resumeFile}
          download
          className="hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-all hover:border-cyan-300/50 hover:bg-cyan-300/20 hover:shadow-aqua lg:inline-flex"
        >
          Download Resume
        </a>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/20 bg-white/[0.06] text-white lg:hidden"
          aria-label="Open navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan-300/10 bg-ocean-950/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-cyan-300/10 text-aqua-300"
                      : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={resumeFile}
              download
              className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-center text-sm font-semibold text-cyan-100"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
