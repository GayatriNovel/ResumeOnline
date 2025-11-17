import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills-contact", label: "Skills & Contact" },
];

const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    rotateY: direction > 0 ? 8 : -8,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
  },
  exit: (direction) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    rotateY: direction < 0 ? 8 : -8,
  }),
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentSection = sections[currentIndex];

  const goToIndex = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    goToIndex(nextIndex);
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
    goToIndex(prevIndex);
  };

  const renderSection = (id) => {
    switch (id) {
      case "overview":
        return (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="shrink-0">
                <Image
                  src="/avatar.jpg"
                  alt="Profile picture of Gayatri Mane"
                  width={140}
                  height={140}
                  className="rounded-full object-cover border border-white/30 shadow-lg shadow-cyan-500/30"
                  priority
                />
              </div>
              <div className="space-y-2">
                <p className="code-label text-cyan-300">Product · AI · Data</p>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Gayatri Mane
                </h1>
                <p className="text-sm md:text-base text-slate-200">
                  Senior Product Manager and AI Product Owner with 12+ years in
                  SaaS, data and compliance-led digital transformation. I design
                  and ship AI-driven and data-centric products that solve
                  complex customer problems across banking, insurance and
                  industrial domains.
                </p>
                <p className="text-xs md:text-sm text-slate-300">
                  Based in Brisbane · Open to product roles in SaaS, AI and data
                  platforms.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 grid gap-4 md:grid-cols-3 text-sm text-slate-200">
              <div>
                <p className="code-label text-cyan-300 mb-1">Focus</p>
                <p>AI & data products, risk & compliance, digital transformation.</p>
              </div>
              <div>
                <p className="code-label text-cyan-300 mb-1">Strengths</p>
                <p>Discovery, complex stakeholder alignment, and going from idea to MVP.</p>
              </div>
              <div>
                <p className="code-label text-cyan-300 mb-1">Currently</p>
                <p>Building AI forecasting & CRM augmentation tools with DKE.</p>
              </div>
            </div>
          </div>
        );
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "skills-contact":
        return (
          <div className="space-y-6">
            <Skills />
            <Contact />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tech-grid min-h-screen relative overflow-hidden">
      <Head>
        <title>Gayatri Mane – Product · AI · Data</title>
      </Head>

      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-5xl px-4 py-10 space-y-6">
        {/* top nav like tabs */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="code-label text-cyan-300 mb-1">
              Product Portfolio · Interactive
            </p>
            <h1 className="text-xl md:text-2xl font-semibold text-white">
              Navigate through sections like turning pages.
            </h1>
          </div>
          <nav className="flex flex-wrap gap-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => goToIndex(index)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition-colors ${
                  index === currentIndex
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow shadow-cyan-500/40"
                    : "bg-white/5 text-slate-200 border-white/15 hover:border-cyan-400/60 hover:text-cyan-200"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </header>

        {/* animated “page” */}
        <section className="relative h-[480px] md:h-[520px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSection.id}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-3xl border border-white/15 bg-white/7 backdrop-blur-xl shadow-2xl shadow-slate-950/60 overflow-hidden p-6 md:p-8"
            >
              {renderSection(currentSection.id)}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* bottom controls */}
        <footer className="flex items-center justify-between text-xs text-slate-300">
          <button
            onClick={goPrev}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/15 hover:border-cyan-400/60 hover:text-cyan-200 transition-colors"
          >
            ‹ Previous
          </button>
          <p className="code-label text-slate-400">
            {currentIndex + 1} / {sections.length}
          </p>
          <button
            onClick={goNext}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 border border-cyan-400 hover:bg-cyan-400 transition-colors shadow shadow-cyan-500/40"
          >
            Next ›
          </button>
        </footer>
      </main>
    </div>
  );
}
