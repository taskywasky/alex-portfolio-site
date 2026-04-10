'use client'

import { useState, useEffect } from 'react'

const messages = [
  "yo ur site is so cool",
  "omg did u see that??",
  "brb grabbing snacks",
  "this is giving me vibes",
  "lowkey obsessed rn",
  "ur so talented alex!!",
  "wait how did u do that",
  "lol ok this is fire 🔥",
  "adding this to favs",
  "screenshotting everything",
  "ok but the photography tho",
  "ur films make me cry",
  "hello??? anyone there??",
  "this layout goes hard",
  "bro woke up and chose art",
  "the gfx is insane fr",
  "cant stop looking at this",
  "ok i need to hire u",
  "bro ur so gifted",
  "this is so y2k i love it",
  "bzz bzz bzz bzz.",
  "it all broken :[",
  "whens the new upload?",
  "dr p soda, so so soda",
  "hello my name is plenty no its cacalakaboo",
  "wat tha helllluh",
  "hi my name is carmen winstead i am 17 years old",
  "HES CHEATING!",
  "the t counter is off the charts.",
  "local taydens = {}"
]

const names = [
  'xX_visitor_Xx',
  'coolkid2004',
  'stargirl~~',
  'sk8er_boi',
  'butterfly_effect',
  'im_so_random_lol',
  'scene_queen_99',
  'emo_forever',
  'glitter_goth',
  'neon_dreamer',
  'kanehere',
  "whobealex",
  "aesthetic_queen",
  "vaporwave_vibes",
  "cyberpunk_princess",
  "retro_renegade",
    "digital_dreamer",
  'pc_u',
  'task',
  'DR_Guesty'
]

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function Bubble({ side, zone, totalZones }) {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [top, setTop] = useState(20)

  const zoneHeight = 100 / totalZones
  const zoneMin = zone * zoneHeight + 2   // small padding within zone
  const zoneMax = (zone + 1) * zoneHeight - 2

  const showNewBubble = () => {
    setMessage(messages[randomBetween(0, messages.length - 1)])
    setName(names[randomBetween(0, names.length - 1)])
    setTop(randomBetween(zoneMin, zoneMax)) // ← stays within its zone
    setVisible(true)

    setTimeout(() => {
      setVisible(false)
      setTimeout(showNewBubble, randomBetween(1500, 4000))
    }, 4000)
  }

  useEffect(() => {
    const timeout = setTimeout(showNewBubble, randomBetween(500, 3000))
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        [side]: '12px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}
    >
      {/* Chat window */}
      <div className="
        w-44
        bg-gradient-to-b from-[#e8e8e8] to-[#d0d0d0]
        border border-[#a0a0a0] rounded-lg
        shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.25)]
        overflow-hidden
        text-[11px]
      ">
        <div className="
          flex items-center justify-between
          px-2 py-1
          bg-gradient-to-r from-[#1a1a2e] to-[#2e2e4e]
        ">
          <span className="text-white tracking-wide truncate">{name}</span>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#03fc03] border border-[#808080]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#fce803] border border-[#808080]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#fc0303] border border-[#808080]" />
          </div>
        </div>
        <div className="px-3 py-2 bg-white/60">
          <p className="text-[#1a1a2e] leading-relaxed">{message}</p>
        </div>
        <div className="
          px-2 py-1 text-[10px] text-[#3a3a4a] tracking-wide
          border-t border-[#a0a0a0]
          bg-gradient-to-b from-[#d8d8d8] to-[#c0c0c0]
        ">
          ● online
        </div>
      </div>
    </div>
  )
}

export default function ChatBubbles() {
  const count = 5 // ← change this to add/remove bubbles per side

  return (
    <>
      {/* Left side */}
      <div className="fixed left-0 top-0 h-full w-[calc(50%-384px)] pointer-events-none z-20">
        {Array.from({ length: count }).map((_, i) => (
          <Bubble key={i} side="left" zone={i} totalZones={count} />
        ))}
      </div>

      {/* Right side */}
      <div className="fixed right-0 top-0 h-full w-[calc(50%-384px)] pointer-events-none z-20">
        {Array.from({ length: count }).map((_, i) => (
          <Bubble key={i} side="right" zone={i} totalZones={count} />
        ))}
      </div>
    </>
  )
}