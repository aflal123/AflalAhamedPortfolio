"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/ahamedaflal100@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:py-32 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Double heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-teal-400 md:text-6xl leading-none">Get In Touch</h2>
          <h2 className="text-5xl font-black text-teal-400/[0.07] md:text-6xl leading-none -mt-3" aria-hidden="true">Get In Touch</h2>
          <div className="w-10 h-0.5 bg-teal-400 mx-auto mt-5 mb-6" />
          <p className="text-white/45 text-base max-w-xl mx-auto">
            Open to new opportunities. Whether you have a project in mind or just want to connect — drop me a message.
          </p>
        </div>

        {/* Two-panel card */}
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden border border-teal-400/15 shadow-2xl">

          {/* LEFT: Contact info */}
          <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 p-8 md:p-10 md:w-72 flex flex-col gap-6 overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full bg-teal-500/25 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal-900/30 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-white/60 text-sm leading-relaxed">Feel free to reach out — I respond within 24 hours.</p>
            </div>

            <div className="relative z-10 flex flex-col gap-5 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">+94 766 153 821</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm break-all">ahamedaflal100@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-white/80 text-sm">Colombo, Sri Lanka</span>
              </div>
            </div>

            {/* Social links */}
            <div className="relative z-10 flex gap-3 mt-2">
              <a href="https://github.com/aflal123" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/aflal-ahamed2002/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://wa.me/94766153821" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:ahamedaflal100@gmail.com"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="2" y="4" width="20" height="16" rx="2" strokeLinejoin="round"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="flex-1 bg-white/[0.03] p-8 md:p-10">

            {/* Success state */}
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                <div className="w-16 h-16 rounded-full bg-teal-400/15 border border-teal-400/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-teal-400 text-sm hover:text-teal-300 transition-colors mt-2 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-teal-400/70 text-xs font-medium tracking-wide uppercase">Your Name</label>
                    <input
                      type="text" name="name" required placeholder="Aflal Ahamed"
                      className="bg-white/[0.04] border border-white/10 focus:border-teal-400/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-teal-400/70 text-xs font-medium tracking-wide uppercase">Your Email</label>
                    <input
                      type="email" name="email" required placeholder="you@example.com"
                      className="bg-white/[0.04] border border-white/10 focus:border-teal-400/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-teal-400/70 text-xs font-medium tracking-wide uppercase">Subject</label>
                  <input
                    type="text" name="subject" placeholder="I want to hire you!"
                    className="bg-white/[0.04] border border-white/10 focus:border-teal-400/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-teal-400/70 text-xs font-medium tracking-wide uppercase">Message</label>
                  <textarea
                    name="message" required rows={4} placeholder="Write your message here..."
                    className="bg-white/[0.04] border border-white/10 focus:border-teal-400/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs">Something went wrong. Please try again or email me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-glow self-start bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm mt-1 flex items-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-teal-400/10 mt-16 pt-8 text-center">
          <p className="text-white/25 text-sm">© 2026 Aflal Ahamed. Built with Next.js & Tailwind CSS.</p>
        </div>

      </div>
    </section>
  );
}
