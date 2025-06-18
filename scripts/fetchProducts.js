// USED IN STATIC REGENERATION
// This script fetches products from Shopify and writes them to a JSON file

import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

import dotenv from 'dotenv';
dotenv.config();
const SHOPIFY_DOMAIN = process.env.VITE_SHOPIFY_DOMAIN;
const SHOPIFY_TOKEN = process.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

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
  const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error(`Shopify fetch failed: ${res.status}`);
  const json = await res.json();
  return json.data.products.edges.map(edge => edge.node);
}

async function writeProducts() {
  const data = await fetchProducts();
  const filePath = path.resolve('src/data/products.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✅ Fetched and saved ${data.length} products`);
}

writeProducts();
