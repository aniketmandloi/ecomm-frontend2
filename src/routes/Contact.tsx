import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      {/* Contact Title with Animation */}
      <motion.h1
        className="text-4xl font-bold text-primary mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      {/* Grid Layout for Form and Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form with Animation */}
        <motion.div
          className="shadow-lg rounded-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here"
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full hover:bg-primary/80 transition-colors duration-300"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information with Animation */}
        <motion.div
          className="shadow-lg rounded-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Our Office</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Feel free to visit us or reach out using the contact details
                  below.
                </p>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-700">
                    123 Business St.
                    <br />
                    City Name, Country, ZIP
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-700">+1 (234) 567-890</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-700">support@yourwebsite.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
