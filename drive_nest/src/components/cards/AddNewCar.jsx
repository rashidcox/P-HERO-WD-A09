
"use client"
import React, { useState } from "react";
import {
  FaCar,
  FaDollarSign,
  FaMapMarkerAlt,
  FaImage,
  FaGasPump,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

const AddNewCar = () => {
  const [preview, setPreview] = useState(null);

  // Image Preview
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="text-gray-800 max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">

          <h1 className="text-left text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            Add New Car
          </h1>
          <p className="text-left text-gray-800">List your car and start earning</p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-sm border p-6 md:p-10">
          
          <form className="space-y-8">
            
            {/* Basic Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Car Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Car Name
                  </label>

                  <div className="relative">
                    <FaCar className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />

                    <input
                      type="text"
                      placeholder="BMW X5"
                      className="w-full border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Car Type */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Car Type
                  </label>

                  <select className="w-full border rounded-2xl px-4 py-4 outline-none focus:border-blue-600">
                    <option>Select Type</option>
                    <option>SUV</option>
                    <option>Luxury</option>
                    <option>Sedan</option>
                    <option>Hatchback</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Price Per Day
                  </label>

                  <div className="relative">
                    <FaDollarSign className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />

                    <input
                      type="number"
                      placeholder="120"
                      className="w-full border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Location
                  </label>

                  <div className="relative">
                    <FaMapMarkerAlt className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />

                    <input
                      type="text"
                      placeholder="California, USA"
                      className="w-full border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Car Specifications
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Seats */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Seats
                  </label>

                  <div className="relative">
                    <FaUsers className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />

                    <input
                      type="number"
                      placeholder="5"
                      className="w-full border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Transmission */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Transmission
                  </label>

                  <div className="relative">
                    <FaCogs className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />

                    <select className="w-full border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-600">
                      <option>Automatic</option>
                      <option>Manual</option>
                    </select>
                  </div>
                </div>

                {/* Fuel */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Fuel Type
                  </label>

                  <div className="relative">
                    <FaGasPump className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />

                    <select className="w-full border rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-blue-600">
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Hybrid</option>
                      <option>Electric</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Description
              </h2>

              <textarea
                rows="6"
                placeholder="Write detailed information about your car..."
                className="w-full border rounded-2xl px-4 py-4 outline-none focus:border-blue-600 resize-none"
              ></textarea>
            </div>

            {/* Upload Image */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Upload Car Image
              </h2>

              <div className="border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center bg-gray-50">
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                  id="carImage"
                />

                <label
                  htmlFor="carImage"
                  className="cursor-pointer"
                >
                  <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                    <FaImage />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    Click to Upload Image
                  </h3>

                  <p className="text-gray-500 mt-2">
                    PNG, JPG, JPEG up to 5MB
                  </p>
                </label>

                {/* Preview */}
                {preview && (
                  <div className="mt-8">
                    <img
                      src={preview}
                      alt="preview"
                      className="w-full max-w-md mx-auto rounded-2xl object-cover shadow"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                
                <label className="flex items-center gap-3 bg-gray-50 border rounded-2xl px-4 py-4 cursor-pointer">
                  <input type="checkbox" />
                  <span>Air Conditioning</span>
                </label>

                <label className="flex items-center gap-3 bg-gray-50 border rounded-2xl px-4 py-4 cursor-pointer">
                  <input type="checkbox" />
                  <span>Bluetooth</span>
                </label>

                <label className="flex items-center gap-3 bg-gray-50 border rounded-2xl px-4 py-4 cursor-pointer">
                  <input type="checkbox" />
                  <span>GPS</span>
                </label>

                <label className="flex items-center gap-3 bg-gray-50 border rounded-2xl px-4 py-4 cursor-pointer">
                  <input type="checkbox" />
                  <span>Insurance</span>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              
              <button
                type="button"
                className="w-full border border-gray-300 hover:border-blue-600 hover:text-blue-600 transition py-4 rounded-2xl font-semibold"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-semibold"
              >
                Add New Car
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewCar;