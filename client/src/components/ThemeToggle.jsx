// components/ThemeToggle.jsx
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

const icons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
};

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch for system theme
    useEffect(() => setMounted(true), []);

    const nextTheme =
        theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

    const Icon = icons[theme];

    // Derive system appearance
    const systemAppearance =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    const ariaLabel = `Switch to ${
        nextTheme === "system" ? "system" : nextTheme
    } theme`;

    if (!mounted) return null; // Prevents flash of wrong icon

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={() => setTheme(nextTheme)}
            className="
        relative flex items-center justify-center
        w-10 h-10 rounded-full
        text-slate-700 dark:text-slate-200
        bg-white/50 dark:bg-slate-800/50
        hover:bg-slate-200/60 dark:hover:bg-slate-700/60
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400
        transition-all duration-200 ease-in-out
        transform hover:scale-110 active:scale-95
      "
        >
            <span className="sr-only">{ariaLabel}</span>

            {/* Icon wrapper with gentle spin */}
            <span
                key={theme} // re-triggers animation on change
                className="
          inline-block
          animate-theme-in
          motion-reduce:animate-none
        "
            >
                <Icon className="w-5 h-5" />
            </span>

            {/* Subtle dot indicator for system theme */}
            {theme === "system" && (
                <span
                    className="
            absolute bottom-1 right-1
            block w-1.5 h-1.5 rounded-full
            bg-indigo-500
          "
                    aria-hidden
                />
            )}
        </button>
    );
}

/* TailwindCSS keyframes (add to global.css or tailwind config) */
/* @keyframes theme-in {
  0%   { transform: rotate(-45deg) scale(0.8); opacity: 0; }
  100% { transform: rotate(0deg)   scale(1);   opacity: 1; }
}
.animate-theme-in { animation: theme-in 200ms ease-out; } */
