import React, { useState } from 'react'

import { Theme, ThemeContextType } from '../types'

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: Theme.Light,
  switchTheme: () => {},
})
const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  const switchTheme = (switchTheme: Theme) => {
    setTheme(switchTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
