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
// import ReactImageMagnify from "react-image-magnify";

import Navbar from "@/app/component/Navbar";
import Footer from "@/app/pages/footer";
import { motion, AnimatePresence } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Image from "next/image";
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://hostapi-production-15e5.up.railway.app/api/products/${id}`
        );

        if (response.data && response.data.data) {
          setProduct(response.data.data);
        } else {
          setProduct(fallbackProducts.find((p) => p.id === Number(id)) || null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(fallbackProducts.find((p) => p.id === Number(id)) || null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
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
            {/* <Grid item xs={12} md={6}>
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
            </Grid> */}
            <Grid item xs={12} md={6}>
              <img src={product.image} height="300px" width="300px" />
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
