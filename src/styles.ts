import { createGlobalStyle } from 'styled-components'

export const colors = {
  gray: '#333',
  black: '#111',
  white: '#EEEEEE',
  green: '#10AC84',
  lightGray: '#A3A3A3'
}

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${breakPoints.desktop} ){
    max-width: 80%;
  }
}
`
