import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MODES = {
  dolphin: {
    label: "Smooth Journey",
    text: "Dolphin guides the portfolio journey."
  },
  orca: {
    label: "Power Mode",
    text: "Orca represents confidence and deep problem solving."
  },
  penguin: {
    label: "Helper Mode",
    text: "Penguin keeps the experience friendly and simple."
  }
};

const routine = ["dolphin", "orca", "penguin"];

export default function HeroOceanVisual() {
  const [activeMode, setActiveMode] = useState("dolphin");
  const [isUserHovering, setIsUserHovering] = useState(false);
  const routineIndex = useRef(0);

  useEffect(() => {
    if (isUserHovering) return;

    const interval = setInterval(() => {
      routineIndex.current = (routineIndex.current + 1) % routine.length;
      setActiveMode(routine[routineIndex.current]);
    }, 4200);

    return () => clearInterval(interval);
  }, [isUserHovering]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const y = event.clientY - rect.top;
    const ratio = y / rect.height;

    setIsUserHovering(true);

    if (ratio < 0.34) {
      setActiveMode("orca");
    } else if (ratio > 0.68) {
      setActiveMode("penguin");
    } else {
      setActiveMode("dolphin");
    }
  };

  const handleMouseLeave = () => {
    setIsUserHovering(false);
    setActiveMode("dolphin");
  };

  const isDolphin = activeMode === "dolphin";
  const isOrca = activeMode === "orca";
  const isPenguin = activeMode === "penguin";

  return (
    <motion.div
      className="relative mx-auto mt-8 h-[330px] w-full max-w-[430px] sm:h-[400px] lg:mt-0 lg:h-[500px]"
      initial={{ opacity: 0, x: 32, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.25, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-8 rounded-full bg-aqua-400/10 blur-3xl" />

      <div className="hero-ocean-ring absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua-300/20 sm:h-[310px] sm:w-[310px] lg:h-[370px] lg:w-[370px]" />
      <div className="hero-ocean-ring hero-ocean-ring-two absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-aqua-200/10 sm:h-[260px] sm:w-[260px] lg:h-[310px] lg:w-[310px]" />

      <motion.div
        key={activeMode}
        className="absolute left-1/2 top-3 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-aqua-300/20 bg-ocean-950/75 px-4 py-2 text-xs font-black text-aqua-100 shadow-glow backdrop-blur-md"
        initial={{ opacity: 0, y: -10, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        <Sparkles size={14} className="text-aqua-300" />
        {MODES[activeMode].label}
      </motion.div>

      <motion.img
        src="/hero/orca.png"
        alt="Orca power mode"
        className="absolute right-1 top-6 z-10 hidden w-[210px] object-contain drop-shadow-[0_0_22px_rgba(56,189,248,0.25)] md:block lg:right-[-18px] lg:w-[260px]"
        animate={{
          opacity: isOrca ? 0.48 : 0.06,
          x: isOrca ? [0, -16, 0] : 0,
          y: isOrca ? [0, 12, 0] : 0,
          rotate: isOrca ? [0, -3, 0] : 0,
          scale: isOrca ? 1.04 : 0.96
        }}
        transition={{
          duration: isOrca ? 6 : 0.35,
          repeat: isOrca ? Infinity : 0,
          ease: "easeInOut"
        }}
      />

      <motion.img
        src="/hero/dolphin.png"
        alt="Dolphin guide"
        className="absolute left-1/2 top-1/2 z-20 w-[205px] -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[260px] lg:w-[305px]"
        animate={{
          opacity: isPenguin ? 0.28 : isOrca ? 0.52 : 1,
          y: isDolphin ? [0, -14, 0] : 0,
          rotate: isDolphin ? [0, 2, 0] : 0,
          scale: isDolphin ? [1, 1.03, 1] : 0.94
        }}
        transition={{
          duration: isDolphin ? 5.5 : 0.35,
          repeat: isDolphin ? Infinity : 0,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-3 right-7 z-30 sm:right-6 lg:right-10"
        animate={{
          opacity: isPenguin ? 1 : 0.18,
          y: isPenguin ? [0, -9, 0] : 0,
          rotate: isPenguin ? [0, -2, 0] : 0,
          scale: isPenguin ? 1 : 0.82
        }}
        transition={{
          duration: isPenguin ? 4 : 0.35,
          repeat: isPenguin ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <img
          src="/hero/penguin.png"
          alt="Penguin helper"
          className="w-[62px] object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.24)] sm:w-[78px] lg:w-[92px]"
        />

        <AnimatePresence>
          {isPenguin && (
            <motion.div
              className="absolute -left-28 top-3 hidden w-32 rounded-2xl border border-aqua-300/20 bg-ocean-950/75 px-3 py-2 text-xs font-bold text-aqua-100 shadow-glow backdrop-blur-md sm:block"
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.94 }}
            >
              Need help? Scroll down!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        key={`${activeMode}-text`}
        className="absolute bottom-4 left-1/2 z-40 hidden w-[260px] -translate-x-1/2 rounded-2xl border border-white/10 bg-ocean-950/65 px-4 py-3 text-center text-xs font-semibold text-slate-200 shadow-glow backdrop-blur-md sm:block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {MODES[activeMode].text}
      </motion.div>

      <span className="hero-bubble hero-bubble-one" />
      <span className="hero-bubble hero-bubble-two" />
      <span className="hero-bubble hero-bubble-three" />
    </motion.div>
  );
}
