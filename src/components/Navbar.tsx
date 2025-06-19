import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="text-white font-bold text-xl">UDM LOGO</div>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-white hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
          About Us
        </Link>
        <Link to="/campaigns" className="text-white hover:text-gray-300 transition-colors">
          Ongoing Campaigns
        </Link>
        <Link to="/brands" className="text-white hover:text-gray-300 transition-colors">
          Brands
        </Link>
      </div>
      
      <div className="flex space-x-3">
        <Button variant="outline" className="bg-white text-udm-darkblue hover:bg-gray-100 transition-colors">
          Login
        </Button>
        <Button className="bg-transparent border border-white text-white hover:bg-white/10 transition-colors">
          Get in Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
