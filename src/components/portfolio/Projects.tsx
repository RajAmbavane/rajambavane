import { motion } from "framer-motion";
import { Github, ArrowUpRight, Star, ExternalLink } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { featuredProject, projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="03 · WORK"
          subtitle="From flagship LLM systems to multi-agent automation — built end-to-end."
        />

        {/* Featured */}
        <motion.a
          href={featuredProject.github}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="group relative block overflow-hidden rounded-3xl glass border-glow p-8 md:p-10 hover:shadow-glow-cyan transition-all"
        >
          {/* glow blobs */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl group-hover:bg-secondary/30 transition" />

          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 border border-secondary/30 px-3 py-1 font-mono text-xs text-secondary-glow">
                <Star className="h-3 w-3 fill-current" /> FLAGSHIP PROJECT
              </div>
              <h3 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                {featuredProject.name}
              </h3>
              <div className="mt-1 font-mono text-sm text-primary">{featuredProject.subtitle}</div>
              <p className="mt-5 text-foreground/80 leading-relaxed text-lg">
                {featuredProject.description}
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 text-sm">
                {featuredProject.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground/80">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.stack.map((s) => (
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

            {/* visual */}
            <div className="relative aspect-square w-full max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl animate-pulse-glow" />
              <div className="relative h-full w-full rounded-3xl glass flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative font-mono text-7xl font-bold text-gradient tracking-tighter">
                  KM
                </div>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Other projects */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition overflow-hidden flex flex-col"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-secondary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="inline-flex h-11 px-3 min-w-[2.75rem] items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-semibold tracking-wider text-primary">
                  {p.icon}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
              <div className="mt-0.5 font-mono text-xs text-primary">{p.tag}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-muted/60 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/60">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium hover:border-primary/40 hover:text-primary transition"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                {"demo" in p && p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary/90 to-secondary/90 px-3 py-1.5 text-xs font-semibold text-background hover:opacity-90 transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}