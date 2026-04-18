import Image from "next/image";

const highlights = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end development from responsive UIs to scalable APIs and database architecture.",
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "AI & ML Integration",
    desc: "Experience integrating OpenAI APIs and building ML models for real-world applications.",
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    title: "Problem Solver",
    desc: "Strong analytical mindset — I enjoy breaking down complex problems into clean, efficient solutions.",
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Mobile Development",
    desc: "Built cross-platform mobile apps with React Native alongside full web platforms.",
    icon: (
      <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "9+",  label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "2+",  label: "Years Coding" },
];

export default function About() {
  return (
    <section className="py-24 px-6 md:py-32 md:px-16" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-10 md:p-16 border border-white/[0.07] shadow-2xl overflow-hidden">

          {/* Dot grid bg */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(rgba(45,212,191,0.2) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-16 items-start">

            {/* LEFT: Photo + quick info */}
            <div className="shrink-0 flex flex-col items-center gap-4 mx-auto md:mx-0">

              {/* Circle photo */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full blur-sm opacity-40" />
                <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-teal-400/30">
                  <Image src="/afla.png" alt="Aflal Ahamed" fill className="object-cover" />
                </div>
              </div>

              {/* Name + title */}
              <div className="text-center">
                <p className="font-bold text-white">Aflal Ahamed</p>
                <p className="text-teal-400/70 text-xs mt-0.5">Software Engineer & Developer</p>
              </div>

              {/* Open to work badge */}
              <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/20 text-teal-300 px-3 py-1.5 rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
                Open to Opportunities
              </div>

              {/* Stats */}
              <div className="flex gap-5 mt-2">
                {stats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-black text-teal-400">{value}</div>
                    <div className="text-[10px] text-white/40 mt-0.5 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Text content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
              <div className="w-8 h-0.5 bg-teal-400 mb-8" />

              <div className="space-y-5 text-base md:text-lg text-white/65 leading-relaxed mb-8">
                <p>
                  I&apos;m <span className="text-teal-300 font-medium">Aflal Ahamed</span>, a Computer Science
                  undergraduate and aspiring Full-Stack Software Engineer with a strong interest in building
                  scalable web applications and intelligent, data-driven solutions.
                </p>
                <p>
                  I have hands-on experience developing full-stack applications using{" "}
                  <span className="text-teal-300 font-medium">React, Node.js, Express, MongoDB, and MySQL</span>,
                  along with a solid foundation in{" "}
                  <span className="text-teal-300 font-medium">JavaScript, Python, and Java</span>.
                </p>
                <p>
                  I enjoy breaking down complex problems, writing clean and maintainable code, and continuously
                  learning new technologies. Currently focused on strengthening my backend architecture skills
                  and cloud-ready development.
                </p>
              </div>

              {/* Highlight cards */}
              <div className="grid sm:grid-cols-2 gap-3">
                {highlights.map(({ title, desc, icon }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-teal-400/20 hover:bg-teal-400/[0.04] transition-colors duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl bg-teal-400/10 border border-teal-400/15 flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{title}</p>
                      <p className="text-white/40 text-xs mt-1 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Currently line */}
              <div className="mt-6 flex items-center gap-3 text-sm text-white/40">
                <svg className="w-4 h-4 text-teal-400/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Currently pursuing <span className="text-teal-300/70">BSc Computer Science</span> at IIT — University of Westminster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
