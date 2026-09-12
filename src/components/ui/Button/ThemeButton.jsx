import { useThemeContext } from "../../../hooks/Theme/useThemeContext.jsx";
import Sun from "../assets/Sun.jsx";
import Moon from "../assets/Moon.jsx";

function ThemeButton({ size = "md" }) {
    const { theme, changeTheme } = useThemeContext();
    const iconSize = size === "sm" ? 18 : 24;
    const Icon = theme === "dark" ? Sun : Moon;
    return (
        <button
            onClick={changeTheme}
            className="text-text border-3 border-border rounded-full p-1.5"
        >
            <Icon size={iconSize} />
        </button>
    );
}

export default ThemeButton;