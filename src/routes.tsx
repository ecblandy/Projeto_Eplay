import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
