import { Medal, Clock, Languages } from "lucide-react";

export default function Team() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">OUR TEAM</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            We are a dedicated team of eye care professionals obsessed with customer satisfaction, 100% locally owned business so you can trust that our decisions will be always made in your best personal interest and not those of corporations or optical retails. If you are looking for an experienced and caring DFW optometrist that listens your concerns about your visual health, you just found one of the best eye care centers in DFW. Todos aquí hablamos perfectamente espeñol y estamos para servirlos en su idioma.
          </p>
          <img 
            src="/assets/team-photo-new.jpg" 
            alt="Go-To-Optical and Eye Care Team" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-12 sm:mt-16">
          <div className="flex justify-center order-2 lg:order-1">
            <img 
              src="/assets/dr-joby.webp" 
              alt="Dr. Joby, OD - Therapeutic Optometrist" 
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
              style={{ height: '400px', maxHeight: 'min(400px, 60vh)' }}
            />
          </div>
          <div className="flex flex-col h-full order-1 lg:order-2" style={{ minHeight: '400px' }}>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Dr. Joby, OD</h3>
              <h4 className="text-base sm:text-lg text-primary-600 font-semibold mb-3 sm:mb-4">Therapeutic Optometrist</h4>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                Dr. Joby is a dedicated Therapeutic Optometrist with extensive experience in comprehensive eye care, specializing in eye examinations, contact lens fittings, and the management of ocular diseases. With a strong foundation in therapeutic optometry and a commitment to staying current with the latest advancements in technology and treatment, Dr. Joby ensures every patient receives personalized, patient-centered care. Known for taking the time to understand each individual's unique needs, Dr. Joby is devoted to helping patients achieve optimal vision and long-term eye wellness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 flex-grow">
                <div className="bg-primary-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">Specialties</h5>
                  <ul className="text-gray-700 text-xs space-y-0.5">
                    <li>• Comprehensive Eye Exams</li>
                    <li>• Contact Lens Fitting</li>
                    <li>• Ocular Disease Management</li>
                    <li>• Therapeutic Optometry</li>
                  </ul>
                </div>
                
                <div className="bg-primary-50 p-3 rounded-lg">
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">Education</h5>
                  <p className="text-gray-700 text-xs">Doctor of Optometry</p>
                  
                  <h5 className="font-semibold text-gray-900 text-sm mb-1 mt-3">Certifications</h5>
                  <p className="text-gray-700 text-xs">Therapeutic Optometrist</p>
                  
                  <h5 className="font-semibold text-gray-900 text-sm mb-1 mt-3">Languages</h5>
                  <p className="text-gray-700 text-xs">English</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-center p-2 bg-primary-50 rounded-lg">
                    <Clock className="text-primary-600 w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-900 leading-tight" style={{ fontSize: '10px' }}>Years of Experience</div>
                  </div>
                  <div className="text-center p-2 bg-primary-50 rounded-lg">
                    <Languages className="text-primary-600 w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-900 leading-tight" style={{ fontSize: '10px' }}>Se Habla Español!</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  Schedule your exam with our optometrist in DFW!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}