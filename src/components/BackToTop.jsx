import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#home"
      className="fixed bottom-20 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-aqua-400 font-black text-ocean-950 shadow-glow"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </a>
  );
}
