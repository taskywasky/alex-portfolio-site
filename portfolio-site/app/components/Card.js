export default function Card({ children, className = '' }) {
  return (
    <div className={`
      bg-gradient-to-b from-[#e8e8e8] to-[#c0c0c0]
      border border-[#a0a0a0]
      rounded-lg
      shadow-[inset_0_1px_0_#ffffff,_0_4px_12px_rgba(0,0,0,0.3)]
      p-6
      ${className}
    `}>
      {children}
    </div>
  )
}