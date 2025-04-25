import React, { useState } from 'react';

export function WorkshopGallary() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  // Complete gallery images - expanded from the original set
  const galleryImages = [
    { id: 1, url: "/gallery image/cyvawg-1.jpg" },
    { id: 2, url: "/gallery image/cyvawg-2.jpg" },
    { id: 3, url: "/gallery image/cyvawg-3.jpg" },
    { id: 4, url: "/gallery image/cyvawg-4.jpg" },
    { id: 5, url: "/gallery image/cyvawg-5.jpg" },
    { id: 6, url: "/gallery image/cyvawg-6.jpg" },
    { id: 7, url: "/gallery image/cyvawg-7.jpg" },
    { id: 8, url: "/gallery image/cyvawg-8.jpg" },
    { id: 9, url: "/gallery image/cyvawg-9.jpg" },
    { id: 10, url: "/gallery image/cyvawg-10.jpg" },
    { id: 11, url: "/gallery image/cyvawg-11.jpg" },
    { id: 12, url: "/gallery image/cyvawg-12.jpg" },
    { id: 13, url: "/gallery image/cyvawg-13.jpg" },
    { id: 14, url: "/gallery image/cyvawg-14.jpg" },
    { id: 15, url: "/gallery image/cyvawg-15.jpg" },
    { id: 16, url: "/gallery image/cyvawg-16.jpg" },
    { id: 17, url: "/gallery image/cyvawg-17.jpg" },
    { id: 18, url: "/gallery image/cyvawg-18.jpg" },
    { id: 19, url: "/gallery image/cyvawg-19.jpg" },
    { id: 20, url: "/gallery image/cyvawg-20.jpg" },
    { id: 21, url: "/gallery image/cyvawg-21.jpg" },
    { id: 22, url: "/gallery image/cyvawg-22.jpg" },
    { id: 23, url: "/gallery image/cyvawg-23.jpg" },
    { id: 24, url: "/gallery image/cyvawg-24.jpg" },
    { id: 25, url: "/gallery image/cyvawg-25.jpg" },
    { id: 26, url: "/gallery image/cyvawg-26.jpg" },
    { id: 27, url: "/gallery image/cyvawg-27.jpg" },
    { id: 28, url: "/gallery image/cyvawg-28.jpg" },
    { id: 29, url: "/gallery image/cyvawg-29.jpg" },
    { id: 30, url: "/gallery image/cyvawg-30.jpg" },
    { id: 31, url: "/gallery image/cyvawg-31.jpg" },
    { id: 32, url: "/gallery image/cyvawg-32.jpg" },
    { id: 33, url: "/gallery image/cyvawg-33.jpg" },
    { id: 34, url: "/gallery image/cyvawg-34.jpg" },
    { id: 35, url: "/gallery image/cyvawg-35.jpg" },
    { id: 36, url: "/gallery image/cyvawg-36.jpg" },
    { id: 37, url: "/gallery image/cyvawg-37.jpg" },
    { id: 38, url: "/gallery image/cyvawg-38.jpg" },
    { id: 39, url: "/gallery image/cyvawg-39.jpg" },
    { id: 40, url: "/gallery image/cyvawg-40.jpg" },
    { id: 41, url: "/gallery image/cyvawg-41.jpg" },
    { id: 42, url: "/gallery image/cyvawg-42.jpg" },
    { id: 43, url: "/gallery image/cyvawg-43.jpg" },
    { id: 44, url: "/gallery image/cyvawg-44.jpg" },
    { id: 45, url: "/gallery image/cyvawg-45.jpg" },
    { id: 46, url: "/gallery image/cyvawg-46.jpg" },
    { id: 47, url: "/gallery image/cyvawg-47.jpg" },
    { id: 48, url: "/gallery image/cyvawg-48.jpg" },
    { id: 49, url: "/gallery image/cyvawg-49.jpg" },
    { id: 50, url: "/gallery image/cyvawg-50.jpg" },
    { id: 51, url: "/gallery image/cyvawg-51.jpg" },
    { id: 52, url: "/gallery image/cyvawg-52.jpg" },
    { id: 53, url: "/gallery image/cyvawg-53.jpg" },
    { id: 54, url: "/gallery image/cyvawg-54.jpg" },
  ];
  
  // Function to handle image click for lightbox
  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };
  
  // Function to close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">Workshop Gallery</h1>
        
        <div className="max-w-6xl mx-auto">
          {/* Gallery Description */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              Browse our collection of workshop images, featuring student activities, 
              group discussions, and presentations from our environmental awareness program.
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                onClick={() => openLightbox(image)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={image.url}
                    alt="workshop image"
                    className="w-full h-full object-cover"
                  />
                </div>
     
              </div>
            ))}
          </div>
          
          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div 
                className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white bg-purple-600 rounded-full p-2 hover:bg-purple-700 transition-colors"
                  onClick={closeLightbox}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption || ''}
                  className="w-full h-auto"
                />
                {selectedImage.caption && (
                  <div className="p-4 bg-white">
                    <p className="text-xl text-gray-800 font-medium text-center">{selectedImage.caption}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}