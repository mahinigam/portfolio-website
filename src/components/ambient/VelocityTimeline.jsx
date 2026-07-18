import React from 'react'

export default function VelocityTimeline({ progress, intensity }) {
  const glow = 0.08 + intensity * 0.42

  return (
    <div aria-hidden="true" className="pointer-events-none fixed right-0 top-0 z-40 h-dvh w-6">
      <div className="absolute right-0 top-0 h-full w-px bg-zinc-700/35" />
      <div
        className="absolute right-0 top-0 w-px bg-terminal-text terminal-transition"
        style={{
          height: `${progress * 100}%`,
          opacity: 0.24 + intensity * 0.76,
          boxShadow: `0 0 ${18 + intensity * 28}px rgba(243, 244, 246, ${glow})`,
        }}
      />
    </div>
  )
}
