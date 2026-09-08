import {useThemeContext} from "../../hooks/Theme/useThemeContext.jsx";
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg"

function ThemeButton() {
    const {theme, changeTheme} = useThemeContext();
    return (
        <button onClick={changeTheme}
                className="text-text border-3 border-border rounded-full p-1.5 ml-2"
        >
            {theme === "dark" ? <img src={Moon} alt="dark mode"/> : <img src={Sun} alt="light mode"/>}
        </button>
    )
}
export default ThemeButton;
