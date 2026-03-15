'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

const NAV_LINKS = ['Work', 'About', 'Contact'] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggle } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between">
      <div className="absolute inset-0 bg-bg/75 backdrop-blur-md" />

      <Link
        href="/"
        className="relative z-10 text-base font-medium tracking-widest uppercase text-fg/50 nav-link hover:text-fg transition-colors"
      >
        ✦ Home
      </Link>

      <nav className="relative z-10 hidden md:flex items-center gap-6" aria-label="Main navigation">
        <ThemeToggle theme={theme} toggle={toggle} />
        {NAV_LINKS.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-base tracking-widest uppercase text-fg/50 nav-link hover:text-fg transition-colors"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="relative z-10 flex md:hidden items-center gap-3">
        <ThemeToggle theme={theme} toggle={toggle} />
        <button
          type="button"
          className="cursor-pointer text-base tracking-widest uppercase text-fg/50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="mobile-menu absolute top-full left-0 right-0 bg-bg border-b border-border py-6 flex flex-col gap-5 px-6 md:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm tracking-widest uppercase text-fg/60 hover:text-fg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

function ThemeToggle({
  theme,
  toggle,
}: {
  theme: 'light' | 'dark'
  toggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="cursor-pointer w-9 h-9 rounded-full flex items-center justify-center border border-border text-fg-muted hover:text-fg hover:bg-border transition-colors"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}