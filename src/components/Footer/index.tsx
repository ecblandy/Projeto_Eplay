import * as S from './style'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.ContainerFooter>
    <div className="container">
      <S.FooterSection>
        <S.SectionFooterTitle>Categorias</S.SectionFooterTitle>
        <S.LinksFooter>
          <li>
            <S.LinkFooter to="/categories#rpg">RPG</S.LinkFooter>
            <S.LinkFooter to="/categories#action">Ação</S.LinkFooter>
            <S.LinkFooter to="/categories#sports">Esportes</S.LinkFooter>
            <S.LinkFooter to="/categories#simulation">Simulação</S.LinkFooter>
            <S.LinkFooter to="/categories#fight">Luta</S.LinkFooter>
          </li>
        </S.LinksFooter>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionFooterTitle>Acesso rápido</S.SectionFooterTitle>
        <S.LinksFooter>
          <li>
            <S.LinkFooter to="/#on-sale">Promoção</S.LinkFooter>
            <S.LinkFooter to="/#coming-soon">Em breve</S.LinkFooter>
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
