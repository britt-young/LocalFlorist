//FOR SHOP PAGE TO DISPLAY ALL PRODUCTS
// This query fetches the first 12 products from the Shopify store, including their ID, title, handle, description, images, and variants with prices.

export const GET_PRODUCTS = `
{
  products(first: 12) {
    edges {
      node {
        id
        title
        handle
        description
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              price {
                amount
              }
            }
          }
        }
      }
    }
  }
}
`
