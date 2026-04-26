import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { MapPin, Github, Mail, ArrowDown, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";

const NeuralScene = lazy(() => import("@/components/three/NeuralScene"));

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* 3D backdrop */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
          <NeuralScene />
        </Suspense>
      </div>

      {/* gradient veils */}
      <div className="pointer-events-none absolute inset-0 z-10 grid-bg opacity-50" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="pointer-events-none absolute -top-40 -left-40 z-10 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 z-10 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          AVAILABLE FOR AI · DATA SCIENCE · ML ROLES · 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-gradient">{profile.name.split(" ")[1]}.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {profile.role}
          </span>
          <span className="text-border">/</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-secondary" />
            {profile.location}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-background shadow-card hover:shadow-glow-cyan transition-all hover:scale-105"
          >
            Explore my work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass border-glow px-6 py-3 text-sm font-medium hover:bg-primary/5 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full glass border-glow px-6 py-3 text-sm font-medium hover:bg-secondary/5 transition"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
        >
          {[
            { v: "1400+", l: "Papers reviewed" },
            { v: "85%+", l: "Model accuracy" },
            { v: "60%", l: "Access uplift" },
            { v: "5+", l: "AI projects shipped" },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}