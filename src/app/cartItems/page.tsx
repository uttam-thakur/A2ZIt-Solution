// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation"; // Use for redirection
// import {
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   IconButton,
// } from "@mui/material";
// import { Delete, Add, Remove } from "@mui/icons-material";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
//   quantity: number;
// }

// const CartItems: React.FC = () => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const router = useRouter(); // Initialize router for navigation

//   // Load cart items from localStorage on mount
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   // Update quantity or remove item
//   const updateQuantity = (productId: number, change: number) => {
//     let updatedCart = [...cart];
//     const index = updatedCart.findIndex((item) => item.id === productId);

//     if (index !== -1) {
//       updatedCart[index].quantity += change;
//       if (updatedCart[index].quantity <= 0) {
//         updatedCart.splice(index, 1); // Remove item if quantity is 0
//       }
//     }

//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   // Calculate total price
//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   // Function to send cart data to WhatsApp and redirect
//   const sendToWhatsApp = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }

//     // Format the message
//     let message = `🛒 *New Order*%0A%0A`;
//     cart.forEach((item, index) => {
//       message += `*${index + 1}. ${item.name}*%0A`;
//       message += `🛍 Quantity: ${item.quantity}%0A`;
//       message += `💰 Price: ₹${item.price} x ${item.quantity} = ₹${
//         item.price * item.quantity
//       }%0A%0A`;
//     });

//     message += `📦 *Total Amount:* ₹${totalPrice}%0A%0A`;
//     message += `📝 *Please confirm my order!*`;

//     // Replace with your WhatsApp number
//     const phoneNumber = "918670288140"; // Use international format (e.g., "91" for India)
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

//     // Open WhatsApp link
//     window.open(whatsappURL, "_blank");

//     // Clear cart data from localStorage
//     localStorage.removeItem("cart");

//     // Redirect to Home page after 5 seconds
//     setTimeout(() => {
//       router.push("/");
//     }, 5000);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-center text-lg">Your cart is empty.</p>
//       ) : (
//         <div className="grid gap-4 lg:grid-cols-2">
//           {cart.map((product) => (
//             <Card
//               key={product.id}
//               className="shadow-md rounded-lg p-4 flex items-center"
//             >
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={100}
//                 height={100}
//                 className="rounded-md"
//               />
//               <CardContent className="flex-1">
//                 <Typography variant="h6" className="font-semibold">
//                   {product.name}
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary">
//                   ₹ {product.price} x {product.quantity} = ₹{" "}
//                   {product.price * product.quantity}
//                 </Typography>
//               </CardContent>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-3">
//                 <IconButton onClick={() => updateQuantity(product.id, -1)}>
//                   <Remove />
//                 </IconButton>
//                 <Typography>{product.quantity}</Typography>
//                 <IconButton onClick={() => updateQuantity(product.id, 1)}>
//                   <Add />
//                 </IconButton>
//                 <IconButton
//                   onClick={() => updateQuantity(product.id, -product.quantity)}
//                 >
//                   <Delete />
//                 </IconButton>
//               </div>
//             </Card>
//           ))}
//         </div>
//       )}

//       {/* Total Price and Checkout Button */}
//       {cart.length > 0 && (
//         <div className="mt-6 text-center">
//           <Typography variant="h5" className="font-semibold">
//             Total: ₹ {totalPrice}
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             className="mt-4 px-6 py-2"
//             onClick={sendToWhatsApp}
//           >
//             Checkout on WhatsApp
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItems;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, IconButton } from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItems: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const router = useRouter();

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

    const phoneNumber = "918670288140";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
    localStorage.removeItem("cart");

    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-white shadow-md rounded-lg p-3 mb-4"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={70}
                height={70}
                className="rounded-lg"
              />

              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">
                  ₹{product.price} x {product.quantity}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(product.id, -1)}
                >
                  <Remove fontSize="small" />
                </IconButton>
                <span className="text-lg">{product.quantity}</span>
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(product.id, 1)}
                >
                  <Add fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => updateQuantity(product.id, -product.quantity)}
                >
                  <Delete fontSize="small" />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg flex justify-between items-center">
          <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
          <Button
            variant="contained"
            color="primary"
            className="py-2 px-6"
            onClick={sendToWhatsApp}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
