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

  // Add to cart with optimistic UI update
  const addToCart = useCallback(async (variantId, quantity = 1) => {
    // Optimistic: add or update line locally
    updateCartStateOptimistic((prevCart) => {
      const edges = prevCart.lines.edges.slice();
      const lineIndex = edges.findIndex(edge => edge.node.merchandise.id === variantId);

      if (lineIndex > -1) {
        // Update existing quantity
        const line = edges[lineIndex].node;
        edges[lineIndex] = {
          ...edges[lineIndex],
          node: { ...line, quantity: line.quantity + quantity },
        };
      } else {
        // Add new line placeholder (id is unknown yet, so use a temp id)
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
      }

      return {
        ...prevCart,
        lines: {
          ...prevCart.lines,
          edges,
        },
      };
    });

    // Send request to Shopify
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
      // Optionally rollback optimistic update here by refetching cart
      fetchCart(cartId);
    }
  }, [cartId, fetchCart]);

  // Update cart item quantity with optimistic UI
  const updateCartItem = useCallback(async (lineId, quantity) => {
    // Optimistic update
    updateCartStateOptimistic((prevCart) => {
      const edges = prevCart.lines.edges.map(edge =>
        edge.node.id === lineId ? { ...edge, node: { ...edge.node, quantity } } : edge
      );
      return {
        ...prevCart,
        lines: { ...prevCart.lines, edges },
      };
    });

    const mutation = `
      mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
          variables: { cartId, lines: [{ id: lineId, quantity }] },
        }),
      });
      const json = await res.json();
      const updatedCart = json.data?.cartLinesUpdate?.cart;

      if (!updatedCart) throw new Error("Failed to update cart item");

      setCart(updatedCart);
    } catch (error) {
      console.error(error);
      fetchCart(cartId);
    }
  }, [cartId, fetchCart]);

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

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
