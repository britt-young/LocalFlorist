// SINGLE PRODUCT DETAILS PAGE
import { useParams } from 'react-router-dom';
import Product from '../Components/Product';

const ProductDetails = () => {
     const { handle } = useParams();
  return (
  <div className="max-w-7xl mx-auto min-h-fit">
      <Product handle={handle} />
    </div>
  );
}

export default ProductDetails