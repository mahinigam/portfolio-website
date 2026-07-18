import { useEffect, useState } from 'react'

export function useRuntimeCounter() {
  const [runtime, setRuntime] = useState(0)

  useEffect(() => {
    const startedAt = performance.now()
    let frameId

    const tick = (now) => {
      setRuntime((now - startedAt) / 1000)
      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return runtime
}
