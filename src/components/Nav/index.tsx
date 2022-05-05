import React, { useContext } from 'react'
import Divider from '@mui/material/Divider'

import { ThemeContext } from '../../context/theme-context'

import ThemeTab from '../ThemeTab'
import FavoriteTab from '../FavoriteTab'
import './Nav.scss'

const Nav = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="nav__content">
      <ThemeTab />
      <Divider orientation="vertical" />
      <div className="nav__content__mid">Cointracker.io</div>
      <Divider orientation="vertical" />
      <FavoriteTab />
    </div>
  )
}

export default Nav
