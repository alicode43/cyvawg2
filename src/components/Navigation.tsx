import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Home, ChevronDown, ChevronUp } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkshopDropdownOpen, setIsWorkshopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWorkshopDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle workshop dropdown
  const toggleWorkshopDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWorkshopDropdownOpen(!isWorkshopDropdownOpen);
  };

  return (
    <nav className="text-white px-6 py-4" style={{ backgroundColor: '#610064' }}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80" style={{ color: '#ffffff' }}>
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">CyVAWG</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:opacity-80 transition-colors" style={{ color: '#ffffff' }}>
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/case-stories" className="hover:opacity-80 transition-colors" style={{ color: '#ffffff' }}>
              Case Studies
            </Link>
            <Link to="/toolkit" className="hover:opacity-80 transition-colors" style={{ color: '#ffffff' }}>
              Tool Kit
            </Link>
            
            {/* Workshop dropdown - Desktop */}
            <div className="relative" ref={dropdownRef}>
              <a 
                href="#" 
                onClick={toggleWorkshopDropdown}
                className="hover:opacity-80 transition-colors flex items-center"
                style={{ color: '#ffffff' }}
              >
                <span>Workshop</span>
                {isWorkshopDropdownOpen ? 
                  <ChevronUp className="h-4 w-4 ml-1" /> : 
                  <ChevronDown className="h-4 w-4 ml-1" />
                }
              </a>
              
              {/* Desktop dropdown menu */}
              {isWorkshopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <Link 
                      to="/workshop" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                      onClick={() => setIsWorkshopDropdownOpen(false)}
                    >
                      Workshop Home
                    </Link>
                    <Link 
                      to="/gallery/workshop-gallery" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                      onClick={() => setIsWorkshopDropdownOpen(false)}
                    >
                      Photo Gallery
                    </Link>
                    <a
                      href="https://us5.campaign-archive.com/?u=68bdd47429d46bef88c3c9249&id=0aef10be7e" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                      onClick={() => setIsWorkshopDropdownOpen(false)}
                    >
                      Articles
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/resources" className="hover:opacity-80 transition-colors" style={{ color: '#ffffff' }}>
              Support
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:opacity-80 transition-colors"
              style={{ color: '#ffffff' }}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/case-stories" 
              className="block hover:opacity-80 transition-colors"
              style={{ color: '#ffffff' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Case Story
            </Link>
            <Link 
              to="/toolkit" 
              className="block hover:opacity-80 transition-colors"
              style={{ color: '#ffffff' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Tool Kit
            </Link>
            
            {/* Workshop dropdown - Mobile */}
            <div>
              <button
                onClick={() => setIsWorkshopDropdownOpen(!isWorkshopDropdownOpen)}
                className="flex items-center justify-between w-full hover:opacity-80 transition-colors"
                style={{ color: '#ffffff' }}
              >
                <span>Workshop</span>
                {isWorkshopDropdownOpen ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </button>
              
              {/* Mobile dropdown menu */}
              {isWorkshopDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-purple-300">
                  <Link 
                    to="/workshop" 
                    className="block hover:opacity-80 transition-colors"
                    style={{ color: '#ffffff' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Workshop Home
                  </Link>
                  <Link 
                    to="/gallery/workshop-gallery" 
                    className="block hover:opacity-80 transition-colors"
                    style={{ color: '#ffffff' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Photo Gallery
                  </Link>
                  <a
                    href="https://us5.campaign-archive.com/?u=68bdd47429d46bef88c3c9249&id=0aef10be7e" 
                    className="block hover:opacity-80 transition-colors"
                    style={{ color: '#ffffff' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Articles
                  </a>
                </div>
              )}
            </div>
            
            <Link 
              to="/resources" 
              className="block hover:opacity-80 transition-colors"
              style={{ color: '#ffffff' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}