// SINGLE PRODUCT DETAILS PAGE
import { useParams } from 'react-router-dom';
import Product from '../Components/Product';

const ProductDetails = () => {
     const { handle } = useParams();
  return (
  <div>
      <Product handle={handle} />
    </div>
  );
}

export default ProductDetails