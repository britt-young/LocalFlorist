//MULTIPLE PRODUCTS PAGE
// USING STATIC REGENERATION This page displays a list of products fetched from a JSON file.

import products from '../data/products.json'; 
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col items-center">
      <h2 className="text-black mb-6">Pick From Our Garden</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => {
          const image = product.images.edges[0]?.node;
          const variant = product.variants.edges[0]?.node;

          return (
            <Link to={`/shop/${product.handle}`} key={product.id} className="transition-transform duration-700 hover:scale-105 ease-in-out shadow-md">
              <img
                src={image?.url}
                alt={image?.altText || product.title}
                className="w-80 object-cover"
              />
              <div className="p-4">
                <h5 className="text-black">{product.title}</h5>
                <p className="text-primary">${variant?.price.amount}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
