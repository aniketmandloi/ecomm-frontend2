import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-semibold text-gray-800">My Profile</h1>
        </div>
      </header>

      {/* Profile Section */}
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Avatar and Name */}
          <div className="flex items-center space-x-6">
            <Avatar className="w-20 h-20">
              <AvatarImage />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Aniket Mandloi
              </h2>
              <p className="text-gray-500">aniketmandloi900@gmail.com</p>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Personal Details
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-600 mb-2">First Name</label>
                  <Input
                    placeholder="First Name"
                    value="Aniket"
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Last Name</label>
                  <Input
                    placeholder="Last Name"
                    value="Mandloi"
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <Input
                  placeholder="Email Address"
                  value="aniketmandloi900@gmail.com"
                  className="w-full rounded-md border-gray-300"
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Phone Number</label>
                <Input
                  placeholder="Phone Number"
                  value="+91-78984-46115"
                  className="w-full rounded-md border-gray-300"
                />
              </div>
            </form>
          </div>

          {/* Address Section */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Address</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 mb-2">Street</label>
                <Input
                  placeholder="Street Address"
                  className="w-full rounded-md border-gray-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-600 mb-2">City</label>
                  <Input
                    placeholder="City"
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">State</label>
                  <Input
                    placeholder="State"
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 mb-2">Zip Code</label>
                  <Input
                    placeholder="Zip Code"
                    className="w-full rounded-md border-gray-300"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Save Button */}
          <div className="mt-8 text-right">
            <Button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
