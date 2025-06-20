// USED IN STATIC REGENERATION
// This script fetches products from Shopify and writes them to a JSON file

import { shopifyClient } from './shopifyClient.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const query = `
{
  products(first: 50) {
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

async function writeProductsToFile() {
  try {
    const products = await fetchProducts();
    const filePath = path.resolve('src/data/products.json');

    // Ensure directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write file
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    console.log(`✅ Saved ${products.length} products to ${filePath}`);
  } catch (err) {
    console.error('❌ Failed to fetch/write products:', err.message);
  }
}

writeProductsToFile();
