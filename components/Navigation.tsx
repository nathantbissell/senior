"use client";

import { useCallback, useEffect, useState } from "react";
import { personalInfo } from "@/data/resume";

type Theme = "light" | "dark";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = useCallback((value: Theme) => {
    setTheme(value);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", value);
      document.documentElement.style.setProperty("color-scheme", value);
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", value);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme ?? (prefersDark ? "dark" : "light");

    applyTheme(nextTheme);
    setMounted(true);
  }, [applyTheme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  };

  const brandName = "NB";

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--page-border)] bg-[var(--page-background)]/95 backdrop-blur transition-colors">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--page-heading)] transition-colors"
        >
          {brandName}
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[var(--page-muted)] sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium tracking-[0.18em] text-[var(--page-muted)] transition-colors hover:text-[var(--page-heading)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--page-border)] bg-[var(--page-surface)] text-[var(--page-muted)] transition-colors hover:border-[var(--page-meta)] hover:text-[var(--page-heading)]"
          >
            {mounted && theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--page-border)] bg-[var(--page-surface)] text-[var(--page-muted)] transition-colors hover:border-[var(--page-meta)] hover:text-[var(--page-heading)] sm:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="border-t border-[var(--page-border)] bg-[var(--page-surface)] px-6 pb-6 pt-4 shadow-sm transition-colors sm:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[var(--page-muted)] transition-colors hover:bg-[var(--page-subtle)] hover:text-[var(--page-heading)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a6 6 0 100-12 6 6 0 000 12z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
