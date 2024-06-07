import * as S from './styled'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import Button from '../Button'
import { useEffect, useState } from 'react'
const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    const ENDPOINT_DESTAQUE =
      'https://fake-api-tau.vercel.app/api/eplay/destaque'
    fetch(ENDPOINT_DESTAQUE)
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando </h3>
  }
  return (
    <S.Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>

        <div>
          <S.Titulo>{game.name}</S.Titulo>
          <S.Precos>
            De <span>{formataPreco(game.prices.old)}</span>
            <br />
            por apenas {formataPreco(game.prices.current)}
          </S.Precos>
        </div>

        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Imagem>
  )
}
export default Banner
