const projects = [
  {
    title: "SmartBiz ERP",
    description:
      "AI-powered business management suite for SMEs. Manage sales, inventory, customers and daily operations with OpenAI-powered insights, email generation and marketing post writer.",
    tech: "React, React Native, Express.js, MySQL, OpenAI, AWS EC2",
    github: "https://github.com/aflal123/smartbiz",
    live: "https://www.smartbizerp.online",
  },
  {
    title: "Spendo — AI Financial Manager",
    description:
      "Lead frontend development for a student finance app with AI-powered expense tracking, budget insights and spending predictions.",
    tech: "React, Node.js, MongoDB, Python ML",
    github: "https://github.com/Pandi0710/Spendo-SDGP",
    live: null,
  },
  {
    title: "Taste of Flava",
    description:
      "Landing page for a restaurant. Clean, responsive design showcasing the menu, ambiance and contact details.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/aflal123/houseOFFlava1",
    live: "https://tasteofflava01.netlify.app/",
  },
  {
    title: "Number Guessing Game",
    description:
      "A classic number-guessing game. Try to guess the secret number between 1 and 20 — you start with 20 points and each wrong guess costs 1!",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/aflal123/guess-game",
    live: "https://guessgamej.netlify.app/",
  },
  {
    title: "Network Flow Algorithm",
    description:
      "Implemented Ford-Fulkerson max-flow algorithm in Java with BFS-based augmenting path search, residual graph updates and full network parsing from input files.",
    tech: "Java, Algorithms, Data Structures",
    github: "https://github.com/aflal123/NetworkFlowALGORITHM",
    live: null,
  },
  {
    title: "Breast Cancer Mortality Predictor",
    description:
      "Built ML models to predict breast cancer mortality status and survival months using SEER dataset. Applied Logistic Regression, Naive Bayes, KNN and ensemble voting classifier.",
    tech: "Python, scikit-learn, Pandas, NumPy, Matplotlib",
    github: "https://github.com/aflal123/Predicting-Cancer-Patients-Survival-Months",
    live: null,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 15 and Tailwind CSS. Features smooth animations, responsive design and dark theme.",
    tech: "Next.js, Tailwind CSS, TypeScript",
    github: "https://github.com/aflal123/AflalAhamedPortfolio",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="works" className="py-24 px-4 md:py-32 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl font-bold mb-4 md:text-6xl">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 glow-border hover:-translate-y-2 transition-transform duration-300 flex flex-col">

              <h3 className="text-lg font-bold uppercase leading-tight mb-4">
                {project.title}
              </h3>

              <p className="text-white/60 text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>

              <p className="text-purple-300 text-xs font-medium mb-1">Tech Stack</p>
              <p className="text-white/80 text-sm mb-4">{project.tech}</p>

              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/5 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                    Live Demo
                  </a>
                )}
              </div>

              <div className="h-0.5 bg-gradient-to-r from-purple-600 to-purple-300 mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}