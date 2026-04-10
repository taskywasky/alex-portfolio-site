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
    <main className="min-h-screen my-6 flex flex-col items-center justify-center">
      <Card>
        <h1 className="text-6xl font-bold text-black tracking-[0.3em] cursor">
          <Typewriter text="ALEXWELTY" speed={90} />
        </h1>
        <p className="text-black flex flex-col items-center gap-4 mt-4">
          <Typewriter text="film maker · photographer · graphic designer" speed={20} />
        </p>
      </Card>

      <FadeIn delay={0.2}>
        <div className="flex items-center gap-4 my-12 max-w-md mx-auto">
          <Card>
            <hr className="flex-1 border-t border-gray-300" />
            <span className="text-black text-m tracking-widest uppercase">—about—</span>
            <hr className="flex-1 border-t border-gray-300" />
          </Card>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
          <div className='flex items-start gap-6 max-w-2xl mx-auto'>
            <div className='mt-0'>
              <Card className='w-64 h-64'>
                <img
                src="phatsoe2.png"
                alt="its me"
                className="w-full h-full object-cover rounded-2xl"
                />
              </Card>
            </div>
        <div className='mt-32'>
            <Card className=''>hi, im alex.</Card>
        </div>
      </div>
      </FadeIn>

      <FadeIn delay={0.6}>
      <div className="flex items-center gap-4 my-12 max-w-md mx-auto">
        <Card>
          <hr className="flex-1 border-t border-gray-300" />
          <span className="text-black text-m tracking-widest uppercase">-contact me-</span>
          <hr className="flex-1 border-t border-gray-300" />
        </Card>
      </div>
      </FadeIn>

      <FadeIn delay={0.8}>
      <div className='flex items-center gap-6 max-w-2xl mx-auto'>
        <Card className='px-6 py-4'>
          <a href="mailto:anwelty2019@gmail.com" className="text-black text-m tracking-wide">
            mail me: anwelty2019@gmail.com
          </a>
        </Card>
        <Card className='px-6 py-4'>
          call me: 719-367-6899
        </Card>
        <Card className='px-6 py-4'>
          follow my gram: <Link href="https://www.instagram.com/whobealex/" target="_blank" rel="noopener noreferrer" className="text-black text-m tracking-wide underline">
            @whobealex
          </Link>
        </Card>
      </div>
      </FadeIn>
      
      <div className="flex items-center gap-4 my-12 max-w-md mx-auto">
        <img src="/gifs/aw.gif" alt="ALEXWELTY" className="h-32 w-auto" />
      </div>
    </main>
  )
}