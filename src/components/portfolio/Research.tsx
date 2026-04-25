import { motion } from "framer-motion";
import { BookOpen, Award as AwardIcon, Trophy, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { publications, certifications, awards } from "@/data/portfolio";

export default function Research() {
  return (
    <>
      <section id="publications" className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker="05 · RESEARCH" title="Publications & certifications." />

          <div className="grid lg:grid-cols-2 gap-5">
            {/* Publications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Publications</h3>
              </div>
              <ul className="space-y-3">
                {publications.map((p, i) => (
                  <li key={i} className="rounded-xl border border-border bg-muted/30 p-4">
                    <div className="text-sm font-medium">{p.title}</div>
                    <div className="mt-1 font-mono text-[11px] text-secondary-glow uppercase tracking-wider">
                      {p.status}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Core certs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/15 border border-secondary/30">
                  <GraduationCap className="h-4 w-4 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg">Core Certifications</h3>
              </div>
              <ul className="space-y-2.5">
                {certifications.core.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-mono text-[10px] tracking-wider text-muted-foreground mb-3">
                  ADDITIONAL
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {certifications.additional.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="awards" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader kicker="06 · RECOGNITION" title="Awards." />
          <div className="grid md:grid-cols-2 gap-5">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/40 transition"
              >
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                  {i === 0 ? (
                    <Trophy className="h-5 w-5 text-primary" />
                  ) : (
                    <AwardIcon className="h-5 w-5 text-secondary" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">{a.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}