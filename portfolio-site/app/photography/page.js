'use client'

import Card from '../components/Card'
import Typewriter from '../components/Typewriter'
import FadeIn from '../components/FadeIn'
import { useState } from 'react'

const collections = {
  favs: {
    label: 'FAVS',
    photos: [
      { src: '/photos/favs/cracker.gif', alt: 'Photo 1', desc: 'something happened here.' },
      { src: '/photos/favs/cracker.gif', alt: 'Photo 2', desc: 'another thing happened.' },
      { src: '/photos/favs/cracker.gif', alt: 'Photo 3', desc: 'yet another thing happened.' },
    ]
  },
  portrait: {
    label: 'COLLECTION 1',
    photos: [
      { src: '/images/portrait1.jpg', alt: 'Portrait 1', desc: 'A beautiful portrait.' },
      { src: '/images/portrait2.jpg', alt: 'Portrait 2', desc: 'Another stunning portrait.' },
    ]
  },
  landscape: {
    label: 'COLLECTION 2',
    photos: [
      { src: '/images/landscape1.jpg', alt: 'Landscape 1', desc: 'A scenic landscape.' },
    ]
  },
  street: {
    label: 'COLLECTION 3',
    photos: [
      { src: '/images/street1.jpg', alt: 'Street 1', desc: 'A bustling street scene.' },
    ]
  },
}

export default function Photography() {
    const [active, setActive] = useState('favs')
    const [selectedPhoto, setSelectedPhoto] = useState(null)
    
  return (
    <main className="min-h-screen px-8 py-12 flex flex-col items-center gap-8">
        <Card>
        <h1 className="text-6xl font-bold text-black tracking-[0.3em] cursor">
          <Typewriter text="PHOTOGRAPHY" speed={90} />
        </h1>
        <p className="text-black flex flex-col items-center gap-4 mt-4">
          <Typewriter text="it's quiet." speed={20} />
        </p>
      </Card>
      
        {/* Tab bar */}
      <FadeIn delay={0.2}>
      <div className="flex items-center gap-3">
        {Object.entries(collections).map(([key, collection]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`
              px-6 py-3 text-xs tracking-widest rounded-lg
              border border-[#a0a0a0]
              shadow shadow-[inset_0px_2px_0_rgba(255,255,255,0.5),_0_3px_6px_rgba(0,0,0,0.2)]
              transition-all duration-200
              ${active === key
                ? 'bg-[#1a1a2e] text-white border-[#1a1a2e] shadow:from-[inset_0_2px_0_#8383fc,_0_2px_6px_rgba(0,0,0,0.2) shadow:to-[inset_0_2px_0_#4f4f8c,_0_2px_6px_rgba(0,0,0,0.2)]'
                : 'bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0] text-[#3a3a4a] hover:from-[#f0f0f0] hover:to-[#d0d0d0] shadow:from-[inset_0_2px_0_#adadb3,_0_2px_6px_rgba(0,0,0,0.2) shadow:to-[inset_0_2px_0_#ffffff,_0_2px_6px_rgba(0,0,0,0.2)]'
              }
            `}
          >
            {collection.label}
          </button>
        ))}
      </div>
      </FadeIn>
      
        {/* Photo grid */}
      <FadeIn delay={0.4}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {collections[active].photos.map((photo, index) => (
          <div
            key={'${active}-${index}'}
            onClick={() => setSelectedPhoto(photo)} // ← open lightbox on click
            className="
              cursor-pointer
              rounded-xl overflow-hidden
              bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
              border border-[#a0a0a0]
              shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.3)]
              hover:-translate-y-1 hover:shadow-xl transition-all duration-300
            "
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      </FadeIn>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-8 text-white text-2xl tracking-widest hover:opacity-60 transition-opacity"
          >
            ✕
          </button>

          {/* Content wrapper - side by side on wide screens */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col md:flex-row items-center gap-6 cursor-default"
          >
            {/* Full image */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[80vh] max-w-[65vw] object-contain rounded-xl shadow-2xl"
            />

            {/* Description card */}
            {selectedPhoto.desc && (
              <div className="
                max-w-[220px] p-5
                bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
                border border-[#a0a0a0] rounded-xl
                shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.3)]
              ">
                <p className="text-xs tracking-widest text-[#3a3a4a] uppercase mb-2">— note</p>
                <p className="text-sm text-[#1a1a2e] leading-relaxed">{selectedPhoto.desc}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}