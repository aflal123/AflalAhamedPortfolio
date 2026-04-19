import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aflal Ahamed — open to freelance projects, job opportunities and collaborations. Based in Colombo, Sri Lanka.",
  alternates: {
    canonical: "https://aflal.me/contact",
  },
  openGraph: {
    url: "https://aflal.me/contact",
    title: "Contact | Aflal Ahamed",
    description:
      "Get in touch with Aflal Ahamed — open to freelance projects, job opportunities and collaborations.",
  },
};

export default function ContactPage() {
  return (
    <main className="pt-10">
      <Contact />
    </main>
  );
}
