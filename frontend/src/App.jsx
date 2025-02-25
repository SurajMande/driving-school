import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<LandingPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
