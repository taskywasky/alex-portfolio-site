'use client'

import { useState, useRef } from 'react'
import Card from '../components/Card'
import Typewriter from '../components/Typewriter'
import FadeIn from '../components/FadeIn'

const films = [
  {
    title: 'INTRUSIVE',
    year: '2025',
    type: 'Documentary',
    description: 'From an early age, Alex Welty was plagued by intrusive thoughts—relentless, unshakable doubts that challenged his sense of self. It wasn’t until he was diagnosed with OCD that it all began to make sense. In this raw and intimate documentary, Alex opens up about his mental health journey, tracing the highs and lows that have shaped him and his relationship with his father. Together, they confront the impact of his struggles, leading to unexpected revelations that will redefine their family’s understanding of love, resilience, and acceptance.',
    thumbnail: '/thumbnails/intrusive.png',
    videoUrl: 'https://player.vimeo.com/video/1050982915?badge=0&autopause=0&player_id=0&app_id=58479', // ← swap with real URL, or remove if none
  },
  {
    title: 'The Promotion',
    year: '2025',
    type: 'Short Film',
    description: 'Starred in The Promotion, after helping with the general idea and storyboarding of the film. Throughout I helped make sure each set went smoothly and ended up having to step in as an actor for the film last minute. Other small contributions include partial costume design, as well as a contributor to the writing and dialogue.',
    thumbnail: '/thumbnails/thepromotion.png',
    videoUrl: null,
  },
  {
    title: 'Don\'t Wake Me When I\'m Dreaming',
    year: 'UNRELEASED',
    type: 'Short Film',
    description: '[REDACTED]',
    thumbnail: 'construction_ahead.webp',
    videoUrl: null,
  },
]

function FilmCard({ film }) {
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef(null) // ← add this

  const handleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen()
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen() // ← Safari fallback
      }
    }
  }

  return (
    <div className="
      w-full
      bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
      border border-[#a0a0a0] rounded-xl
      shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.3)]
      overflow-hidden
      hover:-translate-y-1 transition-all duration-300
    ">
      <div className="flex flex-col md:flex-row">

        {/* Left - video or thumbnail */}
        <div className="relative w-full md:w-80 h-auto flex-shrink-0 bg-black group">
          {film.videoUrl && playing ? (
            <>
              <iframe
                ref={iframeRef} // ← add ref here
                src={`${film.videoUrl}&autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={film.title}
              />
              {/* Fullscreen button - appears on hover */}
              <button
                onClick={handleFullscreen}
                className="
                  absolute bottom-3 right-3
                  w-8 h-8 flex items-center justify-center
                  bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
                  border border-[#a0a0a0] rounded-lg
                  shadow-[inset_0_1px_0_#ffffff,_0_2px_6px_rgba(0,0,0,0.3)]
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  text-[#1a1a2e] text-xs
                "
                title="Fullscreen"
              >
                ⛶
              </button>
            </>
          ) : (
            <div
              onClick={() => film.videoUrl && setPlaying(true)}
              className={`relative w-full h-full ${film.videoUrl ? 'cursor-pointer group' : ''}`}
            >
              <img
                src={film.thumbnail}
                alt={film.title}
                className="w-full h-full object-cover"
              />
              {film.videoUrl && (
                <div className="
                  absolute inset-0 flex items-center justify-center
                  bg-black/30 group-hover:bg-black/50 transition-all duration-200
                ">
                  <div className="
                    w-14 h-14 rounded-full
                    bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
                    border border-[#a0a0a0]
                    shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.4)]
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-200
                  ">
                    <span className="text-[#1a1a2e] text-xl ml-1">▶</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right - info */}
        <div className="flex flex-col justify-center gap-3 p-6">
          <div className="flex items-center gap-3">
            <span className="text-xs tracking-widest text-[#3a3a4a] border border-[#a0a0a0] rounded px-2 py-0.5 bg-white/40">
              {film.type}
            </span>
            <span className="text-xs text-gray-400">{film.year}</span>
          </div>
          <h2 className="text-lg font-bold tracking-[0.2em] text-[#1a1a2e]">{film.title}</h2>
          <p className="text-sm text-[#3a3a4a] leading-relaxed max-w-md">{film.description}</p>

          {/* Watch button - only if video exists */}
          {film.videoUrl && !playing && (
            <button
              onClick={() => setPlaying(true)}
              className="
                self-start mt-2 px-4 py-2 text-xs tracking-widest
                bg-[#1a1a2e] text-white rounded-lg
                hover:opacity-80 transition-opacity duration-200
              "
            >
              WATCH →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Films() {
  return (
    <main className="min-h-screen px-8 py-12 flex flex-col items-center gap-8">
      <Card>
        <h1 className="text-6xl font-bold text-black tracking-[0.3em] cursor">
          <Typewriter text="FILMS" speed={90} />
        </h1>
        <p className="text-black flex flex-col items-center gap-4 mt-4">
          <Typewriter text="stories worth telling." speed={20} />
        </p>
      </Card>

      {/* Films list */}
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {films.map((film, index) => (
          <FadeIn key={film.title} delay={index * 0.4}>
            <FilmCard film={film} />
          </FadeIn>
        ))}
      </div>
    </main>
  )
}