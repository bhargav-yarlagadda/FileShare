import React from 'react';
import Link from 'next/link';
import { FaUpload, FaHome, } from 'react-icons/fa';
import { TfiFiles } from "react-icons/tfi";
import { TbPremiumRights } from "react-icons/tb";

const UploadSidebar = () => {
  const options = [
    { label: 'Upload', href: '/upload', icon: <FaUpload /> },
    { label: 'Return Home', href: '/', icon: <FaHome /> },
    { label: 'Upgrade', href: '/upgrade', icon: <TbPremiumRights /> },
    { label: 'Files', href: '/files', icon: <TfiFiles/> },
  ];

  return (
    <div className="w-full h-full bg-white text-gray-900 flex flex-col shadow-lg rounded-xl overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 py-8 px-6">
        {options.map((option, index) => (
          <Link
            key={index}
            href={option.href}
            className="flex flex-col justify-center items-center md:justify-normal md:items-start group space-x-4 text-lg p-4 rounded-lg border border-transparent hover:bg-green-200 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 relative"
          >
            <div className="flex justify-start gap-2 items-center">
              <span className="text-xl text-gray-700 group-hover:text-blue-600">{option.icon}</span>
              <span className="font-normal  group-hover:text-blue-600">{option.label}</span>
            </div>
            <div className="h-1 bg-transparent w-0 group-hover:bg-blue-500 group-hover:w-full rounded-lg transition-all duration-1000"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UploadSidebar;
