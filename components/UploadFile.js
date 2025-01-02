'use client';

import React, { useState, useRef } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { PopUpCard } from './PopUpCard';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isPopUpActive,setIsPopUpActive] = useState(false)
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile) return alert("No file selected.");
    // 20971520 is byte conversion of 20Mb
    if (selectedFile && selectedFile.size > 20971520 ) {
      setIsPopUpActive(true)
      return ;
    }
    alert(`Uploading ${selectedFile.name}`);
  };

  const handleClear = () => {
    setSelectedFile(null); // Clear the selected file
  };
  const inputRef = useRef()
  return (
    <div className="flex flex-col items-center animate-slide-up justify-center h-screen bg-gradient-to-br from-white to-blue-50 px-6 ">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2 leading-tight">
          Start <span className="text-blue-600">Uploading</span> Your File
        </h1>
        <p className="text-lg text-gray-500">
          Share files effortlessly with a single upload.
        </p>
      </div>

      {/* Upload Box */}
      <div
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click(); // Trigger the file picker
          }
        }}
        className={`border-2 border-dashed cursor-pointer bg-blue-200 py-28 rounded-xl p-8 w-full max-w-lg text-center transition-all ${dragActive
          ? 'border-red-950 bg-blue-50 shadow-lg'
          : 'border-gray-900 bg-white shadow-md hover:shadow-lg'
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          ref={inputRef}
          onChange={handleFileChange}
        />
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <IoCloudUploadOutline className="w-[40px] h-[40px] text-gray-100 animate-bounce" />
          <p className="text-lg font-semibold text-gray-700">
            <span className="text-sky-800 font-bold">Click to upload</span> or{' '}
            <span className="text-sky-800 font-bold">Drag and Drop</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Supported formats: SVG, PNG, JPG, GIF (Max: 20MB)
          </p>
        </div>
      </div>
          {/* pop up card here */}
          {
            isPopUpActive && <PopUpCard message={'File is too big ,please select file less than 20MB'} handler={setIsPopUpActive}/>
          }
      {/* Upload Button */}
      {selectedFile && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleUpload}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-3xl shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            Upload File
          </button>

          {/* Clear Button */}
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-8 py-3 rounded-3xl shadow-md hover:bg-red-600 transition-all"
          >
            Clear
          </button>
        </div>
      )}

      {/* Selected File Name */}
      {selectedFile && (
        <p className="mt-4 mb-2 text-gray-600">
          Selected File: <span className="font-medium">{selectedFile.name}</span>
        </p>
      )}
    </div>
  );
};

export default UploadFile;
