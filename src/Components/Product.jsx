import { useEffect, useState } from "react";
import { fetchProductByHandle } from "../lib/fetchShopifyProduct";

const Product = ({ handle }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductByHandle(handle)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [handle]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex gap-6">
        <div className="w-1/2">
          {product.images.edges.length ? (
            <img
              src={product.images.edges[0].node.url}
              alt={product.images.edges[0].node.altText || product.title}
              className="rounded shadow"
            />
          ) : (
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded">
              No Image
            </div>
          )}
        </div>
        <div className="w-1/2">
          <p className="mb-6">{product.description}</p>
          <h2 className="text-xl font-semibold mb-2">Variants:</h2>
          <ul>
            {product.variants.edges.map(({ node }) => (
              <li key={node.id} className="mb-2">
                {node.title} — ${node.price.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
