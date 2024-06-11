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
  const { data: gamesAcao } = useGetActionsGamesQuery()
  const { data: gamesEsportes } = useGetSportGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesRPG } = useGetRpgGamesQuery()
  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRPG) {
    return (
      <>
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductsList
          games={gamesRPG}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Home
