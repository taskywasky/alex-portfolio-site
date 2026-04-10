'use client'

import Card from '../components/Card'
import Typewriter from '../components/Typewriter'
import FadeIn from '../components/FadeIn'
import Image from 'next/image'
import { useState } from 'react'

const collections = {
  favs: {
    label: 'FAVS',
    photos: [
      { src: '/photos/gfx/favs/1.png', alt: 'Photo 1', desc: 'something happened here.', likes: 142, username: 'whobealex' },
      { src: '/photos/gfx/favs/2.png', alt: 'Photo 2', desc: 'another thing happened.', likes: 89, username: 'whobealex' },
      { src: '/photos/gfx/favs/3.png', alt: 'Photo 3', desc: 'another thing happened.', likes: 3, username: 'whobealex' },
      { src: '/photos/gfx/favs/4.png', alt: 'Photo 4', desc: 'another thing happened.', likes: 12, username: 'whobealex' },
      { src: '/photos/gfx/favs/5.png', alt: 'Photo 5', desc: 'another thing happened.', likes: 8892, username: 'whobealex' },
    ]
  },
}

function InstagramCard({ photo, onClick }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(photo.likes)

  const handleLike = (e) => {
    e.stopPropagation()
    setLiked(!liked)
    setLikeCount(liked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <div className="
      flex flex-col
      bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
      border border-[#a0a0a0] rounded-xl
      shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.3)]
      overflow-hidden
      hover:-translate-y-1 hover:shadow-xl transition-all duration-300
    ">
      {/* Top bar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#a0a0a0]">
        <div className="flex items-center gap-2">
          <div className="
            w-7 h-7 rounded-full
            bg-gradient-to-br from-[#1a1a2e] to-[#3a3a6e]
            border border-[#a0a0a0]
            flex items-center justify-center
            text-white text-[9px] font-bold tracking-wide
          ">
            AW
          </div>
          <span className="text-[11px] font-bold tracking-wide text-[#1a1a2e]">
            {photo.username}
          </span>
        </div>
        <span className="text-[#3a3a4a] text-lg leading-none tracking-widest">···</span>
      </div>

      {/* Photo - low quality thumbnail in grid */}
      <div onClick={onClick} className="cursor-pointer relative group">
        <div className="relative w-full aspect-square">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={40}
            loading="lazy"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        {/* Hover overlay */}
        <div className="
          absolute inset-0 bg-black/0 group-hover:bg-black/20
          transition-all duration-300 flex items-center justify-center
        ">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs tracking-widest">
            VIEW
          </span>
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-3 px-3 pt-2">
        <button onClick={handleLike} className="text-lg transition-transform duration-150 active:scale-125">
          {liked ? '❤️' : '🤍'}
        </button>
        <button onClick={(e) => e.stopPropagation()} className="text-lg opacity-60 hover:opacity-100 transition-opacity">
          💬
        </button>
      </div>

      {/* Like count */}
      <div className="px-3 pt-1">
        <p className="text-[11px] font-bold text-[#1a1a2e]">{likeCount.toLocaleString()} likes</p>
      </div>

      {/* Caption */}
      {photo.desc && (
        <div className="px-3 py-2">
          <p className="text-[11px] text-[#1a1a2e] leading-relaxed">
            <span className="font-bold mr-1">{photo.username}</span>
            {photo.desc}
          </p>
        </div>
      )}
    </div>
  )
}

export default function GFX() {
  const [active, setActive] = useState('favs')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <main className="min-h-screen px-8 py-12 flex flex-col items-center gap-8">
      <Card>
        <h1 className="text-6xl font-bold text-black tracking-[0.3em] cursor">
          <Typewriter text="GFX" speed={90} />
        </h1>
        <p className="text-black flex flex-col items-center gap-4 mt-4">
          <Typewriter text="vibrant." speed={20} />
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
                shadow-[inset_0px_2px_0_rgba(255,255,255,0.5),_0_3px_6px_rgba(0,0,0,0.2)]
                transition-all duration-200
                ${active === key
                  ? 'bg-[#1a1a2e] text-white border-[#1a1a2e]'
                  : 'bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0] text-[#3a3a4a] hover:from-[#f0f0f0] hover:to-[#d0d0d0]'
                }
              `}
            >
              {collection.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Instagram-style photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {collections[active].photos.map((photo, index) => (
          <FadeIn key={`${active}-${index}`} delay={(index + 1) * 0.1}>
            <InstagramCard
              photo={photo}
              onClick={() => setSelectedPhoto(photo)}
            />
          </FadeIn>
        ))}
      </div>

      {/* Lightbox - full quality */}
{selectedPhoto && (
  <div
    onClick={() => setSelectedPhoto(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
  >
    <button
      onClick={() => setSelectedPhoto(null)}
      className="absolute top-6 right-8 text-white text-2xl tracking-widest hover:opacity-60 transition-opacity"
    >
      ✕
    </button>

    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col md:flex-row items-center gap-6 cursor-default"
    >
      {/* Plain img tag for lightbox - no wrapper div needed */}
      <img
        src={selectedPhoto.src}
        alt={selectedPhoto.alt}
        className="max-h-[80vh] max-w-[65vw] object-contain rounded-xl shadow-2xl"
      />

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