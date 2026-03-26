const socialLinks = [
  { label: "GitHub", href: "https://github.com/print-Shijay" },
  {
    label: "Credly",
    href: "https://www.credly.com/users/lspu_spcc-marc-ciejay-macaraig/badges#credly",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marc-ciejay-macaraig-a3b738314/",
  },
  { label: "Facebook", href: "https://www.facebook.com/marcciejay.macaraig" },
  { label: "Instagram", href: "https://www.instagram.com/ciejayy_" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="fade-section mx-auto w-full max-w-6xl px-6 py-20 md:px-8"
    >
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-faint)]">
          Contact
        </p>
        <h2 className="font-display mt-2 text-[clamp(28px,4vw,44px)] font-medium leading-[1.1]">
          Let&apos;s build something that lasts.
        </h2>

        <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
          I&apos;m currently open to freelance work and remote collaborations.
          Reach out any time and let&apos;s talk about your project goals.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:macaraigmarcciejay@gmail.com"
            className="rounded-full bg-[var(--color-amber)] px-6 py-2.5 text-[13px] font-medium leading-[1.4] text-[var(--color-amber-text)]"
          >
            hello@shijay.dev
          </a>

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full border border-[var(--color-border)] px-5 py-2 text-[13px] leading-[1.4] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
