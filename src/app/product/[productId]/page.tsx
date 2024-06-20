// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Container,
// } from "@mui/material";
// import ReactImageMagnify from "react-image-magnify";
// import Navbar from "@/app/component/Navbar";
// import Footer from "@/app/pages/footer";

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

// const ProductDetail: React.FC = ({ params }: any) => {
//   const id: any = params?.productId;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [isZoomedIn, setIsZoomedIn] = useState(false);

//   useEffect(() => {
//     if (id) {
//       const fetchProduct = async () => {
//         try {
//           const response = await axios.get(
//             // `https://fakestoreapi.com/products/${id}`
//             `https://hostapi-production-15e5.up.railway.app/api/products/${id}`
//           );
//           setProduct(response.data.data);
//           setLoading(false);
//         } catch (error) {
//           console.error("Error fetching product:", error);
//           setLoading(false);
//         }
//       };

//       fetchProduct();
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!product) {
//     return (
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         minHeight="100vh"
//       >
//         <Typography variant="h6">Product not found</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box display="flex" flexDirection="column" minHeight="100vh">
//       <Navbar />
//       <Container maxWidth="md" sx={{ mt: 5, flex: "1" }}>
//         <Card>
//           <Grid container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <div
//                 onMouseEnter={() => setIsZoomedIn(true)}
//                 onMouseLeave={() => setIsZoomedIn(false)}
//               >
//                 <ReactImageMagnify
//                   {...{
//                     smallImage: {
//                       alt: product.title,
//                       src: product.image,
//                       isFluidWidth: true,
//                     },
//                     largeImage: {
//                       src: product.image,
//                       width: 800,
//                       height: 800,
//                     },
//                   }}
//                 />
//               </div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <CardContent>
//                 <Typography variant="h4" component="h1" gutterBottom>
//                   {product.name}
//                 </Typography>
//                 <Typography variant="h5" color="textSecondary" gutterBottom>
//                   ₹ {product.price * 80} /-
//                 </Typography>
//                 <Typography variant="body1" paragraph>
//                   {product.description}
//                 </Typography>

//                 {!isZoomedIn && (
//                   <Button variant="contained" color="primary">
//                     Add to Cart
//                   </Button>
//                 )}
//               </CardContent>
//             </Grid>
//           </Grid>
//         </Card>
//       </Container>
//       <Footer />
//     </Box>
//   );
// };

// export default ProductDetail;
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import ReactImageMagnify from "react-image-magnify";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/pages/footer";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import Material-UI cart icon
import Image from "next/image"; // Import next/image component

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

const ProductDetail: React.FC = ({ params }: any) => {
  const id: any = params?.productId;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const [cartAnimation, setCartAnimation] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `https://hostapi-production-15e5.up.railway.app/api/products/${id}`
          );
          setProduct(response.data.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    setCartAnimation(true);
    setShowText(false);

    setTimeout(() => {
      setCartAnimation(false);
      setShowText(true);
    }, 3000); // Reset animation and show text after 3 seconds
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 5, flex: "1" }}>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div
                onMouseEnter={() => setIsZoomedIn(true)}
                onMouseLeave={() => setIsZoomedIn(false)}
              >
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: product.title,
                      src: product.image,
                      isFluidWidth: true,
                    },
                    largeImage: {
                      src: product.image,
                      width: 800,
                      height: 800,
                    },
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  ₹ {product.price * 80} /-
                </Typography>
                <Typography variant="body1" paragraph>
                  {product.description}
                </Typography>

                {!isZoomedIn && (
                  <motion.button
                    className="btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      width: "150px",
                      height: "50px",
                      overflow: "hidden",
                      border: "none",
                      backgroundColor: "#3f51b5",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={handleAddToCart}
                  >
                    <AnimatePresence>
                      {cartAnimation && (
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
                            width={30}
                            height={30}
                            objectFit="cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <motion.div
                      initial={{ x: 0 }}
                      animate={cartAnimation ? { x: "50%" } : { x: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ShoppingCartIcon />
                      <AnimatePresence>
                        {showText && (
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
                )}
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <Footer />
    </Box>
  );
};

export default ProductDetail;
