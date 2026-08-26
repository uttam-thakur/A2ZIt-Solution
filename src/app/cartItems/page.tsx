"use client";

import { useEffect, useState } from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import Image from "next/image";
import { IconButton, Button } from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItems = () => {
  const router = useRouter();
  const [cart, setCart] = useState<Product[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateQuantity = (productId: number, change: number) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === productId);

    if (index !== -1) {
      updatedCart[index].quantity += change;
      if (updatedCart[index].quantity <= 0) {
        updatedCart.splice(index, 1);
      }
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message = `🛒 *New Order*%0A%0A`;
    cart.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*%0A`;
      message += `🛍 Quantity: ${item.quantity}%0A`;
      message += `💰 Price: ₹${item.price} x ${item.quantity} = ₹${
        item.price * item.quantity
      }%0A%0A`;
    });

    message += `📦 *Total Amount:* ₹${totalPrice}%0A%0A`;
    message += `📝 *Please confirm my order!*`;

    const phoneNumber = "919619437593";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    setShowConfetti(true);

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      localStorage.removeItem("cart");
      setCart([]);
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <div className="p-10 bg-gray-100" style={{ paddingLeft: "20px" }}>
      {showConfetti && <Confetti />}

      <div
        className="flex items-center mb-4 mt-50 "
        style={{ marginTop: "80px" }}
      >
        <button onClick={() => router.push("/")} className="mr-2">
          <FaArrowLeft
            style={{
              outline: "none",
              border: "none",
              background: "transparent",
            }}
          />
        </button>
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      </div>

      {cart.length > 0 ? (
        <ul className="space-y-4">
          {cart.map((product) => (
            <li
              key={product.id}
              className="bg-gray-100 p-4 rounded-lg shadow flex items-center justify-between"
            >
              <div className="flex items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-md mr-4"
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">
                    ₹{product.price} x {product.quantity}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center mb-2">
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    <Remove fontSize="small" />
                  </IconButton>
                  <span className="mx-2">{product.quantity}</span>
                  <IconButton
                    size="small"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    <Add fontSize="small" />
                  </IconButton>
                </div>
                <p className="text-lg font-bold mt-2">
                  ₹{product.price * product.quantity}/-
                </p>
                <button
                  onClick={() => updateQuantity(product.id, -product.quantity)}
                  className="mt-2 flex items-center text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-100 transition duration-300"
                >
                  <FaTrash className="mr-1" />
                  <span className="text-sm font-medium">Remove</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {cart.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          className="py-2 px-6"
          onClick={sendToWhatsApp}
        >
          Checkout
        </Button>
      )}
    </div>
  );
};

export default CartItems;
