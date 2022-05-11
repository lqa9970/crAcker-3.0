import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeContext } from '../../context/theme-context'

import { fetchCoins } from '../../redux/actions'
import { AppState, Coin } from '../../types'

// import '../'

type CoinParam = {
  id: string
}

const CoinPage = () => {
  const [coin, setCoin] = useState<Coin>()
  const [invest, setInvest] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const { id } = useParams<CoinParam>()

  useEffect(() => {
    const fetchData = async (coinId: string) => {
      try {
        setIsLoading(true)
        const res = await (
          await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${coinId}`
          )
        ).json()
        console.log(res)
        setCoin(res[0])
      } catch (err) {
        console.log(err)
      }
      setIsLoading(false)
      const rndInt = Math.floor(Math.random() * 2) + 1
      setInvest(rndInt)
    }
    fetchData(id)
  }, [])

  console.log(coin)

  const { theme } = useContext(ThemeContext)
  return (
    <>
      {isLoading ? (
        <div>Page Loading</div>
      ) : (
        <div className={`coinPage coinPage__${theme}`}>
          <div className={`coinPage__content ${theme}`}>
            <img
              className="coinPage__content__img"
              src={`${coin?.image}`}
              alt={`${coin?.name}'s logo`}
            />
            <h1>Crypto information:</h1>
            <br />
            <div className="coinPage__content__line">Name: {coin?.name}</div>
            <div className="coinPage__content__line">
              Code: "{`${coin?.symbol}`}"
            </div>
            <div className="coinPage__content__line">
              Market Rank: {coin?.market_cap_rank}
            </div>
            <br />
            <div className="coinPage__content__line">
              Current price: €{coin?.current_price}
            </div>
            <div className="coinPage__content__line">
              Highest last 24h: €{coin?.high_24h}
            </div>
            <div className="coinPage__content__line">
              Lowest last 24h: €{coin?.low_24h}
            </div>
            <br />
            <div className="coinPage__content__line">
              Should you invest this crypto now?
              {invest === 1 ? (
                <span style={{ color: 'green' }}> Yes</span>
              ) : (
                <span style={{ color: 'red' }}> Nah</span>
              )}
            </div>
          </div>
          <div className="ballBar">
            <div className="ballBar__bar">
              <img
                src={coin?.image}
                alt={`${coin?.name}' rolling`}
                className="ballBar__rollingCoin"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CoinPage
