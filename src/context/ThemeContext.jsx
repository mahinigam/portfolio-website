import React, { useState } from 'react'
import { ThemeContext } from './themeContext'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('glass') // 'retro' or 'glass' - default to glass
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'retro' ? 'glass' : 'retro')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
