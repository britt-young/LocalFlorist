//MULTIPLE PRODUCTS PAGE
// USING STATIC REGENERATION This page displays a list of products fetched from a JSON file.

import products from '../data/products.json'; 
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Our Flowers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const image = product.images.edges[0]?.node;
          const variant = product.variants.edges[0]?.node;

          return (
            <Link to={`/shop/${product.handle}`} key={product.id} className="block bg-white rounded shadow hover:shadow-md transition">
              <img
                src={image?.url}
                alt={image?.altText || product.title}
                className="w-full h-60 object-cover rounded-t"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">${variant?.price.amount}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
