import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, removeCart } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const isCloseCart = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(removeCart(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => isCloseCart()} />
      <S.Sidebar>
        <ul>
          {items.map(({ name, media, prices, id, details }) => (
            <S.CartItem key={id}>
              <img src={media.thumbnail} alt={name} />
              <div>
                <h3>{name}</h3>
                <Tag>{details.category}</Tag>
                <Tag>{details.system}</Tag>
                <span>{formataPreco(prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} Jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros.</span>
        </S.Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
