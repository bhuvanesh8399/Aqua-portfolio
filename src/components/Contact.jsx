import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import MoodVideo from "./MoodVideo";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <MoodVideo src="/videos/dolphin.mp4" opacity="opacity-20" />

      <div className="section-container relative z-10">
        <SectionTitle
          label="Contact"
          title="Let’s Swim Forward Together"
          description="At the end, both sharks move peacefully together. This represents collaboration, connection, and future opportunities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {[
              [Mail, "Email", "your-email@example.com"],
              [Github, "GitHub", "github.com/bhuvanesh8399"],
              [Linkedin, "LinkedIn", "Add your LinkedIn"],
              [MapPin, "Location", "India"]
            ].map(([Icon, label, value]) => (
              <div key={label} className="glass-panel flex items-center gap-4 rounded-3xl p-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-400/15 text-aqua-200">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-aqua-300">
                    {label}
                  </p>
                  <p className="mt-1 text-slate-200">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="glass-panel rounded-[2rem] p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input-field" placeholder="Name" />
              <input className="input-field" placeholder="Email" type="email" />
            </div>
            <input className="input-field mt-4" placeholder="Subject" />
            <textarea className="input-field mt-4 min-h-36 resize-none" placeholder="Message" />

            <button
              type="button"
              className="water-button mt-5 inline-flex items-center gap-2 rounded-full bg-aqua-400 px-6 py-3 font-black text-ocean-950 hover:bg-aqua-300"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
