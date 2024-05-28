"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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
}

const ProductDetail: React.FC = ({ params }: any) => {
  // const router = useRouter();
  const id: any = params?.productId;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `https://hostapi-production-15e5.up.railway.app/api/product/all/${id}`
          );
          setProduct(response.data);
          console.log("----->", product);

          setLoading(false);
        } catch (error) {
          console.error("Error fetching product:", error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ height: "300px", width: "300px" }}
      />
      <p>{product.description}</p>
      <p>Price: ₹ {product.price * 80} /-</p>
      <p>Category: {product.category}</p>
      {/* <p>
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p> */}
    </div>
  );
};

export default ProductDetail;
