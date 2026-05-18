import { useEffect, useState } from "react";
import { Activity, PauseCircle, PlayCircle } from "lucide-react";

export default function MotionToggle() {
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    const savedValue = localStorage.getItem("ocean-motion-enabled");
    const nextMotionEnabled = savedValue !== "false";

    setMotionEnabled(nextMotionEnabled);
    document.documentElement.classList.toggle("motion-off", !nextMotionEnabled);
    window.dispatchEvent(
      new CustomEvent("ocean-motion-change", {
        detail: { enabled: nextMotionEnabled }
      })
    );
  }, []);

  const toggleMotion = () => {
    const nextValue = !motionEnabled;

    setMotionEnabled(nextValue);
    localStorage.setItem("ocean-motion-enabled", String(nextValue));
    document.documentElement.classList.toggle("motion-off", !nextValue);
    window.dispatchEvent(
      new CustomEvent("ocean-motion-change", {
        detail: { enabled: nextValue }
      })
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <div className="max-w-[180px] rounded-2xl border border-sky-300/15 bg-slate-950/75 px-3 py-2 text-right text-[10px] font-bold leading-4 text-sky-100/80 shadow-lg shadow-sky-950/30 backdrop-blur-md sm:max-w-[240px] sm:text-xs">
        <span className="hidden sm:inline">
          Feeling slow? Turn off motion.
        </span>

        <span className="sm:hidden">
          Slow? Turn off motion.
        </span>
      </div>

      <button
        type="button"
        onClick={toggleMotion}
        title={
          motionEnabled
            ? "Turn off motion for a smoother experience"
            : "Turn on motion animations"
        }
        aria-label={
          motionEnabled
            ? "Turn off motion for a smoother experience"
            : "Turn on motion animations"
        }
        className={`group inline-flex items-center gap-2 rounded-full border px-4 py-3 text-xs font-black shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 sm:text-sm ${
          motionEnabled
            ? "border-sky-300/25 bg-sky-300/15 text-sky-100 shadow-sky-950/30 hover:bg-sky-300/25"
            : "border-white/10 bg-slate-950/75 text-white/75 shadow-slate-950/30 hover:bg-white/10"
        }`}
      >
        <Activity size={16} className="hidden sm:block" />

        {motionEnabled ? (
          <PauseCircle size={17} />
        ) : (
          <PlayCircle size={17} />
        )}

        <span>{motionEnabled ? "Motion: Off" : "Motion: On"}</span>
      </button>
    </div>
  );
}
