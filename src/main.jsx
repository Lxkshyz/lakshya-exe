import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "./hooks/Theme/useThemeContext.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
          <div id="theme-overlay"></div>
          <App />
      </ThemeProvider>
  </StrictMode>,
)
