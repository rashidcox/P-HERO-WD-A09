"use client";
import React from "react";
import {
  FaCar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
} from "react-icons/fa";

const bookings = [
  {
    id: 1,
    car: "BMW X5",
    type: "Luxury SUV",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    location: "California, USA",
    pickupDate: "20 May 2026",
    returnDate: "25 May 2026",
    price: 600,
    status: "Completed",
  },

  {
    id: 2,
    car: "Toyota RAV4",
    type: "SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
    location: "New York, USA",
    pickupDate: "02 June 2026",
    returnDate: "06 June 2026",
    price: 320,
    status: "Pending",
  },

  {
    id: 3,
    car: "Honda Civic",
    type: "Sedan",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    location: "Chicago, USA",
    pickupDate: "10 June 2026",
    returnDate: "14 June 2026",
    price: 250,
    status: "Cancelled",
  },
];

const MyBookings = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            My Bookings
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5">
            Your Booking History
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Manage your car bookings, track booking status, and
            view rental details anytime.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-gray-500">Total Bookings</p>

                <h2 className="text-4xl font-bold text-gray-900 mt-2">
                  12
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
                <FaCar />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-gray-500">Completed</p>

                <h2 className="text-4xl font-bold text-green-600 mt-2">
                  8
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-2xl">
                <FaCheckCircle />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <div className="flex items-center justify-between">
              
              <div>
                <p className="text-gray-500">Pending</p>

                <h2 className="text-4xl font-bold text-yellow-500 mt-2">
                  2
                </h2>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-500 text-2xl">
                <FaClock />
              </div>
            </div>
          </div>
        </div>

        {/* Booking Cards */}
        <div className="space-y-8">
          
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-3xl border shadow-sm overflow-hidden"
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-4">
                
                {/* Image */}
                <div className="lg:col-span-1">
                  <img
                    src={booking.image}
                    alt={booking.car}
                    className="w-full h-full object-cover lg:h-[260px]"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-6 md:p-8">
                  
                  {/* Top */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    
                    <div>
                      <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                        {booking.type}
                      </span>

                      <h2 className="text-3xl font-bold text-gray-900 mt-4">
                        {booking.car}
                      </h2>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-500 mt-3">
                        <FaMapMarkerAlt className="text-blue-600" />
                        <span>{booking.location}</span>
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      {booking.status === "Completed" && (
                        <span className="bg-green-100 text-green-600 px-5 py-3 rounded-2xl font-medium inline-flex items-center gap-2">
                          <FaCheckCircle />
                          Completed
                        </span>
                      )}

                      {booking.status === "Pending" && (
                        <span className="bg-yellow-100 text-yellow-600 px-5 py-3 rounded-2xl font-medium inline-flex items-center gap-2">
                          <FaClock />
                          Pending
                        </span>
                      )}

                      {booking.status === "Cancelled" && (
                        <span className="bg-red-100 text-red-600 px-5 py-3 rounded-2xl font-medium inline-flex items-center gap-2">
                          <FaTimesCircle />
                          Cancelled
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Booking Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
                    
                    <div className="bg-gray-50 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCalendarAlt className="text-blue-600" />

                        <h3 className="font-semibold text-gray-800">
                          Pick-up Date
                        </h3>
                      </div>

                      <p className="text-gray-500">
                        {booking.pickupDate}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCalendarAlt className="text-blue-600" />

                        <h3 className="font-semibold text-gray-800">
                          Return Date
                        </h3>
                      </div>

                      <p className="text-gray-500">
                        {booking.returnDate}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <FaCar className="text-blue-600" />

                        <h3 className="font-semibold text-gray-800">
                          Total Price
                        </h3>
                      </div>

                      <p className="text-blue-600 text-xl font-bold">
                        ${booking.price}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
                      <FaEye />
                      View Details
                    </button>

                    <button className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition py-4 rounded-2xl font-semibold">
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="bg-white rounded-3xl border shadow-sm p-16 text-center">
            
            <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto text-4xl mb-6">
              <FaCar />
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              No Bookings Found
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              You have not booked any cars yet.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-semibold">
              Explore Cars
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookings;