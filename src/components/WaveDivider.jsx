export default function WaveDivider() {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M0,64 C160,120 320,8 480,64 C640,120 800,8 960,64 C1080,106 1160,78 1200,58 L1200,120 L0,120 Z"
          fill="rgba(56,189,248,0.08)"
        />
        <path
          d="M0,72 C180,20 300,120 480,72 C660,20 780,120 960,72 C1060,42 1140,50 1200,70"
          fill="none"
          stroke="rgba(125,211,252,0.38)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
