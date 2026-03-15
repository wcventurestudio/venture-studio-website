import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

// ── Fonts ──────────────────────────────────────────────────────────────────
// next/font/google self-hosts fonts at build time: no Google request at
// runtime, no layout shift, and no need for the @import in globals.css.

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

// ── Metadata ───────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Venture Studio — Williams',
  description: 'A creative venture studio for bold ideas.',
}

// ── Layout ─────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <head>
        {/*
          Runs before React hydrates to apply the saved theme and prevent
          a light-mode flash on page load. Safe: hardcoded string, no user
          input — only reads from localStorage.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}