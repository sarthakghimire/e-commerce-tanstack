import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} E-com. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-600 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-600 text-sm">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-600 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
