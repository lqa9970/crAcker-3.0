import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Search from '../../components/Search'
import TableComponent from '../../components/Table'

import { ThemeContext } from '../../context/theme-context'
import { fetchCoins } from '../../redux/actions'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  const handleSearch = (value: string) => {
    setKeyword(value)
  }

  return (
    <div className={`home home__${theme}`}>
      <Search handleSearch={handleSearch} />
      <TableComponent keyword={keyword} />
    </div>
  )
}

export default Home
