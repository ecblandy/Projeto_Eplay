// Components
import Product from '../Product'
import Loader from '../Loader'
// Functions
import { parseToBrl } from '../../utils'

// Styles
import * as S from '../Section/styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  const getGamesTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.ContainerCard id={id} background={background}>
      <div className="container">
        <S.TitleSection>{title}</S.TitleSection>
        <S.List>
          {games &&
            games.map((games) => (
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
