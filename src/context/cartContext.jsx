// Uses React Context to manage cart state (create,fetch, update) using Shopify Storefront API
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(() =>
    localStorage.getItem("shopify_cart_id")
  );
  const [cart, setCart] = useState(null);

  useEffect(() => {
    if (!cartId) {
      createCart();
    } else {
      fetchCart(cartId);
    }
  }, [cartId]);

  async function createCart() {
    const query = `
  mutation {
    cartCreate {
      cart {
        id
        checkoutUrl
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                  }
                  product {
                    title
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;


    const res = await fetch(
      `https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({ query }),
      }
    );

    const json = await res.json();
    const newCart = json.data?.cartCreate?.cart;

    if (!newCart) {
      console.error("Failed to create cart", json.errors || json);
      return;
    }

    localStorage.setItem("shopify_cart_id", newCart.id);
    setCartId(newCart.id);
    setCart(newCart);
  }

  async function fetchCart(id) {
    const query = `
  query getCart($id: ID!) {
    cart(id: $id) {
      id
      checkoutUrl
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                price {
                  amount
                }
                product {
                  title
                  featuredImage {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;


    const res = await fetch(
      `https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query,
          variables: { id },
        }),
      }
    );

    const json = await res.json();
    const fetchedCart = json.data?.cart;

    if (!fetchedCart) {
      console.error("Failed to fetch cart", json.errors || json);
      return;
    }

    setCart(fetchedCart);
  }

  async function addToCart(variantId, quantity = 1) {
    const mutation = `
      mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
            lines(first: 50) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      title
                      price { amount }
                      product { title }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch(
      `https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query: mutation,
          variables: {
            cartId,
            lines: [{ quantity, merchandiseId: variantId }],
          },
        }),
      }
    );

    const json = await res.json();
    const updatedCart = json.data?.cartLinesAdd?.cart;

    if (!updatedCart) {
      console.error("Failed to add to cart", json.errors || json);
      return;
    }

    setCart(updatedCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Export custom hook
export const useCart = () => useContext(CartContext);
