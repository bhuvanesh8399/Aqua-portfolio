import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Leaf,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  leadershipHighlights,
  leadershipImpact,
  leadershipStats
} from "../data/profileProof";

export default function LeadershipImpact() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black text-emerald-100 shadow-lg shadow-emerald-950/20 backdrop-blur">
            <Leaf size={15} />
            Beyond Code
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Leadership & Impact
          </h2>

          <p className="mt-5 text-base font-medium leading-8 text-slate-200/80 sm:text-lg">
            Beyond coding, I also lead student initiatives that build teamwork,
            responsibility, communication, and real-world impact.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-slate-950/45 p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-300 text-slate-950 shadow-lg shadow-emerald-400/20">
                    <ShieldCheck size={28} />
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-200/70">
                      Campus Leadership
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                      {leadershipImpact.role}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-sky-100/80">
                      {leadershipImpact.institution}
                    </p>
                  </div>
                </div>

                <span className="w-fit rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black text-emerald-100">
                  Student-led Initiative
                </span>
              </div>

              <p className="text-sm font-medium leading-7 text-slate-200/82 sm:text-base sm:leading-8">
                {leadershipImpact.summary}
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200/70">
                    Vision
                  </p>
                  <p className="text-sm font-medium leading-7 text-slate-200/78">
                    {leadershipImpact.vision}
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-sky-200/70">
                    Mission
                  </p>
                  <p className="text-sm font-medium leading-7 text-slate-200/78">
                    {leadershipImpact.mission}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 flex items-center gap-2 text-sm font-black text-white">
                  <Sparkles size={17} className="text-emerald-200" />
                  Activities & Initiatives
                </p>

                <div className="flex flex-wrap gap-2">
                  {leadershipImpact.activities.map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-2 text-xs font-bold text-emerald-100"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-3 text-sm font-black text-white">
                  Leadership Skills
                </p>

                <div className="flex flex-wrap gap-2">
                  {leadershipImpact.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-2 text-xs font-bold text-sky-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={leadershipImpact.link}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-emerald-400/20 transition hover:-translate-y-0.5 hover:bg-emerald-200 sm:w-auto"
              >
                View Nature Club
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.article>

          <div className="grid gap-6">
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              {leadershipStats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-emerald-300/10 bg-white/[0.06] p-5 shadow-lg shadow-emerald-950/15 backdrop-blur-xl"
                  >
                    <Icon className="mb-4 text-emerald-200" size={24} />
                    <p className="text-xs font-bold text-slate-300/70">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xl font-black text-white">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-sky-950/20 backdrop-blur-xl sm:p-7"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h3 className="text-xl font-black text-white">
                What this experience adds
              </h3>

              <div className="mt-5 grid gap-4">
                {leadershipHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-3xl border border-white/10 bg-slate-950/35 p-5 transition hover:border-emerald-300/25 hover:bg-emerald-300/10"
                    >
                      <div className="flex gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-300/15 text-emerald-100">
                          <Icon size={21} />
                        </span>

                        <div>
                          <h4 className="font-black text-white">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm font-medium leading-7 text-slate-200/75">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-emerald-300/15 bg-emerald-300/10 p-6 shadow-xl shadow-emerald-950/20 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-200/75">
                HR Value
              </p>
              <p className="mt-3 text-lg font-black text-white">
                I can work with people, lead initiatives, plan activities, and
                communicate beyond technical tasks.
              </p>

              <a
                href="#contact"
                className="group mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-slate-950/45 px-5 py-3 text-sm font-black text-emerald-100 transition hover:bg-emerald-300 hover:text-slate-950"
              >
                Connect with me
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
