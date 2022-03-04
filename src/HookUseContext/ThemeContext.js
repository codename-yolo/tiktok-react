import { createContext, useState } from 'react';

const ThemeContext = createContext()


function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const values = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>

    )

}

export { ThemeContext, ThemeProvider }