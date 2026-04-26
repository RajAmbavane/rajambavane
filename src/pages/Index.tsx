import { useEffect } from "react";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Research from "@/components/portfolio/Research";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Raj Ambavane — AI · Data Science · ML Engineer";
    const desc =
      "Raj Ambavane — AI, Data Science & Machine Learning portfolio. Building multi-agent architectures, RAG-based LLMs, predictive models, and analytics with real-world impact. UMD Data Science.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="relative min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Research />
      <Contact />
    </main>
  );
};

export default Index;
