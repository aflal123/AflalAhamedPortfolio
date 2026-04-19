"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/projects",   label: "Projects" },
  { href: "/about",      label: "About" },
  { href: "/#skills",    label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/contact",    label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Desktop: fixed left sidebar ── */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-14 z-50 flex-col items-center border-r border-teal-400/10 bg-[#040d0c]/80 backdrop-blur-xl">

        {/* Logo mark */}
        <div className="mt-7 mb-6">
          <div className="w-9 h-9 rounded-lg bg-teal-400/10 border border-teal-400/20 flex items-center justify-center">
            <span className="font-mono font-black text-teal-400 text-xs tracking-tight">AA</span>
          </div>
        </div>

        <div className="w-6 h-px bg-white/10 mb-8" />

        {/* Rotated nav links */}
        <div className="flex flex-col items-center gap-8 flex-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-medium tracking-[0.22em] text-white/35 hover:text-teal-400 transition-colors duration-200 uppercase"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="w-6 h-px bg-white/10 mb-6" />

        {/* Social icons */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <a
            href="https://github.com/aflal123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-teal-400 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aflal-ahamed2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-teal-400 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* ── Mobile: top bar ── */}
      <nav className="md:hidden fixed top-4 inset-x-4 z-50">
        <div className="bg-[#040d0c]/90 backdrop-blur-xl border border-teal-400/10 rounded-2xl px-5 py-3 flex items-center justify-between">
          <span className="font-mono font-black text-teal-400 text-sm tracking-tight">AA</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white/60 hover:text-teal-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-2 bg-[#040d0c]/95 border border-teal-400/10 rounded-2xl p-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-white/55 hover:text-teal-400 hover:bg-teal-400/5 transition-colors px-4 py-2.5 rounded-xl text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
