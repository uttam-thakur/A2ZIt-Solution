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

import Footer from "@/app/pages/footer";
import Navbar from "@/app/component/Navbar";
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
      name: "Laptop",
      price: 45000,
      description:
        "High-performance laptop with Intel Core i5, 8GB RAM, and 512GB SSD.",
      category: "Laptops",
      image: "https://via.placeholder.com/300", // Replace with Google image URL
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
      image: "https://via.placeholder.com/300",
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
      image: "https://via.placeholder.com/300",
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
      image: "https://via.placeholder.com/300",
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
      image: "https://via.placeholder.com/300",
      rating: { rate: 4.7, count: 140 },
      title: "Wireless Mouse",
    },
    {
      id: 6,
      name: "External Hard Disk",
      price: 6000,
      description:
        "2TB external hard drive for secure data storage and backups.",
      category: "Storage",
      image: "https://via.placeholder.com/300",
      rating: { rate: 4.8, count: 110 },
      title: "External Hard Disk",
    },
    {
      id: 7,
      name: "SSD (Solid State Drive)",
      price: 4500,
      description: "512GB SSD for faster performance and system boot speeds.",
      category: "Storage",
      image: "https://via.placeholder.com/300",
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
      image: "https://via.placeholder.com/300",
      rating: { rate: 4.5, count: 85 },
      title: "Laptop Cooling Fan",
    },
    {
      id: 9,
      name: "Pendrive (32GB)",
      price: 800,
      description: "USB 3.0 32GB pen drive with high-speed data transfer.",
      category: "Storage",
      image: "https://via.placeholder.com/300",
      rating: { rate: 4.7, count: 150 },
      title: "Pendrive (32GB)",
    },
    {
      id: 10,
      name: "HDMI Cable",
      price: 500,
      description: "High-speed HDMI cable for 4K display output.",
      category: "Cables",
      image: "https://via.placeholder.com/300",
      rating: { rate: 4.6, count: 100 },
      title: "HDMI Cable",
    },
    {
      id: 11,
      name: "USB Type-C Cable",
      price: 400,
      description:
        "Fast-charging USB Type-C cable with durable braided design.",
      category: "Cables",
      image: "https://via.placeholder.com/300",
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
      image: "https://via.placeholder.com/300",
      rating: { rate: 4.8, count: 90 },
      title: "Laptop Stand",
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
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ marginTop: "80px" }}
    >
      {/* <Navbar /> */}
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
              <Image
                src={product.image}
                alt="Product Image"
                width={300}
                height={300}
              />

              {/* <img src={product.image} height="300px" width="300px" /> */}
            </Grid>

            <Grid item xs={12} md={6}>
              <CardContent>
                <Typography variant="h4" component="h1" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="h5" color="textSecondary" gutterBottom>
                  ₹{" "}
                  {`${product.price.toString()[0]}***${product.price
                    .toString()
                    .slice(-1)}`}{" "}
                  /-
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
      {/* <Footer /> */}
    </Box>
  );
};

export default ProductDetail;
