import Game from '../../models/Game'
import Product from '../Product'
import * as S from './style'
export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <S.ContainerCard background={background}>
    <div className="container">
      <S.TitleSection>{title}</S.TitleSection>
      <S.List>
        {games.map(
          ({ id, category, title, description, image, infos, system }) => (
            <Product
              key={id}
              title={title}
              category={category}
              system={system}
              description={description}
              infos={infos}
              image={image}
            />
          )
        )}
      </S.List>
    </div>
  </S.ContainerCard>
)
export default ProductsList
