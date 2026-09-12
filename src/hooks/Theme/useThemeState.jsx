import { useState, useEffect } from "react";
import themeAnimation from "../../animations/core/ThemeAnimation.jsx";

function useThemeState() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        themeAnimation(theme, false);
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function changeTheme() {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        themeAnimation(nextTheme, true);
    }

    return [theme, changeTheme];
}

export default useThemeState;