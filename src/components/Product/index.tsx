// Components
import Tag from '../Tag'
// Styles
import * as S from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  system,
  category,
  description,
  image,
  infos,
  id
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }

    return text
  }
  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={image} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.TitleProduct>{title}</S.TitleProduct>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}
export default Product
