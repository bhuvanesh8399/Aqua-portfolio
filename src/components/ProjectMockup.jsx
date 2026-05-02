export default function ProjectMockup({ type = "chart" }) {
  if (type === "pond") {
    return (
      <div className="rounded-3xl border border-aqua-200/15 bg-ocean-950/70 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-aqua-300">Pond Health</span>
          <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-xs text-emerald-200">Safe</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {["DO 7.2", "pH 7.5", "Feed 12kg"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/10 p-3 text-xs text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "risk") {
    return (
      <div className="rounded-3xl border border-aqua-200/15 bg-ocean-950/70 p-4">
        <div className="mb-3 text-xs font-bold text-aqua-300">District Risk Monitor</div>
        <div className="space-y-2">
          {["Chennai", "Madurai", "Coimbatore"].map((item, index) => (
            <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 p-3 text-xs">
              <span>{item}</span>
              <span className={index === 0 ? "text-red-300" : "text-emerald-200"}>
                {index === 0 ? "High" : "Low"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="rounded-3xl border border-aqua-200/15 bg-ocean-950/70 p-4">
        <div className="mb-3 text-xs font-bold text-aqua-300">Farmer Assistant</div>
        <div className="space-y-2 text-xs">
          <div className="w-3/4 rounded-2xl bg-white/10 p-3 text-slate-200">Crop disease help?</div>
          <div className="ml-auto w-4/5 rounded-2xl bg-aqua-400/15 p-3 text-aqua-100">
            Upload leaf image for diagnosis.
          </div>
        </div>
      </div>
    );
  }

  if (type === "route") {
    return (
      <div className="rounded-3xl border border-aqua-200/15 bg-ocean-950/70 p-4">
        <div className="mb-3 text-xs font-bold text-aqua-300">Ambulance ETA</div>
        <div className="h-24 rounded-2xl bg-white/10 p-3">
          <div className="h-full rounded-2xl border border-dashed border-aqua-300/30" />
        </div>
      </div>
    );
  }

  if (type === "grade") {
    return (
      <div className="rounded-3xl border border-aqua-200/15 bg-ocean-950/70 p-4">
        <div className="mb-3 text-xs font-bold text-aqua-300">Evaluation Report</div>
        {["Clarity", "Grammar", "Structure"].map((item, index) => (
          <div key={item} className="mb-2 rounded-2xl bg-white/10 p-2 text-xs text-slate-200">
            {item}: {82 - index * 7}%
          </div>
        ))}
      </div>
    );
  }

  if (type === "contract") {
    return (
      <div className="rounded-3xl border border-aqua-200/15 bg-ocean-950/70 p-4">
        <div className="mb-3 text-xs font-bold text-aqua-300">Contract Risk</div>
        <div className="rounded-2xl bg-amber-400/10 p-3 text-xs text-amber-100">Medium Risk</div>
        <div className="mt-2 rounded-2xl bg-white/10 p-3 text-xs text-slate-200">Payment clause missing</div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-aqua-200/15 bg-ocean-950/70 p-4">
      <div className="mb-3 text-xs font-bold text-aqua-300">Forecast Chart</div>
      <div className="flex h-24 items-end gap-2">
        {[30, 54, 42, 72, 58, 84, 68].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-xl bg-aqua-400/50"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}
