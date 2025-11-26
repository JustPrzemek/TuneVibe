"use client"

import { useEffect, useRef } from "react"

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouse = { x: -1000, y: -1000 }

    // Configuration
    const particleCount = 60
    const connectionDistance = 150
    const mouseDistance = 200

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      
      baseVx: number
      baseVy: number

      constructor(w: number, h: number) {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.baseVx = (Math.random() - 0.5) * 0.2 // Base slow speed
        this.baseVy = (Math.random() - 0.5) * 0.2 // Base slow speed
        this.vx = this.baseVx
        this.vy = this.baseVy
        this.size = Math.random() * 2 + 1
      }

      update(w: number, h: number) {
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges with clamping (accounting for radius)
        if (this.x < this.size) {
            this.x = this.size
            this.vx *= -1
            this.baseVx *= -1
        } else if (this.x > w - this.size) {
            this.x = w - this.size
            this.vx *= -1
            this.baseVx *= -1
        }

        if (this.y < this.size) {
            this.y = this.size
            this.vy *= -1
            this.baseVy *= -1
        } else if (this.y > h - this.size) {
            this.y = h - this.size
            this.vy *= -1
            this.baseVy *= -1
        }

        // Mouse interaction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseDistance) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouseDistance - distance) / mouseDistance
            const direction = -1 // Repulsion
            
            // Apply temporary force
            this.vx += forceDirectionX * force * 0.05 * direction
            this.vy += forceDirectionY * force * 0.05 * direction
        }

        // Restore to base velocity (friction/damping)
        const friction = 0.05 // How fast they return to normal speed
        this.vx += (this.baseVx - this.vx) * friction
        this.vy += (this.baseVy - this.vy) * friction
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(59, 130, 246, 0.5)" // Blue-500 with opacity
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height)
        particle.draw()
      })

      // Draw connections
      particles.forEach((a, index) => {
        for (let i = index + 1; i < particles.length; i++) {
          const b = particles[i]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      })

      // Draw connections to mouse
      particles.forEach(particle => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseDistance) {
            const opacity = 1 - distance / mouseDistance
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.4})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-black transition-colors duration-300"
    />
  )
}
