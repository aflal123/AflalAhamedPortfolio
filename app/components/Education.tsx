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
    <section id="education" className="py-24 px-4 md:py-32 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 md:text-6xl">EDUCATION</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {education.map((item) => (
            <div key={item.degree} className="flex gap-6">

              {/* Purple left border */}
              <div className="w-1 bg-purple-600 rounded-full shrink-0"></div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-white/50 text-sm shrink-0">{item.year}</span>
                </div>
                <p className="text-white/50 text-sm mb-4">{item.school}</p>

                {item.coursework.length > 0 && (
                  <>
                    <p className="text-white/70 text-sm mb-3">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70">
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