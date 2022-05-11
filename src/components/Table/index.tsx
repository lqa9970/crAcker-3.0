import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import IconButton from '@mui/material/IconButton'

import { ThemeContext } from '../../context/theme-context'
import { fetchCoins, addFavorite, removeFavorite } from '../../redux/actions'
import { Coin, AppState } from '../../types'

import './table.scss'

type TableProps = {
  keyword: string
}

const TableComponent = ({ keyword }: TableProps) => {
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)
  const coins = useSelector((state: AppState) => state.coin.coins)
  const isLoading = useSelector((state: AppState) => state.coin.isLoading)
  // let isFavorited = useSelector((state: AppState) => state.coin.isFavorited)
  const [filteredCoins, setFilteredCoins] = useState(coins)

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  useEffect(() => {
    setFilteredCoins(coins)
  }, [coins])

  useEffect(() => {
    const _tempCoins = coins.filter((coin: Coin) =>
      coin.name.toLowerCase().includes(keyword.toLowerCase())
    )
    setFilteredCoins(_tempCoins)
  }, [keyword, coins])

  const handleAddFavorite = (coin: Coin) => {
    coin.isFavorited = !coin.isFavorited
    dispatch(addFavorite(coin))
  }

  const handleRemoveFavorite = (coin: Coin) => {
    coin.isFavorited = !coin.isFavorited
    dispatch(removeFavorite(coin))
  }

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className={`table__${theme}`}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">CoinLogo</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Current price</TableCell>
            <TableCell align="center">Price changed</TableCell>
            <TableCell align="center">Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <td>Table loading...</td>
            </TableRow>
          ) : (
            <>
              {filteredCoins.map((coin) => (
                <TableRow
                  className={`table__${theme}`}
                  key={coin.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <img src={`${coin.image}`} alt={`${coin.name}'s logo`} />
                  </TableCell>
                  <TableCell align="center">
                    <Link to={`/${coin.id}`}>
                      <div className={`coin__button coin__button__${theme}`}>
                        {coin.name}
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell align="center">€{coin.current_price}</TableCell>
                  <TableCell align="center">
                    {coin.price_change_percentage_24h}%
                  </TableCell>
                  <TableCell align="center">
                    {coin.isFavorited ? (
                      <IconButton onClick={() => handleRemoveFavorite(coin)}>
                        <FavoriteIcon color="error" />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => handleAddFavorite(coin)}>
                        <FavoriteBorderIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent
