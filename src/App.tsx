import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// Components
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'
// Rotas Api
import Rotas from './routes'
// Redux Store
import store from './store'
// Styles
import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
