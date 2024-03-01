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
        <ProductList
          games={actionGames}
          title="Ação"
          background={'black'}
          id="action"
        />
        <ProductList
          games={sportsGames}
          title="Esportes"
          background={'gray'}
          id="sports"
        />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background={'black'}
          id="simulation"
        />
        <ProductList
          games={rpgGames}
          title="RPG"
          background={'gray'}
          id="rpg"
        />
        <ProductList
          games={figthGames}
          title="Luta"
          background={'black'}
          id="fight"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categorys
