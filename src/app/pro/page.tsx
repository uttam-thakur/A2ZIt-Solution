"use client";

import React from "react";
import {
  ShoppingCart,
  Search,
  X,
  Plus,
  Minus,
  Trash2,
  Eye,
  Star,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import {contactOnWhatsapp} from "../common/helper";
import { whatsappNumber } from "../common/constant";
import styles from "./products.module.css";

type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  specifications: string[];
  warranty: string;
  stock: number;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "HP Business Laptop 15",
    category: "Laptops",
    brand: "HP",
    price: 45999,
    mrp: 52999,
    rating: 4.7,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description:
      "Powerful and reliable laptop designed for business, office work and everyday productivity.",
    specifications: [
      "Intel Core i5 Processor",
      "16GB RAM",
      "512GB SSD",
      "15.6-inch Full HD Display",
      "Windows 11",
    ],
    warranty: "1 Year Warranty",
    stock: 8,
  },

  {
    id: 2,
    name: "Dell Inspiron Laptop",
    category: "Laptops",
    brand: "Dell",
    price: 52999,
    mrp: 59999,
    rating: 4.8,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    description:
      "Modern Dell laptop with excellent performance for office, education and professional use.",
    specifications: [
      "Intel Core i5",
      "16GB DDR4 RAM",
      "512GB NVMe SSD",
      "15.6-inch Display",
      "Windows 11",
    ],
    warranty: "1 Year Warranty",
    stock: 5,
  },

  {
    id: 3,
    name: "Logitech Wireless Keyboard",
    category: "Accessories",
    brand: "Logitech",
    price: 1299,
    mrp: 1799,
    rating: 4.6,
    reviews: 215,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description:
      "Comfortable wireless keyboard with reliable connectivity and long battery life.",
    specifications: [
      "Wireless Connectivity",
      "2.4GHz Connection",
      "Long Battery Life",
      "Full Size Keyboard",
      "Windows Compatible",
    ],
    warranty: "1 Year Warranty",
    stock: 25,
  },

  {
    id: 4,
    name: "Wireless Optical Mouse",
    category: "Accessories",
    brand: "Logitech",
    price: 799,
    mrp: 1099,
    rating: 4.5,
    reviews: 187,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description:
      "Ergonomic wireless mouse designed for smooth and comfortable everyday usage.",
    specifications: [
      "Wireless",
      "Optical Tracking",
      "1000 DPI",
      "Ergonomic Design",
      "USB Receiver",
    ],
    warranty: "1 Year Warranty",
    stock: 40,
  },

  {
    id: 5,
    name: "24-inch Full HD Monitor",
    category: "Monitors",
    brand: "Acer",
    price: 8999,
    mrp: 10999,
    rating: 4.6,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    description:
      "Full HD monitor with vibrant colors and an elegant design for work and entertainment.",
    specifications: [
      "24-inch Full HD",
      "1920 × 1080 Resolution",
      "75Hz Refresh Rate",
      "HDMI + VGA",
      "Eye Care Technology",
    ],
    warranty: "3 Years Warranty",
    stock: 12,
  },

  {
    id: 6,
    name: "Canon Multifunction Printer",
    category: "Printers",
    brand: "Canon",
    price: 12499,
    mrp: 14999,
    rating: 4.7,
    reviews: 63,
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",
    description:
      "Compact multifunction printer for printing, scanning and copying at home or office.",
    specifications: [
      "Print / Scan / Copy",
      "USB Connectivity",
      "High Quality Printing",
      "Compact Design",
      "Energy Efficient",
    ],
    warranty: "1 Year Warranty",
    stock: 7,
  },
];

/* =========================
   COMPONENT
========================= */

export default function ProductsPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const [cart, setCart] = React.useState<CartItem[]>([]);

  const [selectedProduct, setSelectedProduct] =
    React.useState<Product | null>(null);

  const [cartOpen, setCartOpen] = React.useState(false);

  const [toast, setToast] = React.useState("");

  /* =========================
     CATEGORIES
  ========================= */

  const categories = [
    "All",
    ...Array.from(
      new Set(products.map((product) => product.category))
    ),
  ];

  // 
  // whatsapp
  // 
const handleCheckout = () => {
  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  let message = `🛒 *NEW PRODUCT ENQUIRY*

Hello A2Z IT SOLUTION,

I am interested in purchasing the following products:

━━━━━━━━━━━━━━━━━━
📦 *ORDER DETAILS*
━━━━━━━━━━━━━━━━━━

`;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;

    message += `*${index + 1}. ${item.name}*
Brand: ${item.brand}
Quantity: ${item.quantity}
Price: ₹${item.price.toLocaleString("en-IN")}
Item Total: ₹${itemTotal.toLocaleString("en-IN")}

`;
  });

  message += `━━━━━━━━━━━━━━━━━━
💰 *PRICE SUMMARY*
━━━━━━━━━━━━━━━━━━

Subtotal: ₹${cartTotal.toLocaleString("en-IN")}
Discount: ₹${totalDiscount.toLocaleString("en-IN")}
*Total Amount: ₹${cartTotal.toLocaleString("en-IN")}*

━━━━━━━━━━━━━━━━━━

Please confirm product availability and share the final quotation.

Thank you,
*A2Z IT SOLUTION*`;
  
  contactOnWhatsapp(
    whatsappNumber,
    message
  );
};
  /* =========================
     FILTER PRODUCTS
  ========================= */

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  /* =========================
     TOAST
  ========================= */

  const showToast = (message: string) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  /* =========================
     ADD TO CART
  ========================= */

  const addToCart = (product: Product) => {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previous,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    showToast(`${product.name} added to cart`);
  };

  /* =========================
     REMOVE FROM CART
  ========================= */

  const removeFromCart = (id: number) => {
    const item = cart.find(
      (product) => product.id === id
    );

    setCart((previous) =>
      previous.filter(
        (product) => product.id !== id
      )
    );

    if (item) {
      showToast(`${item.name} removed from cart`);
    }
  };

  /* =========================
     UPDATE QUANTITY
  ========================= */

  const updateQuantity = (
    id: number,
    amount: number
  ) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* =========================
     CART COUNT
  ========================= */

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  /* =========================
     CART TOTAL
  ========================= */

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  /* =========================
     DISCOUNT
  ========================= */

  const totalDiscount = cart.reduce(
    (total, item) =>
      total +
      (item.mrp - item.price) *
        item.quantity,
    0
  );

  return (
    <main className={styles.page}>
      {/* =========================
          HEADER
      ========================= */}

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div>
            <span className={styles.smallTitle}>
              A2Z IT SOLUTION
            </span>

            <h1>
              IT Products &
              <br />
              <span>Accessories</span>
            </h1>

            <p>
              Quality computers, laptops,
              accessories and IT products
              for your business and everyday
              needs.
            </p>
          </div>

          <div className={styles.heroShape}>
            <ShoppingCart size={100} />
          </div>
        </div>
      </section>

      {/* =========================
          TOOLBAR
      ========================= */}

      <section className={styles.productsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionLabel}>
              OUR PRODUCTS
            </span>

            <h2>
              Explore Our Collection
            </h2>
          </div>

          <button
            className={styles.cartButton}
            onClick={() =>
              setCartOpen(true)
            }
          >
            <ShoppingCart size={20} />

            <span>
              Cart
            </span>

            {cartCount > 0 && (
              <b>
                {cartCount}
              </b>
            )}
          </button>
        </div>

        {/* SEARCH */}

        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <Search size={20} />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                onClick={() =>
                  setSearch("")
                }
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* CATEGORIES */}

          <div className={styles.categories}>
            {categories.map(
              (item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? styles.activeCategory
                      : ""
                  }
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>

        {/* =========================
            PRODUCT GRID
        ========================= */}

        {filteredProducts.length > 0 ? (
          <div
            className={
              styles.productGrid
            }
          >
            {filteredProducts.map(
              (product) => {
                const discount = Math.round(
                  ((product.mrp -
                    product.price) /
                    product.mrp) *
                    100
                );

                return (
                  <article
                    className={
                      styles.productCard
                    }
                    key={product.id}
                  >
                    {/* IMAGE */}

                    <div
                      className={
                        styles.imageContainer
                      }
                    >
                      <span
                        className={
                          styles.discount
                        }
                      >
                        {discount}% OFF
                      </span>

                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                      />

                      <button
                        className={
                          styles.quickView
                        }
                        onClick={() =>
                          setSelectedProduct(
                            product
                          )
                        }
                      >
                        <Eye size={17} />
                        Quick View
                      </button>
                    </div>

                    {/* DETAILS */}

                    <div
                      className={
                        styles.productInfo
                      }
                    >
                      <span
                        className={
                          styles.brand
                        }
                      >
                        {product.brand}
                      </span>

                      <h3>
                        {product.name}
                      </h3>

                      <div
                        className={
                          styles.rating
                        }
                      >
                        <Star
                          size={15}
                          fill="currentColor"
                        />

                        <span>
                          {product.rating}
                        </span>

                        <small>
                          (
                          {
                            product.reviews
                          }{" "}
                          reviews)
                        </small>
                      </div>

                      <p
                        className={
                          styles.description
                        }
                      >
                        {
                          product.description
                        }
                      </p>

                      <div
                        className={
                          styles.priceRow
                        }
                      >
                        <div>
                          <strong>
                            ₹
                            {product.price.toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                          <del>
                            ₹
                            {product.mrp.toLocaleString(
                              "en-IN"
                            )}
                          </del>
                        </div>

                        <span
                          className={
                            styles.stock
                          }
                        >
                          {product.stock >
                          0
                            ? "In Stock"
                            : "Out of Stock"}
                        </span>
                      </div>

                      <button
                        className={
                          styles.addButton
                        }
                        disabled={
                          product.stock ===
                          0
                        }
                        onClick={() =>
                          addToCart(
                            product
                          )
                        }
                      >
                        <ShoppingCart
                          size={18}
                        />

                        Add to Cart
                      </button>
                    </div>
                  </article>
                );
              }
            )}
          </div>
        ) : (
          <div
            className={
              styles.noProducts
            }
          >
            <Search size={45} />

            <h3>
              No products found
            </h3>

            <p>
              Try searching for another
              product or category.
            </p>
          </div>
        )}
      </section>

      {/* =========================
          PRODUCT MODAL
      ========================= */}

      {selectedProduct && (
        <div
          className={
            styles.modalOverlay
          }
          onClick={() =>
            setSelectedProduct(null)
          }
        >
          <div
            className={
              styles.productModal
            }
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              className={
                styles.closeButton
              }
              onClick={() =>
                setSelectedProduct(
                  null
                )
              }
            >
              <X />
            </button>

            <div
              className={
                styles.modalImage
              }
            >
              <img
                src={
                  selectedProduct.image
                }
                alt={
                  selectedProduct.name
                }
              />
            </div>

            <div
              className={
                styles.modalDetails
              }
            >
              <span
                className={
                  styles.brand
                }
              >
                {
                  selectedProduct.brand
                }
              </span>

              <h2>
                {
                  selectedProduct.name
                }
              </h2>

              <div
                className={
                  styles.rating
                }
              >
                <Star
                  size={17}
                  fill="currentColor"
                />

                {selectedProduct.rating}

                <small>
                  (
                  {
                    selectedProduct.reviews
                  }{" "}
                  reviews)
                </small>
              </div>

              <div
                className={
                  styles.modalPrice
                }
              >
                <strong>
                  ₹
                  {selectedProduct.price.toLocaleString(
                    "en-IN"
                  )}
                </strong>

                <del>
                  ₹
                  {selectedProduct.mrp.toLocaleString(
                    "en-IN"
                  )}
                </del>
              </div>

              <p>
                {
                  selectedProduct.description
                }
              </p>

              <h4>
                Specifications
              </h4>

              <ul>
                {selectedProduct.specifications.map(
                  (spec) => (
                    <li key={spec}>
                      {spec}
                    </li>
                  )
                )}
              </ul>

              <div
                className={
                  styles.warranty
                }
              >
                ✓{" "}
                {
                  selectedProduct.warranty
                }
              </div>

              <button
                className={
                  styles.addButton
                }
                onClick={() => {
                  addToCart(
                    selectedProduct
                  );

                  setSelectedProduct(
                    null
                  );
                }}
              >
                <ShoppingCart
                  size={19}
                />

                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          CART DRAWER
      ========================= */}

      {cartOpen && (
        <div
          className={
            styles.cartOverlay
          }
          onClick={() =>
            setCartOpen(false)
          }
        >
          <aside
            className={
              styles.cartDrawer
            }
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div
              className={
                styles.cartHeader
              }
            >
              <div>
                <span>
                  YOUR CART
                </span>

                <h2>
                  Shopping Cart
                </h2>
              </div>

              <button
                onClick={() =>
                  setCartOpen(false)
                }
              >
                <X />
              </button>
            </div>

            {cart.length === 0 ? (
              <div
                className={
                  styles.emptyCart
                }
              >
                <ShoppingCart
                  size={55}
                />

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Add some products to
                  your cart.
                </p>
              </div>
            ) : (
              <>
                <div
                  className={
                    styles.cartItems
                  }
                >
                  {cart.map(
                    (item) => (
                      <div
                        className={
                          styles.cartItem
                        }
                        key={item.id}
                      >
                        <img
                          src={
                            item.image
                          }
                          alt={
                            item.name
                          }
                        />

                        <div
                          className={
                            styles.cartItemDetails
                          }
                        >
                          <h4>
                            {item.name}
                          </h4>

                          <strong>
                            ₹
                            {item.price.toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                          <div
                            className={
                              styles.quantity
                            }
                          >
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  -1
                                )
                              }
                            >
                              <Minus
                                size={14}
                              />
                            </button>

                            <span>
                              {
                                item.quantity
                              }
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  1
                                )
                              }
                            >
                              <Plus
                                size={14}
                              />
                            </button>
                          </div>
                        </div>

                        <button
                          className={
                            styles.removeItem
                          }
                          onClick={() =>
                            removeFromCart(
                              item.id
                            )
                          }
                        >
                          <Trash2
                            size={17}
                          />
                        </button>
                      </div>
                    )
                  )}
                </div>

                <div
                  className={
                    styles.cartSummary
                  }
                >
                  <div>
                    <span>
                      Subtotal
                    </span>

                    <strong>
                      ₹
                      {cartTotal.toLocaleString(
                        "en-IN"
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      You Save
                    </span>

                    <strong
                      className={
                        styles.saved
                      }
                    >
                      ₹
                      {totalDiscount.toLocaleString(
                        "en-IN"
                      )}
                    </strong>
                  </div>

                  <div
                    className={
                      styles.total
                    }
                  >
                    <span>
                      Total
                    </span>

                    <strong>
                      ₹
                      {cartTotal.toLocaleString(
                        "en-IN"
                      )}
                    </strong>
                  </div>

                  <button
  className={styles.checkoutButton}
  onClick={handleCheckout}
>
  <span className={styles.whatsappIcon}>
    <MessageCircle size={19} />
  </span>

  Proceed to Checkout

  <ChevronRight size={19} />
</button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* =========================
          TOAST
      ========================= */}

      {toast && (
        <div
          className={
            styles.toast
          }
        >
          <span>✓</span>

          {toast}
        </div>
      )}
    </main>
  );
}