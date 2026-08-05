import React from 'react'

export default function VelocityTimeline({ progress, intensity }) {
  // Increased base glow so it's visible on slow scrolls
  const glow = 0.2 + intensity * 0.6

  return (
    <div aria-hidden="true" className="pointer-events-none fixed right-0 top-0 z-40 h-dvh w-6">
      {/* Background track line */}
      <div className="absolute right-0 top-0 h-full w-[3px] bg-zinc-200/50" />
      
      {/* Active velocity line */}
      <div
        className="absolute right-0 top-0 w-[3px] terminal-transition"
        style={{
          backgroundColor: '#00A8A8',
          height: `${progress * 100}%`,
          opacity: 0.5 + intensity * 0.5,
          boxShadow: `0 0 ${20 + intensity * 40}px rgba(0, 168, 168, ${glow})`,
        }}
      />
    </div>
  )
}
