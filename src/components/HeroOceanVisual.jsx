import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const characters = [
  {
    id: "dolphin",
    name: "Dolphin",
    image: "/hero/dolphin.png",
    badge: "Smooth Mode",
    title: "Friendly builder flow",
    desktopTitle: "Dolphin keeps the journey friendly and clean.",
    desktop: {
      left: "10%",
      top: "10%",
      size: "h-[390px] w-[390px]"
    },
    mobile: {
      left: "-10%",
      top: "30%",
      size: "h-40 w-56"
    }
  },
  {
    id: "orca",
    name: "Orca",
    image: "/hero/orca.png",
    badge: "Power Mode",
    title: "Deep problem solving",
    desktopTitle: "Orca represents confidence and deep problem solving.",
    desktop: {
      left: "45%",
      top: "30%",
      size: "h-[450px] w-[350px]"
    },
    mobile: {
      left: "20%",
      top: "30%",
      size: "h-48 w-48"
    }
  },
  {
    id: "penguin",
    name: "Penguin",
    image: "/hero/penguin.png",
    badge: "Helper Mode",
    title: "Learning support",
    desktopTitle: "Penguin supports beginner-friendly learning.",
    desktop: {
      left: "15%",
      top: "60%",
      size: "h-[350px] w-[250px]"
    },
    mobile: {
      left: "65%",
      top: "20%",
      size: "h-60 w-30"
    }
  }
];

const characterMap = characters.reduce((acc, character) => {
  acc[character.id] = character;
  return acc;
}, {});

function useScreenMode() {
  const [screenMode, setScreenMode] = useState("mobile");

  useEffect(() => {
    const checkScreen = () => {
      setScreenMode(window.innerWidth >= 1024 ? "desktop" : "mobile");
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return screenMode;
}

export default function HeroOceanVisual() {
  const [activeId, setActiveId] = useState("dolphin");
  const [isManual, setIsManual] = useState(false);
  const screenMode = useScreenMode();
  const isDesktop = screenMode === "desktop";

  const activeCharacter = useMemo(() => {
    return characterMap[activeId] || characterMap.dolphin;
  }, [activeId]);

  useEffect(() => {
    if (isManual) return;

    const timer = setInterval(() => {
      setActiveId((current) => {
        const currentIndex = characters.findIndex((item) => item.id === current);
        const nextIndex = (currentIndex + 1) % characters.length;
        return characters[nextIndex].id;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isManual]);

  const activateCharacter = (id) => {
    setIsManual(true);
    setActiveId(id);
  };

  const restartAutoLoop = () => {
    setIsManual(false);
  };

  const tapNextCharacter = () => {
    setIsManual(true);

    setActiveId((current) => {
      const currentIndex = characters.findIndex((item) => item.id === current);
      const nextIndex = (currentIndex + 1) % characters.length;
      return characters[nextIndex].id;
    });

    setTimeout(() => {
      setIsManual(false);
    }, 5000);
  };

  return (
    <div
      className="relative mx-auto mt-4 h-[320px] w-full max-w-[390px] overflow-hidden sm:h-[420px] sm:max-w-[520px] lg:mt-0 lg:h-[660px] lg:max-w-[640px] lg:overflow-visible"
      onMouseLeave={restartAutoLoop}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/10 blur-3xl sm:h-[340px] sm:w-[340px] lg:h-[520px] lg:w-[520px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.9, 0.45]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-2xl sm:h-[300px] sm:w-[300px] lg:h-[460px] lg:w-[460px]"
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.25, 0.65, 0.25]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/20 sm:h-[280px] sm:w-[280px] lg:h-[440px] lg:w-[440px]"
        animate={{
          scale: [0.94, 1.06, 0.94],
          opacity: [0.3, 0.85, 0.3]
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/15 sm:h-[360px] sm:w-[360px] lg:h-[560px] lg:w-[560px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10 sm:h-[430px] sm:w-[430px] lg:h-[660px] lg:w-[660px]"
        animate={{
          scale: [0.98, 1.04, 0.98],
          opacity: [0.12, 0.38, 0.12]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: isDesktop ? 16 : 9 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-sky-200/25"
            style={{
              width: `${4 + (index % 3) * 3}px`,
              height: `${4 + (index % 3) * 3}px`,
              left: `${9 + index * (isDesktop ? 6 : 9)}%`,
              bottom: `${index % 4 === 0 ? 12 : 0}%`
            }}
            animate={{
              y: isDesktop ? [-10, -190] : [-10, -110],
              x: [0, index % 2 === 0 ? 10 : -10, 0],
              opacity: [0, 0.75, 0],
              scale: [0.7, 1.25, 0.9]
            }}
            transition={{
              duration: 4 + index * 0.22,
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-40 hidden lg:grid lg:grid-rows-3">
        <button
          type="button"
          onMouseEnter={() => activateCharacter("orca")}
          className="cursor-pointer"
          aria-label="Activate orca"
        />
        <button
          type="button"
          onMouseEnter={() => activateCharacter("dolphin")}
          className="cursor-pointer"
          aria-label="Activate dolphin"
        />
        <button
          type="button"
          onMouseEnter={() => activateCharacter("penguin")}
          className="cursor-pointer"
          aria-label="Activate penguin"
        />
      </div>

      <button
        type="button"
        onClick={tapNextCharacter}
        className="absolute inset-0 z-30 lg:hidden"
        aria-label="Switch ocean character"
      />

      <div className="absolute inset-0 z-20">
        {characters.map((character) => {
          const isActive = activeId === character.id;
          const config = isDesktop ? character.desktop : character.mobile;

          return (
            <motion.img
              key={character.id}
              src={character.image}
              alt={character.name}
              className={`absolute -translate-x-1/2 -translate-y-1/2 object-contain ${config.size}`}
              style={{
                left: config.left,
                top: config.top,
                transformOrigin: "center"
              }}
              initial={false}
              animate={{
                opacity: isActive ? 1 : isDesktop ? 0.32 : 0.18,
                scale: isActive ? (isDesktop ? 1.08 : 1) : isDesktop ? 0.86 : 0.75,
                zIndex: isActive ? 30 : character.id === "penguin" ? 12 : 10,
                y: isActive
                  ? isDesktop
                    ? [0, -13, 0]
                    : [0, -8, 0]
                  : [0, -4, 0],
                rotate:
                  character.id === "penguin"
                    ? isActive
                      ? [0, 2, -2, 0]
                      : [0, 1, -1, 0]
                    : isActive
                      ? [0, -1.5, 1.5, 0]
                      : [0, -0.8, 0.8, 0],
                filter: isActive
                  ? "drop-shadow(0 0 34px rgba(125, 211, 252, 0.45))"
                  : "drop-shadow(0 0 16px rgba(125, 211, 252, 0.12)) grayscale(20%)"
              }}
              transition={{
                opacity: { duration: 0.35 },
                scale: { duration: 0.4 },
                filter: { duration: 0.35 },
                y: {
                  duration: isActive ? 3.2 : 4.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: isActive ? 4 : 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          );
        })}
      </div>

      <motion.div
        key={`${activeCharacter.id}-badge`}
        className="absolute right-3 top-3 z-50 rounded-full border border-sky-300/20 bg-slate-950/75 px-3 py-2 text-[10px] font-black text-sky-100 shadow-lg shadow-sky-950/30 backdrop-blur sm:right-5 sm:top-5 sm:text-xs lg:right-8 lg:top-12"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        ✨ {activeCharacter.badge}
      </motion.div>

      <motion.div
        key={`${activeCharacter.id}-mobile-title`}
        className="absolute bottom-5 left-1/2 z-50 w-auto -translate-x-1/2 rounded-full border border-sky-300/15 bg-slate-950/75 px-4 py-2 text-center text-[10px] font-black text-white/90 shadow-xl shadow-sky-950/40 backdrop-blur lg:hidden"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {activeCharacter.title}
      </motion.div>

      <motion.div
        key={`${activeCharacter.id}-desktop-title`}
        className="absolute bottom-10 left-1/2 z-50 hidden w-auto min-w-[310px] -translate-x-1/2 rounded-2xl border border-sky-300/15 bg-slate-950/75 px-4 py-3 text-center text-xs font-bold leading-5 text-white/90 shadow-xl shadow-sky-950/40 backdrop-blur lg:block"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {activeCharacter.desktopTitle}
      </motion.div>

      <div className="absolute left-3 top-3 z-50 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold text-sky-100/75 backdrop-blur lg:hidden">
        Tap to switch
      </div>
    </div>
  );
}
