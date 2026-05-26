"use client";

import { useEffect, useState } from "react";

function ByteLogo({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="7" fill="#1A1A1A" />
      <circle cx="10" cy="10" r="2.5" fill="#C1440E" />
      <circle cx="16" cy="10" r="2.5" fill="#C1440E" />
      <circle cx="22" cy="10" r="2.5" fill="#C1440E" />
      <circle cx="10" cy="16" r="2.5" fill="#C1440E" />
      <circle cx="16" cy="16" r="2.5" fill="#C1440E" opacity="0.35" />
      <circle cx="22" cy="16" r="2.5" fill="#C1440E" />
      <circle cx="10" cy="22" r="2.5" fill="#C1440E" />
      <circle cx="16" cy="22" r="2.5" fill="#C1440E" />
      <circle cx="22" cy="22" r="2.5" fill="#C1440E" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "The Gap", href: "#problem" },
    { label: "The Byte", href: "#product" },
    { label: "The Difference", href: "#why" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/96 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="transition-transform duration-200 group-hover:scale-110">
              <ByteLogo size={28} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-ink">
              ProByt
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-ink transition-colors rounded-full hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="text-xs sm:text-sm font-semibold bg-terra text-white px-3 sm:px-5 py-2 rounded-full hover:bg-terra-light transition-all hover:shadow-lg hover:shadow-terra/25 active:scale-95 whitespace-nowrap"
            >
              Claim Early Access
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-ink/5 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-ink transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col pt-[68px] transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 pt-10 gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-5 text-3xl font-display font-bold text-ink border-b border-border hover:text-terra transition-colors"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMenuOpen(false)}
            className="mt-10 text-center py-4 bg-terra text-white font-semibold text-lg rounded-2xl hover:bg-terra-light transition-colors"
          >
            Claim Early Access →
          </a>
          <p className="text-center text-xs text-muted mt-6">Stop guessing. Start counting.</p>
        </div>
      </div>
    </>
  );
}
