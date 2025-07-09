import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Error from './Components/Error'
import Shipping from './pages/Shipping'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home/>} />
      <Route path ='about' element={<About />} />
      <Route path ='shop' element={<Shop />} />
      <Route path ='shop/:handle' element={<ProductDetails />} />
      <Route path ='faqs' element={<FAQs />} />
      <Route path ='contact' element={<Contact />} />
      <Route path='shipping' element={<Shipping />} />
      <Route path='terms' element={<Terms />} />
      <Route path='privacy' element={<Privacy />} />

      {/* Can add nested routes too */}
      <Route path ='*' element={<Error />} />
    </Route>
    
  )
)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
