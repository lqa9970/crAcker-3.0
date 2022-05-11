import React from 'react'

import Routes from './Routes'
import ThemeProvider from './context/theme-context'

import './styles/style.scss'

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}
