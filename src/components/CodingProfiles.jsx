import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react";
import { codingProfiles } from "../data/profileProof";

export default function CodingProfiles() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-white/10 px-4 py-2 text-xs font-black text-sky-100 shadow-lg shadow-sky-950/20 backdrop-blur">
            <Code2 size={15} />
            Public Developer Proof
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Coding Arena
          </h2>

          <p className="mt-5 text-base font-medium leading-8 text-slate-200/80 sm:text-lg">
            My public coding and developer profiles for problem solving, project
            source code, professional growth, and software engineering practice.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {codingProfiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <motion.article
                key={profile.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-sky-950/20 backdrop-blur-xl"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${profile.accent} opacity-60 transition group-hover:opacity-100`}
                />
                <div className="pointer-events-none absolute -left-24 top-0 h-full w-20 rotate-12 bg-white/10 blur-xl transition duration-700 group-hover:left-[120%]" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-sky-300/15 bg-white/10 text-sky-100 shadow-lg shadow-sky-950/20">
                      <Icon size={27} />
                    </span>

                    <span className="rounded-full border border-sky-300/15 bg-slate-950/50 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-sky-100/75">
                      {profile.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white">{profile.title}</h3>

                  <p className="mt-4 min-h-[84px] text-sm font-medium leading-7 text-slate-200/78">
                    {profile.description}
                  </p>

                  <div className="mt-5">
                    <p className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-sky-200/70">
                      <Sparkles size={14} />
                      Focus
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {profile.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-bold text-slate-100/85"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-sky-400/20 transition hover:-translate-y-0.5 hover:bg-sky-200"
                  >
                    {profile.button}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-8 rounded-[2rem] border border-sky-300/10 bg-white/[0.06] p-5 shadow-xl shadow-sky-950/20 backdrop-blur-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-black text-white">
                Coding practice + project proof + professional network
              </p>
              <p className="mt-1 text-sm font-medium text-slate-200/70">
                These profiles help viewers, HR, and clients verify my learning,
                projects, and software development direction.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-5 py-3 text-sm font-black text-sky-100 transition hover:bg-sky-300 hover:text-slate-950"
            >
              Let&apos;s connect
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
