import { motion } from "framer-motion";

const sharkModes = {
  intro: {
    blue: { x: [0, 80, 150], y: [0, -20, 10], rotate: [0, 4, -2], scale: [1, 1.03, 1], duration: 8 },
    yellow: { x: [0, -70, -140], y: [0, 18, -8], rotate: [0, -4, 2], scale: [1, 1.03, 1], duration: 9 }
  },
  explore: {
    blue: { x: [0, 60, 20, 100], y: [0, 35, -25, 10], rotate: [0, 8, -6, 3], scale: [1, 1.03, 1], duration: 10 },
    yellow: { x: [0, -50, -100, -30], y: [0, -25, 25, 8], rotate: [0, -8, 6, -3], scale: [1, 1.03, 1], duration: 11 }
  },
  fast: {
    blue: { x: [0, 180, 320], y: [0, -18, 18], rotate: [0, 2, -2], scale: [1, 1.08, 1], duration: 4 },
    yellow: { x: [0, -170, -300], y: [0, 20, -16], rotate: [0, -2, 2], scale: [1, 1.08, 1], duration: 4.3 }
  },
  focus: {
    blue: { x: [0, 120, 70], y: [0, -30, -8], rotate: [0, -8, 2], scale: [1, 1.08, 1], duration: 6 },
    yellow: { x: [0, -120, -70], y: [0, 30, 8], rotate: [0, 8, -2], scale: [1, 1.08, 1], duration: 6 }
  },
  ocean: {
    blue: { x: [0, 90, 130, 60], y: [0, -20, 18, -12], rotate: [0, 4, -4, 2], scale: [1, 1.05, 1], duration: 7 },
    yellow: { x: [0, -40, -80, -20], y: [0, 35, 0, -35], rotate: [0, -8, 0, 8], scale: [1, 1.04, 1], duration: 7.5 }
  },
  celebrate: {
    blue: { x: [0, 45, 90, 45], y: [0, -35, 0, 35], rotate: [0, 6, 0, -6], scale: [1, 1.06, 1.02, 1], duration: 7 },
    yellow: { x: [0, -45, -90, -45], y: [0, 35, 0, -35], rotate: [0, -6, 0, 6], scale: [1, 1.06, 1.02, 1], duration: 7.5 }
  },
  fight: {
    blue: { x: [0, 130, 60, 150], y: [0, -25, 20, -10], rotate: [0, -14, 12, -8], scale: [1, 1.1, 1.03, 1.08], duration: 3.2 },
    yellow: { x: [0, -130, -60, -150], y: [0, 25, -20, 10], rotate: [0, 14, -12, 8], scale: [1, 1.1, 1.03, 1.08], duration: 3.2 }
  },
  friends: {
    blue: { x: [0, 70, 140], y: [0, -12, 10], rotate: [0, 2, -2], scale: [1, 1.03, 1], duration: 7 },
    yellow: { x: [0, 72, 145], y: [0, 10, -8], rotate: [0, 2, -2], scale: [1, 1.03, 1], duration: 7.3 }
  },
  love: {
    blue: { x: [0, 50, 100, 50], y: [0, -35, 0, 35], rotate: [0, 5, 0, -5], scale: [1, 1.04, 1], duration: 8 },
    yellow: { x: [0, -50, -100, -50], y: [0, 35, 0, -35], rotate: [0, -5, 0, 5], scale: [1, 1.04, 1], duration: 8 }
  },
  together: {
    blue: { x: [0, 80, 160], y: [0, -10, 10], rotate: [0, 2, -2], scale: [1, 1.03, 1], duration: 7 },
    yellow: { x: [0, 75, 150], y: [0, 14, -6], rotate: [0, 2, -2], scale: [1, 1.03, 1], duration: 7.5 }
  }
};

function getTransition(duration, reduceMotion) {
  if (reduceMotion) return { duration: 0 };
  return {
    duration,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut"
  };
}

export default function OceanBackground({ mode = "intro", reduceMotion = false }) {
  const current = sharkModes[mode] || sharkModes.intro;

  return (
    <div className="ocean-bg pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="ocean-light" />

      <div className="ocean-wave ocean-wave-one" />
      <div className="ocean-wave ocean-wave-two" />
      <div className="ocean-wave ocean-wave-three" />

      <div className="bubble bubble-one" />
      <div className="bubble bubble-two" />
      <div className="bubble bubble-three" />
      <div className="bubble bubble-four" />
      <div className="bubble bubble-five" />

      <motion.div
        className="absolute left-[5%] top-[36%] w-[120px] opacity-25 md:w-[220px] md:opacity-35 lg:w-[290px]"
        animate={
          reduceMotion
            ? {}
            : {
                x: current.blue.x,
                y: current.blue.y,
                rotate: current.blue.rotate,
                scale: current.blue.scale
              }
        }
        transition={getTransition(current.blue.duration, reduceMotion)}
      >
        <img src="/sharks/blue-shark.png" alt="" className="w-full" />
      </motion.div>

      <motion.div
        className="absolute right-[6%] top-[55%] w-[115px] opacity-25 md:w-[210px] md:opacity-35 lg:w-[280px]"
        animate={
          reduceMotion
            ? {}
            : {
                x: current.yellow.x,
                y: current.yellow.y,
                rotate: current.yellow.rotate,
                scale: current.yellow.scale
              }
        }
        transition={getTransition(current.yellow.duration, reduceMotion)}
      >
        <img src="/sharks/yellow-shark.png" alt="" className="w-full scale-x-[-1]" />
      </motion.div>
    </div>
  );
}
