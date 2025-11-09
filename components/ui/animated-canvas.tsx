"use client"

import * as React from "react"

type AnimatedCanvasProps = {
  className?: string
  targetRef?: React.RefObject<HTMLElement | HTMLDivElement>
  opacity?: number
  variant?: 'molecule'
  bubbleTrail?: boolean
  bubbleColor?: 'blue' | 'green'
  bubbleIntensity?: 'low' | 'medium' | 'high'
  bubbleSpeed?: 'slow' | 'medium' | 'fast'
  cursorRef?: React.RefObject<HTMLElement | HTMLDivElement>
}

type Particle = { x: number; y: number; vx: number; vy: number; r: number }
type Bubble = { x: number; y: number; vx: number; vy: number; r: number; life: number }

export function AnimatedCanvas({ 
  className = "", 
  targetRef, 
  opacity = 0.6, 
  variant = 'molecule', 
  bubbleTrail = false,
  bubbleColor = 'blue',
  bubbleIntensity = 'low',
  bubbleSpeed = 'medium'
}: AnimatedCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [heightPx, setHeightPx] = React.useState<number | null>(null)
  const rafRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const updateSize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const parent = canvas.parentElement
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      const intendedHeight = targetRef?.current?.clientHeight || parent?.clientHeight || window.innerHeight
      setHeightPx(intendedHeight)

      const width = parent?.clientWidth || window.innerWidth
      canvas.style.width = `${width}px`
      canvas.style.height = `${intendedHeight}px`
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(intendedHeight * dpr)
    }

    updateSize()
    const ro = new ResizeObserver(updateSize)
    if (targetRef?.current) ro.observe(targetRef.current)
    if (canvasRef.current?.parentElement) ro.observe(canvasRef.current.parentElement)
    window.addEventListener("resize", updateSize)

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", updateSize)
    }
  }, [targetRef])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    
    if (canvas.width === 0 || canvas.height === 0) {
      return
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const particleCount = Math.max(40, Math.floor((canvas.width * canvas.height) / (80000 * dpr * dpr)))
    
    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3 * dpr,
        vy: (Math.random() - 0.5) * 0.3 * dpr,
        r: (Math.random() * 2 + 1) * dpr,
      })
    }

    const bubbles: Bubble[] = []
    let lastEmit = 0

    const onMove = (e: MouseEvent) => {
      if (!bubbleTrail) return
      const now = performance.now()
      const throttle = bubbleIntensity === 'high' ? 8 : bubbleIntensity === 'medium' ? 14 : 20
      if (now - lastEmit < throttle) return
      lastEmit = now
      const rect = canvas.getBoundingClientRect()
      let mx = (e.clientX - rect.left) * dpr
      let my = (e.clientY - rect.top) * dpr
      mx = Math.max(0, Math.min(canvas.width, mx))
      my = Math.max(0, Math.min(canvas.height, my))
      
      const emitCount = bubbleIntensity === 'high' ? 5 : bubbleIntensity === 'medium' ? 3 : 2
      const baseSpeed = bubbleSpeed === 'fast' ? 0.6 : bubbleSpeed === 'slow' ? 0.25 : 0.4
      
      for (let i = 0; i < emitCount; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = (Math.random() * baseSpeed + baseSpeed * 0.5) * dpr
        bubbles.push({ 
          x: mx, 
          y: my, 
          vx: Math.cos(angle) * speed, 
          vy: Math.sin(angle) * speed - 0.6 * dpr, 
          r: (Math.random() * 3 + 2.5) * dpr, 
          life: 1 
        })
      }
      const maxBubbles = bubbleIntensity === 'high' ? 350 : bubbleIntensity === 'medium' ? 220 : 150
      if (bubbles.length > maxBubbles) bubbles.splice(0, bubbles.length - maxBubbles)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', onMove)
    }

    const step = () => {
      if (!canvas || !ctx) return
      
      // Minimal fade for trails
      ctx.fillStyle = "rgba(255,255,255,0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw particles with strong blue color
      ctx.fillStyle = "rgba(0,123,189,0.8)"
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      
      // Draw connections
      ctx.strokeStyle = "rgba(0,123,189,0.5)"
      ctx.lineWidth = 1.5 * dpr
      const maxDist = 120 * dpr
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          
          if (dist2 < maxDist * maxDist) {
            const alpha = 1 - Math.sqrt(dist2) / maxDist
            ctx.globalAlpha = alpha * 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      
      // Draw bubbles
      if (bubbles.length) {
        const bubbleDecay = bubbleSpeed === 'fast' ? 0.013 : bubbleSpeed === 'slow' ? 0.009 : 0.011
        const upwardDrift = bubbleSpeed === 'fast' ? 0.009 : bubbleSpeed === 'slow' ? 0.004 : 0.006
        
        for (let i = bubbles.length - 1; i >= 0; i--) {
          const b = bubbles[i]
          b.x += b.vx
          b.y += b.vy
          b.vy -= upwardDrift * dpr
          b.life -= bubbleDecay
          
          const alpha = Math.max(0, Math.min(1, b.life))
          if (alpha <= 0) { 
            bubbles.splice(i, 1)
            continue 
          }
          
          const col = bubbleColor === 'blue' ? '0,123,189' : '16,185,129'
          const grd = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
          grd.addColorStop(0, `rgba(${col},${0.8 * alpha})`)
          grd.addColorStop(1, `rgba(${col},0)`)
          ctx.fillStyle = grd
          ctx.beginPath()
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      
      rafRef.current = requestAnimationFrame(step)
    }

    step()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', onMove)
      }
    }
  }, [heightPx, bubbleTrail, bubbleColor, bubbleIntensity, bubbleSpeed, variant])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ 
        display: 'block', 
        width: '100%', 
        height: heightPx ?? undefined, 
        opacity
      }}
      aria-hidden="true"
    />
  )
}
