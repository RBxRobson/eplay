import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import {
  useGetComingSoonGameQuery,
  useGetPromotionsGameQuery
} from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: comingSoon, isLoading: isLoadingSoon } =
    useGetComingSoonGameQuery()
  const { data: promotions, isLoading: isLoadingSale } =
    useGetPromotionsGameQuery()

  return (
    <>
      <Banner />
      <ProductList
        games={promotions}
        title="Promoções"
        background={'gray'}
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductList
        games={comingSoon}
        title="Em Breve"
        background={'black'}
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
