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

    useEffect(() => setMounted(true), []);

    const nextTheme =
        theme === "light" ? "dark" : theme === "dark" ? "system" : "light";

    const Icon = icons[theme];

    const ariaLabel = `Switch to ${nextTheme} theme`;

    if (!mounted) return null;

    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={() => setTheme(nextTheme)}
            className="
                cursor-pointer relative flex items-center justify-center
                w-11 h-11 rounded-xl
                bg-gray-200/60 dark:bg-gray-800/60
                backdrop-blur-xl
                border border-gray-300 dark:border-gray-700
                text-gray-900 dark:text-gray-100
                hover:bg-gray-300/70 dark:hover:bg-gray-700/70
                hover:border-indigo-400 dark:hover:border-indigo-400
                transition-all duration-200 ease-out
                active:scale-95
                shadow-md dark:shadow-lg
            "
        >
            <span className="sr-only">{ariaLabel}</span>

            {/* Animated Icon */}
            <span
                key={theme}
                className="
                    inline-block
                    animate-theme-in
                    motion-reduce:animate-none
                "
            >
                <Icon className="w-5 h-5" />
            </span>

            {/* Small indicator dot for system mode */}
            {theme === "system" && (
                <span
                    className="
                        absolute bottom-1 right-1
                        w-1.5 h-1.5 rounded-full
                        bg-indigo-500
                    "
                />
            )}
        </button>
    );
}
