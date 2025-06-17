import { GraphQLClient } from 'graphql-request'

const DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN

export const shopifyClient = new GraphQLClient(
  `https://${DOMAIN}/api/2023-04/graphql.json`,
  {
    headers: {
      'X-Shopify-Storefront-Access-Token': TOKEN,
      'Content-Type': 'application/json',
    }
  }
)
