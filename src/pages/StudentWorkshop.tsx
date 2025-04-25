import React, { useState, useEffect } from 'react';

export function StudentWorkshop() {
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
console.log("Current page:", currentPage);
  
  // PDF file path
  const pdfFile = "/pdf/1.pdf";

  // Workshop images
  // const workshopImages = [
  //   { id: 1, url: "/pics/1t.png", caption: "Workshop Session 1" },
  //   { id: 2, url: "/pics/t2.png", caption: "Group Activity" },
  //   { id: 3, url: "/pics/t3.png", caption: "Final Presentation" },
  // ];
  
  // Check if PDF is loaded
  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.onload = () => {
        setIsLoading(false);
        // Attempt to get page info - this may not work due to cross-origin restrictions
        try {
          const iframeDoc = iframe.contentWindow?.document;
          const pageInfo = iframeDoc?.querySelector('.page');
          if (pageInfo) {
            const pageLabel = pageInfo.getAttribute('data-page-label');
            if (pageLabel) {
              setCurrentPage(parseInt(pageLabel));
            }
          }
        } catch (e) {
          console.log(e)
          console.log("Could not access iframe content due to security restrictions");
        }
      };
    }
  }, []);

  // Function to attempt accessing iframe document
 
  // Navigation functions
 

  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">Student Workshop Materials</h1>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">Workshop PDF Document</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                View the complete workshop document below. Use the controls to navigate, zoom, download, or view fullscreen.
              </p>
              
              {/* PDF Viewer with enhanced interactive controls */}
              <div className="pdf-container">
                {pdfError ? (
                  <div className="text-red-500 p-4 border border-red-200 rounded bg-red-50">
                    {pdfError}
                  </div>
                ) : (
                  <div className="flex flex-col">
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                          <p className="mt-4 text-gray-700 font-medium">Loading PDF document...</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative w-full h-[700px] border border-gray-300 rounded-t-lg overflow-hidden">
                      <iframe 
                        src={pdfFile}
                        className="w-full h-full"
                        title="Workshop PDF"
                        onError={() => {
                          setPdfError("Failed to load PDF. Please check if the file exists or try again later.");
                          setIsLoading(false);
                        }}
                      />
                    </div>
                    
                    {/* Primary Controls Panel */}
                    <div className="bg-gray-100 border-x border-b border-gray-300 p-4">
                      {/* Page Navigation */}
                      <div className="flex justify-between items-center mb-4">
              
                        
              
                      </div>
                      
                      {/* Secondary Controls */}
                 
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

 <div>
 <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
  <h2 className="text-2xl font-bold text-purple-900 mb-4">Workshop Video</h2>
  <p className="text-gray-700 leading-relaxed mb-6">
    Watch our recorded workshop session to get a better understanding of the topics covered and activities performed.
  </p>
  
  {/* Responsive YouTube embed */}
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
  <iframe 
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/nZTNwCVTgHA" 
    title="Workshop Recording"
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

<br />
<br />
  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
  <iframe 
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/eH5xtEoFx0U?si=65bBr5TeQ_Q9UcG3" 
    title="Workshop Recording"
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>
  

</div>
 </div>

 <div>
{/* LinkedIn Article Preview Section */}
<div className="mt-12 bg-white rounded-lg shadow-lg p-6">
  <h2 className="text-2xl font-bold text-purple-900 mb-4">Related Resource</h2>
  <p className="text-gray-700 leading-relaxed mb-6">
    Check out this insightful LinkedIn article related to our workshop topic:
  </p>
  
  {/* LinkedIn Post Preview Card */}
  <a 
    href="https://www.linkedin.com/pulse/unmasking-cyber-violence-urgent-need-action-anitha-chinnaswamy-jgrce/?trackingId=9Deqm1DGQCKHi8LcKcvSxw%3D%3D" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block"
  >
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* LinkedIn Header */}
      <div className="bg-[#0077b5] p-3 flex items-center">
        <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        <span className="ml-2 text-white font-medium">LinkedIn Article</span>
      </div>
      
      {/* Preview Content */}
      <div className="p-4">
        <div className="flex items-start">
          {/* <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            <img 
              src="https://media.licdn.com/dms/image/D4E03AQE6VYoZSkC9dw/profile-displayphoto-shrink_100_100/0/1683538625518?e=1730332800&v=beta&t=em_An272QIa9JTdlUSPZ2l6ShFmgazWS2KQHAztfeh8" 
              alt="Anitha Chinnaswamy" 
              className="h-full w-full object-cover"
            />
          </div> */}
          <div className="ml-3">
            <p className="font-semibold text-gray-900">Anitha Chinnaswamy</p>
            <p className="text-sm text-gray-500">Associate Professor | Digital Trust & Cybersecurity | DEI Researcher</p>
          </div>
        </div>
        
        <h3 className="mt-4 font-bold text-xl text-gray-900">Unmasking Cyber Violence: The Urgent Need for Action</h3>
        
        <p className="mt-2 text-gray-700 line-clamp-3">
          In today's digital landscape, cyber violence has emerged as a significant threat, particularly affecting women and girls. This article explores the urgent need for comprehensive approaches to combat online harassment, digital safety education, and policy interventions.
        </p>
        
        {/* <div className="mt-4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded overflow-hidden">
            <img 
              src="https://media.licdn.com/dms/image/D4E12AQHjn7QYD-jQow/article-cover_image-shrink_600_2000/0/1691498246008?e=2147483647&v=beta&t=njfvt2NEhaHJur-xXDgGJVoq3lAvgGcrGPaB-jWdZgo" 
              alt="Cyber Violence Article Cover" 
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}
        
        <div className="mt-4 flex items-center text-gray-500">
          <span>Read the full article on LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </a>
</div>

 </div>



          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Workshop Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  This workshop is designed to introduce students to environmental awareness and practical cleanup techniques. 
                  Through a combination of theory and hands-on activities, participants will gain valuable knowledge about 
                  environmental conservation and sustainable practices.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Key Learning Objectives</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Understand the importance of environmental conservation</li>
                  <li>Learn proper waste segregation and recycling techniques</li>
                  <li>Develop practical skills for community cleanup initiatives</li>
                  <li>Create awareness about sustainable living practices</li>
                  <li>Implement environmental best practices in daily life</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Materials Provided</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Workshop handbook (PDF downloadable above)</li>
                  <li>Safety equipment for practical sessions</li>
                  <li>Recyclable materials for demonstrations</li>
                  <li>Certificate of participation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}