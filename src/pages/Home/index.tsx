import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Search from '../../components/Search'
import TableComponent from '../../components/Table'

import { ThemeContext } from '../../context/theme-context'
import { fetchCoins } from '../../redux/actions'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return (
    <>
      <Search />
      <TableComponent />
    </>
  )
}

export default Home
