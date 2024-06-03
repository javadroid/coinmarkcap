// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export const getAllCoinData = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      },
    )

    const data = await response.json()

   return data
  }

