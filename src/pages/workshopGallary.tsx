import React, { useState } from 'react';

export function WorkshopGallary() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  // Complete gallery images - expanded from the original set
  const galleryImages = [
    { id: 1, url: "/pics/1t.png", caption: "Workshop Session 1" },
    { id: 2, url: "/pics/t2.png", caption: "Group Activity" },
    { id: 3, url: "/pics/t3.png", caption: "Final Presentation" },
    { id: 4, url: "/pics/cyvawg-6.jpg", caption: "Workshop Activity" },
    { id: 5, url: "/pics/cyvawg-12.jpg", caption: "Group Discussion" },
    { id: 6, url: "/pics/cyvawg-43.jpg", caption: "Presentation Session" },
    { id: 7, url: "/pics/cyvawg-44.jpg", caption: "Q&A Session" },
    { id: 8, url: "/pics/cyvawg-45.jpg", caption: "Team Exercise" },
    { id: 9, url: "/pics/cyvawg-46.jpg", caption: "Final Presentation" }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                onClick={() => openLightbox(image)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={image.url}
                    alt={image.caption || `Workshop image ${image.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {image.caption && (
                  <div className="p-4">
                    <p className="text-gray-800 font-medium text-center">{image.caption}</p>
                  </div>
                )}
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