import { createContext, useContext } from 'react';
import useThemeState from './useThemeState.jsx';
const ThemeContext = createContext(undefined)
const ThemeProvider = ({children}) => {
    const [darkMode, toggleDarkMode] = useThemeState();
    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be within a ThemeProvider");
    }
    return context;
}

export { ThemeProvider, useThemeContext };