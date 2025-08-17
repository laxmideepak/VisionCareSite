import { Phone, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/901ae8c133e287f7e42765e39573b8a7f1a6246e-768x277.webp?h=80&fm=webp" 
              alt="Mi Vision Eye Care Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+12109232020" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://book2.getweave.com/dfa1826b-79a3-4a2c-9020-f6ee57b08b82/request-appointment" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Book Online
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
