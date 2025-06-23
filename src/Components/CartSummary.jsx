import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

function CartSummary() {
  const { cart } = useContext(CartContext);

  if (!cart) return null;

  return (
    <div>
      <h4>Cart</h4>
      {cart.lines.edges.map(({ node }) => (
        <div key={node.id}>
          {node.merchandise.product.title} x {node.quantity}
        </div>
      ))}
      <a href={cart.checkoutUrl} target="_blank" rel="noopener noreferrer">
        Checkout
      </a>
    </div>
  );
}
export default CartSummary;
