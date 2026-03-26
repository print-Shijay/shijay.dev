const tickerItems = [
  "Laravel + React + Inertia.js",
  "Freelance Full-Stack Developer",
  "Next.js + Tailwind CSS",
  "FastAPI + PyTorch ML",
  "Azure + Coolify DevOps",
  "Available for Projects",
  "Code Hard, Ride Free — MotoCoder",
  "Based in San Pablo, Laguna, PH",
];

const tickerLoopItems = [
  ...tickerItems.map((item) => ({ id: `${item}-first`, label: item })),
  ...tickerItems.map((item) => ({ id: `${item}-second`, label: item })),
];

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-[var(--color-amber-border)] bg-[var(--color-amber)] py-2">
      <div className="ticker-track flex items-center">
        {tickerLoopItems.map((item) => (
          <span
            key={item.id}
            className="font-mono mx-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-wide text-[var(--color-amber-text)]"
          >
            <span>{item.label}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-amber-text)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
