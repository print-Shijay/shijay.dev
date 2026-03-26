interface Project {
  title: string;
  description: string;
  tech: string[];
  type: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "CropWise v2",
    description:
      "AI-powered crop recommendation web app. Suggests the best crops to plant based on soil data and economic factors.",
    tech: ["Laravel", "React", "Inertia.js", "PyTorch", "FastAPI"],
    type: "Full-Stack + ML",
    link: "#",
  },
  {
    title: "SAGIP",
    description:
      "Web-based incident report and response system for MDRRMO and BFP in San Pablo, Laguna. Features live map, GPS reporting, and auto-dispatch.",
    tech: ["Laravel", "React", "Leaflet.js", "Soketi", "WebSockets"],
    type: "Thesis Project",
    link: "#",
  },
  {
    title: "Blaze-Dispatch",
    description:
      "Smart fire incident response PWA for the Bureau of Fire Protection. Includes ML-powered alarm level prediction.",
    tech: ["Laravel", "React", "FastAPI", "PyTorch", "PWA"],
    type: "Thesis Project",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="fade-section mx-auto w-full max-w-6xl px-6 py-20 md:px-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-faint)]">
        Projects
      </p>
      <h2 className="font-display mt-2 text-[clamp(28px,4vw,44px)] font-medium leading-[1.1]">
        Featured work shipped for real users.
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-teal)]">
              {project.type}
            </p>
            <h3 className="mt-2 text-[18px] font-medium leading-[1.4] text-[var(--color-text)]">
              {project.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((techItem) => (
                <span
                  key={`${project.title}-${techItem}`}
                  className="rounded-md bg-[var(--color-teal-bg)] px-2.5 py-1 text-[11px] text-[var(--color-teal)]"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="mt-6 inline-flex text-[13px] font-medium text-[var(--color-amber)]"
            >
              View case study
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
