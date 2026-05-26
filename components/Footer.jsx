import Image from "next/image";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/probyt.in",
    handle: "@probyt.in",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/probytsnacks",
    handle: "@probytsnacks",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/probyt",
    handle: "ProByt",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@probyt",
    handle: "@probyt",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "The Gap", href: "#problem" },
  { label: "The Byte", href: "#product" },
  { label: "The Difference", href: "#why" },
  { label: "Claim Early Access", href: "#waitlist" },
];

function ByteLogoSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="7" fill="#C1440E" />
      <circle cx="10" cy="10" r="2.5" fill="white" />
      <circle cx="16" cy="10" r="2.5" fill="white" />
      <circle cx="22" cy="10" r="2.5" fill="white" />
      <circle cx="10" cy="16" r="2.5" fill="white" />
      <circle cx="16" cy="16" r="2.5" fill="white" opacity="0.35" />
      <circle cx="22" cy="16" r="2.5" fill="white" />
      <circle cx="10" cy="22" r="2.5" fill="white" />
      <circle cx="16" cy="22" r="2.5" fill="white" />
      <circle cx="22" cy="22" r="2.5" fill="white" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">

      {/* Top image strip */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src="/images/Image 1.png"
          alt="ProByt bytes"
          fill
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      </div>

      {/* Big statement */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-4 border-b border-white/8">
        <p className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.05] max-w-2xl">
          No math. No apps.
          <br />
          <span className="text-terra italic">No guessing.</span>
          <span className="text-white/30"> Just count the bytes.</span>
        </p>
      </div>

      {/* Main body */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-14 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand — wider column */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 mb-4">
            <ByteLogoSmall />
            <span className="font-display text-2xl font-bold tracking-tight">ProByt</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Most products make you guess.
            ProByt makes you count.
            One byte. One gram. Done.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-2">
            {["1g per byte", "Baked not fried", "Eggless", "No preservatives"].map((tag) => (
              <span key={tag} className="text-xs font-medium text-white/50 border border-white/10 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-6">
            <span className="w-1.5 h-1.5 bg-sage rounded-full animate-pulse" />
            <span className="text-xs text-white/30 font-medium uppercase tracking-widest">Coming to India · 2026</span>
          </div>
        </div>

        {/* Spacer */}
        <div className="hidden md:block md:col-span-1" />

        {/* Links */}
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-5">
            Explore
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-5">
            Watch Us Build
          </p>
          <ul className="flex flex-col gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-white/30 group-hover:text-terra transition-colors">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-sm text-white/55 group-hover:text-white transition-colors leading-none mb-0.5">
                      {s.label}
                    </p>
                    <p className="text-xs text-white/25">{s.handle}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">© ProByt 2026 · Protein, counted.</p>
          <p className="text-xs text-white/20">Built with obsession in India 🇮🇳</p>
        </div>
      </div>

    </footer>
  );
}
