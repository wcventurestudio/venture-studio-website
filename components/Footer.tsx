const SOCIAL_LINKS = [
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/company/williams-venture-studio/' },
  { label: 'Instagram ↗', href: 'https://www.instagram.com/williamsentrepreneurs' },
  { label: 'Twitter ↗', href: 'https://x.com/ephlabs' },
]

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 mt-24 border-t border-border">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-xs text-fg/30 tracking-widest uppercase">2026</p>
          <p className="text-xs text-fg/40 tracking-wider mt-1">Williams Venture Studio</p>
        </div>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-fg/40 hover:text-fg transition-colors nav-link"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="text-xs tracking-widest uppercase text-fg/30 hover:text-fg transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}