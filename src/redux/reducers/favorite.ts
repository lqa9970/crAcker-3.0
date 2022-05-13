import {
  ADD_FAVORITE_COINS,
  REMOVE_FAVORITE_COINS,
  FavoriteActions,
  FavoriteState,
} from '../../types'

const initState: FavoriteState = {
  favorites: [],
}

const favoriteReducer = (
  state: FavoriteState = initState,
  action: FavoriteActions
) => {
  switch (action.type) {
    case ADD_FAVORITE_COINS:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }

    case REMOVE_FAVORITE_COINS:
      const filteredCoins = state.favorites.filter(
        (coin) => coin !== action.payload
      )
      return {
        ...state,
        favorites: filteredCoins,
      }
    default:
      return state
  }
}

export default favoriteReducer
