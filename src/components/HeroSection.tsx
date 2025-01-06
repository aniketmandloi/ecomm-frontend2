import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToShopNow = () => {
    navigate("/shop-now");
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-center py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      >
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Welcome to <span className="text-yellow-300">ShopEase</span>
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover amazing products at unbeatable prices. Shop with ease and
          convenience!
        </motion.p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Button
            className="px-8 py-4 text-lg font-semibold bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-lg"
            onClick={handleNavigateToShopNow}
          >
            Shop Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
