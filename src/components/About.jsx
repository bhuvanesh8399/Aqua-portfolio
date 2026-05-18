import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  GraduationCap,
  MapPin,
  Sparkles
} from "lucide-react";
import {
  academicFoundation,
  collegeJourney,
  proofHighlights
} from "../data/profileProof";

export default function About() {
  return (
    <section className="relative scroll-mt-28 overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
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
            <Sparkles size={15} />
            About My Journey
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Developer Story + College Journey
          </h2>

          <p className="mt-5 text-base font-medium leading-8 text-slate-200/80 sm:text-lg">
            I am building my path as an AI + Full Stack Developer by combining
            academic fundamentals, coding practice, and real-world project
            development.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-sky-950/20 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-300/15 text-sky-100">
                <Brain size={24} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-200/70">
                  Developer Story
                </p>
                <h3 className="text-2xl font-black text-white">
                  From learning basics to building products
                </h3>
              </div>
            </div>

            <div className="space-y-5 text-sm font-medium leading-7 text-slate-200/82 sm:text-base sm:leading-8">
              <p>
                I started my journey by learning programming fundamentals and
                gradually moved into web development, full-stack systems, and
                AI/ML project ideas. I enjoy building projects that are not only
                visually clean, but also practical and connected to real use
                cases.
              </p>

              <p>
                My current focus is to become stronger in problem solving,
                backend logic, database design, deployment, and AI integration.
                I like turning ideas into working products with clear UI,
                structured code, and useful features.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {proofHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-sky-300/10 bg-slate-950/30 p-4"
                  >
                    <Icon className="mb-3 text-sky-200" size={20} />
                    <p className="text-xs font-bold text-slate-300/75">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-black text-white">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-sky-300/15 bg-slate-950/40 p-6 shadow-2xl shadow-sky-950/30 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-sky-300/10" />
            <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border border-sky-300/10" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-300/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-300 text-slate-950 shadow-lg shadow-sky-400/20">
                    <GraduationCap size={25} />
                  </span>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-200/70">
                      College Journey
                    </p>
                    <h3 className="text-2xl font-black text-white">
                      Academic foundation
                    </h3>
                  </div>
                </div>

                <span className="w-fit rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black text-emerald-100">
                  {collegeJourney.status}
                </span>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-200/70">
                  {collegeJourney.degree}
                </p>

                <h4 className="mt-3 text-xl font-black leading-snug text-white sm:text-2xl">
                  {collegeJourney.college}
                </h4>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-950/35 p-4">
                    <p className="text-xs font-bold text-slate-300/70">
                      Department
                    </p>
                    <p className="mt-1 text-sm font-black text-white">
                      {collegeJourney.department}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-950/35 p-4">
                    <p className="text-xs font-bold text-slate-300/70">Batch</p>
                    <p className="mt-1 text-sm font-black text-white">
                      {collegeJourney.batch}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm font-medium leading-7 text-slate-200/80">
                  {collegeJourney.story}
                </p>
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-black text-white">
                  <BookOpen size={18} className="text-sky-200" />
                  Core Subjects
                </div>

                <div className="flex flex-wrap gap-2">
                  {collegeJourney.coreSubjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-2 text-xs font-bold text-sky-100"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-black text-white">
                  <MapPin size={18} className="text-cyan-200" />
                  Practical Learning Direction
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {collegeJourney.practicalDirections.map((direction) => (
                    <div
                      key={direction}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-sky-300/25 hover:bg-sky-300/10"
                    >
                      <ArrowRight
                        size={17}
                        className="text-sky-200 transition group-hover:translate-x-1"
                      />
                      <span className="text-sm font-bold text-slate-100/90">
                        {direction}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {academicFoundation.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                className="rounded-[1.5rem] border border-sky-300/10 bg-white/[0.06] p-5 shadow-lg shadow-sky-950/15 backdrop-blur-xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-sky-300/15 text-sky-100">
                  <Icon size={22} />
                </span>

                <h4 className="text-lg font-black text-white">{item.title}</h4>

                <p className="mt-3 text-sm font-medium leading-7 text-slate-200/75">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
