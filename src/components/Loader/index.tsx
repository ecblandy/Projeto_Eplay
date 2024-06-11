import { colors } from '../../styles'
import { PacmanLoader } from 'react-spinners'
import * as S from './styles'
const Loader = () => (
  <S.Container>
    <PacmanLoader color={colors.white} />
  </S.Container>
)
export default Loader
