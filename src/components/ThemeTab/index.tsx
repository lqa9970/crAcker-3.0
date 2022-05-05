import React, { useState, useContext } from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import PaletteIcon from '@mui/icons-material/Palette'

import { ThemeContext } from '../../context/theme-context'

import './theme.scss'

const ThemeTab = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { switchTheme } = useContext(ThemeContext)

  return (
    <>
      <IconButton
        aria-label="switch-theme"
        size="large"
        onClick={() => setIsDrawerOpen(true)}
      >
        <PaletteIcon color="primary" fontSize="inherit" />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Theme Tab
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}

export default ThemeTab
