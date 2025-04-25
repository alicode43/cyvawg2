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


export function Workshop() {
  const navigate = useNavigate();
 

 


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

        {/* workshop 2 */}
        <div className="mb-12">
          <div 
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/gallery/student-workshop2')}
          >
            <img 
              src='/pdf/w2.png'
              // alt={workshops[1].title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold" style={{ color: '#610064' }}>Unmasking Cyber Violence: Awareness, Action & Advocacy</h2>
              <p className="text-gray-700 mt-4">A project focused on Cyber Violence Against Women & Girls, addressing online threats, harassment, and digital safety.
              </p>
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