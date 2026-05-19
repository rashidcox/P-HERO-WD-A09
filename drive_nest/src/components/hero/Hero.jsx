
import Image from "next/image";
import heroImage from"../../../public/herocar.png";
import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Content */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-5">
              Premium Car Rental
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Drive Your Dream <br />
              Car{" "}
              <span className="text-blue-600">
                Anytime,
                <br />
                Anywhere
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Explore premium vehicles, book instantly, and enjoy a
              seamless rental experience for your next journey.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl font-medium">
                Explore Cars
              </button>

              <button className="border border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600 transition px-8 py-3 rounded-xl font-medium">
                Become a Host
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-white shadow-md border rounded-2xl p-5">
                <h2 className="text-2xl font-bold text-blue-600">500+</h2>
                <p className="text-gray-500 mt-1">Premium Cars</p>
              </div>

              <div className="bg-white shadow-md border rounded-2xl p-5">
                <h2 className="text-2xl font-bold text-blue-600">10K+</h2>
                <p className="text-gray-500 mt-1">Happy Customers</p>
              </div>

              <div className="bg-white shadow-md border rounded-2xl p-5">
                <h2 className="text-2xl font-bold text-blue-600">20+</h2>
                <p className="text-gray-500 mt-1">Top Locations</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center" >
            
            {/* Background Circle */}
            <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-blue-100 rounded-full top-10"></div>

            {/* Car Image */}
            <Image 
              src="/herocar.png"
              alt="Car"
              width={500}
              height={500}
              className="relative z-10 w-full max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;