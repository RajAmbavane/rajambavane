import { motion } from "framer-motion";
import { Github, ArrowUpRight, Star, ExternalLink, Sprout, Shield, Network, Leaf, Bot, Sparkles, Pill, Share2, Trophy } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { featuredProjects, projects } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  network: Network,
  leaf: Leaf,
  bot: Bot,
  sprout: Sprout,
  spark: Sparkles,
  pill: Pill,
  graph: Share2,
};

function ProjectVisual({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="relative aspect-square w-full max-w-sm mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 to-secondary/25 blur-2xl animate-pulse-glow" />
      <div className="relative h-full w-full rounded-3xl glass flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative inline-flex h-28 w-28 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
          <Icon className="h-14 w-14 text-primary" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="03 · WORK" />

        {/* Featured */}
        <div className="grid grid-cols-1 gap-8">
          {featuredProjects.map((f, fi) => {
            const FeaturedIcon = iconMap[f.iconKey] ?? Sparkles;
            return (
              <motion.a
                key={f.name}
                href={f.github}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: fi * 0.1 }}
                className="group relative block overflow-hidden rounded-3xl glass border-glow p-8 md:p-10 hover:shadow-glow-cyan transition-all"
              >
                <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl group-hover:bg-secondary/30 transition" />

                <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 border border-secondary/30 px-3 py-1 font-mono text-xs text-secondary-glow">
                      <Star className="h-3 w-3 fill-current" /> FLAGSHIP PROJECT
                    </div>
                    <h3 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                      {f.name}
                    </h3>
                    <div className="mt-1 font-mono text-sm text-primary">{f.subtitle}</div>
                    <p className="mt-5 text-foreground/80 leading-relaxed text-lg">
                      {f.description}
                    </p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">
                      {f.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span className="text-foreground/80">{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {f.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 inline-flex items-center gap-2 text-primary group-hover:gap-3 transition-all font-medium">
                      <Github className="h-4 w-4" /> View on GitHub
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <ProjectVisual Icon={FeaturedIcon} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Other projects, uniform layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = iconMap[p.iconKey] ?? Sparkles;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative glass rounded-3xl p-8 hover:border-primary/40 transition overflow-hidden flex flex-col"
              >
                <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-secondary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                <div className="relative flex items-start gap-5">
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-secondary/15">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                    <div className="mt-1 font-mono text-xs text-primary">{p.tag}</div>
                    {"award" in p && p.award && (
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secondary-glow">
                        <Trophy className="h-3 w-3" /> {p.award}
                      </div>
                    )}
                  </div>
                </div>

                <p className="relative mt-5 text-sm text-foreground/80 leading-relaxed">{p.desc}</p>

                <ul className="relative mt-5 space-y-2 text-sm">
                  {p.highlights.map((h, k) => (
                    <li key={k} className="flex gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span className="text-foreground/80">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1 font-mono text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2 pt-5 border-t border-border/60">
                  {"github" in p && p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-xs font-medium hover:border-primary/40 hover:text-primary transition"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  )}
                  {"demo" in p && p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 px-3.5 py-1.5 text-xs font-semibold text-background hover:opacity-90 transition"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
