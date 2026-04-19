import type { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Aflal Ahamed — a Computer Science student and Full-Stack Developer from Sri Lanka specialising in React, Next.js, Node.js and Machine Learning.",
  alternates: {
    canonical: "https://aflal.me/about",
  },
  openGraph: {
    url: "https://aflal.me/about",
    title: "About | Aflal Ahamed",
    description:
      "Learn about Aflal Ahamed — a Computer Science student and Full-Stack Developer from Sri Lanka.",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-10">
      <About />
    </main>
  );
}
