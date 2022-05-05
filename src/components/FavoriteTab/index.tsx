import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'

const FavoriteTab = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <IconButton
        aria-label="open-favorite"
        size="large"
        onClick={() => setIsDrawerOpen(true)}
      >
        <FavoriteSharpIcon color="primary" fontSize="inherit" />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Favorite Tab
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}

export default FavoriteTab
