interface Skill {
  label: string;
  level: "Expert" | "Proficient" | "Learning";
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { label: "React.js", level: "Proficient" },
      { label: "Next.js", level: "Proficient" },
      { label: "Inertia.js", level: "Proficient" },
      { label: "Tailwind CSS", level: "Proficient" },
      { label: "Bootstrap CSS", level: "Proficient" },
      { label: "HTML & CSS", level: "Expert" },
      { label: "JavaScript", level: "Expert" },
      { label: "TypeScript", level: "Proficient" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { label: "Laravel", level: "Expert" },
      { label: "PHP", level: "Expert" },
      { label: "Java", level: "Expert" },
      { label: "C#", level: "Proficient" },
      { label: "FastAPI", level: "Proficient" },
      { label: "Python", level: "Proficient" },
      { label: "REST APIs", level: "Expert" },
    ],
  },
  {
    title: "Database",
    skills: [
      { label: "MySQL", level: "Expert" },
      { label: "SQLite", level: "Proficient" },
      { label: "NoSQL", level: "Proficient" },
      { label: "Eloquent ORM", level: "Proficient" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { label: "PyTorch", level: "Proficient" },
      { label: "Scikit-learn", level: "Proficient" },
      { label: "FastAPI (ML API)", level: "Proficient" },
      { label: "Classification Models", level: "Proficient" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { label: "Docker", level: "Learning" },
      { label: "Microsoft Azure", level: "Proficient" },
      { label: "Coolify", level: "Proficient" },
      { label: "GitHub", level: "Expert" },
      { label: "GitHub Actions", level: "Learning" },
      { label: "Nixpacks", level: "Learning" },
      { label: "SSH / Termius", level: "Learning" },
    ],
  },
  {
    title: "Mobile & Other",
    skills: [
      { label: "Progressive Web Apps", level: "Proficient" },
      { label: "Leaflet.js Maps", level: "Proficient" },
      { label: "Arduino", level: "Expert" },
      { label: "Android (Java)", level: "Proficient" },
    ],
  },
];

function getSkillStyle(level: Skill["level"]) {
  if (level === "Expert") {
    return "text-[var(--color-text)]";
  }

  if (level === "Proficient") {
    return "text-[var(--color-text)]";
  }

  if (level === "Learning") {
    return "text-[var(--color-text-muted)]";
  }

  return "text-[var(--color-text-faint)]";
}

function getLevelDotStyle(level: Skill["level"]) {
  if (level === "Expert") {
    return "bg-[var(--color-amber)]";
  }

  if (level === "Proficient") {
    return "bg-[var(--color-teal)]";
  }

  if (level === "Learning") {
    return "bg-[var(--color-text-muted)]";
  }

  return "bg-[var(--color-text-faint)]";
}

function getSummaryCardStyle(level: Skill["level"]) {
  if (level === "Expert") {
    return "border-[var(--color-amber-border)] bg-[var(--color-amber-bg)]";
  }

  if (level === "Proficient") {
    return "border-[var(--color-teal)]/40 bg-[var(--color-teal-bg)]";
  }

  if (level === "Learning") {
    return "border-[var(--color-border)] bg-[var(--color-bg)]/50";
  }

  return "border-[var(--color-border)] bg-[var(--color-bg)]/30";
}

const skillLevels: Skill["level"][] = [
  "Expert",
  "Proficient",
  "Learning",
];

export default function Skills() {
  const allSkills = skillCategories.flatMap((category) => category.skills);
  const levelCounts = skillLevels.map((level) => ({
    level,
    count: allSkills.filter((skill) => skill.level === level).length,
  }));

  return (
    <section
      id="skills"
      className="fade-section mx-auto w-full max-w-6xl px-6 py-20 md:px-8"
    >
      <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-text-faint)]">
        Skills
      </p>
      <h2 className="font-display mt-2 text-[clamp(28px,4vw,44px)] font-medium leading-[1.1]">
        Built across full-stack, AI, and deployment.
      </h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
        A practical stack shaped by freelance projects, school work, and
        production deployments.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3">
        {levelCounts.map((item) => (
          <div
            key={item.level}
            className={`rounded-lg border px-3 py-2 ${getSummaryCardStyle(item.level)}`}
          >
            <p className="font-mono inline-flex items-center gap-1 text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
              <span
                className={`h-1.5 w-1.5 rounded-full ${getLevelDotStyle(item.level)}`}
              />
              {item.level}
            </p>
            <p className="mt-0.5 text-[18px] font-medium leading-[1.4] text-[var(--color-text)]">
              {item.count}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-[var(--color-amber-border)]"
          >
            <div className="flex items-center justify-between gap-3 pb-2">
              <h3 className="text-[16px] font-medium leading-[1.4] text-[var(--color-text)]">
                {category.title}
              </h3>
              <span className="font-mono rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[11px] text-[var(--color-text-faint)]">
                {category.skills.length} skills
              </span>
            </div>

            <ul className="mt-2 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.label}
                  className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-2.5 py-1.5"
                >
                  <span
                    className={`font-mono inline-flex items-center gap-1 text-[10px] uppercase tracking-wide ${getSkillStyle(skill.level)}`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${getLevelDotStyle(skill.level)}`}
                    />
                    {skill.label}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
