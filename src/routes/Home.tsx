import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Home;
