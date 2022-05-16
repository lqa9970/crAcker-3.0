// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const ADD_COIN = 'ADD_COIN'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  coin: CoinState
  favorite: FavoriteState
  ui: UiState
}

// Coin Types

export type CoinState = {
  coins: Coin[]
  isLoading: boolean
  isFavorited: boolean
  error: any | string
  favorites: Coin[]
}

export const GET_COINS = 'GET_COINS'
export const GET_COINS_SUCCESS = 'GET_COINS_SUCCESS'
export const GET_COINS_FAIL = 'GET_COINS_FAIL'

export const GET_FAV = 'GET_FAV'
export const GET_FAV_SUCCESS = 'GET_FAV_SUCCESS'
export const GET_FAV_FAIL = 'GET_FAV_FAIL'

export const ADD_FAVORITE_COINS = 'ADD_FAVORITE_COINS'
export const REMOVE_FAVORITE_COINS = 'REMOVE_FAVORITE_COINS'

export type AllCoinsState = {
  coins: Coin[]
  isLoading: boolean
  error: string
  isFavorited: boolean
}

export type Coin = {
  image: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  isFavorited?: boolean
  id: string
  market_cap_rank: number
  high_24h: number
  low_24h: number
  symbol: string
}

export type GetAllCoinAction = {
  type: typeof GET_COINS
  payload?: string
}

export type GetAllCoinSuccess = {
  type: typeof GET_COINS_SUCCESS
  payload?: Coin[]
}

export type GetAllCoinFail = {
  type: typeof GET_COINS_FAIL
  payload?: string
}

export type GetFavActions = {
  type: typeof GET_FAV
  payload?: string
}

export type GetFavSuccess = {
  type: typeof GET_FAV_SUCCESS
  payload?: Coin
}

export type GetFavFail = {
  type: typeof GET_FAV_FAIL
  payload?: string
}

export type CoinActions =
  | GetAllCoinAction
  | GetAllCoinSuccess
  | GetAllCoinFail
  | GetFavActions
  | GetFavSuccess
  | GetFavFail

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export type ThemeContextType = {
  theme: Theme
  switchTheme: (switchTheme: Theme) => void
}

export type FavoriteState = {
  favorites: Coin[]
}

export type AddFavorite = {
  type: typeof ADD_FAVORITE_COINS
  payload: Coin
}

export type RemoveFavorite = {
  type: typeof REMOVE_FAVORITE_COINS
  payload: Coin
}

export type FavoriteActions = AddFavorite | RemoveFavorite
