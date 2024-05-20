import * as S from './styles'
export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  children: string
  onClick?: () => void
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type == 'button') {
    return (
      <S.ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}
export default Button
