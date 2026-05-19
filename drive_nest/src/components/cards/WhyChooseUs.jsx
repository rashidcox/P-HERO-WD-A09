import React from "react";
import {
  FaCarSide,
  FaDollarSign,
  FaShieldAlt,
  FaHeadset,
  FaClock,
  FaMapMarkedAlt,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCarSide />,
    title: "Wide Range of Cars",
    description:
      "Choose from luxury, SUV, sedan, and economy cars for every journey.",
  },

  {
    id: 2,
    icon: <FaDollarSign />,
    title: "Best Price Guarantee",
    description:
      "Affordable rental prices with no hidden charges or extra fees.",
  },

  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Safe & Secure",
    description:
      "All vehicles are fully insured and regularly maintained for safety.",
  },

  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    description:
      "Our support team is always available to help you anytime.",
  },

  {
    id: 5,
    icon: <FaClock />,
    title: "Quick Booking",
    description:
      "Book your favorite car within minutes using our easy platform.",
  },

  {
    id: 6,
    icon: <FaMapMarkedAlt />,
    title: "Multiple Locations",
    description:
      "Pick up and drop off vehicles at many convenient locations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5">
            We Provide The Best
            <span className="text-blue-600"> Car Rental Experience</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg leading-relaxed">
            Discover premium vehicles, affordable pricing, and a
            smooth booking experience designed to make your journey
            comfortable and stress-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-gray-50 hover:bg-blue-600 transition-all duration-300 rounded-3xl p-8 border hover:border-blue-600"
            >
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-100 group-hover:bg-white flex items-center justify-center text-blue-600 text-2xl transition mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white transition mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 group-hover:text-gray-200 transition leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready To Drive Your Dream Car?
            </h2>

            <p className="text-blue-100 mt-4 text-lg max-w-2xl">
              Book premium vehicles at affordable prices and enjoy
              the best rental experience with DriveNest.
            </p>
          </div>

          {/* Button */}
          <button className="bg-white text-blue-600 hover:bg-gray-100 transition px-8 py-4 rounded-2xl font-semibold text-lg">
            Explore Cars
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;