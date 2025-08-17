import { Phone, Calendar, Scissors } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      price: "$69",
      title: "Basic eye exam",
      features: [
        "vision test",
        "Prescription", 
        "Eye health screening"
      ]
    },
    {
      price: "$89",
      title: "Complete eye exam",
      features: [
        "all basic tests",
        "Retinal imaging"
      ]
    },
    {
      price: "$99",
      title: "Premium eye exam",
      features: [
        "all tests",
        "Standard contact lens fitting",
        "Glasses prescription"
      ]
    },
    {
      price: "$119",
      title: "Full eye care package",
      features: [
        "exam",
        "Specialized contact lens fitting",
        "Glasses prescription"
      ]
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          {/* Store Image Section - Mobile Optimized */}
          <div className="mb-6 sm:mb-8 bg-blue-800 p-4 sm:p-8 rounded-xl">
            <img 
              src="/assets/store-interior.webp?v=6" 
              alt="Go-To-Optical and Eye Care Store Interior" 
              className="w-full mx-auto rounded-xl shadow-lg object-contain"
              style={{ 
                maxHeight: '500px',
                width: '100%',
                maxWidth: '800px',
                minWidth: 'auto'
              }}
            />
          </div>
          
          {/* Specials Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">Our Specials</h2>
          <p className="text-base sm:text-lg text-gray-700">Eye exam without glasses purchase</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center border-2 border-dashed border-blue-300 hover:shadow-xl transition-shadow duration-200">
              {/* Scissors Icon */}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                <Scissors className="w-4 h-4" />
              </div>
              
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
              <div className="text-sm sm:text-base font-semibold text-gray-900 mb-3">{plan.title}</div>
              
              <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://scheduleyourexam.com/v3/index.php/9227/" 
                className="bg-white text-blue-600 border-2 border-blue-600 px-4 sm:px-6 py-3 sm:py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 w-full block touch-manipulation flex items-center justify-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Online
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="tel:+12145505005" 
              className="bg-blue-600 text-white px-8 sm:px-10 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 touch-manipulation"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 sm:px-10 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 touch-manipulation"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
