import { Waves } from "lucide-react";

export default function MotionToggle({ reduceMotion, setReduceMotion }) {
  return (
    <button
      onClick={() => setReduceMotion((value) => !value)}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ocean-950/75 px-4 py-3 text-sm font-bold text-white shadow-glow backdrop-blur-xl"
    >
      <Waves size={17} />
      Motion: {reduceMotion ? "Off" : "On"}
    </button>
  );
}
