import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

import {
  CoinActions,
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAIL,
} from '../../types'

export const getCoins = (): CoinActions => {
  return {
    type: GET_COINS,
  }
}

export const getCoinsSuccess = (coins: []): CoinActions => {
  return {
    type: GET_COINS_SUCCESS,
    payload: coins,
  }
}

export const getCoinsFail = (error: string): CoinActions => {
  return {
    type: GET_COINS_FAIL,
    payload: error,
  }
}

const baseUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'

export const fetchCoins = () => {
  // const dispatch = useDispatch()

  return async (dispatch: Dispatch) => {
    dispatch(getCoins())
    try {
      const res = await (await fetch(baseUrl)).json()
      return dispatch(getCoinsSuccess(res))
    } catch (err) {
      console.log(err)
      return (err: any) => {
        dispatch(getCoinsFail(err.message))
      }
    }
  }
}
