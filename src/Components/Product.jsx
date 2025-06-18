import { useParams } from "react-router-dom";
import products from "../data/products.json";

const Product = () => {
  const { handle } = useParams();
  const product = products.find((p) => p.handle === handle);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="py-20 max-w-6xl mx-auto">
      <h2 className="text-black mb-4">{product.title}</h2>
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
              No Image Available
            </div>
          )}
        </div>
        <div className="my-5 w-1/3">
          <p className="text-primary mb-6">{product.description}</p>
          <h5 className="text-secondary">Size Options:</h5>
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
