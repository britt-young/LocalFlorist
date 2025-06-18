import { CREATE_CHECKOUT } from '../queries/createCheckout'

async function addToCart(variantId) {
  const data = await shopifyClient.request(CREATE_CHECKOUT, {
    variantId,
    quantity: 1,
  })

  const checkoutUrl = data.checkoutCreate.checkout.webUrl
  window.location.href = checkoutUrl
}
