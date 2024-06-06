import * as S from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}
const Section = ({ title, background, children }: Props) => (
  <S.ContainerCard background={background}>
    <div className="container">
      <S.TitleSection>{title}</S.TitleSection>
      {children}
    </div>
  </S.ContainerCard>
)
export default Section
