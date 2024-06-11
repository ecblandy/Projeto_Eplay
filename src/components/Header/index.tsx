import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'
// Images
import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'
// Functions
import { openCart } from '../../store/reducers/cart'
// Type
import { RootReducer } from '../../store'
// Styles
import * as S from './style'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const cartIsOpen = () => {
    dispatch(openCart())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.BurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.BurgerMenu>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItens>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItens>
              <S.LinkItens>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItens>
              <S.LinkItens>
                <HashLink
                  title="Clique aqui para acessar a seção de em promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItens>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={cartIsOpen}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItens>
            <Link
              title="Clique para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItens>
          <S.LinkItens>
            <HashLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinkItens>
          <S.LinkItens>
            <HashLink
              title="Clique aqui para acessar a seção de em promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItens>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
