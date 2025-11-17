import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="tech-grid min-h-screen relative overflow-hidden">
      {/* Glow blobs for extra “advanced” vibe */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-5xl px-4 py-10 space-y-8">
        {/* Top card – your hero / header */}
        {/* Replace <Header /> with however your top section is composed */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/10 backdrop-blur">
          {/* e.g. your headline/intro component goes here */}
          {/* <Header /> */}
        </section>

        {/* Two-column layout for content */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-indigo-500/10">
              <Experience />
            </section>
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-cyan-500/10">
              <Projects />
            </section>
          </div>
          <div className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-indigo-500/10">
              <Skills />
            </section>
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg shadow-cyan-500/10">
              <Contact />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
