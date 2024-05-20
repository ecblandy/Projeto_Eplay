import * as S from './style'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.ContainerFooter>
    <div className="container">
      <S.FooterSection>
        <S.SectionFooterTitle>Categorias</S.SectionFooterTitle>
        <S.LinksFooter>
          <li>
            <S.LinkFooter>RPG</S.LinkFooter>
            <S.LinkFooter>Ação</S.LinkFooter>
            <S.LinkFooter>Aventura</S.LinkFooter>
            <S.LinkFooter>Esportes</S.LinkFooter>
            <S.LinkFooter>Simulação</S.LinkFooter>
            <S.LinkFooter>Estrategia</S.LinkFooter>
            <S.LinkFooter>FPS</S.LinkFooter>
          </li>
        </S.LinksFooter>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionFooterTitle>Acesso rápido</S.SectionFooterTitle>
        <S.LinksFooter>
          <li>
            <S.LinkFooter>Novidades</S.LinkFooter>
            <S.LinkFooter>Promoção</S.LinkFooter>
            <S.LinkFooter>Em breve</S.LinkFooter>
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
