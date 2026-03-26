export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[13px] leading-[1.4] text-[var(--color-text-faint)]">
          © {new Date().getFullYear()} Shijay. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
