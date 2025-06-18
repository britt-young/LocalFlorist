//MULTIPLE PRODUCTS PAGE

import { useEffect, useState } from 'react'
import { shopifyClient } from '../lib/shopify'
import { GET_PRODUCTS } from '../queries/getProducts'
import { Link } from 'react-router-dom'

const Shop = () => {
 const [products, setProducts] = useState([])

  useEffect(() => {
    shopifyClient.request(GET_PRODUCTS).then((data) => {
      setProducts(data.products.edges)
    })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-10 max-w-7xl mx-auto">
      <h2 className="text-black mb-2">Graze Our Flower Garden</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {products.map(({ node }) => (
          <Link to={`/shop/${node.handle}`} key={node.id}>
            <div className="p-2 text-start">
              <img className="transition-transform duration-700 hover:scale-102 ease-in-out shadow-md" src={node.images.edges[0]?.node.url} alt={node.title} />
              <h5 className="text-primary mt-2">{node.title}</h5>
              <p className="text-primary">${node.variants.edges[0].node.price.amount}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>    
  );
};

export default Shop;
