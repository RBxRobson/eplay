import ProductList from '../../components/ProductList'

import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categorys = () => {
  const { data: actionGames } = useGetActionGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()
  const { data: figthGames } = useGetFightGameQuery()
  const { data: sportsGames } = useGetSportsGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()

  if (actionGames && rpgGames && figthGames && sportsGames && simulationGames) {
    return (
      <>
        <ProductList games={actionGames} title="Ação" background={'black'} />
        <ProductList games={sportsGames} title="Esportes" background={'gray'} />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background={'black'}
        />
        <ProductList games={rpgGames} title="RPG" background={'gray'} />
        <ProductList games={figthGames} title="Luta" background={'black'} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categorys
