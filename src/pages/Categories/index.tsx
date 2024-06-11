// Components
import ProductsList from '../../components/ProductsList'
// Functions
import {
  useGetActionsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Home = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionsGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: gamesRPG, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesAcao}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesEsportes}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={gamesLuta}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={gamesRPG}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Home
