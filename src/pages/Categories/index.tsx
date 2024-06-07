import ProductsList from '../../components/ProductsList'
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
        <ProductsList games={gamesAcao} title="Ação" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="black"
        />
        <ProductsList games={gamesLuta} title="Luta" background="gray" />
        <ProductsList games={gamesRPG} title="RPG" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Home
