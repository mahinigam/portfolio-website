import React from 'react'
import { useRuntimeCounter } from '../../hooks/useRuntimeCounter'
import { useScrollVelocity } from '../../hooks/useScrollVelocity'
import ParticleField from './ParticleField'
import TelemetryLogs from './TelemetryLogs'
import VelocityTimeline from './VelocityTimeline'

export default function AmbientShell({ children }) {
  const runtime = useRuntimeCounter()
  const scroll = useScrollVelocity()

  return (
    <div className="relative min-h-screen overflow-hidden bg-terminal-bg text-terminal-text terminal-grid">
      <ParticleField velocity={scroll.velocity} intensity={scroll.intensity} />
      <VelocityTimeline progress={scroll.progress} intensity={scroll.intensity} />
      <TelemetryLogs runtime={runtime} isAccelerating={scroll.isAccelerating} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
