import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Github, label: "GitHub", value: "@RajAmbavane", href: profile.github },
    { icon: Linkedin, label: "LinkedIn", value: "rajambavane", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass border-glow p-10 md:p-16 text-center"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              LET'S BUILD SOMETHING
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight">
              Have a <span className="text-gradient">data problem</span> worth solving?
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
              Open to AI, Data Science, and Machine Learning roles, research collaborations, and ambitious builds.
              Reach out — let's turn data into impact.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 font-semibold text-background shadow-card hover:shadow-glow-cyan transition-all hover:scale-105"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <a
                    key={it.label}
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group relative flex flex-col items-center gap-2 rounded-2xl border border-border bg-muted/30 p-4 hover:border-primary/40 hover:bg-primary/5 transition"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <div className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      {it.label}
                    </div>
                    <div className="text-xs font-medium text-foreground/90 break-all">{it.value}</div>
                    <ArrowUpRight className="absolute top-2 right-2 h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <div>© {new Date().getFullYear()} Raj Ambavane · Built with React Three Fiber + Framer Motion</div>
          <div className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            ONLINE · COLLEGE PARK, MD
          </div>
        </footer>
      </div>
    </section>
  );
}