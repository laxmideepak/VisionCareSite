import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="bg-primary-600 text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2">
            Schedule Your Eye Exam Now<br />
            <span className="text-orange-400">20% OFF IF CALL OR BOOK ONLINE</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="tel:+12145505005" 
              className="bg-white text-primary-600 px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 touch-manipulation"
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
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Book Your Exam Appointment Online</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                We are centrally located at <a 
                  href="https://maps.google.com/?q=4396+Dallas+Fort+Worth+Turnpike+Ste+107,+Dallas,+TX+75211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline transition-colors duration-200"
                >4396 Dallas Fort Worth Turnpike Ste 107, Dallas, TX 75211</a>, which means you won't have to drive far to see an eye doctor nearest you on the same day. Book your appointment online!
              </p>
              <a 
                href="https://scheduleyourexam.com/v3/index.php/9227/" 
                className="bg-primary-600 text-white px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200 inline-block mb-6 sm:mb-8 touch-manipulation"
              >
                Book Online
              </a>
              <div className="mb-6 sm:mb-8">
                <p className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">We accept now</p>
                <img 
                  src="https://cdn.sanity.io/images/k0mgimab/production/967001f910f51522237ce2bc81e317b4f5fe9929-1000x80.webp?fm=webp" 
                  alt="Accepted Insurance" 
                  className="w-full max-w-2xl"
                />
              </div>
            </div>
            <div className="text-center order-1 lg:order-2">
              <img 
                src="/assets/store-front.webp" 
                alt="GoTo Optical Store Front" 
                className="w-full max-w-md mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Schedule Your Eye Exam Now<br />
            <span className="text-orange-500">20% OFF IF CALL OR BOOK ONLINE</span>
          </h2>
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
      </section>
    </>
  );
}
