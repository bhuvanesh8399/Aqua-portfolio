import { Waves } from "lucide-react";

export default function MotionToggle({ reduceMotion, setReduceMotion }) {
  return (
    <button
      onClick={() => setReduceMotion((value) => !value)}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ocean-950/75 px-3 py-2 text-xs font-bold text-white shadow-glow backdrop-blur-xl sm:px-4 sm:py-3 sm:text-sm"
    >
      <Waves size={16} />
      <span className="hidden sm:inline">
        Motion: {reduceMotion ? "Off" : "On"}
      </span>
    </button>
  );
}
