import { useEffect, useRef, useState } from 'react'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export function useScrollVelocity() {
  const previousY = useRef(typeof window === 'undefined' ? 0 : window.scrollY)
  const previousTime = useRef(performance.now())
  const targetVelocity = useRef(0)
  const [state, setState] = useState({
    progress: 0,
    velocity: 0,
    intensity: 0,
    isAccelerating: false,
  })

  useEffect(() => {
    let frameId

    const readScroll = () => {
      const now = performance.now()
      const currentY = window.scrollY
      const deltaY = currentY - previousY.current
      const deltaTime = Math.max(now - previousTime.current, 16)
      targetVelocity.current = deltaY / deltaTime
      previousY.current = currentY
      previousTime.current = now
    }

    const animate = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const progress = clamp(window.scrollY / maxScroll, 0, 1)

      setState((current) => {
        const velocity = current.velocity + (targetVelocity.current - current.velocity) * 0.18
        const intensity = current.intensity + (clamp(Math.abs(velocity) / 2.4, 0, 1) - current.intensity) * 0.14

        targetVelocity.current *= 0.86

        return {
          progress,
          velocity,
          intensity,
          isAccelerating: intensity > 0.18,
        }
      })

      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', readScroll, { passive: true })
    window.addEventListener('resize', readScroll)
    readScroll()
    frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', readScroll)
      window.removeEventListener('resize', readScroll)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return state
}
