import { Medal, Clock, Languages } from "lucide-react";

export default function Team() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="relative mb-8 sm:mb-12">
            <img 
              src="/assets/team-photo-new.jpg" 
              alt="Go-To-Optical and Eye Care Team" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />

          </div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              OUR TEAM
            </h2>
            
            {/* Decorative underline */}
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              We are a dedicated team of eye care professionals obsessed with customer satisfaction, 100% locally owned business so you can trust that our decisions will be always made in your best personal interest and not those of corporations or optical retails. If you are looking for an experienced and caring DFW optometrist that listens your concerns about your visual health, you just found one of the best eye care centers in DFW. Todos aquí hablamos perfectamente espeñol y estamos para servirlos en su idioma.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12 sm:mt-16">
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative group">
              <img 
                src="/assets/dr-joby.webp" 
                alt="Dr. Joby, OD - Therapeutic Optometrist" 
                className="w-full max-w-lg rounded-2xl shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                style={{ height: '600px', maxHeight: 'min(600px, 80vh)' }}
              />

            </div>
          </div>
          <div className="flex flex-col h-full order-2 lg:order-2" style={{ minHeight: '600px' }}>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200 flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Dr. Joby, OD</h3>
              <h4 className="text-base sm:text-lg text-blue-600 font-semibold mb-3 sm:mb-4">Therapeutic Optometrist</h4>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Dr. Joby is a dedicated Therapeutic Optometrist with extensive experience in comprehensive eye care, specializing in eye examinations, contact lens fittings, and the management of ocular diseases. With a strong foundation in therapeutic optometry and a commitment to staying current with the latest advancements in technology and treatment, Dr. Joby ensures every patient receives personalized, patient-centered care. Known for taking the time to understand each individual's unique needs, Dr. Joby is devoted to helping patients achieve optimal vision and long-term eye wellness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 flex-grow">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h5 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
                    <Medal className="w-4 h-4 mr-2 text-gray-600" />
                    Specialties
                  </h5>
                  <ul className="text-gray-700 text-xs space-y-1">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
                      Comprehensive Eye Exams
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
                      Contact Lens Fitting
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
                      Ocular Disease Management
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
                      Therapeutic Optometry
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h5 className="font-semibold text-gray-900 text-sm mb-2">Education</h5>
                  <p className="text-gray-700 text-xs mb-3">Doctor of Optometry</p>
                  
                  <h5 className="font-semibold text-gray-900 text-sm mb-2">Certifications</h5>
                  <p className="text-gray-700 text-xs mb-3">Therapeutic Optometrist</p>
                  
                  <h5 className="font-semibold text-gray-900 text-sm mb-2">Languages</h5>
                  <p className="text-gray-700 text-xs">English & Spanish</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-gray-100 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Clock className="text-gray-600 w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-900 leading-tight">Years of Experience</div>
                  </div>
                  <div className="text-center p-3 bg-gray-100 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Languages className="text-gray-600 w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-900 leading-tight">Se Habla Español!</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">
                    Schedule your exam with our optometrist in DFW!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}