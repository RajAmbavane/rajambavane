import { motion } from "framer-motion";
import { Bot, Code2, Heart } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skills } from "@/data/portfolio";

const groups = [
  {
    key: "ai", title: "AI / LLM", icon: Bot, items: skills.ai, highlight: true,
    iconBg: "bg-primary/15 border-primary/30", iconColor: "text-primary",
  },
  {
    key: "technical", title: "Technical", icon: Code2, items: skills.technical, highlight: false,
    iconBg: "bg-secondary/15 border-secondary/30", iconColor: "text-secondary",
  },
  {
    key: "soft", title: "Soft Skills", icon: Heart, items: skills.soft, highlight: false,
    iconBg: "bg-primary/15 border-primary/30", iconColor: "text-primary",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="04 · TOOLKIT"
          title="Skills & stack."
          subtitle="An AI-first toolkit, sharpened in production."
        />

        <div className="grid lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className={`relative glass rounded-2xl p-6 overflow-hidden ${g.highlight ? "border-primary/40 shadow-card" : ""}`}
              >
                {g.highlight && (
                  <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
                )}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2.5">
                      <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border ${g.iconBg}`}>
                        <Icon className={`h-4 w-4 ${g.iconColor}`} />
                      </div>
                      <h3 className="font-semibold text-lg">{g.title}</h3>
                    </div>
                    {g.highlight && (
                      <span className="font-mono text-[10px] tracking-wider text-primary">FOCUS</span>
                    )}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.02 }}
                        className={`rounded-full border px-3 py-1 text-xs font-mono transition-colors hover:border-primary/60 hover:text-primary cursor-default ${
                          g.highlight
                            ? "border-primary/30 bg-primary/5 text-foreground/90"
                            : "border-border bg-muted/40 text-muted-foreground"
                        }`}
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}