import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Collection from './pages/Collection'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[9vw]'>
      <Navbar/>
      <Searchbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        {/* <Route path='*' element={<NotFound />} />	 */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App