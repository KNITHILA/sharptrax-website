import React, { useState } from 'react';

const mainImage = '/assets/plasma6.jpg';
const thumbnails = [
'/assets/plasma1.jpg',
'/assets/plasma2.jpg',
'/assets/plasma3.jpg',
'/assets/plasma4.jpg',
'/assets/plasma5.jpg',

];

const PlasmaCncCuttingPage = () => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <div className="min-h-screen text-gray-800 font-sans p-4 sm:p-8 md:p-12">
      <div className="container mx-auto px-6 py-28 md:py-36">
        <div className="relative text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white uppercase break-words">Plasma CNC Cutting Machine</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">Plasma CNC Cutting Machine - Sharptrax Technologies</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <div className="w-full h-96 mb-4 flex items-center justify-center p-4 rounded-3xl shadow-lg border border-gray-300">
              <img
                key={currentImage}
                src={currentImage}
                alt="Plasma CNC Cutting Machine"
                className="w-full h-full object-contain rounded-lg transition-opacity duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${currentImage === thumb ? 'scale-105' : ''}`}
                  onClick={() => setCurrentImage(thumb)}
                >
                  <div className={`w-full h-24 flex items-center justify-center p-2 rounded-3xl shadow-lg border-2 ${currentImage === thumb ? 'border-orange-500' : 'border-transparent'}`}>
                    <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="prose lg:prose-lg max-w-none">
            <h2 className="text-3xl font-semibold text-gray-800">Plasma CNC Cutting Machine at Sharptrax Technologies</h2>
            <p className="text-gray-600">At Sharptrax Technologies, we specialize in trading high-quality Plasma CNC Cutting Machines designed for precision cutting, high-speed performance, and superior efficiency. Our Plasma CNC machines are ideal for industries requiring accurate metal cutting and automation.</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-2">
                <p className="text-base sm:text-lg">
                  <span className="font-semibold text-blue-500">High-Precision Cutting</span> - Delivers smooth, clean, and precise cuts with minimal wastage.
                </p>
              </li>
              <li className="flex items-start gap-2">
                <p className="text-base sm:text-lg">
                  <span className="font-semibold text-blue-500">CNC-Controlled Automation</span> - Ensures efficient and repeatable cuts with user-friendly programming.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlasmaCncCuttingPage;
