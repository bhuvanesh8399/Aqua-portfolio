import { journeySections } from "../data/sections";

export default function JourneyProgress({ activeSection }) {
  const activeIndex = journeySections.findIndex((item) => item.id === activeSection);
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;
  const progress = ((safeIndex + 1) / journeySections.length) * 100;

  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-white/10">
      <div
        className="h-full bg-aqua-400 transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
