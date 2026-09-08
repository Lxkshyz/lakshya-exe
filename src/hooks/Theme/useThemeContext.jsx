import {createContext, useContext} from 'react';
import useThemeState from './useThemeState';

const ThemeContext = createContext(null);

function ThemeProvider({children}) {
    const [theme, changeTheme] = useThemeState();
    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
function useThemeContext() {
    return useContext(ThemeContext);
}
export { ThemeProvider, useThemeContext };
