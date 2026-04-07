export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:py-32 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 md:text-6xl">SKILLS</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-base">
            Technologies and tools I use to bring ideas to life. Always learning, always building.
          </p>
        </div>

        {/* Programming Languages */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold">Programming Languages</h3>
              <p className="text-white/50 text-sm">Core languages I work with daily</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">

            {/* JavaScript */}
            <div className="skill-card-premium">
              <div className="premium-icon-wrap">
                <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
                  <path d="M9.5 25.5l2.1-1.3c.4.7.8 1.3 1.7 1.3.9 0 1.4-.3 1.4-1.7v-9h2.6v9.1c0 2.8-1.6 4-4 4-2.1 0-3.4-1.1-4-2.4zM19 25.2l2.1-1.2c.5.9 1.2 1.5 2.4 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-1.9 1.4-3.3 3.6-3.3 1.6 0 2.7.6 3.5 2l-2 1.3c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.4-1.2 1.1 0 .8.5 1.1 1.6 1.5l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.7-1.1-4.5-2.7z" fill="#000"/>
                </svg>
              </div>
              <span className="skill-label">JavaScript</span>
            </div>

            {/* Python */}
            <div className="skill-card-premium">
              <div className="premium-icon-wrap">
                <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9 2C11.6 2 11.9 3.8 11.9 3.8v2.1h4.1v.6H9.7S7 6.2 7 10.5c0 4.4 2.4 4.2 2.4 4.2h1.5v-2s-.1-2.4 2.4-2.4h4s2.3 0 2.3-2.2V4.3S20 2 15.9 2zM13.6 3.6c.4 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z" fill="#3776AB"/>
                  <path d="M16.1 28C20.4 28 20 26.2 20 26.2v-2.1h-4.1v-.6h6.3s2.8.3 2.8-4c0-4.4-2.4-4.2-2.4-4.2h-1.5v2s.1 2.4-2.4 2.4h-4s-2.3 0-2.3 2.2v3.8S12 28 16.1 28zm2.3-1.6c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" fill="#FFD43B"/>
                </svg>
              </div>
              <span className="skill-label">Python</span>
            </div>

            {/* Java */}
            <div className="skill-card-premium">
              <div className="premium-icon-wrap">
                <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22.5s-.9.5.6.7c1.8.2 2.8.2 4.8-.2 0 0 .5.3 1.3.6-4.6 2-10.4-.1-6.7-1.1zM11.4 19.7s-1 .7.5.9c2 .2 3.5.3 6.2-.3 0 0 .4.4 1 .6-5.5 1.6-11.6.1-7.7-1.2z" fill="#E76F00"/>
                  <path d="M16.5 14.7c1.1 1.3-.3 2.5-.3 2.5s2.8-1.5 1.5-3.3c-1.2-1.7-2.1-2.6 2.9-5.5 0 0-7.9 2-4.1 6.3z" fill="#E76F00"/>
                  <path d="M22.1 24.3s.7.6-.7.7c-2.7.3-11.1.4-13.4 0-1.5-.3.7-.7.7-.7s-3.6 0-3.6 1.6c0 1.7 8.2 2 14.6 1 2.1-.3 4.1-1.1 2.4-2.6zM12.1 16.9s-4.1 1-1.5 1.3c1.1.2 3.4.1 5.5-.1 1.7-.2 3.4-.5 3.4-.5s-.6.3-1 .5c-4.1 1.1-12-.6-9.7-1.5 1.9-.7 3.3-.7 3.3-.7zM20 21.5c4.2-2.2 2.2-4.2 1-4-.3.1-.4.2-.4.2s.1-.1.3-.3c2.3-.8 4 2.4-1 3.7 0 0 .1-.1.1-.6z" fill="#E76F00"/>
                  <path d="M17.5 2s2.3 2.4-.5 6c-2.3 3-.5 4.7 0 6.6-2.2-2-3.8-3.7-2.7-5.3 1.5-2.3 5.9-3.5 3.2-7.3z" fill="#E76F00"/>
                </svg>
              </div>
              <span className="skill-label">Java</span>
            </div>

            {/* SQL */}
            <div className="skill-card-premium">
              <div className="premium-icon-wrap">
                <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4C9.4 4 4 6.7 4 10v4c0 3.3 5.4 6 12 6s12-2.7 12-6v-4c0-3.3-5.4-6-12-6z" fill="#00758F"/>
                  <path d="M16 22c-6.6 0-12-2.7-12-6v4c0 3.3 5.4 6 12 6s12-2.7 12-6v-4c0 3.3-5.4 6-12 6z" fill="#F29111"/>
                  <ellipse cx="16" cy="10" rx="12" ry="4" fill="#00758F"/>
                  <ellipse cx="16" cy="10" rx="9" ry="2.5" fill="#fff" opacity="0.15"/>
                </svg>
              </div>
              <span className="skill-label">SQL</span>
            </div>

            {/* Node.js */}
            <div className="skill-card-premium">
              <div className="premium-icon-wrap">
                <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3z" fill="#3C873A"/>
                  <path d="M16 7l-8 4.5v9L16 25l8-4.5v-9L16 7z" fill="#3C873A"/>
                  <path d="M16 11v10M11 13.5l5 3 5-3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="skill-label">Node.js</span>
            </div>

            {/* React */}
            <div className="skill-card-premium">
              <div className="premium-icon-wrap">
                <svg viewBox="0 0 32 32" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
                  <g stroke="#61DAFB" strokeWidth="1.2" fill="none">
                    <ellipse cx="16" cy="16" rx="12" ry="4.5"/>
                    <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(60 16 16)"/>
                    <ellipse cx="16" cy="16" rx="12" ry="4.5" transform="rotate(120 16 16)"/>
                  </g>
                </svg>
              </div>
              <span className="skill-label">React</span>
            </div>

          </div>
        </div>

        {/* Skill Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Frontend */}
          <div className="skill-grid-card glow-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Frontend</h4>
            </div>
            <p className="text-white/60 text-sm mb-4">Building responsive, interactive web applications with modern frameworks and tools.</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skill-grid-card glow-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Backend</h4>
            </div>
            <p className="text-white/60 text-sm mb-4">Developing robust APIs and server-side applications with scalable architecture.</p>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "Spring Boot", "REST API", "GraphQL"].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="skill-grid-card glow-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 7v5m16-5v5M4 17v-5m16 5v-5m0 5c0 1.657-3.582 3-8 3s-8-1.343-8-3" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Database</h4>
            </div>
            <p className="text-white/60 text-sm mb-4">Designing and managing both SQL and NoSQL databases for optimal performance.</p>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "MySQL", "PostgreSQL", "Redis"].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Machine Learning */}
          <div className="skill-grid-card glow-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Machine Learning</h4>
            </div>
            <p className="text-white/60 text-sm mb-4">Implementing ML algorithms and data analysis for intelligent applications.</p>
            <div className="flex flex-wrap gap-2">
              {["scikit-learn", "Pandas", "NumPy", "Matplotlib", "TensorFlow"].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Tools & DevOps */}
          <div className="skill-grid-card glow-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Tools & DevOps</h4>
            </div>
            <p className="text-white/60 text-sm mb-4">Using industry-standard tools for version control, deployment, and collaboration.</p>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Docker", "AWS", "Postman", "VS Code"].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Testing */}
          <div className="skill-grid-card glow-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold">Testing</h4>
            </div>
            <p className="text-white/60 text-sm mb-4">Ensuring code quality through comprehensive testing methodologies.</p>
            <div className="flex flex-wrap gap-2">
              {["JUnit", "Jest", "Selenium", "Cypress"].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}