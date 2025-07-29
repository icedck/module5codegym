import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Category from './components/Category'
import Product from './components/Product'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
