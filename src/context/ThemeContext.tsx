import { createContext, useState } from "react";

interface ThemeContextType {
    darkMode: any,
    toggleDarkMode: any,    
}

export interface ModeProps{
    readonly mode : string,
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({ children }: { children: any }) => {
const [darkMode, setDarkMode] = useState(false);
const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};
  
  const values: ThemeContextType = {
    darkMode: darkMode,
    toggleDarkMode: toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
