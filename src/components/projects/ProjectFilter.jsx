export default function ProjectFilter({ categories, activeCategory, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
            activeCategory === category
              ? "border-cyan-300/50 bg-cyan-300 text-ocean-950 shadow-aqua"
              : "border-cyan-300/15 bg-white/[0.05] text-slate-300 hover:border-cyan-300/35 hover:text-aqua-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
