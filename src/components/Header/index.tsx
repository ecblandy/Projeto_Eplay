import { Link } from 'react-router-dom'
import * as S from './style'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const cartIsOpen = () => {
    dispatch(openCart())
  }
  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav>
          <S.Links>
            <S.LinkItens>
              <Link to="/categories">Categorias</Link>
            </S.LinkItens>
            <S.LinkItens>
              <a href="#">Novidades</a>
            </S.LinkItens>
            <S.LinkItens>
              <a href="#">Promoções</a>
            </S.LinkItens>
          </S.Links>
        </nav>
      </div>
      <S.LinkCart onClick={() => cartIsOpen()}>
        <span>{items.length} - produto(s)</span>
        <img src={carrinho} alt="carrinho" />
      </S.LinkCart>
    </S.HeaderBar>
  )
}

export default Header
