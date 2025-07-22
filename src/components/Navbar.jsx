import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          E-com
        </Link>
        <div className="flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition duration-200">
            Home
          </Link>
          <Link to="/" className="hover:text-blue-600 transition duration-200">
            Products
          </Link>
          <Link
            to="/cart"
            className="hover:text-blue-600 transition duration-200"
          >
            Cart
          </Link>
          <Link to="/" className="hover:text-blue-600 transition duration-200">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
