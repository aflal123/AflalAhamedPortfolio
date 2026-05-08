import Image from "next/image";

const projects = [
  {
    title: "ProspectIQ — AI-Driven CRM",
    description:
      "A premium, full-stack CRM empowering sales teams with intelligent lead management and AI-driven insights. Features GPT-4o powered lead scoring, sentiment analysis, and a sleek, modern dashboard.",
    tech: "React, Vite, Node.js, Express.js, MongoDB, OpenAI GPT-4o, JWT, Resend",
    github: "https://github.com/aflal123/ProspectIq-crm.git",
    live: "https://prospectiq.online",
    image: "/projects/prospectiq.png",
    featured: true,
  },
  {
    title: "SmartBiz ERP",
    description:
      "Built full-stack AI-powered ERP system for SMEs covering sales, inventory, customers and invoicing. Integrated OpenAI for business insights, email automation and content generation. Developed mobile app with React Native.",
    tech: "Node.js, Express.js, MySQL, Sequelize ORM, JWT, AWS EC2, React Native, OpenAI",
    github: "https://github.com/aflal123/smartbiz",
    live: "https://www.smartbizerp.online",
  },
  {
    title: "Late90s — Online Clothing Store",
    description:
      "Built a Sri Lankan streetwear e-commerce platform with product listings, category browsing, customer reviews and WhatsApp-based ordering system. Islandwide delivery.",
    tech: "Next.js, Tailwind CSS, TypeScript",
    github: "https://github.com/aflal123/Late90s-ecommerce",
    live: "https://www.late90s.online",
    image: "/projects/late90s.png",
  },
  {
    title: "LogicPath — Landing Page",
    description:
      "Designed and developed a clean, modern landing page for LogicPath with smooth animations and responsive layout.",
    tech: "Next.js, Tailwind CSS, TypeScript",
    github: "https://github.com/aflal123/Logicpath-LandingPage",
    live: "https://logicpath-landing-page.vercel.app/",
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
      "Developed responsive restaurant website with user-friendly interface for menu browsing and navigation. Optimized for mobile and desktop responsiveness.",
    tech: "React.js, HTML, CSS",
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
    live: "https://aflal.me",
  },
];

export default function Projects() {
  return (
    <section id="works" className="py-24 px-6 md:py-32 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Double heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-5xl font-black text-teal-400 md:text-6xl leading-none">Projects</h2>
          <h2 className="text-5xl font-black text-teal-400/[0.07] md:text-6xl leading-none -mt-3" aria-hidden="true">Projects</h2>
          <div className="w-10 h-0.5 bg-teal-400 mt-5" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`rounded-3xl bg-white/${project.featured ? " [0.05]" : "[0.03]"} border ${project.featured ? "border-teal-400/30" : "border-white/[0.07]"} overflow-hidden glow-border hover:-translate-y-2 transition-transform duration-300 flex flex-col relative`}
            >
              {project.image ? (
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              ) : (
                <div className="h-64 w-full bg-teal-400/5 flex items-center justify-center border-b border-white/[0.07]">
                  <span className="text-teal-400/20 font-black text-4xl">PROJ</span>
                </div>
              )}

              {project.featured && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-teal-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    Featured
                  </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs text-teal-400/50 font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

              <h3 className="text-base font-bold uppercase leading-tight mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-white/50 text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>

              <p className="text-teal-400/70 text-xs font-medium mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.split(", ").map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-teal-400/25 hover:border-teal-400/50 hover:bg-teal-400/5 text-white/80 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              <div className="h-px bg-gradient-to-r from-teal-500/60 to-teal-300/20 mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
