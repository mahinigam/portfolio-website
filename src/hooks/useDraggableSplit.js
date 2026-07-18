import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
const NASH_WIDTH = 38

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

export function useDraggableSplit() {
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const [leftWidth, setLeftWidth] = useState(NASH_WIDTH)
  const [isDragging, setIsDragging] = useState(false)

  const mode = useMemo(() => {
    if (leftWidth > 50) return 'aggressive-index'
    if (leftWidth < 25) return 'aggressive-canvas'
    return 'balanced'
  }, [leftWidth])

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setLeftWidth(clamp(next, 14, 68))
  }, [])

  const snapToEquilibrium = useCallback(() => {
    cancelAnimationFrame(animationRef.current)
    const startedAt = performance.now()
    const startWidth = leftWidth
    const duration = 1500

    const animate = (now) => {
      const elapsed = clamp((now - startedAt) / duration, 0, 1)
      const eased = easeOutCubic(elapsed)
      setLeftWidth(startWidth + (NASH_WIDTH - startWidth) * eased)

      if (elapsed < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [leftWidth])

  const beginDrag = useCallback((event) => {
    event.preventDefault()
    cancelAnimationFrame(animationRef.current)
    setIsDragging(true)
    updateFromClientX(event.clientX)
  }, [updateFromClientX])

  useEffect(() => {
    if (!isDragging) return undefined

    const handleMove = (event) => updateFromClientX(event.clientX)
    const handleUp = () => {
      setIsDragging(false)
      snapToEquilibrium()
    }

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerup', handleUp, { once: true })
    window.addEventListener('pointercancel', handleUp, { once: true })

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerup', handleUp)
      window.removeEventListener('pointercancel', handleUp)
    }
  }, [isDragging, snapToEquilibrium, updateFromClientX])

  useEffect(() => () => cancelAnimationFrame(animationRef.current), [])

  return {
    containerRef,
    leftWidth,
    mode,
    isDragging,
    beginDrag,
  }
}
