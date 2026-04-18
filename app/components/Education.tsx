const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "IIT - University of Westminster",
    year: "2023 - Present",
    coursework: [
      "Client-Server Architectures",
      "Machine Learning & Data Mining",
      "Algorithms & Data Structures",
      "Database Systems",
      "Software Engineering Principles",
    ],
  },
  {
    degree: "GCE Advanced Level - Physical Science",
    school: "Mathematics, Physics, Chemistry",
    year: "2021",
    coursework: [],
  },
  {
    degree: "GCE Ordinary Level",
    school: "9 Subjects including Mathematics, Science, and English",
    year: "2018",
    coursework: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:py-32 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Double heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-teal-400 md:text-6xl leading-none uppercase">Education</h2>
          <h2 className="text-5xl font-black text-teal-400/[0.07] md:text-6xl leading-none -mt-3 uppercase" aria-hidden="true">Education</h2>
          <div className="w-10 h-0.5 bg-teal-400 mx-auto mt-5" />
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {education.map((item, idx) => (
            <div key={item.degree} className="flex gap-6">

              {/* Teal left border */}
              <div className="w-px bg-gradient-to-b from-teal-500 to-teal-500/20 rounded-full shrink-0 self-stretch" />

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs text-teal-400/60 font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-teal-400/70 text-sm font-mono shrink-0">{item.year}</span>
                </div>
                <p className="text-white/45 text-sm mb-4">{item.school}</p>

                {item.coursework.length > 0 && (
                  <>
                    <p className="text-white/55 text-sm mb-3">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-4 py-2 rounded-full bg-teal-400/5 border border-teal-400/15 text-white/65"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
