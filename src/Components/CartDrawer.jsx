import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import basket from "../assets/icons/basket.png";

const CartDrawer = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  // Open/close toggle function
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Button to open cart */}
      <button
        onClick={toggleDrawer}
        className="fixed lg:top-10 top-12 right-0 z-50 bg-primary text-white px-4 py-2 pr-10"
      >
        <img src={basket} className="inline-block pe-1 cursor-pointer"></img> (
        {cart?.lines.edges.length || 0})
      </button>

      {/* Drawer overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-transparent z-40"
        />
      )}

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-tertiary shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            onClick={toggleDrawer}
            className="self-end mb-4 text-primary hover:font-bold cursor-pointer"
          >
            Close ✕
          </button>

          <h3 className="text-black mb-4">Your basket:</h3>

          {/* Cart lines */}
          <div className="flex-grow overflow-y-auto">
            {!cart || cart.lines.edges.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.lines.edges.map(({ node }) => {
                  const product = node.merchandise.product;
                  const image = product.featuredImage?.url;

                  return (
                    <li
                      key={node.id}
                      className="mb-4 border-b pb-4 flex justify-between items-start gap-4"
                    >
                      <div className="flex-1">
                        <div className="font-semibold">{product.title}</div>
                        {/* <div className="text-sm text-gray-600">
                          Variant: {node.merchandise.title}
                        </div> */}
                        <div className="text-sm">Quantity: {node.quantity}</div>
                        <div className="text-sm font-medium text-primary">
                          ${Number(node.merchandise.price.amount).toFixed(2)}
                        </div>
                      </div>

                      {image && (
                        <img
                          src={image}
                          alt={product.title}
                          className="w-20 max-h-full object-cover shadow"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Checkout link */}
          {cart?.checkoutUrl && (
            <a
              href={cart.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-primary text-white py-2 text-center hover:bg-secondary transition-colors duration-200"
            >
              Checkout
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
