import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const quickLinks = ["Home", "Features", "Pricing", "Contact"];
  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">About Us</h3>
          <p className="text-sm">
            We provide a secure platform to store, share, and manage your files
            with ease. Trusted by thousands worldwide, we ensure your data is
            always safe and accessible.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="hover:text-blue-300 transition duration-300 ease-in-out"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialIcons.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition duration-300 ease-in-out"
                aria-label={label}
              >
                <Icon className="text-gray-300 hover:text-white" />
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-gray-100 mb-4">
            Subscribe to Newsletter
          </h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 FileShare. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {["Privacy Policy", "Terms of Service"].map((policy) => (
              <Link
                key={policy}
                href="#"
                className="hover:text-white transition duration-300 ease-in-out"
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
