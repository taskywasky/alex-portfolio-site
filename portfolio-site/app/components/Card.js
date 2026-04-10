'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Card({ children, className = '' }) {
  const ref = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const scale = useSpring(1, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseEnter = () => scale.set(1.02)

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: '800px', // ← moved here, no more wrapper div
      }}
      className={`
        relative flex flex-col items-center justify-center
        bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
        border border-[#a0a0a0] rounded-xl p-6
        shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.3)]
        ${className}
      `}
    >
      {/* Shine overlay */}
      <motion.div
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) => `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.25) 0%, transparent 70%)`
          ),
        }}
        className="absolute inset-0 rounded-xl pointer-events-none"
      />
      {children}
    </motion.div>
  )
}