import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders ={
   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c129b7d1bfmsh2c297ed0d862b8ap1b4921jsn77eb58a92281'
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) =>({

        // Trending cryptocurrencies overview
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`),
        }),
      
      
      // crypto coin description query 
        getCryptoDetails: builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,
} = cryptoApi;