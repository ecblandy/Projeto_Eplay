import Tag from '../Tag'
import * as S from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  system,
  category,
  description,
  image,
  infos
}: Props) => (
  <S.Card>
    <img src={image} alt="" />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.TituloProduct>{title}</S.TituloProduct>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <S.Descricao>{description}</S.Descricao>
  </S.Card>
)
export default Product
