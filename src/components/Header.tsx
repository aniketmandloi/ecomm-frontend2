import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToRegister = () => {
    navigate("/register");
  };

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  const handleNavigateToProfilePage = () => {
    navigate("/profile");
  };

  return (
    <motion.header
      className="bg-white sticky top-0 z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left Section - Logo and Menu */}
        <div className="flex items-center space-x-6">
          {/* Starbucks Logo */}
          <img
            src="/public/StarbucksLogo.png"
            alt="Starbucks Logo"
            className="h-12 w-12 cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-800">
            <a
              href="/menu"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Menu
            </a>
            <a
              href="/rewards"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Rewards
            </a>
            <a
              href="/gift-cards"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Gift Cards
            </a>
          </nav>
        </div>

        {/* Right Section - Input and Avatar */}
        <div className="flex items-center space-x-4">
          {/* Input Field */}
          <div className="hidden md:block w-64">
            <Input
              placeholder="looking for something specific.."
              className="rounded-2xl border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </div>

          {/* Avatar */}
          <Avatar
            className="cursor-pointer"
            onClick={handleNavigateToProfilePage}
          >
            <AvatarImage />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
