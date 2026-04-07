"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 inset-x-0 mx-auto max-w-7xl px-4 z-50">
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-4 flex items-center justify-between">
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#works" className="text-white/70 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-white/70 hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#education" className="text-white/70 hover:text-white transition-colors">
            Education
          </Link>
        </div>

        {/* Book a Call Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ahamedaflal100@gmail.com"
          target="_blank"
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-full transition-colors text-sm font-medium"
        >
          Book a Call
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-black/95 border border-white/10 rounded-2xl p-4 flex flex-col gap-4">
          <Link href="#works" className="text-white/70 hover:text-white px-4 py-2">Projects</Link>
          <Link href="#skills" className="text-white/70 hover:text-white px-4 py-2">Skills</Link>
          <Link href="#education" className="text-white/70 hover:text-white px-4 py-2">Education</Link>
        </div>
      )}
    </nav>
  );
}