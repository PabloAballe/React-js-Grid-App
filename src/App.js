
import './App.css';
import React, { useState } from "react"

import ThemeContext from "./contexts/ThemeContext";
import ThemeSwitcher from './components/ThemeSwitcher';
import colors from './utils/colors.json';

import UsersList  from './pages/UsersList';
const App = () => {

  const [theme, setTheme] = useState("light")
  const value = { theme, setTheme }

  const bg =
    theme === "dark"
      ? `body {background-color: ${colors.themes.dark.backgroundColor}; color: ${colors.themes.dark.textColor};}`
      : `body {background-color:${colors.themes.light.backgroundColor}; color: ${colors.themes.light.textColor};}`

  return (
    <div className="grid-app">
       <style>{bg}</style>
       <ThemeContext.Provider value={value}>
        <UsersList/>
        <ThemeSwitcher/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
