import { createGlobalStyle } from 'styled-components'

export const cores = {
  cinza: '#333',
  preta: '#111',
  branca: '#EEEEEE',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
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
  background-color: ${cores.preta};
  color: ${cores.branca};
  padding-top: 40px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
