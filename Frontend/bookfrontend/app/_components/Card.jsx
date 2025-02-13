

import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-6 my-4 p-4">
      <div className="card w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform duration-300 dark:bg-gray-800 dark:text-gray-200">
        {/* Image Section */}
        <figure className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 text-sm font-semibold rounded-full shadow-md">
            {item.category}
          </div>
        </figure>

        {/* Card Body */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
            {item.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {item.title}
          </p>

          {/* Price and Button Section */}
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold text-pink-500">
              ${item.price}
            </div>
            <button className="px-4 py-2 bg-pink-500 text-white font-medium text-sm rounded-full shadow-md hover:bg-pink-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
