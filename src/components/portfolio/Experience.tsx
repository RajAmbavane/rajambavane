import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          kicker="02 · JOURNEY"
          title="Where I've worked."
          subtitle="Research, AI agents, and production data systems."
        />

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

          <div className="space-y-14">
            {experiences.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-6 items-start ${
                    left ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2">
                    <div className="relative">
                      <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-primary to-secondary glow-cyan" />
                      <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                    </div>
                  </div>

                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`flex items-center gap-2.5 ${left ? "md:justify-end" : ""}`}>
                      <span className="inline-flex h-7 px-2 min-w-[1.75rem] items-center justify-center rounded-md border border-primary/30 bg-primary/10 font-mono text-[10px] font-semibold tracking-wider text-primary">
                        {e.icon}
                      </span>
                      <div className="font-mono text-xs text-primary tracking-wider uppercase">{e.org}</div>
                    </div>
                    <h3 className="mt-2 text-2xl font-bold">{e.role}</h3>
                  </div>

                  <div className={`pl-12 md:pl-0 ${left ? "md:pl-12" : "md:pr-12"}`}>
                    <ul className="glass rounded-2xl p-5 space-y-2.5 text-sm text-muted-foreground">
                      {e.points.map((pt, k) => (
                        <li key={k} className="flex gap-2.5">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span className="text-foreground/80">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}