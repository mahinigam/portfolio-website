import React from 'react'

export default function TelemetryLogs({ runtime, isAccelerating }) {
  return (
    <div className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 select-none font-krypton text-[10px] leading-5 tracking-[0.18em] text-zinc-500/70 md:block">
      <div className="origin-right rotate-90 whitespace-nowrap">
        <span className="tabular">SYS_RUN // {runtime.toFixed(2)}s</span>
        <span className="mx-4 text-zinc-700">/</span>
        <span className={isAccelerating ? 'text-terminal-text' : 'text-zinc-600'}>
          {isAccelerating ? '[SYS_MOMNTM: ACCEL]' : '[SYS_MOMNTM: STEADY]'}
        </span>
      </div>
    </div>
  )
}
