export default function About() {
  return (
    <section className="py-24 px-4 md:py-32 md:px-16" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(rgba(139,92,246,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
                <p className="text-white/50 text-sm mt-1">Software Engineer & Developer</p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                I&apos;m <span className="text-purple-300 font-medium">Aflal Ahamed</span>, a Computer Science
                undergraduate and aspiring Full-Stack Software Engineer with a strong interest in building
                scalable web applications and intelligent, data-driven solutions.
              </p>
             <p>
                I have hands-on experience developing full-stack applications using{" "}
                <span className="text-purple-300 font-medium">React, Node.js, Express, MongoDB, and MySQL</span>,
                along with a solid foundation in{" "}
                <span className="text-purple-300 font-medium">JavaScript, Python, and Java</span>.
                </p>
              <p>
                I enjoy breaking down complex problems, writing clean and maintainable code, and continuously
                learning new technologies. Currently focused on strengthening my backend architecture skills
                and cloud-ready development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}