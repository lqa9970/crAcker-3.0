import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'

import { fetchCoins } from '../../redux/actions'
import { Coin, AppState } from '../../types'

import './table.scss'
// const rows = []

const TableComponent = () => {
  const dispatch = useDispatch()
  const coins = useSelector((state: AppState) => state.coin.coins)
  const isLoading = useSelector((state: AppState) => state.coin.isLoading)

  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CoinLogo</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Current price</TableCell>
            <TableCell>Price changed</TableCell>
            <TableCell>Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>Table loading...</TableRow>
          ) : (
            <>
              {coins.map((coin: Coin) => (
                <TableRow
                  key={coin.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={`${coin.image}`} alt={`${coin.name}'s logo`} />
                  </TableCell>
                  <TableCell>{coin.name}</TableCell>
                  <TableCell>€{coin.current_price}</TableCell>
                  <TableCell>{coin.price_change_percentage_24h}%</TableCell>
                  <TableCell>
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>
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
