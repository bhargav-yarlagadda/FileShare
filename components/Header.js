'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu toggle
  const [isMobile, setIsMobile] = useState(false); // Track whether the screen is mobile size

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768); // Detect if the screen is smaller than 768px (mobile size)
  };

  useEffect(() => {
    // Check the screen size on mount
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up the overflow style when the component unmounts or the menu is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Close the menu when switching to desktop size
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="bg-gradient-to-r from-blue-50 via-white to-blue-50 px-4 md:px-8 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="text-xl md:text-2xl font-extrabold text-gray-800">
        <Link href="/" className="hover:text-blue-600 transition-colors duration-300">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500">{'<FileShare/>'}</span>
        </Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl z-50 text-gray-800">
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between menu and close icons */}
        </button>
      </div>

      {/* Full-Screen Menu (Mobile) */}
      <div
        className={`md:flex gap-4 items-center text-gray-600 ${isMenuOpen ? 'absolute backdrop-blur-sm bg-opacity-75 inset-0 flex flex-col justify-start  gap-10 h-screen w-screen bg-white z-10 py-44' : 'hidden '} md:block flex flex-row transition-all duration-300`}
      >
        {/* Home Link with Line Transition */}
        <Link href="/" className="group text-md font-medium transition-colors duration-300">
          <div className="flex flex-col items-center">
            <span className="hover:text-sky-600">Home</span>
            <div className="h-[2px] w-0 bg-blue-800 rounded-md group-hover:w-10 transition-all duration-300"></div>
          </div>
        </Link>


        {/* Upload Link with Line Transition */}
        <Link href="/upload" className="group text-md font-medium transition-colors duration-300">
          <div className="flex flex-col items-center">
            <span className="hover:text-sky-600">Upload</span>
            <div className="h-[2px] w-0 bg-blue-800 rounded-md group-hover:w-10 transition-all duration-300"></div>
          </div>
        </Link>

        {/* About Us Link with Line Transition */}
        <Link href="/about" className="group text-md font-medium transition-colors duration-300">
          <div className="flex flex-col items-center">
            <span className="hover:text-sky-600">About Us</span>
            <div className="h-[2px] w-0 bg-blue-800 rounded-md group-hover:w-10 transition-all duration-300"></div>
          </div>
        </Link>

        {/* Get Started Button */}
        <Link href="/sign-in" className="py-2 px-3 rounded-md text-white bg-blue-700">
          <span>Get Started</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
