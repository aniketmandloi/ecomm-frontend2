import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Classic Sneakers",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: "$49.99",
    image: "/images/sneakers.jpg",
  },
  {
    id: 2,
    title: "Leather Handbag",
    description: "Elegant leather handbag perfect for any occasion.",
    price: "$89.99",
    image: "/images/handbag.jpg",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    description: "Experience superior sound quality on the go.",
    price: "$129.99",
    image: "/images/headphones.jpg",
  },
  {
    id: 4,
    title: "Smart Watch",
    description: "Stay connected and track your fitness with ease.",
    price: "$199.99",
    image: "/images/smartwatch.jpg",
  },
];

const ShopNow: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <motion.h1
        className="text-4xl font-bold text-primary mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Shop Now
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="shadow-lg rounded-md overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-700">
                  Price: {product.price}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
