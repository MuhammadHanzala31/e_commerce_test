import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { ModalContextProvider } from './context/ModalContext'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import AllProducts from './pages/AllProducts'
import Product from './pages/Product'
import Cart from './pages/Cart'
import CategoryPage from './pages/CategoryPage'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/all-products' element={<AllProducts/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/category/:category' element={<CategoryPage/>} />
          <Route path='/cart' element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
