import { useDispatch } from 'react-redux'
// Components
import Button from '../Button'
import Tag from '../Tag'
// Functions
import { addCart, openCart } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
// Type
import { Game } from '../../pages/Home'
// Styles
import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(addCart(game))
    dispatch(openCart())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}

            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>

          {game.prices.current && (
            <Button
              $variant="primary"
              type="button"
              title="Clique aqui para adicionar esse jogo ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
export default Hero
