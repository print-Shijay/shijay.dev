import Image from "next/image";

const profileImageSrc = "/images/profile3.jpg";

interface EducationItem {
  level: string;
  school: string;
  major: string;
  description: string;
  yearRange: string;
}

const educationItems: EducationItem[] = [
  {
    level: "Senior High School",
    school: "STI College San Pablo",
    major: "ICT Major in Mobile Application and Website Development",
    description:
      "A prominent private college in San Pablo City, part of the STI Education Services Group. It is known for its real-life and technology-based education, specializing in Information & Communications Technology and Business programs.",
    yearRange: "2021 - 2023",
  },
  {
    level: "College",
    school: "Laguna State Polytechnic University",
    major: "BSIT Major in Website and Mobile Application Development",
    description:
      "A state university in Laguna with a campus in San Pablo City, recognized for its diverse academic programs. It is committed to providing quality education and producing globally competitive professionals in various fields.",
    yearRange: "2023 - Present",
  },
];

const profileMetaItems = [
  { label: "Location", value: "San Pablo, PH" },
  { label: "Type", value: "Freelance & Student" },
  { label: "Status", value: "Available" },
];

export default function About() {
  return (
    <section
      id="about"
      className="fade-section mx-auto w-full max-w-6xl px-6 py-20 md:px-8"
    >
      <div className="grid overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] md:grid-cols-[300px_1fr]">
        <aside className="border-b border-[var(--color-border)] p-5 md:sticky md:top-28 md:border-b-0 md:border-r">
          <div className="overflow-hidden rounded-xl border border-[var(--color-border)]">
            <Image
              src={profileImageSrc}
              alt="Marc Ciejay Macaraig portrait"
              width={360}
              height={450}
              className="aspect-[4/5] h-full w-full object-cover"
              priority
            />
          </div>
          <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/40 px-3 py-2.5">
            <p className="text-[18px] font-medium leading-[1.4] text-[var(--color-text)]">
              Marc Ciejay Macaraig
            </p>
            <p className="font-mono mt-1 text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
              Full-Stack Developer · Shijay.dev
            </p>
          </div>

          <div className="mt-4 space-y-1.5">
            {profileMetaItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-[var(--color-border)] pb-1.5"
              >
                <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
                  {item.label}
                </p>
                <p className="text-[13px] leading-[1.4] text-[var(--color-text-muted)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <div className="p-6 md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
            About Me
          </p>
          <h2 className="font-display mt-2 text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] text-[var(--color-text)]">
            Marc Ciejay Macaraig
          </h2>
          <p className="font-mono mt-3 flex items-center gap-2 text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)]" />
            San Pablo, Laguna, Philippines
          </p>

          <p className="mt-5 max-w-3xl text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
            Freelance developer from San Pablo, Laguna, PH. I build web apps
            with Laravel, React, and a pinch of AI. My goal is to ship software
            that feels fast, practical, and production-ready for real users.
          </p>

          <div className="mt-8 border-t border-[var(--color-border)] pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
              Education
            </p>

            <div className="mt-4 space-y-4">
              {educationItems.map((item) => (
                <details
                  key={`${item.school}-${item.level}`}
                  className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/35 p-4"
                >
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-mono rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[9px] uppercase tracking-wide whitespace-nowrap text-[var(--color-teal)] sm:px-2.5 sm:py-1 sm:text-[11px]">
                        {item.level}
                      </p>
                      <p className="font-mono rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[9px] whitespace-nowrap text-[var(--color-text-faint)] sm:px-2.5 sm:py-1 sm:text-[11px]">
                        {item.yearRange}
                      </p>
                    </div>

                    <h3 className="mt-2 text-[18px] font-medium leading-[1.4] text-[var(--color-text)]">
                      {item.school}
                    </h3>

                    <p className="font-mono mt-2 text-[10px] uppercase tracking-wide text-[var(--color-amber)] sm:text-[11px]">
                      <span className="group-open:hidden">Show details</span>
                      <span className="hidden group-open:inline">Minimize</span>
                    </p>
                  </summary>

                  <div className="mt-3 border-t border-[var(--color-border)] pt-3">
                    <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-text-muted)]">
                      {item.major}
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
