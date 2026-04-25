import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navSections } from "@/data/portfolio";

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + window.innerHeight / 3;
      for (const s of navSections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 md:px-6 transition-all ${scrolled ? "" : ""}`}>
        <div className={`flex items-center justify-between rounded-full px-5 py-2.5 ${
          scrolled ? "glass shadow-card" : ""
        }`}>
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary glow-cyan">
              <span className="font-mono text-xs font-bold text-background">RA</span>
            </span>
            <span className="font-semibold tracking-tight hidden sm:inline">Raj Ambavane</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative px-3 py-1.5 text-sm rounded-full transition-colors ${
                  active === s.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-sm font-medium text-background hover:opacity-90 transition shadow-card"
          >
            Let's talk →
          </a>
        </div>
      </div>
    </motion.nav>
  );
}