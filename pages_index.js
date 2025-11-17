import Image from 'next/image'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <header className="flex flex-col items-center text-center">
        <div className="w-24 h-24 relative mb-4">
          <Image
            src="/avatar.jpg"
            alt="Avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold">Your Name</h1>
        <p className="text-xl text-gray-600">Your Title</p>
      </header>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}