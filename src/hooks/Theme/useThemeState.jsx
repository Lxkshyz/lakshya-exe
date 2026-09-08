import { useState, useEffect } from "react";

function useThemeState() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function changeTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return [theme, changeTheme];
}

export default useThemeState;