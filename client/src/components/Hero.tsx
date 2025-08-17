import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Hero Content */}
          <div className="text-center py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center px-2">
              <span className="text-orange-400">#1 EYE EXAM</span><br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Near You DFW</span><br />
              <span className="text-orange-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">20% OFF</span><br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">If CALL or BOOK</span><br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">ONLINE</span>
            </h1>
            
            <div className="flex flex-col gap-4 mb-6 px-4">
              <a 
                href="tel:+12145505005" 
                className="group relative bg-gradient-to-r from-white to-gray-50 text-blue-600 px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-center touch-manipulation border-2 border-transparent hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="w-5 h-5 mr-2 inline relative z-10" />
                <span className="relative z-10">Call Us</span>
              </a>
              <a 
                href="https://scheduleyourexam.com/v3/index.php/9227/" 
                className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-center touch-manipulation border-2 border-transparent hover:border-orange-400"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Book Online</span>
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
                  className="group relative bg-gradient-to-r from-white to-gray-50 text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-center border-2 border-transparent hover:border-blue-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone className="w-5 h-5 mr-2 inline relative z-10" />
                  <span className="relative z-10">Call Us</span>
                </a>
                <a 
                  href="https://scheduleyourexam.com/v3/index.php/9227/" 
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 text-center border-2 border-transparent hover:border-orange-400"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Book Online</span>
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
