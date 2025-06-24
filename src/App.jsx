import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/homePage/HomePage'
import Footer from './components/Footer'

function App() {

  return (
    <div className='container border-1'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  )
}

export default App
