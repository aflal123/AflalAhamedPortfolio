import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Aflal Ahamed's projects — full-stack web apps, e-commerce platforms, machine learning tools and more built with React, Next.js, Node.js and Python.",
  alternates: {
    canonical: "https://aflal.me/projects",
  },
  openGraph: {
    url: "https://aflal.me/projects",
    title: "Projects | Aflal Ahamed",
    description:
      "Full-stack web apps, e-commerce platforms, machine learning tools and more built by Aflal Ahamed.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="pt-10">
      <Projects />
    </main>
  );
}
