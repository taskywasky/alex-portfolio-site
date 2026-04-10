'use client'

import Link from 'next/link'
import Typewriter from './components/Typewriter'
import Card from './components/Card'
import FadeIn from './components/FadeIn'

const navLinks = [
  {href: '/films', label: 'Films'},
  {href: '/photography', label: 'Photography'},
  {href: '/gfx', label: 'GFX'},
  {href: '/achievements', label: 'Achievements'},
  {href: '/contact', label: 'Contact'},
]

export default function Home() {
  return (
    <main className="min-h-screen my-4 sm:my-6 flex flex-col items-center justify-center px-4">
      <Card>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] cursor">
          <Typewriter text="ALEXWELTY" speed={90} />
        </h1>
        <p className="text-black flex flex-col items-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm md:text-base">
          <Typewriter text="film maker · photographer · graphic designer" speed={20} />
        </p>
      </Card>

      <FadeIn delay={0.2}>
        <div className="flex items-center gap-4 my-6 sm:my-10 md:my-12 max-w-md mx-auto">
          <Card>
            <hr className="flex-1 border-t border-gray-300" />
            <span className="text-black text-m tracking-widest uppercase">—about—</span>
            <hr className="flex-1 border-t border-gray-300" />
          </Card>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 max-w-2xl mx-auto'>
          <Card className='w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64'>
            <img
            src="phatsoe2.png"
            alt="its me"
            className="w-full h-full object-cover rounded-2xl"
            />
          </Card>
          <div className="sm:mt-24 md:mt-32">
            <Card className=''>hi, im alex.</Card>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.6}>
      <div className="flex items-center gap-4 my-6 sm:my-10 md:my-12 max-w-md mx-auto">
        <Card>
          <hr className="flex-1 border-t border-gray-300" />
          <span className="text-black text-m tracking-widest uppercase">-contact me-</span>
          <hr className="flex-1 border-t border-gray-300" />
        </Card>
      </div>
      </FadeIn>

      <FadeIn delay={0.8}>
      <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 max-w-2xl mx-auto w-full px-4 sm:px-0'>
        <Card className='px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto text-center sm:text-left'>
          <a href="mailto:anwelty2019@gmail.com" className="text-black text-xs sm:text-m tracking-wide">
            mail me: anwelty2019@gmail.com
          </a>
        </Card>
        <Card className='px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto text-center sm:text-left text-xs sm:text-m'>
          call me: 719-367-6899
        </Card>
        <Card className='px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto text-center sm:text-left text-xs sm:text-m'>
          follow my gram: <Link href="https://www.instagram.com/whobealex/" target="_blank" rel="noopener noreferrer" className="text-black tracking-wide underline">
            @whobealex
          </Link>
        </Card>
      </div>
      </FadeIn>
      
      <div className="flex items-center gap-4 my-6 sm:my-10 md:my-12 max-w-md mx-auto">
        <img src="/gifs/aw.gif" alt="ALEXWELTY" className="h-20 sm:h-24 md:h-32 w-auto" />
      </div>
    </main>
  )
}