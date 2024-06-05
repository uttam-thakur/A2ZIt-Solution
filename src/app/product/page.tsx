// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// import styles from "../style/product.module.css";
// import Navbar from "../component/Navbar";
// import Footer from "../pages/footer";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
//   title: string;
// }

// const fetchProducts = async () => {
//   // "https://hostapi-production-15e5.up.railway.app/api/product/all"
//   try {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };

// const Page: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [status, setStatus] = useState<string>("idle");

//   useEffect(() => {
//     const fetchProductsData = async () => {
//       setStatus("loading");
//       try {
//         const products = await fetchProducts();
//         setProducts(products);
//         setStatus("succeeded");
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setStatus("failed");
//       }
//     };

//     fetchProductsData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className={styles.productsWrapper} style={{ minHeight: "500px" }}>
//         {status === "loading" ? (
//           <div className={styles.loaderContainer}>Loading...</div>
//         ) : (
//           products?.map((product: Product) => (
//             <div className={styles.card} key={product.id}>
//               <img
//                 src={product.image}
//                 className={styles.imgProduct}
//                 alt={product.title}
//                 style={{ height: "200px", width: "200px" }}
//               />
//               <Link href={`/product/${product.id}`} passHref>
//                 <h4
//                   className={styles.h4}
//                   style={{ color: "black", cursor: "pointer" }}
//                 >
//                   {product.title}
//                 </h4>
//               </Link>
//               <h5 className={styles.h5}>₹ {product.price * 80} /-</h5>
//               <div className={styles.product}>
//                 <div className={styles.description}>
//                   <p>
//                     {product.description.length > 100
//                       ? `${product.description.slice(0, 100)}...`
//                       : product.description}
//                   </p>
//                 </div>
//               </div>
//               {product.description.length > 100 && (
//                 <button className={styles.button}>Read More</button>
//               )}
//               <button className={styles.btn} style={{ marginTop: "20px" }}>
//                 Add to cart
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../style/product.module.css";
import Footer from "../pages/footer";
import Navbar from "../component/Navbar";

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
}

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://hostapi-production-15e5.up.railway.app/api/products"
    );
    // "https://hostapi-production-15e5.up.railway.app/api/products"

    return response.data.data;
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
    <>
      <Navbar />
      <div className={styles.productsWrapper} style={{ minHeight: "500px" }}>
        {status === "loading"
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className={styles.card} key={index}>
                <Skeleton height={200} width={200} />
                <Skeleton count={2} style={{ margin: "10px 0" }} />
                <Skeleton height={60} />
                <Skeleton
                  height={40}
                  width="80%"
                  style={{ marginTop: "20px" }}
                />
              </div>
            ))
          : products?.map((product: Product) => (
              <div className={styles.card} key={product.id}>
                <img
                  src={product.image}
                  className={styles.imgProduct}
                  alt={product.title}
                  style={{ height: "200px", width: "200px" }}
                />
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/product/${product.id}`}
                  passHref
                >
                  <h4
                    style={{
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    {product.name}
                  </h4>
                </Link>
                <h5>₹ {product.price} /-</h5>
                <div className={styles.product}>
                  <div className={styles.description}>
                    <p>
                      {product.description.length > 100
                        ? `${product.description.slice(0, 100)}...`
                        : product.description}
                    </p>
                  </div>
                </div>
                {product.description.length > 100 && <button>Read More</button>}
                <button
                  className={styles.btn}
                  style={{ marginTop: "20px", marginLeft: "20px" }}
                >
                  Add to cart
                </button>
              </div>
            ))}
      </div>
      <Footer />
    </>
  );
};

export default Page;
