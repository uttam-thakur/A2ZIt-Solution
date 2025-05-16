"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import axios from "axios";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import styles from "../style/product.module.css";
import { ToastContainer, toast } from "react-toastify";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  quantity?: number;
}

// Fake data as fallback
const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 45000,
    description:
      "High-performance laptop with Intel Core i5, 8GB RAM, and 512GB SSD.",
    category: "Laptops",
    image: "/laptop.jpg",
    rating: { rate: 4.8, count: 150 },
    title: "Laptop",
  },
  {
    id: 2,
    name: "Gaming Laptop",
    price: 75000,
    description:
      "Powerful gaming laptop with RTX graphics, 16GB RAM, and 1TB SSD.",
    category: "Laptops",
    image: "/laptop.jpg",
    rating: { rate: 4.9, count: 120 },
    title: "Gaming Laptop",
  },
  {
    id: 3,
    name: "Desktop PC",
    price: 40000,
    description:
      "Assembled desktop PC with i7 processor, 16GB RAM, and 1TB HDD.",
    category: "Desktops",
    image: "/laptop.jpg",
    rating: { rate: 4.7, count: 80 },
    title: "Desktop PC",
  },
  {
    id: 4,
    name: "Printer",
    price: 15000,
    description:
      "All-in-one wireless printer with scanning and copying functions.",
    category: "Printers",
    image: "/laptop.jpg",
    rating: { rate: 4.6, count: 90 },
    title: "Printer",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 1200,
    description:
      "Ergonomic wireless mouse with high precision and long battery life.",
    category: "Accessories",
    image: "/laptop.jpg",
    rating: { rate: 4.7, count: 140 },
    title: "Wireless Mouse",
  },
  {
    id: 6,
    name: "External Hard Disk",
    price: 6000,
    description: "2TB external hard drive for secure data storage and backups.",
    category: "Storage",
    image: "/laptop.jpg",
    rating: { rate: 4.8, count: 110 },
    title: "External Hard Disk",
  },
  {
    id: 7,
    name: "SSD (Solid State Drive)",
    price: 4500,
    description: "512GB SSD for faster performance and system boot speeds.",
    category: "Storage",
    image: "/laptop.jpg",
    rating: { rate: 4.9, count: 95 },
    title: "SSD (Solid State Drive)",
  },
  {
    id: 8,
    name: "Laptop Cooling Fan",
    price: 2000,
    description:
      "Portable laptop cooling fan with multiple speed modes and silent operation.",
    category: "Accessories",
    image: "/laptop.jpg",
    rating: { rate: 4.5, count: 85 },
    title: "Laptop Cooling Fan",
  },
  {
    id: 9,
    name: "Pendrive (32GB)",
    price: 800,
    description: "USB 3.0 32GB pen drive with high-speed data transfer.",
    category: "Storage",
    image: "/laptop.jpg",
    rating: { rate: 4.7, count: 150 },
    title: "Pendrive (32GB)",
  },
  {
    id: 10,
    name: "HDMI Cable",
    price: 500,
    description: "High-speed HDMI cable for 4K display output.",
    category: "Cables",
    image: "/laptop.jpg",
    rating: { rate: 4.6, count: 100 },
    title: "HDMI Cable",
  },
  {
    id: 11,
    name: "USB Type-C Cable",
    price: 400,
    description: "Fast-charging USB Type-C cable with durable braided design.",
    category: "Cables",
    image: "/laptop.jpg",
    rating: { rate: 4.5, count: 80 },
    title: "USB Type-C Cable",
  },
  {
    id: 12,
    name: "Laptop Stand",
    price: 1800,
    description:
      "Adjustable aluminum laptop stand for comfortable working posture.",
    category: "Accessories",
    image: "/laptop.jpg",
    rating: { rate: 4.8, count: 90 },
    title: "Laptop Stand",
  },
];

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://hostapi-production-15e5.up.railway.app/api/products"
    );
    return response.data?.data.length > 0
      ? response.data.data
      : fallbackProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return fallbackProducts;
  }
};

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleAddToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex(
      (item: Product) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const updateQuantity = (productId: number, change: number) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const productIndex = cart.findIndex(
      (item: Product) => item.id === productId
    );

    if (productIndex !== -1) {
      cart[productIndex].quantity += change;

      if (cart[productIndex].quantity <= 0) {
        const removedItem = cart.splice(productIndex, 1);
        toast.error(`${removedItem[0].name} removed from cart ❌`, {
          position: "top-right",
          autoClose: 2000,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
    }
  };

  return (
    <>
      <div className={styles.productsWrapper}>
        {products.map((product: Product) => (
          <div className={styles.card} key={product.id}>
            <Image
              height={200}
              width={200}
              src={product.image || "/images/Rental/1.webp"}
              className={styles.imgProduct}
              alt={product.title}
            />
            <Link
              href={`/product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <h4 className={styles.productTitle}>
                {product.name || "hard disk"}
              </h4>
            </Link>
            <h5 className={styles.productPrice}>
              ₹{" "}
              {`${product.price.toString()[0]}***${product.price
                .toString()
                .slice(-1)}`}{" "}
              /-
            </h5>

            <div className={styles.description}>
              <p>
                {product.description.length > 100
                  ? `${product.description.slice(0, 100)}...`
                  : product.description}
              </p>
            </div>

            <div className={styles.buttonContainer}>
              {cartItems.find((item) => item.id === product.id) ? (
                <div className={styles.qtyButtonGroup}>
                  <button onClick={() => updateQuantity(product.id, -1)}>
                    -
                  </button>
                  <span>
                    {cartItems.find((item) => item.id === product.id)
                      ?.quantity || 0}
                  </span>
                  <button onClick={() => updateQuantity(product.id, 1)}>
                    +
                  </button>
                </div>
              ) : (
                <button
                  className={styles.addToCartBtn}
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;
