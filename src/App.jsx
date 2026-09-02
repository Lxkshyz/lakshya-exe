import { useThemeContext } from "./hooks/useThemeContext.jsx";

function App() {
    const { toggleDarkMode } = useThemeContext();
    function toggle() {
        const root = document.documentElement;
        root.classList.add("theme-transition");
        toggleDarkMode();
    }
  return (
      <>
          <button onClick={toggle}>hello</button>
      </>
  )
}

export default App
