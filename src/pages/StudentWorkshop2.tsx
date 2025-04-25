import React, { useState, useEffect } from 'react';

export function StudentWorkshop2() {
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
console.log("Current page:", currentPage);
  
  // PDF file path
  const pdfFile = "/pdf/2.pdf";

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
  {/* <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
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
</div> */}
  

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