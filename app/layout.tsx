import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Aflal Ahamed | Software Engineer",
  description: "Computer Science Student & Full-Stack Developer specializing in Machine Learning and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0f] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}