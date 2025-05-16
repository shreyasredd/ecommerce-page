
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-primary-500 text-xl font-bold">FinxBridge</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-neutral-600 hover:text-primary-500 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="#why-us" className="text-neutral-600 hover:text-primary-500 px-3 py-2 text-sm font-medium">
              Why Us
            </a>
            <a href="#contact" className="text-neutral-600 hover:text-primary-500 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Log In
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-primary-500 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#why-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5 space-x-3">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Log In
                </Button>
              </div>
              <div className="mt-3 px-5">
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
