'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="
  sticky top-0 z-50
  w-full px-8 py-4
  flex items-center justify-between
  bg-gradient-to-b from-[#e0e0e0] to-[#c8c8c8]
  border-b border-[#a0a0a0]
  shadow-[inset_0_1px_0_#ffffff,_0_2px_8px_rgba(0,0,0,0.2)]
">
      <Link href="/" className="text-[#1a1a2e] font-bold tracking-[0.3em] text-lg hover:opacity-70 transition-opacity">
        <img src="/gifs/aw.gif" alt="ALEXWELTY" className="h-16 w-auto" />
      </Link>

      <div className="flex items-center gap-8">
        {[
          { href: '/films', label: 'FILMS' },
          { href: '/photography', label: 'PHOTOGRAPHY' },
          { href: '/gfx', label: 'GFX' },
          { href: '/achievements', label: 'ACHIEVEMENTS' },
        ].map((link) => (
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
    </nav>
  )
}