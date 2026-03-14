import React from 'react'
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
