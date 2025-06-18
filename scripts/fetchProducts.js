import fs from 'fs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config() // ✅ load .env

const DOMAIN = process.env.VITE_SHOPIFY_DOMAIN
const TOKEN = process.env.VITE_SHOPIFY_STOREFRONT_TOKEN

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
    const res = await fetch(`https://${DOMAIN}/api/2023-04/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': TOKEN
      },
      body: JSON.stringify({ query })
    })

    if (!res.ok) throw new Error(await res.text())

    const json = await res.json()
    const products = json.data.products.edges.map(edge => edge.node)

    fs.mkdirSync('./src/data', { recursive: true })
    fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 2))

    console.log(`✅ Saved ${products.length} products to products.json`)
  } catch (err) {
    console.error('❌ Failed to fetch Shopify products:', err)
  }
}

fetchAndWriteProducts()
