import { useEffect, useState } from 'react'
import { shopifyClient } from '../assets/lib/shopify'
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
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(({ node }) => (
          <Link to={`/products/${node.handle}`} key={node.id}>
            <div className="border p-4 rounded shadow">
              <img src={node.images.edges[0]?.node.url} alt={node.title} />
              <h2 className="text-xl font-bold mt-2">{node.title}</h2>
              <p>${node.variants.edges[0].node.price.amount}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>    
  );
};

export default Shop;
