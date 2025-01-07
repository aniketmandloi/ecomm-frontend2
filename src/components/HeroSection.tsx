import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import HeroImage1 from "../../public/HeroImages/HeroImage1.jpg";
import HeroImage2 from "../../public/HeroImages/HeroImage2.jpg";
import HeroImage3 from "../../public/HeroImages/HeroImage3.jpg";
import HeroImage4 from "../../public/HeroImages/HeroImage4.jpg";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToShopNow = () => {
    navigate("/shop-now");
  };

  const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage4];

  return (
    // <section
    //   className="bg-cover bg-center bg-no-repeat text-center py-32 text-white"
    //   style={{
    //     backgroundImage: "url('/public/HeroImage.jpg')",
    //     height: "80vh",
    //   }}
    // >
    <ImagesSlider className="h-[40rem]" images={images}>
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto"
      > */}
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.h2
          className="text-7xl font-extrabold mb-8 text-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Welcome to <span className="text-yellow-300 text-8xl">Starbucks</span>
        </motion.h2>
        <motion.p
          className="text-xl mb-12 max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-3xl font-semibold">
            The Art and Science of Coffee Brewing
          </h3>
        </motion.p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 text-xl font-semibold bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-xl rounded-full"
            onClick={handleNavigateToShopNow}
            transition={{ duration: 0.3 }}
          >
            Buy Coffee
          </motion.button>
        </motion.div>
      </motion.div>
    </ImagesSlider>

    // </section>
  );
};

export default HeroSection;
