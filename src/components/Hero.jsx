import React from 'react';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home Today
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover the perfect property that matches your lifestyle and dreams
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
