import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="section-container">
        <div className="section-wave-line mb-8" />

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-black text-white">Bhuvanesh D</h3>
            <p className="mt-3 max-w-md text-slate-300">
              Full Stack Developer & AI Project Builder. Ocean Journey Portfolio.
            </p>
          </div>

          <div>
            <h4 className="font-black text-white">Quick Links</h4>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              {["Home", "Featured", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-aqua-300">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white">Social</h4>
            <div className="mt-4 flex gap-3">
              <a className="rounded-2xl bg-white/10 p-3 text-aqua-200" href="https://github.com/bhuvanesh8399" target="_blank" rel="noreferrer">
                <Github size={18} />
              </a>
              <a className="rounded-2xl bg-white/10 p-3 text-aqua-200" href="#">
                <Linkedin size={18} />
              </a>
              <a className="rounded-2xl bg-white/10 p-3 text-aqua-200" href="mailto:your-email@example.com">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
