import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import basket from "../assets/icons/basket.png";

const CartDrawer = () => {
  const { cart, updateCartItem, removeCartItem } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Cart toggle button */}
      <button
        onClick={toggleDrawer}
        className="fixed lg:top-10 top-12 right-0 z-50 bg-primary text-white px-4 py-2 pr-10 cursor-pointer"
      >
        <img src={basket} className="inline-block pe-1" />
        ({cart?.lines?.edges?.length || 0})
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleDrawer}
          className="fixed inset-0 bg-black/10 z-40"
        />
      )}

      {/* Drawer */}
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

          <div className="flex-grow overflow-y-auto ">
            {!cart || cart.lines.edges.length === 0 ? (
              <p className="text-black">There are no items in your basket</p>
            ) : (
              <ul>
                {cart.lines.edges.map(({ node: line }) => {
                  const product = line.merchandise.product;
                  const variant = line.merchandise;
                  const image = product.featuredImage?.url;

                  return (
                    <li
                      key={line.id}
                      className="mb-4 border-b pb-4 flex justify-between items-start gap-4"
                    >
                      <div className="flex-1">
                        <div className="font-semibold">{product.title}</div>
                        {/* <div className="text-sm text-gray-600">
                          Variant: {variant.title}
                        </div> */}
                        <div className="text-sm font-medium text-primary mt-1 ">
                          ${Number(variant.price.amount).toFixed(2)}
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 mt-2 cursor-pointer">Quantity:
                          <div className="bg-gray-200 flex items-center gap-1">
                          <button
                            onClick={() => updateCartItem(line.id, line.quantity - 1)}
                            disabled={line.quantity <= 1}
                            className="px-2 py-1 cursor-pointer"
                          >
                            −
                          </button>
                          <span className="border-x-1 px-2 border-gray-300">{line.quantity}</span>
                          <button
                            onClick={() => updateCartItem(line.id, line.quantity + 1)}
                            className="px-2 py-1 cursor-pointer"
                          >
                            +
                          </button>
                          </div>
                        </div>

                        <button
                          onClick={() => removeCartItem(line.id)}
                          className="text-sm text-red-500 mt-2 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>

                      {image && (
                        <img
                          src={image}
                          alt={product.title}
                          className="w-20 h-20 object-cover rounded shadow"
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
