import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/homePage/HomePage'
import Footer from './components/Footer'
import { GlobalProvider } from './provider/GlobalProvider'

function App() {

  return (
    <GlobalProvider>
      <div className='container border-t border-b border-[#b1b1b1] '>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>


    </GlobalProvider>


  )
}

export default App
