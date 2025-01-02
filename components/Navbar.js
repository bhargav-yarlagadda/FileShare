'use client';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="bg-gradient-to-r  from-blue-50 via-gray-100 to-blue-50 ">
      <div className="flex justify-between items-center px-4 py-4 mx-auto">
        {/* Brand Name */}
        <span className="text-2xl group font-extrabold tracking-tight cursor-pointer">
          <span className="text-gray-900 group-hover:text-blue-600 ease-in duration-200 transition-colors">File</span>
          <span className="text-blue-600 group-hover:text-gray-900 ease-in duration-200 transition-colors">Share</span>
        </span>

        {/* User Section */}
        <div className="flex items-center gap-4">
          <span className="text-sm sm:text-base text-gray-700">
            Welcome, <span className="font-semibold text-gray-900">{user?.fullName || 'Guest'}</span>
          </span>
          <UserButton
            appearance={{
              elements: {
                rootBox:
                  'rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-1 transition-transform hover:scale-105',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
