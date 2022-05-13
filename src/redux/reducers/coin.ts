import {
  AllCoinsState,
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAIL,
  ADD_FAVORITE_COINS,
} from '../../types'

const initState: AllCoinsState = {
  coins: [],
  isLoading: false,
  error: '',
  isFavorited: false,
}

const coinReducer = (state: AllCoinsState = initState, action: any) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        isLoading: true,
        isFavorited: false,
      }

    case GET_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coins: action.payload,
        error: '',
        isFavorited: false,
      }
    case GET_COINS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isFavorited: false,
      }

    default:
      return state
  }
}

export default coinReducer
