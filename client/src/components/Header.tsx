import { Phone, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/logo.jpg" 
              alt="Go-To-Optical and Eye Care Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Mobile: Flags and Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Flags */}
            <div className="flex space-x-1 sm:space-x-2">
              <img 
                src="https://flagcdn.com/w40/us.png" 
                alt="English" 
                className="w-8 sm:w-10 h-6 sm:h-7 rounded-sm shadow-sm"
              />
              <img 
                src="https://flagcdn.com/w40/es.png" 
                alt="Español" 
                className="w-8 sm:w-10 h-6 sm:h-7 rounded-sm shadow-sm"
              />
            </div>
          </div>

          {/* Desktop: Call and Book buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+12145505005" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Online
            </a>
          </div>
        </div>

        {/* Mobile: Call and Book Online buttons below logo */}
        <div className="md:hidden pb-3">
          <div className="flex space-x-2">
            <a 
              href="tel:+12145505005" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-3 py-3 rounded-lg font-semibold text-center transition-colors duration-200 text-sm touch-manipulation"
            >
              <Phone className="w-4 h-4 mr-1 inline" />Call Us
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="flex-1 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-3 py-3 rounded-lg font-semibold text-center transition-colors duration-200 text-sm touch-manipulation"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
