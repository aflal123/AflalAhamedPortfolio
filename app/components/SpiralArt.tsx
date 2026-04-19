"use client";
import { useEffect, useRef } from "react";


const ICONS = [
  {
    name: "JavaScript",
    border: "rgba(247,223,30,0.45)",
    bg: "rgba(247,223,30,0.1)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
        <path d="M9.5 25.5l2.1-1.3c.4.7.8 1.3 1.7 1.3.9 0 1.4-.3 1.4-1.7v-9h2.6v9.1c0 2.8-1.6 4-4 4-2.1 0-3.4-1.1-4-2.4zM19 25.2l2.1-1.2c.5.9 1.2 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.6 3.5 2l-2 1.3c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.4-1.2 1.1 0 .8.5 1.1 1.6 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.7-1.1-4.5-2.7z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: "Python",
    border: "rgba(55,118,171,0.45)",
    bg: "rgba(55,118,171,0.1)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path d="M15.9 2C11.6 2 11.9 3.8 11.9 3.8v2.1h4.1v.6H9.7S7 6.2 7 10.5c0 4.4 2.4 4.2 2.4 4.2h1.5v-2s-.1-2.4 2.4-2.4h4s2.3 0 2.3-2.2V4.3S20 2 15.9 2zM13.6 3.6c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z" fill="#3776AB"/>
        <path d="M16.1 28C20.4 28 20 26.2 20 26.2v-2.1h-4.1v-.6h6.3s2.8.3 2.8-4c0-4.4-2.4-4.2-2.4-4.2h-1.5v2s.1 2.4-2.4 2.4h-4s-2.3 0-2.3 2.2v3.8S12 28 16.1 28zm2.3-1.6c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "React",
    border: "rgba(97,218,251,0.45)",
    bg: "rgba(97,218,251,0.08)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
          <ellipse cx="16" cy="16" rx="12" ry="4.5"/>
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(60 16 16)"/>
          <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(120 16 16)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    border: "rgba(60,135,58,0.45)",
    bg: "rgba(60,135,58,0.1)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#3C873A"/>
        <path d="M16 11v10M11 13.5l5 3 5-3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    border: "rgba(49,120,198,0.45)",
    bg: "rgba(49,120,198,0.1)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <rect width="32" height="32" rx="4" fill="#3178C6"/>
        <path d="M8 14h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 10v12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M19 20.5c.4.7 1 1.2 2 1.2.9 0 1.5-.5 1.5-1.1 0-.8-.6-1-1.6-1.4l-.4-.2c-1.5-.6-2.5-1.4-2.5-3 0-1.5 1.2-2.7 3-2.7 1.3 0 2.2.5 2.8 1.6l-1.5 1c-.3-.6-.7-.9-1.3-.9-.6 0-1 .3-1 .9 0 .6.4.9 1.3 1.3l.4.2c1.8.7 2.8 1.5 2.8 3.1 0 1.8-1.4 2.9-3.4 2.9-1.9 0-3.1-.9-3.7-2.1l1.6-1z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Java",
    border: "rgba(231,111,0,0.45)",
    bg: "rgba(231,111,0,0.08)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path d="M12 22.5s-.9.5.6.7c1.8.2 2.8.2 4.8-.2 0 0 .5.3 1.3.6-4.6 2-10.4-.1-6.7-1.1zM11.4 19.7s-1 .7.5.9c2 .2 3.5.3 6.2-.3 0 0 .4.4 1 .6-5.5 1.6-11.6.1-7.7-1.2z" fill="#E76F00"/>
        <path d="M16.5 14.7c1.1 1.3-.3 2.5-.3 2.5s2.8-1.5 1.5-3.3c-1.2-1.7-2.1-2.6 2.9-5.5 0 0-7.9 2-4.1 6.3z" fill="#E76F00"/>
        <path d="M22.1 24.3s.7.6-.7.7c-2.7.3-11.1.4-13.4 0-1.5-.3.7-.7.7-.7s-3.6 0-3.6 1.6c0 1.7 8.2 2 14.6 1 2.1-.3 4.1-1.1 2.4-2.6zM12.1 16.9s-4.1 1-1.5 1.3c1.1.2 3.4.1 5.5-.1 1.7-.2 3.4-.5 3.4-.5s-.6.3-1 .5c-4.1 1.1-12-.6-9.7-1.5 1.9-.7 3.3-.7 3.3-.7zM17.5 2s2.3 2.4-.5 6c-2.3 3-.5 4.7 0 6.6-2.2-2-3.8-3.7-2.7-5.3 1.5-2.3 5.9-3.5 3.2-7.3z" fill="#E76F00"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    border: "rgba(71,162,72,0.45)",
    bg: "rgba(71,162,72,0.1)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path d="M16 3c-1.6 5.5-4.2 8.2-4.2 13 0 3.5 1.9 6.3 4.2 7.9 2.3-1.6 4.2-4.4 4.2-7.9 0-4.8-2.6-7.5-4.2-13z" fill="#47A248"/>
        <path d="M16 24v5" stroke="#47A248" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "MySQL",
    border: "rgba(0,117,143,0.45)",
    bg: "rgba(0,117,143,0.1)",
    svg: (
      <svg viewBox="0 0 32 32" className="w-6 h-6">
        <path d="M16 4C9.4 4 4 6.7 4 10v4c0 3.3 5.4 6 12 6s12-2.7 12-6v-4c0-3.3-5.4-6-12-6z" fill="#00758F"/>
        <path d="M16 22c-6.6 0-12-2.7-12-6v4c0 3.3 5.4 6 12 6s12-2.7 12-6v-4c0 3.3-5.4 6-12 6z" fill="#F29111"/>
        <ellipse cx="16" cy="10" rx="12" ry="4" fill="#00758F"/>
        <ellipse cx="16" cy="10" rx="9" ry="2.5" fill="#fff" opacity="0.12"/>
      </svg>
    ),
  },
];

const ORBIT_DURATION = 28;

export default function SpiralArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let rot = 0;
    const S = 520;
    const cx = S / 2, cy = S / 2;
    const TWO_PI = Math.PI * 2;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = S * dpr;
    canvas.height = S * dpr;
    ctx.scale(dpr, dpr);

    const draw = () => {
      ctx.clearRect(0, 0, S, S);

      const R = S * 0.44;
      const rX = R, rY = R * 0.77;
      const N = 300;

      for (let e = 8; e >= 1; e--) {
        const s = e / 8;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rX * s, rY * s, rot * 0.07, 0, TWO_PI);
        ctx.strokeStyle = `rgba(45, 212, 191, ${0.025 + 0.04 * (1 - s)})`;
        ctx.lineWidth = s > 0.88 ? 0.9 : 0.45;
        ctx.stroke();
      }

      ctx.lineWidth = 0.4;
      for (let i = 0; i < N; i++) {
        const a1 = (i / N) * TWO_PI + rot;
        const a2 = (2 * i / N) * TWO_PI + rot;
        const x1 = cx + rX * Math.cos(a1);
        const y1 = cy + rY * Math.sin(a1);
        const x2 = cx + rX * Math.cos(a2);
        const y2 = cy + rY * Math.sin(a2);
        const depth = 0.4 + 0.6 * Math.pow(Math.sin(a1 + rot * 0.3), 2);
        ctx.strokeStyle = `rgba(45, 212, 191, ${0.03 + 0.10 * depth})`;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.lineWidth = 0.3;
      for (let i = 0; i < N; i++) {
        const a1 = (i / N) * TWO_PI + rot * 0.8;
        const a2 = (3 * i / N) * TWO_PI + rot * 0.8;
        const x1 = cx + rX * Math.cos(a1);
        const y1 = cy + rY * Math.sin(a1);
        const x2 = cx + rX * Math.cos(a2);
        const y2 = cy + rY * Math.sin(a2);
        const depth = 0.3 + 0.7 * Math.pow(Math.sin(a1 + rot * 0.5), 2);
        ctx.strokeStyle = `rgba(20, 184, 166, ${0.015 + 0.05 * depth})`;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.shadowBlur = 18;
      ctx.shadowColor = "rgba(45, 212, 191, 0.4)";
      ctx.beginPath();
      ctx.ellipse(cx, cy, rX, rY, rot * 0.05, 0, TWO_PI);
      ctx.strokeStyle = "rgba(45, 212, 191, 0.55)";
      ctx.lineWidth = 1.1;
      ctx.stroke();
      ctx.shadowBlur = 0;

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.32);
      glow.addColorStop(0, "rgba(45, 212, 191, 0.22)");
      glow.addColorStop(0.5, "rgba(20, 184, 166, 0.06)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, S, S);

      for (let p = 0; p < 28; p++) {
        const angle = (p / 28) * TWO_PI + rot * 0.12;
        const px = cx + rX * Math.cos(angle);
        const py = cy + rY * Math.sin(angle);
        const brightness = 0.3 + 0.6 * Math.abs(Math.sin(p * 2.3 + rot * 2.1));
        ctx.shadowBlur = brightness > 0.7 ? 8 : 0;
        ctx.shadowColor = "rgba(45, 212, 191, 0.9)";
        ctx.beginPath();
        ctx.arc(px, py, 0.7 + brightness * 0.6, 0, TWO_PI);
        ctx.fillStyle = `rgba(45, 212, 191, ${brightness})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rot += 0.003;
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // Dynamically update orbit radius based on container width
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateRadius = (width: number) => {
      // Orbit at 43% of container width — matches 260px at 600px container
      const r = Math.round(width * 0.43);
      container.style.setProperty("--orbit-r", `${r}px`);
    };

    // Set on mount
    updateRadius(container.offsetWidth);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateRadius(entry.contentRect.width);
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const N = ICONS.length;

  return (
    <div ref={containerRef} className="relative w-full max-w-[600px] mx-auto aspect-square">

      {/* Canvas — inset 40px so icons can sit just outside the spiral */}
      <div className="absolute inset-[40px]">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Orbiting icon badges */}
      {ICONS.map((item, i) => (
        <div
          key={item.name}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 48,
            height: 48,
            marginTop: -24,
            marginLeft: -24,
            animationName: "icon-orbit",
            animationDuration: `${ORBIT_DURATION}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${-(i / N) * ORBIT_DURATION}s`,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: item.bg,
              border: `1.5px solid ${item.border}`,
              boxShadow: `0 0 14px ${item.border}, 0 0 4px rgba(0,0,0,0.6)`,
              backdropFilter: "blur(6px)",
            }}
          >
            {item.svg}
          </div>
        </div>
      ))}
    </div>
  );
}
