import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nathan Bissell | Senior Full Stack Software Engineer",
  description:
    "Senior Full Stack Software Engineer with 5+ years of experience in React, TypeScript, Node.js, C#, ASP.NET Core, and Ruby on Rails. Specializing in AI integrations, API development, and enterprise applications.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "Ruby on Rails",
    "ASP.NET Core",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
