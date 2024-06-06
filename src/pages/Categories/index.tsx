import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Home = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    const ENDPOINT_ACAO = 'https://fake-api-tau.vercel.app/api/eplay/acao'
    const ENDPOINT_ESPORTES =
      'https://fake-api-tau.vercel.app/api/eplay/esportes'
    const ENDPOINT_SIMULACAO =
      'https://fake-api-tau.vercel.app/api/eplay/simulacao'
    const ENDPOINT_LUTA = 'https://fake-api-tau.vercel.app/api/eplay/luta'
    const ENDPOINT_RPG = 'https://fake-api-tau.vercel.app/api/eplay/rpg'

    fetch(ENDPOINT_ACAO)
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch(ENDPOINT_ESPORTES)
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res))

    fetch(ENDPOINT_SIMULACAO)
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch(ENDPOINT_LUTA)
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch(ENDPOINT_RPG)
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])
  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsportes} title="Esportes" background="gray" />
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
export default Home
