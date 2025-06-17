import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopifyClient } from '../assets/lib/shopify'
import { GET_PRODUCT_BY_HANDLE } from '../queries/getProductByHandle'
import { CREATE_CHECKOUT } from '../queries/createCheckout'

const Product = () => {
const { handle } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    shopifyClient.request(GET_PRODUCT_BY_HANDLE, { handle }).then((data) => {
      setProduct(data.productByHandle)
    })
  }, [handle])

  const buyNow = async () => {
    const variantId = product.variants.edges[0].node.id
    const data = await shopifyClient.request(CREATE_CHECKOUT, {
      variantId,
      quantity: 1,
    })
    window.location.href = data.checkoutCreate.checkout.webUrl
  }

  if (!product) return <div>Loading...</div>

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <img src={product.images.edges[0]?.node.url} alt={product.title} className="mb-4" />
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="my-2 text-gray-700">{product.description}</p>
      <p className="text-green-600 font-bold mb-4">
        ${product.variants.edges[0].node.price.amount}
      </p>
      <button onClick={buyNow} className="bg-blue-600 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  )
}

export default Product