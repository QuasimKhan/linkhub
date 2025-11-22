export const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

//apply theme class to <html>

export const applyThemeToHTML = (theme) => {
    const finalTheme = theme === "system" ? getSystemTheme() : theme;
    document.documentElement.classList.toggle("dark", finalTheme === "dark");
};
