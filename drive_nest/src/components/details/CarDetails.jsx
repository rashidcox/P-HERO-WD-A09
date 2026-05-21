import { all_cars } from "@/lib/data";
import Image from "next/image";
import React from "react";
import {
  FaGasPump,
  FaUsers,
  FaCogs,
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaSnowflake,
  FaBluetooth,
  FaCheckCircle,
} from "react-icons/fa";


const CarDetails = ({id}) => {
  const iid = parseInt(id);
  const car = all_cars[iid - 1];


  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          Home / Explore Cars /{" "}
          <span className="text-blue-600 font-medium">
            {car.name}
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Side Images */}
          <div>
            
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-md">
              <Image
                width={500}
                height={500}
                src={car.images[0]}
                alt={car.name}
                className="w-full h-[300px] md:h-[500px] object-cover"
              />
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              {car.images.map((img, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border"
                >
                  <Image
                    width={100}
                    height={100}
                    src={img}
                    alt="gallery"
                    className="w-full h-28 md:h-36 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Content */}
          <div>
            
            {/* Car Info */}
            <div className="bg-white rounded-3xl shadow-sm border p-6 md:p-8">
              
              {/* Top */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                
                <div>
                  <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                    {car.type}
                  </span>

                  <h1 className="text-4xl font-bold text-gray-900 mt-4">
                    {car.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-3">
                    <FaStar className="text-yellow-400" />

                    <span className="font-semibold text-gray-700">
                      {car.rating}
                    </span>

                    <span className="text-gray-500">
                      ({car.reviews} Reviews)
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-blue-600 text-white px-6 py-5 rounded-2xl text-center">
                  <h2 className="text-3xl font-bold">
                    ${car.price}
                  </h2>

                  <p className="text-blue-100">Per Day</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <FaUsers className="mx-auto text-blue-600 text-2xl mb-2" />
                  <p className="text-gray-500 text-sm">Seats</p>
                  <h3 className="font-bold text-gray-800">5</h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <FaCogs className="mx-auto text-blue-600 text-2xl mb-2" />
                  <p className="text-gray-500 text-sm">Transmission</p>
                  <h3 className="font-bold text-gray-800">
                    Automatic
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <FaGasPump className="mx-auto text-blue-600 text-2xl mb-2" />
                  <p className="text-gray-500 text-sm">Fuel</p>
                  <h3 className="font-bold text-gray-800">
                    Diesel
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <FaMapMarkerAlt className="mx-auto text-blue-600 text-2xl mb-2" />
                  <p className="text-gray-500 text-sm">Location</p>
                  <h3 className="font-bold text-gray-800">
                    California
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Description
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Experience luxury and comfort with the BMW X5.
                  This premium SUV offers powerful performance,
                  advanced safety features, spacious seating, and
                  modern technology for an unforgettable driving
                  experience.
                </p>
              </div>

              {/* Amenities */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  Amenities
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div className="flex items-center gap-3">
                    <FaSnowflake className="text-blue-600" />
                    <span className="text-gray-700">
                      Air Conditioning
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaBluetooth className="text-blue-600" />
                    <span className="text-gray-700">
                      Bluetooth Audio
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="text-blue-600" />
                    <span className="text-gray-700">
                      Full Insurance
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-blue-600" />
                    <span className="text-gray-700">
                      Free Cancellation
                    </span>
                  </div>
                </div>
              </div>

              {/* Booking Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-semibold">
                  Book Now
                </button>

                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition py-4 rounded-2xl font-semibold">
                  Contact Owner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;