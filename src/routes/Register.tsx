import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
// import { GoogleLogin } from "react-oauth/google";
// import FacebookLogin from "react-facebook-login";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle Registration Logic (e.g., API request)
    console.log(formData);
  };

  const responseGoogle = (response: any) => {
    console.log("Google Login Success", response);
  };

  const responseFacebook = (response: any) => {
    console.log("Facebook Login Success", response);
  };

  return (
    <div className="container mx-auto py-16">
      <motion.div
        className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-primary mb-4 text-center">
          Register
        </h1>

        {/* Registration Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>

        {/* Third-party Login */}
        <div className="mt-6 space-y-4">
          {/* <GoogleLogin
            onSuccess={responseGoogle}
            onError={() => console.log("Google login failed")}
            useOneTap
          />
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID" // Replace with your Facebook app ID
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
            icon="fa-facebook"
          /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
