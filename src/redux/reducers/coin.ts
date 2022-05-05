import {
  AllCoinsState,
  GET_COINS,
  GET_COINS_SUCCESS,
  GET_COINS_FAIL,
} from '../../types'

const initState: AllCoinsState = {
  coins: [],
  isLoading: false,
  error: '',
}

const coinReducer = (state: AllCoinsState = initState, action: any) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        isLoading: true,
      }

    case GET_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coins: action.payload,
        error: '',
      }
    case GET_COINS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default coinReducer
