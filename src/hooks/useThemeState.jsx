import { useState, useEffect } from 'react';
function useThemeState() {
    const [darkMode, setDarkMode] = useState(
        () => {
            const theme = localStorage.getItem('theme');
            return theme === 'dark';
        }
    );

    function toggleDarkMode() {
        setDarkMode(darkMode => !darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])
    return [darkMode, toggleDarkMode];
}

export default useThemeState;