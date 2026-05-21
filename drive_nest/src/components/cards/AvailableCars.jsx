

import { all_cars } from "@/lib/data";
import { getFeaturedCars } from "@/lib/featureCars";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaGasPump,
  FaUsers,
  FaCogs,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";

const cars = getFeaturedCars(all_cars, 4);
const AvailableCars = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Available Cars
            </h2>

            <p className="text-gray-500 mt-2">
              Choose from our premium collection of vehicles
            </p>
          </div>

          <button className="hidden md:block text-blue-600 font-medium hover:underline">
            View All Cars →
          </button>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border"
            >
              
              {/* Image */}
              <div className="relative">
                <Image 
                  src={car.images[0]}
                  alt={car.name}
                  width={500}
                  height={500}
                  className="w-full h-56 object-cover"
                />

                {/* Car Type */}
                <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {car.type}
                </span>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow">
                  <FaHeart className="text-gray-500 hover:text-red-500 transition" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                
                {/* Name & Price */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.name}
                  </h3>

                  <p className="text-blue-600 font-bold">
                    ${car.price}
                    <span className="text-gray-500 text-sm font-normal">
                      /day
                    </span>
                  </p>
                </div>

                {/* Features */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  
                  <div className="flex items-center gap-1">
                    <FaUsers />
                    <span>{car.seats} Seats</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaCogs />
                    <span>{car.transmission}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaGasPump />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>{car.location}</span>
                </div>

                {/* Button */}
                <Link href={`/cars/${car.id}`}>
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition py-3 rounded-xl font-medium">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 text-center md:hidden">
          <button className="text-blue-600 font-medium hover:underline">
            View All Cars →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;