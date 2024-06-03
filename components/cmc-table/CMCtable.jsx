'use client'
import { useContext, useEffect, useState, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import CMCtableHeader from './cmcTableHeader'
import CMCtableRow from './cmcTableRow'

export default function CMCtable() {
    let { getTopTenCoins } = useContext(CoinMarketContext)
    let [coinData, setCoinData] = useState(null)
  
    useEffect(() => {
      
      setData()
    }, [])
  
    const setData = useCallback(async () => {
      try {
        let apiResponse = await getTopTenCoins()
      
        let filteredResponse = []
  
        for (let i = 0; i < apiResponse.length; i++) {
          const element = apiResponse[i]
          if (element.market_cap_rank <= 10) filteredResponse.push(element)
        }
  
        setCoinData(filteredResponse)
      } catch (e) {
        console.log(e.message)
      }
    }, [getTopTenCoins])
  
    return (
      <div className='text-white font-bold'>
        <div className='mx-auto max-w-screen-2xl'>
          <table className='w-full'>
            <CMCtableHeader />
  
            {coinData && coinData ? (
              coinData.map((coin, index) => {
                return (
                  <CMCtableRow
                    key={index}
                    starNum={coin.market_cap_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    coinIcon={btc}
                    showBuy={true}
                    hRate={coin?.price_change_percentage_24h}
                    dRate={coin?.ath_change_percentage}
                    hRateIsIncrement={true}
                    price={coin?.current_price}
                    marketCapValue={coin?.market_cap}
                    volumeCryptoValue={coin?.total_volume

                    }
                    volumeValue={coin.total_supply}
                    circulatingSupply={coin.circulating_supply}
                  />
                )
              })
            ) : (
              <></>
            )}
          </table>
        </div>
      </div>
    )
}
