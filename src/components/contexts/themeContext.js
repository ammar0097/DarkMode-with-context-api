import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));

  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
};
