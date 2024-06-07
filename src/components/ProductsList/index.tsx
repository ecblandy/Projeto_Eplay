import { Game } from '../../pages/Home'
import Product from '../Product'
import * as S from '../section/styles'
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ background, title, games }: Props) => {
  const getGamesTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }
  return (
    <S.ContainerCard background={background}>
      <div className="container">
        <S.TitleSection>{title}</S.TitleSection>
        <S.List>
          {games.map((games) => (
            <li key={games.id}>
              <Product
                id={games.id}
                title={games.name}
                category={games.details.category}
                system={games.details.system}
                description={games.description}
                infos={getGamesTags(games)}
                image={games.media.thumbnail}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.ContainerCard>
  )
}
export default ProductsList
