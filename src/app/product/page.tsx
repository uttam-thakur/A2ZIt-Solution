"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../style/product.module.css";
import Footer from "../pages/footer";
import Navbar from "../component/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import Material-UI cart icon

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

// Fake data as fallback
const fallbackProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1200,
    description: "High-quality wireless headphones with noise cancellation.",
    category: "Electronics",
    image: "/images/Rental/1.webp",
    rating: { rate: 4.5, count: 100 },
    title: "Wireless Headphones",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
    description:
      "Latest model smartphone with an AMOLED display and 128GB and 128GB and 128GB and 128GB and 128GB and 128GB and 128GB storage.",
    category: "Electronics",
    image: "/images/sample2.jpg",
    rating: { rate: 4.7, count: 200 },
    title: "Smartphone",
  },
  {
    id: 3,
    name: "Laptop",
    price: 60000,
    description: "Powerful laptop with 16GB RAM and 512GB SSD.",
    category: "Electronics",
    image: "/images/sample3.jpg",
    rating: { rate: 4.6, count: 150 },
    title: "Laptop",
  },
];
// const fetchProducts = async () => {
//   try {
//     const response = await axios.get(
//       "https://hostapi-production-15e5.up.railway.app/api/products"
//     );
//     return response.data.data;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error;
//   }
// };

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://hostapi-production-15e5.up.railway.app/api/products"
    );
    return response.data?.data.length > 0
      ? response.data.data
      : fallbackProducts; // Use fallback if no data
  } catch (error) {
    console.error("Error fetching products:", error);
    return fallbackProducts; // Return fallback on API failure
  }
};
const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<string>("idle");
  const [cartAnimation, setCartAnimation] = useState<Record<number, boolean>>(
    {}
  );
  const [showText, setShowText] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const fetchProductsData = async () => {
      setStatus("loading");
      try {
        const products = await fetchProducts();
        setProducts(products);
        setStatus("succeeded");
        setShowText(
          products.reduce(
            (acc: any, product: { id: any }) => ({
              ...acc,
              [product.id]: true,
            }),
            {}
          )
        );
      } catch (error) {
        console.error("Error fetching products:", error);
        setStatus("failed");
      }
    };

    fetchProductsData();
  }, []);

  const handleAddToCart = (productId: number) => {
    setCartAnimation({ ...cartAnimation, [productId]: true });
    setShowText({ ...showText, [productId]: false });

    setTimeout(() => {
      setCartAnimation({ ...cartAnimation, [productId]: false });
      setShowText({ ...showText, [productId]: true });
    }, 3000); // Reset animation and show text after 3 seconds
  };

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
                <Image
                  height={200}
                  width={200}
                  src={product.image || "/images/Rental/1.webp"}
                  className={styles.imgProduct}
                  alt={product.title}
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
                    {product.name || "hard disk"}
                  </h4>
                </Link>
                <h5>₹ {product.price || "450"} /-</h5>
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
                <motion.button
                  className={styles.btn}
                  style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    width: "150px",
                    height: "50px",
                    overflow: "hidden",
                  }}
                  onClick={() => handleAddToCart(product.id)}
                >
                  <AnimatePresence>
                    {cartAnimation[product.id] && (
                      <motion.div
                        initial={{ top: -40, opacity: 0 }}
                        animate={{ top: 0, opacity: 1 }}
                        exit={{ top: 40, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                          position: "absolute",
                          width: "30px",
                          height: "30px",
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={
                      cartAnimation[product.id] ? { x: "50%" } : { x: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <ShoppingCartIcon />
                    <AnimatePresence>
                      {showText[product.id] && (
                        <motion.span
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          style={{ marginLeft: "10px" }}
                        >
                          Add to Cart
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.button>
              </div>
            ))}
      </div>
      <Footer />
    </>
  );
};

export default Page;

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import styles from "../style/product.module.css";
// import Footer from "../pages/footer";
// import Navbar from "../component/Navbar";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

// // Fake data as fallback
// const fallbackProducts: Product[] = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 1200,
//     description: "High-quality wireless headphones with noise cancellation.",
//     category: "Electronics",
//     image: "/images/Rental/1.webp",
//     rating: { rate: 4.5, count: 100 },
//     title: "Wireless Headphones",
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 25000,
//     description:
//       "Latest model smartphone with an AMOLED display and 128GB and 128GB and 128GB and 128GB and 128GB and 128GB and 128GB storage.",
//     category: "Electronics",
//     image: "/images/sample2.jpg",
//     rating: { rate: 4.7, count: 200 },
//     title: "Smartphone",
//   },
//   {
//     id: 3,
//     name: "Laptop",
//     price: 60000,
//     description: "Powerful laptop with 16GB RAM and 512GB SSD.",
//     category: "Electronics",
//     image: "/images/sample3.jpg",
//     rating: { rate: 4.6, count: 150 },
//     title: "Laptop",
//   },
// ];

// const fetchProducts = async () => {
//   try {
//     const response = await axios.get(
//       "https://hostapi-production-15e5.up.railway.app/api/products"
//     );
//     return response.data?.data.length > 0
//       ? response.data.data
//       : fallbackProducts; // Use fallback if no data
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return fallbackProducts; // Return fallback on API failure
//   }
// };

// const Page: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [status, setStatus] = useState<string>("idle");
//   const [cartAnimation, setCartAnimation] = useState<Record<number, boolean>>(
//     {}
//   );
//   const [showText, setShowText] = useState<Record<number, boolean>>({});

//   useEffect(() => {
//     const fetchProductsData = async () => {
//       setStatus("loading");
//       try {
//         const products = await fetchProducts();
//         setProducts(products);
//         setStatus("succeeded");
//         setShowText(
//           products.reduce(
//             (acc: any, product: { id: any }) => ({
//               ...acc,
//               [product.id]: true,
//             }),
//             {}
//           )
//         );
//       } catch (error) {
//         setStatus("failed");
//       }
//     };

//     fetchProductsData();
//   }, []);

//   const handleAddToCart = (productId: number) => {
//     setCartAnimation({ ...cartAnimation, [productId]: true });
//     setShowText({ ...showText, [productId]: false });

//     setTimeout(() => {
//       setCartAnimation({ ...cartAnimation, [productId]: false });
//       setShowText({ ...showText, [productId]: true });
//     }, 3000);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className={styles.productsWrapper} style={{ minHeight: "500px" }}>
//         {status === "loading"
//           ? Array.from({ length: 6 }).map((_, index) => (
//               <div className={styles.card} key={index}>
//                 <Skeleton height={200} width={200} />
//                 <Skeleton count={2} style={{ margin: "10px 0" }} />
//                 <Skeleton height={60} />
//                 <Skeleton
//                   height={40}
//                   width="80%"
//                   style={{ marginTop: "20px" }}
//                 />
//               </div>
//             ))
//           : products.map((product: Product) => (
//               <div className={styles.card} key={product.id}>
//                 <Image
//                   height={200}
//                   width={200}
//                   src={product.image || "/images/Rental/1.webp"}
//                   className={styles.imgProduct}
//                   alt={product.title}
//                 />
//                 <Link
//                   style={{ textDecoration: "none" }}
//                   href={`/product/${product.id}`}
//                   passHref
//                 >
//                   <h4 style={{ color: "black", cursor: "pointer" }}>
//                     {product.name}
//                   </h4>
//                 </Link>
//                 <h5>₹ {product.price} /-</h5>
//                 <div className={styles.product}>
//                   <div className={styles.description}>
//                     <p>
//                       {product.description.length > 100
//                         ? `${product.description.slice(0, 100)}...`
//                         : product.description}
//                     </p>
//                   </div>
//                 </div>
//                 {product.description.length > 80 && <button>Read More</button>}
//                 <motion.button
//                   className={styles.btn}
//                   style={{
//                     marginTop: "20px",
//                     marginLeft: "20px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     position: "relative",
//                     width: "150px",
//                     height: "50px",
//                     overflow: "hidden",
//                   }}
//                   onClick={() => handleAddToCart(product.id)}
//                 >
//                   <AnimatePresence>
//                     {cartAnimation[product.id] && (
//                       <motion.div
//                         initial={{ top: -40, opacity: 0 }}
//                         animate={{ top: 0, opacity: 1 }}
//                         exit={{ top: 40, opacity: 0 }}
//                         transition={{ duration: 0.8 }}
//                         style={{
//                           position: "absolute",
//                           width: "30px",
//                           height: "30px",
//                         }}
//                       >
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           layout="fill"
//                           objectFit="cover"
//                         />
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                   <motion.div
//                     initial={{ x: 0 }}
//                     animate={
//                       cartAnimation[product.id] ? { x: "50%" } : { x: 0 }
//                     }
//                     transition={{ duration: 0.5 }}
//                     style={{ display: "flex", alignItems: "center" }}
//                   >
//                     <ShoppingCartIcon />
//                     <AnimatePresence>
//                       {showText[product.id] && (
//                         <motion.span
//                           initial={{ opacity: 1 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                           transition={{ duration: 0.5 }}
//                           style={{ marginLeft: "10px" }}
//                         >
//                           Add to Cart
//                         </motion.span>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 </motion.button>
//               </div>
//             ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Page;
