"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "../style/product.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<string>("idle");

  useEffect(() => {
    const fetchProductsData = async () => {
      setStatus("loading");
      try {
        const products = await fetchProducts();
        setProducts(products);
        setStatus("succeeded");
      } catch (error) {
        console.error("Error fetching products:", error);
        setStatus("failed");
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className={styles.productsWrapper} style={{ minHeight: "500px" }}>
      {status === "loading" ? (
        <div className={styles.loaderContainer}>Loading...</div>
      ) : (
        products.map((product: Product) => (
          <div className={styles.card} key={product.id}>
            <img
              src={product.image}
              className={styles.imgProduct}
              alt={product.title}
              style={{ height: "200px", width: "200px" }}
            />
            <Link href={`/product/${product.id}`} passHref>
              <h4 style={{ color: "black", cursor: "pointer" }}>
                {product.title}
              </h4>
            </Link>
            <h5>₹ {product.price * 80} /-</h5>
            <div className={styles.product}>
              <div className={styles.description}>
                <p>
                  {product.description.length > 100
                    ? `${product.description.slice(0, 100)}...`
                    : product.description}
                </p>
              </div>
            </div>
            {product.description.length > 100 && (
              <button style={{ border: "none" }}>Read More</button>
            )}
            <button className={styles.btn} style={{ marginTop: "50px" }}>
              Add to cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
