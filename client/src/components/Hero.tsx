import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Hero Content */}
          <div className="text-center py-6 sm:py-8">
            {/* Logo for mobile hero */}
            <div className="mb-4 sm:mb-6">
              <img 
                src="/assets/logo.jpg" 
                alt="GoTo Optical Logo" 
                className="h-10 sm:h-12 w-auto mx-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-4 text-center px-2">
              <span className="text-orange-400">#1 EYE EXAM</span><br />
              Near You DFW<br />
              <span className="text-orange-400 text-2xl sm:text-3xl md:text-4xl font-bold">20% OFF</span><br />
              <span className="text-lg sm:text-xl md:text-2xl">If CALL or BOOK</span><br />
              <span className="text-lg sm:text-xl md:text-2xl">ONLINE</span>
            </h1>
            
            <div className="flex flex-col gap-3 mb-6 px-4">
              <a 
                href="tel:+12145505005" 
                className="bg-primary-700 border-2 border-white text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 active:bg-primary-900 transition-colors duration-200 text-center touch-manipulation"
              >
                <Phone className="w-5 h-5 mr-2 inline" />Call Us
              </a>
              <a 
                href="https://scheduleyourexam.com/v3/index.php/9227/" 
                className="bg-white text-primary-600 px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 text-center touch-manipulation"
              >
                Book Online
              </a>
            </div>
            
            <p className="text-xs text-blue-100 px-4 mb-6 leading-relaxed">
              (From any frames on stock. Not valid with insurance or other promotions.)
            </p>
            
            {/* Mobile Hero Image */}
            <div className="px-4">
              <img 
                src="https://cdn.sanity.io/images/k0mgimab/production/053d631bc9652e9f43a5234eeb9cea538fc071e6-1080x1080.webp?w=400&fm=webp" 
                alt="Eye care professional" 
                className="rounded-xl w-full max-w-sm mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6 text-center lg:text-left">
                <span className="text-orange-400">#1 EYE EXAM</span><br />
                <span className="text-2xl lg:text-4xl">Near You DFW</span><br />
                <span className="text-orange-400 text-4xl lg:text-6xl font-bold">20% OFF</span><br />
                <span className="text-xl lg:text-3xl">If CALL or BOOK</span><br />
                <span className="text-xl lg:text-3xl">ONLINE</span>
              </h1>
              <p className="text-sm mb-8 text-blue-100">(From any frames on stock. Not valid with insurance or other promotions.)</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+12145505005" 
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />Call Us
                </a>
                <a 
                  href="https://scheduleyourexam.com/v3/index.php/9227/" 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors duration-200 text-center"
                >
                  Book Online
                </a>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://cdn.sanity.io/images/k0mgimab/production/053d631bc9652e9f43a5234eeb9cea538fc071e6-1080x1080.webp?w=540&fm=webp" 
                alt="Eye care professional with patient" 
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
