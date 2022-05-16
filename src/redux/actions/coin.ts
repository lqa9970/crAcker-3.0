import { Dispatch } from 'redux'

import {
  CoinActions,
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAIL,
  GET_FAV,
  GET_FAV_SUCCESS,
  GET_FAV_FAIL,
  Coin,
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

export const getFav = (): CoinActions => {
  return {
    type: GET_FAV,
  }
}

export const getFavSuccess = (coin: Coin): CoinActions => {
  return {
    type: GET_FAV_SUCCESS,
    payload: coin,
  }
}

export const getFavFail = (error: string): CoinActions => {
  return {
    type: GET_FAV_FAIL,
    payload: error,
  }
}

const baseUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d'

const favUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=`

export const fetchCoins = () => {
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

export const fetchFav = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(getFav())
    try {
      const request = await fetch(favUrl + `${id}`)
      const res = await request.json()
      return dispatch(getFavSuccess(res))
    } catch (err) {
      console.log(err)
      return (err: any) => {
        dispatch(getFavFail(err.message))
      }
    }
  }
}
