// pages/index.js
import About from "../components/About";
import Experience from "../components_Experience";
import Projects from "../components_Projects";
import Skills from "../components_Skills";
import Contact from "../components_Contact";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 🔧 Edit these for your profile
const PROFILE = {
  name: "Gayatri Mane",
  title: "Product Owner | AI Enthusiast",
  avatarSrc: "/avatar.jpg", // make sure this exists in /public
};

const SECTION_KEYS = ["about", "experience", "projects", "skills", "contact"];

export default function Home() {
  const sections = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const [activeSection, setActiveSection] = useState("about");

  const scrollTo = (key) => {
    sections[key]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Scroll spy – highlight active section in top nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const key = visible[0].target.getAttribute("data-section");
          if (key && SECTION_KEYS.includes(key)) {
            setActiveSection(key);
          }
        }
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    SECTION_KEYS.forEach((key) => {
      const node = sections[key]?.current;
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const navButtonClasses = (key) =>
    [
      "transition",
      "cursor-pointer",
      "text-sm",
      "rounded-full",
      activeSection === key
        ? "bg-indigo-600 text-white shadow-sm px-3 py-1.5"
        : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 px-3 py-1.5",
    ].join(" ");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f5e6d7] to-[#e2c8b3] text-slate-900 relative overflow-hidden">
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-300 via-sky-300 to-emerald-200 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-gradient-to-tr from-pink-300 via-rose-200 to-amber-200 opacity-40 blur-3xl" />

      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-800/95 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
          {/* Left: avatar + name + title */}
          <div className="flex items-center gap-3">
            {PROFILE.avatarSrc && (
              <div className="relative h-11 w-11">
                {/* Animated halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-pink-400 to-amber-300 opacity-60 blur-md animate-pulse" />
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-900 bg-slate-900 shadow-md">
                  <Image
                    src={PROFILE.avatarSrc}
                    alt={PROFILE.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-semibold tracking-tight bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
                {PROFILE.name}
              </span>
              <span className="text-xs md:text-sm text-slate-200/90">
                {PROFILE.title}
              </span>
            </div>
          </div>

          {/* Top nav buttons */}
          <nav className="flex flex-wrap gap-2">
            {SECTION_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => scrollTo(key)}
                className={navButtonClasses(key)}
              >
                {key[0].toUpperCase() + key.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-12">
        <main className="space-y-12 md:space-y-16">
          {/* ABOUT */}
          <motion.section
            ref={sections.about}
            id="about"
            data-section="about"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="scroll-mt-32"
          >
            <div className="rounded-3xl border border-slate-300/70 bg-slate-800/85 text-slate-50 shadow-xl shadow-slate-900/25 backdrop-blur-md p-6 md:p-8">
              <About />
            </div>
          </motion.section>

          {/* EXPERIENCE */}
          <motion.section
            ref={sections.experience}
            id="experience"
            data-section="experience"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="scroll-mt-32"
          >
            <div className="rounded-3xl border border-slate-300/70 bg-slate-800/85 text-slate-50 shadow-xl shadow-slate-900/25 backdrop-blur-md p-6 md:p-8">
              <Experience />
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section
            ref={sections.projects}
            id="projects"
            data-section="projects"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="scroll-mt-32"
          >
            <div className="rounded-3xl border border-slate-300/70 bg-slate-800/85 text-slate-50 shadow-xl shadow-slate-900/25 backdrop-blur-md p-6 md:p-8">
              <Projects />
            </div>
          </motion.section>

          {/* SKILLS */}
          <motion.section
            ref={sections.skills}
            id="skills"
            data-section="skills"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="scroll-mt-32"
          >
            <div className="rounded-3xl border border-slate-300/70 bg-slate-800/85 text-slate-50 shadow-xl shadow-slate-900/25 backdrop-blur-md p-6 md:p-8">
              <Skills />
            </div>
          </motion.section>

          {/* CONTACT */}
          <motion.section
            ref={sections.contact}
            id="contact"
            data-section="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="scroll-mt-32 pb-4"
          >
            <div className="rounded-3xl border border-slate-300/70 bg-slate-800/85 text-slate-50 shadow-xl shadow-slate-900/25 backdrop-blur-md p-6 md:p-8">
              <Contact />
            </div>
          </motion.section>

          {/* Interests – bottom card */}
          <div className="mt-10 rounded-2xl border border-slate-300/70 bg-white/70 backdrop-blur-md shadow-md p-4 md:p-6">
            <p className="text-sm md:text-base font-medium text-slate-700 mb-2">
              Beyond work
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-slate-700">
              <span className="flex items-center gap-1">
                <span>📚</span>
                <span>Loves reading</span>
              </span>
              <span className="flex items-center gap-1">
                <span>✍️</span>
                <span>Enjoys creative writing</span>
              </span>
              <span className="flex items-center gap-1">
                <span>🎨</span>
                <span>Passionate about painting</span>
              </span>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="pt-6 border-t border-slate-300/60 text-xs md:text-sm text-slate-500 flex flex-wrap gap-2 justify-between">
            <span>
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </span>
            <span>Portfolio · Product Ownership · AI & Data</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
