import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/homePage/HomePage'
import Footer from './components/Footer'
import { GlobalProvider } from './provider/GlobalProvider'
import AboutPage from './pages/aboutPage/About'

function App() {

  return (
    <GlobalProvider>
      <div className='container border-t border-b border '>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>


    </GlobalProvider>


  )
}

export default App
