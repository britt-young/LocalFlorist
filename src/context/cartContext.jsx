// Uses React Context to manage cart state (create,fetch, update) using Shopify Storefront API
import { createContext, useContext, useEffect, useState, useCallback } from "react";

export const CartContext = createContext();

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN;
const SHOPIFY_STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(() => localStorage.getItem("shopify_cart_id"));
  const [cart, setCart] = useState(null);

  // Create new cart
  const createCart = useCallback(async () => {
    const query = `mutation {
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
                    price { amount }
                    product {
                      title
                      featuredImage { url altText }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`;

    try {
      const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({ query }),
      });
      const json = await res.json();
      const newCart = json.data?.cartCreate?.cart;

      if (!newCart) throw new Error("Failed to create cart");

      localStorage.setItem("shopify_cart_id", newCart.id);
      setCartId(newCart.id);
      setCart(newCart);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Fetch cart by ID
  const fetchCart = useCallback(async (id) => {
    const query = `query getCart($id: ID!) {
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
                  price { amount }
                  product {
                    title
                    featuredImage { url altText }
                  }
                }
              }
            }
          }
        }
      }
    }`;

    try {
      const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({ query, variables: { id } }),
      });
      const json = await res.json();
      const fetchedCart = json.data?.cart;

      if (!fetchedCart) throw new Error("Failed to fetch cart");

      setCart(fetchedCart);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Initialize cart on mount or when cartId changes
  useEffect(() => {
    if (!cartId) {
      createCart();
    } else {
      fetchCart(cartId);
    }
  }, [cartId, createCart, fetchCart]);

  // Optimistically update cart state helper
  const updateCartStateOptimistic = (updateFn) => {
    setCart((prevCart) => {
      if (!prevCart) return prevCart;
      return updateFn(prevCart);
    });
  };

  // Update cart item quantity with optimistic UI
  async function updateCartItem(lineId, quantity) {
  const mutation = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
        userErrors {
          field
          message
        }
      }
    }
  `;

  const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({
      query: mutation,
      variables: {
        cartId,
        lines: [{ id: lineId, quantity }],
      },
    }),
  });

  const json = await res.json();

  if (json.data?.cartLinesUpdate?.userErrors?.length > 0) {
    console.error("Shopify errors:", json.data.cartLinesUpdate.userErrors);
  }

  const updatedCart = json.data?.cartLinesUpdate?.cart;

  if (!updatedCart) {
    console.error("Failed to update cart", json.errors || json);
    return;
  }

  setCart(updatedCart);
}



  // Add to cart with optimistic UI update
  const addToCart = useCallback(async (variantId, quantity = 1) => {
  // Find if the variant already exists in the cart
  const existingLine = cart?.lines?.edges.find(
    (edge) => edge.node.merchandise.id === variantId
  );

  if (existingLine) {
    // Instead of adding, update existing quantity
    const newQuantity = existingLine.node.quantity + quantity;
    return updateCartItem(existingLine.node.id, newQuantity);
  }

  // Optimistically add new line
  updateCartStateOptimistic((prevCart) => {
    const edges = [...(prevCart?.lines?.edges || [])];
    edges.push({
      node: {
        id: `temp-${variantId}-${Date.now()}`,
        quantity,
        merchandise: {
          id: variantId,
          title: "",
          price: { amount: 0 },
          product: { title: "", featuredImage: null },
        },
      },
    });

    return {
      ...prevCart,
      lines: {
        ...prevCart.lines,
        edges,
      },
    };
  });

  // Send add-to-cart request
  const mutation = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
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
                    price { amount }
                    product {
                      title
                      featuredImage { url altText }
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

  try {
    const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`, {
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
    });

    const json = await res.json();
    const updatedCart = json.data?.cartLinesAdd?.cart;

    if (!updatedCart) throw new Error("Failed to add to cart");

    setCart(updatedCart);
  } catch (error) {
    console.error(error);
    fetchCart(cartId); // rollback
  }
}, [cart, cartId, fetchCart, updateCartItem]);

  // Remove item with optimistic UI
  const removeCartItem = useCallback(async (lineId) => {
    // Optimistic remove
    updateCartStateOptimistic((prevCart) => {
      const edges = prevCart.lines.edges.filter(edge => edge.node.id !== lineId);
      return {
        ...prevCart,
        lines: { ...prevCart.lines, edges },
      };
    });

    const mutation = `
      mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
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
                      price { amount }
                      product {
                        title
                        featuredImage { url altText }
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

    try {
      const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2023-04/graphql.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
        },
        body: JSON.stringify({
          query: mutation,
          variables: { cartId, lineIds: [lineId] },
        }),
      });
      const json = await res.json();
      const updatedCart = json.data?.cartLinesRemove?.cart;

      if (!updatedCart) throw new Error("Failed to remove cart item");

      setCart(updatedCart);
    } catch (error) {
      console.error(error);
      fetchCart(cartId);
    }
  }, [cartId, fetchCart]);

// --------------------------------------------------------------------------------------------//
  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
