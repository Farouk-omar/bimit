import { Mail, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/ImageToStl.com_bim+it+logo2.PNG"
                alt="BIM IT Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold">BIM IT</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the Future with Information Modeling. We are a multidisciplinary team of architects & engineers specializing in BIM solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/training" className="text-gray-300 hover:text-white transition-colors text-sm">
                Training
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services?tab=project" className="text-gray-300 hover:text-white transition-colors text-sm">
                BIM IT Project
              </Link>
              <Link to="/services?tab=training" className="text-gray-300 hover:text-white transition-colors text-sm">
                BIM IT Training
              </Link>
              <Link to="/services?tab=management" className="text-gray-300 hover:text-white transition-colors text-sm">
                BIM IT Management
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+213 770 877 173</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contact@bimit.online</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">m.ahmed@bimit.online</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">bimit.online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2014-2026 BIM-IT. All rights reserved. Building the Future with Information Modeling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;