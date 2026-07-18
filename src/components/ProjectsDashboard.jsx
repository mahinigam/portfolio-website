import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import { useDraggableSplit } from '../hooks/useDraggableSplit'

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.18em]">
      <a
        href={project.repo}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-zinc-400 terminal-transition hover:text-terminal-text"
      >
        REPO <ArrowUpRight size={13} />
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-zinc-400 terminal-transition hover:text-terminal-text"
        >
          DEMO <ArrowUpRight size={13} />
        </a>
      )}
    </div>
  )
}

function MetricsTable({ metrics }) {
  return (
    <div className="w-full border-y border-terminal-hairline font-mono text-[11px]">
      {metrics.map(([label, value]) => (
        <div key={label} className="grid grid-cols-[0.85fr_1.15fr] border-b border-terminal-hairline last:border-b-0">
          <div className="px-0 py-3 uppercase tracking-[0.18em] text-zinc-600">{label}</div>
          <div className="py-3 text-right text-zinc-300">{value}</div>
        </div>
      ))}
    </div>
  )
}

function BalancedDetail({ project }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
      className="flex min-h-full flex-col justify-between gap-14 p-8 md:p-10 lg:p-14"
    >
      <div>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-600">{project.type}</p>
        <h3 className="max-w-3xl text-4xl font-medium tracking-normal text-terminal-text md:text-6xl">
          {project.name}
        </h3>
        <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg md:leading-9">
          {project.utility}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">STACK_TRACE</p>
          <p className="text-sm leading-7 text-zinc-400">{project.stack.join(' · ')}</p>
        </div>
        <div className="space-y-7">
          <MetricsTable metrics={project.metrics} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.div>
  )
}

function JsonDetail({ project }) {
  const payload = {
    equilibrium: 'B',
    compression: 'AGGRESSIVE_INDEX',
    active_project: project,
  }

  return (
    <motion.div
      key={`${project.id}-json`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="flex h-full flex-col justify-center p-6 md:p-10"
    >
      <div className="border border-terminal-hairline bg-terminal-black p-5 font-mono text-[11px] leading-6 text-zinc-400">
        <div className="mb-4 border-b border-terminal-hairline pb-3 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
          markdown_terminal // compressed detail canvas
        </div>
        <pre className="max-h-[560px] overflow-auto whitespace-pre-wrap break-words">
          {JSON.stringify(payload, null, 2)}
        </pre>
      </div>
    </motion.div>
  )
}

function CanvasDetail({ project }) {
  return (
    <motion.div
      key={`${project.id}-canvas`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.36, ease: [0.25, 1, 0.5, 1] }}
      className="flex min-h-full flex-col justify-center gap-12 p-8 md:p-12 lg:p-20"
    >
      <div>
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-zinc-600">
          EQUILIBRIUM_C // CANVAS_DOMINANT
        </p>
        <h3 className="max-w-5xl text-5xl font-medium tracking-normal text-terminal-text md:text-7xl">
          {project.name}
        </h3>
        <p className="mt-10 max-w-4xl text-xl font-light leading-10 text-zinc-300">
          {project.utility}
        </p>
      </div>

      <div className="grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1fr]">
        <MetricsTable metrics={project.metrics} />
        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">STACK_TRACE</p>
          <p className="text-base leading-8 text-zinc-400">{project.stack.join(' · ')}</p>
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectDetail({ project, mode }) {
  return (
    <AnimatePresence mode="wait">
      {mode === 'aggressive-index' && <JsonDetail project={project} />}
      {mode === 'aggressive-canvas' && <CanvasDetail project={project} />}
      {mode === 'balanced' && <BalancedDetail project={project} />}
    </AnimatePresence>
  )
}

function DesktopDashboard() {
  const [activeId, setActiveId] = useState(projectsData[0].id)
  const { containerRef, leftWidth, mode, isDragging, beginDrag } = useDraggableSplit()
  const activeProject = projectsData.find((project) => project.id === activeId) ?? projectsData[0]

  return (
    <div
      ref={containerRef}
      className="relative hidden min-h-[760px] overflow-hidden border-y border-terminal-hairline bg-terminal-ink/78 md:block"
    >
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${leftWidth}%` }}
      >
        <div className="flex h-full flex-col justify-between p-8 lg:p-10">
          <div>
            <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-600">
              LEFT_INDEX // ZERO_SUM
            </p>
            <div className="space-y-2">
              {projectsData.map((project) => {
                const active = project.id === activeId
                return (
                  <button
                    key={project.id}
                    type="button"
                    onMouseEnter={() => setActiveId(project.id)}
                    onClick={() => setActiveId(project.id)}
                    className={`grid w-full items-center gap-5 border-b border-terminal-hairline py-5 text-left terminal-transition ${
                      mode === 'aggressive-canvas' ? 'grid-cols-1' : 'grid-cols-[42px_1fr]'
                    } ${active ? 'text-terminal-text' : 'text-zinc-600 hover:text-zinc-300'}`}
                  >
                    <span className="font-mono text-xs tracking-[0.24em]">{project.index}</span>
                    {mode !== 'aggressive-canvas' && (
                      <span className="min-w-0 text-lg font-medium tracking-normal">
                        {project.name}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="font-mono text-[10px] uppercase leading-5 tracking-[0.2em] text-zinc-700">
            {mode === 'balanced' && 'EQUILIBRIUM_A // BALANCED'}
            {mode === 'aggressive-index' && 'EQUILIBRIUM_B // INDEX_HOARD'}
            {mode === 'aggressive-canvas' && 'EQUILIBRIUM_C // CANVAS_HOARD'}
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Resize project dashboard"
        onPointerDown={beginDrag}
        className={`absolute top-0 z-20 h-full w-5 -translate-x-1/2 cursor-col-resize ${
          isDragging ? 'bg-terminal-text/5' : 'bg-transparent'
        }`}
        style={{ left: `${leftWidth}%` }}
      >
        <span
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-zinc-500 terminal-transition"
          style={{
            opacity: isDragging ? 0.95 : 0.42,
            boxShadow: isDragging ? '0 0 20px rgba(243, 244, 246, 0.28)' : 'none',
          }}
        />
      </button>

      <div
        className="absolute inset-y-0 right-0 border-l border-terminal-hairline"
        style={{ width: `${100 - leftWidth}%` }}
      >
        <ProjectDetail project={activeProject} mode={mode} />
      </div>
    </div>
  )
}

function MobileDashboard() {
  const [activeId, setActiveId] = useState(projectsData[0].id)

  return (
    <div className="border-y border-terminal-hairline md:hidden">
      {projectsData.map((project) => {
        const active = project.id === activeId
        return (
          <div key={project.id} className="border-b border-terminal-hairline last:border-b-0">
            <button
              type="button"
              onClick={() => setActiveId(active ? '' : project.id)}
              className="grid w-full grid-cols-[42px_1fr] gap-4 px-0 py-6 text-left"
            >
              <span className="font-mono text-[11px] tracking-[0.24em] text-zinc-600">{project.index}</span>
              <span className="text-lg font-medium text-terminal-text">{project.name}</span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-[58px] pr-2">
                    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                      {project.type}
                    </p>
                    <p className="text-sm leading-7 text-zinc-400">{project.utility}</p>
                    <div className="mt-7">
                      <MetricsTable metrics={project.metrics} />
                    </div>
                    <p className="mt-7 text-sm leading-7 text-zinc-500">{project.stack.join(' · ')}</p>
                    <div className="mt-7">
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default function ProjectsDashboard() {
  return (
    <section id="work" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600">
              PROJECT_SHOWCASE // ZERO_SUM_PARTITION
            </p>
            <h2 className="text-3xl font-medium tracking-normal text-terminal-text md:text-5xl">
              Drag the boundary. Watch the interface renegotiate.
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[10px] uppercase leading-5 tracking-[0.2em] text-zinc-600">
            Fixed screen utility. One divider. Three equilibria.
          </p>
        </div>

        <DesktopDashboard />
        <MobileDashboard />
      </div>
    </section>
  )
}
