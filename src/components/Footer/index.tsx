// Styles
import * as S from './style'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.ContainerFooter>
    <div className="container">
      <S.FooterSection>
        <S.SectionFooterTitle>Categorias</S.SectionFooterTitle>
        <S.LinksFooter>
          <li>
            <S.LinkFooter
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.LinkFooter>
          </li>
          <li>
            <S.LinkFooter
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              Ação
            </S.LinkFooter>
          </li>
          <li>
            <S.LinkFooter
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              Esportes
            </S.LinkFooter>
          </li>
          <li>
            <S.LinkFooter
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              Simulação
            </S.LinkFooter>
          </li>
          <li>
            <S.LinkFooter
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              Luta
            </S.LinkFooter>
          </li>
        </S.LinksFooter>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionFooterTitle>Acesso rápido</S.SectionFooterTitle>
        <S.LinksFooter>
          <li>
            <S.LinkFooter
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoção
            </S.LinkFooter>
            <S.LinkFooter
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.LinkFooter>
          </li>
        </S.LinksFooter>
      </S.FooterSection>
      <S.CopyText>
        {currentYear} - &copy; E-PLAY Todos os direitos reservados
      </S.CopyText>
    </div>
  </S.ContainerFooter>
)
export default Footer
