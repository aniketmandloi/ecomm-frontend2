import React from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  return (
    <motion.header
      className="bg-white shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-primary cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Aniket's Shop
        </motion.h1>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            {/* Dropdown Item 1 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-indigo-500">
                Shop
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                <ul className="p-4">
                  <li>
                    <NavigationMenuLink
                      href="/categories/men"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                    >
                      Men
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/categories/women"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                    >
                      Women
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/categories/accessories"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                    >
                      Accessories
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Dropdown Item 2 */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-indigo-500">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-lg rounded-md">
                <ul className="p-4">
                  <li>
                    <NavigationMenuLink
                      href="/about"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                    >
                      Our Story
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/team"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                    >
                      Team
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      href="/careers"
                      className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                    >
                      Careers
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple Link Item */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="hover:text-indigo-500"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Indicator and Viewport */}
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </motion.header>
  );
};

export default Header;