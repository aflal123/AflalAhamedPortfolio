import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://aflal.me"),
  title: {
    default: "Aflal Ahamed | Full-Stack Developer & Software Engineer",
    template: "%s | Aflal Ahamed",
  },
  description:
    "Aflal Ahamed — Computer Science student and Full-Stack Developer from Sri Lanka specialising in React, Next.js, Node.js and Machine Learning. View my projects and get in touch.",
  keywords: [
    "Aflal Ahamed",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "TypeScript",
    "Machine Learning",
    "Sri Lanka",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Aflal Ahamed", url: "https://aflal.me" }],
  creator: "Aflal Ahamed",
  openGraph: {
    type: "website",
    url: "https://aflal.me",
    title: "Aflal Ahamed | Full-Stack Developer & Software Engineer",
    description:
      "Full-Stack Developer from Sri Lanka specialising in React, Next.js, Node.js and Machine Learning. View my projects and get in touch.",
    siteName: "Aflal Ahamed Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aflal Ahamed — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aflal Ahamed | Full-Stack Developer & Software Engineer",
    description:
      "Full-Stack Developer from Sri Lanka specialising in React, Next.js, Node.js and Machine Learning.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aflal.me",
  },
  verification: {
    google: "8pNlcA43qkIlwGP-L-ZMl_VtqZCmLRnbvJVv7Ho62Bc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aflal Ahamed",
  url: "https://aflal.me",
  jobTitle: "Full-Stack Developer & Software Engineer",
  description:
    "Computer Science student and Full-Stack Developer from Sri Lanka specialising in React, Next.js, Node.js and Machine Learning.",
  email: "ahamedaflal100@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  sameAs: [
    "https://github.com/aflal123",
    "https://www.linkedin.com/in/aflal-ahamed2002/",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Machine Learning",
    "Full-Stack Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#040d0c] text-white">
        <Navbar />
        <div className="md:pl-14">
          {children}
        </div>
      </body>
    </html>
  );
}