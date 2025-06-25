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
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="lg:w-1/2 mx-5 lg:mx-0">
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
        <div className="my-5 lg:w-1/3 mx-5 lg:mx-0">
          <h2 className="text-black mb-4">{product.title}</h2>
          <h5 className="text-secondary font-semibold mb-3">Size Options:</h5>
          <ul className="mb-6 flex lg:flex-row flex-col gap-2">
            {product.variants.edges.map(({ node }) => (
              <li key={node.id} className="mb-2 border-1 border-secondary py-1 px-2 w-fit hover:bg-secondary hover:text-primary cursor-pointer">
                 {node.title} {/*— ${Number(node.price.amount).toFixed(2)} USD */}
              </li>
            ))}
          </ul>
          <div className="text-primary flex lg:flex-col flex-col-reverse">
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
    </div>
  );
};

export default Product;
