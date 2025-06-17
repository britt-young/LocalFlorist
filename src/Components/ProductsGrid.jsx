import { useEffect } from "react";

const ProductsGrid = () => {
    useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    function loadScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      document.head.appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          const client = window.ShopifyBuy.buildClient({
            domain: 'gzjucn-gt.myshopify.com',
            storefrontAccessToken: '96261a5e48993c14a7bed7b98082205c',
          });

          window.ShopifyBuy.UI.onReady(client).then((ui) => {
            ui.createComponent('product', {
              id: '8451449323691',
              node: document.getElementById('product-component-1750172073598'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                product: {
                  styles: {
                    product: {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px"
                      },
                      "text-align": "left"
                    },
                    title: {
                      "font-size": "16px"
                    },
                    button: {
                      "font-family": "Raleway, sans-serif",
                      "font-size": "14px",
                      "padding-top": "15px",
                      "padding-bottom": "15px",
                      ":hover": { "background-color": "#3a3a3e" },
                      "background-color": "#404045",
                      ":focus": { "background-color": "#3a3a3e" },
                      "border-radius": "0px",
                      "padding-left": "8px",
                      "padding-right": "8px"
                    },
                    quantityInput: {
                      "font-size": "14px",
                      "padding-top": "15px",
                      "padding-bottom": "15px"
                    }
                  },
                  buttonDestination: "modal",
                  contents: {
                    button: false,
                    options: false
                  },
                  isButton: true,
                  text: {
                    button: "View product"
                  },
                  googleFonts: ["Raleway"]
                },
                productSet: {
                  styles: {
                    products: {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                modalProduct: {
                  contents: {
                    img: false,
                    imgWithCarousel: true
                  },
                  styles: {
                    product: {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    button: {
                      "font-family": "Raleway, sans-serif",
                      "font-size": "14px",
                      "padding-top": "15px",
                      "padding-bottom": "15px",
                      ":hover": { "background-color": "#3a3a3e" },
                      "background-color": "#404045",
                      ":focus": { "background-color": "#3a3a3e" },
                      "border-radius": "0px",
                      "padding-left": "8px",
                      "padding-right": "8px"
                    },
                    quantityInput: {
                      "font-size": "14px",
                      "padding-top": "15px",
                      "padding-bottom": "15px"
                    },
                    title: {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "bold",
                      "font-size": "26px",
                      "color": "#000000"
                    },
                    price: {
                      "font-size": "16px"
                    },
                    compareAt: {
                      "font-size": "13.6px"
                    },
                    unitPrice: {
                      "font-size": "13.6px"
                    }
                  },
                  googleFonts: ["Raleway"],
                  text: {
                    button: "Add to basket"
                  }
                },
                option: {},
                cart: {
                  styles: {
                    button: {
                      "font-family": "Raleway, sans-serif",
                      "font-size": "14px",
                      "padding-top": "15px",
                      "padding-bottom": "15px",
                      ":hover": { "background-color": "#3a3a3e" },
                      "background-color": "#404045",
                      ":focus": { "background-color": "#3a3a3e" },
                      "border-radius": "0px"
                    },
                    title: { color: "#050505" },
                    header: { color: "#050505" },
                    lineItems: { color: "#050505" },
                    subtotalText: { color: "#050505" },
                    subtotal: { color: "#050505" },
                    notice: { color: "#050505" },
                    currency: { color: "#050505" },
                    close: {
                      color: "#050505",
                      ":hover": { color: "#050505" }
                    },
                    empty: { color: "#050505" },
                    noteDescription: { color: "#050505" },
                    discountText: { color: "#050505" },
                    discountIcon: { fill: "#050505" },
                    discountAmount: { color: "#050505" },
                    cart: { "background-color": "#9f9fab" },
                    footer: { "background-color": "#9f9fab" }
                  },
                  text: {
                    title: "Your Basket",
                    total: "Subtotal",
                    empty: "Your basket is empty",
                    button: "Checkout"
                  },
                  googleFonts: ["Raleway"]
                },
                toggle: {
                  styles: {
                    toggle: {
                      "font-family": "Raleway, sans-serif",
                      "background-color": "#404045",
                      ":hover": { "background-color": "#3a3a3e" },
                      ":focus": { "background-color": "#3a3a3e" }
                    },
                    count: {
                      "font-size": "14px"
                    }
                  },
                  googleFonts: ["Raleway"]
                },
                lineItem: {
                  styles: {
                    variantTitle: { color: "#050505" },
                    title: { color: "#050505" },
                    price: { color: "#050505" },
                    fullPrice: { color: "#050505" },
                    discount: { color: "#050505" },
                    discountIcon: { fill: "#050505" },
                    quantity: { color: "#050505" },
                    quantityIncrement: {
                      color: "#050505",
                      "border-color": "#050505"
                    },
                    quantityDecrement: {
                      color: "#050505",
                      "border-color": "#050505"
                    },
                    quantityInput: {
                      color: "#050505",
                      "border-color": "#050505"
                    }
                  }
                }
              }
            });
          });
        }
      }
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return (
     <div className="my-10 flex justify-center">
      <div id="product-component-1750172073598" />
    </div>
  );
};    

export default ProductsGrid