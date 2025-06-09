import Navbar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const RootLayout = () => {
  return (
    <div className="min-h-screen">
        <Navbar />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default RootLayout