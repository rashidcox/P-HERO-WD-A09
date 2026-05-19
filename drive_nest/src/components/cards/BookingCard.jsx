import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const BookingCard = () => {
    return (
        <div>
            {/* Booking Card */}
            <div className="absolute bottom-0 md:bottom-10 right-0 md:right-5 bg-white shadow-2xl rounded-2xl p-5 w-full max-w-sm z-20">
              <h2 className="text-xl font-bold text-gray-800 mb-5">
                Start Your Journey
              </h2>

              {/* Location */}
              <div className="border rounded-xl px-4 py-3 flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-blue-600" />
                <input
                  type="text"
                  placeholder="Pick-up location"
                  className="w-full outline-none"
                />
              </div>

              {/* Date */}
              <div className="border rounded-xl px-4 py-3 flex items-center gap-3 mb-5">
                <FaCalendarAlt className="text-blue-600" />
                <input
                  type="date"
                  className="w-full outline-none"
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium">
                Find Cars
              </button>
            </div>
        </div>
    );
};

export default BookingCard;