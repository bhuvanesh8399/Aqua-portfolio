import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import PageWrapper from "../components/common/PageWrapper";
import SectionTitle from "../components/common/SectionTitle";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();

    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <PageWrapper>
      <SectionTitle
        eyebrow="Contact"
        title="Let’s build something intelligent"
        description="I’m open to software engineering opportunities, internships, project collaborations, and AI/full-stack development discussions."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="aqua-card p-7">
          <h2 className="text-2xl font-bold text-white">Contact Details</h2>
          <p className="mt-4 leading-8 text-slate-400">
            Reach out for projects, opportunities, or technical discussions.
          </p>

          <div className="mt-7 space-y-4">
            <ContactItem icon={Mail} label="Email" value="yourmail@example.com" />
            <ContactItem icon={Github} label="GitHub" value="github.com/bhuvanesh8399" />
            <ContactItem icon={Linkedin} label="LinkedIn" value="Add your LinkedIn URL" />
            <ContactItem icon={MapPin} label="Location" value="India" />
          </div>
        </section>

        <form onSubmit={handleSubmit} className="aqua-card p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">Name</label>
              <input className="glass-input" placeholder="Your name" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">Email</label>
              <input className="glass-input" type="email" placeholder="your@email.com" required />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-300">Subject</label>
            <input className="glass-input" placeholder="Project / Opportunity / Discussion" required />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-300">Message</label>
            <textarea
              className="glass-input min-h-40 resize-y"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 px-6 py-3 font-bold text-ocean-950 transition-all hover:-translate-y-1 hover:shadow-aqua"
          >
            Send Message <Send size={17} />
          </button>

          {submitted && (
            <p className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100">
              Message ready to send. Let’s build something intelligent.
            </p>
          )}
        </form>
      </div>
    </PageWrapper>
  );
}

function ContactItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-cyan-300/10 bg-white/[0.045] p-4">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300/10 text-aqua-300">
        <Icon size={19} />
      </div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm font-semibold text-slate-200">{value}</p>
      </div>
    </div>
  );
}
