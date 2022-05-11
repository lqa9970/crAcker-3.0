import React from 'react'

const FavoriteItem = (logo: any, name: any) => {
  return (
    <>
      <img src={logo} alt="Coin logo" />
      <p>{name}</p>
    </>
  )
}

export default FavoriteItem
