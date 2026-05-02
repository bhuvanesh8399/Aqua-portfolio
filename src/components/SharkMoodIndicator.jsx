import { journeySections } from "../data/sections";

export default function SharkMoodIndicator({ activeSection }) {
  const current =
    journeySections.find((item) => item.id === activeSection) || journeySections[0];

  return (
    <div className="fixed bottom-5 left-5 z-50 hidden max-w-xs rounded-2xl border border-white/10 bg-ocean-950/70 px-4 py-3 text-sm text-white shadow-glow backdrop-blur-xl md:block">
      <p className="font-black text-aqua-300">Ocean Mood: {current.mood}</p>
      <p className="mt-1 text-xs leading-5 text-slate-300">{current.story}</p>
    </div>
  );
}
