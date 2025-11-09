"use client"

import * as React from "react"

type TiltCardProps = {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  scale?: number
}

export function TiltCard({ children, className = "", maxTilt = 12, scale = 1.02 }: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [style, setStyle] = React.useState<React.CSSProperties | undefined>(undefined)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width // 0..1
    const py = (e.clientY - rect.top) / rect.height // 0..1
    const tiltX = (py - 0.5) * -2 * maxTilt
    const tiltY = (px - 0.5) * 2 * maxTilt
    setStyle({
      transform: `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale(${scale})`,
      transformStyle: "preserve-3d",
    })
  }

  const handleLeave = () => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" })
  }

  return (
    <div className={`[perspective:1000px] ${className}`}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={style}
        className="transition-transform duration-200 will-change-transform"
      >
        {children}
      </div>
    </div>
  )
}
