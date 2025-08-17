import { Phone } from "lucide-react";

export default function Pricing() {
  const pricingPlans = [
    {
      price: "$69",
      features: [
        "• Basic eye exam includes vision test",
        "• Prescription", 
        "• Eye health screening"
      ]
    },
    {
      price: "$89",
      features: [
        "• Complete eye exam includes all basic tests",
        "• Retinal imaging"
      ]
    },
    {
      price: "$99",
      features: [
        "• Premium eye exam includes all tests",
        "• Standard contact lens fitting",
        "• Glasses prescription"
      ]
    },
    {
      price: "$119",
      features: [
        "• Full eye care package includes exam",
        "• Specialized contact lens fitting",
        "• Glasses prescription"
      ]
    }
  ];

  return (
    <section className="bg-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          {/* Store Image Section - Mobile Optimized */}
          <div className="mb-6 sm:mb-8 bg-blue-800 p-4 sm:p-8 rounded-xl">
            <img 
              src="/assets/store-interior.webp?v=6" 
              alt="GoTo Optical Store Interior" 
              className="w-full mx-auto rounded-xl shadow-lg object-contain"
              style={{ 
                maxHeight: '300px',
                width: '100%',
                maxWidth: '100%',
                minWidth: 'auto'
              }}
            />
          </div>
          
          {/* Specials Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Specials</h2>
          <p className="text-base sm:text-lg text-gray-600">Eye exam without glasses purchase</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-200">
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-3 sm:mb-4">{plan.price}</div>
              <ul className="text-sm sm:text-base text-gray-700 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <a 
                href="https://scheduleyourexam.com/v3/index.php/9227/" 
                className="bg-primary-600 text-white px-4 sm:px-6 py-3 sm:py-3 rounded-lg font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 w-full block touch-manipulation"
              >
                Book Online
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="tel:+12145505005" 
              className="bg-primary-600 text-white px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 touch-manipulation"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />Call Us
            </a>
            <a 
              href="https://scheduleyourexam.com/v3/index.php/9227/" 
              className="bg-orange-500 text-white px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200 touch-manipulation"
            >
              Book Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
