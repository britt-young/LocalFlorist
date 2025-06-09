import React from 'react'
import Navbar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default RootLayout