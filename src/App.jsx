import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Component/NavBar'
import Footer from './Component/Footer'
import HomePage from './Pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='' element={<HomePage />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}
