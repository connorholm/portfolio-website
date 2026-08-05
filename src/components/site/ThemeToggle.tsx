"use client";

/**
 * Explicit light/dark switch.
 *
 * Deliberately stateless: the current theme already lives in the DOM (either
 * as [data-theme] or as the OS preference), so mirroring it into React state
 * would only create a second source of truth and a hydration mismatch. The
 * label is chosen in CSS from the same cascade that colours the page, and the
 * handler reads the live value at click time.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const explicit = root.getAttribute("data-theme");
    const isDark =
      explicit === "dark" ||
      (explicit === null && window.matchMedia("(prefers-color-scheme: dark)").matches);

    const next = isDark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing — the choice just will not persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between the light and dark theme"
      className="border-rule text-ink-3 hover:border-accent hover:text-accent cursor-pointer border px-2 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase transition-colors"
    >
      <span className="theme-label-light">Day</span>
      <span className="theme-label-dark">Night</span>
    </button>
  );
}
