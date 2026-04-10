'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/films', label: 'FILMS' },
    { href: '/photography', label: 'PHOTOGRAPHY' },
    { href: '/gfx', label: 'GFX' },
    { href: '/achievements', label: 'ACHIEVEMENTS' },
  ]

  return (
    <nav className="
  sticky top-0 z-50
  w-full px-4 sm:px-8 py-3 sm:py-4
  flex items-center justify-between
  bg-gradient-to-b from-[#e0e0e0] to-[#c8c8c8]
  border-b border-[#a0a0a0]
  shadow-[inset_0_1px_0_#ffffff,_0_2px_8px_rgba(0,0,0,0.2)]
">
      <Link href="/" className="text-[#1a1a2e] font-bold tracking-[0.3em] text-lg hover:opacity-70 transition-opacity">
        <img src="/gifs/aw.gif" alt="ALEXWELTY" className="h-10 sm:h-16 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs tracking-widest transition-colors duration-200
              ${pathname === link.href 
                ? 'text-black font-bold underline underline-offset-4' 
                : 'text-[#3a3a4a] hover:text-black'
              }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#3a3a4a] transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#3a3a4a] transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#3a3a4a] transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      <div className={`
        md:hidden absolute top-full left-0 right-0
        bg-gradient-to-b from-[#e0e0e0] to-[#c8c8c8]
        border-b border-[#a0a0a0]
        shadow-[inset_0_1px_0_#ffffff,_0_2px_8px_rgba(0,0,0,0.2)]
        overflow-hidden transition-all duration-300
        ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col px-4 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm tracking-widest transition-colors duration-200
                ${pathname === link.href 
                  ? 'text-black font-bold underline underline-offset-4' 
                  : 'text-[#3a3a4a] hover:text-black'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}