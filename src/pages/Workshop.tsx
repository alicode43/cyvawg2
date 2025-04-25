import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const workshops = [
  {
    id: 1,
    title: "Student Workshop",
    image: "/pics/t1.png",
    route: "/gallery/student-workshop",
    content: "Interactive workshops designed for students to understand and combat cyber violence. These sessions provide practical knowledge and tools for digital safety."
  },
  {
    id: 2,
    title: "Teacher Training Workshop",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    route: "/workshop",
    content: "Specialized training sessions for educators to identify, prevent, and address cyber violence in educational settings. Includes curriculum integration strategies and support resources."
  },
  {
    id: 3,
    title: "Parent Awareness Workshop",
    image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80",
    route: "/workshop",
    content: "Workshops designed to help parents understand digital risks, monitor online activity, and support their children in maintaining safe digital practices."
  },
  {
    id: 4,
    title: "Community Engagement Workshop",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    route: "/workshop",
    content: "Community-focused sessions that bring together various stakeholders to create collective solutions for cyber violence prevention."
  },
  {
    id: 5,
    title: "Digital Safety Workshop",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    route: "/workshop",
    content: "Comprehensive training on digital safety measures, privacy protection, and secure online practices."
  },
  {
    id: 6,
    title: "Professional Development Workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    route: "/workshop",
    content: "Advanced workshops for professionals working in cyber safety, law enforcement, and social services."
  }
];

const testimonials = [
  {
    id: 1,
    title: "Student Experience",
    videoId: "dQw4w9WgXcQ",
    description: "Hear from students about their experience with our digital safety workshops."
  },
  {
    id: 2,
    title: "Teacher Testimonial",
    videoId: "M7lc1UVf-VE",
    description: "Teachers share their insights on implementing cyber safety in schools."
  },
  {
    id: 3,
    title: "Parent Feedback",
    videoId: "eW2gNhYAQYw",
    description: "Parents discuss the impact of our workshops on family digital safety."
  }
];

// Gallery images data
const galleryImages = [
  { id: 1, url: "/pics/cyvawg-6.jpg", caption: "Workshop Activity 1" },
  { id: 2, url: "/pics/cyvawg-12.jpg", caption: "Group Discussion" },
  { id: 3, url: "/pics/cyvawg-43.jpg", caption: "Presentation Session" },
  { id: 4, url: "/pics/cyvawg-44.jpg", caption: "Q&A Session" },
  { id: 5, url: "/pics/cyvawg-45.jpg", caption: "Team Exercise" },
  { id: 6, url: "/pics/cyvawg-46.jpg", caption: "Final Presentation" }
];

export function Workshop() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // Function to handle image click
  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-12 text-center" style={{ color: '#610064' }}>Workshops</h1>
        
        {/* Featured Workshop - First Item */}
        <div className="mb-12">
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/gallery/student-workshop')}
          >
            <img 
              src={workshops[0].image}
              alt={workshops[0].title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold" style={{ color: '#610064' }}>{workshops[0].title}</h2>
              <p className="text-gray-700 mt-4">{workshops[0].content}</p>
            </div>
          </div>
        </div>

        {/* Grid of remaining workshops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {workshops.slice(1).map((workshop) => (
            <div 
              key={workshop.id}
              onClick={() => navigate(workshop.route)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative">
                <img 
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    {workshop.title}
                  </p>
                </div>
              </div>
              {workshop.content && (
                <div className="p-4">
                  <p className="text-gray-700 text-sm line-clamp-3">{workshop.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Gallery Section */}
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#610064' }}>Workshop Gallery</h2>
          
          {/* Masonry-style Gallery - Limited to 3 images */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.slice(0, 3).map((image) => (
              <div 
                key={image.id}
                className="break-inside-avoid-column cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onClick={() => handleImageClick(image)}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.caption} 
                    className="w-full"
                  />
                  <div className="p-4">
                    <p className="text-gray-800 font-medium text-center">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show More Button */}
          <div className="flex justify-center mt-8">
            <a 
              href="/gallery/workshop-gallery" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors duration-300"
            >
              Show More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4" 
              onClick={closeModal}
            >
              <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
                <button 
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-purple-700 transition-colors"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption}
                  className="w-full h-auto rounded-lg"
                />
                <div className="bg-white p-4 rounded-b-lg">
                  <p className="text-xl font-medium text-center text-gray-800">{selectedImage.caption}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: '#610064' }}>Workshop Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                    title={testimonial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#610064' }}>{testimonial.title}</h3>
                  <p className="text-gray-700">{testimonial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}