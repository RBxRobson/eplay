import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categorys from './pages/Categorys'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorys />} />
  </Routes>
)

export default Rotas
