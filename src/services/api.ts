import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

//* Gerenciando nossa api
const api = createApi({
  baseQuery: fetchBaseQuery({
    //* Endereço inicial da api
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  //* O endpoint é responsável por retornar o endereço final para acessar os dados
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getPromotionsGame: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getComingSoonGame: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGame: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportsGame: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGame: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getRpgGame: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getFightGame: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    //* Para poder usar o id do jogo, passamos um argumento para game
    //* nesse caso ele ira receber um numero, porém ele entende como string
    //* por se tratar de um url, após isso no retorno teremos uma template
    //* string recebendo o id passado no argumento
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetPromotionsGameQuery,
  useGetComingSoonGameQuery,
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery,
  useGetGameQuery
} = api
export default api
