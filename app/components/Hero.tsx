"use client";

import { useState, useEffect } from "react";
import SpiralArt from "./SpiralArt";

const SEGMENTS = [
  { text: "<",      className: "text-teal-400" },
  { text: "Aflal",  className: "bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent" },
  { text: ".",      className: "text-white/30" },
  { text: "Ahamed", className: "text-teal-300" },
  { text: "/>",     className: "text-teal-400" },
];

const TOTAL = SEGMENTS.reduce((n, s) => n + s.text.length, 0);

function TypedName() {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (typed >= TOTAL) return;
    const t = setTimeout(() => setTyped((n) => n + 1), 80);
    return () => clearTimeout(t);
  }, [typed]);

  let remaining = typed;
  const parts = SEGMENTS.map((seg) => {
    const visible = seg.text.slice(0, remaining);
    remaining = Math.max(0, remaining - seg.text.length);
    return { visible, className: seg.className };
  });

  return (
    <>
      {parts.map((p, i) =>
        p.visible ? <span key={i} className={p.className}>{p.visible}</span> : null
      )}
      {typed < TOTAL && (
        <span className="inline-block w-0.5 h-[0.85em] bg-teal-400 align-middle animate-pulse ml-0.5" />
      )}
    </>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-28">

          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">

            {/* Small mono label */}
            <p className="font-mono text-xs tracking-[0.3em] text-white/35 uppercase mb-4">
              I&apos;M AFLAL AHAMED
            </p>

            {/* Typed code name */}
            <h1 className="font-mono font-extrabold text-2xl md:text-3xl mb-8">
              <TypedName />
            </h1>

            {/* Stacked role titles */}
            <div className="mb-10 leading-none">
              <div className="text-4xl sm:text-5xl lg:text-7xl font-black text-teal-400 whitespace-nowrap">Developer</div>
              <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-teal-400/40 whitespace-nowrap">Software Engineer</div>
              <div className="text-4xl sm:text-5xl lg:text-7xl font-black text-teal-400/15 whitespace-nowrap">Creator</div>
              <div className="text-4xl sm:text-5xl lg:text-7xl font-black text-teal-400/[0.08] whitespace-nowrap">Problem Solver</div>
            </div>

            {/* Description */}
            <p className="text-white/45 mb-10 leading-relaxed max-w-md text-sm md:text-base">
              Computer Science Student & Full-Stack Developer specializing in
              Machine Learning and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ahamedaflal100@gmail.com"
                target="_blank"
                className="btn-glow inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/drive/folders/1zGaGawWzpqnwdItkNDSRb2NDTnj0guJi?usp=sharing"
                target="_blank"
                className="inline-flex items-center justify-center border border-teal-400/30 text-teal-300 hover:border-teal-400/60 hover:bg-teal-400/5 px-8 py-4 rounded-full transition-all duration-300 text-sm font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT: Spiral art */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <SpiralArt />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <div className="w-px h-14 bg-gradient-to-b from-transparent via-teal-400/40 to-teal-400/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
      </div>
    </section>
  );
}
