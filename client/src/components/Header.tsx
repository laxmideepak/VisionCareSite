import { Phone, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
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
              <button
                onClick={() => setLanguage('en')}
                className={`transition-all duration-200 ${language === 'en' ? 'ring-2 ring-blue-500 scale-110' : 'hover:scale-105'}`}
              >
                <img 
                  src="https://flagcdn.com/w40/us.png" 
                  alt="English" 
                  className="w-8 sm:w-10 h-6 sm:h-7 rounded-sm shadow-sm"
                />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`transition-all duration-200 ${language === 'es' ? 'ring-2 ring-blue-500 scale-110' : 'hover:scale-105'}`}
              >
                <img 
                  src="https://flagcdn.com/w40/es.png" 
                  alt="Español" 
                  className="w-8 sm:w-10 h-6 sm:h-7 rounded-sm shadow-sm"
                />
              </button>
            </div>
          </div>

          {/* Desktop: Call and Book buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+12145505005" 
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-4 h-4 mr-2 inline relative z-10" />
              <span className="relative z-10">{t('callUs')}</span>
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border-2 border-transparent hover:border-orange-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{t('bookOnline')}</span>
            </a>
          </div>
        </div>

        {/* Mobile: Call and Book Online buttons below logo */}
        <div className="md:hidden pb-3">
          <div className="flex space-x-2">
            <a 
              href="tel:+12145505005" 
              className="group relative flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-3 rounded-xl font-semibold text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm touch-manipulation border-2 border-transparent hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="w-4 h-4 mr-1 inline relative z-10" />
              <span className="relative z-10">{t('callUs')}</span>
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="group relative flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-3 rounded-xl font-semibold text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm touch-manipulation border-2 border-transparent hover:border-orange-400"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{t('bookOnline')}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
