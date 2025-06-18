import fs from 'fs'
import { GraphQLClient } from 'graphql-request'

const DOMAIN = process.env.VITE_SHOPIFY_DOMAIN
const TOKEN = process.env.VITE_SHOPIFY_STOREFRONT_TOKEN

const client = new GraphQLClient(`https://${DOMAIN}/api/2023-04/graphql.json`, {
  headers: {
    'X-Shopify-Storefront-Access-Token': TOKEN,
    'Content-Type': 'application/json',
  },
})

const query = `
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

async function fetchAndWriteProducts() {
  try {
    const data = await client.request(query)
    const products = data.products.edges.map(edge => edge.node)
    fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2))
    console.log('✅ Product data written to src/data/products.json')
  } catch (err) {
    console.error('❌ Failed to fetch Shopify products:', err)
  }
}

fetchAndWriteProducts()
