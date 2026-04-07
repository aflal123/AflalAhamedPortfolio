import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 pt-24 md:pt-40">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - Text */}
          <div className="order-2 lg:order-1">

            {/* Badge */}
            <div className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-2 rounded-full mb-8 text-xs font-medium tracking-wide">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                SOFTWARE ENGINEER | TECHNOLOGY ENTHUSIAST
              </span>
            </div>

            {/* Name */}
            <h1 className="font-mono font-extrabold leading-tight mb-8 text-5xl lg:text-7xl">
              <span className="text-purple-400">&lt;</span>
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Aflal
              </span>
              <span className="text-white/40">.</span>
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                Ahamed
              </span>
              <span className="text-purple-400">/&gt;</span>
            </h1>

            {/* Description */}
            <p className="text-white/60 mb-8 leading-relaxed text-base md:text-xl max-w-lg">
              Computer Science Student & Full-Stack Developer specializing in
              Machine Learning and modern web technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ahamedaflal100@gmail.com"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full text-base font-medium transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/drive/folders/1zGaGawWzpqnwdItkNDSRb2NDTnj0guJi?usp=sharing"
                target="_blank"
                className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/5 transition-colors"
              >
                Download CV
              </a>
            </div>

          </div>

          {/* RIGHT SIDE - Photo */}
          <div className="order-1 lg:order-2 flex flex-col items-center">

            {/* Profile Photo */}
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl blur opacity-30"></div>
              <div className="relative w-48 h-64 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/afla.png"
                  alt="Aflal Ahamed"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Education Logos */}
            <div className="text-center">
              <p className="text-xs text-white/50 mb-4 font-medium tracking-widest">EDUCATION</p>
              <div className="flex items-start justify-center gap-6">

                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white/10 rounded-xl border border-white/10 overflow-hidden p-2">
                    <Image src="/iit.png" alt="IIT" width={56} height={56} className="object-contain w-full h-full" />
                  </div>
                  <span className="text-xs text-white/50">IIT</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white/10 rounded-xl border border-white/10 overflow-hidden p-2">
                    <Image src="/uow.png" alt="University of Westminster" width={56} height={56} className="object-contain w-full h-full" />
                  </div>
                  <span className="text-xs text-white/50">Westminster</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white/10 rounded-xl border border-white/10 overflow-hidden p-2">
                    <Image src="/zcc.png" alt="ZCC" width={56} height={56} className="object-contain w-full h-full" />
                  </div>
                  <span className="text-xs text-white/50">ZCC</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}