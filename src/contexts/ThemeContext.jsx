import { createContext, useState } from "react";

const LIGHT = 'bg-zinc-200 text-zinc-900'
const DARK = 'bg-zinc-900 text-zinc-50'

export const ThemeContext = createContext(LIGHT);

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(LIGHT);

    const toggleTheme = () => {
        setTheme(theme === LIGHT ? DARK : LIGHT);
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}