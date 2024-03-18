import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import {
  useGetComingSoonGameQuery,
  useGetPromotionsGameQuery
} from '../../services/api'

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
