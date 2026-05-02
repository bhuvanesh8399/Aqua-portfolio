export default function MoodVideo({ src, opacity = "opacity-25" }) {
  return (
    <>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover ${opacity}`}
      />
      <div className="absolute inset-0 bg-ocean-950/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/40 via-transparent to-ocean-950/70" />
    </>
  );
}
