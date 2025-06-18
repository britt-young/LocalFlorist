// USED IN STATIC REGENERATION
// This script fetches products from Shopify and writes them to a JSON file
// scripts/fetchProducts.js
import { shopifyClient } from './shopifyClient.js';

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
              title
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
`;

async function fetchProducts() {
  const data = await shopifyClient.request(query);
  return data.products.edges.map(edge => edge.node);
}