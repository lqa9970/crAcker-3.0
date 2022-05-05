import {
  ADD_FAVORITE_COINS,
  REMOVE_FAVORITE_COINS,
  FavoriteActions,
  Coin,
} from '../../types'

export const addFavorite = (coin: Coin): FavoriteActions => {
  return {
    type: ADD_FAVORITE_COINS,
    payload: coin,
  }
}

export const removeFavorite = (coin: Coin): FavoriteActions => {
  return {
    type: REMOVE_FAVORITE_COINS,
    payload: coin,
  }
}
