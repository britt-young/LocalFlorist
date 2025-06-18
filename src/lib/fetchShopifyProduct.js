const DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const query = `
  query getProductByHandle($handle: String!) {
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
      variants(first: 5) {
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
`;

export async function fetchProductByHandle(handle) {
  const res = await fetch(`https://${DOMAIN}/api/2023-04/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({
      query,
      variables: { handle },
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const json = await res.json();
  return json.data.productByHandle;
}
