"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }

    const headerOffset = 88;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  const handleHireMe = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a
            href="#home"
            onClick={(event) => scrollToSection(event, "#home")}
            className="font-display text-xl font-bold leading-none"
          >
            Shi<span className="text-[var(--color-amber)]">j</span>ay
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => scrollToSection(event, link.href)}
                className="text-[13px] leading-[1.4] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={handleHireMe}
            className="rounded-full border border-[var(--color-amber-border)] bg-[var(--color-amber)] px-5 py-2 text-[13px] font-medium leading-[1.4] text-[var(--color-amber-text)] transition-opacity hover:opacity-90"
          >
            Hire Me
          </button>
        </div>
      </header>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
