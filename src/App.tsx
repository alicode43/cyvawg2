// import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Instagram, Phone } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { CaseStories } from './pages/CaseStories';
import { Toolkit } from './pages/Toolkit';
import { AndrewTateToolkit } from './pages/AndrewTateToolkit';
import { DigitalSafetyToolkit } from './pages/DigitalSafetyToolkit';
import { HarassmentPreventionToolkit } from './pages/HarassmentPreventionToolkit';
import { CyberbullyingToolkit } from './pages/CyberbullyingToolkit';
import { SocialMediaToolkit } from './pages/SocialMediaToolkit';
import { DigitalWellnessToolkit } from './pages/DigitalWellnessToolkit';
import { Workshop } from './pages/Workshop';
import { Resources } from './pages/Resources';
import { Gallery } from './pages/Gallery';
import { DigitalShield } from './pages/DigitalShield';
import { StudentWorkshop } from './pages/StudentWorkshop';
import { StudentWorkshop2 } from './pages/StudentWorkshop2';
import { WorkshopGallary } from './pages/workshopGallary';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-stories" element={<CaseStories />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/toolkit/digital-shield" element={<DigitalShield />} />
          <Route path="/toolkit/andrew-tate" element={<AndrewTateToolkit />} />
          <Route path="/toolkit/digital-safety" element={<DigitalSafetyToolkit />} />
          <Route path="/toolkit/harassment-prevention" element={<HarassmentPreventionToolkit />} />
          <Route path="/toolkit/cyberbullying" element={<CyberbullyingToolkit />} />
          <Route path="/toolkit/social-media" element={<SocialMediaToolkit />} />
          <Route path="/toolkit/digital-wellness" element={<DigitalWellnessToolkit />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/student-workshop" element={<StudentWorkshop />} />
          <Route path="/gallery/student-workshop2" element={<StudentWorkshop2 />} />
          <Route path="/gallery/workshop-gallery" element={<WorkshopGallary />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="text-white py-8 md:py-12" style={{ backgroundColor: '#610064' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:contact@cyvawg.org" className="hover:opacity-80">contact@cyvawg.org</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+441234567890" className="hover:opacity-80">+44 123 456 7890</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>123 Digital Safety Street, Cyber City</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:opacity-80">Emergency Support</a></li>
                <li><a href="#" className="hover:opacity-80">Report Abuse</a></li>
                {/* <li><Link to="/gallery" className="hover:opacity-80">Photo Gallery</Link></li> */}
                <li><a href="#" className="hover:opacity-80">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-80">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="http://linkedin.com/in/anithachinnaswamy" className="hover:opacity-80">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-800 text-center">
            <p>&copy; 2024 CyVAWG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
