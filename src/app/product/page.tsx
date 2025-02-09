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
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import Material-UI cart icon

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
//   quantity?: number;
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
//         console.error("Error fetching products:", error);
//         setStatus("failed");
//       }
//     };

//     fetchProductsData();
//   }, []);

//   // const handleAddToCart = (productId: number) => {
//   //   setCartAnimation({ ...cartAnimation, [productId]: true });
//   //   setShowText({ ...showText, [productId]: false });

//   //   setTimeout(() => {
//   //     setCartAnimation({ ...cartAnimation, [productId]: false });
//   //     setShowText({ ...showText, [productId]: true });
//   //   }, 3000); // Reset animation and show text after 3 seconds
//   // };
//   const handleAddToCart = (product: Product) => {
//     let cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     // Check if the product is already in the cart
//     const existingProductIndex = cart.findIndex(
//       (item: Product) => item.id === product.id
//     );

//     if (existingProductIndex !== -1) {
//       cart[existingProductIndex].quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     setCartItems(cart); // Update state to reflect changes
//   };

//   // Function to update quantity
//   const updateQuantity = (productId: number, change: number) => {
//     let cart = JSON.parse(localStorage.getItem("cart") || "[]");

//     const productIndex = cart.findIndex(
//       (item: Product) => item.id === productId
//     );

//     if (productIndex !== -1) {
//       cart[productIndex].quantity += change;

//       // If quantity is zero or less, remove the item from cart
//       if (cart[productIndex].quantity <= 0) {
//         cart.splice(productIndex, 1);
//       }

//       localStorage.setItem("cart", JSON.stringify(cart));
//       setCartItems(cart); // Update state
//     }
//   };

//   // State to track cart items
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   // Load cart items from localStorage on component mount
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCartItems(storedCart);
//   }, []);

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
//           : products?.map((product: Product) => (
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
//                   <h4
//                     style={{
//                       color: "black",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {product.name || "hard disk"}
//                   </h4>
//                 </Link>
//                 <h5>₹ {product.price || "450"} /-</h5>
//                 <div className={styles.product}>
//                   <div className={styles.description}>
//                     <p>
//                       {product.description.length > 100
//                         ? `${product.description.slice(0, 100)}...`
//                         : product.description}
//                     </p>
//                   </div>
//                 </div>
//                 {/* <motion.button
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
//                 </motion.button> */}
//                 <div>
//                   {cartItems.find((item: any) => item.id === product.id) ? (
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "10px",
//                       }}
//                     >
//                       <button onClick={() => updateQuantity(product.id, -1)}>
//                         -
//                       </button>
//                       <span>
//                         {cartItems.find((item) => item.id === product.id)
//                           ?.quantity || 0}
//                       </span>
//                       <button onClick={() => updateQuantity(product.id, 1)}>
//                         +
//                       </button>
//                     </div>
//                   ) : (
//                     <button onClick={() => handleAddToCart(product)}>
//                       Add To Cart
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
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
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
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
  quantity?: number;
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
      "Latest model smartphone with an AMOLED display and 128GB storage.",
    category: "Electronics",
    image: "/images/sample2.jpg",
    rating: { rate: 4.7, count: 200 },
    title: "Smartphone",
  },
];

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
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [flag, setFlag] = React.useState(false);

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

    // Load cart items from localStorage on component mount
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  // Function to handle Add to Cart
  const handleAddToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item: Product) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart); // Update state to reflect changes
    setFlag(true);
    toast.success(`${product.name} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Function to update quantity
  const updateQuantity = (productId: number, change: number) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const productIndex = cart.findIndex(
      (item: Product) => item.id === productId
    );

    if (productIndex !== -1) {
      cart[productIndex].quantity += change;

      // If quantity is zero or less, remove the item from cart
      if (cart[productIndex].quantity <= 0) {
        const removedItem = cart.splice(productIndex, 1);
        toast.error(`${removedItem[0].name} removed from cart ❌`, {
          position: "top-right",
          autoClose: 2000,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart); // Update state
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.productsWrapper} style={{ minHeight: "500px" }}>
        {products?.map((product: Product) => (
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
              <h4 style={{ color: "black", cursor: "pointer" }}>
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
            <div>
              {cartItems.find((item: any) => item.id === product.id) ? (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
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
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Footer />

      <ToastContainer />
    </>
  );
};

export default Page;
