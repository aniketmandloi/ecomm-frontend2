import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import KnowMoreBar from "@/components/KnowMoreBar";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <KnowMoreBar />
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default Home;
