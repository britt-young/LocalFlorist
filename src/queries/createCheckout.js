export const CREATE_CHECKOUT = `
mutation checkoutCreate($variantId: ID!, $quantity: Int!) {
  checkoutCreate(input: {
    lineItems: [{ variantId: $variantId, quantity: $quantity }]
  }) {
    checkout {
      webUrl
    }
  }
}
`
