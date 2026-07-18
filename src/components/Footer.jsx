import React, { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'GITHUB', href: 'https://github.com/mahinigam' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/mahinigam' },
  { label: 'EMAIL', href: 'mailto:mahi.nigam.000@gmail.com' },
]

export default function Footer() {
  const [focused, setFocused] = useState(null)

  return (
    <footer id="outro" className="px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-7xl border-t border-terminal-hairline pt-16">
        <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <blockquote className="max-w-5xl text-4xl font-medium leading-tight tracking-normal md:text-6xl">
            <span className="text-terminal-text">No finish lines,</span>{' '}
            <span className="text-zinc-600">just the steady, infinite pull of what lies ahead.</span>
          </blockquote>

          <div
            className="flex flex-col items-start gap-5 md:items-end"
            onMouseLeave={() => setFocused(null)}
          >
            {links.map((link) => {
              const dimmed = focused && focused !== link.label
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'EMAIL' ? '_blank' : undefined}
                  rel={link.label !== 'EMAIL' ? 'noreferrer' : undefined}
                  onMouseEnter={() => setFocused(link.label)}
                  className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] terminal-transition ${
                    dimmed ? 'text-zinc-700' : 'text-zinc-500 hover:text-terminal-text'
                  }`}
                >
                  {link.label} <ArrowUpRight size={13} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-20 font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-700">
          © {new Date().getFullYear()} MAHI NIGAM // LIVE SYSTEM
        </div>
      </div>
    </footer>
  )
}
