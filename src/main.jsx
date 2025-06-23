import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/cartContext.jsx';
import CartDrawer from './Components/CartDrawer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
      <CartDrawer />
    </CartProvider>
  </StrictMode>,
)
