import { Phone } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-blue-600 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Your Local Optometrist<br />
            Near You for Eye Exams,<br />
            Contacts & Glasses
          </h2>
          <p className="text-base sm:text-lg text-white max-w-4xl mx-auto leading-relaxed px-4">
            At Go-To-Optical and Eye Care, we are proud to provide comprehensive, primary eye care for the whole family. Our DFW optometrist, Dr. Joby, and our vision care team specialize in a full range of eye care services for women, men and children of all ages, such as
          </p>
          <ul className="text-base sm:text-lg text-white mt-4 sm:mt-6 space-y-1 sm:space-y-2 px-4">
            <li className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Comprehensive Eye Exams
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Contact Lenses
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Eyeglasses & Sunglasses
            </li>
            <li className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2 text-blue-200 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Management of Ocular Conditions
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 px-4">
            <a 
              href="tel:+12145505005" 
              className="bg-white text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 touch-manipulation"
            >
              <Phone className="w-4 h-4 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="bg-transparent text-white border-2 border-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 active:bg-gray-100 transition-colors duration-200 touch-manipulation"
            >
              Book Online
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/e7d1beb28d32c47924f7fa66a6f3707436c32f6a-450x285.webp?w=400&fm=webp" 
              alt="1 Hour Service" 
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">1 HOUR SERVICE + SAME DAY EXAMS</h3>
            <p className="text-sm sm:text-base text-gray-600">We offer one hour eyeglasses & same day eye exams & contact lens fittings.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/aa0d43fc4b520c0033e040af5114bd647c59a032-450x284.webp?w=400&fm=webp" 
              alt="Luxury Eyewear" 
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">EXCLUSIVE RETAILER OF LUXURY EYEWEAR</h3>
            <p className="text-sm sm:text-base text-gray-600">One of DFW's ONLY authorized retailers of Versace, Gucci, Prada and more.</p>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 sm:col-span-2 lg:col-span-1">
            <img 
              src="https://cdn.sanity.io/images/k0mgimab/production/ea9fbf7f6ca0a1c5beb630d3fb76a62d18e0e14f-450x284.webp?w=400&fm=webp" 
              alt="Lowest Prices" 
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">LOWEST PRICES IN DFW</h3>
            <p className="text-sm sm:text-base text-gray-600">$69 Eye Exam, 20% Off When You Book Online & More!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
