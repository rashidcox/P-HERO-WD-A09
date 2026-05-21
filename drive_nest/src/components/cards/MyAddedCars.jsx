"use client";
import React, { useState } from 'react';
import { 
  FaEdit, 
  FaTrash, 
  FaPlus, 
  FaCar, 
  FaEye 
} from 'react-icons/fa';

const MyAddedCars = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Toyota RAV4",
      type: "SUV",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400",
      price: 60,
      status: "Available",
    },
    {
      id: 2,
      name: "Honda Accord",
      type: "Sedan",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400",
      price: 50,
      status: "Available",
    },
    {
      id: 3,
      name: "BMW 5 Series",
      type: "Luxury",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
      price: 120,
      status: "Available",
    },
    {
      id: 4,
      name: "Hyundai i20",
      type: "Hatchback",
      image: "https://images.unsplash.com/photo-1549317666-4d2a1d2e5f8f?w=400",
      price: 35,
      status: "Unavailable",
    },
  ]);

  const deleteCar = (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      setCars(cars.filter(car => car.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Added Cars</h1>
            <p className="text-gray-600 mt-1">Manage your listed cars</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto">
            <FaPlus /> Add New Car
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Car</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Price / Day</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Status</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {cars.map((car) => (
                <tr key={car.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-14 h-14 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{car.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{car.type}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-lg">${car.price}</span>
                    <span className="text-gray-500 text-sm"> /day</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        car.status === 'Available'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {car.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-blue-600 hover:text-blue-700 transition">
                        <FaEye size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-amber-600 hover:text-amber-700 transition">
                        <FaEdit size={18} />
                      </button>
                      <button 
                        onClick={() => deleteCar(car.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-red-600 hover:text-red-700 transition"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl p-5 shadow">
              <div className="flex gap-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{car.name}</h3>
                  <p className="text-gray-500">{car.type}</p>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold">${car.price}</span>
                      <span className="text-gray-500">/day</span>
                    </div>
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-medium ${
                        car.status === 'Available'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {car.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                  <FaEye /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50">
                  <FaEdit /> Edit
                </button>
                <button 
                  onClick={() => deleteCar(car.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAddedCars;