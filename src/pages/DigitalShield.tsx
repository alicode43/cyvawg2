import React from 'react';
import { Download } from 'lucide-react';

export function DigitalShield() {
  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6" style={{ color: '#610064' }}>
            Digital Shield
          </h1>

          {/* Main Image Under Heading */}
          <img 
            src="/pics/1.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="\pics\2.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/3.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/4.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/5.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/6.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/7.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/8.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/9.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/10.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/11.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />
          {/* Main Image Under Heading */}
          <img 
            src="/pics/12.png"
            alt="Digital Shield Main Visual"
            className="w-2/3 mx-auto h-auto rounded-lg shadow-lg mb-10"
          />

          {/* Download Button */}
          <div className="flex justify-center">
            <button 
              className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              onClick={() => window.open('/toolkits/digital-shield.pdf', '_blank')}
            >
              <Download className="h-5 w-5" />
              <span>Download Digital Shield Guide</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}