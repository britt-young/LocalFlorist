import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Error from './Components/Error'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Page1 />} />
      <Route path ='page2' element={<Page2 />} />
      <Route path ='page3' element={<Page3 />} />
      <Route path ='page4' element={<Page4 />} />
      <Route path ='page5' element={<Page5 />} />
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
