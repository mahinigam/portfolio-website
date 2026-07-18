import React, { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 28

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() > 0.82 ? 1.4 : 1,
    opacity: 0.08 + Math.random() * 0.16,
    speed: 0.08 + Math.random() * 0.09,
  }
}

export default function ParticleField({ velocity, intensity }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const velocityRef = useRef({ velocity: 0, intensity: 0 })

  useEffect(() => {
    velocityRef.current = { velocity, intensity }
  }, [velocity, intensity])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameId
    let width = 0
    let height = 0
    let pixelRatio = 1

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height))
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const { velocity: scrollVelocity, intensity: scrollIntensity } = velocityRef.current
      const downwardBoost = Math.max(scrollVelocity, 0) * 2.8

      particlesRef.current.forEach((particle) => {
        const velocityScale = 1 + downwardBoost + scrollIntensity * 3.2
        particle.y -= particle.speed * velocityScale
        particle.x += Math.sin((particle.y + particle.opacity * 1000) * 0.006) * 0.045

        if (particle.y < -12) {
          particle.y = height + 12
          particle.x = Math.random() * width
        }

        context.fillStyle = `rgba(243, 244, 246, ${particle.opacity + scrollIntensity * 0.12})`
        context.fillRect(particle.x, particle.y, particle.size, particle.size)
      })

      frameId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  )
}
