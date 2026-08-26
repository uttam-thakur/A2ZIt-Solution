"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }: any) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation plays only once
    threshold: 0.2, // Adjust visibility trigger point
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
