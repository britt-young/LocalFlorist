export const GET_PRODUCT_BY_HANDLE = `
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      images(first: 5) {
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
`
