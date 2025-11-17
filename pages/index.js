import Head from "next/head";
import Image from "next/image";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="tech-grid min-h-screen relative overflow-hidden">
      <Head>
        <title>Gayatri Mane – Senior Product Manager</title>
      </Head>

      {/* background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-5xl px-4 py-10 space-y-8">
        {/* HERO / PROFILE SECTION */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-xl shadow-cyan-500/10 backdrop-blur flex flex-col md:flex-row items-start md:items-center gap-6">
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
              SaaS, data and compliance-led digital transformation. I design and
              deliver AI-driven and data-centric products that solve complex
              customer problems across banking, insurance, and industrial
              domains.
            </p>
            <p className="text-xs md:text-sm text-slate-300">
              Based in Brisbane · Open to product roles in SaaS, AI and data
              platforms.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT LAYOUT */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-indigo-500/10 transition-transform hover:-translate-y-1 hover:border-cyan-400/60">
              <Experience />
            </section>
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-cyan-500/10 transition-transform hover:-translate-y-1 hover:border-cyan-400/60">
              <Projects />
            </section>
          </div>
          <div className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-indigo-500/10 transition-transform hover:-translate-y-1 hover:border-cyan-400/60">
              <Skills />
            </section>
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-cyan-500/10 transition-transform hover:-translate-y-1 hover:border-cyan-400/60">
              <Contact />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
