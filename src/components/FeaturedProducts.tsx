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
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="container mx-auto py-16">
      <motion.h2
        className="text-3xl font-bold text-primary mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Products
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
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
                <Button>Add to Cart</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
