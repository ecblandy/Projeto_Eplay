import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styled'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  position: relative;
  padding-top: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    background-size: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    position: absolute;
    background-color: ${colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
    span {
      display: block;
      text-decoration: line-through;
    }
  }

  button {
    cursor: pointer;
  }
`
