
"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaSearch,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaMapMarkerAlt,
  FaHeart,
  FaFilter,
} from "react-icons/fa";

const cars = [
  {
    id: 1,
    name: "Toyota RAV4",
    type: "SUV",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "New York",
  },

  {
    id: 2,
    name: "BMW X5",
    type: "Luxury",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    location: "California",
  },

  {
    id: 3,
    name: "Honda Civic",
    type: "Sedan",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    location: "Chicago",
  },

  {
    id: 4,
    name: "Hyundai i20",
    type: "Hatchback",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    location: "Miami",
  },

  {
    id: 5,
    name: "Mercedes C-Class",
    type: "Luxury",
    price: 140,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    location: "Texas",
  },

  {
    id: 6,
    name: "Ford Explorer",
    type: "SUV",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    location: "Florida",
  },
];

const ExploreCars = () => {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Explore Cars
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            Find Your Perfect Ride
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Browse our premium collection of vehicles and book your
            dream car for your next adventure.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-5 mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full lg:max-w-md">
            <FaSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            
            <select className="border rounded-xl px-4 py-3 outline-none focus:border-blue-600">
              <option>All Types</option>
              <option>SUV</option>
              <option>Luxury</option>
              <option>Sedan</option>
              <option>Hatchback</option>
            </select>

            <select className="border rounded-xl px-4 py-3 outline-none focus:border-blue-600">
              <option>Price Range</option>
              <option>$0 - $50</option>
              <option>$50 - $100</option>
              <option>$100+</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2">
              <FaFilter />
              Filter
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
          
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border"
            >
              
              {/* Image */}
              <div className="relative">
                <Image 
                  src={car.image}
                  alt={car.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover"
                />

                {/* Type Badge */}
                <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {car.type}
                </span>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
                  <FaHeart className="text-gray-500 hover:text-red-500 transition" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                
                {/* Name & Price */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {car.name}
                  </h2>

                  <p className="text-blue-600 font-bold text-lg">
                    ${car.price}
                    <span className="text-sm text-gray-500 font-normal">
                      /day
                    </span>
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-3 text-sm text-gray-500 mb-5">
                  
                  <div className="flex flex-col items-center bg-gray-50 rounded-xl py-3">
                    <FaUsers className="mb-1 text-blue-600" />
                    <span>{car.seats} Seats</span>
                  </div>

                  <div className="flex flex-col items-center bg-gray-50 rounded-xl py-3">
                    <FaCogs className="mb-1 text-blue-600" />
                    <span>{car.transmission}</span>
                  </div>

                  <div className="flex flex-col items-center bg-gray-50 rounded-xl py-3">
                    <FaGasPump className="mb-1 text-blue-600" />
                    <span>{car.fuel}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 mb-6">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>{car.location}</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition py-3 rounded-xl font-medium">
                    Details
                  </button>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-700">
              No Cars Found
            </h2>

            <p className="text-gray-500 mt-3">
              Try searching with another keyword.
            </p>
          </div>
        )}
      </div>

    {/* Pagination */}
<div className="flex items-center justify-center mt-14 gap-2 flex-wrap">
  
  {/* Previous Button */}
  <button className="px-4 py-2 border rounded-xl text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
    Prev
  </button>

  {/* Page Numbers */}
  <button className="w-11 h-11 rounded-xl bg-blue-600 text-white font-semibold">
    1
  </button>

  <button className="w-11 h-11 rounded-xl border text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
    2
  </button>

  <button className="w-11 h-11 rounded-xl border text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
    3
  </button>

  <button className="w-11 h-11 rounded-xl border text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
    4
  </button>

  <button className="w-11 h-11 rounded-xl border text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
    5
  </button>

  {/* Next Button */}
  <button className="px-4 py-2 border rounded-xl text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
    Next
  </button>
</div>
    </section>
  );
};

export default ExploreCars;