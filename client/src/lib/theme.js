export const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

//apply theme class to <html>

export const applyThemeToHTML = (theme) => {
    const finalTheme = theme === "system" ? getSystemTheme() : theme;

    const html = document.documentElement;
    html.classList.remove("dark");

    if (finalTheme === "dark") {
        html.classList.add("dark");
    }
};
