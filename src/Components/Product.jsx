import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { useContext } from 'react';
import { CartContext } from '../context/cartContext.jsx';

const Product = () => {
  const { handle } = useParams();
  const product = products.find((p) => p.handle === handle);

  if (!product) return <p>Product not found</p>;

  const { addToCart } = useContext(CartContext);
  const variant = product.variants.edges[0]?.node;

  return (
    <div className="py-20 max-w-6xl mx-auto">
      <div className="flex gap-6">
        <div className="w-1/2">
          {product.images.edges.length ? (
            <img
              src={product.images.edges[0].node.url}
              alt={product.images.edges[0].node.altText || product.title}
              className="shadow-md"
            />
          ) : (
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded">
              No Image Available
            </div>
          )}
        </div>
        <div className="my-5 w-1/3">
          <h2 className="text-black mb-4">{product.title}</h2>
          <h5 className="text-secondary font-semibold">Size Options:</h5>
          <ul>
            {product.variants.edges.map(({ node }) => (
              <li key={node.id} className="mb-2">
                {node.title} — ${Number(node.price.amount).toFixed(2)} USD
              </li>
            ))}
          </ul>
          <button
            className="py-2 w-full border-2 border-primary bg-primary px-4 text-sm font-medium leading-normal text-tertiary hover:bg-tertiary hover:text-primary cursor-pointer mb-4"
            onClick={() => addToCart(variant.id, 1)}
          >
            Add to Cart
          </button>
          <p className="text-primary mb-6">{product.description}</p>

          

          
        </div>
      </div>
    </div>
  );
};

export default Product;
