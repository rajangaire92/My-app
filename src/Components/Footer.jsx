import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl font-bold">Abort Store</h2>
          <p className="text-gray-300 mt-2">
            © 2024 Abort Store. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaInstagram />
          </a>
        </div>
        <div className="text-center md:text-right">
          <a
            href="#"
            className="text-gray-300 hover:text-white block mb-2 md:mb-0"
          >
            Privacy Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-white block">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
