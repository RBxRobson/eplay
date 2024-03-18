import ProductList from '../../components/ProductList'

import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categorys = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGameQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGameQuery()
  const { data: figthGames, isLoading: isLoadingFigth } = useGetFightGameQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGameQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background={'black'}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportsGames}
        title="Esportes"
        background={'gray'}
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background={'black'}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background={'gray'}
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList
        games={figthGames}
        title="Luta"
        background={'black'}
        id="fight"
        isLoading={isLoadingFigth}
      />
    </>
  )
}

export default Categorys
