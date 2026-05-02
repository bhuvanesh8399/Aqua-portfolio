export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="absolute left-[-160px] top-[-120px] h-96 w-96 animate-pulseGlow rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute right-[-180px] top-32 h-[28rem] w-[28rem] animate-pulseGlow rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-[-220px] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 animate-wave rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="wave-mask" />
    </div>
  );
}
