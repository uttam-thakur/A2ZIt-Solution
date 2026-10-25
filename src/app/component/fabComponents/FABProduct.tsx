"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useScrolling } from "../../common/hooks/useScrolling";
import "./style.css";
import { useRouter } from "next/navigation";

const FABProduct = () => {
  const router = useRouter();
  const scrolling = useScrolling({ fallbackTime: 750 });

  const handleProductClick = () => {
    router.push("/cartItems");
  };
  return (
    <button
      onClick={handleProductClick}
      className={`fab-product ${!scrolling ? "visible" : "hidden"}`}
    >
      <AiOutlineShoppingCart className="fab-product-icon" />
    </button>
  );
};

export default FABProduct;
