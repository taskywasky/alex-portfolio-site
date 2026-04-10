'use client'

import Card from '../components/Card'
import Typewriter from '../components/Typewriter'
import FadeIn from '../components/FadeIn'

const timeline = [
  {
    year: '2026',
    title: 'award',
    category: 'AWARD',
    description: 'hello steven.',
  },
  {
    year: '2023',
    title: 'epstein university',
    category: 'EDUCATION',
    description: 'didi.',
  },
  {
    year: '2022',
    title: 'sigma aura',
    category: 'AWARD',
    description: 'yanny or laurel.',
  },
]

const projects = [
  {
    title: 'i am a social experiment.',
    category: 'GAME',
    description: 'kickass dude!',
    year: '2026',
  },
  {
    title: 'porjkect 2',
    category: 'PROJECT',
    description: 'hello.',
    year: '2023',
  },
  {
    title: 'dollar dollar',
    category: 'COLLABORATION',
    description: 'yupppp.',
    year: '2022',
  },
]

const categoryColors = {
  'AWARD':         'bg-[#1a1a2e] text-white',
  'EDUCATION':     'bg-[#2e1a2e] text-white',
  'COLLABORATION': 'bg-[#1a2e1a] text-white',
  'PROJECT':       'bg-[#2e2a1a] text-white',
  'GAME':          'bg-[#251f5e] text-white',
}

export default function Achievements() {
  return (
    <main className="min-h-screen px-8 py-12 flex flex-col items-center gap-12">

      {/* Header */}
      <Card>
        <h1 className="text-6xl font-bold text-black tracking-[0.3em] cursor">
          <Typewriter text="ACHIEVEMENTS" speed={90} />
        </h1>
        <p className="text-black flex flex-col items-center gap-4 mt-4">
          <Typewriter text="the grind pays off." speed={20} />
        </p>
      </Card>

      {/* Timeline section */}
      <div className="w-full max-w-2xl">
        <p className="text-xs tracking-widest text-[#3a3a4a] mb-6 text-center">— AWARDS & EDUCATION —</p>
        <div className="relative flex flex-col gap-0">

          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-[#a0a0a0]" />

          {timeline.map((item, index) => (
            <FadeIn delay={(index + 1) * 0.2}>
            <div key={index} className="flex gap-6 items-start pb-8 relative">

              {/* Dot on the line */}
              <div className="
                w-10 h-10 flex-shrink-0 rounded-full z-10
                bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
                border border-[#a0a0a0]
                shadow-[inset_0_1px_0_#ffffff,_0_2px_6px_rgba(0,0,0,0.2)]
                flex items-center justify-center
                text-[10px] font-bold text-[#1a1a2e] tracking-tight
              ">
                {item.year.slice(2)}
              </div>

              {/* Card */}
              <div className="
                flex-1 p-5
                bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
                border border-[#a0a0a0] rounded-xl
                shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.2)]
                hover:-translate-y-0.5 transition-all duration-300
              ">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-[10px] tracking-widest px-2 py-0.5 rounded ${categoryColors[item.category] ?? 'bg-gray-400 text-white'}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.year}</span>
                </div>
                <h3 className="font-bold tracking-wide text-[#1a1a2e] mb-1">{item.title}</h3>
                <p className="text-xs text-[#3a3a4a] leading-relaxed">{item.description}</p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Projects & Collaborations grid */}
      <div className="w-full max-w-4xl">
        <p className="text-xs tracking-widest text-[#3a3a4a] mb-6 text-center">— PROJECTS & COLLABORATIONS —</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <FadeIn delay={(index + 1) * 0.2}>
            <div
              key={index}
              className="
                flex flex-col gap-3 p-6
                bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
                border border-[#a0a0a0] rounded-xl
                shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.2)]
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300
              "
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] tracking-widest px-2 py-0.5 rounded ${categoryColors[project.category] ?? 'bg-gray-400 text-white'}`}>
                  {project.category}
                </span>
                <span className="text-xs text-gray-400">{project.year}</span>
              </div>
              <h3 className="font-bold tracking-wide text-[#1a1a2e]">{project.title}</h3>
              <p className="text-xs text-[#3a3a4a] leading-relaxed">{project.description}</p>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>

    </main>
  )
}