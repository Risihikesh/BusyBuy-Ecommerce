import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import CreateProduct from './components/CreateProduct'
import UpdateProduct from './components/UpdateProduct'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Product/>}/>
        <Route exact path="/create-product" element={<CreateProduct/>}/>
        <Route exact path="/update-product" element={<UpdateProduct/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
    </Routes>

    </>
  )
}

export default App
