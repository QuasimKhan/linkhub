import { createContext, useEffect, useState } from "react";
import { getSystemTheme, applyThemeToHTML } from "../lib/theme.js";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    //load saved theme first , if in local storage

    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "system";

        const saved = localStorage.getItem("theme");
        return ["light", "dark", "system"].includes(saved) ? saved : "system";
    });

    // apply theme whenever it changes
    useEffect(() => {
        applyThemeToHTML(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    //auto-update if the OS theme changes
    useEffect(() => {
        if (theme !== "system") return;
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = () => {
            applyThemeToHTML("system");
        };
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
