import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp'
import Badge from '@mui/material/Badge'

import { Coin, AppState } from '../../types'

import './favorite.scss'

const FavoriteTab = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const favoritesContent = useSelector(
    (state: AppState) => state.favorite.favorites
  )
  return (
    <>
      <IconButton
        aria-label="open-favorite"
        size="large"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Badge badgeContent={favoritesContent.length} max={10} color="error">
          <FavoriteSharpIcon color="primary" fontSize="inherit" />
        </Badge>
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
          {favoritesContent.map((favorite: Coin) => (
            <Link to={`/${favorite.id}`}>
              <div key={favorite.id} className="favorite__box">
                <img src={favorite.image} alt="Coin logo" />
                <p>{favorite.name}</p>
              </div>
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  )
}

export default FavoriteTab
