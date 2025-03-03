import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import CoursesPage from './pages/Courses';
import LoginPage from './components/Login';
import LicenseList from './pages/Licenses';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CoursesPage/> } />
        <Route path="/login" element={<LoginPage/> } />
        <Route path="/licences" element={<LicenseList/> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
