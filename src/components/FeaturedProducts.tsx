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
    title: "Classic Brew Coffee",
    description: "Rich and smooth coffee, perfect for your morning routine.",
    price: "$5.99",
    image: "/public/coffee1.webp",
  },
  {
    id: 2,
    title: "Elegant Coffee Mug",
    description: "Durable ceramic mug with a sleek Starbucks design.",
    price: "$12.99",
    image: "/public/mug.webp",
  },
  {
    id: 3,
    title: "Signature Coffee Beans",
    description: "Whole bean coffee for the ultimate brewing experience.",
    price: "$14.99",
    image: "/public/coffee2.webp",
  },
  {
    id: 4,
    title: "Chocolate Coffee Bars",
    description:
      "Delicious coffee-infused chocolate bars for a quick energy boost.",
    price: "$4.99",
    image: "/public/coffeeBars.webp",
  },
  {
    id: 5,
    title: "Premium Coffee Mug Set",
    description: "Set of two high-quality mugs, perfect for sharing your brew.",
    price: "$24.99",
    image: "/public/mug.webp",
  },
  {
    id: 6,
    title: "Caramel Latte Coffee",
    description: "Sweet and creamy caramel latte blend for coffee lovers.",
    price: "$6.99",
    image: "/public/coffee1.webp",
  },
  {
    id: 7,
    title: "Espresso Roast Beans",
    description: "Bold espresso beans for rich, full-bodied shots.",
    price: "$15.99",
    image: "/public/coffee2.webp",
  },
  {
    id: 8,
    title: "Vanilla Coffee Bars",
    description: "Infused with hints of vanilla, perfect for a quick treat.",
    price: "$5.49",
    image: "/public/coffeeBars.webp",
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
        Our Best Sellers
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
                  className="w-full h-50 object-cover mb-4 rounded-md"
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
