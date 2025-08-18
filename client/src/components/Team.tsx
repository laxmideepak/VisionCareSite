import { Medal, Clock, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
  const { t } = useLanguage();
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
              {t('ourTeam')}
            </h2>
            
            {/* Decorative underline */}
            <div className="w-24 h-1 bg-gray-300 mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              {t('teamDescription')}
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
              <h4 className="text-base sm:text-lg text-blue-600 font-semibold mb-3 sm:mb-4">{t('therapeuticOptometrist')}</h4>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                {t('drJobyBio')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 flex-grow">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h5 className="font-semibold text-gray-900 text-sm mb-2 flex items-center">
                    <Medal className="w-4 h-4 mr-2 text-gray-600" />
                    {t('specialties')}
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
                  <h5 className="font-semibold text-gray-900 text-sm mb-2">{t('education')}</h5>
                  <p className="text-gray-700 text-xs mb-3">{t('doctorOfOptometry')}</p>
                  
                  <h5 className="font-semibold text-gray-900 text-sm mb-2">{t('certifications')}</h5>
                  <p className="text-gray-700 text-xs mb-3">{t('therapeuticOptometrist')}</p>
                  
                  <h5 className="font-semibold text-gray-900 text-sm mb-2">{t('languages')}</h5>
                  <p className="text-gray-700 text-xs">{t('englishAndSpanish')}</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-gray-100 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Clock className="text-gray-600 w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-900 leading-tight">{t('yearsOfExperience')}</div>
                  </div>
                  <div className="text-center p-3 bg-gray-100 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <Languages className="text-gray-600 w-5 h-5 mx-auto mb-2" />
                    <div className="text-xs font-semibold text-gray-900 leading-tight">{t('seHablaEspanol')}</div>
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">
                    {t('scheduleExam')}
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