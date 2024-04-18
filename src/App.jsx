import './App.css'
import { useEffect } from 'react'
import HomeComponent from './components/HomeComponent'
import NavBarComp from './components/NavBarComp'
import FooterComp from './components/FooterComp'
import ProductsComp from './components/ProductsComp'
import CategoryComp from './components/CategoryComp'
import ProductComp from './components/ProductComp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {

  useEffect(() => {
    document.body.classList.add("min-h-screen", "bg-no-repeat", "bg-gradient-to-tr", "from-indigo-950", "from-10%", "via-blue-950", "via-50%", "to-indigo-950", "to-90%")
    return () => {

    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBarComp />
          <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route exact path="/productos" element={<ProductsComp />} />
            <Route exact path="/footer" element={<FooterComp />} />
            <Route exact path="/category/:cateId" element={<CategoryComp />} />
            <Route exact path="/product/:prodId" element={<ProductComp />} />
          </Routes>
          <FooterComp/>
        </CartProvider>
        
      </BrowserRouter>
    </>
  )
}

export default App
