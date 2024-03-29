import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
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
  useGetGameQuery,
  usePurchaseMutation
} = api
export default api
