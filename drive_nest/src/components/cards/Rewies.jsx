import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rewies = () => {
    return (
        <div>
            {/* Reviews Section */}
            <div className="mt-16 rounded-t-2xl pb-3">

                <h2 className="text-3xl text-center font-bold text-gray-100 mb-8">
                    Customer Reviews
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Review Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border">
                        <div className="flex items-center gap-4 mb-4">

                            <Image
                                width={100}
                                height={100}
                                src="https://i.pravatar.cc/100?img=1"
                                alt="user"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    John Smith
                                </h3>

                                <div className="flex text-yellow-400 mt-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            Amazing experience! The car was clean, comfortable,
                            and exactly as described. Highly recommended.
                        </p>
                    </div>

                    {/* Review Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm border">
                        <div className="flex items-center gap-4 mb-4">

                            <Image
                                width={100}
                                height={100}
                                src="https://i.pravatar.cc/100?img=5"
                                alt="user"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    Sarah Johnson
                                </h3>

                                <div className="flex text-yellow-400 mt-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            Smooth booking process and excellent customer support.
                            I would definitely rent again.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm border">
                        <div className="flex items-center gap-4 mb-4">

                            <Image
                                width={100}
                                height={100}
                                src="https://i.pravatar.cc/100?img=3"
                                alt="user"
                                className="w-14 h-14 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    John Kalibar
                                </h3>

                                <div className="flex text-yellow-400 mt-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            Amazing experience! The car was clean, comfortable,
                            and exactly as described. Highly recommended.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewies;