import { Link } from 'react-router-dom'
import * as S from './style'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
const Header = () => (
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
    <S.LinkCart>
      <span>0 - produto(s)</span>
      <img src={carrinho} alt="carrinho" />
    </S.LinkCart>
  </S.HeaderBar>
)

export default Header
