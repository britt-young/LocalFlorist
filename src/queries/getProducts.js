// src/queries/getProducts.js
export const GET_PRODUCTS = `
{
  products(first: 10) {
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
