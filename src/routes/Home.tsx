import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import KnowMoreBar from "@/components/KnowMoreBar";
import { CoffeeCarouselDemo } from "@/components/CoffeeCarouselDemo";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <KnowMoreBar />
      <HeroSection />
      <CoffeeCarouselDemo />
      <FeaturedProducts />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
